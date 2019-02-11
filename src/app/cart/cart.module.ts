import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './cart.reducer';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    StoreModule.forFeature('cart', fromCart.reducer)

  ]
})
export class CartModule { }
