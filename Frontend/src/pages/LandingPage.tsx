import About from "../components/LandingPage/About";
import CraftLearnTracks from "../components/LandingPage/Courses";
import Faqs from "../components/LandingPage/Faq";
import Features from "../components/LandingPage/Features";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import HowItWorks from "../components/LandingPage/HowItWorks";

const LandingPage = () => {
  return (
    <div className="w-screen  bg-primary flex flex-col">
      <Header />
      <Hero />
      <About />
    
        <Features />
        <CraftLearnTracks />
        <HowItWorks />

        <Faqs />
        <Footer />
    </div>
  );
};

export default LandingPage;
