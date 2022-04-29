import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function About() {
    return(
        <Layout>
            <Head>
                <title>Acerca de mi</title>
                <meta name="about" content="Te cuento un poco de mí" />
            </Head>

            <main className="w-full flex justify-center">
                <div className="w-11/12 bg-white shadow-md rounded-md p-4 leading-relaxed">
                    <h1>Hola, mi nombre es Orlando Montes Antonio</h1>
                    <p>Soy ingeniero en Sistemas Computacionales, egresado del Instituto Tecnologico de Ciudad Madero</p>
                    <p>Realice esta prueba técnica para continuar en el proceso de selección de desarrollador Frontend Jr en <a href="https://www.curadeuda.com/" target="_blank" rel="noreferrer"  className="text-[#2bb99b]">CuraDeuda</a></p>
                </div>
            </main>
        </Layout>
    )
}