import React from 'react'
import { Client } from '../prismic-configuration'
import { SliceZone } from '../components'

export default function about({ doc }) {
    return (
        <div>
            
        </div>
    )
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  
    const { ref } = previewData
    const client = Client();
    const doc = await client.getSingle('about', ref ? { ref } : null) || {}
  
    return {
      props: {
        doc,
      },
    }
  }