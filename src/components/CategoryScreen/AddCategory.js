import React, { useState, useRef } from "react";
import "./category.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'one', 'two', 'three'
];

export default function AddCategory({handleClose}) {

    const defaultOption = 0;
    const [title, setTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");
   
    const inputFile = useRef(<img />)


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
            <div>
                <div className="titleContainer"><label className="labelStyle"> Select Langugae</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={() => { }} value={defaultOption} placeholder="Select an option" />
                </div>

            </div>
            <div className="titleContainer">
                <label className="labelStyle"> Title</label>
                <input className="titleInput" value={title} onChange={(e) => { setTitle(e.currentTarget.value) }} maxLength={50} ></input>
            </div>
            <div className="titleContainer">
                <label className="labelStyle"> Choose File</label>
                <input type='file' id='file' accept="image/*" onInput={showPreview} />
            </div>
            <div className="titleContainer">
                <img ref={inputFile} id="file-ip-1-preview" width={150} height={150} style={{ marginTop: 10   }} />
            </div>
            <div>
                <button className="buttonStyle btnClose" onClick={() => { handleClose(false) }}> Close </button>
                <button className="buttonStyle btnSubmit" onClick={() => { alert('submitted') }}> Submit </button>
            </div>
            
        </div >
    )
}


