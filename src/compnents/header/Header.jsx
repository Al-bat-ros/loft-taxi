import React, { useState } from 'react'
import HeaderLogo from '../../assets/images/LogoHeader.svg'

export default function Header({ setLogin }) {

  return (
    
    <div>
        <div><h1>Header</h1></div>
        <div>
            <div>
              <img src={HeaderLogo} alt="Header Logo"></img>
            </div>           
            <div>
                <button  onClick={() => setLogin(true)}>Карта</button>
                <button  onClick={() => setLogin(true)}>Профиль</button>
                <button  onClick={() => setLogin(true)}>Выйти</button>
            </div>
        </div>
    </div>
    
  )
}
