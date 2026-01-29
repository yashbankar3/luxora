import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
        />
      )}

      <motion.aside
        initial={{ x: -320 }}
        animate={{ x: open ? 0 : -320 }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed top-0 left-0 h-screen w-[280px] bg-gradient-to-b from-black to-zinc-900 text-white z-[999] p-6 flex flex-col"
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold tracking-wide">ShopX</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-xl hover:rotate-90 transition"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-5 text-lg">

          {["Electronics", "Fashion", "Home", "Beauty", "Sports"].map(
            (item, i) => (
              <Link
                key={i}
                to="/product"
                className="group flex items-center justify-between hover:text-gray-300 transition"
              >
                <span className="group-hover:translate-x-2 transition">
                  {item}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition">
                  →
                </span>
              </Link>
            )
          )}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10 text-sm text-gray-400">
          Premium Shopping Experience
        </div>
      </motion.aside>
    </>
  );
}
