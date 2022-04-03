export const addNewsContentAction = (keyName, data) => {

    return async (dispatch) => {
        dispatch({ type: "addNewsContentAction", payload: data })
    }
}

