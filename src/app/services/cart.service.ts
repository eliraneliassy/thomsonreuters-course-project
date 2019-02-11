import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartItems: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

  constructor() { }

  getCart() {
    return this._cartItems.asObservable();
  }

  addToCart(item: Item) {
    const cart = this._cartItems.getValue();
    cart.push(item);
    this._cartItems.next(cart);
  }
}
