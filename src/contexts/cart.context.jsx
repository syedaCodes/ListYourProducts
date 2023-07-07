import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    // a state to manage the list of items
    cartItems: [],
    // a state method to trigger when addToCart button is clicked
    addItemToCart: () => {},
    count: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (addProductToCart) => {
        //add product to cart - update cartItems
        setCartItems(addToCartItems(cartItems, addProductToCart));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        count,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
