import React, { useState, useEffect } from 'react'
import {Header, FormOrder, FormProfileCard, Maps } from '../../compnents'

import './mapStyle.css'

export default function MapsComp({ setLogin}) {


  const [routeModals, setRouteModal ] = useState('formOrder')

  const modals = {
    formOrder: <FormOrder />,
    formProfileCard: <FormProfileCard />
  }


  return (
  
    <div>
      <Header setRouteModal={setRouteModal} setLogin={setLogin}/>
      <Maps />
      {modals[routeModals]}
      
    </div>
  )

}
