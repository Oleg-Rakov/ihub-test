import React from 'react';
import styles from './styles.module.css';
import man from '../../assets/images/man.png';

const Info: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.title}>Алексей Карачинский</div>
    <div className={styles.wrapper}>
      <div>
        <img src={man} />
      </div>
      <div className={styles.text}>
        <p className={styles.duration}>Длительность<br></br>консультации</p>
        <span>
          <strong>50 минут</strong>
        </span>
      </div>
    </div>
  </div>
);

export default Info;
