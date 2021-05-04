import React from 'react'

import { Client } from '../../prismic-configuration'
import { SliceZone } from '../../components'
import { queryRepeatableDocuments } from '../../utils/queries'
import ArticleHeader from '../../components/ArticleHeader'

const Article = ({ doc }) => {
  if(!doc) return <div>Loading</div>
  // console.log(doc)
  if (doc && doc.data) {
    return (
        <div className='container mx-auto items-center justify-center max-w-5xl py-12 '>
            <ArticleHeader 
              title={doc.data.article_title} 
              date={doc.data.article_date} 
              image={doc.data.header_image} 
            />
            <SliceZone sliceZone={doc.data.body} />
        </div>
    )
  }
  return null;
}

export default Article


export async function getStaticProps({ params, preview = null, previewData = {} }) {
  
    const { ref } = previewData
    const client = Client();
    const doc = await client.getByUID('article', params.uid, ref ? { ref } : null) || {}
  
    return {
      props: {
        preview,
        doc,
      },
      revalidate: 1,
    }
  }

  export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments((doc) => doc.type === 'article')
    return {
      paths: documents.map(doc => `/article/${doc.uid}`),
      fallback: true,
    }
  }