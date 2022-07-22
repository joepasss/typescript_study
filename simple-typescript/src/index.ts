import { ShoppingCart, Order, calculateTotalAmount } from './interface-2';

const cart = new ShoppingCart();
const order = new Order();

console.log(`The cart's total is ${calculateTotalAmount(cart)}`);
console.log(`The order's total is ${calculateTotalAmount(order)}`);
