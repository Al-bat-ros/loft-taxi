import React, { useState } from 'react'
import MapsPage from './pages/maps/MapsPage';
import AuthPage from './pages/AuthPages/AuthPage'
import './App.css';
import './pages/AuthPages/inputStyle.css';



export default function App () {

   const [login, setLogin] = useState(false)
   

  
    return (
      <div>
        {login ? <MapsPage /> : <AuthPage setLogin={setLogin} /> } 
      </div>
    )
}


  
