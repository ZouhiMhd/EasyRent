'use client'
import React from 'react'
import {HeadDash} from "@/components"
import {Vehicle, TableVehicle, NewCarModal} from "./components"

export default function (){
  return (
  <main>
      <HeadDash title="Store"/>
      
      <div className="table-data">
      {/* <Vehicle/>  */}
      <TableVehicle/>
      </div>
      <div className="head-title">
      <a href="#" className="btn-download" style={{position : "absolute", bottom : "20px", right : "20px"}}>
            <li className="bx bxs-cloud-download"></li>
            <span className="text"><NewCarModal/></span>
        </a>
        </div>
   </main>

  )
}
