import React, { useRef, useState } from "react";
import "./newscontents.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Storage } from "@aws-amplify/storage"

import { useDispatch, useSelector } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import { createNewsTable } from "../../graphQLQuaries/mutations";

const options = [
    'Image', 'Video'
];
const status_options = [
    'active', 'not active'
];

const reporterOptions = ["admin"]

export default function AddNews({ closeNewsWidget }) {

    const defaultOption = 0;

    const languageReducer = useSelector(state => state.LanguageReducer)
    const languagesList = languageReducer?.languagesResponse

    const [languages, setLangugaes] = useState(languagesList || [])

    const categoryReducer = useSelector(state => state.CategoryReducer)
    const categories = categoryReducer?.categoryResponse
    const [categoryList, setCategoryList] = useState(categories || [])

    const [languageName, setLanguageName] = useState("")
    const [categoryName, setCategoryName] = useState("")
    const [reporterName, setReporterName] = useState("")
    const [contentType, setContentType] = useState("")
    const [newsTitle, setNewsTitle] = useState("")
    const [newsContent, setNewsContent] = useState("")
    const [videoFile, setVideoFile] = useState(null)

    const [refLink1, setRefLink1] = useState(null)
    const [refLink2, setRefLink2] = useState(null)
    const [refLink3, setRefLink3] = useState(null)

    const [filePath, setFilePath] = useState(null)
    const [fileName, setFileName] = useState("sample.png")


    const [activeStatus, setActiveStatus] = useState();

    const inputFile = useRef(<img />)


    const getLangusges = () => {
        return languages.map((item) => { return item.LanguageName })
    }
    const getCategories = () => {
        return categoryList.map((item) => { return item.Category })
    }

    const submitAddNews = async () => {

        const mDate = new Date();
        let date = mDate.getDate()+"/"+mDate.getMonth()+"/"+mDate.getFullYear()
        const newsDetails = {
            Language: languageName,
            Category: categoryName,
            ReporterName: reporterName,
            NewsTitle: newsTitle,
            NewsBody: newsContent,
            Image: filePath,
            Video: videoFile,
            RefLink1: refLink1,
            RefLink2: refLink2,
            RefLink3: refLink3,
            isNewsActive: activeStatus,
            Action: "",
            Comments: "",
            NewsDate: new Date().toISOString()
        }

        if (validateInput(newsDetails)) {
            const upload = await Storage.put(fileName, filePath)
          //  const signedUrl = await Storage.get(upload.key)
          //  console.log(signedUrl)
            if (true) {
                newsDetails.Image = fileName //signedUrl
                const response = await API.graphql(graphqlOperation(createNewsTable, { input: newsDetails }))
                closeNewsWidget()
            }
        } else {
            alert("Please enter valid data")
        }
    }

    const validateInput = (input) => {
        if (input?.Language.length == 0) {
            return false
        } else if (input?.Category.length == 0) {
            return false
        } else if (input?.ReporterName.length == 0) {
            return false
        } else if (input?.NewsTitle.length == 0) {
            return false
        } else if (input?.NewsBody.length == 0) {
            return false
        } else if (input?.Image.length == 0) {
            return false
        } /*else if (input?.Video.length == 0) {
            return false
        }  else if (input?.RefLink1.length == 0) {
            return false
        } else if (input?.RefLink2.length == 0) {
            return false
        } else if (input?.RefLink3.length == 0) {
            return false
        } */ else if (input.Image.length == 0) {
            return false
        } else if (input.isNewsActive == undefined) {
            return false
        }

        return true
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

    const onChange = async (e) => {
        const file = e.target.files[0];
    }

    return (
        <div className="addNewsContainer">
            <div>
                <div className="alignLeft"><label className="labelStyle"> Select Langugae</label>
                    <Dropdown className="dropdownStyle" options={getLangusges()} onChange={(e) => { setLanguageName(e.value) }} value={defaultOption} placeholder="Select an option" />
                </div>
                <div className="alignRight"> <label className="labelStyle"> Select Category</label>
                    <Dropdown className="dropdownStyle" options={getCategories()} onChange={(e) => { setCategoryName(e.value) }} value={defaultOption} placeholder="Select an option" />
                </div>
            </div>
            <div>
                <div className="alignLeft"><label className="labelStyle"> Sub Category</label>
                    <Dropdown className="dropdownStyle" options={options} disabled={true} onChange={(e) => { }} value={defaultOption} placeholder="Select an option" />
                </div>
                <div className="alignRight"> <label className="labelStyle"> Reporter</label>
                    <Dropdown className="dropdownStyle" options={reporterOptions} onChange={(e) => { setReporterName(e.value) }} value={defaultOption} placeholder="Select an option" />
                </div>
            </div>
            <div>
                <div className="alignLeft"><label className="labelStyle"> Content Type</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={(e) => { setContentType(e.value) }} value={defaultOption} placeholder="Select an option" />
                </div>
                <div className="alignRight"><label className="labelStyle">Status</label>
                <Dropdown className="dropdownStyle" options={status_options} onChange={(e) => { setActiveStatus(e.value == 'active' ? 1 : 0) }} value={0} placeholder="Select an option" />
            </div>

            </div>
            {contentType ? <><div className="titleContainer">
                <label className="labelStyle"> Choose File</label>
                <input type='file' id='file' accept="image/*" onInput={showPreview} onChange={(e) => onChange(e)} />
            </div>
                <div className="titleContainer">
                    <img ref={inputFile} id="file-ip-1-preview" width={150} height={150} style={{ marginTop: 10 }} />
                </div></> : null}

            <div className="titleContainer">
                <label className="labelStyle"> Title</label>
                <input className="titleInput" value={newsTitle} onChange={(e) => { setNewsTitle(e.currentTarget.value) }} maxLength={50} ></input>
            </div>
            <div className="titleContainer">
                <label className="labelStyle"> Content</label>
                <textarea className="titleInput newsContentInput" value={newsContent} onChange={(e) => { setNewsContent(e.currentTarget.value) }} maxLength={500} multiple={true}></textarea>
                <label className="labelStyle"> total {newsContent.length}/500</label>
            </div>
            <div className="titleContainer">
                <label className="labelStyle"> Ref Links </label>
                <input className="titleInput" placeholder="ref link1" value={refLink1} onChange={(e) => { setRefLink1(e.currentTarget.value) }}  ></input>
                <input className="titleInput" placeholder="ref link2" value={refLink2} onChange={(e) => { setRefLink2(e.currentTarget.value) }}  ></input>
                <input className="titleInput" placeholder="ref link3" value={refLink3} onChange={(e) => { setRefLink3(e.currentTarget.value) }}  ></input>
            </div>
            <div>
                <button className="buttonStyle btnClose" onClick={() => { closeNewsWidget() }}> Close </button>
                <button className="buttonStyle btnSubmit" onClick={() => { submitAddNews() }}> Submit </button>
            </div>
        </div >
    )
}


