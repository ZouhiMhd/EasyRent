import React from 'react'
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container, Box, Grid, Paper, Button } from '@mui/material';
import Link from 'next/link';
import type { NextPage } from "next";

const cars = [
  {
    name: 'Mercedes Grand Sedan',
    image: '/images/car-1.jpg',
    hourlyRate: 15,
    dailyRate: 70,
    monthlyRate: 1200,
  },
  {
    name: 'Range Rover',
    image: '/images/car-2.jpg',
    hourlyRate: 15,
    dailyRate: 70,
    monthlyRate: 1200,
  },
  {
    name: 'Mercedes Grand Sedan',
    image: '/images/car-3.jpg',
    hourlyRate: 15,
    dailyRate: 70,
    monthlyRate: 1200,
  },
  {
    name: 'Range Rover',
    image: '/images/car-4.jpg',
    hourlyRate: 15,
    dailyRate: 70,
    monthlyRate: 1200,
  },
];

const page = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
             CarBook
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundImage: 'url(/images/bg_3.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3">Pricing</Typography>
      </Box>

      <Container sx={{ padding: '60px 0' }}>
        <Grid container spacing={4}>
          {cars.map((car, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ padding: '20px', textAlign: 'center' }}>
                <Box
                  sx={{
                    width: '100%',
                    height: '200px',
                    backgroundImage: `url(${car.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></Box>
                <Typography variant="h5" sx={{ marginBottom: '10px' }}>{car.name}</Typography>
                <Typography>Hourly Rate: ${car.hourlyRate}</Typography>
                <Typography>Daily Rate: ${car.dailyRate}</Typography>
                <Typography>Monthly Rate: ${car.monthlyRate}</Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                  Rent a car
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default page