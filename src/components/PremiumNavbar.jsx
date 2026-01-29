import { motion } from "framer-motion";

export default function PremiumNavbar({ onMenu }) {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
      }}
    >
      <strong>Shop</strong>
      <button onClick={onMenu}>☰</button>
    </motion.div>
  );
}
