import React, { useRef, useEffect } from "react";
import { Footer, PageTitle } from "@/widgets/layout";
import { Button, Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import FooterWhite from "@/widgets/layout/FooterWhite";

const genAiServices = [
  { title: "AI Strategy & Consulting", desc: "Develop a tailored AI strategy that aligns with your unique business goals.", icon: "strategy" },
  { title: "Custom AI Model Development", desc: "Build specialized AI models designed to solve your specific challenges.", icon: "model" },
  { title: "Natural Language Processing", desc: "Enhance customer interactions and automate content analysis using advanced NLP.", icon: "nlp" },
  { title: "Machine Learning Solutions", desc: "Implement algorithms that drive intelligent automation and predictive analytics.", icon: "ml" },
  { title: "AI Integration & Deployment", desc: "Seamlessly embed AI capabilities into your existing systems for immediate impact.", icon: "integration" },
  { title: "Data-Driven Decision Support", desc: "Leverage AI insights to guide your strategic business decisions.", icon: "decision" },
  { title: "AI Software Development", desc: "Develop comprehensive AI-powered software solutions tailored to your needs.", icon: "software" },
  { title: "Generative AI", desc: "Utilize cutting-edge AI to generate creative content and innovative solutions.", icon: "generative" },
  { title: "Computer Vision", desc: "Enable machines to interpret and act on visual data for enhanced automation.", icon: "vision" },
];

const iconColor = "#C41E3A";
const iconMap = {
  strategy: (
    <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40"><path d="M10 30c0-7 10-7 10-14"/><circle cx="20" cy="10" r="4"/></svg>
  ),
  model: (
    <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40"><circle cx="20" cy="20" r="8"/><path d="M20 12v-4M20 28v4M12 20h-4M28 20h4"/></svg>
  ),
  nlp: (
    <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" rx="4"/><path d="M16 16h8M16 20h8M16 24h4"/></svg>
  ),
  ml: (
    <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40"><rect x="8" y="28" width="6" height="8" rx="2"/><rect x="17" y="20" width="6" height="16" rx="2"/><rect x="26" y="12" width="6" height="24" rx="2"/></svg>
  ),
  integration: (
    <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40"><rect x="8" y="8" width="10" height="10" rx="2"/><rect x="22" y="22" width="10" height="10" rx="2"/><path d="M18 13h4M13 18v4M22 22l-4-4"/></svg>
  ),
  decision: (
    <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" rx="4"/><path d="M20 16v8M16 20h8"/></svg>
  ),
  software: (
    <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="4"/><path d="M16 16h8M16 20h8M16 24h8"/></svg>
  ),
  generative: (
    <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40"><circle cx="20" cy="20" r="8"/><path d="M20 12v-4M20 28v4M12 20h-4M28 20h4"/><circle cx="20" cy="20" r="2"/></svg>
  ),
  vision: (
    <svg width="40" height="40" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="12" ry="8"/><circle cx="20" cy="20" r="4"/></svg>
  ),
};

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
    navigate('/contact');
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  useEffect(() => {
    document.title = "Gen AI | Techvel Solutions";
  }, []);

  return (
    <div className="bg-white min-h-screen text-blue-gray-900">
      {/* Hero Section */}
      <div className="bg-profile-background top-0 h-full w-full bg-[url('/img/different-hero-image.png')] bg-cover bg-center scale-105 py-24 px-4 md:px-8">
        <div className="container mx-auto mt-20">
          <Typography variant="h1" color="white" className="mb-4 text-center">
            Gen AI & Artificial Intelligence
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80 text-center max-w-2xl mx-auto">
            At Techvel, we integrate state-of-the-art AI and language model technologies to revolutionize your business processes. Our intelligent solutions drive automation, deliver deep insights.
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
              <span className="mb-4 flex items-center justify-center">{iconMap[s.icon]}</span>
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
                <AccordionHeader onClick={() => handleAccordionOpen(index + 1)} className="text-blue-gray-900 hover:text-[#C41E3A] transition-colors">
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