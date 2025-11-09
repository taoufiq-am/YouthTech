import React from 'react';
import { useNavigate } from "react-router-dom";

import { 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  Palette,
  TrendingUp,
  Search,
  Smartphone,
  ShoppingCart,
  Zap,
  Award,
  Users
} from 'lucide-react';

// Service Menu Data
const ServicesMenu = [
  {
    id: 1,
    img: Globe,
    title: "Web Development",
    description: "Build responsive and dynamic websites tailored to your needs.",
    link: "/web-developpement",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    img: Palette,
    title: "UI/UX Design",
    description: "Design intuitive interfaces that enhance user experience.",
    link: "/ui-ux",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    img: TrendingUp,
    title: "Digital Marketing",
    description: "Boost your online presence through social media and campaigns.",
    link: "/digitale-marketing",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 4,
    img: Search,
    title: "SEO Optimization",
    description: "Improve your website's ranking on search engines effectively.",
    link: "/seo-optimization",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 5,
    img: Smartphone,
    title: "Mobile App Development",
    description: "Develop feature-rich mobile applications for iOS and Android.",
    link: "/mobile-app-development",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 6,
    img: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Build online stores that convert visitors into customers.",
    link: "/ecommerce-solutions",
    color: "from-indigo-500 to-purple-600"
  },
];

const benefits = [
  "Expertise multidisciplinaire",
  "Solutions sur mesure",
  "Support continu",
  "Technologies modernes",
  "Délais respectés",
  "ROI garanti"
];

export  const  ServicesPage= ()=> {
    const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm tracking-wide">NOS SERVICES</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Des Solutions Digitales
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Complètes & Innovantes
              </span>
            </h1>
            
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Transformez votre présence en ligne avec nos services experts. 
              De la conception au déploiement, nous vous accompagnons à chaque étape.
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
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">6</div>
                <div className="text-gray-600">Services experts</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">500+</div>
                <div className="text-gray-600">Projets livrés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explorez Nos Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins digitaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ServicesMenu.map((service) => {
              const IconComponent = service.img;
              return (
                <div 
                                    onClick={() => window.location.href = service.link}

                  key={service.id}
                  className="group relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl" 
                       style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <button 
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
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
                Notre expertise et notre engagement font la différence. Nous combinons créativité, 
                technologie et stratégie pour vous offrir des solutions qui génèrent des résultats concrets.
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

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <Zap className="w-10 h-10 text-blue-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime garanti</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-xl mt-8">
                  <Award className="w-10 h-10 text-indigo-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-gray-600">Awards remportés</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <Users className="w-10 h-10 text-purple-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600">Clients actifs</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-xl mt-8">
                  <Globe className="w-10 h-10 text-blue-600 mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600">Support client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à Transformer Votre Vision en Réalité ?
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            Contactez-nous aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "/contact"}
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
}