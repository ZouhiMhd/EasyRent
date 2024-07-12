import React from 'react'
import {car} from "./datacar";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const style1 = {
  background: 'white',
  borderRadius: '10px',
  margin:'25px',
  display: "flex",
  width:"100%",
  height:'300px',
  overflow:'auto',
  alignItems: "center",
  justifyContent: "space-around",
  padding: '1px',
};
const style2={
  color:'gray', 
  fontSize:'40px', 
  paddingLeft:'50px', 
  // width:"100%",
  height:"50px",
  display:"flex",
  justifyContent:"center",
  alignItems : "center",
  }

export const Caracteristics3 = () => {
  return (
    <div style={{paddingTop:"50px"}}>
    
        <h3 style={style2}>
          Description
        </h3> 
      <div style={style1}> 
        {car.map((carItem, key)=>(
          <p key={carItem.Id}>{carItem.description}</p> 
        ))}
      </div>
      
    </div>
  )
}

