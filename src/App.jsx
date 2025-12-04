import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home/Home";
import Rules from "./pages/Rules/Rules";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/User/Dashboard.jsx";

import Footer from "./components/layout/Footer";
import ProtectedRoute from "./utils/ProtectedRoute";

function Layout({ children }) {
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/register"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      {children}
      {!shouldHideFooter && <Footer />}  
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
