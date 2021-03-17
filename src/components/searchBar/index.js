import {Container, Input} from "./styles";


export const SearchBar = (props) => {

    return (
        <Container>
            <Input onChange={props.onChange} placeholder='Search Character' />
        </Container>
    )
}