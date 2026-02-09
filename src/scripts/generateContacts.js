import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const existing = await readContacts();

    const newContacts = Array.from({ length: number }).map(() => createFakeContact());
    const merged = existing.concat(newContacts);

    await writeContacts(merged);

    const addedData = await readContacts();
    console.log(addedData);
  } catch (err) {
    console.error('Error adding data to the file:', err);
  }
};

generateContacts(5);
