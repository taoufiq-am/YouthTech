import React from 'react';

export const CeQueNousOffrons = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 font-semibold text-sm">💼 NOS SERVICES</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Ce que nous offrons</h2>
          <p className="text-gray-300 text-lg mt-4">Des solutions complètes pour votre présence digitale</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1 - Sites Vitrine */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Méthodes SEO</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Optimisation pour les moteurs de recherche afin d'améliorer votre visibilité en ligne
            </p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center hover:gap-2 transition-all group-hover:text-blue-700">
              Lire la suite
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Service 2 - E-commerce */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Gestion de boutique</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Solutions complètes pour gérer efficacement votre boutique en ligne
            </p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center hover:gap-2 transition-all group-hover:text-blue-700">
              Lire la suite
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Service 3 - Applications Web */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Optimisation mobile</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sites parfaitement adaptés à tous les appareils mobiles et tablettes
            </p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center hover:gap-2 transition-all group-hover:text-blue-700">
              Lire la suite
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Service 4 - Support */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Assistance 24h/24</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Support technique disponible à tout moment pour résoudre vos problèmes
            </p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center hover:gap-2 transition-all group-hover:text-blue-700">
              Lire la suite
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeQueNousOffrons;