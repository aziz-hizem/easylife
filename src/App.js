import React, { useState } from "react";
import { FaCheck, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./index.css";
import "./fonts.css";

// Images
import maidImage from "./assets/maid.png";
import mainImage from "./assets/main.png";
import numberOneImage from "./assets/one.png";
import todayIcon from "./assets/today.png";

const App = () => {
  const phoneNumber = "+216 52 631 119";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const maids = [
    { name: "Sonia", image: maidImage, rating: 4.8 },
    { name: "Feiza", image: maidImage, rating: 4.6 },
    { name: "Fatima", image: maidImage, rating: 4.9 },
    { name: "Layla", image: maidImage, rating: 4.7 },
    { name: "Yasmine", image: maidImage, rating: 4.5 },
    { name: "Nour", image: maidImage, rating: 4.9 }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-4 py-3 md:px-6 md:py-4 z-50">
        <button className="md:hidden text-gray-700 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <img src={maidImage} alt="EasyLife Logo" className="h-6 md:h-10" />
          <h1 className="text-xl md:text-2xl font-bold text-sky-900">Easy<span className="text-sky-400">Life</span></h1>
        </div>
        <nav className="hidden md:flex gap-4 lg:gap-6 text-gray-700 font-medium mx-auto">
          <button className="hover:text-sky-400">Nettoyage de Maison</button>
          <button className="hover:text-sky-400">Prix et Services</button>
          <button className="hover:text-sky-400">FAQ</button>
        </nav>
        <a href={`tel:${phoneNumber}`} className="bg-sky-400 text-white text-sm px-1 py-2 rounded-lg hover:bg-sky-600 flex items-center gap-2">
          <img src={todayIcon} alt="Checklist Icon" className="h-5" />Réservez un nettoyage !
        </a>
      </header>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md flex flex-col py-4 z-40">
          <button className="py-2 px-4 hover:bg-gray-100">Nettoyage de Maison</button>
          <button className="py-2 px-4 hover:bg-gray-100">Prix et Services</button>
          <button className="py-2 px-4 hover:bg-gray-100">FAQ</button>
        </div>
      )}
      {/* Hero Section */}
      <main className="pt-20 md:pt-24 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-12 max-w-screen-lg mx-auto">
        <div className="max-w-md md:max-w-lg">
          <h2 className="text-2xl md:text-4xl font-bold text-sky-900">
            <div className="flex items-center">Votre Service De Ménage n°<img src={numberOneImage} alt="Number One" className="h-8 md:h-10 ml-1" /></div>
            <div className="flex items-center">à <span className="text-red-600 ml-2">Tunis</span></div>
          </h2>
          <ul className="mt-4 space-y-2 text-base text-gray-800">
            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> Employés à temps plein hautement qualifiés</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> Timing flexible</li>
            <li className="flex items-center gap-2"><FaCheck className="text-green-500" /> Tarification transparente</li>
          </ul>
          <div className="mt-6">
            <a href={`tel:${phoneNumber}`} className="bg-sky-400 text-white font-bold px-6 py-3 text-lg rounded-lg hover:bg-sky-600 flex items-center gap-2 justify-center">
              <FaPhone /> Appelez et Réservez !
            </a>
            <div className="text-gray-400 text-sm text-center mt-1">{phoneNumber}</div>
            <p className="mt-3 text-gray-600 text-center">34 nettoyages réservés cette semaine !</p>
          </div>
        </div>
        <div className="w-64 md:w-80 lg:w-96">
          <img src={mainImage} alt="Maids" className="w-full rounded-lg" />
        </div>
      </main>
      {/* Maid Section */}
      <section className="py-12 px-4 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-sky-900 mb-6">Rencontrez Nos Employées</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {maids.map((maid, index) => (
            <motion.div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }}>
              <img src={maid.image} alt={maid.name} className="h-20 w-20 rounded-full mb-2" />
              <h3 className="text-lg font-bold">{maid.name}</h3>
              <p className="text-yellow-500">⭐ {maid.rating}</p>
              <button className="mt-2 text-sky-500 font-semibold hover:underline">Voir les Commentaires</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
