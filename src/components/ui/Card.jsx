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

  const isInCart = cart.some((item) => item.id === product.id);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const requireLogin = (e) => {
    e.stopPropagation();
    navigate("/login");
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!user) return requireLogin(e);
    if (!isInCart) {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    if (!user) return requireLogin(e);
    addToWishlist(product);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    alert("");
  };

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
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

<div
  className={`absolute top-12 left-2 flex flex-col gap-3 transition-all duration-500 z-20 pointer-events-auto ${
    isHovered ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
  }`}
>
  <button
    onClick={handleAddToCart}
    className={`p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
      isInCart
        ? "bg-orange-500 text-white"
        : "bg-white hover:bg-orange-500 hover:text-white"
    }`}
    title={isInCart ? "در سبد خرید است" : "افزودن به سبد خرید"}
  >
    <ShoppingCart size={20} strokeWidth={2.5} />
  </button>

  <button
    onClick={handleToggleWishlist}
    className={`p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
      isInWishlist
        ? "bg-pink-500 text-white"
        : "bg-white hover:bg-pink-500 hover:text-white"
    }`}
    title={isInWishlist ? "در علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی"}
  >
    <Heart
      size={20}
      strokeWidth={2.5}
      fill={isInWishlist ? "white" : "none"}
    />
  </button>

  <Link
    to={`/product/${product.slug}`}
    className="p-3 bg-white rounded-full shadow-xl hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
    title="مشاهده جزئیات محصول"
  >
    <Eye size={20} strokeWidth={2.5} />
  </Link>
</div>
    </div>
  );
};

export default Card;