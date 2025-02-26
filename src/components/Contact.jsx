import { useState, useRef } from "react";
import { useTranslation } from 'react-i18next'; // Add this import
import { check } from "../assets";
import Button from "./Button";
import Section from "./Section";
import trustpilotBadge from "../assets/trustpilot-badge.png"; 
import hostingerBadge from "../assets/hostinger-badge.png"; 

const Contact = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const formRef = useRef(); // Reference to the form

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      formRef.current.reset(); // Clear the form fields
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/xrbewplk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const responseData = await response.json();
      if (responseData.ok) {
        handleResponse(200, t('contact.successMessage')); // Translated success message
      } else {
        handleResponse(response.status, responseData.error);
      }
    } catch (error) {
      handleResponse(500, t('contact.errorMessage')); // Translated error message
    }
  };

  return (
    <Section id="contact" crosses>
      <div className="container lg:flex">
        {/* Left Side: Contact Information */}
        <div className="lg:w-1/2 lg:pr-10">
          <h2 className="h2 mb-4 md:mb-8">
            {t('contact.getStarted')} {/* Translated heading */}
          </h2>

          {/* Contact Information */}
          <div className="mb-10 md:mb-14">
            <h3 className="h6 mb-4">{t('contact.getInTouch')}</h3> {/* Translated subheading */}
            <ul className="space-y-4">
              <li className="flex items-center">
                <img src={check} width={24} height={24} alt="check" />
                <a
                  href="https://wa.me/31658926449" // WhatsApp link
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice
                  className="body-2 ml-5 hover:underline"
                >
                  {t('contact.whatsapp')} {/* Translated WhatsApp text */}
                </a>
              </li>
              <li className="flex items-center">
                <img src={check} width={24} height={24} alt="check" />
                <a
                  href="mailto:info.craftywave@gmail.com"
                  className="body-2 ml-5 hover:underline"
                >
                  {t('contact.email')} {/* Translated email text */}
                </a>
              </li>
              <li className="flex items-center">
                <img src={check} width={24} height={24} alt="check" />
                <p className="body-2 ml-5">{t('contact.availability')}</p> {/* Translated availability text */}
              </li>
            </ul>

            {/* Badges Section (Visible on Desktop) */}
            <div className="mt-8 hidden lg:flex lg:space-x-6">
              <div className="p-6">
                <p className="body-2 text-n-1 mb-4">{t('contact.trustpilot')}</p> {/* Translated Trustpilot text */}
                <img
                  src={trustpilotBadge} // Use the imported Trustpilot badge image
                  alt="Trustpilot Badge"
                  className="w-32"
                />
              </div>
              <div className="p-6">
                <p className="body-2 text-n-1 mb-4">{t('contact.hostinger')}</p> {/* Translated Hostinger text */}
                <img
                  src={hostingerBadge} // Use the imported Hostinger badge image
                  alt="Hostinger Badge"
                  className="w-32"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 lg:pl-10">
          <form ref={formRef} onSubmit={handleOnSubmit} className="max-w-[30rem] mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="body-2 block mb-2">{t('contact.nameLabel')}</label> {/* Translated name label */}
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-n-6 rounded-lg"
                placeholder={t('contact.namePlaceholder')} // Translated name placeholder
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="body-2 block mb-2">{t('contact.emailLabel')}</label> {/* Translated email label */}
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-n-6 rounded-lg"
                placeholder={t('contact.emailPlaceholder')} // Translated email placeholder
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="found-us" className="body-2 block mb-2">{t('contact.foundUsLabel')}</label> {/* Translated "How did you find us?" label */}
              <select
                id="found-us"
                name="found-us"
                className="w-full p-3 border border-n-6 rounded-lg"
                required
              >
                <option value="">{t('contact.selectOption')}</option> {/* Translated default option */}
                <option value="search-engine">{t('contact.searchEngine')}</option> {/* Translated search engine option */}
                <option value="social-media">{t('contact.socialMedia')}</option> {/* Translated social media option */}
                <option value="friend">{t('contact.friend')}</option> {/* Translated friend option */}
                <option value="other">{t('contact.other')}</option> {/* Translated other option */}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="question" className="body-2 block mb-2">{t('contact.questionLabel')}</label> {/* Translated question label */}
              <textarea
                id="question"
                name="question"
                className="w-full p-3 border border-n-6 rounded-lg"
                placeholder={t('contact.questionPlaceholder')} // Translated question placeholder
                rows="5"
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={status.submitting}
            >
              {status.submitting ? t('contact.submitting') : t('contact.submit')} {/* Translated submit button text */}
            </Button>

            {/* Success/Error Message */}
            {status.info.msg && (
              <div
                className={`mt-4 p-3 rounded-lg text-center ${
                  status.info.error
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {status.info.msg}
              </div>
            )}

            {/* Badges Section (Visible on Mobile) */}
            <div className="mt-8 lg:hidden flex flex-col space-y-6">
              <div className="p-6">
                <p className="body-2 text-n-1 mb-4 text-center">{t('contact.trustpilot')}</p> {/* Translated Trustpilot text */}
                <img
                  src={trustpilotBadge} // Use the imported Trustpilot badge image
                  alt="Trustpilot Badge"
                  className="w-32 mx-auto"
                />
              </div>
              <div className="p-6">
                <p className="body-2 text-n-1 mb-4 text-center">{t('contact.hostinger')}</p> {/* Translated Hostinger text */}
                <img
                  src={hostingerBadge} // Use the imported Hostinger badge image
                  alt="Hostinger Badge"
                  className="w-32 mx-auto"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;