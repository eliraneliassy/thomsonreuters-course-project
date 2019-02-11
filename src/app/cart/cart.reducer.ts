import { Action } from '@ngrx/store';
import { CartActions, CartActionTypes } from './cart.actions';


export interface CartState {
  cartItems: Item[];
}

export const initialState: CartState = {
  cartItems: []
};

export function reducer(state = initialState, action: CartActions): CartState {
  switch (action.type) {
    case (CartActionTypes.ADD_TO_CART): {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    }
    default:
      return state;
  }
}
