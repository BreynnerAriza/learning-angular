import { Component } from '@angular/core';
import { productList, Product } from './products.mock';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productList : Product [] = productList;

  constructor() { }

}
