import React from 'react'
import Link from 'next/link'
import { BiX } from 'react-icons/bi';

//Pendiente: manejar un estado para cerrar el menu al presionar una opcion

export const Menu = () => {
  return (
    <nav className='flex flex-col absolute z-10 top-0 left-0 bg-[#2bb99b] w-80 h-80 justify-center content-around rounded-md animate__animated animate__backInLeft'>
            <div className='flex justify-end px-10'>
                <BiX size='2rem' />
            </div>
            <div className='flex md:container my-1.5 p-4 md:p-8 lg:p-12'>
                <ul className='flex-col m-5'>
                    <li className='mb-4'><Link href="/"><a className='text-2xl text-[#4b4c4f]' >Inicio</a></Link></li>
                    <li className='mb-4'><Link href="/about"><a className='text-2xl text-[#4b4c4f]' >Acerca de mi</a></Link></li>
                </ul>
            </div>
        </nav>
  )
}

export default Menu