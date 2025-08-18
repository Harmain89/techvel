// portfolio.jsx
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
    TabPanel
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import ProjectDetailModal from "./ProjectDetailModal";

export function Portfolio() {
    const [activeTab, setActiveTab] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        document.title = "Portfolio | Techvel Solutions";
    }, []);

    const openProjectModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeProjectModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    const projects = [
        {
            id: 1,
            title: "Glob Compare By AI-Driven System",
            description: "AI-Powered Travel Destination Comparison Tool.",
            longDescription: "This platform leverages AI to help travelers compare and discover ideal destinations based on their preferences and requirements.\n\nKey Features:\n- Compare multiple travel destinations side-by-side\n- AI-powered destination recommendations based on user preferences\n- Comprehensive travel information including flights, hotels, and activities\n- Real-time updates on weather, currency rates, and travel advisories\n\nThis solution helps travelers make informed decisions and plan their perfect trips with confidence.",
            category: "app",
            image: "/img/portfolio/glob-compare-ai/img-1.png",
            images: [
                "/img/portfolio/glob-compare-ai/img-1.png", 
                "/img/portfolio/glob-compare-ai/img-2.png", 
                "/img/portfolio/glob-compare-ai/img-3.png", 
                "/img/portfolio/glob-compare-ai/img-4.png", 
                "/img/portfolio/glob-compare-ai/img-5.png", 
                "/img/portfolio/glob-compare-ai/img-6.png",
                "/img/portfolio/glob-compare-ai/img-7.png",
                "/img/portfolio/glob-compare-ai/img-8.png"
            ],
            technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "OpenAI", "TailwindCSS", "Vercel"],
            link: "https://globe-search-ai.netlify.app/",
        },
        {
            id: 2,
            title: "Valid AI-Driven Idea",
            description: "AI-Powered Startup Idea Validator.",
            longDescription: "This platform leverages AI to help entrepreneurs validate their startup ideas with data-driven insights and comprehensive analysis.\n\nKey Features:\n- Generate 40+ detailed reports from market research to funding strategy\n- Business model & monetization analysis\n- Product roadmap & feature prioritization\n- AI-powered market validation\n\nThis solution helps entrepreneurs move from idea to execution with confidence and avoid costly mistakes.",
            category: "web",
            image: "/img/portfolio/valid-ai-idea/img-1.png",
            images: [
                "/img/portfolio/valid-ai-idea/img-1.png", 
                "/img/portfolio/valid-ai-idea/img-2.png", 
                "/img/portfolio/valid-ai-idea/img-3.png", 
                "/img/portfolio/valid-ai-idea/img-4.png", 
                "/img/portfolio/valid-ai-idea/img-5.png", 
                "/img/portfolio/valid-ai-idea/img-6.png",
                "/img/portfolio/valid-ai-idea/img-7.png",
                "/img/portfolio/valid-ai-idea/img-8.png"
            ],
            technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "OpenAI", "TailwindCSS", "Vercel"],
            link: "https://valid-idea-ai.netlify.app/",
        },
        {
            id: 3,
            title: "AI-Driven Identity Check",
            description: "AI-Powered Background Check & Identity Verify.",
            longDescription: "This platform leverages AI to automate and improve background checks for hiring, user verification, and access control systems.\n\nKey Features:\n- OCR & facial recognition\n- Deep API integration\n- Real-time GCP orchestration\n\nThis solution helped reduce manual review time by over 60%.",
            category: "web",
            image: "/img/portfolio/wedissect/img-1.png",
            images: ["/img/portfolio/wedissect/img-1.png", "/img/portfolio/wedissect/img-2.png", "/img/portfolio/wedissect/img-3.png", "/img/portfolio/wedissect/img-4.png", "/img/portfolio/wedissect/img-5.png", "/img/portfolio/wedissect/img-6.png"],
            technologies: ["AI", "Laravel", "Node.js", "Livewire", "GCP", "Puppeteer", "MySQL", "3rd Party APIs"],
            link: "https://wedissect.com/",
        },
        {
            id: 4,
            title: "Hair Color Drop",
            description: "An e-commerce platform tailored for custom hair color products with real-time inventory, order tracking, and stylist tools.",
            longDescription: "Hair Color Drop is a feature-rich e-commerce platform designed specifically for the hair care industry, offering custom hair color products directly to salons and professionals. Built with Laravel and Livewire, it provides a seamless user experience with real-time inventory management, order processing, and secure JWT-based authentication. The platform integrates with multiple third-party APIs for shipping, payments, and notifications. It also includes stylist-oriented tools such as personalized color charts and order history, enhancing the professional workflow and customer satisfaction.",
            category: "web",
            image: "/img/portfolio/haircolordrop/img-0.png",
            images: [
                "/img/portfolio/haircolordrop/img-1.png",
                "/img/portfolio/haircolordrop/img-2.png",
                "/img/portfolio/haircolordrop/img-3.png",
                "/img/portfolio/haircolordrop/img-4.png",
                "/img/portfolio/haircolordrop/img-5.png",
                "/img/portfolio/haircolordrop/img-6.png",
            ],
            technologies: ["Laravel", "Livewire", "MySQL", "Forms", "JWT", "3rd Party APIs", "Google Map API"],
            link: "https://haircolordrop.com",
        },
        {
            id: 5,
            title: "Background Image Remover",
            description: "Instantly remove backgrounds from your photos with AI Background Removal.",
            longDescription: "Our background remover allows users to upload an image and receive a clean, transparent background version in seconds.\n\nUseful for:\n- Product photography\n- Social media content\n- Design workflows",
            category: "web",
            image: "/img/portfolio/bg-remover/img-1.png",
            images: ["/img/portfolio/bg-remover/img-1.png", "/img/portfolio/bg-remover/img-2.png", "/img/portfolio/bg-remover/img-3.png", "/img/portfolio/bg-remover/img-4.png"],
            technologies: ["React", "Express", "NodeJs", "MongoDB", "Vercel", "Clerk"],
            link: "https://background-removal-liart.vercel.app",
        },
        {
            id: 6,
            title: "E-Shoe Store",
            description: "Displays products with appealing imagery.",
            longDescription: "An e-commerce platform with dynamic product filtering, shopping cart, and secure checkout. It supports admin and customer dashboards.",
            category: "web",
            image: "/img/portfolio/e-show-store/img-0.png",
            images: ["/img/portfolio/e-show-store/img-1.png", "/img/portfolio/e-show-store/img-2.png", "/img/portfolio/e-show-store/img-3.png"],
            technologies: ["React", "NodeJs", "MongoDB", "JWT", "Tailwind", "Stripe"],
            link: "https://e-shoe-store.vercel.app/",
        },
        {
            id: 7,
            title: "Xtreme Fitness",
            description: "A modern fitness membership platform with real-time class scheduling, trainer management, and secure authentication.",
            longDescription: "Xtreme Fitness is a comprehensive web application built for gyms and fitness centers to manage memberships, trainers, and class schedules efficiently. Developed using Laravel and Livewire, the platform offers real-time updates, secure JWT-based user authentication, and seamless integration with third-party APIs for payment processing and notifications. The system also includes a powerful admin dashboard for managing clients, trainers, and subscriptions, ensuring a smooth and intuitive experience for both users and administrators.",
            category: "web",
            image: "/img/portfolio/xtreme-fitness/img-1.png",
            images: ["/img/portfolio/xtreme-fitness/img-1.png"],
            technologies: ["Laravel", "Livewire","MySQL", "JWT", "3rd Party APIs"],
            link: "#",
        },
        {
            id: 8,
            title: "In The Hair Saloon",
            description: "A complete salon booking and management system featuring a custom calendar, service forms, and client scheduling tools.",
            longDescription: "In The Hair Saloon is a robust web application built for salon owners and clients to streamline appointment scheduling and service management. Developed using Laravel and integrated with a fully customized calendar logic powered by FullCalendar API, it allows users to view availability, book appointments, and manage services with ease. The platform includes dynamic forms for capturing detailed client preferences, JWT-based authentication for secure access, and integrations with third-party APIs for notifications and other essential services. The admin panel provides full control over staff, time slots, and bookings, making it a perfect fit for modern salons looking to digitize their workflow.",
            category: "web",
            image: "/img/portfolio/hairsaloon/img-0.png",
            images: [
                "/img/portfolio/hairsaloon/img-1.png",
                "/img/portfolio/hairsaloon/img-2.png",
                "/img/portfolio/hairsaloon/img-3.png",
                "/img/portfolio/hairsaloon/img-4.png",
                "/img/portfolio/hairsaloon/img-5.png",
                "/img/portfolio/hairsaloon/img-6.png",
                "/img/portfolio/hairsaloon/img-7.png",
                "/img/portfolio/hairsaloon/img-8.png",
                "/img/portfolio/hairsaloon/img-9.png",
                "/img/portfolio/hairsaloon/img-10.png",
            ],
            technologies: ["Laravel", "MySQL", "Forms", "JWT", "3rd Party APIs", "Full Calender API", "Logic Builded Calender"],
            link: "https://inthehairsalon.com",
        },
        {
            id: 9,
            title: "AI Code Reviewer",
            description: "Get real-time suggestions for code improvements.",
            longDescription: "This app uses advanced language models to review your code, offer suggestions, and detect bugs before runtime. Designed for teams practicing continuous deployment.",
            category: "web",
            image: "/img/portfolio/ai-code-reviewer/img-0.png",
            images: ["/img/portfolio/ai-code-reviewer/img-1.png"],
            technologies: ["Next.Js", "AI", "Material UI", "UI/UX"],
            link: "https://ai-code-review.netlify.app/",
        },        
    ];

    const categories = [
        { value: "all", label: "All Projects" },
        { value: "web", label: "Web Applications" },
        { value: "app", label: "Mobile Apps" },
        { value: "dashboard", label: "Dashboards" },
    ];

    const filteredProjects = activeTab === "all"
        ? projects
        : projects.filter(project => project.category === activeTab);

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-profile-background h-full w-full bg-[url('/img/different-hero-image.png')] bg-cover bg-center scale-105 py-24 px-4 md:px-8">
                <div className="container mx-auto mt-20">
                    <Typography variant="h1" color="white" className="mb-4 text-center">
                        Showcasing Our Digital Excellence
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-80 text-center max-w-2xl mx-auto">
                        At Techvel Solutions, we take pride in delivering innovative and customized digital solutions that drive success for our clients. Our portfolio reflects our commitment to quality, creativity, and technological proficiency across various industries.
                    </Typography>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="container mx-auto px-4 py-12">
                {/* Desktop Tabs */}
                <div className="hidden md:block">
                    <Tabs value={activeTab}>
                        <TabsHeader className="mx-auto flex justify-center">
                            {categories.map(({ value, label }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
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
                                        <ProjectCard key={project.id} project={project} onClick={() => openProjectModal(project)} />
                                    ))}
                                </div>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </div>

                {/* Mobile Tabs */}
                <div className="block md:hidden">
                    <Tabs value={activeTab}>
                        <TabsHeader className="flex flex-wrap justify-center overflow-x-auto">
                            {categories.map(({ value, label }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className="font-medium px-4 py-2 whitespace-nowrap text-sm"
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody className="mt-8">
                            <TabPanel value={activeTab} className="p-0">
                                <div className="grid grid-cols-1 gap-6">
                                    {filteredProjects.map((project) => (
                                        <ProjectCard key={project.id} project={project} onClick={() => openProjectModal(project)} />
                                    ))}
                                </div>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </div>
                
                {/* More Projects Coming Soon Section */}
                <div className="mt-16">
                    <div className="bg-blue-gray-50 rounded-xl p-8 text-center">
                        {/* <div className="flex justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#c41e3a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div> */}
                        {/* <Typography variant="h4" color="blue-gray" className="mb-2">
                            More Projects Coming Soon
                        </Typography> */}
                        <Typography className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            We're continuously expanding our portfolio with exciting new projects. Check back regularly to see our latest work, or get in touch to discuss your project requirements.
                        </Typography>
                        {/* <Button color="red" className="rounded-lg">
                            Contact Us About Your Project
                        </Button> */}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

            {/* Modal */}
            <ProjectDetailModal open={modalOpen} onClose={closeProjectModal} project={selectedProject} />
        </div>
    );
}

// Project Card
const ProjectCard = ({ project, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            onClick={onClick}
            className="cursor-pointer overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader floated={false} className="h-64 relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                />
                <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <Button color="white" variant="text" className="rounded-full">
                        View Project
                    </Button>
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
                <Button variant="text" color="red" className="flex items-center gap-2 p-0">
                    Explore Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Button>
            </CardBody>
        </Card>
    );
};

export default Portfolio;