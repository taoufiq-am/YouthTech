import React from "react";
import { ServicesMenu } from "../../mocData/ServicesMenu.js";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  Zap,
  Award,
  Users,
} from "lucide-react";

const benefits = [
  "Expertise multidisciplinaire",
  "Solutions sur mesure",
  "Support continu",
  "Technologies modernes",
  "Délais respectés",
  "ROI garanti",
];

export const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              NOS SERVICES
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Des Solutions Digitales
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Complètes & Innovantes
            </span>
          </h1>

          <p className="text-gray-600 text-xl leading-relaxed mb-10">
            Transformez votre présence en ligne avec nos services experts. De la
            conception au déploiement, nous vous accompagnons à chaque étape.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
              Découvrir nos services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:border-blue-300">
              Demander un devis
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                6
              </div>
              <div className="text-gray-600">Services experts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Projets livrés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                98%
              </div>
              <div className="text-gray-600">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Découvrez Nos Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins digitaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ServicesMenu.map((service) => {
              const IconComponent = service.img;
              return (
                <div
                  key={service.id}
                  onClick={() => (window.location.href = service.link)}
                  className="group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    En savoir plus
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Pourquoi Nous Choisir ?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Notre expertise et notre engagement font la différence. Nous
                combinons créativité, technologie et stratégie pour vous offrir
                des solutions qui génèrent des résultats concrets.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="group mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                Commencer maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <Zap className="w-10 h-10 text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime garanti</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl mt-8">
                <Award className="w-10 h-10 text-indigo-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Awards remportés</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <Users className="w-10 h-10 text-purple-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  200+
                </div>
                <div className="text-gray-600">Clients actifs</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl mt-8">
                <Globe className="w-10 h-10 text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à Transformer Votre Vision en Réalité ?
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            Contactez-nous aujourd'hui pour discuter de votre projet et obtenir
            un devis personnalisé
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Voir nos réalisations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
