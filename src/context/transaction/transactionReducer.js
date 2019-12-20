import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SET_CURRENT,
  CLEAR_CURRENT,
  // UPDATE_TRANSACTION,
  // FILTER_TRANSACTION,
  // CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          transactions => transactions.id !== action.payload
        )
      };
      
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }

    default:
      return state;
  }
};