import React from 'react';
import Image from "next/image.d.ts";
import '../../globals.css'

export const Order = ({img, id, matricule, description, status}) => {

    return (
    <tr>
        <td className="vehicle">     
            <Image src={img} alt="Mon beau vehicule" width={50} height={50}/>
            <p>{id}</p>
        </td>
        <td>{matricule}</td>
        <td>{description}</td>
        <td><span className={status}>{status}</span></td>
        <td>...</td>
   </tr>
  )
}
