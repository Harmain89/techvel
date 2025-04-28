import React, { useRef } from "react";
import { Footer, PageTitle } from "@/widgets/layout";
import { Button, Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import FooterWhite from "@/widgets/layout/FooterWhite";

const genAiServices = [
  { title: "AI Strategy & Consulting", desc: "Tailored AI strategy for your business goals.", icon: "🤖" },
  { title: "Custom AI Model Development", desc: "Specialized AI models for unique challenges.", icon: "🛠️" },
  { title: "Natural Language Processing", desc: "Advanced NLP for smarter interactions.", icon: "🗣️" },
  { title: "Machine Learning Solutions", desc: "Automation and predictive analytics.", icon: "📈" },
  { title: "AI Integration & Deployment", desc: "Seamless AI in your existing systems.", icon: "🔗" },
  { title: "Data-Driven Decision Support", desc: "AI insights for strategic decisions.", icon: "📊" },
  { title: "AI Software Development", desc: "Custom AI-powered software solutions.", icon: "💻" },
  { title: "Generative AI", desc: "Creative content and innovative solutions.", icon: "✨" },
  { title: "Computer Vision", desc: "Visual data analysis and automation.", icon: "👁️" },
  { title: "Edge AI & Quantization", desc: "Real-time AI at the edge.", icon: "🌐" },
];

const faqs = [
  { question: "Do we need AI, or is it just a trend?", answer: "AI can provide real business value, but it's important to align it with your goals." },
  { question: "What's the difference between machine learning, deep learning, and AI?", answer: "AI is the broad field, machine learning is a subset, and deep learning is a subset of machine learning." },
  { question: "Can smaller companies benefit from AI?", answer: "Yes, AI can be tailored for businesses of all sizes." },
  { question: "How much data do we need to implement AI solutions?", answer: "It depends on the use case, but quality is often more important than quantity." },
  { question: "How do we know if our AI is making good decisions?", answer: "Through monitoring, validation, and explainability tools." },
  { question: "Can you integrate AI with our existing systems?", answer: "Yes, we specialize in seamless AI integration." },
  { question: "What happens when AI makes a mistake?", answer: "We design systems to learn from errors and improve over time." },
  { question: "How do you handle bias in AI systems?", answer: "We use best practices to minimize and monitor bias." },
  { question: "What is generative AI?", answer: "AI that creates new content, such as text, images, or code." },
  { question: "How secure are AI systems?", answer: "We follow industry standards for security and privacy." },
];

export default function GenAi() {
  const [open, setOpen] = React.useState(0);
  const contactRef = useRef(null);
  const navigate = useNavigate();
  
  const handleAccordionOpen = (value) => setOpen(open === value ? 0 : value);

  const handleContactNavigate = () => {
    window.location.replace('/contact#contact-form-section');
  };

  return (
    <div className="bg-white min-h-screen text-blue-gray-900">
      {/* Hero Section */}
      <div className="bg-profile-background top-0 h-full w-full bg-[url('/img/different-hero-image.png')] bg-cover bg-center scale-105 py-24 px-4 md:px-8">
        <div className="container mx-auto mt-20">
          <Typography variant="h1" color="white" className="mb-4 text-center">
            Gen AI & Artificial Intelligence
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80 text-center max-w-2xl mx-auto">
            At Techvel, we integrate state-of-the-art AI and language model technologies to revolutionize your business processes. Our intelligent solutions drive automation, deliver deep insights, and empower you to make smarter decisions in an increasingly digital landscape.
          </Typography>
        </div>
      </div>

      {/* Icon Row */}
   
      {/* Services Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <Typography variant="h4" className="text-center mb-8 font-bold text-blue-gray-900">
          Services we offer in
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {genAiServices.map((s, i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition border border-gray-200 flex flex-col items-center text-center">
              <span className="text-3xl mb-4">{s.icon}</span>
              <Typography variant="h6" className="mb-2 text-blue-gray-900 font-bold">{s.title}</Typography>
              <Typography className="text-gray-700">{s.desc}</Typography>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
    

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
            <div className="flex justify-center w-full">
              <div className="relative group">
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] shadow-[0_0_16px_4px_rgba(249,38,40,0.4)]">
                  <button
                    type="button"
                    className="bg-black text-white rounded-xl px-8 py-3 text-lg font-medium min-w-[200px] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f92628] focus:ring-offset-2"
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