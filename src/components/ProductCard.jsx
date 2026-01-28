import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const { wishlist, toggle } = useWishlist();

  const liked = wishlist.find(p => p.id === product.id);

  return (
    <div className="card">
      <img src={product.image} loading="lazy" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <div className="actions">
        <Link to={`/product/${product.id}`}>View</Link>
        <button onClick={() => add(product)}>Add</button>
      </div>

      <button
        style={{marginTop:10, background: liked ? "#ef4444" : "#e5e7eb"}}
        onClick={() => toggle(product)}
      >
        ♥
      </button>
    </div>
  );
}
