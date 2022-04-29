import Head from 'next/head'
import Input from '../components/Input'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
          <title>Inicio</title>
          <meta name="home" content="Inicio de app" />
      </Head>
      
      <main>
        <Input />
      </main>
    </Layout>
  )
}
