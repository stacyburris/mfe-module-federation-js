import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  // document.querySelector('#cart-dev').innerHTML = cartText;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart-dev");

  if (el) {
    mount(el);
  }
}
export { mount };