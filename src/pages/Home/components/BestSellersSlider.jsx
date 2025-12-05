import { useState, useEffect, useRef } from "react";
import Card from "../../../components/ui/Card.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestSellersSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/products?populate=image&pagination[limit]=20");
        const json = await res.json();

        const formatted = json.data.map(item => ({
          id: item.documentId,
          title: item.title || "بدون عنوان",
          price: item.price || 0,
          category: item.Category === "girl" ? "دخترانه" : 
                   item.Category === "boy" ? "پسرانه" : "نامشخص",
          image: item.image?.url 
            ? `http://localhost:1337${item.image.url}` 
            : "/images/photo-1.jpg",
        }));

        setProducts(formatted);
        setLoading(false);
      } catch (err) {
        console.error("خطا در دریافت محصولات:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (loading || products.length === 0) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev + 4;
        return nextIndex >= products.length ? 0 : nextIndex;
      });
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [loading, products.length]);

  const next = () => {
    setCurrentIndex(prev => {
      const nextIndex = prev + 4;
      return nextIndex >= products.length ? 0 : nextIndex;
    });
  };

  const prev = () => {
    setCurrentIndex(prev => {
      const prevIndex = prev - 4;
      return prevIndex < 0 ? Math.max(products.length - 4, 0) : prevIndex;
    });
  };

  if (loading) {
    return (
      <section className="py-16 text-center">
        <p className="text-gray-600 text-lg">در حال بارگذاری محصولات پرفروش...</p>
      </section>
    );
  }

  if (products.length === 0) return null;

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  const totalSlides = Math.ceil(products.length / 4);

  return (
    <section className="py-16" dir="rtl">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block pb-4">
            پرفروش‌ترین محصولات
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#e35d06] rounded-full"></span>
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleProducts.map(product => (
              <div 
                key={product.id} 
                className="hover:scale-105 transition-transform duration-300"
              >
                <Card product={product} />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl z-10"
          >
            <ChevronRight size={36} className="text-gray-800" />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl z-10"
          >
            <ChevronLeft size={36} className="text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalSlides }).fill().map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * 4)}
              className={`transition-all rounded-full ${
                Math.floor(currentIndex / 4) === i
                  ? "bg-[#e35d06] w-12 h-3 shadow-lg"
                  : "bg-gray-400 w-3 h-3 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}