import React from 'react'
import * as base from 'base-service'
import 'base-service/dist/index.css'
import LoginApiService from './api/userLogin'

const App = () => {

  

  async function login(){
    let loginService = new LoginApiService();
    let response = await loginService.getAll({
      email: "alejandro.jata.torres+1@gmail.com",
      password: "test12345"
    })
    console.log(response)
  }

  login()

 


  return <base.ExampleComponent text="Create React Library Example 😄" />
}

export default App
