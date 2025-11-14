import React from 'react';
import { Link } from "react-router-dom";
import {
  Palette,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Eye,
  Users,
  Layers,
  Smartphone,
  Pencil,
  Target,
  TrendingUp
} from 'lucide-react';

export const UIUXDesignPage = () => {
  const features = [
    {
      icon: Eye,
      title: "Design Centré Utilisateur",
      description: "Interfaces intuitives pensées pour offrir la meilleure expérience à vos utilisateurs"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Designs optimisés d'abord pour mobile, garantissant une expérience fluide sur tous les écrans"
    },
    {
      icon: Layers,
      title: "Systèmes de Design",
      description: "Création de bibliothèques de composants cohérents et réutilisables"
    },
    {
      icon: Users,
      title: "Tests Utilisateurs",
      description: "Validation continue avec de vrais utilisateurs pour perfectionner l'expérience"
    },
    {
      icon: Pencil,
      title: "Prototypage Interactif",
      description: "Maquettes cliquables et animées pour visualiser le produit final"
    },
    {
      icon: Target,
      title: "Recherche UX",
      description: "Analyse approfondie des besoins et comportements de votre audience cible"
    }
  ];

  const tools = [
    { name: "Figma", level: 98 },
    { name: "Adobe XD", level: 92 },
    { name: "Sketch", level: 88 },
    { name: "InVision", level: 85 },
    { name: "Adobe Illustrator", level: 90 },
    { name: "Principle", level: 82 }
  ];

  const process = [
    {
      step: "01",
      title: "Recherche & Découverte",
      description: "Analyse de votre marché, vos concurrents et vos utilisateurs cibles. Interviews et questionnaires pour comprendre les besoins réels."
    },
    {
      step: "02",
      title: "Architecture & Wireframes",
      description: "Structuration de l'information et création de wireframes pour définir la navigation et la hiérarchie du contenu."
    },
    {
      step: "03",
      title: "Design Visuel",
      description: "Création de l'identité visuelle, choix des couleurs, typographies et création de maquettes haute-fidélité."
    },
    {
      step: "04",
      title: "Prototypage",
      description: "Transformation des maquettes en prototypes interactifs pour tester les interactions et l'expérience utilisateur."
    },
    {
      step: "05",
      title: "Tests & Itérations",
      description: "Tests utilisateurs, collecte de feedback et amélioration continue du design jusqu'à la perfection."
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "",
      features: [
        "Design UI/UX (5 écrans)",
        "Recherche utilisateur basique",
        "Wireframes & maquettes",
        "Design responsive",
        "Guide de style",
        "2 révisions incluses",
        "Livraison Figma/XD"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "",
      features: [
        "Design UI/UX complet (15 écrans)",
        "Recherche UX approfondie",
        "Architecture d'information",
        "Prototypes interactifs",
        "Système de design complet",
        "Tests utilisateurs",
        "5 révisions incluses",
        "Support 2 mois"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      features: [
        "Design UI/UX sur mesure",
        "Recherche ethnographique",
        "Design thinking workshops",
        "Design system évolutif",
        "Prototypes avancés",
        "Tests A/B et analytics",
        "Révisions illimitées",
        "Support continu"
      ],
      popular: false
    }
  ];

  const designPrinciples = [
    {
      icon: Eye,
      title: "Clarté Visuelle",
      description: "Design épuré qui met en avant l'essentiel"
    },
    {
      icon: Users,
      title: "Empathie",
      description: "Comprendre et anticiper les besoins des utilisateurs"
    },
    {
      icon: TrendingUp,
      title: "Efficacité",
      description: "Optimiser chaque interaction pour atteindre les objectifs"
    },
    {
      icon: Sparkles,
      title: "Émotion",
      description: "Créer des moments mémorables et engageants"
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
              <Palette className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm tracking-wide">UI/UX DESIGN</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Design d'Expérience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Exceptionnelle
              </span>
            </h1>

            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Transformez vos idées en interfaces élégantes et intuitives qui captivent vos utilisateurs
              et génèrent des résultats mesurables pour votre entreprise.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" >
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                  Démarrer votre design
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:border-blue-300">
                  Voir notre portfolio
                </button>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">300+</div>
                <div className="text-gray-600">Designs créés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Notre Expertise Design
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des compétences complètes pour créer des expériences utilisateur inoubliables
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

      {/* Design Principles */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nos Principes de Design
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Les valeurs qui guident chacune de nos créations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Outils de Design
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nous maîtrisons les meilleurs outils de l'industrie
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-gray-900">{tool.name}</span>
                  <span className="text-blue-600 font-bold">{tool.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
                    style={{ width: `${tool.level}%` }}
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
              Notre Processus Créatif
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une méthodologie éprouvée pour créer des designs qui fonctionnent
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
              Nos Formules Design
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des solutions adaptées à tous les projets et budgets
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
                <button  onClick={() => (window.location.href = "/contact")}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg'
                      : 'bg-white text-gray-900 hover:bg-gray-50 border border-blue-200'
                }`}>
                  Choisir cette formule
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
          <Palette className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Créons Ensemble Votre Design
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            Discutons de votre vision et transformons-la en une expérience utilisateur exceptionnelle
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" >
              <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105">
                Demander un devis design
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                Voir nos cas d'études
              </button>
          </div>
        </div>
      </section>
    </div>
  );
};
