import React from 'react';
import { ArrowRight, ExternalLink, Zap, Palette, Code, Building2 } from 'lucide-react';
import plateformeEnLigne from '../assets/images/heroDashboard.jfif';
import portfolioCreatif from '../assets/images/portfolioCreatif.jfif';
import applicationWeb from '../assets/images/applicationWeb.jfif';
import siteEntreprise from '../assets/images/siteEntreprise.jfif';

export const NotrePortfolio = () => {
  const projects = [
    {
      id: 1,
      category: 'E-COMMERCE',
      title: 'Plateforme de vente en ligne',
      description: 'Site e-commerce moderne avec système de paiement intégré et gestion de stock',
      image: plateformeEnLigne,
      icon: Zap,
      color: 'blue'
    },
    {
      id: 2,
      category: 'PORTFOLIO',
      title: 'Portfolio créatif premium',
      description: 'Site vitrine pour artiste avec galerie interactive et animations fluides',
      image: portfolioCreatif,
      icon: Palette,
      color: 'purple'
    },
    {
      id: 3,
      category: 'WEB APP',
      title: 'Application web sur mesure',
      description: 'Plateforme de gestion complète avec dashboard analytique et reporting',
      image: applicationWeb,
      icon: Code,
      color: 'indigo'
    },
    {
      id: 4,
      category: 'CORPORATE',
      title: 'Site d\'entreprise moderne',
      description: 'Site vitrine professionnel multi-pages avec CMS et formulaires avancés',
      image: siteEntreprise,
      icon: Building2,
      color: 'cyan'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    indigo: 'from-indigo-500 to-indigo-600',
    cyan: 'from-cyan-500 to-cyan-600'
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-100 rounded-full mb-6 border border-blue-200">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">NOS RÉALISATIONS</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Concevoir. Développer. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Livrer.</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Découvrez nos projets qui allient créativité, performance et innovation technologique</p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="group relative">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses[project.color]} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <button className="flex items-center gap-2 text-white font-semibold bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150">
                        Voir le projet
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${colorClasses[project.color]} text-white text-xs font-bold rounded-full mb-3`}>
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 inline-flex items-center gap-3 transform hover:scale-105">
            Voir tous nos projets
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}