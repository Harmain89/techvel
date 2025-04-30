import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";

// Updated Services component with swipe indicator
export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("web-development");
  const [visibleCards, setVisibleCards] = useState({});
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const categories = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-apps", label: "Mobile Apps" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "digital-marketing", label: "Digital Marketing" }
  ];

  const services = [
    { id: 1, category: "web-development", title: "Custom Web Applications", icon: "CodeIcon", 
      description: "Tailor-made web solutions designed for your specific business needs." },
    { id: 2, category: "web-development", title: "E-commerce Development", icon: "ShoppingCartIcon", 
      description: "Powerful online stores with seamless payment processing." },
    { id: 3, category: "web-development", title: "CMS Solutions", icon: "LayoutIcon", 
      description: "Easily manageable content systems built on modern frameworks." },
    { id: 4, category: "mobile-apps", title: "iOS App Development", icon: "AppleIcon", 
      description: "Native iOS applications with stunning design and performance." },
    { id: 5, category: "mobile-apps", title: "Android App Development", icon: "AndroidIcon", 
      description: "Feature-rich Android apps for the world's most popular mobile OS." },
    { id: 6, category: "mobile-apps", title: "Cross-Platform Apps", icon: "SmartphoneIcon", 
      description: "Build once, deploy everywhere with React Native and Flutter." },
    { id: 7, category: "ui-ux-design", title: "User Interface Design", icon: "PaletteIcon", 
      description: "Visually appealing interfaces that capture your brand identity." },
    { id: 8, category: "ui-ux-design", title: "User Experience Design", icon: "UsersIcon", 
      description: "Intuitive experiences that delight users and drive engagement." },
    { id: 9, category: "ui-ux-design", title: "Design Systems", icon: "GridIcon", 
      description: "Consistent component libraries to scale your digital products." },
    { id: 10, category: "digital-marketing", title: "SEO Optimization", icon: "SearchIcon", 
      description: "Improve visibility and drive organic traffic to your website." },
    { id: 11, category: "digital-marketing", title: "Content Marketing", icon: "FileTextIcon", 
      description: "Engaging content strategies that connect with your target audience." },
    { id: 12, category: "digital-marketing", title: "Social Media Marketing", icon: "ShareIcon", 
      description: "Build brand presence across relevant social platforms." }
  ];

  const handleTabChange = (value) => {
    setActiveTab(value);
    setShowSwipeIndicator(true);
    setHasScrolled(false);
  };

  // Detect scroll on the tab content to hide the indicator
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        setTimeout(() => {
          setShowSwipeIndicator(false);
        }, 1000);
      }
    };

    const tabPanels = document.querySelectorAll('.overflow-x-auto');
    tabPanels.forEach(panel => {
      panel.addEventListener('scroll', handleScroll);
    });

    // Auto-hide the indicator after 5 seconds even if no scroll
    const timer = setTimeout(() => {
      setShowSwipeIndicator(false);
    }, 5000);

    return () => {
      tabPanels.forEach(panel => {
        panel.removeEventListener('scroll', handleScroll);
      });
      clearTimeout(timer);
    };
  }, [activeTab, hasScrolled]);

  // Reset showSwipeIndicator when tab changes
  useEffect(() => {
    // Observer for checking visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleCards((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    // Observe all service cards
    document.querySelectorAll('[id^="service-"]').forEach((card) => {
      observer.observe(card);
    });

    return () => {
      document.querySelectorAll('[id^="service-"]').forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [activeTab]);

  // SwipeIndicator Animation Component
  const SwipeIndicator = () => {
    return (
      <div className={`fixed bottom-8 right-8 flex items-center bg-white/90 backdrop-blur-sm text-gray-800 rounded-full px-4 py-2 shadow-lg transition-all duration-500 ${showSwipeIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Typography className="text-sm font-medium mr-2">Swipe for more</Typography>
        <div className="animate-pulse-x">
          <ChevronRight size={18} />
        </div>
      </div>
    );
  };

  // ServiceCard Component
  const ServiceCard = ({ service, isVisible }) => {
    return (
      <div
        id={`service-${service.id}`}
        className={`bg-white rounded-xl shadow-md p-6 transition-all duration-500 h-full flex flex-col ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-6">
          {/* Placeholder for icon */}
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-3">
          {service.title}
        </Typography>
        <Typography className="text-gray-600 flex-grow">
          {service.description}
        </Typography>
        <div className="mt-6">
          <button className="text-blue-500 font-medium flex items-center hover:text-blue-700 transition-colors">
            Learn more
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    );
  };

  return (
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
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
        <div className="block md:hidden relative">
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
                  <div className="flex flex-row overflow-x-auto gap-x-4 mt-6 pb-4 snap-x snap-mandatory">
                    {services
                      .filter(service => service.category === value)
                      .map((service) => (
                        <div key={service.id} className="min-w-[90vw] max-w-xs snap-center">
                          <ServiceCard
                            service={service}
                            isVisible={!!visibleCards[`service-${service.id}`]}
                          />
                        </div>
                      ))}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          <SwipeIndicator />
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes pulse-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
        .animate-pulse-x {
          animation: pulse-x 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}