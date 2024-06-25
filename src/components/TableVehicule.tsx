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

function createData(
  name: string,
  status: boolean,
  nbcars: number,
  date : string,
  img : string,
) {
  return {
    name,
    // status,
    nbcars,
    date,
    img,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        status: true,
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        status : false,
        amount: 1,
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
              <Avatar alt="Remy Sharp" src={row.img} sx={{ width: 50, height: 50 }} />
            </Stack>
          {row.name}
        </TableCell>
        <TableCell align="right">{row.nbcars}</TableCell>
        {/* <TableCell align="right"><span className={row.status}>{row.status}</span></TableCell> */}
       <TableCell align="right">{row.date}</TableCell>
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
                    <TableCell>Date</TableCell>
                    <TableCell>Car Rented</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Time (days)</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right"><span className={historyRow.status === true? 'completed': 'process'}>{historyRow.status === true? 'available': 'unavailable'}</span></TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
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
  createData('John Doe', true, 4.0, "18-08-2024", "/images/photo1.jpg"),
  createData('John Doe',true, 4.0, "18-08-2024", "/images/photo2.jpg"),
  createData('John Doe',true, 4.0, "18-08-2024", "/images/photo3.jpg"),
  createData('John Doe', false, 4.0, "18-08-2024", "/images/photo4.jpg"),
  createData('John Doe', false, 4.0, "18-08-2024", "/images/photo5.jpg"),
  
];

const TableVehicle = () => {
  return (
    <TableContainer component={Paper}>
      <div className="head">
              <h3>Recent Rents</h3>
          </div>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Custumers</TableCell>
            <TableCell align="right">Cars Rented</TableCell>
            {/* <TableCell align="right">Status</TableCell> */}
            <TableCell align="right">Date Order</TableCell>
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