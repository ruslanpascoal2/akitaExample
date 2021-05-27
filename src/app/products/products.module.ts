import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductItemComponent } from './products-page/product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ShorterPipe } from './products-page/product-item/shorter.pipe';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductItemComponent,
    ShorterPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class ProductsModule { }
