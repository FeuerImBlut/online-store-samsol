import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product-list/product/product.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartService } from './cart.service';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ProductComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
