import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import Layout from '../components/Layout'


function MyApp({ Component, pageProps, menu }) {
  return (
    <Layout menu={menu}>
      <Component {...pageProps} menu={menu}/>
    </Layout>
  )
}


export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client();
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}

  return {
    props: {
      menu,
      preview
    }
  }
  }


export default MyApp
