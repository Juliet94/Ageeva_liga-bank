import React from 'react';
import PropTypes from 'prop-types';

function Range({value, onRangeChange, min, max, step, isTime = false}) {
  return (
    <div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onRangeChange}
      />
      <div>
        <span>
          {isTime ? `${min} лет` : `${min * 100}%`}
        </span>
        {isTime && <span>{max} лет</span>}
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
