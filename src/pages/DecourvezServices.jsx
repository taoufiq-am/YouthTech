import React from 'react';

export const   DecourvezServices = ()=>  {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600 rounded-full mb-6">
            <span className="text-white font-semibold text-sm">🎯 SERVICES PROFESSIONNELS</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Services adaptés à vos besoins</h2>
          <p className="text-gray-400 text-lg">Des solutions complètes pour votre transformation digitale</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Création de Site Vitrine */}
          <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-all border border-gray-700 hover:border-blue-600 group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Création de Site Vitrine</h3>
                <p className="text-gray-400 leading-relaxed">Sites web professionnels et élégants pour présenter votre entreprise, vos services et votre expertise avec un design moderne et impactant.</p>
              </div>
            </div>
          </div>
          
          {/* Application Web */}
          <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-all border border-gray-700 hover:border-blue-600 group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Application Web</h3>
                <p className="text-gray-400 leading-relaxed">Solutions web sur mesure adaptées aux besoins spécifiques de votre entreprise. Plateformes performantes et évolutives pour votre business.</p>
              </div>
            </div>
          </div>
          
          {/* Services de Design */}
          <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-all border border-gray-700 hover:border-blue-600 group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Services de Design</h3>
                <p className="text-gray-400 leading-relaxed">Création graphique et design UI/UX moderne qui reflète votre identité de marque et offre une expérience utilisateur exceptionnelle.</p>
              </div>
            </div>
          </div>
          
          {/* Consultation & Stratégie */}
          <div className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-all border border-gray-700 hover:border-blue-600 group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Consultation & Stratégie</h3>
                <p className="text-gray-400 leading-relaxed">Accompagnement stratégique personnalisé pour optimiser votre présence digitale et atteindre vos objectifs de croissance en ligne.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-3 transform hover:scale-105">
            Demander un devis gratuit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}