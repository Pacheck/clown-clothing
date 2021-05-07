import { CartActionTypes } from '../actions/types.actions';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { TOGGLE_CART_HIDDEN } = CartActionTypes;
    
    switch (action.type) {
        case TOGGLE_CART_HIDDEN: 
            return {
                ...state, 
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;