import { 
  Package, 
  Phone, 
  Smile, 
  Truck
} from "lucide-react";

export default function BrandsAndFeatures() {
  const brands = [1, 2, 3, 4, 5, 6, 7];

  const features = [
    { icon: Package, title: "کیفیت محصولات", desc: "کالای با کیفیت تضمینی" },
    { icon: Phone, title: "پشتیبانی مشتریان", desc: "پاسخگویی تلفنی" },
    { icon: Smile, title: "پرداخت آسان", desc: "با کارت‌های بانکی" },
    { icon: Truck, title: "ارسال سریع", desc: "به تمام نقاط ایران" },
  ];

  return (
    <section className="py-16" dir="rtl">
      <div className="max-w-screen-2xl mx-auto px-6">

        <div className="mb-20">
          <h3 className="text-center text-xl md:text-2xl font-bold text-gray-700 mb-12">
            همکاری با برندهای معتبر
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12 lg:gap-16">
            {brands.map(num => (
              <img
                key={num}
                src={`/images/${num}.png`}
                alt={`برند ${num}`}
                className="h-10 md:h-12 lg:h-14 object-contain opacity-65 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto -mt-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-3 p-3 bg-orange-50 rounded-full">
                  <feature.icon size={36} className="text-[#e35d06]" />
                </div>
                <h4 className="font-bold text-base md:text-lg text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}