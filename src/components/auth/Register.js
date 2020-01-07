import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'


import './Register.css'

const Register = props => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)


    const { setAlert } = alertContext;

    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
      if (isAuthenticated) {
        props.history.push('/');
      }
  
      if (error === 'User already exists') {
        setAlert(error, 'danger');
        clearErrors();
      }
      //  eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

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
    } 
    else if (password !== password2) {
      setAlert('passwords do not match', 'danger')
    } 
    else if (password.length < 6) {
      setAlert('password needs to be 6 characters or more', 'danger')
    } 
    else {
      setAlert('you have successfully registered', 'success')
      register({
        name,
        email,
        password
      })
    }
  }

  return (
    <div className="register-form-container">
      <form onSubmit={onSubmit} >
        <div className="formGroup">
          <input 
            className="text-input" 
            type="text" 
            name="name" 
            value={name} 
            onChange={onChange} 
            placeholder="Name" 
          />
        </div>
        <div className="formGroup">
          <input 
            className="text-input" 
            type="text" 
            name="email" 
            value={email} 
            onChange={onChange} 
            placeholder="email" 
          />
        </div>
        <div className="formGroup">
          <input 
            className="text-input" 
            type="text" 
            name="password" 
            value={password} 
            onChange={onChange} 
            placeholder="password" 
          />
        </div>
        <div className="formGroup">
          <input 
            className="text-input" 
            type="text" 
            name="password2" 
            value={password2} 
            onChange={onChange} 
            placeholder="confirm password" 
          />
        </div>
        <div className="register-btn-container" >
          <img src="../send.svg" onClick={onSubmit} height="30" className="register-icon" alt="register icon"/>
        </div>
      </form>

    </div>
  )
};

export default Register;