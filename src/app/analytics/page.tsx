'use client'

import React from 'react'
import {GeneralStat, CarRates} from "./components"
import {HeadDash} from "@/components"

const page = () => {
  return (<main>
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