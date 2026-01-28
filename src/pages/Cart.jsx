import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

export default function Cart() {
  const { items, add, remove, total } = useCart();

  return (
    <>
      <Navbar />
      <div className="cart">
        {items.map(i => (
          <div key={i.id} className="cart-item">
            <span>{i.title}</span>
            <div>
              <button onClick={() => remove(i.id)}>-</button>
              <span>{i.qty}</span>
              <button onClick={() => add(i)}>+</button>
            </div>
          </div>
        ))}
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </>
  );
}
