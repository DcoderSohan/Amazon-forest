import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import SwiperComponent from "./components/SwiperComp";
// import FeatureSection from "./components/FeatureSection";
// import Workflow from "./components/Workflow";
// import Footer from "./components/Footer";
// import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 h-[100vh]">
         <HeroSection />
         <About />
         <SwiperComponent />
      </div>
    </>
  );
};

export default App;
