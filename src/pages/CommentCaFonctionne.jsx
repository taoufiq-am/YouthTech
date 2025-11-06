import React from 'react';

export const CommentCaFonctionne = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 font-semibold text-sm">📋 COMMENT ÇA MARCHE</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Processus en étapes simples</h2>
          <p className="text-gray-600 text-lg mt-4">Un parcours structuré pour garantir votre succès</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Étape 1 - Consultation */}
          <div className="text-center group">
            <div className="relative mb-6 inline-block">
              <div className="w-24 h-24 bg-blue-50 group-hover:bg-blue-100 rounded-full mx-auto flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                01
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
            <p className="text-gray-600 leading-relaxed">
              Échange approfondi pour comprendre vos besoins et vos objectifs
            </p>
          </div>

          {/* Étape 2 - Conception */}
          <div className="text-center group">
            <div className="relative mb-6 inline-block">
              <div className="w-24 h-24 bg-blue-50 group-hover:bg-blue-100 rounded-full mx-auto flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                02
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Conception</h3>
            <p className="text-gray-600 leading-relaxed">
              Création de maquettes et validation du design avec vous
            </p>
          </div>

          {/* Étape 3 - Développement */}
          <div className="text-center group">
            <div className="relative mb-6 inline-block">
              <div className="w-24 h-24 bg-blue-50 group-hover:bg-blue-100 rounded-full mx-auto flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                03
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Développement</h3>
            <p className="text-gray-600 leading-relaxed">
              Codage et intégration de toutes les fonctionnalités
            </p>
          </div>

          {/* Étape 4 - Livraison */}
          <div className="text-center group">
            <div className="relative mb-6 inline-block">
              <div className="w-24 h-24 bg-blue-50 group-hover:bg-blue-100 rounded-full mx-auto flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                04
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Livraison</h3>
            <p className="text-gray-600 leading-relaxed">
              Mise en ligne et formation pour utiliser votre site
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}