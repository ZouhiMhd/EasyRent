import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const data = [
  {
    src: '/images/car-2.jpg',
    title: 'Vue Haut',
    description: '4.21M views',
  },
  {
    src: '/images/car-2.jpg',
    title: 'Vue Bas',
    description: '4.74M views',
  },
  {
    src: '/images/car-2.jpg',
    title: 'Vue Interieur',
    description: '3.98M views',
  },{
    src: '/images/car-10.jpg',
    title: 'Vue Circulation',
    description: '3.98M views',
  },{
    src: '/images/car-10.jpg',
    title: 'Vue Dessous',
    description: '3.98M views',
  },
];

export default function Views() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        py: 2,
        overflow: 'auto',
        width: '100%',
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card orientation="vertical" size="md" key={item.title} variant="outlined" sx={{
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          },
        }}>
          <AspectRatio ratio="16/9" sx={{ minWidth: 300 }}>
            <img
              srcSet={`${item.src}?h=180&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=180&fit=crop&auto=format`}
              alt={item.title}
              style={{
                borderRadius: '8px 8px 0 0',
                objectFit: 'cover',
              }}
            />
          </AspectRatio>
          <Box sx={{ p: 2, flexGrow: 1 }}>
            <Typography level="title-md" mb={1}>{item.title}</Typography>
            <Typography level="body-sm" color="neutral.500">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}


