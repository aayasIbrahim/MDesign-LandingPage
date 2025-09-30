import HeroSection from "./components/Hero";
import Navbar from "./components/Navber";
import Counter from "./components/Counter"
import Skill from "./components/Skill";
import Protfolio from './components/ProtfolioSection'
import TestimonialSlider from "./components/TestimonialSlider";


export default function Home() {
  return (
   <>
   <Navbar/>
   <HeroSection/>
   <Counter/>
   <Skill/>
   <Protfolio/>
   <TestimonialSlider/>
   </>
  );
}
