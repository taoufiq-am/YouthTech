import React from 'react';
import { Link } from "react-router-dom";
import { 
  Code, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Package,
  Clock,
  Award,
  Rocket,
  Shield,
  Layers,
  Globe,
  Smartphone,
  Server
} from 'lucide-react';

export const WebDevelopmentPage = () => {
  const features = [
    {
      icon: Zap,
      title: "Performance Ultra-Rapide",
      description: "Sites optimisés pour des temps de chargement inférieurs à 2 secondes"
    },
    {
      icon: Smartphone,
      title: "Design Responsive",
      description: "Parfaitement adapté à tous les appareils et toutes les tailles d'écran"
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Protection avancée contre les menaces et vulnérabilités web"
    },
    {
      icon: Globe,
      title: "SEO Optimisé",
      description: "Structure et code optimisés pour un meilleur référencement naturel"
    },
    {
      icon: Layers,
      title: "Architecture Scalable",
      description: "Solutions évolutives qui grandissent avec votre entreprise"
    },
    {
      icon: Server,
      title: "Intégrations API",
      description: "Connexion fluide avec vos outils et services existants"
    }
  ];

  const technologies = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "TailwindCSS", level: 92 },
    { name: "MongoDB", level: 80 }
  ];

  const process = [
    {
      step: "01",
      title: "Découverte & Analyse",
      description: "Nous analysons vos besoins, objectifs et votre audience cible pour définir la meilleure stratégie."
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Création de maquettes interactives et validation du design avant le développement."
    },
    {
      step: "03",
      title: "Développement",
      description: "Codage de votre site avec les meilleures pratiques et technologies modernes."
    },
    {
      step: "04",
      title: "Tests & Optimisation",
      description: "Tests rigoureux de performance, sécurité et compatibilité sur tous les appareils."
    },
    {
      step: "05",
      title: "Lancement & Support",
      description: "Mise en ligne de votre site et accompagnement continu pour votre succès."
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "",
      features: [
        "Site vitrine (5 pages)",
        "Design responsive",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "1 mois de support",
        "Hébergement inclus (1 an)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "",
      features: [
        "Site sur mesure (jusqu'à 15 pages)",
        "Design UI/UX avancé",
        "CMS personnalisé",
        "Intégrations API",
        "Optimisation SEO avancée",
        "3 mois de support",
        "Hébergement premium (1 an)",
        "Formation incluse"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      features: [
        "Application web complexe",
        "Architecture sur mesure",
        "Intégrations multiples",
        "Dashboard admin avancé",
        "SEO & Performance maximale",
        "Support prioritaire 24/7",
        "Infrastructure scalable",
        "Maintenance continue"
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-8">
              <Code className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm tracking-wide">WEB DEVELOPMENT</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Développement Web
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Sur Mesure
              </span>
            </h1>
            
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Créez des sites web performants qui transforment vos visiteurs en clients. 
              Technologies modernes, design élégant et optimisation maximale pour votre succès en ligne.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" >
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                  Démarrer votre projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              {/* <button className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:border-blue-300">
                Voir nos réalisations
              </button> */}
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">500+</div>
                <div className="text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">98%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">5+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Nos Services ?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des solutions web complètes qui allient performance, design et innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technologies Maîtrisées
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nous utilisons les technologies les plus modernes et performantes
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-gray-900">{tech.name}</span>
                  <span className="text-blue-600 font-bold">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Notre Processus de Travail
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre projet
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div 
                key={index}
                className="flex gap-8 items-start group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-100 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nos Formules
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choisissez la solution qui correspond à vos besoins et votre budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl p-8 ${
                  pkg.popular 
                    ? 'border-2 border-blue-500 shadow-2xl scale-105' 
                    : 'border border-gray-200 shadow-lg'
                } transition-all duration-300 hover:-translate-y-2`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Plus populaire
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button  onClick={() => (window.location.href = "/contact")}
 className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Commencer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à Lancer Votre Projet ?
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            Discutons de vos besoins et créons ensemble le site web de vos rêves
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/contact"></Link>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                Planifier un appel
              </button>
            <Link/>
          </div>
        </div>
      </section>
    </div>
  );
};