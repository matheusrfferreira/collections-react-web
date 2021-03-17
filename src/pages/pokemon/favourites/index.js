import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCharacter } from '../../../redux/actions/pokemon';
import {Cards, Container} from "./styles";
import {Card} from '../../../components/card'

export const PokemonFavourites = () => {
    const pokemons = useSelector((state) => state.PokemonReducer);
    console.log(pokemons)
    const dispatch = useDispatch()

    const imageP = (url) => {
        let id = url.split("/")
        id = id[id.length-2]
        return Number(id);
    }
    return(
        <Container>

            <Cards>
                {pokemons.map((character, index)=> (
                    <Card name={character.name} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageP(character.url)}.png`} button="Remove" key={index} onClick={()=> dispatch(removeCharacter(character)) } />
                ))}
            </Cards>
        </Container>
    )
}