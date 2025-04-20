import React, { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    Typography,
    Button,
    Tabs,
    TabsHeader,
    Tab,
    TabsBody,
    TabPanel,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Footer } from "@/widgets/layout";

export function Services() {
    const [activeTab, setActiveTab] = useState("development");
    const [isVisible, setIsVisible] = useState(false);
    const [open, setOpen] = useState(0);
    const [visibleCards, setVisibleCards] = useState({});

    useEffect(() => {
        setIsVisible(true);

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

    const handleAccordionOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

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

    // Filter services based on active tab
    const filteredServices = (activeTab === "all" ? services : services.filter(service => service.category === activeTab));

    // FAQ Data
    const faqs = [
        {
            question: "What is your development process?",
            answer: "Our development process follows an agile methodology, starting with discovery and requirements gathering, followed by design, development, testing, and deployment. We work in iterative cycles to ensure continuous feedback and improvement throughout the project."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
        },
        {
            question: "Do you offer maintenance and support after launch?",
            answer: "Yes, we offer flexible maintenance and support packages to ensure your application continues to run smoothly after launch. These can include regular updates, security patches, performance monitoring, and feature enhancements."
        },
        {
            question: "How do you handle project pricing?",
            answer: "We offer both fixed-price and time-and-materials pricing models depending on project needs. For well-defined projects, we typically provide a fixed quote, while more exploratory projects may benefit from a time-and-materials approach. We're transparent about costs from the beginning."
        },
        {
            question: "Can you work with our existing technology stack?",
            answer: "Absolutely! We have experience working with a wide range of technologies and can adapt to your existing stack. We'll evaluate your current setup and provide recommendations for integration or improvements where beneficial."
        }
    ];

    // Icon component
    const Icon = ({ name, className }) => {
        // Material Icons mapping (simplified)
        const icons = {
            code: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            ),
            palette: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
            ),
            smartphone: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
            ),
            shopping_cart: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            ),
            search: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            ),
            lightbulb: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
            ),
            business: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
            ),
            devices: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
                </svg>
            ),
        };

        return icons[name] || null;
    };

    return (
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 px-4 md:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern-bg.png')] opacity-10"></div>
                <div className="container mx-auto relative z-10">
                    <Typography variant="h1" color="white" className="mb-4 text-center">
                        Our Services
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-90 text-center max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your unique business needs.
                        From concept to deployment, we deliver excellence at every step.
                    </Typography>
                    <div className="flex justify-center mt-8">
                        <Button size="lg" color="white" className="text-blue-500 rounded-full px-8 mr-4">
                            Get Started
                        </Button>
                        <Button size="lg" variant="outlined" color="white" className="rounded-full px-8">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white opacity-10 rounded-full"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-white opacity-10 rounded-full"></div>
            </div>

            {/* Services Overview */}
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
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                        <div className="grid grid-cols-1 gap-6">
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
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                1
                            </div>
                            <div className="mb-4 text-blue-500 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
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
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                2
                            </div>
                            <div className="mb-4 text-blue-500 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
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
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                3
                            </div>
                            <div className="mb-4 text-blue-500 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
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
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                4
                            </div>
                            <div className="mb-4 text-blue-500 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
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
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <Typography variant="h3" color="blue-gray" className="mb-4">
                        What Our Clients Say
                    </Typography>
                    <Typography className="text-gray-700 max-w-3xl mx-auto">
                        We've helped businesses of all sizes achieve their digital goals. Here's what some of our clients have to say.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <Card className="overflow-hidden">
                        <CardBody>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Sarah Johnson
                                    </Typography>
                                    <Typography variant="small" color="gray">
                                        CTO, TechFlow Inc.
                                    </Typography>
                                </div>
                            </div>
                            <Typography className="text-gray-700 italic">
                                "Their team delivered an exceptional e-commerce platform that exceeded our expectations. The site is not only visually stunning but also performs brilliantly with our complex inventory system."
                            </Typography>
                            <div className="flex mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-700">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                        </CardBody>
                    </Card>

                    {/* Testimonial 2 */}
                    <Card className="overflow-hidden">
                        <CardBody>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Michael Rodriguez
                                    </Typography>
                                    <Typography variant="small" color="gray">
                                        CEO, HealthConnect
                                    </Typography>
                                </div>
                            </div>
                            <Typography className="text-gray-700 italic">
                                "The healthcare management system they developed has transformed our operations. Patient care has improved dramatically, and our staff can now focus on what matters most instead of paperwork."
                            </Typography>
                            <div className="flex mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-700">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                        </CardBody>
                    </Card>

                    {/* Testimonial 3 */}
                    <Card className="overflow-hidden">
                        <CardBody>
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Emily Chen
                                    </Typography>
                                    <Typography variant="small" color="gray">
                                        Marketing Director, GrowthBrand
                                    </Typography>
                                </div>
                            </div>
                            <Typography className="text-gray-700 italic">
                                "Their UI/UX team redesigned our entire mobile app, resulting in a 45% increase in user engagement and a significant boost in customer satisfaction scores. Truly exceptional work!"
                            </Typography>
                            <div className="flex mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-700">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className="text-center mt-12">
                    <Button color="blue" size="lg" className="rounded-full px-8">
                        Read More Success Stories
                    </Button>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-blue-gray-50 py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <Typography variant="h3" color="blue-gray" className="mb-4">
                            Frequently Asked Questions
                        </Typography>
                        <Typography className="text-gray-700 max-w-3xl mx-auto">
                            Have questions about our services? Find answers to common inquiries below.
                        </Typography>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <Accordion
                                key={index}
                                open={open === index + 1}
                                icon={<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className={`${open === index + 1 ? "rotate-180" : ""} h-5 w-5 transition-transform`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>}
                            >
                                <AccordionHeader onClick={() => handleAccordionOpen(index + 1)} className="text-blue-gray-900 hover:text-blue-500 transition-colors">
                                    {faq.question}
                                </AccordionHeader>
                                <AccordionBody className="text-gray-700">
                                    {faq.answer}
                                </AccordionBody>
                            </Accordion>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Typography className="text-gray-700 mb-4">
                            Still have questions? Contact our team for personalized assistance.
                        </Typography>
                        <Button color="blue" size="lg" className="rounded-full px-8">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/img/pattern-bg.png')] opacity-10"></div>
                    <div className="relative z-10 text-center">
                        <Typography variant="h3" color="white" className="mb-4">
                            Ready to Transform Your Digital Presence?
                        </Typography>
                        <Typography color="white" className="opacity-90 max-w-2xl mx-auto mb-8">
                            Let's collaborate to bring your vision to life. Whether you're starting from scratch or enhancing an existing solution,
                            our team is ready to help you achieve digital excellence.
                        </Typography>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" color="white" className="text-blue-500 rounded-full px-8">
                                Get Started
                            </Button>
                            <Button size="lg" variant="outlined" color="white" className="rounded-full px-8">
                                Schedule a Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
}

// Service Card Component

const ServiceCard = ({ service, isVisible }) => {
    // Simple icon renderer function
    const renderIcon = (iconName) => {
        // You can define a mapping of icon names to SVG elements
        const icons = {
            code: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
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
            lightbulb: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
            ),
            search: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
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
            // Add more icons as needed for all your service types
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
            className={`service-card overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <CardBody>
                <div className="mb-4 text-blue-500">
                    {renderIcon(service.icon)}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {service.title}
                </Typography>
                <Typography className="text-gray-700 mb-4">
                    {service.description}
                </Typography>
                <div className="mb-4">
                    <Typography variant="small" className="text-blue-gray-700 font-semibold mb-2">
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
                <div className="mb-6">
                    <Typography variant="small" className="text-blue-gray-700 font-semibold mb-2">
                        Technologies:
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                            <span key={index} className="bg-blue-gray-50 px-3 py-1 rounded-full text-sm text-blue-gray-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <Link to={`/services/${service.id}`}>
                    <Button fullWidth color="blue" className="flex items-center justify-center gap-2">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
};