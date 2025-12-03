import { useRef } from "react";
import { gsap } from "gsap";

export default function MergeCards() {
  const leftCard = useRef(null);
  const rightCard = useRef(null);

  const handleEnter = () => {
    gsap.to(leftCard.current, {
      x: 15,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(rightCard.current, {
      x: -15,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(leftCard.current, {
      x: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(rightCard.current, {
      x: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div className="flex gap-6 justify-center items-center mt-10">

      <div
        ref={leftCard}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative w-[600px] h-[800px] rounded-3xl overflow-hidden bg-white shadow-lg cursor-pointer"
      >
        <img
          src="/images/photo-3-600x800.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-10 left-10 text-white">
          <p className="text-sm mb-1 opacity-80">دسته بندی محصولات</p>
          <h3 className="text-2xl font-bold mb-3">پسرانه</h3>

          <button className="px-6 py-2 border border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition">
            مشاهده محصولات
          </button>
        </div>
      </div>

      <div
        ref={rightCard}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative w-[600px] h-[800px] rounded-3xl overflow-hidden bg-white shadow-lg cursor-pointer"
      >
        <img
          src="/images/photo-4-600x800.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-10 right-10 text-white text-right">
          <p className="text-sm mb-1 opacity-80">دسته بندی محصولات</p>
          <h3 className="text-2xl font-bold mb-3">دخترانه</h3>

          <button className="px-6 py-2 border border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-black transition">
            مشاهده محصولات
          </button>
        </div>
      </div>

    </div>
  );
}
