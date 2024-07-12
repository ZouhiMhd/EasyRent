'use client'

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/auth';
import Stack from '@mui/material/Stack';
import '../globals.css'

import 'boxicons/css/boxicons.css'
import styles from "../page.module.css";
import {ExitToApp} from '@mui/icons-material';

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
const form1={
    display:'flex',
    justifyContent:'space-between',
    fontSize:'30px',
    padding:'15px'
}
const input1={
    width:'50%',
    borderRadius:'10px',
    backgroundColor:'var(--grey)'
}
  
const page = () => {
//   const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // Fonction de connexion
      router.push('/dashboard'); // Redirection vers le tableau de bord après connexion réussie
    } catch (error) {
      setError('Adresse email ou mot de passe incorrect');
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <div style={{padding:'20px'}}>
        <div style={style1}>
            <Stack direction="row" spacing={2} style = {{ display:'flex', justifyContent:'center', height:'160px'}}>
                <img src='/banners/car.jpg' style={{width:'auto', height:'100%'}}/>
            </Stack>
        </div> 
        <div style={style1}>
            <h1 style={center}>Déconnexion</h1>
        </div>
        <div style={style1}>
      <form onSubmit={handleLogin}>
    
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <button  className='deconnect' type="submit">Se déconnecter <ExitToApp/></button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default page;
