import React from 'react'
import * as base from 'base-service'
import 'base-service/dist/index.css'
import LoginApiService from './api/userLogin'


const App = () => {

  const loginService = new LoginApiService();
  let response = loginService.getAll({
    email: "alejandro.jata.torres+1@gmail.com",
    password: "test12345"
  })
  

  return <base.ExampleComponent text="Create React Library Example 😄" />
}

export default App
