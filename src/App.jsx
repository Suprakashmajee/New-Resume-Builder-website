import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Templates from "./pages/Templates.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Builder from "./pages/Builder.jsx";
import CoverLetter from "./pages/CoverLetter.jsx";
import Legal from "./pages/Legal.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const { pathname } = useLocation();
  const isApp = pathname.startsWith("/builder") || pathname.startsWith("/cover-letter");

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-sand">
      {!isApp && <Header />}
      <main className="flex w-full grow flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-templates" element={<Templates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isApp && <Footer />}
    </div>
  );
}
