import React, { useState } from "react";

// Countries data with code and name structure
const Countries = [
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+212", name: "Morocco" },
  { code: "+33", name: "France" },
  { code: "+34", name: "Spain" },
  { code: "+49", name: "Germany" },
  { code: "+39", name: "Italy" },
  { code: "+971", name: "UAE" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+20", name: "Egypt" },
  { code: "+91", name: "India" },
  { code: "+86", name: "China" },
  { code: "+81", name: "Japan" },
];

const getCountryFlag = (countryName) => {
  const flags = {
    "United States": "🇺🇸",
    "United Kingdom": "🇬🇧",
    Morocco: "🇲🇦",
    France: "🇫🇷",
    Spain: "🇪🇸",
    Germany: "🇩🇪",
    Italy: "🇮🇹",
    UAE: "🇦🇪",
    "Saudi Arabia": "🇸🇦",
    Egypt: "🇪🇬",
    India: "🇮🇳",
    China: "🇨🇳",
    Japan: "🇯🇵",
  };
  return flags[countryName] || "🌍";
};

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+212",
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
      setError("⚠️ All fields are required!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("⚠️ Invalid email format.");
      return false;
    }

    if (form.phone.length < 6) {
      setError("⚠️ Please enter a valid phone number.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setSuccess("✅ Message sent successfully!");
      setForm({
        name: "",
        email: "",
        countryCode: "+212",
        phone: "",
        message: "",
      });
      setLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        {/* Contact Info Cards in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-blue-600 font-medium">contact@example.com</p>
            <p className="text-gray-500 text-sm mt-1">
              Send us your query anytime!
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-blue-600 font-medium">+212 XXX-XXXXXX</p>
            <p className="text-gray-500 text-sm mt-1">
              Mon-Fri from 9am to 6pm
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Office</h3>
            <p className="text-blue-600 font-medium">Agadir, Morocco</p>
            <p className="text-gray-500 text-sm mt-1">
              Visit us during business hours
            </p>
          </div>
        </div>

        {/* Form and Map Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Send a Message
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
                {success}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Phone Number
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="w-40 border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                >
                  {Countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {getCountryFlag(country.name)} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="123456789"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all h-32 resize-none"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
              } text-white`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span> Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>

          {/* Map */}
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54860.84764033614!2d-9.640868899999999!3d30.427755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e4c24ea501%3A0x4bcaf0de54fb19ed!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Agadir Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
