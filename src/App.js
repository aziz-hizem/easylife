import React from "react";
import { FaCheck, FaPhone } from "react-icons/fa";
import "./index.css"; // Keep this for any custom styles if needed
import "./fonts.css";

// Images
import maidImage from "./assets/maid.png";
import mainImage from "./assets/main.png";
import numberOneImage from "./assets/one.png";
import todayIcon from "./assets/today.png";

const App = () => {
  // Define the phone number
  const phoneNumber = "+21652631119";

  return (
    <div className="bg-black-100 min-h-screen">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-4 py-3 md:px-6 md:py-4 z-50">
        {/* Logo + Brand Name */}
        <div className="flex items-center gap-2">
          <img src={maidImage} alt="EasyLife Logo" className="h-8 md:h-10" />
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-sky-900">Easy</span>
            <span className="text-sky-400">Life</span>
          </h1>
        </div>

        {/* Navigation Links (Hidden on small screens) */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-gray-700 font-medium">
          <button className="hover:text-sky-400">Nettoyage de Maison</button>
          <button className="hover:text-sky-400">Prix et Services</button>
          <button className="hover:text-sky-400">FAQ</button>
        </nav>

        {/* Reservation Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="bg-sky-400 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base font-sofia font-italic hover:bg-sky-600 flex items-center gap-2"
        >
          <img src={todayIcon} alt="Checklist Icon" className="h-4 md:h-5" />
          Réservez un nettoyage !
        </a>
      </header>
      {/* Main Content */}
      <main className="pt-20 md:pt-24 px-4 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side Content */}
        {/*<div className="max-w-md md:max-w-lg text-center md:text-left">*/}
        <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-sky-900 font-sofia font-bold">
            <div className="flex items-center">
              Votre service de ménage n°
              <img
                src={numberOneImage}
                alt="Number One"
                className="inline-block h-8 md:h-10" // Adjust height as needed
              />
            </div>
            <div className="block">à <span className="text-red-600">Tunis</span></div>
          </h2>

          <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-base md:text-lg text-gray-800">
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" /> Employés à temps plein hautement qualifiés
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" /> Timing flexible
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-green-500" /> Tarification transparente, sans frais cachés
            </li>
          </ul>

          {/* Call & Reservation Button */}
          <div className="mt-4 md:mt-6">
            <a
              href={`tel:${phoneNumber}`} // Use the tel: protocol
              className="bg-sky-400 text-white font-bold px-4 py-2 md:px-6 md:py-3 text-base md:text-lg rounded-lg hover:bg-sky-600 flex items-center gap-2 justify-center w-full md:w-auto"
            >
              <FaPhone /> Appelez et Réservez !
            </a>
            <div className="text-gray-400 text-sm text-center mt-1 md:mt-1">{phoneNumber}</div>
            <p className="mt-3 md:mt-3 text-sm md:text-base text-gray-600 text-center">
              34 nettoyages réservés au cours des 7 derniers jours !
            </p>
          </div>
        </div>
        {/* Right Side Image */}
        <div className="w-64 md:w-80 lg:w-96 mt-6 md:mt-0">
          <img src={mainImage} alt="Maids" className="w-full rounded-lg" />
        </div>
      </main>
    </div>
  );
};

export default App;