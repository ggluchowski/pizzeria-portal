import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SelectStatus from '../../common/Select/SelectStatus';

function createData(number, dateAndTime, details, status) {
  return { number, dateAndTime, details, status };
}

const rows = [
  createData('1', '2021-09-26T15:15:15.412Z', 'pizza - 2, pasta - 3, brakefast - 4', 'ready'),
  createData('2', '2021-09-26T16:15:15.412Z', 'pizza - 2, pasta - 3, brakefast - 4', 'ordered'),
  createData('3', '2021-09-26T17:15:15.412Z', 'pizza - 2, pasta - 3, brakefast - 4', 'delivered'),
  createData('Z-1', '2021-09-26T18:15:15.412Z', 'pizza - 2, pasta - 3, brakefast - 4', 'in delivery'),
  createData('Z-20', '2021-09-26T17:17:15.412Z', 'pizza - 2, pasta - 3, brakefast - 4', 'done'),
];


const Kitchen = () => {

  return (
    <div className={styles.component}>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Numer <br />zamówienia/<br />stolika</TableCell>
              <TableCell align="right">Data i godzina</TableCell>
              <TableCell align="right">Szczegóły zamówienia</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell align="right">{row.dateAndTime}</TableCell>
                <TableCell align="right">{row.details}</TableCell>
                <TableCell align="right"><SelectStatus value={row.status} /> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Kitchen;
