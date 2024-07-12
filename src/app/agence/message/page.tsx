import React from 'react'
import '../globals.css'
import styles from "../page.module.css";
import {VehicleImages} from "./components"
const page = () => {
  return (
    <div>page
      <VehicleImages vehiculeImmatriculation="ABC123"/>
    </div>
  )
}

export default page