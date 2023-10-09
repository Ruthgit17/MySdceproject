import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Accont_Object';
import CONTACT_FIRST_NAME from '#salesfroce/schema/Contact.First_Name';

export default class Lwc_create_contact extends LightningElement
 {
    contname;
    handleChange(even)
    {
        this.contname = Event.target.value;

    }
    CreateContact()
     {
       var fields = {'name':this.contname};

       const createrecord = {apiName:CONTACT_OBJECT_API.objectApiName,fields:fields};
       createRecord(accRecord)

        .then( response => {

            alert('Account Inserted and Id is'+response.id);

        })

        .catch( error =>   {

        alert('Some error occured'+JSON.stringify(error));

        });
    }
 }