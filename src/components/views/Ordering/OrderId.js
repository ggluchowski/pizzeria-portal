import React from 'react';
import styles from './Ordering.module.scss';
import PropTypes from 'prop-types';

const OrderId = ({match}) => (
  <div className={styles.component}>
    <h2>OrderId view</h2>
    ID: {match.params.id}
  </div>
);

OrderId.propTypes = {
  match: PropTypes.object,
};

export default OrderId;
