import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Mail, Phone, MessageSquare, User, Send, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim() ||
      !form.phone.trim()
    ) {
      setError("Tous les champs sont requis");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Format d'email invalide");
      return false;
    }

    if (form.phone.length < 8) {
      setError("Veuillez entrer un numéro de téléphone valide");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          setSuccess("Message envoyé avec succès!");
          setForm({ name: "", email: "", phone: "", message: "" });
          setLoading(false);
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          setError("Une erreur s'est produite. Veuillez réessayer.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-100 rounded-full mb-6 border border-blue-200">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm tracking-wide">CONTACTEZ-NOUS</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Prêt à démarrer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">votre projet?</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Discutons de votre vision et transformons-la en réalité digitale
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-3">Envoyez-nous un message</p>
              <a href="mailto:contact@example.com" className="text-blue-600 font-semibold hover:text-blue-700">
                contact@example.com
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600 text-sm mb-3">Lun-Ven de 9h à 18h</p>
              <a href="tel:+212600000000" className="text-indigo-600 font-semibold hover:text-indigo-700">
                +212 6 00 00 00 00
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600 text-sm mb-3">Visitez notre bureau</p>
              <p className="text-purple-600 font-semibold">
                Casablanca, Maroc
              </p>
            </div>

            {/* Response Time Badge */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6" />
                <h3 className="text-lg font-bold">Réponse rapide</h3>
              </div>
              <p className="text-blue-100 text-sm">
                Nous répondons généralement dans les 24 heures ouvrables
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              {/* Alert Messages */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              )}
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-700 text-sm font-medium">{success}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6 h-100">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-3">
                    <User className="w-4 h-4 text-blue-600" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="Jean Dupont"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-3">
                    <Mail className="w-4 h-4 text-blue-600" />
                    Adresse email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                  Numéro de téléphone
                </label>
                <PhoneInput
                  country={"ma"}
                  value={form.phone}
                  onChange={(phone) => setForm({ ...form, phone })}
                  inputStyle={{
                    width: "100%",
                    borderRadius: "12px",
                    padding: "16px 16px 16px 52px",
                    border: "2px solid #e5e7eb",
                    fontSize: "16px",
                    fontFamily: "inherit"
                  }}
                  buttonStyle={{
                    borderRadius: "12px 0 0 12px",
                    border: "2px solid #e5e7eb",
                    borderRight: "none"
                  }}
                  containerStyle={{
                    borderRadius: "12px"
                  }}
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-3">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  Votre message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:border-blue-500 transition-colors duration-300 h-40 resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                } text-white py-5 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 group`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-sm mt-6">
                Vos informations sont sécurisées et ne seront jamais partagées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};