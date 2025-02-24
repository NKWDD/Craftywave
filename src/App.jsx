import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import CookieConsent from "./components/CookieConsent";
import LanguagePrompt from "./components/LanguagePrompt";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Roadmap />
        <Pricing />
        <Contact />
        <Footer />
      </div>

      <ButtonGradient />
      <CookieConsent />
      <LanguagePrompt />
    </>
  );
};

export default App;
