// IMPORT: - IMPORTS
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import set_auth_token from './utils/set_auth_token';
import PrivateRoute from './components/utils/PrivateRoute';
// redux
import { Provider } from 'react-redux';
import store from './store';
import { load_user_business } from './actions/auth_business';

// MARK:- COMPONENTS
// public
import Landing from './components/beta/landing/Landing';
import Category from './components/beta/category/Catagory';
// business
import BusinessRegister from './components/beta/register/business/auth/BusinessRegister';
import BusinessProfile from './components/beta/profiles/business/BusinessProfile';


// Utils
const jwtDecode = require('jwt-decode');

var loadUserAfterRoleCheck = () => {};

// Check the role of user to control correct access
if (localStorage.token) {
  const decoded = jwtDecode(localStorage.token);
  const accesscontrol = decoded.user.role;
  if (accesscontrol === 1) {
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
          <Route exact path="/business/register" component={BusinessRegister} />
          <Route exact path="/category" component={Category} />
          {/* PRIVATE ROUTES */}
          <PrivateRoute exact path="/business/profile" component={BusinessProfile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
