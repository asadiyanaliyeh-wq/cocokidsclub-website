import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/layout/Footer';
import Rules from "./pages/Rules/Rules";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />   
        <Route path="/about" element={<About />} />   
        <Route path="/contact" element={<Contact />} />  


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
