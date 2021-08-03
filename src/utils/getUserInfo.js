import { userData } from './storage/userData';

export const getUserInfo = (pages, limit, searchWord) => {
  const data = userData;
  const exceptSecret = [];
  const word = searchWord;
  console.log(word);

  data.map((user, idx) => {
    if (idx >= pages * limit && idx < pages * (limit + 1)) {
      exceptSecret.push({
        id: user.id,
        name: user.name,
        age: user.age,
        role: user.role,
        address: user.address,
        menubar: user.menubar,
      });
    }
  });
  return exceptSecret;
};
