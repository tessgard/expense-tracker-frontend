import React, { useReducer } from 'react';
import TransactionContext from './transactionContext';
import transactionReducer from './transactionReducer';
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SET_CURRENT,
  CLEAR_CURRENT,
  // UPDATE_TRANSACTION,
  // FILTER_TRANSACTION,
  // CLEAR_FILTER
} from '../types';

var uniqid = require('uniqid');


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
    ],
    current: null
  };

  const [state, dispatch] = useReducer(transactionReducer, initialState)

  const addTransaction = transaction => {
    transaction.id = uniqid()
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    });  
  }

  const deleteTransaction = id => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    });
  }

  const setCurrent = transaction => {
    dispatch({
      type: SET_CURRENT,
      payload: transaction
    });
  }

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  }



  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        current: state.current,
        addTransaction,
        deleteTransaction,
        setCurrent,
        clearCurrent
      }}>
      { props.children }
    </TransactionContext.Provider>
  )
};

export default TransactionState;