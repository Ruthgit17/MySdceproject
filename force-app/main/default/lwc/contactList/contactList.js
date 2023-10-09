import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

const COLUMNS = [
    { label: 'Contact FirstName', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Contact lastName', fieldName: LAST_NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Contact Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'Email' }
];

export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;
}