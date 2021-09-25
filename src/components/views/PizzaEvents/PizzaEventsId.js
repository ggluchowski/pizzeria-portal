import React from 'react';
import styles from './PizzaEvents.module.scss';
import PropTypes from 'prop-types';

const PizzaEventsId = ({match}) => (
  <div className={styles.component}>
    <h2>PizzaEventsId view</h2>
    ID: {match.params.id}
  </div>
);

PizzaEventsId.propTypes = {
  match: PropTypes.object,
};

export default PizzaEventsId;
