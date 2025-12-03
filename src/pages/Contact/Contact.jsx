import { MapPin, Phone, Mail, Instagram, Clock, Send } from "lucide-react";
import Navbar from "../../components/layout/Navbar";

export default function Contact() {
  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 bg-blur"
        style={{ backgroundImage: "url(/images/photo-1.jpg)" }}
      />

      <Navbar />
      <div className="h-20"></div>

      <section className="w-full bg-[#e35d06] py-12 text-center text-white">
        <h1 className="text-4xl font-bold">تماس با ما</h1>
        <p className="mt-4 text-lg opacity-90">
          <b>خانه</b> / تماس با ما
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 text-black">
        <div className="space-y-8 font-bold text-black">
          <h2 className="text-3xl font-bold text-gray-800 text-right">فرم تماس</h2>

          <form className="space-y-6" dir="rtl">
            <div>
              <label className="block text-right text-gray-700 mb-2">نام شما</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-black-300 focus:border-[#e35d06] focus:outline-none transition"
                placeholder="نام و نام خانوادگی"
              />
            </div>

            <div>
              <label className="block text-right text-gray-700 mb-2">ایمیل شما</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-black-300 focus:border-[#e35d06] focus:outline-none transition"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="block text-right text-gray-700 mb-2">تلفن همراه</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-black-300 focus:border-[#e35d06] focus:outline-none transition"
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              />
            </div>

            <div>
              <label className="block text-right text-gray-700 mb-2">پیام شما</label>
              <textarea
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-black-300 focus:border-[#e35d06] focus:outline-none transition resize-none"
                placeholder="پیام خود را اینجا بنویسید..."
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#e35d06] text-white px-8 py-3 rounded-full hover:bg-[#d14e00] transition shadow-lg"
              >
                <Send className="w-5 h-5" />
                ارسال پیام
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-10 text-right" dir="rtl">
          <h2 className="text-3xl font-bold text-black">اطلاعات تماس</h2>

          <div className="space-y-8 text-lg text-black-700">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#e35d06]" />
              </div>
              <div>
                <p className="font-semibold">آدرس:</p>
                <p className="mt-1">خراسان رضوی - کاشمر -</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#e35d06]" />
              </div>
              <div>
                <p className="font-semibold">تلفن:</p>
                <p className="mt-1" dir="ltr">05832427381</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#e35d06]" />
              </div>
              <div>
                <p className="font-semibold">موبایل:</p>
                <p className="mt-1" dir="ltr">09150813459</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-[#e35d06]" />
              </div>
              <div>
                <p className="font-semibold">ساعت پاسخگویی:</p>
                <p className="mt-1">۱۰ تا ۱۴ و ۱۶ تا ۲۲ روزهای غیر تعطیل</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-[#e35d06]" />
              </div>
              <div>
                <p className="font-semibold">ایمیل:</p>
                <p className="mt-1" dir="ltr">info@cocokidsclub.ir</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Instagram className="w-6 h-6 text-[#e35d06]" />
              </div>
              <div>
                <p className="font-semibold">اینستاگرام:</p>
                <a href="https://instagram.com/cocokidsclub" target="_blank" rel="noreferrer" className="text-[#e35d06] hover:underline">
                  @cocokidsclub
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-8">
            <a href="#" className="bg-orange-100 p-3 rounded-full hover:bg-[#e35d06] hover:text-white transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="bg-orange-100 p-3 rounded-full hover:bg-green-500 hover:text-white transition">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.34 5.46h.02c.56 0 1.01.45 1.01 1.01v.01c0 .56-.45 1.01-1.01 1.01H17.34c-.56 0-1.01-.45-1.01-1.01v-.01c0-.56.45-1.01 1.01-1.01zM12 6.1c3.29 0 6.01 2.68 6.01 6.01 0 3.33-2.72 6.01-6.01 6.01-3.33 0-6.01-2.68-6.01-6.01C5.99 8.78 8.67 6.1 12 6.1zm0 10.62c2.56 0 4.61-2.05 4.61-4.61 0-2.56-2.05-4.61-4.61-4.61-2.56 0-4.61 2.05-4.61 4.61 0 2.56 2.05 4.61 4.61 4.61zM12 4.52c-4.09 0-7.48 3.04-7.48 7.48 0 4.44 3.39 7.48 7.48 7.48 4.44 0 7.48-3.04 7.48-7.48 0-4.44-3.04-7.48-7.48-7.48zM12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/>
              </svg>
            </a>
            <a href="#" className="bg-orange-100 p-3 rounded-full hover:bg-blue-500 hover:text-white transition">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="bg-orange-100 p-3 rounded-full hover:bg-blue-600 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 11.5c0-6.36-5.14-11.5-11.5-11.5S1 5.14 1 11.5c0 5.42 3.74 9.94 8.75 11.17v-7.9h-2.63v-3.07h2.63V9.43c0-2.6 1.59-4.02 3.91-4.02.79 0 1.64.15 1.64.15v1.8h-.92c-.91 0-1.2.56-1.2 1.13v1.36h2.04l-.33 3.07h-1.71v7.9C18.26 21.44 24 16.92 24 11.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-start ">
  <img 
    src="/images/photo-3.png" 
    className="w-[220px] object-contain  pointer-events-none select-none"
    alt=""
  />
</section>
    </>
  );
}