import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Lightning_record_form extends LightningElement 
{
    @api recordId;
    handlesubmit(event)
    {
        const evt = new ShowToastEvent({

            title: 'Success Message',

            message: 'Record Created successfully ',

            variant: 'success',

            mode:'dismissible'

        });

        this.dispatchEvent(evt);

    }
    }
