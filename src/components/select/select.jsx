import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './select.module.scss';
import cn from 'classnames';
import {CreditInfo} from '../../const';

const DEFAULT_PURPOSE = 'Выберите цель кредита';

function Select({purpose, setPurpose}) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        className={cn(styles.button, isSelectOpen && styles.button_select_open)}
        onClick={() => setIsSelectOpen(!isSelectOpen)}
        type="button"
      >
        {purpose ? CreditInfo[purpose].LABEL : DEFAULT_PURPOSE}
      </button>
      {isSelectOpen && (
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <input
              className={cn('visually-hidden', styles.input)}
              id={CreditInfo.mortgage.VALUE}
              type="radio"
              name="credit"
              value={CreditInfo.mortgage.VALUE}
            />
            <label
              className={styles.label}
              onClick={(evt) => {
                setPurpose(evt.target.htmlFor);
                setIsSelectOpen(false);
              }}
              htmlFor={CreditInfo.mortgage.VALUE}
            >
              {CreditInfo.mortgage.LABEL}
            </label>
          </li>
          <li className={styles.list_item}>
            <input
              className={cn('visually-hidden', styles.input)}
              id={CreditInfo.car.VALUE}
              type="radio"
              name="credit"
              value={CreditInfo.car.VALUE}
            />
            <label
              className={styles.label}
              onClick={(evt) => {
                setPurpose(evt.target.htmlFor);
                setIsSelectOpen(false);
              }}
              htmlFor={CreditInfo.car.VALUE}
            >
              {CreditInfo.car.LABEL}
            </label>
          </li>
        </ul>
      )}
    </div>
  );
}

Select.propTypes = {
  purpose: PropTypes.string.isRequired,
  setPurpose: PropTypes.func.isRequired,
};

export default Select;
