import { IUser } from '../types/user';

const user = {
  login: false,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('user');
};

export const createLocalStorage = (): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const changeLocalStorage = (user: IUser): void => {
  localStorage.setItem('user', JSON.stringify(user));
};
