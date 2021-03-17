import {Button, Container} from "./styles";


export const Pagination = (props) => {


    return (
        <Container>
            <Button onClick={props.previous} >
                Previous
            </Button>
            <Button onClick={props.next} >
                Next
            </Button>
        </Container>
    )
}