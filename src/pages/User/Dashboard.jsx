import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar"; 

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { 
    cart, 
    wishlist, 
    cartCount, 
    wishlistCount, 
  } = useCart();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-12 pt-24"> 
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">پنل کاربری</h1>
                <p className="text-xl text-orange-600 mt-2">
                  خوش آمدید، {user?.email || "مهمان"}!
                </p>
              </div>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition"
              >
                خروج
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-orange-100 p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-orange-600">سبد خرید</h3>
                <p className="text-4xl font-black mt-2">{cartCount}</p>
                <p className="text-gray-600">محصول</p>
              </div>
              <div className="bg-pink-100 p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-pink-600">علاقه‌مندی‌ها</h3>
                <p className="text-4xl font-black mt-2">{wishlistCount}</p>
                <p className="text-gray-600">محصول</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-blue-600">سفارشات</h3>
                <p className="text-4xl font-black mt-2">۰</p>
                <p className="text-gray-600">سفارش</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-orange-600">سبد خرید شما</h2>
                {cart.length === 0 ? (
                  <p className="text-center py-12 text-gray-500 bg-gray-50 rounded-2xl">
                    سبد خرید خالی است
                  </p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:shadow-md transition">
                        <div className="flex items-center gap-4">
                          <img src={item.image || "/vite.svg"} alt={item.title} className="w-16 h-16 object-cover rounded-xl" />
                          <div>
                            <p className="font-semibold text-gray-800">{item.title}</p>
                            <p className="text-sm text-gray-600">تعداد: {item.quantity}</p>
                            <p className="text-orange-600 font-bold">
                              {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 text-lg"
                        >
                          حذف
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-pink-600">علاقه‌مندی‌ها</h2>
                {wishlist.length === 0 ? (
                  <p className="text-center py-12 text-gray-500 bg-gray-50 rounded-2xl">
                    هیچ محصولی در علاقه‌مندی نیست
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {wishlist.map((item) => (
                      <div key={item.id} className="bg-gray-50 p-4 rounded-2xl text-center hover:shadow-lg transition">
                        <img src={item.image || "/vite.svg"} alt={item.title} className="w-full h-32 object-cover rounded-xl mb-3" />
                        <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.title}</p>
                        <p className="text-orange-600 font-bold mt-2">
                          {item.price?.toLocaleString("fa-IR")} تومان
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/shop"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-4 rounded-2xl text-xl transition transform hover:scale-105"
              >
                ادامه خرید
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}