import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = login(email, password); 

    if (res.success) {
      navigate("/dashboard");
    } else {
      setError(res.message || "ایمیل یا رمز عبور اشتباه است");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">ورود</h1>
          <p className="mt-4 text-orange-600">با ایمیل و رمز عبور وارد شوید</p>
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
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-5 text-lg text-center rounded-2xl border-2 border-orange-400 focus:outline-none focus:border-orange-500 transition"
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-orange-600 rounded" />
              <span className="text-gray-600">مرا به خاطر بسپار</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-5 rounded-2xl transition-colors flex items-center justify-center gap-3"
          >
            {loading ? "در حال ورود..." : "ورود"}
            <span className="text-2xl">→</span>
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4 font-medium">{error}</p>}

        <p className="text-center mt-8 text-gray-600">
          حساب ندارید؟{" "}
          <Link to="/register" className="text-orange-600 font-bold hover:underline">
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
}