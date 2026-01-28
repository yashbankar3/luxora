import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

export default function ProductDetails() {
  const { id } = useParams();
  const { add } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then(r => setProduct(r.data));
  }, [id]);

  if (!product) return <p className="center">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="detail">
        <img src={product.image} />
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button onClick={() => add(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
