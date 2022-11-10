import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-store-SaM-Task';
  checkedOut = false;

  constructor(private cartService: CartService) {
    this.cartService.checkOutDataSource.subscribe((data) => {
      if (data) this.showCheckoutMessage();
    });

  }

  showCheckoutMessage() {
    this.checkedOut = true;
    setTimeout(() => {
      this.checkedOut = false;
    }, 3000);
  }
}
