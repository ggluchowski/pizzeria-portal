import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DatePicker from '../../common/DatePicker/DatePicker';

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
  viewBooking(1, '28-09-2021', '15:30', 1, true, 2, 2, 'water', 'event'),
  viewBooking(2, '28-09-2021', '14:00', 2, false, 3, 2, 'pizza', 'event'),
  viewBooking(3, '28-09-2021', '16:30', 2, true, 1, 2, 'water', 'booking'),
  viewBooking(4, '28-09-2021', '20:30', 3, false, 4, 2, 'water', 'event'),
  viewBooking(5, '28-09-2021', '17:00', 1, false, 2, 3, 'water, pizza', 'booking'),
  viewBooking(6, '28-09-2021', '22:30', 2, true, 2, 2, 'water', 'booking'),
  viewBooking(7, '28-09-2021', '18:00', 3, true, 3, 4, 'pizza', 'booking'),
];

const Tables = () => (
  <div className={styles.component}>
    <div className={styles.component}>
      <Stack direction="row" spacing={5}>
        <Button variant="contained" component={Link} to={process.env.PUBLIC_URL + '/tables/booking/new'}>New BOOKING</Button>
        <Button variant="contained" component={Link} to={process.env.PUBLIC_URL + '/tables/pizzaEvents/new'}>
          New EVENT
        </Button>
      </Stack>
    </div>

    <div className={styles.component}>
      <DatePicker />
    </div>

    <div className={styles.component}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Godzina</TableCell>
              <TableCell id='1' align="center">Stolik 1</TableCell>
              <TableCell id='2' align="center">Stolik 2</TableCell>
              <TableCell id='3' align="center">Stolik 3</TableCell>
              <TableCell align="center">Szczegóły zamówienia</TableCell>
              <TableCell align="center">Edycja</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.time}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.table === 1 ? 'X' : ''}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.table === 2 ? 'X' : ''}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.table === 3 ? 'X' : ''}
                </TableCell>

                <TableCell align="center">{row.details}</TableCell>
                <TableCell align="center">
                  <Link to={{
                    pathname: process.env.PUBLIC_URL
                      + `/tables/${row.type === 'event' ? 'pizzaEvents' : 'booking'}/${row.number}`,
                    state: { ...row },
                  }}
                  >EDIT</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  </div >
);

export default Tables;
