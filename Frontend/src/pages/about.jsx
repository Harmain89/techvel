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
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // Added Font Awesome imports
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import axios from "axios";
import { logEvent } from "@/utils/analytics";
import { backendUrl } from "@/utils/constants";

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
    twitter: FaTwitter,
    github: FaGithub,
    linkedin: FaLinkedin
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60" />
        <div className="max-w-8xl container relative mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Your story starts with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                This is a simple example of a Landing Page you can build using Material Tailwind.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          
          {/* About Section */}
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white" />
              </div>
              <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your users guess by attaching tooltips and popovers to any element.
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Teamwork illustration"
                    src="/img/teamwork.png"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Enterprise
                  </Typography>
                  <Typography variant="h5" color="blue-gray" className="mb-3 mt-2 font-bold">
                    Top Notch About
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer.
                  </Typography>
                </CardBody>
              </Card>
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
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
                        {socials.map(({ name: socialName }) => {
                          const Icon = socialIcons[socialName.toLowerCase()];
                          return Icon ? (
                            <IconButton
                              key={socialName}
                              color="white"
                              variant="text"
                              className="hover:bg-white/20 rounded-full"
                              aria-label={socialName}
                            >
                              <Icon className="text-xl" />
                            </IconButton>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                  <Typography variant="h5" className="font-bold mb-1">
                    {name}
                  </Typography>
                  <Typography className="text-gray-600">
                    {position}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent this year down to low ice.
          </PageTitle>
          
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>

          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>

          <form 
            className="mx-auto w-full mt-12 lg:w-5/12" 
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <div className="mb-8 flex flex-col md:flex-row gap-8">
              <Input
                variant="outlined"
                size="lg"
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
              <Input
                variant="outlined"
                size="lg"
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
            <Textarea
              variant="outlined"
              size="lg"
              label="Message"
              rows={8}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
            
            {formStatus.message && (
              <div className={`mt-4 p-3 rounded-md ${
                formStatus.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
              }`}>
                {formStatus.message}
              </div>
            )}
            
            <Button
              variant="gradient"
              size="lg"
              className="mt-8"
              fullWidth
              type="submit"
              disabled={formStatus.isSubmitting}
              aria-busy={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

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