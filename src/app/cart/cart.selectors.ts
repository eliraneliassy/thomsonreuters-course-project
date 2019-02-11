import { CartState } from './cart.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getCartState = createFeatureSelector<CartState>('cart');

export const getCartItems = createSelector(getCartState,
    (cartState: CartState) => cartState.cartItems);

