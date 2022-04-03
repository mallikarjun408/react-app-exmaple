
const INITIAL_STATE = {
    loginResponse:null
}
export const NewsContentReducer = (state = INITIAL_STATE, action) =>{
    let newState = {}

    switch(action.type) {
        case "loginResponse":
            newState = Object.assign({}, state,action.payload);
            return newState;
        default:
            return state || newState;
    }

} 