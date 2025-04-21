import React, { useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Tabs,
    TabsHeader,
    Tab,
    TabsBody,
    TabPanel,
    IconButton,
    MobileNav,
    Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Portfolio() {
    const [activeTab, setActiveTab] = useState("all");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Portfolio data
    const projects = [
        {
            id: 1,
            title: "Modern E-commerce Platform",
            description: "A fully responsive e-commerce solution with real-time inventory management",
            category: "web",
            image: "/images/portfolio/ecommerce.jpg",
            technologies: ["React", "Node.js", "MongoDB", "AWS"],
            link: "#",
        },
        {
            id: 2,
            title: "Financial Dashboard",
            description: "Interactive analytics dashboard for financial data visualization",
            category: "dashboard",
            image: "/images/portfolio/finance.jpg",
            technologies: ["React", "D3.js", "Material UI", "Firebase"],
            link: "#",
        },
        {
            id: 3,
            title: "Healthcare Management System",
            description: "Comprehensive solution for hospital resource management",
            category: "app",
            image: "/images/portfolio/healthcare.jpg",
            technologies: ["React Native", "Express", "PostgreSQL", "Azure"],
            link: "#",
        },
        {
            id: 4,
            title: "Educational Platform",
            description: "Online learning platform with interactive courses and assessment tools",
            category: "web",
            image: "/images/portfolio/education.jpg",
            technologies: ["Next.js", "GraphQL", "MongoDB", "Vercel"],
            link: "#",
        },
        {
            id: 5,
            title: "Real Estate Listing App",
            description: "Mobile application for property listings with virtual tours",
            category: "app",
            image: "/images/portfolio/realestate.jpg",
            technologies: ["React Native", "Node.js", "AWS", "Google Maps API"],
            link: "#",
        },
        {
            id: 6,
            title: "Analytics Dashboard",
            description: "Customer behavior analysis dashboard with advanced filtering",
            category: "dashboard",
            image: "/images/portfolio/analytics.jpg",
            technologies: ["React", "Redux", "Node.js", "MongoDB"],
            link: "#",
        },
    ];

    // Categories for filtering
    const categories = [
        { value: "all", label: "All Projects" },
        { value: "web", label: "Web Applications" },
        { value: "app", label: "Mobile Apps" },
        { value: "dashboard", label: "Dashboards" },
    ];

    // Handle tab change with a proper function
    const handleTabChange = (value) => {
        setActiveTab(value);
    };

    // Filter projects based on active tab
    const filteredProjects = activeTab === "all"
        ? projects
        : projects.filter(project => project.category === activeTab);

    return (
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Hero Section */}
            <div className="bg-profile-background top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105 py-24 px-4 md:px-8">
                <div className="container mx-auto">
                    <Typography variant="h1" color="white" className="mb-4 text-center">
                        Our Portfolio
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-80 text-center max-w-2xl mx-auto">
                        Showcasing our best work across web applications, mobile apps, and interactive dashboards.
                        Explore our projects to see how we can help bring your vision to life.
                    </Typography>
                </div>
            </div>

            {/* Portfolio Filter Tabs */}
            <div className="container mx-auto px-4 py-12">
                <div className="mb-12">
                    {/* Desktop Tabs (hidden on small screens) */}
                    <div className="hidden md:block">
                        <Tabs value={activeTab}>
                            <TabsHeader className="mx-auto flex justify-center">
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
                            <TabsBody className="mt-8">
                                <TabPanel value={activeTab} className="p-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredProjects.map((project) => (
                                            <ProjectCard key={project.id} project={project} />
                                        ))}
                                    </div>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </div>

                    {/* Mobile Tabs (hidden on medium screens and up) */}
                    <div className="block md:hidden">
                        <Tabs value={activeTab}>
                            <TabsHeader className="flex flex-wrap justify-center overflow-x-auto">
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
                            <TabsBody className="mt-8">
                                <TabPanel value={activeTab} className="p-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredProjects.map((project) => (
                                            <ProjectCard key={project.id} project={project} />
                                        ))}
                                    </div>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-100 py-16 px-4 h-full w-full bg-[url('/img/header-bg.png')] bg-center">
                <div className="container mx-auto text-center">
                    <Typography variant="h3" color="blue-gray" className="mb-4">
                        Ready to start your next project?
                    </Typography>
                    <Typography className="text-gray-700 mb-8 max-w-2xl mx-auto">
                        We're passionate about creating solutions that drive results. Let's discuss how we can help you achieve your goals.
                    </Typography>
                    <Button size="lg" color="blue" className="rounded-full px-8">
                        Get in Touch
                    </Button>
                </div>
            </div>
        </div>
    );
};

// Project Card Component
const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className="overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader
                floated={false}
                className="h-64 relative overflow-hidden"
            >
                <img
                    src={project.image || "https://via.placeholder.com/600x400?text=Project+Image"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                />
                <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <Link to={'/explore'}>
                        <Button color="white" variant="text" className="rounded-full">
                            View Project
                        </Button>
                    </Link>
                </div>
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {project.title}
                </Typography>
                <Typography className="text-gray-700 mb-4">
                    {project.description}
                </Typography>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-gray-50 text-blue-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {tech}
                        </span>
                    ))}
                </div>

                <Link to={'/explore'}>
                    <Button
                        variant="text"
                        color="blue"
                        className="flex items-center gap-2 p-0"
                    >
                        Explore Details
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
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default Portfolio;