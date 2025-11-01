// // // import { ChevronDownIcon } from "@heroicons/react/16/solid";
// // import {Countries} from "../mocData/data.js";
// // export const Contact = () => {
// //   return (
// //     <div className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
// //       {/* Background gradient shape */}
// //       <div
// //         aria-hidden="true"
// //         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
// //       >
// //         <div
// //           style={{
// //             clipPath:
// //               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
// //           }}
// //           className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.25rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[144.375rem]"
// //         />
// //       </div>

// //       {/* Heading */}
// //       <div className="mx-auto max-w-2xl text-center">
// //         <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
// //           Contact Us
// //         </h2>
// //         <p className="mt-2 text-lg text-gray-400">
// //           Tell us about your needs and we'll get back to you as soon as
// //           possible.
// //         </p>
// //       </div>

// //       {/* Form */}
// //       <form
// //         action="#"
// //         method="POST"
// //         className="mx-auto mt-16 max-w-xl sm:mt-20"
// //       >
// //         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
// //           {/* First name */}
// //           <div>
// //             <label
// //               htmlFor="first-name"
// //               className="block text-sm font-semibold text-white"
// //             >
// //               First name
// //             </label>
// //             <div className="mt-2.5">
// //               <input
// //                 id="first-name"
// //                 name="first-name"
// //                 type="text"
// //                 autoComplete="given-name"
// //                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
// //               />
// //             </div>
// //           </div>

// //           {/* Last name */}
// //           <div>
// //             <label
// //               htmlFor="last-name"
// //               className="block text-sm font-semibold text-white"
// //             >
// //               Last name
// //             </label>
// //             <div className="mt-2.5">
// //               <input
// //                 id="last-name"
// //                 name="last-name"
// //                 type="text"
// //                 autoComplete="family-name"
// //                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
// //               />
// //             </div>
// //           </div>

// //           {/* Company */}
// //           <div className="sm:col-span-2">
// //             <label
// //               htmlFor="company"
// //               className="block text-sm font-semibold text-white"
// //             >
// //               Company
// //             </label>
// //             <div className="mt-2.5">
// //               <input
// //                 id="company"
// //                 name="company"
// //                 type="text"
// //                 autoComplete="organization"
// //                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
// //               />
// //             </div>
// //           </div>

// //           {/* Email */}
// //           <div className="sm:col-span-2">
// //             <label
// //               htmlFor="email"
// //               className="block text-sm font-semibold text-white"
// //             >
// //               Email
// //             </label>
// //             <div className="mt-2.5">
// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 autoComplete="email"
// //                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
// //               />
// //             </div>
// //           </div>

// //           {/* Phone number */}
// //           <div className="sm:col-span-2">
// //             <label
// //               htmlFor="phone-number"
// //               className="block text-sm font-semibold text-white"
// //             >
// //               Phone number
// //             </label>
// //             <div className="mt-2.5 flex rounded-md bg-white/5 outline outline-1 outline-white/10 focus-within:outline-2 focus-within:outline-indigo-500">
// //               <div className="relative">
// //                 <select
// //                   id="country"
// //                   name="country"
// //                   className="appearance-none bg-transparent py-2 pl-3.5 pr-8 text-base text-gray-400 focus:outline-none"
// //                 >
// //                   {Countries.map((country) => (
// //                     <option key={country.code} value={country.code}>
// //                       {country.name} {country.code}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <div
// //                   aria-hidden="true"
// //                   className="absolute right-2 top-2.5 size-5 text-gray-400"
// //                 ></div>
// //               </div>
// //               <input
// //                 id="phone-number"
// //                 name="phone-number"
// //                 type="text"
// //                 placeholder="123-456-7890"
// //                 className="flex-1 bg-transparent py-2 pl-2 text-white placeholder:text-gray-500 focus:outline-none"
// //               />
// //             </div>
// //           </div>

// //           {/* Message */}
// //           <div className="sm:col-span-2">
// //             <label
// //               htmlFor="message"
// //               className="block text-sm font-semibold text-white"
// //             >
// //               Message
// //             </label>
// //             <div className="mt-2.5">
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 rows={4}
// //                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
// //               />
// //             </div>
// //           </div>

// //           {/* Agree checkbox */}
// //           <div className="flex items-center gap-x-3 sm:col-span-2">
// //             <input
// //               id="agree-to-policies"
// //               name="agree-to-policies"
// //               type="checkbox"
// //               className="h-5 w-5 rounded border-gray-700 bg-white/5 text-indigo-500 focus:ring-indigo-500"
// //             />
// //             <label
// //               htmlFor="agree-to-policies"
// //               className="text-sm text-gray-400"
// //             >
// //               By selecting this, you agree to our{" "}
// //               <a
// //                 href="#"
// //                 className="font-semibold text-indigo-400 hover:text-indigo-300"
// //               >
// //                 privacy policy
// //               </a>
// //               .
// //             </label>
// //           </div>
// //         </div>

// //         {/* Submit button */}
// //         <div className="mt-10">
// //           <button
// //             type="submit"
// //             className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
// //           >
// //             Let’s talk
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }
// import React from "react";
// import { Countries } from "../mocData/data.js";

// export const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Your message has been sent successfully!");
//   };

//   return (
//     <div className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
//       {/* Background gradient shape */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//       >
//         <div
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//           className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.25rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[144.375rem]"
//         />
//       </div>

//       {/* Heading */}
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
//           Contact Us
//         </h2>
//         <p className="mt-2 text-lg text-gray-400">
//           Tell us about your needs and we'll get back to you as soon as
//           possible.
//         </p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           {/* First name */}
//           <div>
//             <label
//               htmlFor="first-name"
//               className="block text-sm font-semibold text-white"
//             >
//               First name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="first-name"
//                 name="first-name"
//                 type="text"
//                 placeholder="Enter your first name"
//                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
//               />
//             </div>
//           </div>

//           {/* Last name */}
//           <div>
//             <label
//               htmlFor="last-name"
//               className="block text-sm font-semibold text-white"
//             >
//               Last name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="last-name"
//                 name="last-name"
//                 type="text"
//                 placeholder="Enter your last name"
//                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
//               />
//             </div>
//           </div>

//           {/* Company */}
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="company"
//               className="block text-sm font-semibold text-white"
//             >
//               Company
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="company"
//                 name="company"
//                 type="text"
//                 placeholder="Your company (optional)"
//                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold text-white"
//             >
//               Email
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
//               />
//             </div>
//           </div>

//           {/* Phone number */}
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="phone-number"
//               className="block text-sm font-semibold text-white"
//             >
//               Phone number
//             </label>
//             <div className="mt-2.5 flex rounded-md bg-white/5 outline outline-1 outline-white/10 focus-within:outline-2 focus-within:outline-indigo-500">
//               <div className="relative">
//                 <select
//                   id="country"
//                   name="country"
//                   className="appearance-none bg-transparent py-2 pl-3.5 pr-8 text-base text-gray-400 focus:outline-none"
//                 >
//                   {Countries.map((country) => (
//                     <option key={country.code} value={country.code}>
//                       {country.name} ({country.code})
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <input
//                 id="phone-number"
//                 name="phone-number"
//                 type="text"
//                 placeholder="123-456-7890"
//                 className="flex-1 bg-transparent py-2 pl-2 text-white placeholder:text-gray-500 focus:outline-none"
//               />
//             </div>
//           </div>

//           {/* Message */}
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block text-sm font-semibold text-white"
//             >
//               Message
//             </label>
//             <div className="mt-2.5">
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 placeholder="Write your message here..."
//                 className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
//               />
//             </div>
//           </div>

//           {/* Agree checkbox */}
//           <div className="flex items-center gap-x-3 sm:col-span-2">
//             <input
//               id="agree-to-policies"
//               name="agree-to-policies"
//               type="checkbox"
//               className="h-5 w-5 rounded border-gray-700 bg-white/5 text-indigo-500 focus:ring-indigo-500"
//             />
//             <label
//               htmlFor="agree-to-policies"
//               className="text-sm text-gray-400"
//             >
//               By selecting this, you agree to our{" "}
//               <a
//                 href="#"
//                 className="font-semibold text-indigo-400 hover:text-indigo-300"
//               >
//                 privacy policy
//               </a>
//               .
//             </label>
//           </div>
//         </div>

//         {/* Submit button */}
//         <div className="mt-10">
//           <button
//             type="submit"
//             className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-indigo-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//           >
//             Let’s talk
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// import React, { useState } from "react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
      setError("⚠️ All fields are required!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("⚠️ Invalid email format.");
      return false;
    }

    if (form.phone.length < 8) {
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
          setSuccess("✅ Message sent successfully!");
          setForm({ name: "", email: "", phone: "", message: "" });
          setLoading(false);
        },
        (error) => {
          setError("❌ Something went wrong.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Contact Us
        </h2>

        {error && <p className="text-red-600 mb-3">{error}</p>}
        {success && <p className="text-green-600 mb-3">{success}</p>}

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone with country code */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Phone
          </label>
          <PhoneInput
            country={"ma"} // Default: Morocco 🇲🇦
            value={form.phone}
            onChange={(phone) => setForm({ ...form, phone })}
            inputStyle={{
              width: "100%",
              borderRadius: "8px",
              padding: "12px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 h-32"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } text-white py-3 rounded-lg transition-all duration-300 font-bold`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};
