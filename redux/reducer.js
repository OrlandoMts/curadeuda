import { createSlice } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsWithDetails } from '../api/getPokemons';

const initialState = {
    list: [],
    tooglemenu: false,
    filterPokemons: []
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: initialState,
    reducers: {
      toogleMenu: state => {
          state.tooglemenu = !state.tooglemenu
      },
      setPokemons: (state, action) => {
        state.list = action.payload;
        state.filterPokemons = action.payload;        
      },
      searchPokemon: (state, action) => {
         state.filterPokemons = action.payload;
        //  state.list = action.payload;

      }
    }
  })

// La siguiente función para realizar en llamado al api y guardar la data
// en el store de la aplicación
export const fetchPokemonsWithDetails = payload => async dispatch => {
  try {
      const res = await getPokemons();
      const data = await res.json();
      const pokemonList = data.results;

      const pokemonDetail = await getPokemonsWithDetails(pokemonList);
      
      dispatch(setPokemons(pokemonDetail));
    } catch (error) {
      console.log("FETCH ERROR: ", error);
    }
}

/**
 * La siguiente función es para ir buscando que pokemones coinciden con el texto introducido en el input
 * @param {Son los pokemones} payload 
 * @param {El valor introudcio en el input} input 
 * @returns 
 */
export const selectPokemon = ( payload, input ) => dispatch => {
  let searchedPokemon = payload.filter(pokemon => {
      const searchInput = input.toLowerCase();
      const pokemonName = pokemon.name.toLowerCase();

      return pokemonName.includes(searchInput);
  })

  dispatch(searchPokemon(searchedPokemon));
}

export const { toogleMenu, setPokemons, searchPokemon } = pokemonsSlice.actions
export default pokemonsSlice.reducer

