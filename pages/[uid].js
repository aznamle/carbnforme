import React from 'react'
import { Client } from '../prismic-configuration'
import { SliceZone } from '../components'
import { queryRepeatableDocuments } from '../utils/queries'

import HeroBanner from '../components/HeroBanner'


const Page = ({ doc }) => {
  
  if(!doc) return <div>Loading</div>
  // console.log(doc)
  
    if (doc && doc.data) {
      return (
          <div>
            <HeroBanner banner={doc.data.image}/>
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
