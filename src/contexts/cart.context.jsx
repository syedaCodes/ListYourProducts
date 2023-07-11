import { createContext, useState, useEffect } from "react";

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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const addItemToCart = (addProductToCart) => {
        //add product to cart - update cartItems
        setCartItems(addToCartItems(cartItems, addProductToCart));
    };

    const removeItemFromCart = (removeProduct) => {
        //remove product from the cart - update cartItems
        setCartItems(removeItemsFromCart(cartItems, removeProduct));
    };

    const deleteItemFromCart = (deleteProduct) => {
        //delete product
        setCartItems(deleteItem(cartItems, deleteProduct));
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
