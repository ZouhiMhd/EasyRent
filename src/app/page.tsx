'use client'

import 'bootstrap/dist/css/bootstrap.css'
import 'boxicons/css/boxicons.css'
import Image from "next/image";
import styles from "./page.module.css";
import  "./globals.css";
import {SideBar,TableVehicle,Info, HeadDash, RencentOrder, VehicleState} from "@/components";

export default function Home() {
  return (<>
  <main>
    <HeadDash title="Dashboard" />

    <Info qte1="1203" qte2="25000" qte3="250 000Fcfa"/>    
     <div className="table-data">
          {/* <RencentOrder/> */}
          <TableVehicle/>
          
        
         <VehicleState completed="10%" nocompleted="300px"/>    
     </div>
 </main></>
 
   )
}
