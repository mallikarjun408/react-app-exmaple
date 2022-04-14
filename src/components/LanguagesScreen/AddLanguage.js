import React, { useState, useRef, useEffect } from "react";
import "../CategoryScreen/category.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { API, DataStore, graphqlOperation } from 'aws-amplify';
import { createLanguageTable, deleteLanguageTable, updateLanguageTable } from '../../graphQLQuaries/mutations';
import { LanguageTable } from "../../models";


const options = [
    'active', 'not active'
];

export default function AddLanguage({ handleClose, editData }) {

    const [languageName, setLanguageName] = useState(editData?.LanguageName || "");
    const [sampleScript, setSampleScript] = useState(editData?.SampleScript || "");
    const [activeStatus, setActiveStatus] = useState(editData?.ActiveStatus || true);
    const [showAlert, setShowAlert] = useState(false)
    const defaultVal = (editData?.ActiveStatus) ? options[0] : options[1]

    const addLanguageSubmit = async () => {
        const input = { id: editData?.id, LanguageName: languageName, SampleScript: sampleScript, ActiveStatus: activeStatus, _version: editData?._version }
        if (validateInput(input)) {
            if (editData?.id || false) {
                const response = await API.graphql(graphqlOperation(updateLanguageTable, { input: input }))
                console.log(response)
                /* Models in DataStore are immutable. To update a record you must use the copyOf function
                 to apply updates to the item’s fields rather than mutating the instance directly */
                /* const update =  await DataStore.save(LanguageTable.copyOf(CURRENT_ITEM, item => {
                     // Update the values on {item} variable to update DataStore entry
                     if (item.id == editData?.id) {
                         item.ActiveStatus = activeStatus
                         item.LanguageName = languageName
                         item.SampleScript = sampleScript
                     }
                 }));
 
                 console.log(update) */




            } else {
                const response = await API.graphql(graphqlOperation(createLanguageTable, { input: input }))
            }
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
                    <Dropdown className="dropdownStyle" options={options} onChange={(e) => { setActiveStatus(e.value == 'active' ? 1 : 0) }} value={defaultVal} placeholder="Select an option" />
                </div>
            </div>

            <div className="centerAlign">
                <button className="buttonStyle btnClose" onClick={() => { handleClose(false) }}> Close </button>
                <button className="buttonStyle btnSubmit" onClick={() => { addLanguageSubmit() }}> Submit </button>
            </div>
        </div >
    )
}


