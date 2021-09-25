import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={process.env.PUBLIC_URL + '/tables/booking'}>Booking</Link>
    <br />
    <Link to={process.env.PUBLIC_URL + '/tables/pizzaEvents'}>Events</Link>
  </div>
);

export default Tables;
