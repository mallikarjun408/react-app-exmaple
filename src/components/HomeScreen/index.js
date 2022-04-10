import React, { useEffect } from "react";
import "./home.css";

import { DataStore } from 'aws-amplify';
import { LanguageTable, NewsCategoryTable } from '../../models';
import { useDispatch } from 'react-redux';

export default function HomeScreen() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchLanguages()
        fetchCategoryList()
        console.log("homeScreen loaded......")
    })

    const fetchLanguages = async () => {
        const response = await DataStore.query(LanguageTable);
        console.log(response)
        dispatch({ type: "fetchLanguagesAction", payload: response })

    }
    const fetchCategoryList = async () => {
        const response = await DataStore.query(NewsCategoryTable);
        console.log(response)
        dispatch({ type: "fetchCategory", payload: response })

    }
    return (
        <>
            <div className="BackgroundContainer"></div>
        </>
    )
}