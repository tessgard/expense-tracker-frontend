import React, {useState, useContext} from 'react';
import TransactionContext from '../../../context/transaction/transactionContext';

import './New.css';

const New = () => {

  const transactionContext = useContext(TransactionContext)

  const [transaction, setTransaction] = useState({
    name: '',
    amount: '',
    note: '',
    category: '',
    inOrOut: ''
  })

  const {name, amount, note, category, inOrOut} = transaction;

  const onChange = e => setTransaction({ ...transaction, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault();
    transactionContext.addTransaction(transaction);
    setTransaction({
      name: '',
      amount: '',
      note: '',
      category: '',
      inOrOut: ''
    })
  }

  return <>
    <div className="container-new-expense">
      <div className="new-expense-header">      
      </div>
      <form onSubmit={onSubmit} className="form-container">
        <div className="in-or-out">
          <div><input  type="radio" name="inOrOut" value="in" checked={inOrOut === "in"} onChange={onChange}/>in</div>
          <div><input  type="radio" name="inOrOut" value="out" checked={inOrOut === "out"} onChange={onChange}/>out</div>
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
            <input id="salary" type="radio" name="category" value="salary" checked={category === "salary"} onChange={onChange}
/>
            <label for="salary" >Salary</label>
          </div>
          <div>
            <input  type="radio" name="category" value="groceries" checked={category === "groceries"} onChange={onChange}/>Groceries
          </div>
          <div>
            <input  type="radio" name="category" value="housing" checked={category === "housing"} onChange={onChange}/>Housing
          </div>
          <div>          
            <input  type="radio" name="category" value="bills" checked={category === "bills"} onChange={onChange}/>Bills
          </div>
          <div>          
            <input  type="radio" name="category" value="personal" checked={category === "personal"} onChange={onChange}/>personal
          </div>
          <div>          
            <input  type="radio" name="category" value="drink" checked={category === "drink"} onChange={onChange}/>Food and Drink
          </div>
          <div>
            <input  type="radio" name="category" value="transportation" checked={category === "transportation"} onChange={onChange}/>Transportation
          </div>
          <div>          
            <input type="radio" name="category" value="recreation" checked={category === "recreation"} onChange={onChange}/>Recreation
          </div>
          <div>          
            <input type="radio" name="category" value="other" checked={category === "other"} onChange={onChange}/>Other
          </div>

          
        </div>

        <div className="submit-btn">
          <input type="submit" value='Add' onClick={onSubmit}/>

        </div>
        
      


      </form>




      

    </div>
  </>
};

export default New;
