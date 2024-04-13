import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./store/index.js"
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import AppRouting from './AppRouting/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouting />
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
