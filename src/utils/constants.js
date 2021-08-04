//import { getUserInfo } from './getUserInfo';
import storage from './storage/storage';

export const LOCAL_STORAGE = storage(localStorage);

//export const USER_INFO = getUserInfo(); // admin에서 암호화 된 정보 제외한 정보들만 출력
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
  SIGN_IN: '/account/signin',
  SIGN_UP: '/account/signup',
  SUPPORT: '/support',
  HELP: '/help',
  ADMIN: '/admin',
  ROLE_MANAGEMENT: '/role-management',
  WATCH: '/watch',
  FORM: '/form',
  HISTORY: '/history',
  SCHEDULE: '/schedule',
  LOG: '/log',
};

export const MENUS = [
  {
    name: '선생님 보기',
    path: ROUTES.WATCH,
  },
  {
    name: '신청서 작성하기',
    path: ROUTES.FORM,
  },
  {
    name: '신청 내역',
    path: ROUTES.HISTORY,
  },
  {
    name: '방문일정',
    path: ROUTES.SCHEDULE,
  },
  {
    name: '방문일지',
    path: ROUTES.LOG,
  },
];

export const ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  PARENT: 'parent',
};
