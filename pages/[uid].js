import React from 'react'
import { Client } from '../prismic-configuration'
import { SliceZone } from '../components'
import { queryRepeatableDocuments } from '../utils/queries'


export default function Page({ doc }) {
    if (doc && doc.data) {
      return (
          <div>
            <SliceZone sliceZone={doc.data.body} />
          </div>
          
      )
    }
}

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  
    const { ref } = previewData
    const client = Client();
    const doc = await client.getByUID('page', params.uid, ref ? { ref } : null) || {}
  
    return {
      props: {
        preview,
        doc,
      },
    }
  }

  export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments((doc) => doc.type === 'page')
    return {
      paths: documents.map(doc => `/${doc.uid}`),
      fallback: true,
    }
  }
  