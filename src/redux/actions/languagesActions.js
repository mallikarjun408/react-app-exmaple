import { API, graphqlOperation } from 'aws-amplify';
import { createLanguageTable, deleteLanguageTable, updateLanguageTable } from '../../graphQLQuaries/mutations';


export const addLanguagesAction = async (languageObject) => {

    const response = await API.graphql(graphqlOperation(createLanguageTable, { input: languageObject }))

    // alert(JSON.stringify(rr))


    return async (dispatch) => {
        dispatch({ type: "addLanguagesAction", payload: response })
    }
}

export const fetchLanguagesAction = async(data) => {

    try {
       // const response = await DataStore.query(LanguageTable);
        // console.log("Posts retrieved successfully!", JSON.stringify(response, null, 2));
         return async (dispatch) => {
            dispatch({ type: "fetchLanguagesAction", payload: data })
        } 
    } catch (error) {
        console.log("Error retrieving posts", error);
    }
}
export const updateLanguagesAction = async(id, languageName) => {

    const response = await API.graphql(graphqlOperation(updateLanguageTable, { input: { id: id, LanguageName: languageName } }))

    return async (dispatch) => {
        dispatch({ type: "updateLanguagesAction", payload: response })
    }

}
export const deleteLanguagesAction = async(id, languageName) => {

    const response = await API.graphql(graphqlOperation(deleteLanguageTable, { input: { id: id, LanguageName: languageName } }))

    return async (dispatch) => {
        dispatch({ type: "deleteLanguagesAction", payload: response })
    }

}


