import React, { useReducer } from 'react';
import { ReservationForm } from '../components/ReservationForm';

export const Reservations = (() => {
  const updateTimes = (state, action) => {
    return state;
  };

  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [state, dispatch] = useReducer(updateTimes, initialTimes);

  return (
    <>
      <ReservationForm state={state} dispatch={dispatch} />
    </>
  );
});
