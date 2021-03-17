export const RickAndMortyReducer = (state = [], action) => {

    switch(action.type){
        case "ADD_RICK_AND_MORTY_CHARACTER":

            return [...state, action.rickAndMortyCharacter];

        case "REMOVE_RICK_AND_MORTY_CHARACTER":

            const newState = state.filter(rickAndMortyCharacter => rickAndMortyCharacter.id !== action.rickAndMortyCharacter.id)
            return [...newState]

        default:
            return state;
    }
}
