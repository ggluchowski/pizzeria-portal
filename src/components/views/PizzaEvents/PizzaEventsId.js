import React from 'react';
import styles from './PizzaEvents.module.scss';
import PropTypes from 'prop-types';
import FormId from '../../common/FormId/FormId';

const PizzaEventsId = ({location}) => (
  <div className={styles.component}>

    <FormId {...location}/>
  </div>
);

PizzaEventsId.propTypes = {
  location: PropTypes.object,
};

export default PizzaEventsId;
