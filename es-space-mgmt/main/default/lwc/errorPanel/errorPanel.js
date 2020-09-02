import { LightningElement, api } from 'lwc';

export default class ErrorPanel extends LightningElement {
    @api friendlyMessage;
    @api errors;
}