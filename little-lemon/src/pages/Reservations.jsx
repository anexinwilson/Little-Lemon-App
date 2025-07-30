/* Reservations component integrating ReservationForm with time management */
import React, { useReducer } from "react";
import { ReservationForm } from "../components/ReservationForm";

export const Reservations = () => {
  /* Reducer for updating available times */
  const updateTimes = (state, action) => {
    return state;
  };

  /* Initial list of available reservation times */
  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [state, dispatch] = useReducer(updateTimes, initialTimes);

  /* Renders ReservationForm with state and dispatch props */
  return <ReservationForm state={state} dispatch={dispatch} />;
};
