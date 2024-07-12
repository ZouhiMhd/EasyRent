import React from 'react';
import Image from "next/image.d.ts";
import Avatar from '@mui/material/Avatar';

export const Order = ({id, matricule, description, status}) => {

    return (
    <tr>
        <td className="vehicle">     
        <Avatar alt="Remy Sharp" src='' sx={{ width: 200, height: 200 }} style={{color:'white', backgroundColor:'var(--blue)'}} />
  
            <p>{id}</p>
        </td>
        <td>{matricule}</td>
        <td>{description}</td>
        <td><span className={status}>{status}</span></td>
        <td>...</td>
   </tr>
  )
}
