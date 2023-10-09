import { LightningElement } from 'lwc';

export default class Parent_component extends LightningElement
 {
    click(event)
    {
        this.dispatchEvent(new customEvent('childevent'));
    }
 }