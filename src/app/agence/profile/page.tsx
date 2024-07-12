'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import '../globals.css';
import Agence from './components/DescAgence';
import { API_BASE_URL, AGENCE_ID } from "@/components/config_api.js";

const style1 = {
    display: 'flex',
    width: "95%",
    height: "200px",
    background: 'var(--light)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    margin: '15px',
};

const center = {
  width: '100%', 
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
};

const Page = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const endpoint = `agences/${AGENCE_ID}/services`;
        const res = await axios.get(`${API_BASE_URL}/${endpoint}`);
        // console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    }

    fetchData();
  }, []);

  const [agence, setAgence] = useState(null);
  useEffect(() => {
    async function fetchName() {
      try {
        const endpoint_name = `agences/${AGENCE_ID}`;
        const res_agence = await axios.get(`${API_BASE_URL}/${endpoint_name}`);
        setAgence(res_agence.data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    }
    fetchName();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div style={style1}>
        <Stack direction="row" spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar alt="Remy Sharp" src='' sx={{ width: 200, height: 200 }} style={{ color: 'white', backgroundColor: 'var(--blue)' }} />
        </Stack>
      </div>

      <h1 style={center}>Votre agence : {agence && agence.name}</h1>
      
      {data && data.map(e =>
        <Agence key={e.id} id={e.id} localisation={e.localisation} description={e.description} name={e.seige} />
      )}
    </div>
  );
};

export default Page;
