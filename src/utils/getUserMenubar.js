import { USER_INFO } from './constants';

export const getUserMenubar = (id) => {
  return USER_INFO.find((data) => data.id === id).menubar;
};
