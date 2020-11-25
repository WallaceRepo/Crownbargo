import { CartActionType } from "../cart/cart.actiontype";

export const toggleCartHidden = () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
});

export const deleteItem = item => ({
    type:CartActionType.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItemByArrow = item => ({
    type:CartActionType.REMOVE_ITEM_BYARROW,
    payload: item
});

export const clearCart = () => ({
    type: CartActionType.CLEAR_CART
});