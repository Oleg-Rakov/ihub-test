import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setData, setDateActive } from '../../redux/mainReducer';
import styles from './styles.module.css';

const Date = () => {
  const dateArray = useSelector(
    (state: RootStateOrAny) => state.main.dateArray
  );
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      {dateArray.map((el) => {
        return (
          <div
            // Set data; Set Active Element
            onClick={(e) => {
              const date =
                e.currentTarget.getElementsByTagName('span')[0].innerText;
              dispatch(setData(date));
              dispatch(setDateActive(el.id));
            }}
            key={el.id}
            className={
              el.isActive ? `${styles.item} ${styles.active}` : styles.item
            }
          >
            <p className={el.isActive ? styles.dateActive : styles.date}>
              {el.date}
            </p>
            <span className={styles.number}>
              <strong>{el.number}</strong>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Date;
