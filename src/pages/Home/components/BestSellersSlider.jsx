import { useState, useEffect, useRef } from "react";
import Card from "../../../components/ui/Card.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestSellersSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/products?populate=*&pagination[limit]=10");
        const json = await res.json();

        const formatted = json.data.map(item => ({
          id: item.id,
          title: item.title || "بدون عنوان",
          price: item.price || 0,
          category: item.Category === "girl" ? "دخترانه" : item.Category === "boy" ? "پسرانه" : "نامشخص",
          image: item.image?.url ? `http://localhost:1337${item.image.url}` : "/images/photo-1.jpg",
        }));

        setProducts(formatted);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // اسلایدر خودکار
  useEffect(() => {
    if (loading || products.length === 0 || isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [loading, products.length, isHovered]);

  const next = () => setCurrentIndex(prev => (prev + 1) % products.length);
  const prev = () => setCurrentIndex(prev => (prev - 1 + products.length) % products.length);

  if (loading || products.length === 0) return null;

  return (
    <section 
      className="py-16" 
      dir="rtl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block pb-4">
            پرفروش‌ترین محصولات
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#e35d06] rounded-full"></span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {products.map(product => (
              <div key={product.id} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                <div className="hover:scale-105 transition-transform duration-300">
                  <Card product={product} />
                </div>
              </div>
            ))}
          </div>

          <button onClick={prev} className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl">
            <ChevronRight size={32} />
          </button>
          <button onClick={next} className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-2xl">
            <ChevronLeft size={32} />
          </button>

          <div className="flex justify-center gap-3 mt-10">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all rounded-full ${i === currentIndex ? "bg-[#e35d06] w-10 h-3" : "bg-gray-400 w-3 h-3"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}