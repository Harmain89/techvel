import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon, LightBulbIcon, ShieldCheckIcon, StarIcon, UserGroupIcon, HeartIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import {FaGithub, FaLinkedin } from "react-icons/fa"; // Added Font Awesome imports
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import axios from "axios";
import { logEvent } from "@/utils/analytics";
import { backendUrl } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

export function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      setFormStatus({
        message: validationError,
        isError: true,
        isSubmitting: false,
      });
      logEvent("Contact Form", "Validation Error", validationError);
      return;
    }
    
    setFormStatus({
      message: "Sending your message...",
      isError: false,
      isSubmitting: true,
    });
  
    try {
      logEvent("Contact Form", "Submit Attempt", "Form Submitted");
      
      // Health check
      await axios.get(`${backendUrl}/health`);
      
      // Form submission
      const res = await axios.post(
        `${backendUrl}/contact`, 
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
  
      if (res.status === 200) {
        logEvent("Contact Form", "Submit Success", "Form Submitted Successfully");
        setFormStatus({
          message: "Thank you! Your message has been sent successfully.",
          isError: false,
          isSubmitting: false,
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 
                      err.message || 
                      "Failed to send message. Please try again later.";
      
      logEvent("Contact Form", "Submit Error", errorMsg);
      setFormStatus({
        message: errorMsg,
        isError: true,
        isSubmitting: false,
      });
    }
  };

  // Social icons mapping
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin
  };

  const iconColor = "#C41E3A";

  return (
    <>
      {/* Hero Section */}
      <div className="bg-profile-background top-0 h-full w-full bg-[url('/img/different-hero-image.png')] bg-cover bg-center scale-105 py-24 px-4 md:px-8">
        <div className="container mx-auto mt-20">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full text-center lg:w-8/12 mx-auto">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Our Company
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Fueling innovation through cutting-edge technology, Techvel Solutions helps you transform ideas into impactful digital experiences that stand the test of time.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
    
      {/* Core Values Section */}
      <section className="py-16 bg-white text-blue-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-8">Our Core Values</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center">
              <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40" className="mb-3"><path d="M20 8a8 8 0 0 1 8 8c0 4-4 8-8 16-4-8-8-12-8-16a8 8 0 0 1 8-8z"/><circle cx="20" cy="16" r="3"/></svg>
              <Typography variant="h5" className="font-bold mb-2">Innovation</Typography>
              <Typography>We embrace creativity and strive to deliver cutting-edge solutions for every client.</Typography>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center">
              <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40" className="mb-3"><rect x="10" y="10" width="20" height="20" rx="6"/><path d="M16 20l4 4 4-8"/></svg>
              <Typography variant="h5" className="font-bold mb-2">Integrity</Typography>
              <Typography>We act with honesty, transparency, and respect in all our interactions.</Typography>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center">
              <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40" className="mb-3"><polygon points="20,8 24,18 34,18 26,24 30,34 20,28 10,34 14,24 6,18 16,18"/></svg>
              <Typography variant="h5" className="font-bold mb-2">Excellence</Typography>
              <Typography>We are committed to delivering the highest quality in everything we do.</Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white text-blue-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-8">Why Choose Techvel Solutions?</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center">
              <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40" className="mb-3"><circle cx="14" cy="18" r="4"/><circle cx="26" cy="18" r="4"/><path d="M10 30c0-4 8-4 8-8"/><path d="M30 30c0-4-8-4-8-8"/></svg>
              <Typography variant="h5" className="font-bold mb-2">Expert Team</Typography>
              <Typography>Our professionals bring years of experience and a passion for technology to every project.</Typography>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center">
              <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40" className="mb-3"><path d="M20 34s-10-6-10-14a6 6 0 0 1 12 0 6 6 0 0 1 12 0c0 8-10 14-10 14z"/></svg>
              <Typography variant="h5" className="font-bold mb-2">Client-Centric Approach</Typography>
              <Typography>We listen, understand, and tailor our solutions to meet your unique business needs.</Typography>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center">
              <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40" className="mb-3"><circle cx="20" cy="20" r="16"/><path d="M14 20l4 4 8-8"/></svg>
              <Typography variant="h5" className="font-bold mb-2">Proven Results</Typography>
              <Typography>We have a track record of delivering successful projects that drive real business value.</Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Team
            </Typography>
            <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto">
              A diverse group of talented individuals working together to create amazing things
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map(({ img, name, position, socials }) => (
              <Card
                key={name}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardBody className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={`Portrait of ${name}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex justify-center space-x-2">
                        {socials.map(({ name: socialName, url }) => {
                          const Icon = socialIcons[socialName.toLowerCase()];
                          return Icon ? (
                            url ? (
                              <a key={socialName} href={url} target="_blank" rel="noopener noreferrer">
                                <IconButton
                                  color="white"
                                  variant="text"
                                  className="hover:bg-white/20 rounded-full"
                                  aria-label={socialName}
                                >
                                  <Icon className="text-xl" />
                                </IconButton>
                              </a>
                            ) : (
                              <IconButton
                                key={socialName}
                                color="white"
                                variant="text"
                                className="hover:bg-white/20 rounded-full"
                                aria-label={socialName}
                              >
                                <Icon className="text-xl" />
                              </IconButton>
                            )
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                  <Typography variant="h5" className="font-extrabold mb-1 text-center">
                    {name}
                  </Typography>
                  <Typography className="text-[#C41E3A] font-bold text-center">
                    {position}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

About.propTypes = {
  featuresData: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.elementType,
      description: PropTypes.string,
    })
  ),
  teamData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
      position: PropTypes.string,
      socials: PropTypes.array,
    })
  ),
  contactData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.elementType,
      description: PropTypes.string,
    })
  ),
};

export default About;