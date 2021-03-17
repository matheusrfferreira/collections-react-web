import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {removeRickAndMortyCharacter} from "../../../redux/actions/rickAndMorty";
import {Cards, Container} from "./styles";
import {Card} from "../../../components/card";

export const RickAndMortyFavourites = () => {

    const characters = useSelector((state) => state.RickAndMortyReducer);

    const dispatch = useDispatch()

    let ts = false


    return (
        <Container>
            <Cards>
                {characters.map((character,index) => (
                    <Card name={character.name} button='Remove' img={character.image} key={index} onClick={()=> dispatch(removeRickAndMortyCharacter(character))} />
                ))}
            </Cards>
        </Container>
    )
}