import React from 'react';
import Image from "next/image.d.ts";

export const Order = ({img, username, date, status}) => {

    return (
    <tr>
        <td className="person">
             
        <Image src={img} alt="Mon beau vehicule" width={50} height={50}/>
         
            <p>{username}</p>
        </td>
        <td>{date}</td>
        <td><span className={status}>{status}</span></td>
   </tr>
  )
}
