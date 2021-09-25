import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ordering.module.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Ordering = ({id}) => (
  <div className={styles.component}>
    <h2>Ordering view</h2>

    <Link to={process.env.PUBLIC_URL + '/waiter/ordering/new'}>Order NEW</Link>
    <br />
    <Link to={process.env.PUBLIC_URL + `/waiter/ordering/order/${id}`}>Order ID</Link>

  </div>
);

Ordering.propTypes = {
  id: PropTypes.string,
};

export default withRouter(Ordering);
