import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from './storage';

const user = {
  login: false,
};

describe('storage', () => {
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
  it('Deve retornar o objeto no localStorage com a chave user', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith('user');
  });

  it('Deve criar o objeto no localStorage', () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith('user', JSON.stringify(user));
  });

  it('Deve alterar o valor do objeto no localStorage', () => {
    changeLocalStorage(user);
    expect(mockSetItem).toHaveBeenCalledWith('user', JSON.stringify(user));
  });
});
