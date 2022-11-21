import React, { useState } from 'react';
import  FormInput  from '../../compnents/forms/FormInput';
import  RegInput  from '../../compnents/forms/RegInput' ;
import MapsComp from '../../compnents/maps/MapsComp'


import logo from '../../images/logo.svg'
import './inputStyle.css';



export default function InputPages({ setLogin }){

    const [routeReg, routeFormReg] = useState(false);
    const [routeInput, routeFormInput] = useState(false);
    
    
    return (
        <div className="input-page">
            <header className="Main-Header">
                <div className="Main-Header_container">
                    <div className="Main-Header_Logo">
                         <img src={logo} className="Header-Logo" alt="logo" />
                    </div>
                </div>
            </header>
            
            {routeReg ? <RegInput routeFormInput={routeFormInput} /> : <FormInput setLogin={setLogin} routeFormReg={routeFormReg}  /> }
            
        </div>        
    )       
}

