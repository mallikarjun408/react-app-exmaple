import React, { useRef, useState } from "react";
import "./newscontents.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Storage } from "@aws-amplify/storage"

import { useDispatch, useSelector } from "react-redux";
import { API, graphqlOperation } from "aws-amplify";
import { createNewsTable, updateNewsTable } from "../../graphQLQuaries/mutations";



const options = [
    'Image', 'Video'
];
const status_options = [
    'active', 'not active'
];

const reporterOptions = ["admin"]

export default function AddNews({ closeNewsWidget, editData }) {



    const languageReducer = useSelector(state => state.LanguageReducer)
    const languagesList = languageReducer?.languagesResponse

    const [languages, setLangugaes] = useState(languagesList || [])

    const categoryReducer = useSelector(state => state.CategoryReducer)
    const categories = categoryReducer?.categoryResponse
    const [categoryList, setCategoryList] = useState(categories || [])

    const [languageName, setLanguageName] = useState(editData?.Language || "")
    const [categoryName, setCategoryName] = useState(editData?.Category || "")
    const [reporterName, setReporterName] = useState("admin")
    const [contentType, setContentType] = useState("")
    const [newsTitle, setNewsTitle] = useState(editData?.NewsTitle || "")
    const [newsContent, setNewsContent] = useState(editData?.NewsBody || "")
    const [videoFile, setVideoFile] = useState(editData?.Video || null)

    const [refLink1, setRefLink1] = useState(editData?.RefLink1 || null)
    const [refLink2, setRefLink2] = useState(editData?.RefLink2 || null)
    const [refLink3, setRefLink3] = useState(editData?.RefLink3 || null)

    const [filePath, setFilePath] = useState(editData?.Image || null)
    const [fileName, setFileName] = useState(editData?.Image || null)


    const [activeStatus, setActiveStatus] = useState(editData?.isNewsActive || null);

    const inputFile = useRef(<img />)
    const defaultActiveOption = editData?.isNewsActive ? status_options[0] : 0;
    const defaultContentOption = editData?.Image ? options[0] : 0;

    const getLangusges = () => {
        return languages.map((item) => { return item.LanguageName })
    }
    const getCategories = () => {
        return categoryList.map((item) => { return item.Category })
    }

    const submitAddNews = async () => {

        if (editData?.Language) {
            const newsDetails = {
                id:editData?.id,
                Language: languageName,
                Category: categoryName,
                ReporterName: reporterName,
                NewsTitle: newsTitle,
                NewsBody: newsContent,
                Image: fileName,
                Video: videoFile,
                RefLink1: refLink1,
                RefLink2: refLink2,
                RefLink3: refLink3,
                isNewsActive: activeStatus,
                Action: "",
                Comments: "",
                NewsDate: new Date().toISOString(),
                _version: editData?._version
            }

            const response = await API.graphql(graphqlOperation(updateNewsTable, { input: newsDetails }))
            closeNewsWidget(false)


        } else {
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

                newsDetails.Image = fileName //signedUrl
                const response = await API.graphql(graphqlOperation(createNewsTable, { input: newsDetails }))
                closeNewsWidget()

            } else {
                alert("Please enter valid data")
            }
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
                    <Dropdown className="dropdownStyle" options={getLangusges()} onChange={(e) => { setLanguageName(e.value) }} value={editData?.Language || 0} placeholder="Select an option" />
                </div>
                <div className="alignRight"> <label className="labelStyle"> Select Category</label>
                    <Dropdown className="dropdownStyle" options={getCategories()} onChange={(e) => { setCategoryName(e.value) }} value={editData?.Category || 0} placeholder="Select an option" />
                </div>
            </div>
            {/*  <div>
                <div className="alignLeft"><label className="labelStyle"> Sub Category</label>
                    <Dropdown className="dropdownStyle" options={options} disabled={true} onChange={(e) => { }} value={defaultOption} placeholder="Select an option" />
                </div>
                <div className="alignRight"> <label className="labelStyle"> Reporter</label>
                    <Dropdown className="dropdownStyle" options={reporterOptions} onChange={(e) => { setReporterName(e.value) }} value={defaultOption} placeholder="Select an option" />
                </div>
            </div> */}
            <div>
                <div className="alignLeft"><label className="labelStyle"> Content Type</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={(e) => { setContentType(e.value) }} value={defaultContentOption} placeholder="Select an option" />
                </div>
                <div className="alignRight"><label className="labelStyle">Status</label>
                    <Dropdown className="dropdownStyle" options={status_options} onChange={(e) => { setActiveStatus(e.value == 'active' ? 1 : 0) }} value={defaultActiveOption} placeholder="Select an option" />
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


