import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const NewCarForm = () => {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const inputValue = type === 'checkbox' ? checked : type === 'file' ? files : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre les données du formulaire
    console.log(formData);
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
      <div style={{ flex: '1', padding: '20px',  maxHeight: '70vh', overflowY: 'auto'}}>
        <Form onSubmit={handleSubmit}>
          {/* Autres champs de formulaire */}
          <h3 style={{padding : "5px", display:"flex", justifyContent:"center"}}>Informations</h3>
    
           <Form.Group controlId="name" style={{padding : "10px"}}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
           </Form.Group >

           <Form.Group controlId="mail" style={{padding : "10px"}}>
            <Form.Label>Localisation</Form.Label>
            <Form.Control type="text" name="localisation" value={formData.localisation} onChange={handleChange} />
           </Form.Group >
           <Form.Group controlId="mail" style={{padding : "10px"}}>
            <Form.Label>Office</Form.Label>
              <Form.Control as="select" name="siege" onChange={handleChange}>
                    <option value="">Select office</option>
                    <option value="PRINCIPAL">Principal</option>
                    <option value="ANNEXE">Annexe</option>
              </Form.Control>  
            </Form.Group >
            
           <Form.Group controlId="description" style={{padding : "10px"}}>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} />
          </Form.Group>
          
           
        </Form>
        <Button variant="primary" type="submit" style={{bottom:'5px',width:'50%', display:'flex', justifyContent:'center', margin:"20px"}}>
            Submit
      </Button>
      </div>
     
          </div>
  );
};

