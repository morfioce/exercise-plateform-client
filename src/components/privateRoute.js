import React, {Component} from 'react'
import Auth from '../helpers/auth.js'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated() === true
      ? <Component {...props} user={Auth.getLoggedInUser()} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
)

export default PrivateRoute
