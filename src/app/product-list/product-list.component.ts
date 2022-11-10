import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: {}[] = [];

  constructor(private productsService: ProductsService) { }

  getProducts(): Array<{}> {
    return this.productsService.getProducts();
  }

  ngOnInit(): void {
    this.productList = this.getProducts();
  }
}
