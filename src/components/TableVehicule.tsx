'use client'

import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
// import '../../globals.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { AppBar, Toolbar , Container, Grid, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Image} from "@/components";
import { FaStar } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Visibility from '@mui/icons-material/Visibility';
import {CarDescriptionModal} from './CarDescriptionModal'
import Link from "next/link"
// import Agence from './components/DescAgence';
import { API_BASE_URL, AGENCE_ID } from "@/components/config_api.js";
import axios from 'axios'

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}-${month}-${year} à ${hours}h${minutes}`;
};

const Likes = ({n}) => {
  const [value, setValue] = React.useState<number | null>(n);
  return (
    <Box sx={{ '& > legend': { mt: 2 }, }}>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const endpoint = `chauffeurs/${row.id}/locations`;
        const res = await axios.get(`${API_BASE_URL}/${endpoint}`);
        // console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset', '&:hover': {
        backgroundColor: 'var(--grey)'} } }}>
        
        <TableCell component="th" scope="row">
            <Stack direction="row" spacing={2}>
              <Image endpoint={`vehicules/${row.vehiculeId}/images`} id={row.id} />
            </Stack>
        </TableCell>
        
        <TableCell align="right">{row.clientId}</TableCell>
        <TableCell align="right">
          {row.dateDebut && formatDate(row.dateDebut)}
        </TableCell>
        <TableCell align="right">
          {row.dateFin && formatDate(row.dateFin)}
        </TableCell>
        <TableCell align="right">{row.montant}</TableCell>
         </TableRow>
     
    </React.Fragment>
  );
}



const TableVehicle = () => {
  const [filteredCars, setFilteredCars] = useState([]);
  const [filter, setFilter] = React.useState('all');
  const [data, setData] = useState(null);
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    filterCars(value);
  };
  const filterCars = (criteria) => {
    if (criteria === 'all') {
      setFilteredCars(data);
    } else if (criteria === 'available') {
      setFilteredCars(data.filter((car) => car.statut));
    } else if (criteria === 'unavailable') {
      setFilteredCars(data.filter((car) => !car.statut));
    }
  };

  const fetchVehicles = async () => {
    try {
      const endpoint = `agences/1/locations`;
      const res = await axios.get(`${API_BASE_URL}/${endpoint}`);
      setData(res.data);
      setFilteredCars(res.data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <TableContainer component={Paper}>
      <div
      style={{display:"flex", justifyContent:"space-between", width:"100%", fontSize:"30px", padding:"10px"}}>
      <Typography variant="h5">Your Locations</Typography>
      </div>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell  align="center">Véhicule</TableCell>
            <TableCell align="right">Client</TableCell>
            <TableCell align="right">Date Début</TableCell>
            <TableCell align="right">Date Fin</TableCell>
            <TableCell align="right">Montant</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {filteredCars.map((row) => (
              <Row key={row.id} row={row} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableVehicle