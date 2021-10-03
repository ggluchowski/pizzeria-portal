import React from 'react';
import styles from './Ordering.module.scss';
import PropTypes from 'prop-types';
import FormOrderNew from '../../common/FormOrderNew/FormOrderNew';

const OrderNew = ({ location }) => (
  <div className={styles.component}>

    <FormOrderNew {...location} />
  </div>
);

OrderNew.propTypes = {
  location: PropTypes.object,
};

export default OrderNew;
