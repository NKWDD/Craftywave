import { useState, useEffect } from "react";

const LanguagePrompt = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already selected a language
    const hasSelectedLanguage = localStorage.getItem("selectedLanguage");
    if (!hasSelectedLanguage) {
      setIsVisible(true); // Show the language prompt
    }
  }, []);

  const handleLanguageSelect = (language) => {
    localStorage.setItem("selectedLanguage", language); // Save the selected language
    setIsVisible(false); // Hide the prompt
    // Add logic here to change the language of the website (e.g., using i18next)
  };

  if (!isVisible) return null; // Don't render the prompt if the user has already selected a language

  return (
    <div className="fixed inset-0 bg-n-8/50 flex items-center justify-center z-50">
      <div className="bg-n-8 p-8 rounded-lg shadow-lg text-center w-[30rem] max-w-full">
        <h2 className="h4 mb-6 text-n-1">Choose Your Language</h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => handleLanguageSelect("English")}
            className="bg-color-1 text-n-8 px-6 py-3 rounded-lg hover:bg-color-1/90 transition-colors flex-1"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageSelect("Polski")}
            className="bg-color-1 text-n-8 px-6 py-3 rounded-lg hover:bg-color-1/90 transition-colors flex-1"
          >
            Polski
          </button>
          <button
            onClick={() => handleLanguageSelect("Nederlands")}
            className="bg-color-1 text-n-8 px-6 py-3 rounded-lg hover:bg-color-1/90 transition-colors flex-1"
          >
            Nederlands
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguagePrompt;