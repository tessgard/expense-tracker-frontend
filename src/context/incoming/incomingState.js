import React, { useReducer } from 'react';
import uuid from 'uuid';
import IncomingContext from './incomingContext';
import incomingReducer from './incomingReducer';
import {
  ADD_INCOMING,
  DELETE_INCOMING,
  SET_CURRENT_INCOMING,
  CLEAR_CURRENT_INCOMING,
  UPDATE_INCOMING,
  FILTER_INCOMING,
  CLEAR_FILTER_INCOMING
} from '../types';

const IncomingState = props => {
  const initialState = {
    incoming: [
      {
        id: 1,
        name: 'Salary',
        amount: '3780',
        category: 'salary',
        note: 'monthly'
      },
      {
        id: 2,
        name: 'Medium',
        amount: '16',
        category: 'other',
        note: 'monthly payout from Medium blog'
      },
      
    ]
  };

  const [state, dispatch] = useReducer(incomingReducer, initialState)

  return (
    <IncomingContext.Provider
      value={{
        incoming: state.incoming
      }}>
      { props.children }
    </IncomingContext.Provider>
  )
};

export default IncomingState;