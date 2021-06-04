import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setTimeActive, setTime } from '../../redux/mainReducer';
import styles from './styles.module.css';

const Time = () => {
  const timeArray = useSelector((state: RootStateOrAny) => state.main.timeArray);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Свободное время</div>
      <div className={styles.wrapper}>
        {timeArray.map((el, idx) => {
          return (
            <div
              // Set data; Set Active Element
              onClick={(e) => {
                dispatch(setTimeActive(el.id));
                dispatch(setTime(e.currentTarget.innerText));
              }}
              className={
                el.isActive ? `${styles.item} ${styles.active}` : styles.time
              }
              key={el.id}
            >
              {el.time}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Time;
