import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "../../../components/ui/Card.jsx";

export default function BestSellersSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } catch (err) {
        console.error("خطا:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">در حال بارگذاری...</p>;

  return (
    <section className="py-16" dir="rtl">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          پرفروش‌ترین محصولات
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
