import { createContext, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types"; // Importing PropTypes
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = ({ children }) => { // Destructuring props

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : getDefaultCart();
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const resetCart = () => {
        setCartItems(getDefaultCart());
        localStorage.removeItem('cartItems');
    };

    const contextValue = useMemo(() => ({
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        resetCart,
    }), [cartItems]); // Memoize contextValue to avoid unnecessary re-renders

    return (
        <ShopContext.Provider value={contextValue}>
            {children} {/* Using destructured children */}
        </ShopContext.Provider>
    );
};

// PropTypes validation
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is passed and is of a valid type
};

export default ShopContextProvider;
