import axios from 'axios';
import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import {addRickAndMortyCharacter} from "../../../redux/actions/rickAndMorty";
import {Cards, Container} from "./styles";
import {SearchBar} from "../../../components/searchBar";
import {Pagination} from "../../../components/pagination";
import {Card} from "../../../components/card";
import {Loading} from "../../loading";

export const RickAndMortyCharacters = () => {

    const dispatch = useDispatch()

    let i = 1;
    const[character, update] = useState([])
    const[currentPage, setCurrentPage] = useState(`https://rickandmortyapi.com/api/character/?page=${i}`)
    const[loading,setLoading] = useState(true)
    const[search,setSearch] = useState('')
    const[filteredCharacters, setFilteredCharacters] = useState([])

    useEffect(() => {
        setLoading(true)
        axios
            .get(currentPage)
            .then(res =>  {
                setLoading(false)
                update(res.data.results.map((rm => rm )))} )
    }, [currentPage])

    useEffect(() => {
        setFilteredCharacters(
            character.filter(character => {
                return character.name.toLowerCase().includes( search.toLowerCase())
            })
        )
    }, [search, character])

    const gotoNextPage = () => {
        i++
        setCurrentPage(`https://rickandmortyapi.com/api/character/?page=${i}`)

    }

    const gotoPreviousPage = () => {
        if(i<=2){
            i--
            setCurrentPage(`https://rickandmortyapi.com/api/character/?page=${i}`)
        }
    }

    if(loading) return <Loading/>;


    return (
        <Container>

            <SearchBar onChange={e => setSearch(e.target.value)} />

            <Cards>
                {filteredCharacters.map((character,index) => (
                    <Card name={character.name} button='Favourite' img={character.image} key={index} onClick={()=> dispatch(addRickAndMortyCharacter(character))} />
                ))}
            </Cards>

            <Pagination next={ gotoNextPage } previous={ gotoPreviousPage } />

        </Container>
    )
}