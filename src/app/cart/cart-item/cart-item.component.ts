import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() cartItem: any;
}
