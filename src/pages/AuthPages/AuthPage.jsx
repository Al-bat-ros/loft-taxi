import React, { useState } from 'react';
import  FormInput  from '../../compnents/forms/formInput/FormInput';
import  RegInput  from '../../compnents/forms/regInput/RegInput' ;
// import MapsComp from '../maps/MapsComp'


import logo from '../../assets/images/logo.svg';
import './inputStyle.css';



export default function AuthPages({ setLogin }){

    const [routeReg, setRouteReg] = useState(false);
    
    
    
    return (
        <div className="input-page">
            <header className="Main-Header">
                <div className="Main-Header_container">
                    <div className="Main-Header_Logo">
                         <img src={logo} className="Header-Logo" alt="logo" />
                    </div>
                </div>
            </header>
            
            {routeReg ? <RegInput setRouteReg={setRouteReg} /> : <FormInput setLogin={setLogin} setRouteReg={setRouteReg}  /> }
            
        </div>        
    )       
}

