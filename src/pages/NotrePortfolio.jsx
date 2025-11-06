import React from 'react';

export const NotrePortfolio = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 font-semibold text-sm">💼 NOS RÉALISATIONS</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Concevoir. Développer. <span className="text-blue-600">Livrer.</span>
          </h2>
          <p className="text-gray-600 text-lg">Découvrez quelques-uns de nos projets récents</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
            <div className="relative overflow-hidden h-56">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80"
                alt="Site E-commerce"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">Voir le projet →</p>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                E-COMMERCE
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Plateforme de vente en ligne</h3>
              <p className="text-gray-600 text-sm">Site e-commerce moderne avec système de paiement intégré</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
            <div className="relative overflow-hidden h-56">
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&auto=format&fit=crop&q=80"
                alt="Portfolio Créatif"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">Voir le projet →</p>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                PORTFOLIO
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Portfolio créatif</h3>
              <p className="text-gray-600 text-sm">Site vitrine pour artiste avec galerie interactive</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
            <div className="relative overflow-hidden h-56">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80"
                alt="Application Web"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">Voir le projet →</p>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                WEB APP
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Application web sur mesure</h3>
              <p className="text-gray-600 text-sm">Plateforme de gestion pour entreprise</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
            <div className="relative overflow-hidden h-56">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop&q=80"
                alt="Site Corporate"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">Voir le projet →</p>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                CORPORATE
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Site d'entreprise</h3>
              <p className="text-gray-600 text-sm">Site vitrine professionnel multi-pages</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-3 transform hover:scale-105">
            Voir tous nos projets
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}