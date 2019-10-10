import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import PrivateRoute from "./views/LoginPage/PrivateRoute";


import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Components from "views/Components/Components.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import ActivitiesPage from "views/ActivitiesPage/ActivitiesPage";
import QuestionsPage from "views/QuestionsPage/QuestionsPage";
import AlbumPage from "views/AlbumPage/AlbumPage";
import { Provider } from "react-redux";
import store from "./store";

var hist = createBrowserHistory();

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now(); // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login-page";
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/login-page" component={LoginPage} />
        <Route path="/register-page" component={RegisterPage} />
        <Route path="/activities-page" component={ActivitiesPage} />
        <Route path="/questions-page" component={QuestionsPage} />
        <Route path="/albumUpload-page" component={AlbumPage} />
        
        <PrivateRoute exact path="/profile-page" component={ProfilePage} />
        <Route path="/" component={Components} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
