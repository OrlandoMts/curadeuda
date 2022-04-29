import React from 'react'
import Image from 'next/image'

const Pokemon = ({pokemons}) => {

  const { id, name, sprites, types } = pokemons
  return (
    <section className='w-6/12 md:w-9/12 p-3 bg-white my-5 flex justify-center rounded-md shadow-md'>
      <div className=''>
        <Image 
          src={sprites.front_default} 
          alt={`Pokemon name: ${name}`}
          width={70}
          height={70}
        />
        <p className='text-xl font-semibold'>{name}</p>
        <div className='flex my-3'>
          {types.map((type, index)=>(
            <p key={`${id}-${type.type.name}-${index}`} className="m-2 text-[#2bb99b]">{type.type.name}</p>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Pokemon