import { LightningElement } from 'lwc';

export default class Amazon_login_clone extends LightningElement {



    Email;
    Password;

    HandleEmail(event)
    {
        this.Email = event.target.value;
    }
    HandlePassword(event)
    {
        this.Password = event.target.value;
    }

    loginclick()

    {
        console.log('Sign in');
        console.log('Emailval:',this.Email);
        console.log('password value:',this.Password);
    }
}