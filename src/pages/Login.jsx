import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || !form.password) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.token) throw new Error("Invalid credentials");

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-3xl shadow-2xl w-[380px]"
      >
        <h1 className="text-3xl font-bold text-center mb-6">ShopX</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            disabled={loading}
            className="w-full py-3 bg-black text-white rounded-xl hover:scale-[1.02] active:scale-95 transition shadow-lg"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* Social UI */}
        <div className="mt-6 space-y-3">
          <button className="auth-btn">Continue with Google</button>
          <button className="auth-btn">Continue with Apple</button>
          <button className="auth-btn">Continue with Mobile</button>
        </div>

        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link className="font-semibold underline" to="/signup">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
