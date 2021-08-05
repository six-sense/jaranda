import { React } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from './constants';
import { checkIsAdmin, checkIsLoggedIn } from './getUserInfo';

export const PublicRoute = ({ restricted, children, ...rest }) => {
  return (
    <Route {...rest}>
      {checkIsLoggedIn() && restricted ? (
        <>
          {checkIsAdmin() ? (
            <Redirect to={ROUTES.ADMIN} />
          ) : (
            <Redirect to={ROUTES.MAIN} />
          )}
        </>
      ) : (
        children
      )}
    </Route>
  );
};

PublicRoute.propTypes = {
  children: PropTypes.element,
  restricted: PropTypes.bool,
};

export const PrivateRoute = ({ restricted, children, ...rest }) => {
  return (
    <Route {...rest}>
      {checkIsLoggedIn() && restricted ? (
        children
      ) : (
        <>
          {checkIsAdmin() ? (
            <Redirect to={ROUTES.ADMIN} />
          ) : (
            <Redirect to={ROUTES.MAIN} />
          )}
        </>
      )}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
  restricted: PropTypes.bool,
};
