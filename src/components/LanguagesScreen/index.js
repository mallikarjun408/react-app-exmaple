import React, { useEffect, useState } from "react";
import "./languages.css"
import { DataGrid } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import AddLanguage from "./AddLanguage";
import { useDispatch, useSelector } from "react-redux";
import { fetchLanguagesAction } from "../../redux/actions/languagesActions";
import { DataStore } from '@aws-amplify/datastore';
import { LanguageTable } from '../../models';
import { API, graphqlOperation } from 'aws-amplify';
import { deleteLanguageTable } from "../../graphQLQuaries/mutations";
import AlertDialog from "../Utils/confirmAlert";




const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'LanguageName', headerName: 'Language', width: 160 },
    { field: 'SampleScript', headerName: 'Script', width: 160 },

    {
        field: 'ActiveStatus',
        headerName: 'Status',
        description: '',
        sortable: false,
        width: 160,
    },
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

const rows = [
    { id: 1, LanguageName: 'English', SampleScript: 'Abcd', ActiveStatus: 'active', action: 'edit' },
    { id: 2, LanguageName: 'Telugu', SampleScript: 'తెలుగు అక్షరమాల (లేదా) వర్ణమాల', ActiveStatus: 'active', action: 'edit' },

];


export default function LanguagesScreen() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        width: '50%',
        p: 4,
    };

    const [numSelected, setNumSelected] = useState(0);

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const languageReducer = useSelector(state => state.LanguageReducer)
    const languagesList = languageReducer?.languagesResponse

    const [languages, setLanguages] = useState(languagesList || rows)
    const [editData, setEditData] = useState([])
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        //dispatch(fetchLanguagesAction)
        setTimeout(() => fetchLanguages(), 1000)

    }, [open, showAlert])

    const fetchLanguages = async () => {
        const response = await DataStore.query(LanguageTable);
        console.log("fetchLanguagesAction", response)
        dispatch({ type: "fetchLanguagesAction", payload: response })
        // response.map(i=>console.log(i.LanguageName));
        setLanguages(response)
    }

    const handleClose = (value) => {
        setOpen(value)
    }

    const onTableCellClick = (param) => {
        if (param.field == 'action') {
            console.log(param.row)
            setEditData(param.row)
            setOpen(true)
        }
        else if (param.field == 'delete') {
            console.log(param.row)
            setEditData(param.row)
            setShowAlert(true)

        }
    }
    const onBtnPress = async (val) => {
        setShowAlert(false)
        if (val) {
            const response = await API.graphql(graphqlOperation(deleteLanguageTable, { input: { id: editData.id, _version: editData._version } }))
            console.log(response)
        }
    }


    return (
        <div className="Container">
            <div className="addButton"> <button onClick={() => { setEditData([]); setOpen(true) }}>Add Language</button></div>
            <div className="InnerContainer">
                <label className="itemHeader">Languages List</label>
                <DataGrid
                    className="gridWidth"
                    rows={languages}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    isRowSelectable={false}
                    hideFooterSelectedRowCount
                    //  onRowClick={(params, events, details) => { alert(JSON.stringify(params.row)) }}
                    onCellClick={(param) => { onTableCellClick(param) }}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >

                    <Box sx={style}>
                        <AddLanguage handleClose={handleClose} editData={editData} />
                    </Box>
                </Modal>
                <AlertDialog showAlert={showAlert} title={"Delete !"} desc={"Are you sure to delete the entry ?"} btnHandle={onBtnPress} />

            </div>
        </div>
    )
}