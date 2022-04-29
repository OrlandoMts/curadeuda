import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectPokemon } from '../redux/reducer';

const Input = () => {

  const listPokemons = useSelector(state => state.pokemons.list);
  const dispatch = useDispatch();

  const handleSearch = event =>{
    dispatch(selectPokemon(listPokemons, event.target.value));
  }
  return (
    <div className='flex justify-center'>
        <input className='w-9/12 p-[10px] rounded-lg shadow-xl focus:outline-[#2bb99b]' 
          type="text" 
          placeholder='Busca tu pokemon favorito'
          onChange={handleSearch}
          />
    </div>
  )
}

export default Input