import { LightningElement,track } from 'lwc';

export default class Lwc_addCard_andDetail_page extends LightningElement 
{
    @track productName = '';
    @track price = 0;
    @track quantity = 1;
    @track cartItems = [];

    handleProductNameChange(event) {
        this.productName = event.target.value;
    }

    handlePriceChange(event) {
        this.price = event.target.value;
    }

    handleQuantityChange(event) {
        this.quantity = event.target.value;
    }

    addToCart() {
        // Add the product to the cartItems array
        this.cartItems.push({
            id: this.cartItems.length + 1, // Generate a unique ID
            name: this.productName,
            price: this.price,
            quantity: this.quantity,
        });
    }
}
