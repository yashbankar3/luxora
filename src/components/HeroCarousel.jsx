import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroCarousel() {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (products.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 5);
    }, 3500);

    return () => clearInterval(timer);
  }, [products]);

  if (products.length === 0) {
    return (
      <div className="mt-32 text-center text-gray-500 text-lg">
        Loading carousel...
      </div>
    );
  }

  return (
    <div className="mt-28">
      <div className="relative w-full max-w-7xl mx-auto h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-100 to-gray-200">

        <AnimatePresence mode="wait">
          <motion.div
            key={products[current].id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-between px-12"
          >
            {/* Text */}
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {products[current].title}
              </h1>

              <p className="mt-4 text-gray-600 line-clamp-2">
                {products[current].description}
              </p>

              <p className="mt-4 text-2xl font-semibold">
                ${products[current].price}
              </p>

              <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:scale-105 active:scale-95 transition shadow-lg">
                Shop Now
              </button>
            </div>

            {/* Image */}
            <motion.img
              src={products[current].image}
              alt="product"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-[280px] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? 4 : prev - 1))
          }
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-2 rounded-full hover:scale-110 transition z-10"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setCurrent((prev) => (prev === 4 ? 0 : prev + 1))
          }
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/70 text-white px-3 py-2 rounded-full hover:scale-110 transition z-10"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                current === i ? "bg-black scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
