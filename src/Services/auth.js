import { LOCAL_STORAGE, ROLES } from 'utils/constants';
import { getCurrentUser } from './user';

export const logout = () => {
  LOCAL_STORAGE.remove('token');
};

export const checkIsLoggedIn = () => {
  return Boolean(getCurrentUser());
};

export const checkIsAdmin = () => {
  const currentUser = getCurrentUser();
  return currentUser.role === ROLES.ADMIN;
};
