// src/pages/Product/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card"; 
export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [similarLoading, setSimilarLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { addToCart, addToWishlist, cart, wishlist } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const isInCart = product && cart.some((item) => item.id === product.id);
  const isInWishlist = product && wishlist.some((item) => item.id === product.id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=image`
        );
        const json = await res.json();

        if (json.data.length === 0) {
          navigate("/not-found");
          return;
        }

        const item = json.data[0];

        const mainProduct = {
          id: item.documentId,
          slug: item.slug,
          title: item.title || "بدون عنوان",
          price: item.price || 0,
          description: item.description || "توضیحاتی موجود نیست.",
          image: item.image?.url
            ? `http://localhost:1337${item.image.url}`
            : "/vite.svg",
        };

        setProduct(mainProduct);

        const similarRes = await fetch(
          "http://localhost:1337/api/products?populate=image&pagination[limit]=12"
        );
        const similarJson = await similarRes.json();

        const formattedSimilar = similarJson.data
          .filter((p) => p.documentId !== item.documentId) 
          .map((p) => ({
            id: p.documentId,
            slug: p.slug || p.documentId,
            title: p.title || "بدون عنوان",
            price: p.price || 0,
            category:
              p.Category === "girl"
                ? "دخترانه"
                : p.Category === "boy"
                ? "پسرانه"
                : "نامشخص",
            image: p.image?.url
              ? `http://localhost:1337${p.image.url}`
              : "/images/photo-1.jpg",
          }));

        setSimilarProducts(formattedSimilar);
        setSimilarLoading(false);
      } catch (err) {
        console.error("خطا در دریافت اطلاعات:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug, navigate]);

  const handleAddToCart = () => {
    if (!user) return navigate("/login");
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  const handleWishlist = () => {
    if (!user) return navigate("/login");
    if (product) addToWishlist(product);
  };

  if (loading) return <p className="text-center py-20 text-xl">در حال بارگذاری...</p>;
  if (!product) return <p className="text-center py-20 text-xl">محصول یافت نشد</p>;

  return (
    <>
      <Navbar />

      <div className="h-20"></div>

      <section className="w-full bg-[#e35d06] py-12 text-center text-white shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
        <p className="mt-4 text-lg opacity-90">
          <Link to="/" className="font-bold hover:underline">
            خانه
          </Link>
          {" / "}
          <Link to="/shop" className="hover:underline">
            فروشگاه
          </Link>
          {" / "}
          <span className="font-bold">{product.title}</span>
        </p>
      </section>

      <section className="py-8 md:py-16" dir="rtl">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 hidden lg:block">
                {product.title}
              </h2>

              <p className="text-3xl font-black text-orange-600">
                {product.price.toLocaleString("fa-IR")} تومان
              </p>

              <div className="flex items-center gap-6 my-8">
                <div className="flex items-center border-2 border-gray-300 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-5 py-4 text-xl hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-8 py-4 text-xl font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-5 py-4 text-xl hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all text-lg"
                >
                  <ShoppingCart size={24} />
                  {isInCart ? "در سبد خرید است" : "افزودن به سبد خرید"}
                </button>

                <button
                  onClick={handleWishlist}
                  className={`p-5 rounded-xl border-2 transition-all ${
                    isInWishlist
                      ? "bg-pink-500 text-white border-pink-500"
                      : "border-gray-300 hover:border-pink-500"
                  }`}
                >
                  <Heart size={28} fill={isInWishlist ? "white" : "none"} />
                </button>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold mb-4">توضیحات محصول</h3>
                <div
                  className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="flex items-center gap-4 text-gray-600 pt-6">
                <Share2 size={20} />
                <span>اشتراک گذاری:</span>
                <button className="hover:text-blue-600">فیسبوک</button>
                <button className="hover:text-green-600">واتساپ</button>
                <button className="hover:text-pink-600">اینستاگرام</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" dir="rtl">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            محصولات مشابه
          </h2>

          {similarLoading ? (
            <p className="text-center py-10 text-gray-600">در حال بارگذاری محصولات مشابه...</p>
          ) : similarProducts.length === 0 ? (
            <p className="text-center py-10 text-gray-600">محصول مشابهی یافت نشد</p>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-10"
            >
              {similarProducts.map((prod) => (
                <SwiperSlide key={prod.id}>
                  <Card product={prod} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    </>
  );
}