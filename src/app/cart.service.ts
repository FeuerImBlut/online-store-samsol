import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { CartItem, Product } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[];
  private totalSum: number = 0;
  public totalSumDataSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cartDataSource: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  public checkOutDataSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
    this.recalculateSum();

  }

  getCartData() {
    return this.cart;
  }

  getTotalSum() {
    return this.totalSum;
  }

  clearCart() {
    this.cart = [];
    this.cartDataSource.next(this.cart);
    if (this.totalSum) {
      this.recalculateSum();
      this.checkOutDataSource.next(true);

    }

  }

  removeItemFromCart(item: CartItem) {
    this.cart = this.cart.filter(el => {
      return el.id !== item.id;
    });
    this.recalculateSum();
    this.cartDataSource.next(this.cart);
  }

  private recalculateSum() {
    this.totalSum = 0;
    for (let product of this.cart) {
      this.totalSum += product.price * product.quantity;
      this.totalSum = Number(this.totalSum.toFixed(2));
    }
    this.totalSumDataSource.next(this.totalSum);
  }
}
