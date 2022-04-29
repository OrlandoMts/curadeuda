import React from 'react'
import Link from 'next/link'
import { BiX } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { toogleMenu } from '../redux/reducer';

//Pendiente: manejar un estado para cerrar el menu al presionar una opcion

export const Menu = () => {
    
    const menu = useSelector(state => state.pokemons.tooglemenu);
    const dispatch = useDispatch();

    const handleMenu = () => {
        dispatch(toogleMenu())
    }

    return (
        <nav className='flex flex-col absolute z-10 top-0 left-0 bg-[#2bb99b] w-80 h-80 justify-center content-around rounded-md animate__animated animate__backInLeft'>
            <div className='flex justify-end px-10'>
                <BiX size='2rem' onClick={handleMenu}/>
            </div>
            <div className='flex md:container my-1.5 p-4 md:p-8 lg:p-12'>
                <ul className='flex-col m-5'>
                    <li className='mb-4'><Link href="/"><a className='text-2xl text-[#4b4c4f]' onClick={handleMenu}>Inicio</a></Link></li>
                    <li className='mb-4'><Link href="/about"><a className='text-2xl text-[#4b4c4f]' onClick={handleMenu}>Acerca de mi</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu