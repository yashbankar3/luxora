import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() =>
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggle = product => {
    setWishlist(w =>
      w.find(p => p.id === product.id)
        ? w.filter(p => p.id !== product.id)
        : [...w, product]
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggle }}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
