import React, { useState } from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import axios from "axios";

const backendUrl = import.meta.env.DEV ? '/api' : 'https://techvel-server.vercel.app/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ message: "", isError: false, isSubmitting: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Email is invalid";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({ message: validationError, isError: true, isSubmitting: false });
      return;
    }
    setFormStatus({ message: "Sending your message...", isError: false, isSubmitting: true });
    try {
      await axios.get(`${backendUrl}/health`);
      const res = await axios.post(`${backendUrl}/contact`, formData, {
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        withCredentials: false
      });
      if (res.status === 200) {
        setFormStatus({ message: res.data.message || "Thank you! Your message has been sent successfully. We'll get back to you soon.", isError: false, isSubmitting: false });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(res.data?.message || "Something went wrong");
      }
    } catch (err) {
      setFormStatus({ message: err?.response?.data?.message || err?.message || "Failed to send message. Please try again later or email us directly at support@techvelsolutions.com", isError: true, isSubmitting: false });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section for consistency */}
      <div className="bg-profile-background top-0 h-full w-full bg-[url('/img/different-hero-image.png')] bg-cover bg-center scale-105 py-24 px-4 md:px-8">
        <div className="container mx-auto mt-20">
          <Typography variant="h1" color="white" className="mb-4 text-center font-black">
            Contact Us
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80 text-center max-w-2xl mx-auto">
            Complete this form and we will get back to you in 24 hours.
          </Typography>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center py-20 px-4" id="contact-form-section">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative mx-auto">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-2 rounded-full bg-[#C41E3A] mb-6"></div>
          <div className="text-center mb-8">
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C41E3A]">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/30 outline-none transition text-lg bg-gray-50"
                />
              </div>
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C41E3A]">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12v1a4 4 0 01-8 0v-1m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0m8 0H8"/></svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/30 outline-none transition text-lg bg-gray-50"
                />
              </div>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-5 text-[#C41E3A]">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-4.5M21 10.5l-9 5.25L3 10.5"/></svg>
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                rows={6}
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/30 outline-none transition text-lg bg-gray-50 resize-none"
              />
            </div>
            {formStatus.message && (
              <div className={`mt-2 p-3 rounded-md text-center text-base font-medium ${formStatus.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>{formStatus.message}</div>
            )}
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] shadow-[0_0_16px_4px_rgba(249,38,40,0.4)] w-full">
              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className="bg-black text-white rounded-xl px-8 py-3 text-lg font-bold w-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:ring-offset-2 disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {formStatus.isSubmitting && (
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                )}
                {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
} 