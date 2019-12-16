import React, { useReducer } from 'react';
import uuid from 'uuid';
import ExpenseContext from './expenseContext';
import expenseReducer from './expenseReducer';
import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EXPENSE,
  FILTER_EXPENSE,
  CLEAR_FILTER
} from '../types';

const ExpenseState = props => {
  const initialState = {
    expenses: [
      {
        id: 1,
        name: 'coffee',
        amount: '5',
        category: 'drink',
        note: 'morning coffee'
      },
      {
        id: 2,
        name: 'gift',
        amount: '63',
        category: 'recreation',
        note: 'flowers for mums birthday'
      },
      {
        id: 3,
        name: 'restaurant',
        amount: '47',
        category: 'recreation',
        note:
          "light shop this week as I won't be home for dinner on a few nights"
      },
      {
        id: 4,
        name: 'weekly shop',
        amount: '47',
        category: 'groceries',
        note:
          "light shop this week as I won't be home for dinner on a few nights"
      },
      {
        id: 5,
        name: 'fuel',
        amount: '59',
        category: 'transportation',
        note:
          "full tank"
      },
      {
        id: 6,
        name: 'make-up',
        amount: '23',
        category: 'personal',
        note:
          "needed new mascara"
      },
      {
        id: 7,
        name: 'lost bet',
        amount: '20',
        category: 'other',
        note:
          "lost a bet to Peter"
      },
      {
        id: 8,
        name: 'rent',
        amount: '900',
        category: 'housing',
        note:
          "monthly rent"
      },
      {
        id: 9,
        name: 'phone bill',
        amount: '65',
        category: 'bills',
        note:
          "monthly phone bill"
      }
    ]
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState)

  // add expense

  // delete expense

  // set current expense

  // clear current expense

  // update expense

  // filter expense

  // clear filter

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses
      }}>
      { props.children }
    </ExpenseContext.Provider>
  )
};

export default ExpenseState;