import React from 'react';
import {car} from './datacar';

const Title = () => {
  return (
    <>
    {car.map((carItem) => (
    <div className="todo" key={carItem.id} style={{
      height:"80px",
      width :"100%",
      display : "flex",
      alignItems : "center",
      justifyContent :"space-around",
      background: 'var(--light)',
      borderRadius: '10px',
    }}>
            <div className="head" >
             <h3 > 
                <p style={{color:'gray', fontSize:'20px', paddingLeft:'50px'}}>{carItem.brand}</p>
                {carItem.name}
                </h3>  
            </div>
      </div>
    ))}</>
  );
};

export default Title;
