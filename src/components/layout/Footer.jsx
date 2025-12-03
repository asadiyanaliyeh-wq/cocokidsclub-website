import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#e3e1e1] py-16 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-right">

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#ff6000] font-bold text-xl mb-6">
            نماد اعتماد الکترونیک
          </h3>

          <img
            src="/images/enamad.png"
            alt="نماد اعتماد"
            className="w-32"
          />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[#ff6000] font-bold text-xl mb-6">
            خدمات مشتریان
          </h3>

          <ul className="text-gray-700 space-y-3 text-lg">
            <li>
              <Link to="/login" className="hover:text-[#ff6000] transition">
                ورود / ثبت نام
              </Link>
            </li>
            <li>
              <Link to="/account" className="hover:text-[#ff6000] transition">
                حساب کاربری
              </Link>
            </li>
            <li>
              <Link to="/rules" className="hover:text-[#ff6000] transition">
                قوانین و مقررات
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-[#ff6000] transition">
                پیگیری سفارش
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end leading-8" >
          <h3 className="text-[#ff6000] font-bold text-xl mb-6" >
            تماس با ما
          </h3>

          <p className="text-gray-700 text-lg">
            آدرس: خراسان رضوی ، کاشمر     <br />
            تلفن: ۰۵۸۳۲۴۴۷۷۳۱ <br />
            تماس تلفنی: ۰۹۱۲۵۱۳۷۴۵۹ <br />
            ساعت پاسخ‌گویی: ۱۰ تا ۱۴ (روزهای غیر تعطیل)
          </p>

          <div className="flex items-center justify-center md:justify-start gap-6 mt-6">

            <a
              href="#"
              className="p-3 rounded-full transition bg-gray-200 hover:bg-[#ff6000] hover:text-white"
            >
              <Send size={22} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full transition bg-gray-200 hover:bg-[#ff6000] hover:text-white"
            >
              <MessageCircle size={22} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full transition bg-gray-200 hover:bg-[#ff6000] hover:text-white"
            >
              <Instagram size={22} />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}
