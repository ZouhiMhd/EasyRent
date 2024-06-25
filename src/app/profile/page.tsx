'use client' 

import React from 'react'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../globals.css'
import 'boxicons/css/boxicons.css'
import Agence from './components/DescAgence'


const style1={
    // height:"250px",
    display:'flex',
    width :"95%",
    height:"200px",
    background: 'var(--light)',
    justifyContent : 'center',
    alignItems:'center',
    borderRadius: '10px',
    margin:'15px',
  }
const center={
  width:'100%', 
  display:'flex', 
  justifyContent:'center',
  alignItems: 'center'
} 
const enterprise = [
  {
    id:1,
    name : "Maison Principale",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam itaque, numquam, veritatis exercitationem esse aspernatur quam reiciendis voluptatum a eaque, repellat veniam beatae obcaecati qui tenetur! Porro, ea rem.",
    images : '/images/location-symbol.jpg',
    localisation :' Omnisport, Yaoundé Cameroun'
  },
  {
    id:2,
    name : "Antenne Adamaoua",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam itaque, numquam, veritatis exercitationem esse aspernatur quam reiciendis voluptatum a eaque, repellat veniam beatae obcaecati qui tenetur! Porro, ea rem.",
    images : '/images/location-symbol.jpg',
    localisation :' Bideng, Ngaoundéré Cameroun'
  },
  {
    id:3,
    name : "Antenne Buea",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam itaque, numquam, veritatis exercitationem esse aspernatur quam reiciendis voluptatum a eaque, repellat veniam beatae obcaecati qui tenetur! Porro, ea rem.",
    images : '/images/location-symbol.jpg',
    localisation :' Omnisport, Yaoundé Cameroun'
  },
  {
    id:4,
    name : "Antenne Douala",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam itaque, numquam, veritatis exercitationem esse aspernatur quam reiciendis voluptatum a eaque, repellat veniam beatae obcaecati qui tenetur! Porro, ea rem.",
    images : '/images/location-symbol.jpg',
    localisation :' Yassa, Douala Cameroun'
  }
]
const page = () => {
  return (
    
    <div style={{padding : "20px"}}>
    <div style={style1}>
        <Stack direction="row" spacing={2} style = {{ display:'flex',
    justifyContent:'center',}}>
            <Avatar alt="Remy Sharp" src='' sx={{ width: 200, height: 200 }} style={{color:'white', backgroundColor:'var(--blue)'}} />
        </Stack>
    </div>
    
    <h1 style={center}>Votre entreprise</h1>
    <div style={style1}>
      <h3 style={center}>Description</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quisquam itaque, numquam, veritatis exercitationem esse aspernatur quam reiciendis voluptatum a eaque, repellat veniam beatae obcaecati qui tenetur! Porro, ea rem.</p>
    </div>
      {enterprise.map(e =>
        <Agence key={e.id} images={e.images} localisation={e.localisation} description={e.description} name={e.name}/>
      )}
    </div>
  )
}

export default page