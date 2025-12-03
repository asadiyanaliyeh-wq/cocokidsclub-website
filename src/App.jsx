import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/layout/Footer';
import Rules from "./pages/Rules/Rules";
import About from "./pages/About/About";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />  
        <Route path="/about" element={<About />} />   

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
