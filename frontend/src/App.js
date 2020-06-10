// IMPORT: - IMPORTS
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import set_auth_token from './utils/set_auth_token';
import PrivateRoute from './components/utils/PrivateRoute';
// redux
import { Provider } from 'react-redux';
import store from './store';
import { load_user_business } from './actions/auth_business';
import { load_user } from './actions/auth_user';

// MARK:- COMPONENTS
// PUBLIC
import Landing from './components/public/Landing';
// User
import Register from './components/public/Register';
import Login from './components/public/Login';
// Business
import RegisterBusiness from './components/public/RegisterBusiness';
import LoginBusiness from './components/public/LoginBusiness';
import ProfileBusiness from './components/private/ProfileBusiness';


// Utils
const jwtDecode = require('jwt-decode');

var loadUserAfterRoleCheck = () => {};

// Check the role of user to control correct access
if (localStorage.token) {
  const decoded = jwtDecode(localStorage.token);
  const accesscontrol = decoded.user.role;
  if (accesscontrol === 0) {
    loadUserAfterRoleCheck = load_user();
  } else if (accesscontrol === 1) {
    loadUserAfterRoleCheck = load_user_business();
    
  }
}

if (localStorage.token) {
  set_auth_token(localStorage.token);
}

const App = () => {
  store.dispatch(loadUserAfterRoleCheck)
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          {/* PUBLIC ROUTES */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/business/register" component={RegisterBusiness} />
          <Route exact path="/business/login" component={LoginBusiness} />
          {/* PRIVATE ROUTES */}
          <PrivateRoute exact path="/business/profile" component={ProfileBusiness} />

          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
