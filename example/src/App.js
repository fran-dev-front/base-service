import React from 'react'
import * as base from 'base-service'
import 'base-service/dist/index.css'
import LoginApiService from './api/userLogin'

const App = () => {

  function logout(){
    console.log('logout');
  }

  async function login(){
    let loginService = new LoginApiService();
    let response = await loginService.getAllAuth(logout)
    // let response = await loginService.postData({
    //   email: "omem.emanuel@gmail.com",
    //   password: "a12345678a"
    // })
    // localStorage.setItem('token', response.token)
    console.log(response)
  }

  login()

 


  return <base.ExampleComponent text="Create React Library Example 😄" />
}

export default App
