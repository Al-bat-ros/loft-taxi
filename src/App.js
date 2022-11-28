import React, { useEffect, useState, useContext } from 'react'
import { AuthPage, MapsPage } from './pages';
import { AuthContext } from './context/AuthContext'
import './App.css';



 function App (props) {

  //  const [login, setLogin] = useState(false)
   const auth = useContext(AuthContext)
   
   
// useEffect(() => {
// console.log(auth.isLogedIn)
// },[])
  
    return (
      <div>
        {auth.isLogedIn ? <MapsPage   /> : <AuthPage  /> } 
      </div>
    );
}

export default App;

  
