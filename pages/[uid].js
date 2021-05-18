import React from 'react'
import { Client } from '../prismic-configuration'
import { SliceZone } from '../components'
import { queryRepeatableDocuments } from '../utils/queries'

import Head from 'next/head'
import { RichText } from 'prismic-reactjs'


const Page = ({ doc }) => {
  if(!doc) return <div>Loading</div>
      if (doc && doc.data) {
      return (
          <div>
            <Head>
              <title> {RichText.asText(doc.data.meta_title)} </title>
              <meta 
                name='description' 
                content = {RichText.asText(doc.data.meta_description)}
              />
            </Head>
            <SliceZone sliceZone={doc.data.body} />
          </div>
          
      )
    }
    return null;
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
      revalidate: 1,
    }
  }

  export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments((doc) => doc.type === 'page')
    return {
      paths: documents.map(doc => `/${doc.uid}`),
      fallback: true,
    }
  }
  
export default Page
