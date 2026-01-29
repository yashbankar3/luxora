import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validatePassword = (pass) => {
    return (
      pass.length >= 8 &&
      /[A-Z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[^A-Za-z0-9]/.test(pass)
    );
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email.includes("@")) return setError("Invalid email");
    if (!validatePassword(form.password))
      return setError(
        "Password must be 8+ chars, uppercase, number & symbol"
      );
    if (form.password !== form.confirm)
      return setError("Passwords do not match");

    localStorage.setItem("pendingUser", JSON.stringify(form));
    navigate("/verify-otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white p-8 rounded-3xl shadow-2xl w-[400px]"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="auth-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="auth-input"
          />

          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="auth-input"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="w-full py-3 bg-black text-white rounded-xl hover:scale-[1.02] transition">
            Continue
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Already have account?{" "}
          <Link className="font-semibold underline" to="/login">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
