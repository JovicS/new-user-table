import { Button, IconButton, TextField, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { addUser, removeUser } from '../../store/slices';
import DeleteIcon from '@mui/icons-material/Delete';

function Login({isDialogForm, handleClose, selectedRow, isEdit}) {

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    let id = 0;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state?.users?.value);

    const handleOnClickLogin = () => {
        let ids=[0];
        if(users?.length>0){
            users?.map((user)=>{
                return ids=[...ids,user?.id];
            })
        }
        id=Math.max(...ids)+1
        dispatch(addUser({id, email,password}));
        navigate('/users')
        !isDialogForm?? handleClose();
    }

    const handleDeleteRow = () => {
        dispatch(removeUser(selectedRow))
        handleClose()
    }

    useEffect(()=>{
        if(isEdit && selectedRow){
            setEmail(selectedRow.email)
            setPassword(selectedRow.password)
            id = selectedRow.id
        }
    },[isEdit, selectedRow])

    const editUser = () => {
        id = selectedRow.id;
        dispatch(removeUser(selectedRow));
        dispatch(addUser({id, email,password}));
        handleClose();
    }

  return (
      <>
      {!isDialogForm?
      <Box sx={{padding: '15%', display: 'grid', justifyContent: 'center'}}>
        <Typography sx={{paddingBottom: '8px', fontSize: 'medium'}}>Type your email and password</Typography>
            <Stack spacing={2}>
                <TextField placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextField placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={handleOnClickLogin} disabled={!password || !email}>Login</Button>
            </Stack>
        </Box>
        :
        <>
            <Stack spacing={2}>
                <TextField placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} autoFocus/>
                <TextField placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </Stack>
                {!isEdit?
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleOnClickLogin} disabled={!password || !email}>Add</Button>
                    </div>
                    :
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <IconButton onClick={handleDeleteRow}>
                            <DeleteIcon />
                        </IconButton>
                        <Button onClick={editUser} disabled={!password || !email}>Edit</Button>
                    </div>
                }
        </>
  }
  </>
  )
}
export default Login