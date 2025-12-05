import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Card from "../../components/ui/Card.jsx";

const mockProducts = [
  { id: 1, title: "لگ میکی نی نی", price: 310000, category: "دخترانه", image: "/images/photo-1.jpg", date: "2025-01-15", sales: 145 },
  { id: 2, title: "بادی کرپ نوزادی", price: 240000, category: "دخترانه", image: "/images/photo-2.jpg", date: "2025-01-10", sales: 98 },
  { id: 3, title: "بادی کوئین نوزادی", price: 240000, category: "دخترانه", image: "/images/photo-3-600x800.jpg", date: "2025-01-20", sales: 201 },
  { id: 4, title: "ست ۳ تیکه ماشین", price: 520000, category: "پسرانه", image: "/images/photo-7.png", date: "2025-01-05", sales: 67 },
  { id: 5, title: "ست دورس و شلوار", price: 680000, category: "دخترانه", image: "/images/photo-6.png", date: "2025-01-18", sales: 189 },
  { id: 6, title: "ست زمستونی پشمی", price: 750000, category: "دخترانه", image: "/images/photo-3.png", date: "2025-01-12", sales: 134 },
  { id: 7, title: "ست اسپرت پسرانه", price: 590000, category: "پسرانه", image: "/images/photo-4-600x800.jpg", date: "2025-01-22", sales: 176 },
  { id: 8, title: "شلوار جین پسرانه", price: 380000, category: "پسرانه", image: "/images/zara.png", date: "2025-01-08", sales: 112 },
  { id: 9, title: "ست تابستونی گلدار", price: 420000, category: "دخترانه", image: "/images/photo-3-600x800.jpg", date: "2025-01-25", sales: 210 },
];

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOption, setSortOption] = useState("جدیدترین");
  const [priceRange, setPriceRange] = useState([0, 1000000]); 

  const [minPrice, maxPrice] = priceRange;

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...mockProducts];

    if (searchTerm) {
      result = result.filter(p => p.title.includes(searchTerm));
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
        case "پرفروش‌ترین": return (b.sales || 0) - (a.sales || 0);
        default: return 0;
      }
    });

    return result;
  }, [searchTerm, activeFilter, sortOption, minPrice, maxPrice]);

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

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <span className="text-gray-600 font-medium">
              {filteredAndSortedProducts.length} محصول
            </span>

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
            <ChevronDown className="absolute left-5 pointer-events-none text-gray-500" size={20} />

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
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-xl mb-6 text-gray-800">فیلتر بر اساس قیمت</h3>
              
              <div className="relative h-2 bg-gray-200 rounded-full">
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="10000"
                  value={minPrice}
                  name="min"
                  onChange={handlePriceChange}
                  className="absolute w-full h-full appearance-none bg-transparent cursor-pointer z-10"
                />
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="10000"
                  value={maxPrice}
                  name="max"
                  onChange={handlePriceChange}
                  className="absolute w-full h-full appearance-none bg-transparent cursor-pointer z-20"
                />
                <div
                  className="absolute h-full bg-[#e35d06] rounded-full"
                  style={{
                    left: `${(minPrice / 1000000) * 100}%`,
                    right: `${100 - (maxPrice / 1000000) * 100}%`
                  }}
                />
              </div>

              <div className="flex justify-between mt-6 text-sm font-bold text-[#e35d06]">
                <span>{minPrice.toLocaleString("fa-IR")} تومان</span>
                <span>{maxPrice.toLocaleString("fa-IR")} تومان</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-xl mb-4">دسته‌های محبوب</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between"><span>ست نوزادی</span><span className="text-gray-500 text-sm">(۱۲)</span></li>
                <li className="flex justify-between"><span>بادی</span><span className="text-gray-500 text-sm">(۸)</span></li>
                <li className="flex justify-between"><span>شلوار</span><span className="text-gray-500 text-sm">(۱۵)</span></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map(product => (
                <div key={product.id} className="hover:scale-105 transition-transform duration-300">
                  <Card product={product} />
                </div>
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
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