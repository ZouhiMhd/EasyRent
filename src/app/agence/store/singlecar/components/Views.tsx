import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

const data = [
  {
    src: '/images/v3.png',
    title: 'Vue Haut',
    description: '4.21M views',
  },
  {
    src: '/images/v3.png',
    title: 'Vue Bas',
    description: '4.74M views',
  },
  {
    src: '/images/v3.png',
    title: 'Vue Interieur',
    description: '3.98M views',
  },{
    src: '/images/v3.png',
    title: 'Vue Circulation',
    description: '3.98M views',
  },{
    src: '/images/v3.png',
    title: 'Vue Dessous',
    description: '3.98M views',
  },
];

export default function Views() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
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
        <Card orientation="horizontal" size="sm" key={item.title} variant="outlined">
          <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
            <Typography level="title-md">{item.title}</Typography>
            <Typography level="body-sm">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
