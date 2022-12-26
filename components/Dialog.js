import { DialogContent, DialogTitle, Dialog } from '@mui/material'
import React from 'react'
import Login from '../pages/login'

function AddUserDialog({open, handleClose, selectedRow, isEdit}) {
    
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEdit? 'Edit this user' : 'Add new user'}</DialogTitle>
        <DialogContent>
            <Login isDialogForm handleClose={handleClose} selectedRow={selectedRow} isEdit={isEdit}/>
        </DialogContent>
    </Dialog>
  )
}

export default AddUserDialog
