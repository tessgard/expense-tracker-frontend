import React, { Fragment, useContext } from 'react'
import ExpenseContext from '../../context/expense/expenseContext'
import ExpenseItem from './ExpenseItem'
import Styles from './Expenses.css'


const Expenses = () => {
  const expenseContext = useContext(ExpenseContext)

  const { expenses } = expenseContext
  

  const totalExpenses = () => {
    const result = []
    expenses.map(expense => {
      result.push(Number(expense.amount))
    })
    return result.reduce((a,b)=>a+b)
  }

  return (
    <div className="allExpenses">
      <div className="totalExpenses">
        Total out: ${totalExpenses()}
      </div>
      

      {expenses.map(expense => (
        <ExpenseItem
          key={expense.name} expense={expense}
        />
      ))}
    </div>
  )
}

export default Expenses
