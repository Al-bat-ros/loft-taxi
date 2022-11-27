import React, { useState } from 'react'
import { AuthPage, MapsPage } from './pages';

import './App.css';
//import './pages/AuthPages/AuthPageStyle.css';



export default function App () {

   const [login, setLogin] = useState(false)
   

  
    return (
      <div>
        {login ? <MapsPage setLogin={setLogin}  /> : <AuthPage setLogin={setLogin} /> } 
      </div>
    )
}


  
