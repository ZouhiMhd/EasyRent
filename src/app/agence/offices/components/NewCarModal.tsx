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
import '../../globals.css'

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

export default function NewCarModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} style={{color:"white",}}>Add a New Office</Button>
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
          <h3 >Your New Office</h3>
          <Button style={{
            color:'white',
            backgroundColor:'red',
            position:'absolute',
            right:'10px',
          }} type="reset" onClick={() => handleClose()}>Fermer</Button>
          </div>
						<NewCarForm/>
					</Card.Body>
				</MCard> 

      </Container>
    </React.Fragment>
      </Modal> 
    </>
  )
}
