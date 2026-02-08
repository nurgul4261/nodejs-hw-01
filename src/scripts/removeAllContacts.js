import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
        console.log('All contacts have been removed successfully!');
    } catch (error) {
        console.error('Error removing contacts:', error);
    }
};

removeAllContacts();
