import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Card as MCard} from "@mui/material";
import { Card, Form, Row, Col } from "react-bootstrap";
import {NewCarForm} from "./NewCarForm"
import Visibility from '@mui/icons-material/Visibility';
import '../../globals.css'
import {useState} from 'react';
import { Grid, Paper, Divider, makeStyles } from '@mui/material';
    
const style = {
    position: 'absolute' as 'absolute',
    height: '90vh',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width:'70vw',
    bgcolor: '#cfe8fc',
    boxShadow: 24,
    borderRadius: 12,
    p: 4,
  };


const datacar=[{
    category: '',
    brand: '',
    insuranceFile: null,
    registrationCardFile: null,
    fuelType: '',
    hasAC: false,
    childSeat: false,
    gps: false,
    luggage: false,
    music: false,
    seatBelt: false,
    sleepingBed: false,
    water: false,
    bluetooth: false,
    onboardComputer: false,
    audioInput: false,
    longTermTrips: false,
    carKit: false,
    remoteCentralLocking: false,
    climateControl: false,
    mileage: '40,000',
    transmission: 'Manual',
    seats: '5 Adults',
    luggageCapacity: '4 Bags',
    fuel: 'Petrol',
    description: '',
    photos: [], // Pour stocker plusieurs photos
}]
  
export const CarDescriptionModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
  return (
    <>
      <Button onClick={handleOpen} style={{color:"black",}}><Visibility/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <React.Fragment>
        <CssBaseline />
            <Container maxWidth="sm">
                <MCard style={style} className="col-md-8">
                    <Card.Body>
                        <div className="head" style={{display:'flex', justifyContent:'center', width:'100%', height:'70px', alignItems:'center', color : 'var(--blue)'}}>
                            <h3 >Your New Car to Rent</h3>
                        </div>
                    </Card.Body>
                </MCard> 
            </Container>
        </React.Fragment>
      </Modal> 
    </>
  )
}
