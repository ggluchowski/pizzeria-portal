import React from 'react';
import styles from './Ordering.module.scss';
import PropTypes from 'prop-types';
import FormOrderId from '../../common/FormOrderId/FormOrderId';

const OrderId = ({ location }) => (
  <div className={styles.component}>

    <FormOrderId {...location} />
  </div>
);

OrderId.propTypes = {
  location: PropTypes.object,
};

export default OrderId;
