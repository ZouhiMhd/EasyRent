import React from 'react'
import {FaCalendarCheck, FaDollarSign, FaUsers} from "react-icons/fa"


export const BoxInfoRent = ({children}) => {
  return (
    <li>
       <div style={{
      width: '80px',
      height: '80px',
      borderRadius: '10px',
      background: '#cfe8ff',
      fontSize: '36px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <FaCalendarCheck  color ='#3c91e6'/>
    </div>  <span className="text">
            <h3>{children}</h3>
            <p>Véhicules loués</p>
        </span>
    </li>
    )
};
export const BoxInfoVisit = ({children}) => {
    return (
      <li><div style={{
        width: '80px',
        height: '80px',
        borderRadius: '10px',
        background: '#fff2c6',
        fontSize: '36px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <FaUsers color='#ffce26'/>
      </div>
          <span className="text">
              <h3>{children}</h3>
              <p>Chauffeurs</p>
          </span>
      </li>
      )
  };

export const BoxInfoTotal = ({children}) => {
    return (
      <li>
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '10px',
          background: '#ffe0d3',
          fontSize: '36px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ color: '#fd7238', fontSize:'13px' }}>Francs CFA</span>
      </div>
      <span className="text">
        <h3>{children}</h3>
        <p>Total de location</p>
      </span>
    </li>
      )
  }

