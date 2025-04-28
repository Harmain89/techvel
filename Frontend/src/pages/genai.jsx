import React from "react";
import { Footer, PageTitle } from "@/widgets/layout";
import { Button, Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";
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
  { q: "Do we need AI, or is it just a trend?", a: "AI can provide real business value, but it's important to align it with your goals." },
  { q: "What's the difference between machine learning, deep learning, and AI?", a: "AI is the broad field, machine learning is a subset, and deep learning is a subset of machine learning." },
  { q: "Can smaller companies benefit from AI?", a: "Yes, AI can be tailored for businesses of all sizes." },
  { q: "How much data do we need to implement AI solutions?", a: "It depends on the use case, but quality is often more important than quantity." },
  { q: "How do we know if our AI is making good decisions?", a: "Through monitoring, validation, and explainability tools." },
  { q: "Can you integrate AI with our existing systems?", a: "Yes, we specialize in seamless AI integration." },
  { q: "What happens when AI makes a mistake?", a: "We design systems to learn from errors and improve over time." },
  { q: "How do you handle bias in AI systems?", a: "We use best practices to minimize and monitor bias." },
  { q: "What is generative AI?", a: "AI that creates new content, such as text, images, or code." },
  { q: "How secure are AI systems?", a: "We follow industry standards for security and privacy." },
];

export default function GenAi() {
  const [open, setOpen] = React.useState(-1);
  const handleOpen = (idx) => setOpen(open === idx ? -1 : idx);

  return (
    <div className="bg-white min-h-screen text-blue-gray-900">
      {/* Hero Section */}
      <div className="bg-black pt-20 pb-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto mt-16">
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Gen AI & Artificial Intelligence
          </Typography>
          <Typography className="mb-6 text-lg opacity-90 text-white">
            At Techvel, we integrate state-of-the-art AI and language model technologies to revolutionize your business processes. Our intelligent solutions drive automation, deliver deep insights, and empower you to make smarter decisions in an increasingly digital landscape.
          </Typography>
          <Button className="bg-[#f92628] text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-[#c81d1d] transition">
            Let's do some magic with AI
          </Button>
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
            <div key={i} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition border border-gray-200 flex flex-col items-start">
              <span className="text-3xl mb-4">{s.icon}</span>
              <Typography variant="h6" className="mb-2 text-blue-gray-900 font-bold">{s.title}</Typography>
              <Typography className="text-gray-700">{s.desc}</Typography>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
    

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto py-12 px-4 bg-white">
        <Typography variant="h4" className="text-center mb-8 font-bold text-blue-gray-900">
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, idx) => (
          <Accordion key={idx} open={open === idx} icon={<span className={`transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>}>
            <AccordionHeader onClick={() => handleOpen(idx)} className="text-blue-gray-900 hover:text-[#f92628] transition-colors">
              {faq.q}
            </AccordionHeader>
            <AccordionBody className="text-gray-700">
              {faq.a}
            </AccordionBody>
          </Accordion>
        ))}
      </div>

      <div className="bg-white">
        <Footer/>
      </div>
    </div>
  );
} 