import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const getStorageKey = (type) => {
    return user ? `${type}_${user.id}` : type;
  };

  useEffect(() => {
    const savedCart = localStorage.getItem(getStorageKey("cart"));
    const savedWishlist = localStorage.getItem(getStorageKey("wishlist"));

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, [user]);

  useEffect(() => {
    localStorage.setItem(getStorageKey("cart"), JSON.stringify(cart));
  }, [cart, user]);

  useEffect(() => {
    localStorage.setItem(getStorageKey("wishlist"), JSON.stringify(wishlist));
  }, [wishlist, user]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        clearCart,
        cartCount,
        wishlistCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;