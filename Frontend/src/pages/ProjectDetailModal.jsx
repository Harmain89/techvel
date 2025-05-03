// ProjectDetailModal.jsx
import { Dialog } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectDetailModal({ open, onClose, project }) {
    if (!project) return null;

    return (
        <Dialog open={open} handler={onClose} size="xl" className="bg-white rounded-lg p-4 max-w-4xl w-full overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <button onClick={onClose} className="text-red-500 text-lg font-bold">X</button>
            </div>

            {/* Image Slider */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-xl overflow-hidden mb-6"
            >
                {(project.images || [project.image]).map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Slide ${index}`} className="w-full h-80 object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="text-gray-800 text-base mb-4">{project.description}</p>

            {/* Long Description */}
            {project.longDescription && (
                <div className="text-gray-700 mb-6 space-y-4">
                    {project.longDescription.split("\n").map((para, idx) => (
                        <p key={idx} className="leading-relaxed">{para}</p>
                    ))}
                </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Project Link */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 font-medium hover:underline">
                Visit Project &rarr;
            </a>
        </Dialog>
    );
}
