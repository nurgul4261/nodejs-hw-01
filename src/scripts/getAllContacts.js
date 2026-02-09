import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const AllContacts = await readContacts();
  return AllContacts;
};

console.log(await getAllContacts());
