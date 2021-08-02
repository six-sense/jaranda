import { userData } from './storage/userData';

export const getUserInfo = () => {
  const data = userData;
  const exceptSecret = [];
  data.map((user) => {
    exceptSecret.push({
      id: user.id,
      name: user.name,
      age: user.age,
      role: user.role,
      address: user.address,
      menubar: user.menubar,
    });
  });
  return exceptSecret;
};
