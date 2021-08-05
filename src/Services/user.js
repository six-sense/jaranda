import { LOCAL_STORAGE, ROLES } from 'utils/constants';

export const getCurrentUser = () => {
  return LOCAL_STORAGE.get('token');
};

export const getUserData = (userId) => {
  const allUserData = LOCAL_STORAGE.get('userData');
  return allUserData.find((user) => user.userId === userId);
};

export const checkIsLoggedIn = () => {
  return Boolean(getCurrentUser());
};

export const checkIsAdmin = () => {
  const currentUser = getCurrentUser();
  return currentUser.role === ROLES.ADMIN;
};

export const getUserMenu = () => {
  const currentUser = getCurrentUser();
  return getUserData(currentUser.userId).menubar;
};

export const isUserMenu = (menuPath) => {
  const currentUser = getCurrentUser();
  if (currentUser) {
    const userDate = getUserData(currentUser.userId);
    const finded = userDate.menubar.find((menu) => menu.path === menuPath);
    return Boolean(finded);
  }
  return false;
};
