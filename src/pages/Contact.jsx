import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const validate = () => {
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setError("All fields are required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError("");
    setSuccess("");

    const serviceId = "service_4sv5l5v";
    const templateId = "template_e6gyaxk";
    const publicKey = "89C3iwIRnmSnaEjG5";

    const nameParts = form.name.trim().split(" ");
    const templateParams = {
      from_name: form.name,
      first_name: nameParts[0] || form.name,
      last_name: nameParts.slice(1).join(" ") || "",
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        // console.log("Email sent successfully!", response);
        setSuccess("Message sent successfully! We'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSuccess(""), 5000);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("Failed to send message. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white mb-14">
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Have a question or want to work together? We'd love to hear from
              you.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Email Us</h3>
            <p className="text-blue-600 font-semibold mb-1">
              contact@youthtech.com
            </p>
            <p className="text-slate-500 text-sm">
              We'll respond within 24 hours
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Business Hours
            </h3>
            <p className="text-blue-600 font-semibold mb-1">
              Mon - Fri: 9AM - 6PM
            </p>
            <p className="text-slate-500 text-sm">Weekend: Closed</p>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Visit Us</h3>
            <p className="text-blue-600 font-semibold mb-1">Agadir, Morocco</p>
            <p className="text-slate-500 text-sm">Open during business hours</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-200">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Send a Message
              </h2>
              <p className="text-slate-600">
                Fill out the form below and we'll get back to you soon.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 text-sm font-medium">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-green-800 text-sm font-medium">{success}</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 text-white ${
                  loading
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden h-[600px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54860.84764033614!2d-9.640868899999999!3d30.427755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e4c24ea501%3A0x4bcaf0de54fb19ed!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
