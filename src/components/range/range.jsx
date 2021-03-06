import React from 'react';
import PropTypes from 'prop-types';
import styles from './range.module.scss';

function Range({value, onRangeChange, min, max, step, isTime = false}) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onRangeChange}
      />
      <div className={styles.span_wrapper}>
        <span className={styles.span}>
          {isTime ? `${min} лет` : `${Math.round(value * 100)}%`}
        </span>
        {isTime && <span className={styles.span}>{max} лет</span>}
      </div>
    </div>
  );
}

Range.propTypes = {
  value: PropTypes.number,
  onRangeChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  isTime: PropTypes.bool,
};

export default Range;
