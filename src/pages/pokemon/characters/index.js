import axios from 'axios';
import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import {addCharacter} from "../../../redux/actions/pokemon";
import {Cards, Container} from "./styles";
import {SearchBar} from "../../../components/searchBar";
import {Pagination} from "../../../components/pagination";
import {Card} from "../../../components/card";
import {Loading, loading} from '../../loading'

export const PokemonCharacters = () => {

    const dispatch = useDispatch()

    const[character, update] = useState([])
    const[currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?offset=150&limit=20")
    const[nextPage, setNextPage] = useState()
    const[previousPage, setPreviousPage] = useState()
    const[loading,setLoading] = useState(true)
    const[search,setSearch] = useState('')
    const[filteredCharacters, setFilteredCharacters] = useState([])

    useEffect(() => {
        setLoading(true)
        axios
            .get(currentPage)
            .then(res =>
            {
                setLoading(false)
                setNextPage(res.data.next)
                setPreviousPage(res.data.previous)
                update(res.data.results.map((p => p )))
            } )
    }, [currentPage])

    useEffect(() => {
        setFilteredCharacters(
            character.filter(character => {
                return character.name.toLowerCase().includes( search.toLowerCase())
            })
        )
    }, [search, character])

    const gotoNextPage = () => {
        setCurrentPage(nextPage)
    }

    const gotoPreviousPage = () =>{
        setCurrentPage(previousPage)
    }

    if(loading) return <Loading/>;

    const imageP = (url) => {
        let id = url.split("/")
        id = id[id.length-2]
        return Number(id);
    }

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    return (
        <Container>
            <SearchBar onChange={e => setSearch(e.target.value)} />

            <Cards>
                {filteredCharacters.map((character, index) => (
                    <Card name={character.name.capitalize()}
                          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageP(character.url)}.png`}
                          button="Favourite" key={index}
                          onClick={()=> dispatch(addCharacter(character)) } />
                ))}
            </Cards>

            <Pagination next={gotoNextPage} previous={gotoPreviousPage}/>
        </Container>
    )
}