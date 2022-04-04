import React, { useEffect } from "react";
import "./home.css";

import { DataStore } from 'aws-amplify';
import { LanguageTable } from '../../models';
import { useDispatch } from 'react-redux';

export default function HomeScreen() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchLanguages()
        console.log("homeScreen loaded......")
    })

    const fetchLanguages = async () => {
        const response = await DataStore.query(LanguageTable);
        console.log(response)
        dispatch({ type: "fetchLanguagesAction", payload: response })

    }
    return (
        <>
            <div className="BackgroundContainer"></div>
        </>
    )
}