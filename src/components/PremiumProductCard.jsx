import { motion } from "framer-motion";

export default function PremiumProductCard({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      style={{
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {children}
    </motion.div>
  );
}
