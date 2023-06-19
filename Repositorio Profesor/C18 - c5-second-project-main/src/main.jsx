import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Context from './Clase 18/Context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <Context>
                <App />
            </Context>
        </BrowserRouter>
)
