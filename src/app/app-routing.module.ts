import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/products-page/products-page.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "products"},
  {path: "products", component: ProductsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
