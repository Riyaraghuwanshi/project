import React, { useState, FormEvent } from "react";
import {
  Code2,
  Mail,
  Instagram,
  Linkedin,
  Github,
  Phone,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    branch: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "formServiceDemo", // Replace with your EmailJS service ID
        "template_f7aftw4", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          year: formData.year,
          branch: formData.branch,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      toast.success(
        "Thank you for your interest! We will get back to you soon."
      );
      setFormData({ name: "", email: "", year: "", branch: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center">
              {/* <Code2 className="h-8 w-8 text-indigo-400" /> */}
              <img src="/logoi/logo.png" alt="Icon" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-white">
                TIT Developers
              </span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering the next generation of developers through mentorship,
              collaboration, and hands-on learning.
            </p>
            <div className="mt-6 flex space-x-6">
              <a
                href="https://www.instagram.com/titdevelopercommunity?igsh=MTA1NGJ3M3czNWsyZQ=="
                className="text-gray-400 hover:text-indigo-400"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anandsoni992/"
                className="text-gray-400 hover:text-indigo-400"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/dashboard"
                className="text-gray-400 hover:text-indigo-400"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              {["About", "Events", "Mentors", "Gallery"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-base text-gray-400 hover:text-indigo-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact Us
            </h3>

            <div className="mt-4 space-y-4">
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                contact@titdev.com
              </p>
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                12347-45648
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Developer Club enquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Fire away with any questions?"
                  rows={3}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} TIT Developer Community. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
