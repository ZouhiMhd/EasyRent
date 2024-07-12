import React from 'react';
import {car} from './datacar';

export const Title = () => {
  return (
    <>
    {car.map((carItem) => (
      
    <div className="todo" key={carItem.id} style={{
      height:"100px",
      width :"100%",
      display : "flex",
      alignItems : "center",
      justifyContent :"space-around",
      background: 'var(--light)',
      borderRadius: '10px',
    }}>
      
    <div className="head" >
      <h3 style={{width:'100%',display:'flex', flexDirection:'column',justifyContent:'center' }}> 
      <p style={{
          color: 'gray', 
          fontSize: '30px', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {carItem.brand}
        </p>                
      <p style={{fontSize:'40px'}}>{carItem.name}</p>
        </h3>  
    </div>
      </div>
    ))}</>
  );
};
