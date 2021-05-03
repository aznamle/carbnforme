import React from 'react'

import { Client } from '../../prismic-configuration'
import { SliceZone } from '../../components'
import { queryRepeatableDocuments } from '../../utils/queries'

const Article = ({ doc }) => {
  if (doc && doc.data) {
    return (
        <div>
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