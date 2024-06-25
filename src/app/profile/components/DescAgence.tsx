import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const style1={
    // height:"250px",
    width :"95%",
    background: 'var(--light)',
    justifyContent : 'center',
    alignItems:'center',
    borderRadius: '10px',
    margin:'15px',
    padding : "20px"
  }
const center={
  width:'100%', 
  display:'flex', 
  justifyContent:'center',
  alignItems: 'center'
} 


const Agence = ({name, localisation, images, description }) => {
  return (
    <div>
        <div style={style1}>
            <h3 style={center}>{name}</h3>
            <div style={{display:'flex'}}>
                <div style={{width:'50%',  padding:'20px'}}>
                    <LocationOnIcon />{localisation}
                    <Stack direction="row" spacing={2}>
                        <img src={images} style={{width:'100%', height:'auto', padding:'20px'}}/>  
                    </Stack>
                </div>
                <div style={{width:'50%', padding:'20px'}}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Agence