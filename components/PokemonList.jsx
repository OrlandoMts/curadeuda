import React, { useEffect } from 'react'
import Pokemon from './Pokemon'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemonsWithDetails } from '../redux/reducer'

const PokemonList = () => {
  
  const filterPok = useSelector(state => state.pokemons.filterPokemons)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchPokemonsWithDetails())
  },[])

  return (
    <section className='w-full flex flex-col items-center md:grid grid-cols-4 justify-items-center my-6'>
        {
          filterPok.map((pokemon, index) => (
            <Pokemon pokemons={pokemon} key={`pokemon-${index}`}/>
          ))
        }
      
    </section>
  )
}

export default PokemonList