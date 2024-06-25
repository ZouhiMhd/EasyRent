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
          <h3 style={{padding : "5px"}}>Informations</h3>
          <Form.Group controlId="category" style={{padding : "10px"}}>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" name="category" onChange={handleChange}>
                <option value="">Select category</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </Form.Control>  
           </Form.Group>
           <Form.Group controlId="brand" style={{padding : "10px"}}>
            <Form.Label>Brand</Form.Label>
            <Form.Control type="text" name="brand" value={formData.brand} onChange={handleChange} />
           </Form.Group >
          <Form.Group controlId="insuranceFile" style={{padding : "10px"}}>
            <Form.Label>Insurance File</Form.Label>
            <Form.Control type="file" name="insuranceFile" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="registrationCardFile" style={{padding : "10px"}}>
            <Form.Label>Registration Card File</Form.Label>
            <Form.Control type="file" name="registrationCardFile" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="mileage" style={{padding : "10px"}}>
            <Form.Label>Mileage</Form.Label>
            <Form.Control type="text" name="mileage" value={formData.mileage} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="transmission" style={{padding : "10px"}}>
            <Form.Label>Transmission</Form.Label>
            <Form.Control type="text" name="transmission" value={formData.transmission} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="seats" style={{padding : "10px"}}>
            <Form.Label>Seats</Form.Label>
            <Form.Control type="number" name="seats" value={formData.seats} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="luggageCapacity" style={{padding : "10px"}}>
            <Form.Label>Luggage Capacity</Form.Label>
            <Form.Control type="text" name="luggageCapacity" value={formData.luggageCapacity} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="capacity" style={{padding : "10px"}}>
            <Form.Label>Capacity</Form.Label>
            <Form.Control type="number" name="capacity" value={formData.capacity} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="fuel" style={{padding : "10px"}}>
            <Form.Label>Fuel</Form.Label>
            <Form.Control as="select" name="fuel" onChange={handleChange}>
                <option value="">Select fuel</option>
                <option value="A">Super</option>
                <option value="B">Gazoil</option>
                <option value="C">Petrol</option>
                <option value="D">Electric</option>
            </Form.Control>  
          </Form.Group>
          
          {/* Ajoutez d'autres champs de formulaire ici */}
         
        </Form>
      </div>
      <div style={{ flex: '1', padding: '5px',  maxHeight: '80vh', overflowY: 'auto' }}>
      <h3 style={{padding : "5px"}}>More Details</h3>
          <Form.Group controlId="hasAC" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Air Conditioner" name="hasAC" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="childSeat" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Child Seat" name="childSeat" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="gps" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="GPS" name="gps" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="luggage" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Luggage" name="luggage" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="music" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Music" name="music" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="seatBelt" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Seat Belt" name="seatBelt" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="sleepingBed" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Sleeping Bed" name="sleepingBed" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="water" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Water" name="water" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="bluetooth" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Bluetooth" name="bluetooth" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="openboardComputer" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Openboard Computer" name="openboardComputer" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="audioInput" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Audio Input" name="audioInput" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="longTermTrips" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Long Term Trips" name="longTermTrips" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="carKit" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Car Kit" name="carKit" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="remoteCentralLocking" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Remote Central Locking" name="remoteCentralLocking" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="climateControl" style={{padding : "10px"}}>
            <Form.Check type="checkbox" label="Climate Control" name="climateControl" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="description" style={{padding : "10px"}}>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} />
          </Form.Group>     </div>
      <div style={{ flex: '1', padding: '20px',  maxHeight: '80vh', overflowY: 'auto' }}>
        {/* Section pour afficher les photos sélectionnées */}
        <h3 style={{ marginBottom: '10px' }}>Selected Photos</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {formData.photos.length > 0 ? (
            formData.photos.map((photo, index) => (
              <img key={index} src={URL.createObjectURL(photo)} alt={`photo-${index}`} style={{ marginBottom: '10px', maxWidth: '100%' }} />
            ))
          ) : (
            <p>No photos selected</p>
          )}
          <Form.Group controlId="photos">
            <Form.Label>Add Photos</Form.Label>
            <Form.Control type="file" name="photos" onChange={handleChange} multiple />
          </Form.Group>
          <Button variant="primary" type="submit" style={{bottom:'5px', position:'absolute', width:'30%', display:'flex', justifyContent:'center'}}>
            Submit
          </Button>
        </div>
        
      </div>

    </div>
  );
};

