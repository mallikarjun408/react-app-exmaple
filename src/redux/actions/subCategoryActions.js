export const addSubCategoryAction = (keyName, data) => {

    return async (dispatch) => {
        dispatch({ type: "addSubCategoryAction", payload: data })
    }
}

