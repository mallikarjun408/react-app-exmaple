import React, { useEffect, useState } from "react";
import "./category.css"
import { DataGrid } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCategory from './AddCategory';


import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { DataStore } from "aws-amplify";
import { NewsCategoryTable } from "../../models";
import { useDispatch, useSelector } from "react-redux";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'LanguageName', headerName: 'Language', width: 160 },
    { field: 'Category', headerName: 'Category', width: 160 },
    { field: 'Image', headerName: 'Image', image: "image URL", type: 'image', description: '', sortable: false, width: 160, renderCell: (params) => <img src={params.value} /> },
    { field: 'SampleScript', headerName: 'SampleScript', description: '', sortable: false, width: 160 },
    { field: 'Status', headerName: 'Status', description: '', sortable: false, width: 160 },
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
    { id: 1, LanguageName: 'English', Category: 'Politics', Image: '', SampleScript: '', Status: 'active' },
];


export default function CategoryScreen() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        width: '50%',
        height: '75%',
        p: 4,
    };

    const [numSelected, setNumSelected] = useState(0);
    const [addCategory, setAddCategory] = useState(false);
    const [open, setOpen] = useState(false);

    const categoryReducer = useSelector(state => state.CategoryReducer)
    const categories = categoryReducer?.categoryResponse
    const [categoryList, setCategoryList] = useState(categories || rows)

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => fetchCategoryList(), 1000)
    }, [open])

    const fetchCategoryList = async () => {
        console.log("fetchCategoryList .....")
        const response = await DataStore.query(NewsCategoryTable);
        console.log(response)
        dispatch({ type: "fetchCategory", payload: response })
        // response.map(i=>console.log(i.LanguageName));
        setCategoryList(response)
    }

    const handleClose = (value) => {
        setOpen(value)
    }

    const onTableCellClick = (param) => {
        if (param.field == 'action') {
            console.log(param.row)
            // setEditData(param.row)
            // setOpen(true)
        }
        else if (param.field == 'delete') {
            console.log(param.row)
            // setEditData(param.row)
            //setShowAlert(true)

        }
    }

    return (
        <div className="Container">
            <div className="addButton"> <button onClick={() => { setOpen(true) }}>Add Category</button></div>
            <div className="InnerContainer">
                <label className="itemHeader">Category List</label>
                {!addCategory ? <DataGrid
                    className="gridWidth"
                    rows={categoryList}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    isRowSelectable={false}
                    hideFooterSelectedRowCount
                    //  onRowClick={(params, events, details) => { alert(JSON.stringify(params.row.lastName)) }}
                    onCellClick={(param) => { onTableCellClick(param) }}
                /> : <AddCategory />}



                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >

                    <Box sx={style}>
                        <AddCategory handleClose={handleClose} />
                    </Box>
                </Modal>

            </div>



        </div>
    )
}