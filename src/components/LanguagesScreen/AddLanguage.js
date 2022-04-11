import React, { useState, useRef, useEffect } from "react";
import "../CategoryScreen/category.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { API, graphqlOperation } from 'aws-amplify';
import { createLanguageTable, deleteLanguageTable, updateLanguageTable } from '../../graphQLQuaries/mutations';


const options = [
    'active', 'not active'
];

export default function AddLanguage({ handleClose }) {

    const [languageName, setLanguageName] = useState("");
    const [sampleScript, setSampleScript] = useState("");
    const [activeStatus, setActiveStatus] = useState();
    const [showAlert, setShowAlert] = useState(false)

    const addLanguageSubmit = async () => {
        const input = { LanguageName: languageName, SampleScript: sampleScript, ActiveStatus: activeStatus }
        if (validateInput(input)) {
            const response = await API.graphql(graphqlOperation(createLanguageTable, { input: input }))
            handleClose(false)
        }
        else { alert("Please enter valid data") }

    }

    const validateInput = (input) => {
        if (input?.LanguageName.length == 0) {
            return false
        } else if (input?.SampleScript.length == 0) {
            return false
        } else if (input.ActiveStatus == undefined) {
            return false
        }

        return true

    }

    return (
        <div className="addCategoryContainer">

            <div className="titleContainer">
                <label className="labelStyle"> Language</label>
                <input className="titleInput" value={languageName} onChange={(e) => { setLanguageName(e.currentTarget.value) }} maxLength={20} ></input>
            </div>
            <div className="titleContainer">
                <label className="labelStyle"> Sample Script</label>
                <input className="titleInput" value={sampleScript} onChange={(e) => { setSampleScript(e.currentTarget.value) }} maxLength={50} ></input>
            </div>

            <div>
                <div className="titleContainer"><label className="labelStyle">Status</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={(e) => { setActiveStatus(e.value == 'active' ? 1 : 0) }} value={0} placeholder="Select an option" />
                </div>
            </div>

            <div className="centerAlign">
                <button className="buttonStyle btnClose" onClick={() => { handleClose(false) }}> Close </button>
                <button className="buttonStyle btnSubmit" onClick={() => { addLanguageSubmit() }}> Submit </button>
            </div>
        </div >
    )
}


