import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";

export default function Navbar() {
  const { items } = useCart();

  return (
    <nav className="nav">
      <Logo />
      <div className="nav-links">
        <Link to="/">Store</Link>
        <Link to="/cart">Cart ({items.length})</Link>
      </div>
    </nav>
  );
}
