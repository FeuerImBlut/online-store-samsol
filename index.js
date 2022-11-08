import { productList } from "./products.js";

const productListDiv = document.querySelector('.product-list');
const productTemplate = document.querySelector('#product-template');
const cart = [];

function createProducts(products) {
  for (let item of products) {
    createProduct(item);
  }
}

function createProduct(product) {
  let { image, name, description, price, id } = product;
  const clone = productTemplate.content.cloneNode(true);
  const productChildrenNodes = clone.children[0].children;
  // clone.querySelector('.product-image').src = image;
  productChildrenNodes[0].src = image;
  productChildrenNodes[1].textContent = name;
  productChildrenNodes[2].textContent = description;
  productChildrenNodes[3].textContent = price;
  productChildrenNodes[4].addEventListener('click', (e) => {
    // const productId = e.target.parentElement.id;
    // addToCart(productId);
    addToCart(id)
  });
  clone.children[0].id = id;
  productListDiv.append(clone);
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
      quantity: 1
    });
  }
  console.log(cart);
}

function drawCart() {
  const cartDiv = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');
  for (let item in cart) {
    
  }
}

function createCartItem(item) {
  let { id, price, quantity } = item;
  const cartItemTemplate = document.querySelector('#cart-item-template');
  const cartItemClone = cartItemTemplate.content.clone(true);

}

createProducts(productList);