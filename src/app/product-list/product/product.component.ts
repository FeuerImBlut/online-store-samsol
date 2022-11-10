import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/models';
import { CartService } from '../../cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(item: Product) {
    this.cartService.addProductToCart(item);
  }

  @Input() product: Product | null = null;

}
