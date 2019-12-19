import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
SET_ALERT,
CLEAR_ALERT,
} from '../types';

var uniqid = require('uniqid');


const AlertState = props => {
  const initialState = []

  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (msg, type, timeout = 3000) => {
    const id = uniqid()
    dispatch({
      type: SET_ALERT,
      payload: {msg, type, id}
    })
    setTimeout(() => dispatch({ type: CLEAR_ALERT, payload: id }), timeout)
  }


  return (
    <AlertContext.Provider
      value={{  
        alerts: state,
        setAlert

      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;