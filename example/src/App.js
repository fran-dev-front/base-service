import React from 'react'
import * as base from 'base-service'
import 'base-service/dist/index.css'
import {LoginApiService, UserManages} from './api/userLogin'

const App = () => {

  let url = []

  function logout(){
    console.log('logout');
  }

  async function login(){
    
    let loginService = new LoginApiService();
    // let getById = new UserManages();
    let Irequestfilter = []
    Irequestfilter.push({'key':'hola1', 'value': '1'})
    Irequestfilter.push({'key':'hola2', 'value': '2'})
    Irequestfilter.push({'key':'hola3', 'value': '3'})
    let response1 = await loginService.filter(Irequestfilter)
    //let response = await loginService.getAllAuth(logout)
    // let response = await loginService.postData({
    //    email: "omem.emanuel+1@gmail.com",
    //    password: "contraseña123"
    //  })
    // localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6Im1lbW8iLCJleHAiOjE2NTMwMTEwMTMsImVtYWlsIjoib21lbS5lbWFudWVsKzFAZ21haWwuY29tIiwib3JpZ19pYXQiOjE2NTE3MTUwMTN9.lNRm02eFOBKwun2rky6Tst-Rn71a4TOo4k-aW4mVhHs')
    console.log(response1)
   


  }



  login()

  

 


  return <base.ExampleComponent text="Create React Library Example 😄" />
}

export default App
