'use client';
import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import '../../globals.css'

const data = [
  {
    src: '/images/location-symbol.jpg',
    title: 'Antenne Yaounde',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    src: '/images/location-symbol.jpg',
    title: 'Antenne Douala',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    src: '/images/location-symbol.jpg',
    title: 'Antenne Adamaoua',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    src: '/images/location-symbol.jpg',
    title: 'Antenne Nord',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    src: '/images/location-symbol.jpg',
    title: 'Antenne Buea',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
];

const Views = ({ onSelect }) => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleSelect = (title) => {
    if (selectedTitle === title) {
      setSelectedTitle(null);
      onSelect(null);
    } else {
      setSelectedTitle(title);
      onSelect(title);
    }
  };

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
      {data.map((item) => (
        <Card
          key={item.title}
          orientation="vertical"
          variant="outlined"
          style={{
            width: '350px',
            cursor: 'pointer',
            transform: selectedTitle === item.title ? 'scale(1.15)' : 'scale(1)',
            border: selectedTitle === item.title ? '2px solid var(--blue)' : '1px solid var(--light)',
            transition: 'transform 0.2s, border 0.2s',
          }}
          onClick={() => handleSelect(item.title)}
        >
          <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ mx: 1 }}>
            <Typography level="title-md">{item.title}</Typography>
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
