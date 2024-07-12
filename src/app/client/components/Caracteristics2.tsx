'use client'

import React from 'react';
import { car } from './datacar';

function CheckBoxList({ items }) {
  return (
    <div>
      {items.map(([title, key]) => (
        <div key={key} style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
          <label style={{ display: 'block' }}>{title}</label>
          <input type="checkbox" checked={car[0][key]} readOnly />
        </div>
      ))}
    </div>
  );
}

export const Caracteristics2 = () => {
  const elements = [
    ["Aircondition", "hasAC"],
    ["Child Seat", "childSeat"],
    ["GPS", "gps"],
    ["Luggage", "luggage"],
    ["Music", "music"],
    ["Seat Belt", "seatBelt"],
    ["Sleeping Bed", "sleepingBed"],
    ["Water", "water"],
    ["Bluetooth", "bluetooth"],
    ["Onboard computer", "onboardComputer"],
    ["Audio input", "audioInput"],
    ["Long Term Trips", "longTermTrips"],
    ["Car Kit", "carKit"],
    ["Remote central locking", "remoteCentralLocking"],
    ["Climate control", "climateControl"]
  ];

  const style = {
    // height: "100%",
    width: "30%",
    background: 'var(--light)',
    borderRadius: '10px'
  };

  const style1 = {
    background: 'white',
    borderRadius: '10px',
    margin:'25px',
    display: "flex",
    // width:"100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding: '1px',
  };
  const style2={
    color:'gray', 
    fontSize:'40px', 
    paddingLeft:'50px',
    margin : "20px", 
    // width:"100%",
    height:"100px",
    display:"flex",
    justifyContent:"center",
    alignItems : "center",
    }
  return (
    <div >
    <h3 style={style2}>
       Features
     </h3>
    <div style={style1}>
      <div style={style}>
        <CheckBoxList items={elements.slice(0, 5)} />
      </div>
      <div style={style}>
        <CheckBoxList items={elements.slice(5, 10)} />
      </div>
      <div style={style}>
        <CheckBoxList items={elements.slice(10, 15)} />
      </div>
    </div>
    </div>
  );
}
