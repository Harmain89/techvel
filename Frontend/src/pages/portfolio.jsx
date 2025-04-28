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
import { Link, useNavigate } from "react-router-dom";
import {  Footer } from "@/widgets/layout";

export function Portfolio() {
    const [activeTab, setActiveTab] = useState("all");
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Portfolio data
    const projects = [
        {
            id: 1,
            title: "AI-Driven Identity Check",
            description: "AI-Powered Background Check & Identity Verify.",
            category: "web",
            image: "/img/portfolio/wedissect.png",
            technologies: ["Aritificial Inteligence (AI)", "Laravel", "Node.js", "Livewire", "GCP", "Pupeeter", "Mysql", "Third Party Services"],
            link: "https://wedissect.com/",
        },
        {
            id: 2,
            title: "AI Code Reviewer",
            description: "Get real-time suggestions for code improvements.",
            category: "web",
            image: "/img/portfolio/ai-code-reviewer.png",
            technologies: ["Next.Js", "AI", "Material UI", "UI/UX"],
            link: "https://ai-code-review.netlify.app/",
        },
        {
            id: 3,
            title: "Background Image Remover",
            description: "Instantly remove backgrounds from your photos with AI Background Removal",
            category: "web",
            image: "/img/portfolio/bg-remover.png",
            technologies: ["React", "Express", "NodeJs", "MongoDB", "Vercel", "Third Party Service", "Clerk", "Google Authentication"],
            link: "https://background-removal-liart.vercel.app",
        },
        {
            id: 3,
            title: "E-Shoe Store",
            description: "Displays products with appealing imagery.",
            category: "web",
            image: "/img/portfolio/e-show-store.png",
            technologies: ["React", "Express", "NodeJs", "MongoDB", "Vercel", "JWT", "Responsive UI", "UI/UX", "E-commerce"],
            link: "https://e-shoe-store.vercel.app/",
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

    const handleContactNavigate = () => {
        window.location.replace('/contact#contact-form-section');
    };

    return (
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Hero Section */}
            <div className="bg-profile-background top-0 h-full w-full bg-[url('/img/different-hero-image.png')] bg-cover bg-center scale-105 py-24 px-4 md:px-8">
                <div className="container mx-auto mt-20">
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
                    <div className="flex justify-center w-full">
                        <div className="relative group">
                            <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] shadow-[0_0_16px_4px_rgba(249,38,40,0.4)]">
                                <button
                                    className="bg-black text-white rounded-xl px-8 py-3 text-lg font-medium min-w-[200px] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f92628] focus:ring-offset-2"
                                    type="button"
                                    onClick={handleContactNavigate}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white">
                <Footer />
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
                        color="red"
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