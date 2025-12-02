import Navbar from '../../components/layout/Navbar';

export default function Home() {
  return (
    <>
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/photo-1.jpg)" }}
      />

      <Navbar />
    </>
  );
}