import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import '../../globals.css'
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
import Agence from './components/DescAgence';
import { API_BASE_URL, AGENCE_ID } from "@/components/config_api.js";
import axios from 'axios'

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
        const endpoint = `vehicules/${row.immatriculation}/locations`;
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
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
            <Stack direction="row" spacing={2}>
              {/* <Image alt="Remy Sharp" src={row.img} width={50} height={50} /> */}
              <Image endpoint={`vehicules/${row.immatriculation}/images`} id={row.id} />
            </Stack>
          {row.marque} {row.couleur}
        </TableCell>
        <TableCell align="right">{row.immatriculation}</TableCell>
        <TableCell align="right"><span className={row.statut === true? 'completed': 'process'}>{row.statut === true? 'available': 'unavailable'}</span></TableCell>
       <TableCell align="right">
        <ul style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
            <li><button style={{textDecoration:'none', border:'none', backgroundColor:'transparent'}}><i className="bx bx-edit"  style={{fontSize:"25px", color:"blue"}}></i></button></li>
            <li><button style={{textDecoration:'none', border:'none', backgroundColor:'transparent'}}><i className="bx bx-trash" style={{fontSize:"25px", color:"red"}}></i></button></li>
            <li><Link href='/store/singlecar' style={{color:"black",}}><Visibility/></Link></li>
          </ul>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Pick-up Date</TableCell>
                    <TableCell>Back-up Date</TableCell>
                    <TableCell>Custumer</TableCell>
                    <TableCell align="right">Likes</TableCell>
                    <TableCell align="right">Total price (F cfa)</TableCell>
                  </TableRow>
                </TableHead>
                 <TableBody >
                  {data && data.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                        {historyRow.dateDebut}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {historyRow.dateFin}
                      </TableCell>
                      <TableCell>{historyRow.clientId}</TableCell>
                      <TableCell align="right"><Likes n="2"/></TableCell>
                      <TableCell align="right">
                        {historyRow.montant}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const TableVehicle = () => {
  
  const [filter, setFilter] = React.useState('all');
  const [filteredCars, setFilteredCars] = useState([]);
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
      const endpoint = `agences/${AGENCE_ID}/vehicules`;
      // const endpoint = `postes/1/vehicules`;
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
    <Container>
      <div
      style={{display:"flex", justifyContent:"space-between", width:"100%", fontSize:"30px", padding:"10px"}}>
      <Typography variant="h5">Your Vehicles</Typography>
        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <InputLabel>Filter By</InputLabel>
          <Select value={filter} onChange={handleFilterChange} label="Filter By">
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="unavailable">Unavailable</MenuItem>
            {/* <MenuItem value="pending">Pending</MenuItem> */}
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Vehicle</TableCell>
            <TableCell align="right">Matricule</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCars.map((row) => (
              <Row key={row.immatriculation} row={row} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
export default TableVehicle