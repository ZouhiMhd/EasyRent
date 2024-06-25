'use client'

import React from 'react'
import {HeadDash} from "@/components"
import {TableVehicle, Views} from "./components"
import '../globals.css'
import 'boxicons/css/boxicons.css'
import{ useState} from 'react'
import styles from "../page.module.css";

export default function (){
    const [selectedAntenna, setSelectedAntenna] = useState('');
    const handleAntennaSelect = (title) => {
    setSelectedAntenna(title);
  };
  return (
    <main>
    <HeadDash title="Offices"/>
    <Views onSelect={handleAntennaSelect}/>
      <div className="table-data">

        <h2 style={{width:'100%', display:'flex', justifyContent:'center'}}>{selectedAntenna || 'Toutes les antennes'}</h2>

      <TableVehicle/>
      
      </div>
      </main>

  )
}
