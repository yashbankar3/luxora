import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import HeroCarousel from "../components/HeroCarousel.jsx";




/* ------------------ DATA (UNCHANGED) ------------------ */
const PRODUCTS = [
  { id: 1, title: "Luxury Watch", price: 299, image: "https://picsum.photos/400", category: "Accessories" },
  { id: 2, title: "Premium Shoes", price: 199, image: "https://picsum.photos/401", category: "Fashion" },
  { id: 3, title: "Leather Bag", price: 149, image: "https://picsum.photos/402", category: "Fashion" },
  { id: 4, title: "Smart Headphones", price: 249, image: "https://picsum.photos/403", category: "Electronics" },
  { id: 5, title: "Luxury Sunglasses", price: 129, image: "https://picsum.photos/404", category: "Accessories" },
];

const CATEGORIES = ["All", "Accessories", "Fashion", "Electronics"];
const ITEMS_PER_PAGE = 6;

/* ------------------ COMPONENT ------------------ */
export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  /* ------------------ FILTERING (OPTIMIZED) ------------------ */
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  /* ------------------ PAGINATION ------------------ */
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
      <Navbar />

      <div className="pt-24 max-w-7xl mx-auto px-6">
        {/* ------------------ SEARCH ------------------ */}
        <input
          placeholder="Search products..."
          className="w-full mb-6 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        {/* ------------------ CATEGORIES ------------------ */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm transition ${
                category === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <HeroCarousel />
        <div>

        

        </div>

        {/* ------------------ PRODUCT GRID ------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {paginatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>

        {/* ------------------ PAGINATION ------------------ */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 rounded-full ${
                  page === i + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
