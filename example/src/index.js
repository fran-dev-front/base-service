import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SnackbarProvider, useSnackbar } from 'notistack'

ReactDOM.render(
<SnackbarProvider><App /></SnackbarProvider>, document.getElementById('root'))
