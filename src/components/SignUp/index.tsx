import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { getDbArray } from '../../redux/mainReducer';
import firebase from '../../firebase';
import { NotificationManager } from 'react-notifications';

const SignUp = () => {
  const dispatch = useDispatch();
  const dbArray = useSelector((state: RootStateOrAny) => state.main.dbArray);
  const date = dbArray.map((el) => el.date);
  const time = dbArray.map((el) => el.time);

  useEffect(() => {
    dispatch(getDbArray());
  }, []);

  const onUpdate = () => {
    const db = firebase.firestore();
    const doc = db
      .doc('date/MwegOBmTgXAwNS2NX2C6')
      .update({ date: date, time: time });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.date}>
          <p className={styles.title}>Дата</p>
          <span className={styles.info}>
            <strong>{date} мая</strong>
          </span>
        </div>
        <div className={styles.border}></div>
        <div className={styles.time}>
          <p className={styles.title}>Время</p>
          <span className={styles.info}>
            <strong>{time}</strong>
          </span>
        </div>
      </div>
      <div className={styles.button}>
        <button
          onClick={() => {
            onUpdate();
            NotificationManager.success('Confirm');
          }}
        >
          ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
        </button>
      </div>
    </div>
  );
};

export default SignUp;
