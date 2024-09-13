import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import SwiperComponent from "./components/SwiperComp";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 h-[100vh]">
        <HeroSection />
        <About />
        <SwiperComponent />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};

export default App;
