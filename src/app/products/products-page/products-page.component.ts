import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../state/product.model';
import { ProductsQuery } from '../state/products.query';
import { ProductsService } from '../state/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products$!: Observable<Product[]>
  constructor(private productsQuery: ProductsQuery, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

}
