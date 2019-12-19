import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.css';


const Nav = ({ title, icon }) => {
  return (
    <>
      <header className='nav-header'>
        <span>
          <Link to='/home'><img src="../home.svg" className="home-icon"/></Link>
          
        </span>
      </header>

      <div className='nav'>
        <div className='button-container'>
          <button className='white-button'>
            <Link to='/transaction/new'>Add new</Link>
          </button>
          <button className='white-button'>
            <Link to='/viewall'>View All</Link>
          </button>
        </div>
      </div>
    </>
  );
};

Nav.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string
};

Nav.defaultProps = {
  title: 'Basic Expense Tracker',
  icon: 'fas fa-id-card-alt'
};

export default Nav;
