import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox.module.scss';

function Checkbox({labelText, value, setCheckboxState}) {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        value={value}
        onClick={() => setCheckboxState(!value)}
      />
      {labelText}
    </label>
  );
}

Checkbox.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  setCheckboxState: PropTypes.func.isRequired,
};

export default Checkbox;
