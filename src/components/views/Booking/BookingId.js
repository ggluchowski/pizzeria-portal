import React from 'react';
import styles from './Booking.module.scss';
import PropTypes from 'prop-types';

const BookingId = ({match}) => (
  <div className={styles.component}>
    <h2>BookingId view</h2>
    ID: {match.params.id}
  </div>
);

BookingId.propTypes = {
  match: PropTypes.object,
};

export default BookingId;
