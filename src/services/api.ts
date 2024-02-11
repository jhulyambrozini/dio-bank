import { UserData } from '../types/userData';

const conta: UserData = {
  email: 'jhuly@email.com',
  password: '123456',
  name: 'jhuly',
  balance: 120.38,
  id: '1',
};

export const api = new Promise(resolve => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
