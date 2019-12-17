import React from 'react'
import Styles from './ExpenseItem.css'


function imageSrc(category) {
  return category + ".svg"
}


export const ExpenseItem = ({ expense }) => {
  const { name, amount, category, note, date } = expense;
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
          <img src="edit.svg" className="edit-delete-btn"/>
          <img src="delete.svg" className="edit-delete-btn"/>
      </span>
      
    </div>
    <div className="separator"></div>
    </>

  )
}

 export default ExpenseItem;
