import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';


const colum = [
                {label:'Account Name', field__Api_Name:"NAME_FIELD",type:'text'},
                {label:'Account Industry', field__Api_Name:"INDUSTRY_FIELD",type:'text'},
                {label:'Account Rating', field__Api_Name:"RATING_FIELD",type:'text'}


              ];

export default class Child_lwc_comp extends LightningElement 
{
    Columns = colum;
    fields = {Name:'this.NAME_FIELD',Industry:'this.INDUSTRY_FIELD', Rating:'this.RATING_FIELD'};

    handelevent(event)
    {
        this.dispatchEvent(new CustomEvent('lwcevent'));
    }
    
}