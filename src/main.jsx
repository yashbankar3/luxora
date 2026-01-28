import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./styles/global.css";
import { WishlistProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <WishlistProvider>
    <CartProvider>
    <App />
</CartProvider>
  </WishlistProvider>

  </React.StrictMode>
);
