import HeroSection from "./components/HeroSection.jsx";
import CanvasModel from "./canvas/index.jsx";
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";
import Process from "./components/Process.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <CanvasModel />
      <About />
      <Product />
      <Process />
      <Testimonials />

      <Contact />
      <Footer />
    </div>
  );
}
