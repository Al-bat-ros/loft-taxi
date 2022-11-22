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
                <button  onClick={() => {}}>Карта</button>
                <button  onClick={() => {}}>Профиль</button>
                <button  onClick={() => setLogin(false)}>Выйти</button>
            </div>
        </div>
    </div>
    
  )
}
