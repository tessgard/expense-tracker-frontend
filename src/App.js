import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Nav';
import Home from './components/pages/Home';
import NewTransaction from './components/pages/transaction/New';
import ViewAll from './components/pages/ViewAll';
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alerts from './components/layout/Alerts'

import TransactionState from './context/transaction/TransactionState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';


const App = () => {
  return (
    <AuthState>
      <TransactionState>
        <AlertState>
          <Router>
            <div className='main-app-container'>
              <div className="main-inner-container">
                <>
                  <Navbar />
                  <Alerts />
                  <Switch>
                    <Route exact path='/home' component={Home}></Route>
                    <Route exact path='/transaction/new' component={NewTransaction}></Route>
                    <Route exact path='/viewall' component={ViewAll}></Route>
                    <Route exact path='/register' component={Register}></Route>
                    <Route exact path='/login' component={Login}></Route>
                  </Switch>
                </>
              </div>
            </div>
          </Router>
        </AlertState>
      </TransactionState>
    </AuthState>
  );
};

export default App;
