import { Action } from '@ngrx/store';

export enum CartActionTypes {
  ADD_TO_CART = '[Cart] Add To Cart',
}

export class AddToCart implements Action {
  readonly type = CartActionTypes.ADD_TO_CART;
  constructor(public payload: Item) { }
}


export type CartActions = AddToCart;
