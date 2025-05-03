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
            title: "AI-Driven Identity Check",
            description: "AI-Powered Background Check & Identity Verify.",
            longDescription: "This platform leverages AI to automate and improve background checks for hiring, user verification, and access control systems.\n\nKey Features:\n- OCR & facial recognition\n- Deep API integration\n- Real-time GCP orchestration\n\nThis solution helped reduce manual review time by over 60%.",
            category: "web",
            image: "/img/portfolio/wedissect.png",
            images: ["/img/portfolio/wedissect.png", "/img/portfolio/extra1.png"],
            technologies: ["AI", "Laravel", "Node.js", "Livewire", "GCP", "Puppeteer", "MySQL", "3rd Party APIs"],
            link: "https://wedissect.com/",
        },
        {
            id: 2,
            title: "AI Code Reviewer",
            description: "Get real-time suggestions for code improvements.",
            longDescription: "This app uses advanced language models to review your code, offer suggestions, and detect bugs before runtime. Designed for teams practicing continuous deployment.",
            category: "web",
            image: "/img/portfolio/ai-code-reviewer.png",
            images: ["/img/portfolio/ai-code-reviewer.png", "/img/portfolio/extra1.png"],
            technologies: ["Next.Js", "AI", "Material UI", "UI/UX"],
            link: "https://ai-code-review.netlify.app/",
        },
        {
            id: 3,
            title: "Background Image Remover",
            description: "Instantly remove backgrounds from your photos with AI Background Removal.",
            longDescription: "Our background remover allows users to upload an image and receive a clean, transparent background version in seconds.\n\nUseful for:\n- Product photography\n- Social media content\n- Design workflows",
            category: "web",
            image: "/img/portfolio/bg-remover.png",
            technologies: ["React", "Express", "NodeJs", "MongoDB", "Vercel", "Clerk"],
            link: "https://background-removal-liart.vercel.app",
        },
        {
            id: 4,
            title: "E-Shoe Store",
            description: "Displays products with appealing imagery.",
            longDescription: "An e-commerce platform with dynamic product filtering, shopping cart, and secure checkout. It supports admin and customer dashboards.",
            category: "web",
            image: "/img/portfolio/e-show-store.png",
            technologies: ["React", "NodeJs", "MongoDB", "JWT", "Tailwind", "Stripe"],
            link: "https://e-shoe-store.vercel.app/",
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
                        Our Portfolio
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-80 text-center max-w-2xl mx-auto">
                        Showcasing our best work across web applications, mobile apps, and interactive dashboards.
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
