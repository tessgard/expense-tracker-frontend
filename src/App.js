import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Nav';
import Home from './components/pages/Home';
import NewExpense from './components/pages/expense/New';
import NewIncoming from './components/pages/incoming/New';
import ViewAll from './components/pages/ViewAll';

import ExpenseState from './context/expense/ExpenseState';

const App = () => {
  return (
    <ExpenseState>
      <div className='main-app-container'>
        <Router>
          <>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/expense/new' component={NewExpense}></Route>
                <Route exact path='/incoming/new' component={NewIncoming}></Route>
                <Route exact path='/viewall' component={ViewAll}></Route>
              </Switch>
            </div>
          </>
        </Router>
      </div>
    </ExpenseState>
  );
};

export default App;
