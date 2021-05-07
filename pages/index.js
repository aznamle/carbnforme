import Head from 'next/head'
import { Client } from '../prismic-configuration'
import { SliceZone } from '../components'
import HeroBanner from '../components/HeroBanner'


export default function Home({ doc }) {
  if(doc && doc.data) {
  return (
      <div>
        <HeroBanner banner={doc.data}/>
        <SliceZone sliceZone={doc.data.body} />
      </div>
    )
  }
  return null
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  
  const { ref } = previewData
  const client = Client();
  const doc = await client.getSingle('homepage', ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      preview
    },
    revalidate: 1,
  }
}