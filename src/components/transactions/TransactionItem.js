import React, { useContext } from 'react'
import TransactionContext from '../../context/transaction/transactionContext'

import './TransactionItem.css'
import { SET_CURRENT } from '../../context/types'


function imageSrc(category) {
  return category + ".svg"
}


export const TransactionItem = ({ transaction }) => {
  const transactionContext = useContext(TransactionContext)
  const { deleteTransaction, setCurrent, } = transactionContext

  const { id, name, amount, category, note, date } = transaction;

  const onDelete = () => {
    deleteTransaction(id)  
  }


  return (
    <>
    <div className="expenseListItem">
      <span className="svg-container">
          <img src={imageSrc(category)} height="15"/>
      </span>
      <span className="amount">${amount}</span>
      <span className="nameAndCategory">
        <span>{name}</span>
        
      </span>
      <span className="svg-container-edit-delete">
          <img src="edit.svg" className="edit-delete-btn"onClick={() => setCurrent(transaction)} />
          <img src="delete.svg" className="edit-delete-btn" onClick={onDelete}/>
      </span>
      
    </div>
    <div className="separator"></div>
    </>

  )
}

 export default TransactionItem;
