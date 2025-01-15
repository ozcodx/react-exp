import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'

const Button = ({text}) => {
  return(
    <button>{text}</button>
    )
}

createRoot(document.getElementById('root')).render(
    <App />
)
