import { ShoppingBag, Heart, User, ChevronDown, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 
                    bg-white shadow-md 
                    md:bg-white/90 md:backdrop-blur-md 
                    scroll-bg-transparent">

      <div className="px-4 sm:px-6 lg:px-8 py-4">

        <div className="flex items-center justify-between gap-6">

  <div className="flex items-center gap-6">

  <div className="flex items-center gap-5">
    <button className="relative hover:scale-110 transition"><ShoppingBag className="w-6 h-6 text-gray-700" /><span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5">0</span></button>
    <button className="relative hover:scale-110 transition"><Heart className="w-6 h-6 text-gray-700" /><span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5">0</span></button>
    <button className="hover:scale-110 transition"><User className="w-6 h-6 text-gray-700" /></button>
  </div>

  <div className="hidden lg:flex items-center">
    <div className="flex items-center bg-white rounded-full border border-gray-300 hover:border-orange-500 focus-within:border-orange-500 transition-all duration-300 shadow-sm">
      <button className="bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600 transition-all">
        <Search className="w-6 h-6" />
      </button>
      <input
        type="text"
        placeholder="جستجو در محصولات"
        className="w-70 px-4 py-3 pr-6 text-right outline-none text-gray-700 placeholder-gray-500 font-medium bg-transparent"
      />
    </div>
  </div>

  <button className="lg:hidden bg-orange-500 text-white rounded-full p-3 shadow-md hover:shadow-lg transition-all">
    <Search className="w-6 h-6" />
  </button>

</div>

<ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium text-lg mr-8">
  <li><a href="/about" className="hover:text-orange-500 transition">درباره ما</a></li>
  <li><a href="/contact" className="hover:text-orange-600 transition">تماس با ما</a></li>
  <li><a href="/guide" className="hover:text-orange-600 transition">راهنما و قوانین خرید</a></li>

  <li className="relative group">
    <a href="#" className="flex items-center gap-1 hover:text-orange-600 transition">
      فروشگاه <ChevronDown className="w-4 h-4" />
    </a>
    <ul className="absolute top-full mt-3 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      <li><a href="/shop/boys" className="block px-7 py-3 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap">پسرانه</a></li>
      <li><a href="/shop/girls" className="block px-7 py-3 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap">دخترانه</a></li>
      <li><a href="/shop/sport" className="block px-7 py-3 hover:bg-orange-50 hover:text-orange-600 whitespace-nowrap rounded-b-2xl">اسپرت</a></li>
    </ul>
  </li>
  <li><a href="/" className="hover:text-orange-600 transition">خانه</a></li>
</ul>

          <div>
            <img 
              src="/images/logo-1.png" 
              alt="کوکو کیدز کلاب" 
              className="h-14 lg:h-16 object-contain"
            />
          </div>

        </div>
      </div>
    </nav>
  );
}