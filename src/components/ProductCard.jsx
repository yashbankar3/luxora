import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden"
    >
      <img
        src={product.image}
        className="h-52 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="font-bold mt-1">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="inline-block mt-3 text-indigo-600"
        >
          View
        </Link>
      </div>
    </motion.div>
  );
}
