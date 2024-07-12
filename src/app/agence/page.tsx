'use client'

import 'bootstrap/dist/css/bootstrap.css'
import 'boxicons/css/boxicons.css'
import Image from "next/image";
import styles from "./page.module.css";
import  "./globals.css";

// import CarCarousel from "../client/components/carCarousel"
import {SideBar,TableVehicle,Info, HeadDash, RencentOrder, VehicleState} from "@/components";

export default function Home() {
  return (<>
  <main>
    <HeadDash title="Dashboard" />
    <Info qte1="12" qte2="5" qte3="250 000Fcfa"/>    
     <div className="table-data">
          {/* <RencentOrder/> */}
          <TableVehicle/>
          
        
         <VehicleState completed="10%" nocompleted="300px"/>    
     </div>
 </main></>
 
   )
}
