import faker from 'faker';

import ROLES from '../../constants/roles.js';
import { loadDatabase, saveDatabase } from '../file.js';

export const createUser = async ({
  email,
  password,
  userName,
  name,
  lastName,
  role = ROLES.USER
}) => {
  const users = await loadDatabase();
  const uid = faker.random.uuid();
  const user = { email, password, userName, name, lastName, role, uid };

  users.push(user);
  await saveDatabase(users);

  return user;
}

