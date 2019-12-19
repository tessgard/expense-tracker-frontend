import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

import './Register.css'

const Login = () => {
  const alertContext = useContext(AlertContext)

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if( email === '' || password === '') {
      setAlert('Please enter all fields')
    }
    console.log("register submit")
  }

  return (
    <div className="register-form-container">
      <form onSubmit={onSubmit} >
        <div className="formGroup">
          <input className="text-input" type="text" name="email" value={email} onChange={onChange} placeholder="email"/>
        </div>
        <div className="formGroup">
          <input className="text-input" type="text" name="password" value={password} onChange={onChange} placeholder="password"/>
        </div>
        <div className="register-btn-container" >
          <img src="../arrow.svg" onClick={onSubmit} height="30" className="register-icon"/>
        </div>
      </form>

    </div>
  )
};

export default Login;