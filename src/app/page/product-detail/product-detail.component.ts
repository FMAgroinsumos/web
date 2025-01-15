import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Injectable} from '@angular/core';
import { Product, productsList } from '../products/products.mock';


@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent implements OnInit{
  product?: Product;
  productList: Product[] = productsList;

  constructor(private _route: ActivatedRoute){ }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.product = this.productList.find(product => product.id == params['productId']);
    });
  }
}
