import { mount as productsMount }  from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';
// products and cart match up with the key names we gave in the 
// ModuleFederationPlugin in each of the respective webpack.config.js files.

console.log("container!");

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));