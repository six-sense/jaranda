import { LOCAL_STORAGE, ROLES } from './constants';

// const searchKeyword = (targets, searchWord) => {
//   console.log('here', targets, searchWord);
//   targets.map((target) => {
//     console.log(target, searchWord);
//     if (target.search(searchWord) >= 0) {
//       return true;
//     }
//   });
//   console.log('false');
//   return false;
// };

export const getUserInfo = (pages, limit, searchWord) => {
  const originalData = LOCAL_STORAGE.get('userData');
  const filteredUserInfo = [];
  const nonFilteredUserInfo = [];
  const paginationInfo = [];

  originalData?.map((user) => {
    if (
      //   searchKeyword([user.userId, user.name], searchWord)
      user.userId.search(searchWord) >= 0 ||
      user.name.search(searchWord) >= 0
    ) {
      filteredUserInfo.push({
        userId: user.userId,
        name: user.name,
        age: user.age,
        role: user.role,
        address: user.address,
        menubar: user.menubar,
      });
    }
    nonFilteredUserInfo.push({
      userId: user.userId,
      name: user.name,
      age: user.age,
      role: user.role,
      address: user.address,
      menubar: user.menubar,
    });
    return;
  });
  const data =
    filteredUserInfo.length !== 0 ? filteredUserInfo : nonFilteredUserInfo;
  const maxPage =
    Math.ceil(data.length / limit) > 0 ? Math.ceil(data.length / limit) : 1;

  data.map((user, idx) => {
    if (idx >= (pages - 1) * limit && idx < pages * limit) {
      paginationInfo.push({
        userId: user.userId,
        name: user.name,
        age: user.age,
        role: user.role,
        address: user.address,
        menubar: user.menubar,
      });
    }
    return;
  });
  return { userData: paginationInfo, maxPage: maxPage };
};

export const getCurrentUser = () => {
  return LOCAL_STORAGE.get('token');
};

export const getUserData = (userId) => {
  const allUserData = LOCAL_STORAGE.get('userData');
  return allUserData.find((user) => user.userId === userId);
};

export const checkIsAdmin = () => {
  const currentUser = getCurrentUser();
  return currentUser.role === ROLES.ADMIN;
};

export const getUserMenu = () => {
  const currentUser = getCurrentUser();
  return getUserData(currentUser.userId).menubar;
};
