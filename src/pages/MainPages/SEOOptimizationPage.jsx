import React from 'react';
import { 
  Search, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Globe,
  FileText,
  Link,
  Zap,
  Target,
  BarChart3,
  Award
} from 'lucide-react';

export const SEOOptimizationPage = () => {
  const features = [
    {
      icon: Search,
      title: "Recherche de Mots-Clés",
      description: "Identification des mots-clés stratégiques pour votre secteur et votre audience"
    },
    {
      icon: FileText,
      title: "SEO On-Page",
      description: "Optimisation complète de votre contenu, balises meta, et structure de site"
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Construction d'un profil de backlinks de qualité pour augmenter votre autorité"
    },
    {
      icon: Zap,
      title: "SEO Technique",
      description: "Optimisation de la vitesse, mobile-friendliness, et architecture du site"
    },
    {
      icon: Globe,
      title: "SEO Local",
      description: "Dominez les recherches locales et attirez plus de clients dans votre région"
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Suivi détaillé de vos positions, trafic et conversions organiques"
    }
  ];

  const seoMetrics = [
    { name: "Recherche de Mots-Clés", level: 98 },
    { name: "SEO On-Page", level: 95 },
    { name: "SEO Technique", level: 92 },
    { name: "Link Building", level: 88 },
    { name: "Content Strategy", level: 94 },
    { name: "Analytics & Reporting", level: 96 }
  ];

  const process = [
    {
      step: "01",
      title: "Audit SEO Complet",
      description: "Analyse approfondie de votre site web actuel : performance technique, contenu, backlinks, et positionnement sur les mots-clés stratégiques."
    },
    {
      step: "02",
      title: "Stratégie SEO",
      description: "Élaboration d'une stratégie SEO sur mesure avec objectifs SMART, sélection de mots-clés prioritaires et plan d'action détaillé."
    },
    {
      step: "03",
      title: "Optimisation Technique",
      description: "Correction des problèmes techniques : vitesse de chargement, mobile-responsiveness, structure URL, sitemap, robots.txt."
    },
    {
      step: "04",
      title: "Optimisation du Contenu",
      description: "Optimisation ou création de contenu de qualité, enrichi en mots-clés stratégiques, avec balises meta optimisées."
    },
    {
      step: "05",
      title: "Link Building & Suivi",
      description: "Acquisition de backlinks de qualité et suivi mensuel des positions, du trafic organique et des conversions."
    }
  ];

  const packages = [
    {
      name: "SEO Starter",
      price: "",
      features: [
        "Audit SEO initial",
        "Optimisation on-page (10 pages)",
        "Recherche de mots-clés",
        "Optimisation technique de base",
        "Rapport mensuel",
        "Support par email",
        "2 backlinks par mois"
      ],
      popular: false
    },
    {
      name: "SEO Pro",
      price: "",
      features: [
        "Tout du plan Starter",
        "Optimisation on-page (25 pages)",
        "SEO technique avancé",
        "Création de contenu (4 articles)",
        "Link building actif (8 backlinks)",
        "SEO local",
        "Rapports hebdomadaires",
        "Support prioritaire"
      ],
      popular: true
    },
    {
      name: "SEO Enterprise",
      price: "Sur devis",
      features: [
        "Stratégie SEO complète",
        "Optimisation illimitée",
        "SEO international",
        "Content marketing avancé",
        "Link building premium",
        "Technical SEO expert",
        "Équipe dédiée",
        "Support 24/7"
      ],
      popular: false
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "+450%",
      label: "Augmentation trafic moyen",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      value: "Top 3",
      label: "Position moyenne",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Globe,
      value: "200+",
      label: "Sites optimisés",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Award,
      value: "95%",
      label: "Taux de réussite",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const seoServices = [
    {
      title: "SEO Technique",
      items: [
        "Optimisation de la vitesse",
        "Mobile-friendliness",
        "Structure du site",
        "Schema markup",
        "Indexation optimale",
        "Core Web Vitals"
      ]
    },
    {
      title: "SEO On-Page",
      items: [
        "Optimisation des titres",
        "Meta descriptions",
        "Balises H1-H6",
        "Optimisation images",
        "Maillage interne",
        "URL optimisées"
      ]
    },
    {
      title: "SEO Off-Page",
      items: [
        "Link building",
        "Guest posting",
        "Relations presse",
        "Réseaux sociaux",
        "Citations locales",
        "Partenariats"
      ]
    },
    {
      title: "Content SEO",
      items: [
        "Stratégie de contenu",
        "Recherche de mots-clés",
        "Rédaction optimisée",
        "Optimisation existante",
        "Content refresh",
        "Blogging SEO"
      ]
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
              <Search className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm tracking-wide">SEO OPTIMIZATION</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Dominez les
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">
                Résultats Google
              </span>
            </h1>
            
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Augmentez votre visibilité organique et attirez un trafic qualifié avec nos 
              stratégies SEO éprouvées. Positionnement durable et résultats mesurables garantis.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                Audit SEO gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:border-blue-300">
                Voir nos résultats
              </button>
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
              Notre Expertise SEO
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des services SEO complets pour maximiser votre visibilité organique
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

      {/* Services Détaillés */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Services SEO Complets
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tous les aspects du SEO couverts pour votre succès
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nos Compétences SEO
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une maîtrise complète de tous les aspects du référencement naturel
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {seoMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-gray-900">{metric.name}</span>
                  <span className="text-blue-600 font-bold">{metric.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
                    style={{ width: `${metric.level}%` }}
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
              Notre Processus SEO
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une approche méthodique pour des résultats durables
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
              Forfaits SEO
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choisissez le plan qui correspond à vos objectifs
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
                  Commencer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-12 border border-blue-100 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Pourquoi Investir dans le SEO ?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ROI Élevé</h3>
                <p className="text-gray-600">Le SEO offre le meilleur retour sur investissement à long terme</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trafic Qualifié</h3>
                <p className="text-gray-600">Attirez des visiteurs qui recherchent activement vos services</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Crédibilité</h3>
                <p className="text-gray-600">Un bon positionnement renforce la confiance et l'autorité de votre marque</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <Search className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à Booster Votre SEO ?
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            Obtenez un audit SEO gratuit et découvrez comment améliorer votre positionnement
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105">
              Audit SEO gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Parlons de votre projet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOOptimizationPage;