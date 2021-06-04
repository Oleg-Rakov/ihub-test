import React from 'react';
import styles from './styles.module.css';
import vector from '../../assets/images/vector.svg';
import calendar from '../../assets/images/calendar.svg';

const PossibleDate: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div>
        <span className={styles.possibleDate}>Возможная дата</span>
      </div>
      <div className={styles.calendar}>
        <img src={vector} />
        <img className={styles.calendarImg} src={calendar} />
      </div>
    </div>
  </div>
);

export default PossibleDate;
