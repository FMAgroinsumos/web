import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { productsList } from './products.mock';

@Component({
  selector: 'app-products',
  imports: [RouterLink, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productList = productsList;
}
