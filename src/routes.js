import { React } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTES } from './utils/constants';
import { checkIsAdmin, checkIsLoggedIn } from 'utils/getUserInfo';

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
  if (!checkIsLoggedIn()) {
    return <Redirect to={ROUTES.MAIN} />;
  }

  if (checkIsAdmin()) {
    return <Route {...rest}>{children}</Route>;
  }

  return (
    <Route {...rest}>
      {restricted ? children : <Redirect to={ROUTES.MAIN} />}
    </Route>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
  restricted: PropTypes.bool,
};
