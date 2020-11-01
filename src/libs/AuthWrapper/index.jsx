import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import { getIsAuth } from '../../redux/Auth/Auth.selectors';

export const AuthWrapper = ({ exact, path, component }) => {
  const isAuth = useSelector(getIsAuth);
  
  return isAuth ? <Route exact={exact} path={path} component={component} /> : <Redirect to={routes.Root.path} />;
};

AuthWrapper.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired,
}

export default AuthWrapper;
