// src/components/ui/Card.jsx
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

const Card = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* عکس */}
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

          <div
            className={`absolute top-12 left-2 flex flex-col gap-2 transform transition-all duration-400 ease-out z-10 ${
              isHovered ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }`}
          >
            <button className="p-2.5 bg-white rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all">
              <ShoppingCart size={18} />
            </button>
            <button className="p-2.5 bg-white rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all">
              <Heart size={18} />
            </button>
            <button className="p-2.5 bg-white rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition-all">
              <Eye size={18} />
            </button>
          </div>
        </div>

        <div className="p-3 text-center">
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight mb-1">
            {product.title}
          </h3>
          <p className="text-lg font-bold text-[#e35d06]">
            {product.price.toLocaleString("fa-IR")} تومان
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;