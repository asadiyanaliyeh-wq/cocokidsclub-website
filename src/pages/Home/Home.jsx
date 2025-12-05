import Navbar from '../../components/layout/Navbar';
import HeroSection from './components/HeroSection';
import ChildrenCards from './components/ChildrenCards';
import PromotionSection from './components/PromotionSection';
import LatestProducts from './components/LatestProducts'; 
import BestSellersSlider from './components/BestSellersSlider';
import BrandsAndFeatures from './components/BrandsAndFeatures';
export default function Home() {
  return (
    <>
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url(/images/photo-1.jpg)" }}
      />

      <Navbar />
      <div className="h-20"></div>

      <HeroSection />
      <ChildrenCards />

      <section className="w-full flex justify-start">
        <img 
          src="/images/photo-3.png" 
          className="w-[320px] object-contain pointer-events-none select-none"
          alt="جغد"
        />
      </section>
      <LatestProducts />


      <PromotionSection />

      <BestSellersSlider />  

      <BrandsAndFeatures />

      <div className="h-10"></div>
    </>
  );
}