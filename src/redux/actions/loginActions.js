import APIHandler from "../../network/APIHandler";

export const loginAction = (keyName, loginResponse) => {

    return async (dispatch) => {
        dispatch({ type: "loginResponse", payload: loginResponse })
    }
}

