import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

const addToCartItems = (cartItems, addProductToCart) => {
    //find if the product already exists in the cart
    const checkIfItemExists = cartItems?.find(
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

const deleteItemFromCart = (cartItems, deleteItem) =>
    cartItems?.filter((item) => item.id !== deleteItem.id);

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        setCartItems(state, action) {
            state.cartItems = action.payload;
        },
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload;
        },
        addItem(state, action) {
            state.cartItems = addToCartItems(state.cartItems, action.payload);
        },
        removeItem(state, action) {
            state.cartItems = removeItemsFromCart(
                state.cartItems,
                action.payload
            );
        },
        deleteItem(state, action) {
            state.cartItems = deleteItemFromCart(
                state.cartItems,
                action.payload
            );
        },
    },
});

export const { setCartItems, addItem, removeItem, deleteItem, setIsCartOpen } =
    cartSlice.actions;

export const cartReducer = cartSlice.reducer;
