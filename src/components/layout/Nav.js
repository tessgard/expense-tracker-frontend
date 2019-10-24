import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ title, icon }) => {
  return (
    <>
      <header className='nav-header'>
        <h1>{title}</h1>
      </header>

      <div className='nav'>
        <div className='button-container'>
          <button className='white-button'>
            <Link to='/expense/new'>Add expense</Link>
          </button>
          <button className='white-button'>
            <Link to='/incoming/new'>Add incoming</Link>
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
