import React, { useState, useRef } from "react";
import "./category.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch, useSelector } from "react-redux";
import { Storage } from "@aws-amplify/storage"
import { createNewsCategoryTable } from "../../graphQLQuaries/mutations";
import { API, graphqlOperation } from "aws-amplify";
window.Buffer = window.Buffer || require("buffer").Buffer;



const options = [
    'active', 'not active'
];

export default function AddCategory({ handleClose }) {



    const defaultOption = 0;
    const [cName, setcName] = useState("");
    const [lName, setlName] = useState(defaultOption)
    const [sScript, setsScript] = useState(null)
    const [newsContent, setNewsContent] = useState("")
    const [filePath, setFilePath] = useState(null)
    const [fileName, setFileName] = useState("sample.png")
    const [activeStatus, setActiveStatus] = useState();

    const languageReducer = useSelector(state => state.LanguageReducer)
    const languagesList = languageReducer?.languagesResponse

    const [languages, setLangugaes] = useState(languagesList || [])

    const inputFile = useRef(<img />)

    const onSubmitPress = async () => {
        const catInputs = {
            LanguageName: lName,
            Category: cName,
            SampleScript: sScript,
            Image: filePath,
            Status: activeStatus
        }
        if (validateInput(catInputs)) {
            const upload = await Storage.put(fileName, filePath)
            const signedUrl = await Storage.get(upload.key)
            console.log(signedUrl)
            if (signedUrl) {
                catInputs.Image = signedUrl
                const response = await API.graphql(graphqlOperation(createNewsCategoryTable, { input: catInputs }))
                handleClose(false)
            }
        } else {
            alert("Please enter valid data")
        }
    }

    const validateInput = (input) => {
        if (input?.LanguageName.length == 0) {
            return false
        } else if (input?.Category.length == 0) {
            return false
        } else if (input.SampleScript.length == 0) {
            return false
        }else if (input.Image.length == 0) {
            return false
        }else if (input.Status == undefined) {
            return false
        }

        return true

    }
    const onChange = async (e) => {
        const file = e.target.files[0];


        /* const upload = await Storage.put(file.name,file)
        const signedUrl = await Storage.get(upload.key)
        console.log(signedUrl) */
    }
    const showPreview = (event) => {
        if (event.target.files.length > 0) {
            setFilePath(event.target.files[0])
            setFileName(event.target.files[0].name)
            var src = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("file-ip-1-preview");
            preview.src = src;
            preview.style.display = "block";
        }
    }

    const getLangusges = () => {
        return languages.map((item) => { return item.LanguageName })
    }

    const getScript = (val) => {

        let sScript = languages.find(function (item, i) {
            if (item.LanguageName === val) {

                return item;
            }
        });
        setlName(val);
        setsScript(sScript.SampleScript)
        console.log(val, sScript)
    }

    return (
        <div className="addCategoryContainer">
            <div>
                <div className="titleContainer"><label className="labelStyle"> Select Langugae</label>
                    <Dropdown className="dropdownStyle" options={getLangusges()} onChange={(e) => { getScript(e.value) }} value={defaultOption} placeholder="Select an option" />
                </div>

            </div>
            <div className="titleContainer">
                <label className="labelStyle"> Title</label>
                <input className="titleInput" value={cName} onChange={(e) => { setcName(e.currentTarget.value) }} maxLength={20} ></input>
            </div>
            <div className="titleContainer">
                <label className="labelStyle"> Choose File</label>
                <input type='file' id='file' accept="image/*" onInput={showPreview} onChange={(e) => onChange(e)} />
            </div>
            <div className="titleContainer">
                <img ref={inputFile} id="file-ip-1-preview" width={150} height={150} style={{ marginTop: 10 }} />
            </div>

            <div className="titleContainer"><label className="labelStyle">Status</label>
                <Dropdown className="dropdownStyle" options={options} onChange={(e) => { setActiveStatus(e.value == 'active' ? 1 : 0) }} value={0} placeholder="Select an option" />
            </div>

            <div className="centerAlign footer">
                <button className="buttonStyleAddCategory btnClose" onClick={() => { handleClose(false) }}> Close </button>
                <button className="buttonStyleAddCategory btnSubmit" onClick={() => { onSubmitPress() }}> Submit </button>
            </div>

        </div >
    )
}


