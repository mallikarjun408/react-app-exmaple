
const INITIAL_STATE = {
    categoryResponse: null
}
export const CategoryReducer = (state = INITIAL_STATE, action) => {
    let newState = {}

    switch (action.type) {
        case "addCategory":
            newState = Object.assign({}, state, action.payload);
            return newState;
        case "fetchCategory":
            newState = Object.assign({}, state, { categoryResponse: action.payload });
            return newState;
        default:
            return state || newState;
    }

} 