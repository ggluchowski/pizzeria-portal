import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Toolbar from '@mui/material/Toolbar';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    postAction: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    tables: PropTypes.array,
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status, order) {
    const { postAction } = this.props;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => postAction(id, 'thinking')}>
              thinking
            </Button>
            <Button onClick={() => postAction(id, 'new order')}
            >
              new order
            </Button>
          </>

        );
      case 'thinking':
        return (
          <Button onClick={() => postAction(id, 'new order')}
            component={Link} to={{
              pathname: process.env.PUBLIC_URL + `/waiter/ordering/new`,
              state: { status },
            }}
          >new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => postAction(id, 'prepared', order)} >prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => postAction(id, 'delivered', order)} >delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => postAction(id, 'paid', order)}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => postAction(id, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
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
              {tables.map(row => (
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
                    {this.renderActions(row.id, row.status, row.order)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
