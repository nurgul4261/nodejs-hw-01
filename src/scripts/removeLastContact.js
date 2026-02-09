import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);
      console.log('The last contact has been successfully removed.');
    } else {
      console.log('The contact list is empty, there is no one to remove.');
      return;
    }
  } catch (error) {
    console.error('An error occurred while removing the last contact:', error);
  }
};

removeLastContact();
