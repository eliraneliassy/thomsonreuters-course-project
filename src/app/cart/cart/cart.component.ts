import { State } from 'src/app/reducers';
import { AppState } from './../../store/app.reducer';
import { CartState } from './../cart.reducer';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getCartState, getCartItems } from '../cart.selectors';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems$: Observable<Item[]>;

  constructor(private store: Store<CartState>) { }

  ngOnInit() {
    this.cartItems$ = this.store.pipe(select(getCartItems));
  }



}
