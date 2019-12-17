import React, { Fragment, useContext } from 'react'
import TransactionContext from '../../context/transaction/transactionContext'
import TransactionItem from './TransactionItem'
import Styles from './Transactions.css'


const Transactions = () => {
  const transactionContext = useContext(TransactionContext)

  const { transactions } = transactionContext


  const totalTransactions = () => {
    const result = []
    transactions.map(transaction => {
      result.push(Number(transaction.amount))
    })
    return result.reduce((a,b)=>a+b)
  }

  return (
    <div className="allExpenses">
      <div className="totalExpenses">
        Balance: ${totalTransactions()}
      </div>
      

      {transactions.map(transaction => (
        <TransactionItem
          key={transaction.name} transaction={transaction}
        />
      ))}
    </div>
  )
}

export default Transactions
