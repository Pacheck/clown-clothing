import { CartActionTypes } from './types.actions';

const { TOGGLE_CART_HIDDEN } = CartActionTypes;

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})