import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[650px] mt-32 mb-10 overflow-hidden rounded-3xl">

      <img
        src="/images/photo-2.jpg"
        alt="بنر"
        className="w-full h-full object-cover rounded-3xl"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-start px-10">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 text-lg mb-3 px-60"
        >
          پوشاک بچه‌گانه کوکو
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 "
        >
          فروشگاه آنلاین لباس نوزاد و کودک
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl text-orange-600 font-semibold mb-8 px-55"
        >
          برازنده ی کودکان شما
        </motion.h2>

        <motion.a
          href="/shop"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="bg-orange-500 text-white px-2 ml-60 py-3 rounded-full text-lg font-semibold 
                     hover:bg-orange-600 transition shadow-xl "
        >
          ورود به فروشگاه
        </motion.a>

      </div>
    </section>
  );
}
