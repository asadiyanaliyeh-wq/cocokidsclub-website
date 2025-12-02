import Navbar from '../../components/layout/Navbar';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <>
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 mt-100"
        style={{ backgroundImage: "url(/images/photo-1.jpg)" }}
      />

      <Navbar />

      <div className="mt-20"></div>

      <HeroSection />
    </>
  );
}
