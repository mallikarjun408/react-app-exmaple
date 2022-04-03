import React, { useState, useRef, useEffect } from "react";
import "../CategoryScreen/category.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from "react-redux";
import { addLanguagesAction, fetchLanguagesAction } from "../../redux/actions/languagesActions";
import Amplify,{ API, graphqlOperation } from 'aws-amplify';
import { createLanguageTable, deleteLanguageTable, updateLanguageTable } from '../../graphQLQuaries/mutations';

import awsconfig from '../../aws-exports';



const options = [
    'active', 'not active'
];

export default function AddLanguage({ handleClose }) {

    const [languageName, setLanguageName] = useState("");
    const [sampleScript, setSampleScript] = useState("");
    const [activeStatus, setActiveStatus] = useState();

    const dispatch = useDispatch();

    useEffect(()=>{
        Amplify.configure(awsconfig)
    })


    const addLanguageSubmit = async() => {

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


    const showPreview = (event) => {
        if (event.target.files.length > 0) {
            var src = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("file-ip-1-preview");
            preview.src = src;
            preview.style.display = "block";
        }
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
            {/* <div className="titleContainer">
                <label className="labelStyle"> Choose File</label>
                <input type='file' id='file' accept="image/*" onInput={showPreview} />
            </div> */}
            <div>
                <div className="titleContainer"><label className="labelStyle">Status</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={(e) => { setActiveStatus(e.value == 'active' ? 1 : 0) }} value={0} placeholder="Select an option" />
                </div>
            </div>
            {/* <div className="titleContainer">
                <img ref={inputFile} id="file-ip-1-preview" width={150} height={150} style={{ marginTop: 10 }} />
            </div> */}
            <div className="centerAlign">
                <button className="buttonStyle btnClose" onClick={() => { handleClose(false) }}> Close </button>
                <button className="buttonStyle btnSubmit" onClick={() => { addLanguageSubmit() }}> Submit </button>
            </div>
        </div >
    )
}


