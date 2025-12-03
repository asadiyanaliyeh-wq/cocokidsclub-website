import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PromotionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

          <div className="hidden lg:flex lg:col-span-3 justify-end items-start pt-12">
            <img
              src="/images/photo-6.png"
              alt="خرس کوکو"
              className="w-44 lg:w-52 xl:w-60 object-contain select-none pointer-events-none opacity-70"
            />
          </div>

  <div className="lg:col-span-6 text-center lg:text-right space-y-10">
  <div className="max-w-2xl mx-auto lg:mx-0 lg:ml-auto">  
    <h2 className="text-4xl lg:text-5xl font-bold text-[#e35d06] mb-10 text-right">
      پوشاک بچه گانه کوکو
    </h2>

    <p className="text-lg lg:text-xl text-gray-700 leading-loose tracking-wide text-right">
      مجموعه کوکو یک فروشگاه تخصصی فروش آنلاین پوشاک بچه گانه است. که تمامی اجناسش از بهترین برند های اروپایی و ایرانی تهیه شده. 
      کافی است چند کلیک کنید و جنس مورد نیازتون رو در کمترین زمان، در خونه تحویل بگیرید.
    </p>

    <p className="text-lg lg:text-xl text-gray-700 leading-loose tracking-wide mt-8 text-right">
      برای ثبت تصاویر نزدیک به واقعیت اجناس، وقت زیادی صرف شده و می‌تونی با خیال راحت خریدت رو انجام بدی.
    </p>

    <p className="text-xl lg:text-2xl font-semibold text-gray-800 mt-10 leading-relaxed text-right">
      ما همون چیزی که شما می‌خوای رو برات می‌فرستیم.
    </p>

    <div className="flex justify-start mt-12">
      <div
        className={`transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 bg-[#e35d06] text-white font-bold text-base lg:text-lg px-8 py-3.5 rounded-full hover:bg-[#d14e00] transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          ورود به فروشگاه
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </div>
</div>

          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <img
              src="/images/photo-7.png"
              alt="کودک خوشحال با لباس کوکو"
              className="w-full max-w-sm lg:max-w-md xl:max-w-lg object-contain drop-shadow-2xl select-none pointer-events-none"
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden space-y-16 px-6 py-16 text-center">
        <img
          src="/images/photo-6.png"
          alt="خرس کوکو"
          className="w-56 mx-auto opacity-75"
        />
        
        <div className="space-y-8 max-w-2xl mx-auto text-right">
          <h2 className="text-4xl font-bold text-[#e35d06]">پوشاک بچه گانه کوکو</h2>
          <p className="text-lg text-gray-700 leading-loose">
            مجموعه کوکو یک فروشگاه تخصصی فروش آنلاین پوشاک بچه گانه است. که تمامی اجناسش از بهترین برند های اروپایی و ایرانی تهیه شده...
          </p>
          <p className="text-lg text-gray-700 leading-loose">
            برای ثبت تصاویر نزدیک به واقعیت اجناس، وقت زیادی صرف شده و می‌تونی با خیال راحت خریدت رو انجام بدی.
          </p>
          <p className="text-xl font-semibold text-gray-800">
            ما همون چیزی که شما می‌خوای رو برات می‌فرستیم.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-[#e35d06] text-white font-bold px-9 py-3.5 rounded-full hover:bg-[#d14e00] shadow-lg"
          >
            ورود به فروشگاه
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>

        <img
          src="/images/photo-7.png"
          alt="کودک خوشحال"
          className="w-80 mx-auto drop-shadow-2xl"
        />
      </div>
    </section>
  );
}