import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Nav';
import Home from './components/pages/Home';
import NewTransaction from './components/pages/transaction/New';
import ViewAll from './components/pages/ViewAll';

import TransactionState from './context/transaction/TransactionState';

const App = () => {
  return (
    <TransactionState>
      <div className='main-app-container'>
        <Router>
          <>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/transaction/new' component={NewTransaction}></Route>
                <Route exact path='/viewall' component={ViewAll}></Route>
              </Switch>
            </div>
          </>
        </Router>
      </div>
    </TransactionState>
  );
};

export default App;
