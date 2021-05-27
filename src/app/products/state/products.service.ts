import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { ProductsStore, ProductsState } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsService extends NgEntityService<ProductsState> {

  constructor(protected store: ProductsStore) {
    super(store);
  }

  getProducts(): Observable<Product[]>{
    return this.get()
  }


}
