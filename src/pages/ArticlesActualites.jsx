import React from 'react';

export const ArticlesActualites = () => {
  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
      date: "21",
      month: "Nov",
      author: "Yasmine",
      comments: 0,
      category: "Développement",
      title: "Framework CSS : Tailwind vs Bootstrap, lequel choisir ?",
      excerpt: "Dans le monde du développement web, Bootstrap et Tailwind CSS représentent deux approches distinctes. Découvrez leurs forces respectives.",
      readTime: "5 min"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
      date: "21",
      month: "Nov",
      author: "Yasmine",
      comments: 0,
      category: "WordPress",
      title: "Plugins WordPress pour Sécurité, SEO et Vitesse",
      excerpt: "Dans le monde de la gestion de contenu, WordPress se distingue. Optimisez votre site avec les meilleurs plugins du marché.",
      readTime: "7 min"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      date: "04",
      month: "Nov",
      author: "Yasmine",
      comments: 0,
      category: "Technologies",
      title: "Intégration des Technologies Web Modernes",
      excerpt: "Dans un monde numérique en constante évolution, l'intégration des technologies web modernes devient essentielle pour rester compétitif.",
      readTime: "6 min"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full mb-8 border border-blue-200">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-blue-700 font-bold text-sm tracking-wide">NOS ARTICLES</span>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Articles et <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Actualités</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Restez informé des dernières tendances et meilleures pratiques du développement web
          </p>
        </div>
        
        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <div 
              key={article.id} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-3">
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-blue-600 text-xs font-bold rounded-full shadow-lg">
                      {article.category}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-5 right-5 bg-white rounded-2xl w-16 h-16 flex flex-col items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-black text-blue-600">{article.date}</span>
                    <span className="text-xs text-gray-600 font-bold uppercase tracking-wide">{article.month}</span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold">{article.readTime} de lecture</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Meta Info */}
                  <div className="flex items-center gap-5 mb-5 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-700">{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="font-medium">{article.comments}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all duration-300 relative"
                  >
                    <span>En Savoir Plus</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group"
          >
            <span>Voir tous les articles</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesActualites;