import React from 'react';

export const Hero= () => {
  return (
    <section className="bg-gradient-to-br mt-20  from-blue-50 via-white to-blue-100 pt-20 pb-32 relative overflow-hidden min-h-screen">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-orange-100 rounded-full">
              <span className="text-orange-600 font-semibold text-sm">✨ CREATION DE SITES WEB</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Création de sites<br />
              <span className="text-blue-600">web professionnelle</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Nous concevons des sites web modernes, rapides et optimisés pour convertir vos visiteurs en clients. Notre expertise technique et notre sens du design vous garantissent un résultat professionnel.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2">
                Commencer mon projet
                <span>→</span>
              </button>
              <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-lg border-2 border-gray-200 transition-all duration-300">
                Voir nos réalisations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}