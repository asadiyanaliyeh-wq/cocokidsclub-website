import { useState, useEffect } from "react";
import Card from "../../../components/ui/Card.jsx";
import { Link } from "react-router-dom";

export default function LatestProducts() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/products?populate=*&sort=createdAt:desc&pagination[limit]=8");
        const json = await res.json();

        const formatted = json.data.map(item => ({
          id: item.id,
          title: item.title || "بدون عنوان",
          slug: item.slug,
          price: item.price || 0,
          category: item.Category === "girl" ? "دخترانه" : item.Category === "boy" ? "پسرانه" : "نامشخص",
          image: item.image?.url ? `http://localhost:1337${item.image.url}` : "/images/photo-1.jpg",
        }));

        setLatestProducts(formatted);
        setLoading(false);
      } catch (err) {
        console.error("خطا:", err);
        setLoading(false);
      }
    };

    fetchLatest();
  }, []);

  if (loading) return <div className="py-20 text-center">در حال بارگذاری...</div>;

  return (
    <section className="py-16" dir="rtl">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block pb-4">
            جدیدترین محصولات
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#e35d06] rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {latestProducts.map(product => (
            <div key={product.id} className="hover:scale-105 transition-transform duration-300">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}