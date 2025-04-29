import React, { useRef } from "react";
import { Footer, PageTitle } from "@/widgets/layout";
import { Button, Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const webDevFeatures = [
  "Responsive Design",
  "Custom CMS Integration",
  "E-commerce Solutions",
  "API Development",
];

const webDevTechnologies = [
  "React",
  "Next.js",
  "Node.js",
  "Laravel",
];

const faqs = [
  { question: "What is custom web development?", answer: "Custom web development means building web applications tailored to your unique business needs, ensuring scalability, performance, and a great user experience." },
  { question: "Which technologies do you use?", answer: "We use modern technologies like React, Next.js, Node.js, and Laravel to deliver robust and scalable solutions." },
  { question: "Can you integrate with our existing systems?", answer: "Absolutely! We specialize in seamless integration with your current tools and platforms." },
  { question: "Do you offer ongoing support?", answer: "Yes, we provide maintenance and support packages to keep your application running smoothly after launch." },
  { question: "How do I get started?", answer: "Just contact us for a quick discussion and we'll guide you through the process!" },
];

export default function WebDev() {
  const [open, setOpen] = React.useState(0);
  const contactRef = useRef(null);
  const navigate = useNavigate();

  const handleAccordionOpen = (value) => setOpen(open === value ? 0 : value);

  const handleContactNavigate = () => {
    window.location.replace('/contact');
  };

  return (
    <div className="bg-white min-h-screen text-blue-gray-900">
      {/* Hero Section */}
      <div className="bg-profile-background top-0 h-full w-full bg-[url('/img/different-hero-image.png')] bg-cover bg-center scale-105 py-24 px-4 md:px-8">
        <div className="container mx-auto mt-20">
          <Typography variant="h1" color="white" className="mb-4 text-center font-black">
            Custom Web Development
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80 text-center max-w-2xl mx-auto">
            We build tailored web applications that perfectly align with your business needs, focusing on scalability, performance, and user experience.
          </Typography>
        </div>
      </div>

      {/* Features & Technologies */}
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-gray-100 rounded-xl p-8 shadow border border-gray-200">
          <Typography variant="h4" className="mb-4 font-bold text-blue-gray-900 text-center">
            Key Features
          </Typography>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            {webDevFeatures.map((feature, i) => (
              <li key={i} className="mb-2">{feature}</li>
            ))}
          </ul>
          <Typography variant="h5" className="mb-2 font-bold text-blue-gray-900">
            Technologies
          </Typography>
          <div className="flex flex-wrap gap-2 mb-2">
            {webDevTechnologies.map((tech, i) => (
              <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm text-black">
                {tech}
              </span>
            ))}
          </div>
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
              Have questions about web development? Find answers below or contact us for more details.
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
              Ready to start your project? Contact our team for a quick discussion.
            </Typography>
            <div className="flex justify-center w-full">
              <div className="relative group">
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] shadow-[0_0_16px_4px_rgba(249,38,40,0.4)]">
                  <button
                    type="button"
                    className="bg-black text-white rounded-xl px-8 py-3 text-lg font-medium min-w-[200px] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#C41E3A] focus:ring-offset-2"
                    onClick={handleContactNavigate}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <Footer/>
      </div>
    </div>
  );
} 