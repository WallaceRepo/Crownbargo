import { CartActionType } from './cart.actiontype.js';
import {addItemToCart, removeItemByArrow } from './cart.utils';


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (oldState = INITIAL_STATE, action) => {
    switch (action.type ) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...oldState,
                hidden: !oldState.hidden
            };
        case CartActionType.ADD_ITEM:
            return {
                ...oldState,
                cartItems: addItemToCart( oldState.cartItems, action.payload )
            };
        case CartActionType.CLEAR_ITEM_FROM_CART:
            return {
                ...oldState,
                cartItems: oldState.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionType.REMOVE_ITEM_BYARROW: 
            return {
                ...oldState,
                cartItems: removeItemByArrow(oldState.cartItems, action.payload)
            };
        case CartActionType.CLEAR_CART:
            return {
                ...oldState,
                cartItems: []
            }
        default:
            return oldState;
    }
}

export default cartReducer;