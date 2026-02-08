import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const createFakeContacts = (count) => {
  const contacts = [];
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  return contacts;
};

const generateContacts = async (count) => {
  const contacts = createFakeContacts(count);
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

generateContacts(5);
