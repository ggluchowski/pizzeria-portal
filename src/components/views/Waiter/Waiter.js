import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const demoContent = [
  { id: '1', status: 'free', order: null, table: null },
  { id: '2', status: 'thinking', order: null, table: null },
  { id: '3', status: 'ordered', order: 123, table: 1 },
  { id: '4', status: 'prepared', order: 234, table: 2 },
  { id: '5', status: 'delivered', order: 345, table: null },
  { id: '6', status: 'paid', order: 456, table: 3 },
];

const renderActions = (status, row) => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button component={Link} to={{
            pathname: process.env.PUBLIC_URL + `/waiter/ordering/new`,
            state: { ...row },
          }}>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button component={Link} to={{
          pathname: process.env.PUBLIC_URL + `/waiter/ordering/new`,
          state: { ...row },
        }}>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Container maxWidth='lg'>
    <Toolbar />
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button component={Link} to={{
                  pathname: process.env.PUBLIC_URL + `/waiter/ordering/order/${row.order}`,
                  state: { ...row },
                }}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {renderActions(row.status, row)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Container>
);

export default Waiter;
