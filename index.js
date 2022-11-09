import { productList } from "./products.js";

const productListDiv = document.querySelector('.product-list');
const productTemplate = document.querySelector('#product-template');
let cart = [];

function createProducts(products) {
  for (let item of products) {
    createProduct(item);
  }
}

function createProduct(product) {
  let { image, name, description, price, id } = product;
  const productClone = productTemplate.content.cloneNode(true);
  const productItem = productClone.querySelector('.product');
  const productImage = productClone.querySelector('.product-image');
  if (productImage) productImage.src = `./assets/images/${image}.webp`;
  const productName = productClone.querySelector('.product-name');
  if (productName) productName.textContent = name;
  const productDescription = productClone.querySelector('.product-description');
  if (productDescription) productDescription.textContent = description;
  const productPrice = productClone.querySelector('.product-price');
  if (productPrice) productPrice.textContent = price.toString();
  const productBuyButton = productClone.querySelector('.product-buy');
  if (productBuyButton) productBuyButton.addEventListener('click', (e) => {
    addToCart(id)
  });
  productItem.id = id;
  productListDiv.append(productClone);
}

function addToCart(id) {
  let item = productList.find((el) => {
    return el.id === id;
  });
  const foundElement = cart.find((el) => {
    return el.id == item.id;
  });
  if (foundElement) {
    foundElement.quantity += 1;
  }
  else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  }
  console.log(cart);
  drawCart();
}

function drawCart() {
  const cartDiv = document.querySelector('.cart-items');
  cartDiv.innerHTML = '';
  const cartTotal = document.querySelector('.cart-total');
  let totalSum = 0;
  for (let item of cart) {
    const cartItem = createCartItem(item);
    cartDiv.append(cartItem);
    totalSum += item.quantity * item.price;
  }
  cartTotal.textContent = totalSum.toString();
}

function createCartItem(item) {
  const cartItemTemplate = document.querySelector('#cart-item-template');
  const cartItemClone = cartItemTemplate.content.cloneNode(true);
  const cartItemName = cartItemClone.querySelector('.cart-item-name');
  if (cartItemName) cartItemName.textContent = item.name;
  const cartItemPrice = cartItemClone.querySelector('.cart-item-price');
  if (cartItemPrice) cartItemPrice.textContent = item.price.toString();
  const cartItemRemoveButton = cartItemClone.querySelector('.cart-item-remove');
  if (cartItemRemoveButton) cartItemRemoveButton.addEventListener('click', () => {
    removeItemFromCart(item.id);
  });
  return cartItemClone;
}

function removeItemFromCart(id) {
  console.log(id);
  cart = cart.filter((el) => {
    console.log(el.id);
    console.log(el.id != id);
    return (el.id != id);
  });
  drawCart();
}

createProducts(productList);