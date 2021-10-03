import React from 'react';
import styles from './PizzaEvents.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const PizzaEvents = ({id}) => (
  <div className={styles.component}>

    <Link to={process.env.PUBLIC_URL + '/tables/pizzaEvents/new'}>Event NEW</Link>
    <br />
    <Link to={process.env.PUBLIC_URL + `/tables/pizzaEvents/${id}`}>Event ID</Link>
  </div>
);

PizzaEvents.propTypes = {
  id: PropTypes.string,
};

export default withRouter(PizzaEvents);
