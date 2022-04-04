import React, { useState, useRef } from "react";
import "./category.css";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import S3 from 'react-aws-s3';
import { Storage } from 'aws-amplify';
import { uploadFile } from 'react-s3';
import S3FileUpload from 'react-s3';
window.Buffer = window.Buffer || require("buffer").Buffer;



const options = [
    'one', 'two', 'three'
];

export default function AddCategory({ handleClose }) {


    const config = {
        bucketName: 'allinonefilestorage',
        dirName: 'photos', /* optional */
        region: 'us-west-2',
        accessKeyId: 'AKIA27KEEEVN6LTOKJQL',
        secretAccessKey: '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',
    }

    const defaultOption = 0;
    const [title, setTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");

    const inputFile = useRef(<img />)

    const onChange = (e) => {
        const file = e.target.files[0];

        /* S3FileUpload.uploadFile(file, config)
            .then((data) => {
                console.log(data.location);
            }).catch((err) => {
                alert(err);
            }) */

          return new Promise((resolve, reject) => {
             Storage.put("image.png", file, {
               contentType: "image/*",
               contentEncoding: 'base64',
             })
               .then((result) => {
                 console.log('File successfully uploaded to s3', result);
                 resolve(true);
               })
               .catch((err) => {
                 // setError({
                 //   show: true,
                 //   errorMsg: InstitutionBuilderDict[userLanguage]['messages']['uploaderr'],
                 // });
                 console.log('Error in uploading file to s3', err);
                 reject(err);
               });
           }); 

       /*  const ReactS3Client = new S3(config);

        const newFileName = 'test-file.png';

        ReactS3Client
            .uploadFile(file, newFileName)
            .then(data =>{ console.log(data); alert(data)})
            .catch(err => {console.error(err); alert("fail "+err)}) */



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
                <input type='file' id='file' accept="image/*" onInput={showPreview} onChange={(e) => onChange(e)} />
            </div>
            <div className="titleContainer">
                <img ref={inputFile} id="file-ip-1-preview" width={150} height={150} style={{ marginTop: 10 }} />
            </div>
            <div>
                <button className="buttonStyle btnClose" onClick={() => { handleClose(false) }}> Close </button>
                <button className="buttonStyle btnSubmit" onClick={() => { alert('submitted') }}> Submit </button>
            </div>

        </div >
    )
}


