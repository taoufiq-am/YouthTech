import React from 'react';
import { Zap, Shield, Rocket, ArrowRight, Sparkles } from 'lucide-react';
import heroDashboard from '../assets/images/heroDashboard.jfif';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-32 pb-20 relative overflow-hidden min-h-screen">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm tracking-wide">CRÉATION DE SITES WEB</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Créez votre
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                présence
              </span>
            </h1>
            
            <p className="text-gray-600 text-xl leading-relaxed max-w-xl">
              Des sites web ultra-performants, au design moderne et optimisés pour transformer vos visiteurs en clients fidèles. Expertise technique et créativité au service de votre réussite.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Ultra Rapide</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">100% Sécurisé</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">SEO Optimisé</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                Commencer mon projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:border-blue-300">
                Voir nos réalisations
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Floating Card Effect */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl transform rotate-6 opacity-20"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                  <img 
  src={heroDashboard}
  alt="Web Development Dashboard"
  className="w-full h-auto object-cover"
/>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">98%</p>
                    <p className="text-sm text-gray-600">Performance</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-12 bg-white rounded-2xl shadow-xl p-4 border border-indigo-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">500+</p>
                    <p className="text-xs text-gray-600">Projets réalisés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}