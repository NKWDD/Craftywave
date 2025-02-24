import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown open/close
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Update the selected language
    setIsDropdownOpen(false); // Close the dropdown
    // Add logic here to change the language of the website (e.g., using i18next)
  };

  const LanguageDropdown = () => {
    return (
      <div className="relative mr-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {/* Display the selected language */}
          <span className="button hidden mr-4 text-n-1/50 transition-colors hover:text-n-1 lg:block bg-transparent border-none appearance-none cursor-pointer">
            {selectedLanguage}
          </span>
          {/* Dropdown arrow with animation */}
          <div className="transform transition-transform duration-200">
            <svg
              className={`w-4 h-4 text-n-1/50 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Dropdown menu styling */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-40 bg-n-8 rounded-lg shadow-lg z-50">
            <div className="py-2">
              <div
                className="block px-4 py-2 text-n-1 hover:bg-n-7 transition-colors cursor-pointer"
                onClick={() => handleLanguageChange("English")}
              >
                English
              </div>
              <div
                className="block px-4 py-2 text-n-1 hover:bg-n-7 transition-colors cursor-pointer"
                onClick={() => handleLanguageChange("Dutch")}
              >
                Dutch
              </div>
              <div
                className="block px-4 py-2 text-n-1 hover:bg-n-7 transition-colors cursor-pointer"
                onClick={() => handleLanguageChange("Polish")}
              >
                Polish
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {/* Language Dropdown (Hidden on Mobile) */}
        <div className="hidden lg:block">
          <LanguageDropdown />
        </div>

        <Button className="hidden lg:flex ml-4" href="#contact">
          Contact
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;