import { UserActionTypes } from '../actions/types.actions';
const { SET_CURRENT_USER } = UserActionTypes;

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user,
})