import React, {useState} from 'react';
import Styles from './New.css'

const New = () => {

  const [expense, setExpense] = useState({
    name: '',
    amount: '',
    note: '',
    category: ''
  })

  const {name, amount, note, category} = expense;

  const onChange = e => setExpense({ ...expense, [e.target.name]: e.target.value })

  return <>
    <div className="container-new-expense">
      <div className="new-expense-header">      
      </div>
      <form className="form-container">
        <input
          type="text"
          placeholder="amount"
          name="amount"
          value={amount}
          onChange={onChange}
          className="text-input"
        />
        <input
          type="text"
          placeholder="expense"
          name="name"
          value={name}
          onChange={onChange}
          className="text-input"
        />
        <input
          type="text"
          placeholder="note"
          name="note"
          value={note}
          onChange={onChange}
          className="text-input"
        />
        <div className="radio-btn-container">
          <div>
            <input  type="radio" name="category" value="groceries" checked={category === "groceries"}/>Groceries
          </div>
          <div>
            <input  type="radio" name="category" value="housing" checked={category === "housing"}/>Housing
          </div>
          <div>          
            <input  type="radio" name="category" value="bills" checked={category === "bills"}/>Bills
          </div>
          <div>          
            <input  type="radio" name="category" value="personal" checked={category === "personal"}/>personal
          </div>
          <div>          
            <input  type="radio" name="category" value="drink" checked={category === "drink"}/>Food and Drink
          </div>
          <div>
            <input  type="radio" name="category" value="transportation" checked={category === "transportation"}/>Transportation
          </div>
          <div>          
            <input type="radio" name="category" value="recreation" checked={category === "recreation"}/>Recreation
          </div>
          <div>          
            <input type="radio" name="category" value="other" checked={category === "other"}/>Other
          </div>

          
        </div>

        <div className="submit-btn">
          <inpt type="submit" value='Add Expense'/>Add expense

        </div>
        
      


      </form>




      

    </div>
  </>
};

export default New;
