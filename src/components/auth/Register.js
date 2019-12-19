import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

import './Register.css'

const Register = () => {
    const alertContext = useContext(AlertContext)

    const { setAlert } = alertContext;

    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      password2: '',
    })

  const { name, email, password, password2 } = user

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if(name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else if (password != password2) {
      setAlert('passwords do not match', 'danger')
    } else {
      setAlert('you have successfully registered', 'success')
    }
  }

  return (
    <div className="register-form-container">
      <form onSubmit={onSubmit} >
        <div className="formGroup">
          <input className="text-input" type="text" name="name" value={name} onChange={onChange} placeholder="Name"/>
        </div>
        <div className="formGroup">
          <input className="text-input" type="text" name="email" value={email} onChange={onChange} placeholder="email"/>
        </div>
        <div className="formGroup">
          <input className="text-input" type="text" name="password" value={password} onChange={onChange} placeholder="password"/>
        </div>
        <div className="formGroup">
          <input className="text-input" type="text" name="password2" value={password2} onChange={onChange} placeholder="confirm password"/>
        </div>
        <div className="register-btn-container" >
          <img src="../send.svg" onClick={onSubmit} height="30" className="register-icon"/>
        </div>
      </form>

    </div>
  )
};

export default Register;