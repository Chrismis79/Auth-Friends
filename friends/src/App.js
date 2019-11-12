import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/LoginForm';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/protected">Friends</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path='/protected'>
          <Route exact path='/protected' component={FriendList}/>
        </PrivateRoute>
        <Route path='/login' component={Login} />
        <Route path='/signup'/>
        <Route component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
