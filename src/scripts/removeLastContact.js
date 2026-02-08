import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Last contact removed successfully!');
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
