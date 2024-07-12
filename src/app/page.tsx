'use client'

import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import './globals.css'; // Importer le fichier CSS pour les styles
import Link from "next/link"

const Page = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <Typography variant="h3" gutterBottom className="title">
          Bienvenue sur EasyRent
        </Typography>
        <Typography variant="subtitle1" gutterBottom className="subtitle">
          Louez maintenant ou proposez votre agence de véhicules
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link href="/client">
            <Button variant="contained" color="primary" className="action-button">
              Je loue maintenant
            </Button>
            </Link> 
          </Grid>
          <Grid item>
          <Link href="/agence/register">
            <Button variant="contained" color="secondary" className="action-button">
              Je propose mon agence de véhicules
            </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Page;
