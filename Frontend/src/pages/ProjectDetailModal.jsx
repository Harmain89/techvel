// ProjectDetailModal.jsx
import { Dialog } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Clock, Globe, Github, ExternalLink, Calendar, Users, Tag, Award } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function ProjectDetailModal({ open, onClose, project }) {
    if (!project) return null;

    return (
        <Dialog 
            open={open} 
            handler={onClose} 
            size="xl" 
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-0 max-w-4xl w-full overflow-hidden max-h-[90vh]"
        >
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
                <button 
                    onClick={onClose} 
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all rounded-full p-2"
                >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="overflow-y-auto p-6 max-h-[calc(90vh-80px)]">
                {/* Image Slider with enhanced effects */}
                <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        navigation
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        effect="fade"
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        className="rounded-xl overflow-hidden"
                    >
                        {(project.images || [project.image]).map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative">
                                    <img 
                                        src={img} 
                                        alt={`${project.title} - Image ${index + 1}`} 
                                        className="w-full h-96 object-cover" 
                                    />
                                    {project.imageDescriptions && project.imageDescriptions[index] && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-sm">
                                            {project.imageDescriptions[index]}
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Left column - Project Overview */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Summary */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                <Tag className="mr-2 text-blue-600 h-5 w-5" />
                                Project Overview
                            </h3>
                            <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
                        </div>

                        {/* Detailed Description */}
                        {project.longDescription && (
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Detailed Description</h3>
                                <div className="text-gray-700 space-y-4">
                                    {project.longDescription.split("\n").map((para, idx) => (
                                        <p key={idx} className="leading-relaxed">{para}</p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Features List */}
                        {project.features && (
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <Award className="mr-2 text-blue-600 h-5 w-5" />
                                    Key Features
                                </h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="text-gray-700">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Right column - Project Details */}
                    <div className="space-y-6">
                        {/* Quick Info */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Details</h3>
                            
                            <div className="space-y-4">
                                {/* Timeline */}
                                {project.timeline && (
                                    <div className="flex items-start">
                                        <Calendar className="mr-3 text-blue-600 h-5 w-5 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-gray-700">Timeline</h4>
                                            <p className="text-gray-600">{project.timeline}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Duration */}
                                {project.duration && (
                                    <div className="flex items-start">
                                        <Clock className="mr-3 text-blue-600 h-5 w-5 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-gray-700">Duration</h4>
                                            <p className="text-gray-600">{project.duration}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Team */}
                                {project.team && (
                                    <div className="flex items-start">
                                        <Users className="mr-3 text-blue-600 h-5 w-5 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-gray-700">Team</h4>
                                            <p className="text-gray-600">{project.team}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Client */}
                                {project.client && (
                                    <div className="flex items-start">
                                        <Globe className="mr-3 text-blue-600 h-5 w-5 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium text-gray-700">Client</h4>
                                            <p className="text-gray-600">{project.client}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Links</h3>
                            
                            <div className="space-y-3">
                                {/* Live Project Link */}
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                                    >
                                        <ExternalLink className="mr-2 h-5 w-5" />
                                        Live Demo
                                    </a>
                                )}
                                
                                {/* GitHub Repository */}
                                {project.githubLink && (
                                    <a 
                                        href={project.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                                    >
                                        <Github className="mr-2 h-5 w-5" />
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Call to Action */}
                {project.link && (
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-center text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-3">Ready to explore this project?</h3>
                        <p className="mb-4 opacity-90">Check out the live demo to see all features in action</p>
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md"
                        >
                            Visit Project
                        </a>
                    </div>
                )}
            </div>
        </Dialog>
    );
}