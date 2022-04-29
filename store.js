import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import pokemonsReducer from './redux/reducer';

export const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer
      }
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);