import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const CookieConsent = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or declined cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true); // Show the cookie consent prompt
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted"); // Save the user's choice
    setIsVisible(false); // Hide the prompt
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined"); // Save the user's choice
    setIsVisible(false); // Hide the prompt
  };

  if (!isVisible) return null; // Don't render the prompt if cookies are already accepted or declined

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-n-8/90 backdrop-blur-sm p-4 flex items-center justify-between z-50">
      <p className="text-n-1 text-sm">
        {t('cookieConsent.message')}{" "} {/* Translated message */}
        <a href="/privacy-policy" className="text-color-1 hover:underline">
          {t('cookieConsent.learnMore')} {/* Translated "Learn more" */}
        </a>
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleDecline}
          className="bg-n-6 text-n-1 px-4 py-2 rounded-lg hover:bg-n-7 transition-colors"
        >
          {t('cookieConsent.decline')} {/* Translated "Decline" */}
        </button>
        <button
          onClick={handleAccept}
          className="bg-color-1 text-n-8 px-4 py-2 rounded-lg hover:bg-color-1/90 transition-colors"
        >
          {t('cookieConsent.accept')} {/* Translated "Accept" */}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;