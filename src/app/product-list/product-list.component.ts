import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList = [{
    image: '01',
    name: 'Asher Bear with Scarf Baby Blue',
    description: 'Asher Bear is an adorable looking plush teddy bear. He comes in two blue tones with small beaded eyes and a fluffy scarf around his neck. He is available in 2 large sizes and comes in 2 colours. Asher sits at 60cm tall.',
    price: 22.95,
    id: '01'
  },
    {
      image: '02',
      name: 'Graduation Teddy Bear Oscar Beige',
      description: 'A classic gift for a graduate is our very cute Oscar Teddy Bear. He sits at 26 cm high with a cap and a scroll to mark the special occasion.',
      price: 36.95,
      id: '02'
    }]
  constructor() { }

  ngOnInit(): void {
  }

  

}
