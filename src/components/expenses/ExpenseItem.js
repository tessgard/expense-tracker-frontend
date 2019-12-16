import React from 'react'
import Styles from './ExpenseItem.css'


function imageSrc(category) {
  return category + ".svg"
}


export const ExpenseItem = ({ expense }) => {
  const { name, amount, category, note, date } = expense;
  return (
    <div className="expenseListItem">
      <span className="amount">${amount}</span>
      <span className="nameAndCategory">
        <span>{name}</span>
        <span>
          <img src={imageSrc(category)} height="15"/>
        </span>
      </span>
      
    </div>
  )
}

 export default ExpenseItem;
