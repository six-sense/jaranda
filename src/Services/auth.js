import { LOCAL_STORAGE } from 'utils/constants';

export const logout = () => {
  LOCAL_STORAGE.remove('token');
};
