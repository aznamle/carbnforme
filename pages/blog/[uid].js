import React from 'react'

import { Client } from '../../prismic-configuration'
import { SliceZone } from '../../components'
import { queryRepeatableDocuments } from '../../utils/queries'
import ArticleHeader from '../../components/ArticleHeader'

const Blog = ({ doc }) => {
  if(!doc) return <div>Loading</div>
  if (doc && doc.data) {
    return (
        <div className='items-center justify-center max-w-5xl py-12'>
            <ArticleHeader 
              title={doc.data.blog_title} 
              date={doc.data.blog_date} 
              image={doc.data.header_image.url} 
            />
            <SliceZone sliceZone={doc.data.body} />
        </div>
    )
  }
  return null;
}

export default Blog


export async function getStaticProps({ params, preview = null, previewData = {} }) {
  
    const { ref } = previewData
    const client = Client();
    const doc = await client.getByUID('blog', params.uid, ref ? { ref } : null) || {}
  
    return {
      props: {
        preview,
        doc,
      },
      revalidate: 1,
    }
  }

  export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments((doc) => doc.type === 'blog')
    return {
      paths: documents.map(doc => `/blog/${doc.uid}`),
      fallback: true,
    }
  }