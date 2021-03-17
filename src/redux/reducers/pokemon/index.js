export const PokemonReducer = (state = [], action) => {

    switch(action.type){
        case "ADD_CHARACTER":

            return [...state, action.character];

        case "REMOVE_CHARACTER":

            const newState = state.filter(character => character.name !== action.character.name)
            return [...newState]

        default:
            return state;
    }
}
