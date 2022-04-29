import Head from 'next/head'
import Input from '../components/Input'
import Layout from '../components/Layout'
import PokemonList from '../components/PokemonList'

export default function Home() {
  return (
    <Layout>
      <Head>
          <title>Inicio</title>
          <meta name="home" content="Inicio de app" />
      </Head>
      
      <main>
        <Input />
        <PokemonList />
      </main>
    </Layout>
  )
}
