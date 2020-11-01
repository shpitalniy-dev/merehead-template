import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes'
import { getIsAuth } from '../../redux/Auth/Auth.selectors';

const NotAuthWrap = ({ exact, path, component }) => {
    const isAuth = useSelector(getIsAuth);
    
    return isAuth ? <Redirect to={routes.Root.path} /> : <Route exact={exact} path={path} component={component} />;
};

NotAuthWrap.propTypes = {
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    component: PropTypes.object.isRequired,
  }

export default NotAuthWrap;
