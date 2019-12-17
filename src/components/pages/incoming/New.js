import React, {useState} from 'react';
import Styles from './New.css'

const New = () => {

  const [incoming, setIncoming] = useState({
    name: '',
    amount: '',
    note: '',
    category: ''
  })

  const {name, amount, note, category} = incoming;

  const onChange = e => setIncoming({ ...incoming, [e.target.name]: e.target.value })

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
            <input  type="radio" name="salary" value="salary" checked={category === "salary"}/>Salary
          </div>
          
          <div>          
            <input type="radio" name="category" value="other" checked={category === "other"}/>Other
          </div>

          
        </div>

        <div className="submit-btn">
          <inpt type="submit" value='Add Expense'/>Add incoming

        </div>
        
      


      </form>




      

    </div>
  </>
};

export default New;
