import React, {useState} from 'react';
import Styles from './New.css'

const New = () => {

  const [transaction, setTransaction] = useState({
    name: '',
    amount: '',
    note: '',
    category: '',
    inOrOut: ''
  })

  const {name, amount, note, category, inOrOut} = transaction;

  const onChange = e => setTransaction({ ...transaction, [e.target.name]: e.target.value })

  return <>
    <div className="container-new-expense">
      <div className="new-expense-header">      
      </div>
      <form className="form-container">
        <div className="in-or-out">
          <div><input  type="radio" name="inOrOut" value="in" checked={inOrOut === "in"}/>in</div>
          <div><input  type="radio" name="inOrOut" value="out" checked={inOrOut === "out"}/>out</div>
        </div>
        <div className="form-divider"></div>

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
          placeholder="name"
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
            <input type="radio" name="category" value="salary" checked={category === "salary"}/>Salary
          </div>
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
          <inpt type="submit" value='Add Expense'/>Add

        </div>
        
      


      </form>




      

    </div>
  </>
};

export default New;
