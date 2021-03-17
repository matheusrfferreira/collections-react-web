import {createStore,combineReducers} from 'redux';
import {PokemonReducer} from '../pokemon';
import {RickAndMortyReducer} from "../rickAndMorty";

const reducers = combineReducers(
    {
        RickAndMortyReducer,
        PokemonReducer
    }
)

export const Store = createStore(reducers)