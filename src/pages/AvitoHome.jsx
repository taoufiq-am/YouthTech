import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { 
  MdDirectionsCar, 
  MdHome, 
  MdPhoneAndroid, 
  MdLaptop,
  MdCheckroom,
  MdSportsSoccer,
  MdConstruction,
  MdPets
} from "react-icons/md";

export const AvitoHome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "vehicles", name: "Véhicules", icon: <MdDirectionsCar />, color: "bg-blue-100 text-blue-600" },
    { id: "realestate", name: "Immobilier", icon: <MdHome />, color: "bg-green-100 text-green-600" },
    { id: "phones", name: "Téléphones", icon: <MdPhoneAndroid />, color: "bg-purple-100 text-purple-600" },
    { id: "electronics", name: "Électronique", icon: <MdLaptop />, color: "bg-red-100 text-red-600" },
    { id: "fashion", name: "Mode", icon: <MdCheckroom />, color: "bg-pink-100 text-pink-600" },
    { id: "sports", name: "Sports", icon: <MdSportsSoccer />, color: "bg-orange-100 text-orange-600" },
    { id: "equipment", name: "Équipement", icon: <MdConstruction />, color: "bg-yellow-100 text-yellow-600" },
    { id: "animals", name: "Animaux", icon: <MdPets />, color: "bg-teal-100 text-teal-600" },
  ];

  const featuredAds = [
    {
      id: 1,
      title: "Toyota Corolla 2020",
      price: "180 000 DH",
      location: "Casablanca",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%234299e1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EToyota Corolla%3C/text%3E%3C/svg%3E",
      category: "vehicles",
      featured: true
    },
    {
      id: 2,
      title: "Appartement 3 chambres",
      price: "1 200 000 DH",
      location: "Rabat",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2348bb78'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EAppartement%3C/text%3E%3C/svg%3E",
      category: "realestate",
      featured: true
    },
    {
      id: 3,
      title: "iPhone 14 Pro Max",
      price: "12 000 DH",
      location: "Marrakech",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%239f7aea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EiPhone 14%3C/text%3E%3C/svg%3E",
      category: "phones",
      featured: false
    },
    {
      id: 4,
      title: "MacBook Pro M2",
      price: "15 000 DH",
      location: "Tanger",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23ed8936'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EMacBook Pro%3C/text%3E%3C/svg%3E",
      category: "electronics",
      featured: false
    },
    {
      id: 5,
      title: "Vélo de montagne",
      price: "3 500 DH",
      location: "Agadir",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f56565'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EVélo%3C/text%3E%3C/svg%3E",
      category: "sports",
      featured: false
    },
    {
      id: 6,
      title: "Canapé moderne",
      price: "5 000 DH",
      location: "Fès",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23ecc94b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3ECanapé%3C/text%3E%3C/svg%3E",
      category: "equipment",
      featured: false
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-8">
            Trouvez ce que vous cherchez
          </h1>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-xl p-2 flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="Que recherchez-vous ?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 text-lg outline-none rounded-md"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 text-lg outline-none border-l-2 rounded-md bg-white"
            >
              <option value="all">Toutes catégories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors">
              <FiSearch className="text-xl" />
              Rechercher
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Explorer par catégorie
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.color} rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Ads Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Annonces à la une
          </h2>
          <button className="text-orange-500 font-semibold hover:text-orange-600">
            Voir tout →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAds.map((ad) => (
            <div
              key={ad.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-48 object-cover"
                />
                {ad.featured && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                    À la une
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2 truncate">
                  {ad.title}
                </h3>
                <p className="text-2xl font-bold text-orange-500 mb-2">
                  {ad.price}
                </p>
                <p className="text-gray-500 text-sm">{ad.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Vous avez quelque chose à vendre ?
          </h2>
          <p className="text-white text-lg mb-8">
            Publiez votre annonce gratuitement en quelques clics
          </p>
          <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors">
            Déposer une annonce
          </button>
        </div>
      </div>
    </div>
  );
};
