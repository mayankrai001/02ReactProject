import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navigation from './Components/Navigation/Navigation.jsx'
import ContactHeader from './Components/ContactHeader/ContactHeader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
    <ContactHeader/>
  </React.StrictMode>,
)
