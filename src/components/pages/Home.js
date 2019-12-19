import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
  return (
    <div className="homepage-container">
    <button className='register-btn'>
      <Link to='/register'>Register</Link>
    </button>
    <button className='register-btn'>
      <Link to='/Login'>Login</Link>
  </button>
  </div>
  )
};

export default Home;
