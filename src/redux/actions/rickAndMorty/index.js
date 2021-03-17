export const addRickAndMortyCharacter = (rickAndMortyCharacter) => {
    return {
        type: "ADD_RICK_AND_MORTY_CHARACTER",
        rickAndMortyCharacter,
    };
};

export const removeRickAndMortyCharacter = (rickAndMortyCharacter) => {
    return {
        type: "REMOVE_RICK_AND_MORTY_CHARACTER",
        rickAndMortyCharacter,
    };
};