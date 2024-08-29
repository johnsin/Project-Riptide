// frontend/src/components/ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, isAdmin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        isAdmin === undefined || isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default ProtectedRoute;