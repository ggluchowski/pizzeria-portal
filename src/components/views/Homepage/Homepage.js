import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function viewBooking(number, date, time, table, repeat, duration, ppl, details, type) {
  return { number, date, time, table, repeat, duration, ppl, details, type };
}

const rows = [
  viewBooking('L-1', '28-09-2021', '15:30', 1, true, 2, 2, 'water', 'event'),
  viewBooking('L-2', '28-09-2021', '14:00', 2, false, 3, 2, 'pizza', 'event'),
  viewBooking('L-3', '28-09-2021', '16:30', 2, true, 1, 2, 'water', 'booking'),
  viewBooking('L-4', '28-09-2021', '20:30', 3, false, 4, 2, 'water', 'event'),
  viewBooking('L-5', '28-09-2021', '17:00', 1, false, 2, 3, 'water, pizza', 'booking'),
  viewBooking('Z-6', '28-09-2021', '22:30', 2, true, 2, 2, 'water', 'booking'),
  viewBooking('Z-7', '28-09-2021', '18:00', 3, true, 3, 4, 'pizza', 'booking'),
];

const counter = (type, array) => {
  let count = 0;
  console.log(type);
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    // count = 1;
    //
    if (array[i].number.substr(0, 1) === type) {
      count++;
    }
  }
  return count;
};

const Homepage = () => (
  <div className={styles.component}>
    <div>
      <h3>Zamówienia lokalne:</h3>
      {counter('L', rows)}
      <h3>Zamówienia zdalne:</h3>
      {counter('Z', rows)}
    </div>
    <div>

      <h3>Lista rezerwacji na aktualny dzień:</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nr rezerwacji</TableCell>
              <TableCell id='1' align="center">Godzina</TableCell>
              <TableCell id='2' align="center">Stolik</TableCell>
              <TableCell id='3' align="center">Liczba osób</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.number}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.time}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.table}
                </TableCell>
                <TableCell align="center">{row.ppl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  </div>
);

export default Homepage;
