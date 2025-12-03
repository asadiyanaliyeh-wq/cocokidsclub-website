import Navbar from "../../components/layout/Navbar";

export default function About() {
  return (
    <>
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url(/images/photo-1.jpg)" }}
      />

      <Navbar />
      <div className="h-20"></div>

      <section className="w-full bg-[#e35d06] py-13 text-center text-white shadow-md">
        <h1 className="text-4xl  font-bold">درباره ما</h1>
        <p className="mt-4 text-lg opacity-90"><b >خانه</b> / درباره ما</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-right  mt-10 leading-9 text-xl text-gray-700">
        
        <p>
مجموعه کوکو یک فروشگاه تخصصی فروش آنلاین پوشاک بچه گانست، که تمامی اجناسش از بهترین برند های اروپایی و ایرانیه. کافیه چنتا کلیک کنی و جنس مورد نیازت رو در کمترین زمان، در خونه تحویل بگیری.
برای ثبت تصاویر نزدیک به واقعیت اجناس، وقت زیادی صرف شده و می تونی با خیال راحت خریدت رو انجام بدی        </p>


        <p className="mt-8">
          ما همون چیزی که شما میخواین رو براتون میفرستیم.

</p>

      </section>
      <section className="w-full flex px-70">
  <img 
    src="/images/photo-6.png" 
    className="w-[250px] object-contain  pointer-events-none select-none"
    alt=""
  />
</section>

    </>
  );
}
