import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'
import { SliceZone } from '../components'
import HeroBanner from '../components/HeroBanner'
import Posts from '../components/Posts'

export default function Home({ doc, posts }) {
  
  if(!doc && posts) return <div>loading</div>
  if(doc && doc.data) {
  return (
      <div>
        <HeroBanner banner={doc.data}/>
        <SliceZone sliceZone={doc.data.body} />
        <Posts posts={posts} />
      </div>
    )
  }
  return null
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  
  const { ref } = previewData
  const client = Client();
  const doc = await client.getSingle('homepage', ref ? { ref } : null) || {}

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog"), {
      orderings: "[my.blog.publish_date desc]",
      ...(ref ? { ref } : null)
    },
  )

  return {
    props: {
      doc,
      posts: posts ? posts.results : [],
      preview
    },
    revalidate: 1,
  }
}