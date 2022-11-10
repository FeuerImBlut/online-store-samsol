import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productsService: ProductsService) { }

  getProducts(): Product[] {
    return this.productsService.getProducts();
  }

  ngOnInit(): void {
    this.productList = this.getProducts();
  }
}
