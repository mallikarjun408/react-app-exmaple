import React, { useState } from "react";
import "./newscontents.css"
import { DataGrid } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'newsDate', headerName: 'News Date', width: 160 },
    { field: 'language', headerName: 'Language', width: 160 },
    { field: 'category', headerName: 'Script', width: 160 },
    { field: 'reporter', headerName: 'Reporter', width: 160 },
    { field: 'contenttype', headerName: 'Content Type', width: 160 },
    { field: 'title', headerName: 'Title', width: 160 },
    { field: 'desc', headerName: 'Description', width: 160 },
    { field: 'image', headerName: 'Image', width: 160 },
    { field: 'video', headerName: 'Video', width: 160 },
    { field: 'status', headerName: 'Status', description: '', sortable: false, width: 160 },
    { field: 'action', headerName: 'Action', description: '', sortable: false, width: 160 },
];

const rows = [
    { id: 1, newsDate: '28/03/2022', language: 'English', category: 'Politics', reporter: 'xxxx', contenttype: 'image', title: 'Title', desc: 'Description', image: '', video: '', status: 'active', action: 'edit' },
    { id: 2, newsDate: '28/03/2022', language: 'English', category: 'Politics', reporter: 'xxxx', contenttype: 'image', title: 'Title', desc: 'Description', image: '', video: '', status: 'active', action: 'edit' },
    { id: 3, newsDate: '28/03/2022', language: 'English', category: 'Politics', reporter: 'xxxx', contenttype: 'image', title: 'Title', desc: 'Description', image: '', video: '', status: 'active', action: 'edit' },
    { id: 4, newsDate: '28/03/2022', language: 'English', category: 'Politics', reporter: 'xxxx', contenttype: 'image', title: 'Title', desc: 'Description', image: '', video: '', status: 'active', action: 'edit' },
];


export default function NewsContentScreen() {

    const [numSelected, setNumSelected] = useState(0);


    return (
        <div className="Container">
             <div className="addButton"> <button onClick={()=>{alert('add new news')}}>Add News</button></div>
            <div className="InnerContainer">
           
                <header className="HeaderContainer"> News List
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
                <DataGrid
                    className="gridWidth"
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    isRowSelectable={false}
                    hideFooterSelectedRowCount
                    onRowClick={(params, events, details) => { alert(JSON.stringify(params.row.lastName)) }}
                // onCellClick={(param) => { alert(alert(param.row.lastName)) }}
                />
            </div>



        </div>
    )
}