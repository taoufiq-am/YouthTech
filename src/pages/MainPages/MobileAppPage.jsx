import React from 'react';
import { Link } from "react-router-dom";
import {
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Users,
  Code,
  RefreshCw,
  Bell,
  Cloud
} from 'lucide-react';

export const MobileAppPage = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Applications natives iOS et Android à partir d'une seule base de code avec React Native"
    },
    {
      icon: Zap,
      title: "Performance Native",
      description: "Performances optimales équivalentes aux applications natives avec une expérience fluide"
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Protection des données utilisateurs avec chiffrement et authentification sécurisée"
    },
    {
      icon: Cloud,
      title: "Backend & API",
      description: "Intégration backend robuste avec APIs RESTful et bases de données cloud"
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Système de notifications push pour engager et fidéliser vos utilisateurs"
    },
    {
      icon: RefreshCw,
      title: "Mises à Jour OTA",
      description: "Déploiement rapide de nouvelles fonctionnalités sans passage par les stores"
    }
  ];

  const technologies = [
    { name: "React Native", level: 96 },
    { name: "Flutter", level: 88 },
    { name: "Swift (iOS)", level: 85 },
    { name: "Kotlin (Android)", level: 82 },
    { name: "Firebase", level: 92 },
    { name: "API Development", level: 94 }
  ];

  const process = [
    {
      step: "01",
      title: "Découverte & Planification",
      description: "Analyse de vos besoins, définition des fonctionnalités, création des wireframes et spécifications techniques détaillées."
    },
    {
      step: "02",
      title: "Design UI/UX Mobile",
      description: "Création d'interfaces intuitives respectant les guidelines iOS et Android, avec prototypes interactifs."
    },
    {
      step: "03",
      title: "Développement",
      description: "Codage de l'application avec les meilleures pratiques, développement backend et intégrations API."
    },
    {
      step: "04",
      title: "Tests & QA",
      description: "Tests rigoureux sur différents appareils, résolutions et versions OS pour garantir la qualité."
    },
    {
      step: "05",
      title: "Déploiement & Support",
      description: "Publication sur App Store et Google Play, suivi des performances et support technique continu."
    }
  ];

  const packages = [
    {
      name: "MVP",
      price: "",
      features: [
        "Application cross-platform",
        "Design UI/UX basique",
        "5-7 écrans principaux",
        "Backend simple",
        "Authentification utilisateur",
        "1 intégration API",
        "Publication stores",
        "2 mois de support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "",
      features: [
        "Application complète",
        "Design UI/UX premium",
        "15-20 écrans",
        "Backend avancé",
        "Push notifications",
        "Paiements intégrés",
        "Analytics avancés",
        "5 intégrations API",
        "6 mois de support",
        "Formation incluse"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      features: [
        "Solution sur mesure",
        "Design d'exception",
        "Fonctionnalités illimitées",
        "Architecture complexe",
        "IA/ML intégration",
        "IoT connectivity",
        "Sécurité renforcée",
        "Équipe dédiée",
        "Support 24/7",
        "SLA garanti"
      ],
      popular: false
    }
  ];

  const stats = [
    {
      icon: Smartphone,
      value: "100+",
      label: "Apps développées",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      value: "2M+",
      label: "Utilisateurs actifs",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Sparkles,
      value: "4.8/5",
      label: "Note moyenne stores",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime garanti",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const appTypes = [
    {
      title: "Applications E-commerce",
      description: "Apps de vente en ligne avec panier, paiement et suivi de commandes",
      icon: ""
    },
    {
      title: "Applications Sociales",
      description: "Réseaux sociaux, messagerie instantanée et partage de contenu",
      icon: ""
    },
    {
      title: "Applications Santé",
      description: "Suivi fitness, nutrition, méditation et bien-être",
      icon: ""
    },
    {
      title: "Applications Finance",
      description: "Banque mobile, portefeuille crypto, gestion de budget",
      icon: ""
    },
    {
      title: "Applications Education",
      description: "E-learning, cours en ligne et plateformes éducatives",
      icon: ""
    },
    {
      title: "Applications IoT",
      description: "Contrôle d'objets connectés et domotique",
      icon: ""
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
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm tracking-wide">MOBILE APP DEVELOPMENT</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Applications Mobiles
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Performantes
              </span>
            </h1>

            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Créez des applications mobiles iOS et Android qui captivent vos utilisateurs.
              Performance native, design moderne et fonctionnalités avancées pour votre succès mobile.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" >
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                  Créer mon application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
                {/* <button className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:border-blue-300">
                  Voir nos apps
                </button> */}
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Fonctionnalités Avancées
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des applications mobiles riches en fonctionnalités pour une expérience exceptionnelle
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

      {/* App Types Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Types d'Applications
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nous développons tous types d'applications mobiles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technologies Utilisées
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Les meilleures technologies pour des apps performantes
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Processus de Développement
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une méthodologie agile pour livrer votre app rapidement
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
                <div className="flex-grow bg-white rounded-2xl p-8 border border-blue-100 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Packages de Développement
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des solutions adaptées à votre budget et vos ambitions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 ${
                  pkg.popular
                    ? 'border-2 border-blue-500 shadow-2xl scale-105'
                    : 'border border-blue-200 shadow-lg'
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
                <button 
                onClick={() => (window.location.href = "/contact")}

                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg'
                    : 'bg-white text-gray-900 hover:bg-gray-50 border border-blue-200'
                }`}>
                  Choisir ce package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Supported */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-12 border border-blue-100 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Plateformes Supportées
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl">
                
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">iOS</h3>
                <p className="text-gray-600">iPhone & iPad - App Store</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl">
                  
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Android</h3>
                <p className="text-gray-600">Smartphones & Tablets - Google Play</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl">
                  
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cross-Platform</h3>
                <p className="text-gray-600">Une seule codebase pour tous</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <Smartphone className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Lançons Votre Application Mobile
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            Transformez votre idée en une application mobile qui cartonne sur les stores
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" >
              <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105">
                Discuter de mon projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
              {/* <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                Télécharger nos apps
              </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};
