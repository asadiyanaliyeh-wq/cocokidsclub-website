// src/components/ui/Card.jsx
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const Card = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, addToWishlist, cart, wishlist } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  // چک کن محصول تو سبد هست یا نه
  const isInCart = cart.some((item) => item.id === product.id);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  // اگر کاربر لاگین نکرده → برو لاگین
  const requireLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/login");
  };

  // فقط یک بار به سبد اضافه کنه (حتی اگه ۱۰۰ بار کلیک کرد!)
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) return requireLogin(e);

    // فقط اگه هنوز تو سبد نیست، اضافه کن
    if (!isInCart) {
      addToCart({ ...product, quantity: 1 });
    }
    // اگه قبلاً اضافه شده بود → هیچی نکن (جلوگیری از تکرار)
  };

  // علاقه‌مندی هم همینطور (تغییر وضعیت بده، نه اضافه چندباره)
  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) return requireLogin(e);

    addToWishlist(product); // خودش مدیریت می‌کنه اضافه/حذف
  };

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative w-full pt-[100%] bg-gray-50 overflow-hidden">
          <img
            src={product.image || "/vite.svg"}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />

          <span
            className={`absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm z-10 ${
              product.category === "دخترانه" ? "bg-pink-500" : "bg-blue-600"
            }`}
          >
            {product.category}
          </span>

          {/* دکمه‌های هاور */}
          <div
            className={`absolute top-12 left-2 flex flex-col gap-3 transition-all duration-500 z-20 ${
              isHovered ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
            }`}
          >
            {/* دکمه سبد خرید */}
            <button
              onClick={handleAddToCart}
              className={`p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
                isInCart
                  ? "bg-orange-500 text-white"
                  : "bg-white hover:bg-orange-500 hover:text-white"
              } ${!user && "opacity-50 cursor-not-allowed"}`}
              title={isInCart ? "در سبد خرید است" : "افزودن به سبد خرید"}
              disabled={!user}
            >
              <ShoppingCart size={20} strokeWidth={2.5} />
            </button>

            {/* دکمه علاقه‌مندی */}
            <button
              onClick={handleToggleWishlist}
              className={`p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
                isInWishlist
                  ? "bg-pink-500 text-white"
                  : "bg-white hover:bg-pink-500 hover:text-white"
              } ${!user && "opacity-50 cursor-not-allowed"}`}
              title={isInWishlist ? "از علاقه‌مندی حذف شد" : "افزودن به علاقه‌مندی"}
              disabled={!user}
            >
              <Heart
                size={20}
                strokeWidth={2.5}
                fill={isInWishlist ? "white" : "none"}
              />
            </button>

            {/* مشاهده سریع */}
            <button
              className="p-3 bg-white rounded-full shadow-xl hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
              title="مشاهده سریع"
            >
              <Eye size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="p-4 text-center">
          <h3 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2 h-12">
            {product.title}
          </h3>
          <p className="text-xl font-black text-[#e35d06]">
            {product.price?.toLocaleString("fa-IR") || "۰"} تومان
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;