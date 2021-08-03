import { LOCAL_STORAGE } from './constants';

export const getUserInfo = (pages, limit, searchWord) => {
  const originalData = LOCAL_STORAGE.get('userData');
  const filteredUserInfo = [];
  const paginationInfo = [];

  originalData?.map((user) => {
    if (
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
  });
  const data = filteredUserInfo ? filteredUserInfo : originalData;
  const maxPage = Math.ceil(data.length / limit);

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
  });
  return { paginationInfo, maxPage };
};
