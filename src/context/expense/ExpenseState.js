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
        category: 'food and drink',
        note: 'morning coffee'
      },
      {
        id: 2,
        name: 'gift for mum',
        category: 'entertainment and social',
        note: 'flowers for mums birthday'
      },
      {
        id: 3,
        name: 'weekly shop',
        category: 'groceries',
        note:
          "light shop this week as I won't be home for dinner on a few nights"
      }
    ]
  };
};
