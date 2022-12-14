import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/models';
import { CartService } from '../../cart.service'


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  @Input() cartItem: any;

  removeProduct(product: CartItem) {
    this.cartService.removeItemFromCart(product);
  }
}
