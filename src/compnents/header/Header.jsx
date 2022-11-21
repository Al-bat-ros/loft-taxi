import React, { useState } from 'react'

export default function Header({ setLogin }) {

  return (
    
    <div>
        <div><h1>Header</h1></div>
        <div>
                <img src="../../images/LogoHeader.svg"></img>
             
            <div>
                <button  onClick={() => setLogin(true)}>Карта</button>
                <button  onClick={() => setLogin(true)}>Профиль</button>
                <button  onClick={() => setLogin(true)}>Выйти</button>
            </div>
        </div>
    </div>
    
  )
}
