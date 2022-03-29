import React, { useState } from "react";
import "./languages.css"
import { DataGrid } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'language', headerName: 'Language', width: 160 },
    { field: 'samplescript', headerName: 'Script', width: 160 },

    {
        field: 'status',
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
        width: 160
    },
];

const rows = [
    { id: 1, language: 'English', samplescript: 'Abcd', status: 'active', action: 'edit' },
    { id: 2, language: 'Telugu', samplescript: 'తెలుగు అక్షరమాల (లేదా) వర్ణమాల', status: 'active', action: 'edit' },

];


export default function LanguagesScreen() {

    const [numSelected, setNumSelected] = useState(0);


    return (
        <div className="Container">
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