import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Breadcrumbs,
  Carousel,
  IconButton,
  Chip,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProjectDetail = ({ projectId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  
  useEffect(() => {
    setIsVisible(true);
    // In a real app, fetch project by ID from API
    // For demo, using mock data
    const fetchedProject = {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A fully responsive e-commerce solution with real-time inventory management and seamless payment processing. Built with scalability and performance in mind.",
      longDescription: "Our Modern E-commerce Platform represents the pinnacle of online retail technology. Designed from the ground up with both merchant and customer experience in focus, this platform offers unparalleled flexibility, performance, and scalability. The system handles everything from inventory management and product cataloging to checkout processes and post-purchase customer journeys seamlessly.\n\nThe architecture follows a microservices approach, allowing different components to scale independently based on demand. Real-time inventory tracking prevents overselling while sophisticated analytics provide merchants with actionable insights about customer behavior and product performance.",
      category: "web",
      client: "RetailTech Solutions",
      completionDate: "August 2024",
      projectUrl: "https://retailtech-ecommerce.com",
      images: [
        "/images/portfolio/ecommerce-1.jpg",
        "/images/portfolio/ecommerce-2.jpg",
        "/images/portfolio/ecommerce-3.jpg",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Redux", "Stripe API", "ElasticSearch"],
      features: [
        {
          title: "Inventory Management",
          description: "Real-time tracking with automated alerts for low stock and predictive restocking suggestions.",
          icon: "inventory_2"
        },
        {
          title: "Multi-payment Gateway",
          description: "Integration with multiple payment providers including Stripe, PayPal, and local payment methods.",
          icon: "payments"
        },
        {
          title: "Advanced Search",
          description: "ElasticSearch-powered product search with filtering, sorting, and keyword suggestions.",
          icon: "search"
        },
        {
          title: "Customer Analytics",
          description: "Comprehensive dashboards with user behavior, conversion funnels, and cohort analysis.",
          icon: "analytics"
        }
      ],
      challenges: "One of the main challenges was creating a system that maintained high performance even during peak traffic periods like Black Friday. We implemented aggressive caching strategies and serverless functions to handle traffic spikes efficiently. Another challenge was integrating with legacy inventory systems which required custom adapters and data transformation layers.",
      results: "The platform increased our client's conversion rate by 37% and reduced cart abandonment by 42%. Page load times were improved by 65% and inventory discrepancies were virtually eliminated. The system successfully handled over 200,000 concurrent users during peak sales events without performance degradation.",
      testimonial: {
        quote: "This e-commerce platform transformed our business. What used to take us days now happens automatically, and our customers love the seamless experience.",
        author: "Alex Martinez",
        role: "CTO, RetailTech Solutions"
      },
      team: [
        { name: "Sarah Johnson", role: "Lead Developer" },
        { name: "Miguel Rodriguez", role: "UX Designer" },
        { name: "Priya Patel", role: "Backend Architect" },
        { name: "Jamal Washington", role: "DevOps Engineer" }
      ]
    };

    // Simulate API call
    setTimeout(() => {
      setProject(fetchedProject);
      setIsLoading(false);
    }, 500);
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Typography variant="h3" className="text-center">
          Project not found
        </Typography>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <Breadcrumbs className="bg-opacity-60 bg-blue-gray-900 backdrop-blur-md p-2 rounded-lg mb-8">
            <Link to={"/portfolio"} className="text-white opacity-80 hover:opacity-100">
              Portfolio
            </Link>
            <a href="#" className="text-white">
              {project.title}
            </a>
          </Breadcrumbs>
          <Typography variant="h1" color="white" className="mb-4">
            {project.title}
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80 max-w-3xl">
            {project.description}
          </Typography>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech, index) => (
              <Chip key={index} value={tech} className="bg-white bg-opacity-20 text-white" />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Project Info */}
          <div>
            <Card className="mb-8 sticky top-8">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-4">
                  Project Details
                </Typography>
                <div className="space-y-4">
                  <div>
                    <Typography variant="small" className="font-medium text-blue-gray-500">
                      Client
                    </Typography>
                    <Typography>{project.client}</Typography>
                  </div>
                  <div>
                    <Typography variant="small" className="font-medium text-blue-gray-500">
                      Completed
                    </Typography>
                    <Typography>{project.completionDate}</Typography>
                  </div>
                  <div>
                    <Typography variant="small" className="font-medium text-blue-gray-500">
                      Category
                    </Typography>
                    <Typography className="capitalize">{project.category}</Typography>
                  </div>
                  <div>
                    <Typography variant="small" className="font-medium text-blue-gray-500">
                      Team
                    </Typography>
                    <ul className="list-disc list-inside">
                      {project.team.map((member, index) => (
                        <li key={index}>
                          <Typography>
                            {member.name} <span className="text-blue-gray-500">({member.role})</span>
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button
                      size="lg"
                      fullWidth
                      color="blue"
                      className="flex items-center gap-2 justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      Visit Project
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-12 bg-white p-2 rounded-xl shadow-md">
              <Carousel
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </IconButton>
                )}
              >
                {project.images.map((image, index) => (
                  <div key={index} className="h-96 w-full">
                    <img
                      src={image || "https://via.placeholder.com/1200x800?text=Project+Image"}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Tabs Content */}
            <Card>
              <CardBody>
                <Tabs value={activeTab}>
                  <TabsHeader>
                    <Tab value="overview" onClick={() => setActiveTab("overview")}>
                      Overview
                    </Tab>
                    <Tab value="features" onClick={() => setActiveTab("features")}>
                      Features
                    </Tab>
                    <Tab value="challenges" onClick={() => setActiveTab("challenges")}>
                      Challenges & Results
                    </Tab>
                  </TabsHeader>
                  <TabsBody>
                    <TabPanel value="overview">
                      <Typography className="mb-8 text-justify whitespace-pre-line">
                        {project.longDescription}
                      </Typography>

                      {/* Testimonial */}
                      <div className="bg-blue-gray-50 p-6 rounded-xl my-8 border-l-4 border-blue-500">
                        <Typography variant="lead" className="italic mb-4">
                          "{project.testimonial.quote}"
                        </Typography>
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-blue-gray-200 flex items-center justify-center mr-4">
                            <span className="text-blue-gray-700 font-bold text-xl">
                              {project.testimonial.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <Typography variant="h6">{project.testimonial.author}</Typography>
                            <Typography variant="small" color="blue-gray">
                              {project.testimonial.role}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="features">
                      <Typography variant="lead" className="mb-6">
                        Key Features
                      </Typography>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.features.map((feature, index) => (
                          <Card key={index} className="overflow-hidden">
                            <CardBody>
                              <div className="flex items-start">
                                <div className="bg-blue-500 text-white rounded-lg p-3 mr-4">
                                  <span className="material-icons">{feature.icon}</span>
                                </div>
                                <div>
                                  <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {feature.title}
                                  </Typography>
                                  <Typography className="font-normal">
                                    {feature.description}
                                  </Typography>
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel value="challenges">
                      <div className="mb-10">
                        <Typography variant="h5" color="blue-gray" className="mb-4">
                          Challenges
                        </Typography>
                        <Typography className="text-justify">{project.challenges}</Typography>
                      </div>

                      <div>
                        <Typography variant="h5" color="blue-gray" className="mb-4">
                          Results & Impact
                        </Typography>
                        <Typography className="text-justify">{project.results}</Typography>

                        {/* Results Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                          <Card className="bg-blue-50">
                            <CardBody className="text-center p-4">
                              <Typography variant="h3" color="blue">+37%</Typography>
                              <Typography variant="small">Conversion Rate</Typography>
                            </CardBody>
                          </Card>
                          <Card className="bg-green-50">
                            <CardBody className="text-center p-4">
                              <Typography variant="h3" color="green">-42%</Typography>
                              <Typography variant="small">Cart Abandonment</Typography>
                            </CardBody>
                          </Card>
                          <Card className="bg-purple-50">
                            <CardBody className="text-center p-4">
                              <Typography variant="h3" color="purple">65%</Typography>
                              <Typography variant="small">Faster Load Time</Typography>
                            </CardBody>
                          </Card>
                          <Card className="bg-amber-50">
                            <CardBody className="text-center p-4">
                              <Typography variant="h3" color="amber">200k+</Typography>
                              <Typography variant="small">Concurrent Users</Typography>
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </TabPanel>
                  </TabsBody>
                </Tabs>
              </CardBody>
            </Card>

            {/* More Projects */}
            <div className="mt-12">
              <Typography variant="h4" color="blue-gray" className="mb-6">
                More Projects
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <CardBody className="p-0">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="/images/portfolio/finance.jpg"
                        alt="Financial Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <Typography variant="h5" color="blue-gray">
                        Financial Dashboard
                      </Typography>
                      <Button variant="text" color="blue" className="flex items-center gap-2 mt-2">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
                <Card className="overflow-hidden">
                  <CardBody className="p-0">
                    <div className="h-48 overflow-hidden">
                      <img
                        src="/images/portfolio/healthcare.jpg"
                        alt="Healthcare App"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <Typography variant="h5" color="blue-gray">
                        Healthcare Management System
                      </Typography>
                      <Button variant="text" color="blue" className="flex items-center gap-2 mt-2">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 px-4 mt-16">
        <div className="container mx-auto text-center">
          <Typography variant="h3" color="white" className="mb-4">
            Interested in working with us?
          </Typography>
          <Typography color="white" className="opacity-80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise in creating
            beautiful, functional, and successful digital solutions.
          </Typography>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" color="white" className="text-blue-500">
              Contact Us
            </Button>
            <Button size="lg" variant="outlined" color="white">
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;