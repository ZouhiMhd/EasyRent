'use client';
import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaCogs, FaGasPump } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { RiToolsLine } from 'react-icons/ri';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EvStationIcon from '@mui/icons-material/EvStation';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { car } from './datacar';

const style = {
  width: '50px',
  height: '50px',
  color: 'var(--blue)',
};
const text1 = {
  color: 'grey',
  fontSize: '15px',
};
const text2 = { color: 'black' };

const Caracteristics1 = () => {
  return (
    <div
      style={{
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: 'var(--light)',
        borderRadius: '10px',
        margin: '15px',
      }}
    >
      <div>
        <AiOutlineDashboard style={style} />
        <h3 style={text1}>Milage</h3>
        <p style={text2}>{car[0].mileage}</p>
      </div>
      <div>
        <FaCogs style={style} />
        <h3 style={text1}>Transmission</h3>
        <p style={text2}>{car[0].transmission}</p>
      </div>
      <div>
        <RiToolsLine style={style} />
        <h3 style={text1}>Seats</h3>
        <p style={text2}>{car[0].seats}</p>
      </div>
      <div>
        <DriveEtaIcon style={style} />
        <h3 style={text1}>Luggage</h3>
        <p style={text2}>{car[0].luggage} Bags</p>
      </div>
      <div>
        <EvStationIcon style={style} />
        <h3 style={text1}>Fuel</h3>
        <p style={text2}>{car[0].fuel}</p>
      </div>
      <div>
        <LocalGasStationIcon style={style} />
        <h3 style={text1}>Consumption</h3>
        <p style={text2}>{car[0].consumption}</p>
      </div>
    </div>
  );
};

export default Caracteristics1;
