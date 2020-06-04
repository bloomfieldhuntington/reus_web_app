// IMPORT: - IMPORTS
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import set_auth_token from './utils/set_auth_token';
// import PrivateRoute from './components/utils_routing/PrivateRoute';
// redux
import { Provider } from 'react-redux';
import store from './store';
import { load_user_business } from './actions/auth_business';

// MARK:- COMPONENTS
import Landing from './components/public/landing/Landing';

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
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
