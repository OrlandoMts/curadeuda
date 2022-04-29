import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import Image from 'next/image'
import curaDeuda from "../curadeuda.png"

const navbar = () => {
  return (
    <navbar className="flex justify-start p-4 items-center">
        <div className='mr-4'>
          <AiOutlineMenu size='2rem' />
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

export default navbar