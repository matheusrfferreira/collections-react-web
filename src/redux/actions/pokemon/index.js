export const addCharacter = (character) => {
    return {
        type: "ADD_CHARACTER",
        character,
    };
};

export const removeCharacter = (character) => {
    return {
        type: "REMOVE_CHARACTER",
        character,
    };
};