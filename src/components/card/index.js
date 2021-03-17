import {Button, Container, Img, Name} from "./styles";

export const Card = (props) => {
    return (
        <Container>
            <Img src={props.img}/>
            <Name>
                {props.name}
            </Name>
            <Button onClick={props.onClick}>
                {props.button}
            </Button>
        </Container>
    )
}