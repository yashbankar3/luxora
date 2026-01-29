import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-xl hover:bg-black/5 transition"
            >
              ☰
            </button>

            <Link
              to="/"
              className="text-2xl font-bold tracking-wide bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent"
            >
              ShopX
            </Link>
          </div>

          {/* Center */}
          <div className="hidden md:block w-[40%]">
            <input
              placeholder="Search premium products..."
              className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-black/40 transition"
            />
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/product">Products</Link>

            <Link
              to="/login"
              className="px-5 py-2 rounded-full bg-black text-white text-sm hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
