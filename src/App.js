import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Navbar} from "./components/navbar";
import {GlobalStyle} from "./globalStyles";
import {Card} from "./components/card";
import {PokemonCharacters} from "./pages/pokemon/characters";
import {PokemonFavourites} from './pages/pokemon/favourites';
import {RickAndMortyCharacters} from "./pages/rickAndMorty/characters";
import {RickAndMortyFavourites} from "./pages/rickAndMorty/favourites";


function App() {
  return (
        <>
        <GlobalStyle/>
          <Navbar />

          <Switch>
              <Route exact path="/rick-and-morty-characters">
                  <RickAndMortyCharacters />
              </Route>
              <Route  path="/favorite-rick-and-morty-characters">
                  <RickAndMortyFavourites />
              </Route>
              <Route  path="/pokemon-characters">
                  <PokemonCharacters/>
              </Route>
              <Route  path="/favorite-pokemon-characters"> r
                  <PokemonFavourites />
              </Route>
          </Switch>
        </>
  );
}

export default App;
