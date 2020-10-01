import { loadDatabase } from '../file.js';

export const getUserByUid = async (uid) => {
  const data = await loadDatabase();
  const user = data.find(usr => usr.uid === uid);

  if (!user) {
    throw new Error('Não existe usuário com uid informado.');
  }

  return user;
};

export const getUserByEmailAndPassword = async (username, password) => {
  const data = await loadDatabase();
  const user = data.find(usr => usr.userName === username && usr.password === password);

  if (!user) {
    throw new Error('Credenciais incorretas ou usuário inexistente.');
  }

  return user;
};

export const authenticate = async ({ username, password }) => {
  const { token } = await getUserByEmailAndPassword(username, password);
  return token;
};
