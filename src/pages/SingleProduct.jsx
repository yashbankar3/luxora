import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return (
      <div className="mt-40 text-center text-gray-500">
        Loading product...
      </div>
    );

  return (
    <div className="mt-32 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Image */}
        <div className="bg-white rounded-3xl shadow-xl p-10 flex items-center justify-center">
          <motion.img
            src={product.image}
            alt={product.title}
            whileHover={{ scale: 1.05 }}
            className="h-[350px] object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <p className="mt-6 text-3xl font-semibold">
            ${product.price}
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-8 py-3 bg-black text-white rounded-full hover:scale-105 transition shadow-lg">
              Add to Cart
            </button>
            <button className="px-8 py-3 border rounded-full hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-gray-500">
            <span>⭐ {product.rating?.rate}</span>
            <span>👥 {product.rating?.count} reviews</span>
            <span>🚚 Free delivery</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
