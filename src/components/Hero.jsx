import { useTranslation } from 'react-i18next';
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useEffect, useState } from "react"; // Added useState and useEffect
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const { t, i18n, ready } = useTranslation(); // Get ready status and i18n instance
  const parallaxRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // This ensures we only render after translations are ready
  useEffect(() => {
    if (ready) {
      setIsLoaded(true);
    }
  }, [ready]);

  // For debugging
  useEffect(() => {
    console.log("Current language:", i18n.language);
    console.log("Hero title translation:", t('hero.title'));
    console.log("Translation ready:", ready);
  }, [i18n.language, ready]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Show loading until translations are ready
  }

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            {t('hero.title')}{" "}
            <span className="inline-block relative">
            {t('hero.amazing')}{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {t('hero.subtitle')}
          </p>
          <Button href="#contact" white>
            {t('hero.button')}
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;