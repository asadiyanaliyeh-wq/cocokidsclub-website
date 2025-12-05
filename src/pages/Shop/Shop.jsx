import { useState, useEffect, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card.jsx";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOption, setSortOption] = useState("جدیدترین");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [minPrice, maxPrice] = priceRange;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/products?populate=*");
        if (!response.ok) throw new Error("محصولات بارگذاری نشد");

        const json = await response.json();

        const formatted = json.data.map(item => ({
          id: item.id,
          title: item.title || "بدون عنوان",
          slug: item.slug || "",
          price: item.price || 0,
          category: item.Category === "girl" ? "دخترانه" : item.Category === "boy" ? "پسرانه" : "نامشخص",
          image: item.image?.url 
            ? `http://localhost:1337${item.image.url}` 
            : "/images/photo-1.jpg",
          date: item.createdAt,
          sales: Math.floor(Math.random() * 500), 
        }));

        setProducts(formatted);
        setLoading(false);
      } catch (err) {
        console.error("خطا در دریافت محصولات:", err);
        setError("محصولات بارگذاری نشد. لطفاً دوباره تلاش کنید.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (searchTerm) {
      result = result.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (activeFilter !== "all") {
      result = result.filter(p => p.category === activeFilter);
    }

    result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

    result.sort((a, b) => {
      switch (sortOption) {
        case "جدیدترین": return new Date(b.date) - new Date(a.date);
        case "قدیمی‌ترین": return new Date(a.date) - new Date(b.date);
        case "ارزان‌ترین": return a.price - b.price;
        case "گران‌ترین": return b.price - a.price;
        case "پرفروش‌ترین": return b.sales - a.sales;
        default: return 0;
      }
    });

    return result;
  }, [products, searchTerm, activeFilter, sortOption, minPrice, maxPrice]);

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    const name = e.target.name;
    if (name === "min") {
      setPriceRange([Math.min(value, maxPrice - 10000), maxPrice]);
    } else {
      setPriceRange([minPrice, Math.max(value, minPrice + 10000)]);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10" 
           style={{ backgroundImage: "url(/images/photo-1.jpg)" }} />

      <Navbar />
      <div className="h-20"></div>

      <section className="w-full bg-[#e35d06] py-16 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold">فروشگاه</h1>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 py-10" dir="rtl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div className="flex gap-4 flex-wrap">
            {["all", "دخترانه", "پسرانه"].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat === "all" ? "all" : cat)}
                className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
                  (activeFilter === "all" && cat === "all") || activeFilter === cat
                    ? "bg-[#e35d06] text-white"
                    : "bg-white border-2 border-gray-300 hover:border-[#e35d06]"
                }`}
              >
                {cat === "all" ? "همه محصولات" : cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-gray-600 font-medium">
              {filteredAndSortedProducts.length} محصول
            </span>

            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-white border-2 border-gray-300 rounded-full px-6 py-3 pr-10 font-medium focus:border-[#e35d06] outline-none cursor-pointer"
              >
                <option>جدیدترین</option>
                <option>ارزان‌ترین</option>
                <option>گران‌ترین</option>
                <option>پرفروش‌ترین</option>
              </select>
              <ChevronDown className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="جستجوی محصولات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-80 pr-12 pl-5 py-3 rounded-full border-2 border-gray-300 focus:border-[#e35d06] outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-xl mb-6 text-gray-800">فیلتر بر اساس قیمت</h3>
              <div className="relative h-2 bg-gray-200 rounded-full">
                <input type="range" min="0" max="1000000" step="10000" value={minPrice} name="min" onChange={handlePriceChange}
                  className="absolute w-full h-full appearance-none bg-transparent cursor-pointer z-10" />
                <input type="range" min="0" max="1000000" step="10000" value={maxPrice} name="max" onChange={handlePriceChange}
                  className="absolute w-full h-full appearance-none bg-transparent cursor-pointer z-20" />
                <div className="absolute h-full bg-[#e35d06] rounded-full"
                     style={{ left: `${(minPrice / 1000000) * 100}%`, right: `${100 - (maxPrice / 1000000) * 100}%` }} />
              </div>
              <div className="flex justify-between mt-6 text-sm font-bold text-[#e35d06]">
                <span>{minPrice.toLocaleString("fa-IR")} تومان</span>
                <span>{maxPrice.toLocaleString("fa-IR")} تومان</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {loading && (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#e35d06]"></div>
                <p className="mt-4 text-xl text-gray-600">در حال بارگذاری محصولات...</p>
              </div>
            )}

            {error && <div className="text-center py-20 text-red-600 text-xl">{error}</div>}

            {!loading && !error && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map(product => (
                  <div key={product.id} className="hover:scale-105 transition-transform duration-300">
                    <Card product={product} />
                  </div>
                ))}
              </div>
            )}

            {!loading && !error && filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-20 text-2xl text-gray-500">
                محصولی با این مشخصات یافت نشد
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}