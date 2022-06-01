import React from 'react'
import * as base from 'base-service'
import 'base-service/dist/index.css'
import {LoginApiService, UserManages, Suppliers} from './api/userLogin'

const App = () => {

  let url = []

  function logout(){
    console.log('logout');
  }

  async function login(){
    
    
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6Im1lbW8iLCJleHAiOjE2NTMwMTEwMTMsImVtYWlsIjoib21lbS5lbWFudWVsKzFAZ21haWwuY29tIiwib3JpZ19pYXQiOjE2NTE3MTUwMTN9.lNRm02eFOBKwun2rky6Tst-Rn71a4TOo4k-aW4mVhHs')
    let irequestFilter = []
    irequestFilter.push({'key':'page', 'value': '1'})
    irequestFilter.push({'key':'items', 'value': '1'})
    let getUsers = new Suppliers();
    let response = await getUsers.filter(irequestFilter);
    console.log(response)
   
  }

  login()

  return <base.ExampleComponent text="Create React Library Example 😄" />
}

export default App
