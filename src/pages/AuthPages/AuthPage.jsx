import React, { useState, useEffect, useContext } from 'react';
import { FormInput, FormReg } from '../../compnents'
import logo from '../../assets/images/logo.svg';
import { AuthContext } from '../../context/AuthContext'
import './AuthPageStyle.css';



export default function AuthPages({ setLogin }){

    const [routeReg, setRouteReg] = useState(false);
    const auth = useContext(AuthContext)

   
    return (
        <div className="input-page">
            <header className="Main-Header">
                <div className="Main-Header_container">
                    <div className="Main-Header_Logo">
                         <img src={logo} className="Header-Logo" alt="logo" />
                    </div>
                </div>
            </header>
            
            {routeReg ? <FormReg setRouteReg={setRouteReg} /> : <FormInput setLogin={setLogin} setRouteReg={setRouteReg}  /> }
            
        </div>        
    )       
}

