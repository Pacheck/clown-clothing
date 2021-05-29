import { ShopActionTypes } from './types.actions';

const { UPDATE_COLLECTIONS } = ShopActionTypes

export const  updateCollections = collectionsMap => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
})