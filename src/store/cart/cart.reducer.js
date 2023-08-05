import { CART_ACTION_TYPES } from "./cart.type";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    count: 0,
    totalPrice: 0,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };

        case CART_ACTION_TYPES.IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };

        default:
            throw new Error(`Unhandled type ${type} in Cart Reducer`);
    }
};
