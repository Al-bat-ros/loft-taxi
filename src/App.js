import React, { useState, useEffect } from 'react'
 import FormInput  from './compnents/forms/FormInput';
 import RegInput   from '../src/compnents/forms/RegInput';
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


  
