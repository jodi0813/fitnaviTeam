import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './fitnavi/App01'
// import App from './fitnavi/HomePage/Index'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
