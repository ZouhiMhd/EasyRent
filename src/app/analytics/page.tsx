'use client'

import React from 'react'
import {GeneralStat, CarRates} from "./components"
import {HeadDash} from "@/components"
import '../globals.css'
import 'boxicons/css/boxicons.css'
import styles from "../page.module.css";

const page = () => {
  return (<main>
    <HeadDash title="Analytics"/>
    <div style={{
        width: '90%',
        height: '500px',
        borderRadius: '10px',
        background: 'white',
        fontSize: '36px',
        display: 'flex',
        marginTop:"50px",
        marginLeft:"50px",
        padding : "50px",
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
        <GeneralStat/>
        
    </div>
    <div style={{
        width: '90%',
        height: '500px',
        borderRadius: '10px',
        background: 'white',
        fontSize: '36px',
        display: 'flex',
        marginTop:"50px",
        marginLeft:"50px",
        padding : "50px",
        justifyContent: 'center',
        alignItems: 'center',
      }}>
    <CarRates/>
    </div>
    </main>
  )
}

export default page