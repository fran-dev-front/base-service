import React from 'react'
import * as base from 'base-service'
import 'base-service/dist/index.css'
import LoginApiService from './api/userLogin'

const App = () => {

  const loginService = new LoginApiService();
  loginService.getAll({identifier:'whitehat94@hotmail.com', password: '123'})

  return <base.ExampleComponent text="Create React Library Example 😄" />
}

export default App
