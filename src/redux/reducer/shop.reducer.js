import { ShopActionTypes } from '../actions/types.actions';

import SHOP_DATA from '../../utils/shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const { UPDATE_COLLECTIONS } = ShopActionTypes

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
            }
        default:
            return state;
    }
}

export default shopReducer;