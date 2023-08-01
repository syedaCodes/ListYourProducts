import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    // a state to manage the list of items
    cartItems: [],
    // a state method to trigger when addToCart button is clicked
    addItemToCart: () => {},
    //remove item from cart
    removeItemFromCart: () => {},
    //delete item from cart
    deleteItemFromCart: () => {},
    count: 0,
    totalPrice: 0,
});

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    count: 0,
    totalPrice: 0,
};

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    IS_CART_OPEN: "IS_CART_OPEN",
};

const cartReducer = (state, action) => {
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

const deleteItem = (cartItems, deleteItem) =>
    cartItems?.filter((item) => item.id !== deleteItem.id);

const addToCartItems = (cartItems, addProductToCart) => {
    //find if the product already exists in the cart
    const checkIfItemExists = cartItems.find(
        (e) => e.id === addProductToCart.id
    );

    //if yes, update quantity
    if (checkIfItemExists) {
        return cartItems?.map((item) =>
            item.id === addProductToCart.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    //else update cartItems array
    return [...cartItems, { ...addProductToCart, quantity: 1 }];
};

const removeItemsFromCart = (cartItems, removeItem) => {
    //find if the product already exists in the cart
    const checkIfItemExists = cartItems.find((e) => e.id === removeItem.id);

    //if quantity equals 1, then that shouldn't be in the array
    if (checkIfItemExists.quantity === 1) {
        return cartItems?.filter((item) => item?.id !== removeItem);
    }

    //if yes, update quantity
    if (checkIfItemExists) {
        return cartItems?.map((item) =>
            item.id === removeItem.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
    }
};

export const CartProvider = ({ children }) => {
    const [{ isCartOpen, cartItems, count, totalPrice }, dispatch] = useReducer(
        cartReducer,
        INITIAL_STATE
    );

    const setIsCartOpen = () => {
        dispatch(createAction(CART_ACTION_TYPES.IS_CART_OPEN, !isCartOpen));
    };

    const updateCartItemsReducer = (updateCart) => {
        const updateCount = updateCart.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        const updateTotal = updateCart.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: updateCart,
                totalPrice: updateTotal,
                count: updateCount,
            })
        );
    };

    const addItemToCart = (addProductToCart) => {
        //add product to cart - update cartItems
        const addItem = addToCartItems(cartItems, addProductToCart);
        updateCartItemsReducer(addItem);
    };

    const removeItemFromCart = (removeProduct) => {
        //remove product from the cart - update cartItems
        const removeItem = removeItemsFromCart(cartItems, removeProduct);
        updateCartItemsReducer(removeItem);
    };

    const deleteItemFromCart = (del) => {
        //delete product
        const deleteProduct = deleteItem(cartItems, del);
        updateCartItemsReducer(deleteProduct);
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        count,
        totalPrice,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
