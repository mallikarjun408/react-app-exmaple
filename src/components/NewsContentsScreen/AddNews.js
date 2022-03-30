import React, { useState } from "react";
import "./newscontents.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'one', 'two', 'three'
];

export default function AddNews({onSubmitAddNews}) {

    const defaultOption = 0;
    const [title, setTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");


    return (
        <div className="addNewsContainer">
            <div>
                <div className="alignLeft"><label className="labelStyle"> Select Langugae</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={() => { }} value={defaultOption} placeholder="Select an option" />
                </div>
                <div className="alignRight"> <label className="labelStyle"> Select Category</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={() => { }} value={defaultOption} placeholder="Select an option" />
                </div>
            </div>
            <div>
                <div className="alignLeft"><label className="labelStyle"> Sub Category</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={() => { }} value={defaultOption} placeholder="Select an option" />
                </div>
                <div className="alignRight"> <label className="labelStyle"> Reporter</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={() => { }} value={defaultOption} placeholder="Select an option" />
                </div>
            </div>
            <div>
                <div className="alignLeft"><label className="labelStyle"> Content Type</label>
                    <Dropdown className="dropdownStyle" options={options} onChange={() => { }} value={defaultOption} placeholder="Select an option" />
                </div>

            </div>

            <div className="titleContainer">
                <label className="labelStyle"> Title</label>
                <input className="titleInput" value={title} onChange={(e) => { setTitle(e.currentTarget.value) }} maxLength={50} ></input>
            </div>
            <div className="titleContainer">
                <label className="labelStyle"> Title</label>
                <textarea className="titleInput newsContentInput" value={newsContent} onChange={(e) => { setNewsContent(e.currentTarget.value) }} maxLength={500} multiple={true}></textarea>
                <label className="labelStyle"> total {newsContent.length}/500</label>
            </div>
            <div>
                <button className="buttonStyle btnClose" onClick={() => { onSubmitAddNews(false)}}> Close </button>
                <button className="buttonStyle btnSubmit" onClick={() => { alert('submitted') }}> Submit </button>
            </div>

        </div >
    )
}


