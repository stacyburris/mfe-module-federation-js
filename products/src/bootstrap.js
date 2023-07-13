import faker from 'faker';

/* OLD CODE */
// let products = '';
// for (let i = 0; i < 5; i++) {
//     const name = faker.commerce.productName();
//     products += `<div>${name}</div>`;
// }
// document.querySelector('#dev-products').innerHTML = products;

/* REFACTORED NEW CODE */
const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
    // now we have a function that can be called for both Context #1 and Context #2
};
// Context #1
// we are running this file in development in isolation
// we are using our local index.html file
// which DEFINITELY has an element with an id of 'dev-products'
// we want to immediately render our app into that element
if (process.env.NODE_ENV === 'development') { // automatically set by webpack by adding (mode: 'development' to webpack.config.js)
    const el = document.querySelector('#dev-products');
    // assuming our container doesn't have an element
    // with id 'dev-products'...
    if(el) {
        // we are probably running in isolation
        mount(el);
    }
}

// Context #2
// we are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT try to immediately render the app
export { mount };