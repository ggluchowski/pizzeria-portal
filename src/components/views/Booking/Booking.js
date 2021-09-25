import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Booking.module.scss';
import { withRouter } from 'react-router';

const Booking = ({id}) => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/new'}>Booking NEW</Link>
    <br />
    <Link to={process.env.PUBLIC_URL + `/tables/booking/${id}`}>Booking ID</Link>
  </div>
);

Booking.propTypes = {
  id: PropTypes.string,
};

export default withRouter(Booking);
