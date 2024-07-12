import React from 'react'
import {car} from "./datacar";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const style1={
  // height:"350px",
  // width :"100%",
  // display : "flex",
  // alignItems : "center",

  textAlign : 'left',
  background: 'var(--light)',
  borderRadius: '10px',
  margin:'15px',
  padding : "20px"
}
const style2={
  color:'gray', 
  fontSize:'20px', 
  paddingLeft:'50px', 
  width:"100%",
  height:"50px",
  display:"flex",
  justifyContent:"center",
  alignItems : "center",
  }

const Caracteristics3 = () => {
  return (
    <>
    
        <h3 style={style2}>
          Description
        </h3> 
      <div style={style1}> 
        {car.map((carItem, key)=>(
          <p key={carItem.Id}>{carItem.description}</p> 
        ))}
      </div>
      
    </>
  )
}

export default Caracteristics3