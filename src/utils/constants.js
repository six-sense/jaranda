// import { getUserInfo } from './getUserInfo';
import storage from './storage/storage';

export const LOCAL_STORAGE = storage(localStorage);

// export const USER_INFO = getUserInfo(); // admin에서 암호화 된 정보 제외한 정보들만 출력
// {
//   id: user.id,
//   name: user.name,
//   age: user.age,
//   role: user.role,
//   address: user.address,
//   menubar: user.menubar,
// }

export const ROUTES = {
  MAIN: '/',
  PARENT: '/parent',
  TEACHER: '/teacher',
  HELP: '/help',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  ADMIN: '/admin',
  ROLE_MANAGEMENT: '/role-management',
};

export const ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  PARENT: 'parent',
};
