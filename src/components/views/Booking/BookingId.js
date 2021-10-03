import React from 'react';
import styles from './Booking.module.scss';
import FormId from '../../common/FormId/FormId';
import PropTypes from 'prop-types';

const BookingId = ({ location }) => {

  // const { number = location.state.number, date, time, table, repeat, duration, ppl, details, type } = location.state;
  return (
    <div className={styles.component}>

      <FormId {...location} />
    </div>
  );
};

BookingId.propTypes = {
  location: PropTypes.object,
};

export default BookingId;

// number, date, time, table, repeat, duration, ppl, details, type
