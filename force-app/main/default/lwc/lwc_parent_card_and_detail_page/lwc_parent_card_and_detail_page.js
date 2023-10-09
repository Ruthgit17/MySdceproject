import { LightningElement, track} from 'lwc';

export default class Lwc_parent_card_and_detail_page extends LightningElement 
{
    @track products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description for Product 1',
            price: 19.99,
            image: '/resource/product1.jpg'
        },
        // Add more products here...
    ];
    handleAddToCart(event) {
        const productToAdd = event.detail;
        // Handle adding the product to the cart logic here.
        // You can store the cart data in a property and update it accordingly.
        // You may want to use a service or Apex to update the cart in a real Salesforce org.
        console.log('Added to Cart:', productToAdd);
    }
}