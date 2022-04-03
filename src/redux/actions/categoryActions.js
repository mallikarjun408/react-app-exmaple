export const addCategoryAction = (keyName, data) => {

    return async (dispatch) => {
        dispatch({ type: "addCategoryAction", payload: data })
    }
}

