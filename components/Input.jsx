import React from 'react'

const Input = () => {
  return (
    <div className='flex justify-center'>
        <input className='w-9/12 p-[10px] rounded-lg shadow-xl focus:outline-[#2bb99b]' 
          type="text" 
          placeholder='Busca un pokemon'
          />
    </div>
  )
}

export default Input