'use client'

import React from 'react'
import {HeadDash} from "@/components"
import {Vehicle, TableVehicle, NewCarModal, FuelPrice} from "./components"
import '../globals.css'
import 'boxicons/css/boxicons.css'
import {useState} from 'react'
import styles from "../page.module.css";

export default function (){
  // const [fuelPrices, setFuelPrices] = useState({
  //   essence: null,
  //   diesel: null,
  // });
  // const [updateMessage, setUpdateMessage] = useState('');
  // const handleUpdate = (prices) => {
  //   setFuelPrices(prices);
  //   setUpdateMessage('Les prix des carburants ont été mis à jour avec succès');
  //   setTimeout(() => setUpdateMessage(''), 3000); // Message disparaît après 3 secondes
  // };
  const [prices, setPrices] = useState({
    essence: 1.50,
    diesel: 1.30,
  });

  const handleUpdate = (updatedPrices) => {
    console.log("Mise à jour des prix :", updatedPrices);
    setPrices({
      essence: parseFloat(updatedPrices.essence.replace( '','franc CFA/Litre ')),
      diesel: parseFloat(updatedPrices.diesel.replace( '','franc CFA/Litre ')),
    });
  };
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
        <div >
        {/* <FuelPrice onUpdate={handleUpdate} /> */}
        <FuelPrice
        initialEssencePrice={prices.essence}
        initialDieselPrice={prices.diesel}
        onUpdate={handleUpdate}
      />
      </div>
   </>

  )
}
