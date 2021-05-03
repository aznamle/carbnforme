import React from 'react'

import { Client } from '../../prismic-configuration'
import { SliceZone } from '../../components'
import { queryRepeatableDocuments } from '../../utils/queries'

const Article = ({ data }) => {
    return (
        <div>
            
        </div>
    )
}

export default Article


export async function getStaticProps({ params, preview = null, previewData = {} }) {
  
    const { ref } = previewData
    const client = Client();
    const data = await client.getByUID('article', params.uid, ref ? { ref } : null) || {}
  
    return {
      props: {
        preview,
        data,
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