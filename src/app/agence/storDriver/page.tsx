'use client'

import React from 'react'
import {HeadDash} from "@/components"
import {Vehicle, TableVehicle, NewCarModal} from "./components"
import '../globals.css'
import 'boxicons/css/boxicons.css'
import styles from "../page.module.css";

export default function (){
  return (
  <>
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
   </>

  )
}
