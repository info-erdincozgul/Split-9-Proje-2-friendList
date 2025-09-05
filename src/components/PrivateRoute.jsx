import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useAuthContext();
  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
