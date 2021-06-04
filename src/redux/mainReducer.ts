import { createSlice } from '@reduxjs/toolkit';
import firebase from '../firebase';

export const slice = createSlice({
  name: 'main',
  initialState: {
    dbArray: [],
    timeArray: [
      {
        id: 1,
        time: '18:00',
        isActive: false,
      },
      {
        id: 2,
        time: '18:30',
        isActive: false,
      },
      {
        id: 3,
        time: '20:00',
        isActive: false,
      },
      {
        id: 4,
        time: '20:30',
        isActive: false,
      },
      {
        id: 5,
        time: '21:00',
        isActive: false,
      },
      {
        id: 6,
        time: '21:30',
        isActive: false,
      },
      {
        id: 7,
        time: '22:00',
        isActive: false,
      },
    ],
    dateArray: [
      {
        id: 1,
        date: 'Сегодня',
        number: 26,
        isActive: false,
      },
      { id: 2, date: 'Cр', number: 27, isActive: false },
      { id: 3, date: 'Чт', number: 28, isActive: false },
      { id: 4, date: 'Пт', number: 29, isActive: false },
      { id: 5, date: 'Сб', number: 30, isActive: false },
      { id: 6, date: 'Вс', number: 31, isActive: false },
      { id: 7, date: 'Пн', number: 1, isActive: false },
    ],
  },
  reducers: {
    setData: (state, action) => {
      state.dbArray.map((el) => (el.date = action.payload));
      return state;
    },
    setTime: (state, action) => {
      state.dbArray.map((el) => (el.time = action.payload));
      return state;
    },
    fetchDb: (state, action) => ({
      ...state,
      dbArray: action.payload,
    }),
    setTimeActive: (state, action) => {
      state.timeArray.forEach((el) => {
        if (el.id === action.payload) {
          el.isActive = !el.isActive;
        } else {
          el.isActive = false;
        }
      });
    },
    setDateActive: (state, action) => {
      state.dateArray.forEach((el) => {
        if (el.id === action.payload) {
          el.isActive = !el.isActive;
        } else {
          el.isActive = false;
        }
      });
    },
  },
});

export const { setData, setTime, setTimeActive, setDateActive, fetchDb } =
  slice.actions;

export const getDbArray = () => async (dispatch, getState) => {
  const db = firebase.firestore();
  const data = await db.collection('date').get();
  dispatch(fetchDb(data.docs.map((doc) => doc.data())));
};

export default slice.reducer;
