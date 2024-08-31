import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import SwiperComponent from "./components/SwiperComp";
import BirdComponent from "./components/BirdComponent";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 h-[100vh]">
        <HeroSection />
        <About />
        <SwiperComponent />
        <BirdComponent />
      </div>
    </>
  );
};

export default App;
