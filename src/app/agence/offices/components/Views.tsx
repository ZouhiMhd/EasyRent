'use client';
import React, { useState, useEffect } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import '../../globals.css'
import axios from 'axios';
import {API_BASE_URL, AGENCE_ID} from "@/components/config_api.js";
import {Image} from "@/components"

// const data = [
//   {
//     src: '/images/location-symbol.jpg',
//     title: 'Antenne Yaounde',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//   },
//   {
//     src: '/images/location-symbol.jpg',
//     title: 'Antenne Douala',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//   },
//   {
//     src: '/images/location-symbol.jpg',
//     title: 'Antenne Adamaoua',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//   },
//   {
//     src: '/images/location-symbol.jpg',
//     title: 'Antenne Nord',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//   },
//   {
//     src: '/images/location-symbol.jpg',
//     title: 'Antenne Buea',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//   },
// ];

  
const Views = ({ onSelect }) => {
  const [selectedAgence, setSelectedAgence] = useState(null);

  const handleSelect = (agence_id) => {
    if (selectedAgence=== agence_id) {
      setSelectedAgence(null);
      onSelect(null);
    } else {
      setSelectedAgence(agence_id);
      onSelect(agence_id);
    }
    // console.log(agence_id)
  };
  
const endpoint = `agences/${AGENCE_ID}/services`;

const [data, setData] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      const endpoint = `agences/${AGENCE_ID}/services`;
      const res = await axios.get(`${API_BASE_URL}/${endpoint}`);
      setData(res.data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  fetchData();
}, []);
// console.log(data)

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 5,
        py: 1,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data && data.map((item) => (
        <Card
          key = {item.id}
          orientation="vertical"
          variant="outlined"
          style={{
            width: '350px',
            cursor: 'pointer',
            transform: selectedAgence === item.id ? 'scale(1.15)' : 'scale(1)',
            border: selectedAgence === item.id ? '2px solid var(--blue)' : '1px solid var(--light)',
            transition: 'transform 0.2s, border 0.2s',
          }}
          onClick={() => handleSelect(item.id)}
        >
          <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
            <Image endpoint={`postes/${item.id}/images`} id={item.id} />
          </AspectRatio>
          <Box sx={{ mx: 1 }}>
            <Typography level="title-md">{item.name}</Typography>
            <Typography level="body-sm" style={{ width: '100%' }}>
              {item.description}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Views;
