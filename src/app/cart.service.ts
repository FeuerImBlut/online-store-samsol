import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { CartItem, Product } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[];
  private totalSum: number = 0;
  // public metaDataSource: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  constructor() {
    this.cart = [];
  }
  addProductToCart(product: Product) {
    const foundProduct: CartItem | undefined = this.cart.find((item) => {
      return product.id === item.id;
    });
    if (foundProduct) foundProduct.quantity += 1;
    else {
      const cartNewItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      };
      this.cart.push(cartNewItem);
    }
    // console.log(this.cart);
    // this.metaDataSource.next(this.cart);
    for (let product of this.cart) {
      this.totalSum = Math.floor(this.totalSum += product.price * product.quantity * 100) / 100;
    }
    console.log(this.totalSum);
    
  }

  getCartData() {
    return this.cart;
  }

  getTotalSum() {
    return this.totalSum;
  }
}
