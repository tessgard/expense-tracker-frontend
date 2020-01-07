import React, { useState, useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'

import './Register.css'

const Login = props => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)


  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated} = authContext


  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if( email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else {
      setAlert('you have successfully logged in', 'success')
  }
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
          <img src="../arrow.svg" onClick={onSubmit} height="30" className="register-icon" alt="login icon"/>
        </div>
      </form>

    </div>
  )
};

export default Login;