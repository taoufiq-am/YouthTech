import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="../../public/Design sans titre.svg"
            alt="YouthTech Team"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Qui sommes-nous ?
          </h2>
          <p className="text-blue-600 font-semibold text-lg mt-1">
            YouthTech – L’innovation au service de votre croissance.
          </p>

          <p className="text-gray-600 mt-5 leading-relaxed">
            YouthTech est une entreprise spécialisée dans la création de solutions
            digitales modernes et intelligentes. Nous accompagnons les entreprises,
            startups et organisations dans la conception de sites web, le
            développement d'applications et la mise en place de systèmes IoT et
            embarqués adaptés à leurs besoins.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Notre mission est de transformer vos idées en projets concrets,
            performants et durables. Grâce à notre expertise technique et notre
            créativité, nous offrons des solutions sur mesure qui garantissent des
            résultats professionnels et efficaces.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/services">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                Nos Services
              </button>
            </Link>

            <Link to="/contact">
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
                Contactez-nous
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

