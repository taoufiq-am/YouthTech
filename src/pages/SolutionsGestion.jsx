import React from 'react';

export const SolutionsGestion = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simplicité et Performance</h2>
          <p className="text-gray-600 text-lg">Des solutions adaptées à vos besoins</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Gestion Hébergement */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Gestion Hébergement</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hébergement sécurisé et performant pour garantir la disponibilité de votre site 24/7
            </p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              En savoir + <span>→</span>
            </a>
          </div>

          {/* Gestion du Support */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Gestion du Support</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Support technique disponible 7j/7 pour répondre à toutes vos questions rapidement
            </p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              En savoir + <span>→</span>
            </a>
          </div>

          {/* Gestion Création */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Gestion Création</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Design moderne et responsive adapté à tous les appareils et navigateurs
            </p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              En savoir + <span>→</span>
            </a>
          </div>

          {/* Gestion Communication */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Gestion Communication</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Stratégie digitale complète pour développer votre présence en ligne
            </p>
            <a href="#" className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              En savoir + <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}