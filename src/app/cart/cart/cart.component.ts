import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItem$: Observable<Item[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItem$ = this.cartService.getCart();
  }



}
