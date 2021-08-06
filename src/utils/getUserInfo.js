import { LOCAL_STORAGE } from './constants';

export const getUserInfo = (pages, limit, searchWord) => {
  const originalData = LOCAL_STORAGE.get('userData');
  const filteredUserInfo = [];
  const nonFilteredUserInfo = [];
  const paginationInfo = [];

  originalData?.map((user) => {
    if (
      user.userId.search(searchWord) >= 0 ||
      user.name.search(searchWord) >= 0
    ) {
      filteredUserInfo.push({
        userId: user.userId,
        password: user.password,
        name: user.name,
        age: user.age,
        role: user.role,
        address: user.address,
        menubar: user.menubar,
        creditCard: {
          CVC: user.creditCard.CVC,
          cardNumber: user.creditCard.cardNumber,
          expired: user.creditCard.expired,
          holderName: user.creditCard.holderName,
        },
      });
    }
    nonFilteredUserInfo.push({
      userId: user.userId,
      password: user.password,
      name: user.name,
      age: user.age,
      role: user.role,
      address: user.address,
      menubar: user.menubar,
      creditCard: {
        CVC: user.creditCard.CVC,
        cardNumber: user.creditCard.cardNumber,
        expired: user.creditCard.expired,
        holderName: user.creditCard.holderName,
      },
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
        password: user.password,
        name: user.name,
        age: user.age,
        role: user.role,
        address: user.address,
        menubar: user.menubar,
        creditCard: {
          CVC: user.creditCard.CVC,
          cardNumber: user.creditCard.cardNumber,
          expired: user.creditCard.expired,
          holderName: user.creditCard.holderName,
        },
      });
    }
    return;
  });
  return { userData: paginationInfo, maxPage: maxPage };
};
