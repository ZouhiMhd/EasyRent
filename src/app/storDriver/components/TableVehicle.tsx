import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
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
  localisation : string,
  img : string,
) {
  return {
    name,
    status,
    matricule,
    localisation,
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
              <Avatar alt="Remy Sharp" style={{color:'white', backgroundColor:'var(--blue)'}} />
    
              {/* <Image alt="Remy Sharp" src={row.img} width={50} height={50} /> */}
            </Stack>
          {row.name}
        </TableCell>
        
        <TableCell align="right">{row.matricule}</TableCell>
        <TableCell align="right"><span className={row.status === true? 'completed': 'process'}>{row.status === true? 'available': 'unavailable'}</span></TableCell>
        <TableCell align="right">{row.localisation}</TableCell>
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
  createData('John Doe', true, 455322, 'Yaoundé', "/images/v1.png"),
  createData('Jane Doe', false, 43442, 'Douala', "/images/v2.png"),
  createData('Joe', true, 44533, 'Ngaoundéré', "/images/v3.png"),
  createData('Martin', false, 44242, 'Buea', "/images/v4.png"),
  createData('Thomas',true, 43553, 'Bafoussam', "/images/v5.png"),
  
];

const TableVehicle = () => {
  return (
    <TableContainer component={Paper}>
      <div className="head">
          <h3>Your Drivers</h3>
          <i className="bx bx-search"></i>
          <i className="bx bx-filter"></i>
      </div>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Véhicule</TableCell>
            <TableCell align="right">Matricule</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Localisation</TableCell>
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
  );
}
export default TableVehicle