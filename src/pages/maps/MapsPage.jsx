import React, { useState, useEffect } from 'react'
import {Header, FormOrder, FormProfileCard } from '../../compnents'

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
      {modals[routeModals]}
    </div>
  )

}
