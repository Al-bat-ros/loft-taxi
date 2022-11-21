import React, { useState, useEffect } from 'react'
import MapsComp from './compnents/maps/MapsComp';
import InputComponent from './pages/input/input'
import './App.css';
import './pages/input/inputStyle.css';



export default function App () {

   const [login, setLogin] = useState(false)
   

  
    return (
      <div>
        {login ? <MapsComp /> : <InputComponent setLogin={setLogin} /> } 
      </div>
    )
}


  
