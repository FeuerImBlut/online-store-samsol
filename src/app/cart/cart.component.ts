import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../models/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  totalSum = 0;
  constructor(private cartService: CartService) {
    this.cartService.totalSumDataSource.subscribe(data => {
      this.totalSum = data;
    });
    this.cartService.cartDataSource.subscribe(data => {
      this.cart = data;
    });
  }
  private gerCartData() {
    this.cart = this.cartService.getCartData();
  }

  private getTotalSum() {
    this.totalSum = this.cartService.getTotalSum();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  ngOnInit(): void {
    this.gerCartData();
    this.getTotalSum();
  }
}
