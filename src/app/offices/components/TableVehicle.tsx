import * as React from 'react';
import {useState} from 'react';
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
import Image from "next/image.d.ts";
import { FaStar } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Visibility from '@mui/icons-material/Visibility';
import {CarDescriptionModal} from './CarDescriptionModal'
import Link from "next/link"

const Likes = ({n}) => {
  const [value, setValue] = React.useState<number | null>(n);
  return (
    <Box sx={{ '& > legend': { mt: 2 }, }}>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}


function createData(
  name: string,
  status: boolean,
  matricule: number,
  img : string,
) {
  return {
    name,
    status,
    matricule,
    img,
    history: [
      {
        pickdate: '2020-01-05',
        backdate: '2020-01-05',
        customer: 'John Doe',
        likes: 3,
        price : 5000,
      },
      {
        pickdate: '2020-01-02',
        backdate: '2020-01-05',
        customer: 'Jane Doe',
        likes: 1,
        price : 5000,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
              <Image alt="Remy Sharp" src={row.img} width={50} height={50} />
            </Stack>
          {row.name}
        </TableCell>
        <TableCell align="right">{row.matricule}</TableCell>
        <TableCell align="right"><span className={row.status === true? 'completed': 'process'}>{row.status === true? 'available': 'unavailable'}</span></TableCell>
       <TableCell align="right"><Link href='/store/singlecar' style={{color:"black",}}><Visibility/></Link></TableCell>
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
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.pickdate}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {historyRow.backdate}
                      </TableCell>
                      <TableCell>{historyRow.customer}</TableCell>
                      <TableCell align="right"><Likes n={historyRow.likes}/></TableCell>
                      <TableCell align="right">
                        {historyRow.price}
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

const rows = [
  createData('Mercedes', true, 455322, "/images/v1.png"),
  createData('Rav4', false, 43442, "/images/v2.png"),
  createData('Prado', false, 44533, "/images/v3.png"),
  createData('Toyota', true, 44242, "/images/v4.png"),
  createData('Ferrari',false, 43553, "/images/v5.png"),
  
];

const TableVehicle = () => {
  
  const [filter, setFilter] = React.useState('all');
  const [filteredCars, setFilteredCars] = useState(rows);

  const handleFilterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setFilter(value);
    filterCars(value);
  };

  const filterCars = (criteria: string) => {
    if (criteria === 'all') {
      setFilteredCars(rows);
    } else if (criteria === 'available') {
      setFilteredCars(rows.filter((car) => car.status === 'available'));
    } else if (criteria === 'unavailable') {
      setFilteredCars(rows.filter((car) => car.status === 'unavailable'));
    } 
    // else if (criteria === 'pending') {
    //   setFilteredCars(rows.filter((car) => car.status === 'pending'));
    // }
  };

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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
export default TableVehicle