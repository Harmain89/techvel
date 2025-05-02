import React, { useState, useEffect } from "react";
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
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // Added Font Awesome imports
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import axios from "axios";
import { logEvent } from "@/utils/analytics";
import { Link, useNavigate } from "react-router-dom";

export function Services() {
  const [activeTab, setActiveTab] = useState("development");
  const [visibleCards, setVisibleCards] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Services | Techvel Solutions";
    // Add scroll effect for cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Service categories
  const categories = [
    { value: "development", label: "Web" },
    { value: "design", label: "UI/UX Design" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "consulting", label: "Tech Consulting" },
  ];

  // Services data
  const services = [
    {
      id: 1,
      title: "Custom Web Development",
      description: "We build tailored web applications that perfectly align with your business needs, focusing on scalability, performance, and user experience.",
      category: "development",
      icon: "code",
      features: ["Responsive Design", "Custom CMS Integration", "E-commerce Solutions", "API Development"],
      technologies: ["React", "Next.js", "Node.js", "Laravel"],
    },
    {
      id: 10,
      title: "SaaS Solutions",
      description: "Build scalable and secure Software-as-a-Service applications that can grow with your business needs.",
      category: "development",
      icon: "cloud",
      features: ["Multi-tenant Architecture", "Subscription Management", "User Management", "Analytics Dashboard"],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    },
    {
      id: 11,
      title: "MVP Development",
      description: "Quickly launch your Minimum Viable Product to validate your business idea and gather user feedback.",
      category: "development",
      icon: "rocket",
      features: ["Rapid Prototyping", "Core Features Development", "User Testing", "Iterative Improvements"],
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    },
    {
      id: 12,
      title: "Dashboard Solutions",
      description: "Create powerful, interactive dashboards that provide real-time insights and data visualization.",
      category: "development",
      icon: "chart",
      features: ["Real-time Data", "Custom Widgets", "Interactive Charts", "Role-based Access"],
      technologies: ["D3.js", "Chart.js", "React", "Node.js"],
    },
    {
      id: 13,
      title: "Graph Solutions",
      description: "Develop advanced graph-based applications for complex data relationships and network analysis.",
      category: "development",
      icon: "network",
      features: ["Graph Databases", "Network Analysis", "Visualization", "Real-time Updates"],
      technologies: ["Neo4j", "D3.js", "GraphQL", "React"],
    },
    {
      id: 14,
      title: "API & Cloud Solutions",
      description: "Build robust APIs and cloud-based solutions that power modern applications and services.",
      category: "development",
      icon: "cloud",
      features: ["RESTful APIs", "Cloud Architecture", "Microservices", "Serverless Functions"],
      technologies: ["AWS", "Azure", "Node.js", "Python"],
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Create stunning, intuitive interfaces that captivate users and enhance their experience with your digital products.",
      category: "design",
      icon: "palette",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Develop high-performance native and cross-platform mobile applications that delight users and drive engagement.",
      category: "mobile",
      icon: "smartphone",
      features: ["iOS Development", "Android Development", "Cross-platform Solutions", "App Store Optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description: "Build powerful online stores with seamless checkout experiences, inventory management, and marketing integration.",
      category: "development",
      icon: "shopping_cart",
      features: ["Custom Shopping Cart", "Payment Gateway Integration", "Inventory Management", "Customer Analytics"],
      technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
    },
    {
      id: 5,
      title: "UX Research & Testing",
      description: "Gain valuable insights about your users through comprehensive research and testing methodologies.",
      category: "design",
      icon: "search",
      features: ["User Interviews", "Usability Testing", "A/B Testing", "Analytics Integration"],
      technologies: ["Hotjar", "Google Analytics", "UserTesting", "Optimal Workshop"],
    },
    {
      id: 6,
      title: "Tech Consultation",
      description: "Expert guidance on technology selection, architecture, and implementation strategies for your digital projects.",
      category: "consulting",
      icon: "lightbulb",
      features: ["Technology Stack Selection", "Architecture Planning", "Digital Transformation", "Process Optimization"],
      technologies: ["Cloud Solutions", "DevOps", "Security", "Scalability"],
    },
    {
      id: 7,
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade applications designed for large-scale operations and complex business requirements.",
      category: "development",
      icon: "business",
      features: ["ERP Systems", "CRM Integration", "Business Intelligence", "Workflow Automation"],
      technologies: ["Java Enterprise", "Microsoft .NET", "Oracle", "SAP Integration"],
    },
    {
      id: 8,
      title: "App UI Design",
      description: "Create cohesive, engaging mobile app interfaces that provide exceptional user experiences across all devices.",
      category: "design",
      icon: "smartphone",
      features: ["App Interface Design", "Design Guidelines", "Animation", "Micro-interactions"],
      technologies: ["Adobe XD", "Figma", "After Effects", "Principle"],
    },
    {
      id: 9,
      title: "Cross-platform App Development",
      description: "Build once, deploy everywhere with efficient cross-platform mobile application development.",
      category: "mobile",
      icon: "devices",
      features: ["Shared Codebase", "Native Performance", "Custom Components", "Offline Functionality"],
      technologies: ["React Native", "Flutter", "Xamarin", "Progressive Web Apps"],
    },
  ];

  // Handle tab change
  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="opacity-100 transition-all duration-300">
      {/* Hero Section */}
      <div className="bg-profile-background top-0 h-full w-full bg-[url('/img/different-hero-image.png')] bg-cover bg-center scale-105 py-24 px-4 md:px-8">
        <div className="container mx-auto mt-20">
          <Typography variant="h1" color="white" className="mb-4 text-center">
            Our Services
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80 text-center max-w-2xl mx-auto">
            We provide end-to-end digital solutions that transform ideas into successful digital products.
            Our team of experts combines technical excellence with creative thinking to deliver results that exceed expectations.
          </Typography>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Typography variant="h3" color="blue-gray" className="mb-4">
            What We Offer
              </Typography>
          <Typography className="text-gray-700 max-w-3xl mx-auto">
            We provide end-to-end digital solutions that transform ideas into successful digital products.
            Our team of experts combines technical excellence with creative thinking to deliver results that exceed expectations.
              </Typography>
            </div>

        {/* Service Filter Tabs */}
        <div className="mb-12">
          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <Tabs value={activeTab}>
              <TabsHeader className="mx-auto flex justify-center max-w-3xl">
                {categories.map(({ value, label }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => handleTabChange(value)}
                    className="font-medium px-8 py-3"
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody className="mt-12">
                {categories.map(({ value }) => (
                  <TabPanel key={value} value={value} className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                      {services
                        .filter(service => service.category === value)
                        .map((service) => (
                          <ServiceCard
                            key={service.id}
                            service={service}
                            isVisible={!!visibleCards[`service-${service.id}`]}
                          />
                        ))}
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>

          {/* Mobile Tabs */}
          <div className="block md:hidden">
            <Tabs value={activeTab}>
              <TabsHeader className="flex overflow-x-auto">
                {categories.map(({ value, label }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => handleTabChange(value)}
                    className="font-medium px-4 py-2 whitespace-nowrap text-sm"
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {categories.map(({ value }) => (
                  <TabPanel key={value} value={value} className="p-0">
                    <div className="flex flex-row overflow-x-auto overflow-y-hidden gap-x-4 mt-6 pb-4 snap-x snap-mandatory">
                      {services
                        .filter(service => service.category === value)
                        .map((service) => (
                          <div key={service.id} className="min-w-[90vw] max-w-xs snap-center">
                            <ServiceCard
                              service={service}
                              isVisible={!!visibleCards[`service-${service.id}`]}
                            />
                          </div>
                        ))}
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-blue-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h3" color="blue-gray" className="mb-4">
              Our Process
            </Typography>
            <Typography className="text-gray-700 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery,
              transparent communication, and exceptional results.
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Process Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold" style={{backgroundColor: '#C41E3A'}}>
                1
              </div>
              <div className="mb-4 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C41E3A" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Discovery
              </Typography>
              <Typography className="text-gray-700">
                We begin by understanding your business goals, target audience, and project requirements to create a solid foundation.
              </Typography>
            </div>
            
            {/* Process Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold" style={{backgroundColor: '#C41E3A'}}>
                2
              </div>
              <div className="mb-4 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C41E3A" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Design
                  </Typography>
              <Typography className="text-gray-700">
                We create wireframes and prototypes to visualize the solution and refine the user experience before development begins.
                  </Typography>
            </div>

            {/* Process Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold" style={{backgroundColor: '#C41E3A'}}>
                3
          </div>
              <div className="mb-4 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C41E3A" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
        </div>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Development
            </Typography>
              <Typography className="text-gray-700">
                Our engineers build your solution using the latest technologies and best practices, with regular updates and demos.
            </Typography>
          </div>
          
            {/* Process Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold" style={{backgroundColor: '#C41E3A'}}>
                4
                      </div>
              <div className="mb-4 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C41E3A" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                Launch & Support
                </Typography>
              <Typography className="text-gray-700">
                We deploy your solution and provide ongoing maintenance and support to ensure long-term success.
                </Typography>
            </div>
          </div>
          <div className="flex justify-center w-full pt-16">
            <div className="relative group">
              <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] shadow-[0_0_16px_4px_rgba(249,38,40,0.4)]">
                <button
                  type="button"
                  className="bg-black text-white rounded-xl px-8 py-3 text-lg font-bold min-w-[200px] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:ring-offset-2"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-section');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/contact');
                      setTimeout(() => window.scrollTo(0, 0), 0);
                    }
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
              </div>
        </div>
      </div>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}

Services.propTypes = {
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

export default Services;

// Service Card Component
const ServiceCard = ({ service, isVisible }) => {
  const renderIcon = (iconName) => {
    const icons = {
      code: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      cloud: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      rocket: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      chart: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      network: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      palette: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
      smartphone: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      shopping_cart: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
      search: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      lightbulb: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      business: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      devices: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      default: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    };

    return icons[iconName] || icons.default;
  };

  return (
    <Card
      id={`service-${service.id}`}
      className={`service-card overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} flex flex-col h-full border-2 border-[#C41E3A] shadow-2xl rounded-xl bg-white`}
    >
      <CardBody className="flex flex-col h-full">
        <div className="mb-4" style={{ color: '#C41E3A' }}>
          {renderIcon(service.icon)}
        </div>
        <Typography variant="h5" color="#C41E3A" className="mb-2">
          {service.title}
        </Typography>
        <Typography className="text-gray-700 mb-4">
          {service.description}
        </Typography>
        <div className="mb-4">
          <Typography variant="small" style={{ color: '#C41E3A' }} className="font-semibold mb-2">
            Key Features:
          </Typography>
          <ul className="list-disc pl-5 text-gray-700">
            {service.features.map((feature, index) => (
              <li key={index} className="mb-1">
                <Typography variant="small">{feature}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};