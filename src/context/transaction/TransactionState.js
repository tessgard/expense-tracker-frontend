import React, { useReducer } from 'react';
import uuid from 'uuid';
import TransactionContext from './transactionContext';
import transactionReducer from './transactionReducer';
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TRANSACTION,
  FILTER_TRANSACTION,
  CLEAR_FILTER
} from '../types';

const TransactionState = props => {
  const initialState = {
    transactions: [
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
        category: 'salary',
        note: 'monthly payout from Medium blog'
      },
      {
        id: 3,
        name: 'Coffee',
        amount: '-6',
        category: 'drink',
        note: 'catch up with Jim'
      },
      {
        id: 4,
        name: 'Gift',
        amount: '-78',
        category: 'recreation',
        note: 'flowers for mum'
      },
      {
        id: 5,
        name: 'Weekly shop',
        amount: '-110',
        category: 'groceries',
        note: 'weekly groceries'
      },

    ]

  };

  const [state, dispatch] = useReducer(transactionReducer, initialState)

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions
      }}>
      { props.children }
    </TransactionContext.Provider>
  )
};

export default TransactionState;