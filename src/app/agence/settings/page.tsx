'use client'

import React from 'react'
import {useState} from 'react'
import {FuelPrice} from "./components"
import {HeadDash} from "@/components"

const page = () => {
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
    <div>
        <FuelPrice
    initialEssencePrice={prices.essence}
    initialDieselPrice={prices.diesel}
    onUpdate={handleUpdate}
  /></div>
  )
}

export default page