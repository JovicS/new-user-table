import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import AddUserDialog from '../../components/Dialog';

function Users() {

    const navigate = useNavigate();
    const users = useSelector((state) => state?.users?.value);

    const [open, setOpen]=useState(false);
    const [selectedRow, setSelectedRow] = useState();
    const [isEdit, setIsEdit]=useState(false);
    const handleClose = () => {
        setOpen(false)
    }

    const columns = [{ field: 'email', headerName: 'Email', width: 250 }, { field: 'password', headerName: 'Password', width: 250 }];


    const rows = () =>{
        const result = users?.map((user)=> {
            return ({id: user.id, email: user.email, password: user.password});
        })
        return result
    }

    return (
    <div style={{ display: 'flex', minHeight: '500px', width: '100%' , height: 'auto'}}>
        <Box sx={{ p: 1, width: '100%' }}>
            <div style={{justifyContent: 'space-between', display: 'flex'}}>
                <IconButton onClick={()=>navigate('/')} sx={{display: 'flex'}}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton onClick={()=>{setOpen(true); setIsEdit(false)}} sx={{display: 'flex'}}>
                    <AddIcon/>
                </IconButton>
            </div>
            <DataGrid
                rows={rows()}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onRowClick={(e)=> {setOpen(true); setSelectedRow(e.row); setIsEdit(true)}}
            />
            <AddUserDialog open={open} handleClose={handleClose} selectedRow={selectedRow} isEdit={isEdit}/>
        </Box>
    </div>
  )
}

export default Users