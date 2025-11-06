import React from 'react';
import { 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  BarChart3,
  Share2,
  Mail,
  MessageCircle,
  Users,
  Megaphone,
  LineChart
} from 'lucide-react';

export const DigitalMarketingPage = () => {
  const features = [
    {
      icon: Target,
      title: "Stratégie Ciblée",
      description: "Campagnes marketing personnalisées pour atteindre votre audience idéale au bon moment"
    },
    {
      icon: BarChart3,
      title: "Analytics Avancés",
      description: "Suivi et analyse en temps réel de vos performances pour optimiser votre ROI"
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Gestion complète de vos réseaux sociaux avec création de contenu engageant"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Campagnes d'emailing automatisées et personnalisées pour fidéliser vos clients"
    },
    {
      icon: MessageCircle,
      title: "Content Marketing",
      description: "Création de contenu de qualité qui attire, engage et convertit votre audience"
    },
    {
      icon: Megaphone,
      title: "Publicité Payante",
      description: "Gestion de campagnes Google Ads, Facebook Ads et autres plateformes publicitaires"
    }
  ];

  const platforms = [
    { name: "Google Ads", level: 95 },
    { name: "Facebook/Instagram Ads", level: 92 },
    { name: "LinkedIn Ads", level: 88 },
    { name: "TikTok Ads", level: 85 },
    { name: "Email Marketing", level: 93 },
    { name: "Analytics & SEO", level: 90 }
  ];

  const process = [
    {
      step: "01",
      title: "Audit & Analyse",
      description: "Analyse complète de votre présence digitale actuelle, de votre marché et de vos concurrents pour identifier les opportunités."
    },
    {
      step: "02",
      title: "Stratégie Marketing",
      description: "Élaboration d'une stratégie sur mesure avec objectifs clairs, personas cibles et plan d'action détaillé."
    },
    {
      step: "03",
      title: "Création de Contenu",
      description: "Production de contenu visuel et rédactionnel attractif adapté à chaque plateforme et à votre audience."
    },
    {
      step: "04",
      title: "Lancement Campagnes",
      description: "Mise en place et lancement de vos campagnes marketing sur les canaux sélectionnés avec un budget optimisé."
    },
    {
      step: "05",
      title: "Optimisation Continue",
      description: "Analyse des résultats, tests A/B et ajustements réguliers pour maximiser vos performances et votre ROI."
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "",
      features: [
        "2 réseaux sociaux",
        "12 posts par mois",
        "Community management basique",
        "Rapport mensuel",
        "Support par email",
        "Campagne publicitaire (budget externe)"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "",
      features: [
        "4 réseaux sociaux",
        "20 posts par mois",
        "Community management complet",
        "Email marketing (2 campagnes)",
        "Google Ads + Facebook Ads",
        "Rapports détaillés hebdomadaires",
        "Création contenu visuel",
        "Support prioritaire"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      features: [
        "Stratégie marketing complète",
        "Gestion multi-plateformes",
        "Production contenu premium",
        "Influencer marketing",
        "Marketing automation",
        "Analytics & BI avancés",
        "Équipe dédiée",
        "Support 24/7"
      ],
      popular: false
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "250K+",
      label: "Audience générée",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      value: "+320%",
      label: "ROI moyen",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: BarChart3,
      value: "98%",
      label: "Taux de satisfaction",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      value: "150+",
      label: "Campagnes réussies",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const services = [
    {
      title: "Social Media Marketing",
      description: "Développez votre présence sur les réseaux sociaux",
      items: ["Stratégie social media", "Création de contenu", "Community management", "Publicité sociale"]
    },
    {
      title: "Content Marketing",
      description: "Attirez et engagez votre audience avec du contenu de qualité",
      items: ["Rédaction d'articles", "Vidéos marketing", "Infographies", "Podcasts"]
    },
    {
      title: "Email Marketing",
      description: "Fidélisez vos clients avec des campagnes ciblées",
      items: ["Newsletter", "Automation", "Segmentation", "A/B Testing"]
    },
    {
      title: "Publicité en Ligne",
      description: "Générez des leads qualifiés rapidement",
      items: ["Google Ads", "Facebook/Instagram Ads", "LinkedIn Ads", "Retargeting"]
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
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm tracking-wide">DIGITAL MARKETING</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Boostez Votre
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">
                Croissance
              </span>
            </h1>
            
            <p className="text-gray-600 text-xl leading-relaxed mb-10">
              Stratégies marketing digitales sur mesure pour augmenter votre visibilité, 
              générer des leads qualifiés et maximiser votre retour sur investissement.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                Démarrer votre stratégie
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:border-blue-300">
                Audit gratuit
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
              Nos Services Marketing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une gamme complète de services pour dominer le digital
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
              Services Détaillés
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des solutions marketing complètes pour chaque besoin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
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

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Plateformes Maîtrisées
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expertise sur toutes les principales plateformes marketing
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-gray-900">{platform.name}</span>
                  <span className="text-blue-600 font-bold">{platform.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
                    style={{ width: `${platform.level}%` }}
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
              Notre Méthodologie
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un processus structuré pour des résultats garantis
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
              Nos Formules Marketing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des packages adaptés à votre niveau de croissance
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

                <button onClick={() => (window.location.href = "/contact")}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <Megaphone className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à Dominer le Digital ?
          </h2>
          <p className="text-blue-100 text-xl mb-10">
            Obtenez un audit gratuit et découvrez comment booster votre présence en ligne
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105">
              Audit gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Voir nos cas clients
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;