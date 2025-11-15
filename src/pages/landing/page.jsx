import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import AboutSection from './sections/AboutSection';
import HowItWorks from './sections/HowItWorks';
import ShoppingSection from './sections/ShoppingSection';
import { DiscountsSection } from './sections/DiscountsSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <HowItWorks />
      <ShoppingSection />
      <DiscountsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;

