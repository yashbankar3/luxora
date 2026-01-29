import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const verifyOtp = (e) => {
    e.preventDefault();

    if (otp !== "123456") {
      setError("Invalid OTP (try 123456)");
    } else {
      localStorage.removeItem("pendingUser");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-3xl shadow-xl w-[360px]"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Verify OTP
        </h2>

        <p className="text-sm text-gray-500 text-center mb-4">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={verifyOtp} className="space-y-4">
          <input
            maxLength="6"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full text-center tracking-widest text-xl px-4 py-3 border rounded-xl"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="w-full py-3 bg-black text-white rounded-xl">
            Verify
          </button>
        </form>
      </motion.div>
    </div>
  );
}
