import Head from 'next/head'
import { Client } from '../prismic-configuration'
import { SliceZone } from '../components'

export default function Home({doc}) {
  console.log(doc);
  return (
    <div>
      <SliceZone sliceZone={doc.data.body} />
    </div>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  
  const { ref } = previewData
  const client = Client();
  const doc = await client.getSingle('homepage', ref ? { ref } : null) || {}

  return {
    props: {
      doc,
    },
  }
}