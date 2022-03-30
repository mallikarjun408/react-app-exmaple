import React, { useState } from "react";
import "./category.css"
import { DataGrid } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCategory from './AddCategory';


import { Modal } from "@mui/material";
import { Box } from "@mui/system";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'language', headerName: 'Language', width: 160 },
    { field: 'category', headerName: 'Script', width: 160 },

    { field: 'image', headerName: 'Image', image: "image URL", type: 'image', description: '', sortable: false, width: 160 },
    { field: 'status', headerName: 'Status', description: '', sortable: false, width: 160 },
    { field: 'action', headerName: 'Action', description: '', sortable: false, width: 160 },
];

const rows = [
    { id: 1, language: 'English', category: 'Politics', image: '', status: 'active', action: 'edit' },
    { id: 2, language: 'English', category: 'Sports', image: '', status: 'active', action: 'edit' },
    { id: 3, language: 'English', category: 'Entertainment', image: '', status: 'active', action: 'edit' },
    { id: 4, language: 'Telugu', category: 'రాజకీయాలు', image: '', status: 'active', action: 'edit' },
    { id: 5, language: 'Telugu', category: 'క్రీడలు', image: '', status: 'active', action: 'edit' },
    { id: 6, language: 'Telugu', category: 'వినోదం', image: '', status: 'active', action: 'edit' },
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
        p: 4,
    };

    const [numSelected, setNumSelected] = useState(0);
    const [addCategory, setAddCategory] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = (value) => {
        setOpen(value)
    }

    return (
        <div className="Container">
            <div className="addButton"> <button onClick={() => { setOpen(true) }}>Add Category</button></div>
            <div className="InnerContainer">
                <header className="HeaderContainer"> Languages List
                    <div className="floatRight">
                        {numSelected > 0 ? (
                            <Tooltip title="Delete">
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <Tooltip title="Filter list">
                                <IconButton>
                                    <FilterListIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                    </div>

                </header>
                {!addCategory ? <DataGrid
                    className="gridWidth"
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    isRowSelectable={false}
                    hideFooterSelectedRowCount
                    onRowClick={(params, events, details) => { alert(JSON.stringify(params.row.lastName)) }}
                // onCellClick={(param) => { alert(alert(param.row.lastName)) }}
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