import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';

import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ]
})
export class ProductModule { }
