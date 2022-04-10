
const INITIAL_STATE = {
    newsResponse:null
}
export const NewsContentReducer = (state = INITIAL_STATE, action) =>{
    let newState = {}

    switch(action.type) {
        case "newsResponse":
            newState = Object.assign({}, state,action.payload);
            return newState;
        default:
            return state || newState;
    }

} 