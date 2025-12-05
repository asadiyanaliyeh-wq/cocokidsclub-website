// src/pages/Auth/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = register(email, password);

    if (res.success) {
      navigate("/dashboard");
    } else {
      setError(res.message || "خطایی رخ داد");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">ثبت‌نام</h1>
          <p className="mt-4 text-orange-600">با ایمیل و رمز عبور</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-5 text-lg text-center rounded-2xl border-2 border-orange-400 focus:outline-none focus:border-orange-500 transition"
            required
          />

          <input
            type="password"
            placeholder="رمز عبور (حداقل 6 کاراکتر)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px- px-6 py-5 text-lg text-center rounded-2xl border-2 border-orange-400 focus:outline-none focus:border-orange-500 transition"
            minLength="6"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-5 rounded-2xl transition-colors flex items-center justify-center gap-3"
          >
            {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
            <span className="text-2xl">→</span>
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4 font-medium">{error}</p>}

        <p className="text-center mt-8 text-gray-600">
          قبلاً حساب دارید؟{" "}
          <Link to="/login" className="text-orange-600 font-bold hover:underline">
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
}