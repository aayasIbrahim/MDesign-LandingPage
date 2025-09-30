"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

// --- Types ---
interface ContactDetail {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

// --- Contact Info Data ---
const contactDetails: ContactDetail[] = [
  { icon: FiPhone, label: "Call me", value: "+8801613968687", color: "bg-green-500" },
  { icon: FiMail, label: "Email me", value: "ahmedtanvir8687@gmail.com", color: "bg-green-500" },
  { icon: FiMapPin, label: "Address", value: "Zakigonj, Sylhet, Bangladesh.", color: "bg-green-500" },
];

// --- Sub-Component: Contact Detail Card ---
const ContactDetailCard: React.FC<ContactDetail> = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-start mb-6">
    <div className={`p-4 rounded-full ${color} text-white mr-4 flex-shrink-0`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="font-semibold text-gray-800 text-sm sm:text-base">{label}</p>
      <p className="text-gray-600 text-xs sm:text-sm">{value}</p>
    </div>
  </div>
);

// --- Form Data Type ---
interface FormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // API integration or backend submission can go here
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 sm:py-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-green-500 border border-green-500 rounded-full px-4 py-1 text-sm sm:text-base font-medium">
          Contact
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-snug">
          Let&apos;s Discuss Your <span className="text-green-500">Project</span>
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base max-w-md sm:max-w-lg mx-auto">
          Let&apos;s make something new, different, and more meaningful or make things more visual or conceptual
        </p>
      </div>

      {/* Main Grid: Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column: Contact Details */}
        <div className="lg:col-span-1 flex flex-col justify-start space-y-6">
          {contactDetails.map((detail, index) => (
            <ContactDetailCard key={index} {...detail} />
          ))}
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-green-500 focus:outline-none transition text-sm sm:text-base"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-green-500 focus:outline-none transition text-sm sm:text-base"
                required
              />
            </div>

            {/* Row 2: Phone & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-green-500 focus:outline-none transition text-sm sm:text-base"
              />
              <input
                type="text"
                name="budget"
                placeholder="Budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-green-500 focus:outline-none transition text-sm sm:text-base"
              />
            </div>

            {/* Row 3: Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:border-green-500 focus:ring-green-500 focus:outline-none transition resize-none text-sm sm:text-base"
              required
            />

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition duration-300 text-sm sm:text-base"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
