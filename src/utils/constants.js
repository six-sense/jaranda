import { getUserInfo } from './getUserInfo';

export const USER_INFO = getUserInfo(); // 암호화 된 정보 제외한 정보들만 출력
// {
//   id: user.id,
//   name: user.name,
//   age: user.age,
//   role: user.role,
//   address: user.address,
//   menubar: user.menubar,
// }

export const routes = {
  MAIN: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  ADMIN: '/admin',
};
