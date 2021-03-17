import {useHistory, Link, NavLink} from "react-router-dom";
import {Container, PageLink, PageLinks, RickAndMorty, Title1, Title2 } from "./styles";
import {Pokemon} from "./styles";
import {useState} from 'react';

export const Navbar = () => {

    const history = useHistory();

    function navigateToPokemonCharacters() {
        history.push("/pokemon-characters");
    }

    function navigateToFavoritePokemonsCharacters() {
        history.push("/favorite-pokemon-characters");
    }

    function navigateToRickAndMortyCharacters() {
        history.push("/rick-and-morty-characters");
    }

    function navigateToFavoriteRickAndMortyCharacters() {
        history.push("/favorite-rick-and-morty-characters");
    }


    return (
    <Container>

        <Pokemon>
            <Title1>
                Pokémon
            </Title1>
            <PageLinks>

                    <NavLink to="/pokemon-characters" onClick={navigateToPokemonCharacters}
                                activeStyle={{fontWeight: "bold", color: "red", backgroundColor: 'white'
                                }} style={{textDecoration: 'none'}}> <PageLink> Characters </PageLink></NavLink>


                    <NavLink to="/favorite-pokemon-characters" onClick={navigateToFavoritePokemonsCharacters} activeStyle={{fontWeight: "bold", color: "red", backgroundColor: 'white'
                    }} style={{textDecoration: 'none'}} style={{textDecoration: 'none'}}> <PageLink> Favourites </PageLink></NavLink>

            </PageLinks>
        </Pokemon>

        <RickAndMorty>
            <Title2>
                Rick and Morty
            </Title2>
            <PageLinks>

                    <NavLink to="/rick-and-morty-characters" onClick={navigateToRickAndMortyCharacters} activeStyle={{fontWeight: "bold", color: "red", backgroundColor: 'white'
                    }} style={{textDecoration: 'none'}} style={{textDecoration: 'none'}}> <PageLink> Characters </PageLink> </NavLink>



                    <NavLink to="/favorite-rick-and-morty-characters" activeStyle={{fontWeight: "bold", color: "red", backgroundColor: 'white'
                    }} style={{textDecoration: 'none'}} onClick={navigateToFavoriteRickAndMortyCharacters} class="active" style={{textDecoration: 'none'}}> <PageLink> Favourites  </PageLink> </NavLink>

            </PageLinks>
        </RickAndMorty>

    </Container>
    )
}