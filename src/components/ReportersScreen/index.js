import React, { useState } from "react";
import "./reporter.css"
import { DataGrid } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'mobile',
        headerName: 'Mobile',
        width: 160,
    },
    {
        field: 'email',
        headerName: 'Email',
        sortable: false,
        width: 160,
    },
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', mobile: 1234567890, email: 'xxxx@gmail.com', status: 'active', action: 'edit' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', mobile: 1234567890, email: 'xxxx@gmail.com', status: 'active', action: 'edit' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', mobile: 1234567890, email: 'xxxx@gmail.com', status: 'active', action: 'edit' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', mobile: 1234567890, email: 'xxxx@gmail.com', status: 'active', action: 'edit' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', mobile: 1234567890, email: 'xxxx@gmail.com', status: 'active', action: 'edit' },
    { id: 6, lastName: 'Melisandre', firstName: null, mobile: 1234567890, email: 'xxxx@gmail.com', status: 'active', action: 'edit' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', mobile: 1234567890, email: 'xxxx@gmail.com', status: 'active', action: 'edit' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', mobile: 1234567890, email: 'xxxx@gmail.com', status: 'active', action: 'edit' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', mobile: 1234567890, email: 'xxxx@gmail.com', status: 'active', action: 'edit' },
];


export default function ReportersScreen() {

    const [numSelected, setNumSelected] = useState(0);


    return (
        <div className="Container">
             <div className="addButton"> <button onClick={()=>{alert('add new news')}}>Add Reporter</button></div>
            <div className="InnerContainer">
                <label className="itemHeader">Reporters List</label>
                   

              
                {/* <DataGrid
                    
                    style={{width:'100%'}}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    isRowSelectable={false}
                    hideFooterSelectedRowCount
                    onRowClick={(params, events, details) => { alert(JSON.stringify(params.row.lastName)) }}
                // onCellClick={(param) => { alert(alert(param.row.lastName)) }}
                /> */}
            </div>



        </div>
    )
}