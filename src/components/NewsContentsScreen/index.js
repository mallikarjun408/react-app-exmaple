import React, { useEffect, useState } from "react";
import "./newscontents.css"
import { DataGrid } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddNews from "./AddNews";

import { Storage } from "@aws-amplify/storage"
import { DataStore } from "aws-amplify";
import { NewsTable } from "../../models";
import { useDispatch, useSelector } from "react-redux";
import { getNewsTable } from "../../graphQLQuaries/queries";

import { API, graphqlOperation } from "aws-amplify";
import AlertDialog from "../Utils/confirmAlert";
import { deleteNewsTable } from "../../graphQLQuaries/mutations";


const rows = [
];



export default function NewsContentScreen() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'NewsDate', headerName: 'News Date', width: 160, },
        { field: 'Language', headerName: 'Language', width: 160 },
        { field: 'Category', headerName: 'Script', width: 160 },
        { field: 'ReporterName', headerName: 'Reporter', width: 160 },
        { field: 'ContentType', headerName: 'Content Type', width: 160 },
        { field: 'NewsTitle', headerName: 'Title', width: 160 },
        { field: 'NewsBody', headerName: 'Description', width: 160 },
        { field: 'Image', headerName: 'Image', width: 160, renderCell: (params) => <img style={{ width: 100, height: 70, padding:2, backgroundColor:'red' }} src={imgList[params.value]}></img> },
        { field: 'Video', headerName: 'Video', width: 160 },
        { field: 'RefLink1', headerName: 'RefLink1', description: '', sortable: false, width: 160 },
        { field: 'RefLink2', headerName: 'RefLink2', description: '', sortable: false, width: 160 },
        { field: 'RefLink3', headerName: 'RefLink3', description: '', sortable: false, width: 160 },
        { field: 'isNewsActive', headerName: 'isActive', description: '', sortable: false, width: 160 },
        {
            field: 'action',
            headerName: 'Action',
            description: '',
            sortable: false,
            width: 160,
            renderCell: (params) => <img style={{ width: 20, height: 20 }} src={require("../../assets/images/edit_icon.png")} />
        },
        {
            field: 'delete',
            headerName: 'Delete',
            description: '',
            sortable: false,
            width: 160,
            renderCell: (params) => <img style={{ width: 20, height: 20 }} src={require("../../assets/images/red_trash_icon.png")} />
        },
    ];


    const [numSelected, setNumSelected] = useState(0);
    const [addNewsWidget, setAddNewsWidget] = useState(false);

    const newsReducer = useSelector(state => state.NewsContentReducer)
    const newsData = newsReducer?.newsResponse
    const [newsList, setNewsList] = useState(newsData || [])
    const dispatch = useDispatch()
    const mJson = {};
    const [imgList, setImageList] = useState(mJson)
    const [editData, setEditData] = useState([])
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        setTimeout(() => fetchNewsList(), 1000)
    }, [addNewsWidget, showAlert])

    const fetchNewsList = async () => {
        console.log("fetchNewsList .....")
        const response = await DataStore.query(NewsTable);
        console.log(response)
        dispatch({ type: "newsResponse", payload: response })
        // response.map(i=>console.log(i.LanguageName));
        response.map(async (item, index) => {
            console.log(item)
            const img = item.Image;
            const url = await Storage.get(img)
            mJson["" + img] = url

            if (index == response.length - 1) {
                setImageList(mJson)
            }

        })


        setNewsList(response)
    }

    const btnCloseAddNewsWidget = () => {
        setAddNewsWidget(false);
    }

    const onTableCellClick = (param) => {
        if (param.field == 'action') {
            console.log(param.row)
            setEditData(param.row)
            setAddNewsWidget(true)
        }
        else if (param.field == 'delete') {
            console.log(param.row)
            setEditData(param.row)
            setShowAlert(true)

        }
    }

    const onBtnPress = async (val) => {

        if (val) {
            const response = await API.graphql(graphqlOperation(deleteNewsTable, { input: { id: editData.id, _version: editData._version } }))
            console.log(response)
        }
        setShowAlert(false)
    }


    return (
        <div className="Container">
            <div className="addButton"> <button onClick={() => { setEditData([]); setAddNewsWidget(true) }}>Add News</button></div>
            <div className="InnerContainer">
                <label className="itemHeader">News List</label>
                {!addNewsWidget ? <DataGrid
                    className="gridWidth"
                    rows={newsList}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    isRowSelectable={false}
                    hideFooterSelectedRowCount
                    // onRowClick={(params, events, details) => { alert(JSON.stringify(params.row.lastName)) }}
                    onCellClick={(param) => { onTableCellClick(param) }}
                /> : <AddNews closeNewsWidget={btnCloseAddNewsWidget} editData = {editData}></AddNews>}
            </div>
            <AlertDialog showAlert={showAlert} title={"Delete !"} desc={"Are you sure to delete the entry ?"} btnHandle={onBtnPress} />
        </div>
    )
}