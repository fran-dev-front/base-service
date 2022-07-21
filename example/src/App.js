import React, { useState } from 'react'
import * as base from 'base-service'
import 'base-service/dist/index.css'
import {LoginApiService, UserManages, Suppliers} from './api/userLogin'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { SnackbarProvider, useSnackbar } from 'notistack'



const App = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
      </IconButton>
    </React.Fragment>
  );

  let url = []

  function logout(){
    console.log('logout');
  }

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [response, setResponse] = useState('')

  async function login(){

   
    let getUsers = new LoginApiService();
    let response = await getUsers.postData({
      email: "francisco.marmolejo.martinez@gmail.com",
      password: "joelo123",
    });
    
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6Im1lbW8iLCJleHAiOjE2NTMwMTEwMTMsImVtYWlsIjoib21lbS5lbWFudWVsKzFAZ21haWwuY29tIiwib3JpZ19pYXQiOjE2NTE3MTUwMTN9.lNRm02eFOBKwun2rky6Tst-Rn71a4TOo4k-aW4mVhHs')
    // let irequestFilter = []
    // irequestFilter.push({'key':'page', 'value': '1'})
    // irequestFilter.push({'key':'items', 'value': '1'})
    // let getUsers = new Suppliers();
    // let response = await getUsers.filter(irequestFilter);
    console.log('respuesta',response)
    enqueueSnackbar(response)
   
   
  }

  //

  return (
    <div>
    <Button onClick={() =>login()}>
      Show snackbar
    </Button>
    </div>
    )
}


export default App
