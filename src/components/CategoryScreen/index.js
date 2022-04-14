import React, { useEffect, useState } from "react";
import "./category.css"
import { DataGrid } from '@mui/x-data-grid';
import AddCategory from './AddCategory';
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { API, DataStore, graphqlOperation, Storage } from "aws-amplify";
import { NewsCategoryTable } from "../../models";
import { useDispatch, useSelector } from "react-redux";
import AlertDialog from "../Utils/confirmAlert";
import { deleteNewsCategoryTable } from "../../graphQLQuaries/mutations";



const rows = [
    { id: 1, LanguageName: 'English', Category: 'Politics', Image: '', SampleScript: '', Status: 'active' },
];


export default function CategoryScreen() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'LanguageName', headerName: 'Language', width: 160 },
        { field: 'Category', headerName: 'Category', width: 160 },
        { field: 'Image', headerName: 'Image', image: "image URL", type: 'image', description: '', sortable: false, width: 160, renderCell: (params) => <img style={{ width: 100, height: 70, padding: 2, backgroundColor: 'red' }} src={imgList[params.value]}></img> },
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
    const [editData, setEditData] = useState([])
    const [showAlert, setShowAlert] = useState(false)

    const dispatch = useDispatch();
    const mJson = {};
    const [imgList, setImageList] = useState(mJson)

    useEffect(() => {
        setTimeout(() => fetchCategoryList(), 1000)
    }, [open, showAlert])

    const fetchCategoryList = async () => {
        console.log("fetchCategoryList .....")
        const response = await DataStore.query(NewsCategoryTable);
        console.log(response)
        dispatch({ type: "fetchCategory", payload: response })
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

        setCategoryList(response)
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

        if (val) {
            const response = await API.graphql(graphqlOperation(deleteNewsCategoryTable, { input: { id: editData.id, _version: editData._version } }))
            console.log(response)
        }
        setShowAlert(false)
    }
    return (
        <div className="Container">
            <div className="addButton"> <button onClick={() => { setEditData([]);setOpen(true) }}>Add Category</button></div>
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
                        <AddCategory handleClose={handleClose} editData={editData} />
                    </Box>
                </Modal>
                <AlertDialog showAlert={showAlert} title={"Delete !"} desc={"Are you sure to delete the entry ?"} btnHandle={onBtnPress} />
            </div>



        </div>
    )
}