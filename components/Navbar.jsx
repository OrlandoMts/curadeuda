import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai"
import curaDeuda from "../curadeuda.png"
import { useSelector, useDispatch } from 'react-redux'
import { toogleMenu } from '../redux/reducer'
import { Menu } from './Menu'

export function Navbar() {

  const menu = useSelector(state => state.pokemons.tooglemenu);
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(toogleMenu())
  }

  return (
    <navbar className="flex justify-start p-4 items-center">
        <div className='mr-4'>
          <AiOutlineMenu size='2rem' onClick={handleMenu} className="cursor-pointer"/>
          {menu && <Menu />}
        </div>
        <div>
          <Image 
            src={curaDeuda}
            alt="curaDeuda"
            width={200}
            height={50}
          />
        </div>
    </navbar>
  )
}

export default Navbar