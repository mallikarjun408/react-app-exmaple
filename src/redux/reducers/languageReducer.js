
const INITIAL_STATE = {
    languagesResponse: null
}
export const LanguageReducer = (state = INITIAL_STATE, action) => {
    let newState = {}

    switch (action.type) {
        case "addLanguagesAction":
            newState = Object.assign(...INITIAL_STATE, state, action.payload);
            return newState;
        case "fetchLanguagesAction":
            newState = Object.assign({}, state,{languagesResponse:action.payload} );
            return newState;
        case "updateLanguagesAction":
            newState = Object.assign(...INITIAL_STATE, state, action.payload);
            return newState;
        case "deleteLanguagesAction":
            newState = Object.assign(...INITIAL_STATE, state, action.payload);
            return newState;
        default:
            return state || newState;
    }

} 