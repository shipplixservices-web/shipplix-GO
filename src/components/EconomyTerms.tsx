import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  ShieldCheck, 
  Scale, 
  AlertTriangle, 
  Coins, 
  Info, 
  HelpCircle, 
  ChevronDown, 
  FileText, 
  Download, 
  CheckCircle2, 
  Plane, 
  Ship, 
  FileCheck, 
  UserCheck, 
  Settings,
  Workflow,
  Globe,
  Ban,
  Package,
  Box,
  Search,
  Printer,
  ExternalLink,
  Truck,
  Calendar,
  Building2,
  Check,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  as: Component = 'button',
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'yellow'; 
  className?: string;
  as?: any;
  [key: string]: any;
}) => {
  const base = "px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-center text-sm cursor-pointer";
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-950 shadow-md",
    yellow: "bg-shipplix-yellow text-blue-950 hover:bg-amber-400 shadow-md font-black",
    outline: "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    ghost: "text-white/90 hover:text-white hover:bg-white/10"
  };
  
  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

interface SectionProps {
  id: string;
  number?: string;
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, number, title, icon, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 mb-16 border-b border-slate-200/80 pb-12">
    <div className="flex items-start gap-3.5 mb-6">
      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shadow-sm flex-shrink-0 mt-0.5 border border-blue-100">
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          {number && (
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Section {number}
            </span>
          )}
        </div>
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs md:text-sm font-semibold text-slate-500 mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
    <div className="text-slate-600 font-medium leading-relaxed text-sm md:text-base space-y-4">
      {children}
    </div>
  </section>
);

export default function EconomyTerms({ onBack }: { onBack: () => void }) {
  // Set SEO Meta tags on mount
  useEffect(() => {
    document.title = "Shipplix Economy Cargo Terms & Conditions | Official Shipping Policy";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Official Shipplix Economy Cargo Terms & Conditions. Learn about our 9-14 business day estimated delivery, separate box identification, consolidated air transport, customer responsibilities, claims process, and goodwill compensation policy.');
    
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState('notice');
  const [searchQuery, setSearchQuery] = useState('');
  const [openExceptions, setOpenExceptions] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sections = [
    { id: 'notice', title: '1. Customer Notice (Before You Book)', icon: <Info size={18} /> },
    { id: 'what-is-economy', title: '2. What is Economy Cargo?', icon: <Package size={18} /> },
    { id: 'delivery-timeframe', title: '3. Delivery Timeframe (9–14 Days)', icon: <Clock size={18} /> },
    { id: 'when-we-ship', title: '4. When Do We Ship? (Friday / Wed)', icon: <Calendar size={18} /> },
    { id: 'shipping-journey', title: '5. Step-by-Step Shipping Journey', icon: <Workflow size={18} /> },
    { id: 'what-is-included', title: "6. What's Included With Economy", icon: <CheckCircle2 size={18} /> },
    { id: 'customer-responsibilities', title: '7. Customer Responsibilities', icon: <UserCheck size={18} /> },
    { id: 'booking-confirmation', title: '8. Booking Confirmation', icon: <FileCheck size={18} /> },
    { id: 'incomplete-booking', title: '9. If Booking Is Incomplete', icon: <AlertTriangle size={18} /> },
    { id: 'customs-and-charges', title: '10. Customs, Duties & Taxes', icon: <Scale size={18} /> },
    { id: 'delays-and-exceptions', title: '11. What If There Is a Delay?', icon: <Clock size={18} /> },
    { id: 'claims-process', title: '12. Claims Review Process', icon: <FileText size={18} /> },
    { id: 'loss-compensation', title: '13. Loss & Goodwill Resolution', icon: <Coins size={18} /> },
    { id: 'compensation-exclusions', title: '14. When Compensation Does Not Apply', icon: <Ban size={18} /> },
    { id: 'third-party-providers', title: '15. Third-Party Service Providers', icon: <Globe size={18} /> },
    { id: 'prohibited-items', title: '16. Prohibited & Restricted Goods', icon: <AlertTriangle size={18} /> },
    { id: 'customer-acknowledgement', title: '17. Customer Acknowledgement', icon: <ShieldCheck size={18} /> },
    { id: 'why-choose-economy', title: '18. Why Choose Economy Cargo?', icon: <Award size={18} /> },
    { id: 'faqs', title: '19. Frequently Asked Questions', icon: <HelpCircle size={18} /> },
  ];

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections.filter(s => s.title.toLowerCase().includes(q) || s.id.toLowerCase().includes(q));
  }, [searchQuery]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const WHATSAPP_BASE = "https://wa.me/2349168273513?text=";
  const URL_BOOK_ECONOMY = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to book an Economy Cargo shipment and confirm my agreement with the Terms & Conditions.")}`;
  const URL_DOWNLOAD_GUIDE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I'd like to request the Shipplix Economy Cargo Guide PDF.")}`;

  const faqs = [
    {
      q: "What is the standard delivery timeframe for Economy Cargo?",
      a: "Most Shipplix Economy Cargo shipments arrive within our standard estimated timeframe of 9–14 business days from the applicable flight shipping date. This is an estimate provided to help customers plan their shipments realistically."
    },
    {
      q: "What happens if an unexpected international delay occurs?",
      a: "International freight involves commercial airlines, customs screening, security inspections, and regulatory agencies. In exceptional circumstances outside Shipplix's reasonable control, delivery may extend up to 19 business days. This 19-business-day window is an exceptional delay provision and is not the standard delivery timeframe."
    },
    {
      q: "Are my products mixed with other customers' items inside the same box?",
      a: "No, never. Each customer's shipment is packaged, weighed, sealed, and identified separately with its own unique box/shipment tracking identifier (e.g., Box SPX001 for Customer A, Box SPX002 for Customer B). Consolidation only means that multiple separate customer boxes travel together in the airline cargo hold to share airfreight capacity."
    },
    {
      q: "On what days does Shipplix dispatch Economy Cargo flights?",
      a: "Economy Cargo shipments leave mostly on Fridays and sometimes on Wednesdays, depending on cargo readiness, airline schedules, and customs manifesting cutoffs."
    },
    {
      q: "Does Economy Cargo include door-to-door delivery?",
      a: "Yes. Once the shipment arrives in the destination country (USA, UK, Canada, Europe) and clears local customs, it is handed over to our local delivery partners for final delivery straight to the receiver's address or designated pickup point."
    },
    {
      q: "How does the claims process and goodwill compensation work?",
      a: "If a package is verified as lost while under Shipplix's direct handling and responsibility, Shipplix provides a goodwill resolution capped at a maximum of ₦50,000 (Fifty Thousand Naira) per affected shipment. This is a fixed goodwill resolution and is not calculated based on declared value, market value, purchase price, or sentimental value, nor is it an insurance policy."
    },
    {
      q: "Are customs duties and destination import taxes included in the shipping fee?",
      a: "Our standard freight fee covers export preparation, documentation, airline transit, customs clearance support, and final door delivery. However, any statutory import duties, inspection fees, VAT, permits, or terminal storage charges imposed by the destination government remain the responsibility of the cargo receiver or owner, unless expressly agreed otherwise in writing."
    },
    {
      q: "What items are prohibited from being shipped via Economy Cargo?",
      a: "Prohibited items include illegal narcotics, flammable/hazardous goods, loose lithium batteries without UN certification, firearms/weapons, undeclared pharmaceuticals, counterfeit goods, currencies, and undeclared contents. All items must be accurately declared."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-shipplix-yellow selection:text-blue-950">
      {/* Top Breadcrumb & Return bar */}
      <div className="bg-slate-900 text-slate-300 py-3 border-b border-slate-800 text-xs">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 hover:text-white transition-colors font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft size={14} className="text-shipplix-yellow" />
            <span>Return to Homepage</span>
          </button>
          
          <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-400">
            <span className="hidden sm:inline">Legal Business Name: <strong className="text-slate-200">Shipplix Value Tech Services</strong></span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Version: <strong className="text-shipplix-yellow">2.4 (October 2026)</strong></span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="relative pt-16 pb-16 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden border-b border-blue-800">
        {/* Subtle background graphics */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-shipplix-yellow/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="grid grid-cols-12 h-full">
            {Array.from({length: 48}).map((_, i) => (
              <div key={i} className="border-r border-b border-white/5 aspect-square"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full mb-6 text-shipplix-yellow text-[11px] uppercase font-black tracking-widest backdrop-blur-sm">
            <FileText size={14} />
            Official Policy Document
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-3">
            SHIPPLIX ECONOMY CARGO
          </h1>

          <div className="inline-block bg-shipplix-yellow/10 border border-shipplix-yellow/30 px-4 py-1.5 rounded-full mb-6">
            <p className="text-shipplix-yellow font-black uppercase text-xs md:text-sm tracking-wider">
              Affordable • Reliable • Ideal for Non-Urgent Shipments
            </p>
          </div>

          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-medium mb-8 leading-relaxed">
            A structured international shipping service designed to help you move your cargo efficiently while keeping shipping costs lower.
          </p>
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto bg-white/5 border border-white/15 p-4 rounded-2xl backdrop-blur-md text-left">
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Estimated Delivery</span>
              <span className="text-sm md:text-base font-black text-shipplix-yellow">9–14 Business Days</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Flight Dispatch</span>
              <span className="text-sm md:text-base font-black text-white">Fridays &amp; Wed</span>
            </div>
            <div className="border-r border-white/10 pr-2">
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Packaging Model</span>
              <span className="text-sm md:text-base font-black text-white">Separate Boxes</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Final Delivery</span>
              <span className="text-sm md:text-base font-black text-white">Doorstep Delivery</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Button 
              as="a" 
              href={URL_BOOK_ECONOMY} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="yellow" 
              className="text-xs uppercase tracking-wider py-3.5 px-6"
            >
              Book Economy Shipment
              <ArrowRight size={14} />
            </Button>
            <Button 
              as="a" 
              href={URL_DOWNLOAD_GUIDE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="ghost" 
              className="text-xs uppercase tracking-wider py-3.5 px-6 border border-white/20"
            >
              Download PDF Guide
              <Download size={14} />
            </Button>
            <button
              onClick={() => window.print()}
              className="px-4 py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 border border-white/10 flex items-center gap-2 cursor-pointer"
            >
              <Printer size={14} />
              Print Page
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Left Column: Sticky Navigation Table of Contents */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Document Sections
                </h3>
                <span className="text-[10px] font-bold text-slate-400">19 Topics</span>
              </div>

              {/* Search filter for TOC */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:bg-white font-medium"
                />
              </div>

              <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                {filteredSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleScrollTo(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      activeSection === section.id 
                        ? 'bg-blue-900 text-white shadow-sm font-black' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span className="opacity-80 flex-shrink-0">{section.icon}</span>
                    <span className="truncate">{section.title}</span>
                  </button>
                ))}
              </nav>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={URL_BOOK_ECONOMY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-shipplix-yellow/20 hover:bg-shipplix-yellow/30 text-blue-950 border border-shipplix-yellow/40 rounded-xl p-3 flex items-center justify-between text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Book Economy Cargo</span>
                  <ArrowRight size={15} className="text-blue-900" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Substantive Terms & Conditions */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm relative overflow-hidden">
              
              {/* Background decorative watermarks */}
              <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none select-none">
                <Plane size={320} />
              </div>
              <div className="absolute bottom-10 left-10 opacity-[0.02] pointer-events-none select-none">
                <Ship size={320} />
              </div>

              {/* SECTION 1: CUSTOMER NOTICE */}
              <Section 
                id="notice" 
                number="01" 
                title="Customer Notice: Before You Book" 
                subtitle="Important orientation for a smooth international shipping experience"
                icon={<Info size={22} className="text-blue-900" />}
              >
                <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 md:p-7 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <FileCheck size={20} className="text-shipplix-yellow" />
                    </div>
                    <div>
                      <h4 className="text-base font-black uppercase text-blue-950 tracking-tight mb-2">
                        Before You Book
                      </h4>
                      <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed mb-3">
                        Please take a moment to review the information below. These Terms explain how Shipplix Economy Cargo works, what is included, your responsibilities as the customer, delivery expectations, customs-related charges, and our claims process.
                      </p>
                      <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed">
                        When you complete your shipment booking and accept these Terms &amp; Conditions, you confirm that you have had access to and reviewed the applicable terms.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-500 font-semibold italic mt-3">
                  Our objective is maximum transparency with minimum unnecessary friction. We believe you deserve complete clarity on how your freight moves across global borders.
                </p>
              </Section>

              {/* SECTION 2: WHAT IS SHIPPLIX ECONOMY CARGO? */}
              <Section 
                id="what-is-economy" 
                number="02" 
                title="What Is Shipplix Economy Cargo?" 
                subtitle="Affordable international shipping with dedicated, separate box identification"
                icon={<Package size={22} className="text-blue-900" />}
              >
                <p>
                  Shipplix Economy Cargo is an affordable international shipping option designed for customers who want to move cargo internationally while keeping shipping costs lower. It is particularly suitable for customers whose shipments are not urgently time-sensitive.
                </p>
                <p>
                  Shipplix may use a consolidated transportation model. Under this model, each customer’s shipment is:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  {[
                    { label: "Packaged Separately", desc: "Your items are sealed in your own dedicated, robust boxes or cartons." },
                    { label: "Identified Separately", desc: "Each box carries its own distinct tracking label and customer identifier." },
                    { label: "Assigned ID Details", desc: "Unique shipment/box identification numbers link directly to your receiver." },
                    { label: "Individually Identifiable", desc: "Your cargo remains individually traceable throughout the entire journey." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-black">
                        ✓
                      </div>
                      <div>
                        <h5 className="font-black uppercase text-xs text-slate-900">{item.label}</h5>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>
                  Multiple separately identified customer shipments travelling to the same destination may be transported together in the aircraft cargo hold.
                </p>

                {/* Important Visual Distinction Card */}
                <div className="my-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-amber-900">
                    <ShieldCheck size={20} className="text-amber-600" />
                    <h4 className="font-black uppercase text-sm tracking-tight">
                      Crucial Operational Rule:
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm font-black text-slate-900 mb-4 uppercase tracking-wide">
                    Consolidated transportation does not mean customers’ products are mixed together inside one box.
                  </p>
                  
                  <div className="bg-white/80 rounded-xl p-4 border border-amber-200">
                    <p className="text-xs font-bold text-slate-600 mb-3 uppercase tracking-wider">
                      Simple Everyday Example:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <span className="block text-[10px] font-black uppercase text-blue-900">Customer A</span>
                        <span className="block text-xs font-mono font-black text-amber-600 my-1">Box SPX001</span>
                        <span className="block text-xs font-bold text-slate-700">Egusi</span>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <span className="block text-[10px] font-black uppercase text-blue-900">Customer B</span>
                        <span className="block text-xs font-mono font-black text-amber-600 my-1">Box SPX002</span>
                        <span className="block text-xs font-bold text-slate-700">Ogbono</span>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <span className="block text-[10px] font-black uppercase text-blue-900">Customer C</span>
                        <span className="block text-xs font-mono font-black text-amber-600 my-1">Box SPX003</span>
                        <span className="block text-xs font-bold text-slate-700">Ankara</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 font-semibold mt-3 text-center">
                      These remain three separate customer packages with individual sealed boxes. They are not opened or combined, but travel together as part of one consolidated flight consignment to share airfreight costs.
                    </p>
                  </div>
                </div>
              </Section>

              {/* SECTION 3: DELIVERY TIMEFRAME */}
              <Section 
                id="delivery-timeframe" 
                number="03" 
                title="Delivery Timeframe" 
                subtitle="Clear delivery expectations designed for seamless planning"
                icon={<Clock size={22} className="text-blue-900" />}
              >
                {/* Hero Message Box: 9-14 Business Days */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden mb-6">
                  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-shipplix-yellow text-blue-950 font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                        <Truck size={14} />
                        Standard Service Expectation
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                        Estimated Delivery: <span className="text-shipplix-yellow">9–14 Business Days</span>
                      </h3>
                      <p className="text-xs md:text-sm text-slate-200 font-medium mt-2 max-w-xl">
                        Calculated from the applicable shipping or dispatch date once the flight departs Nigeria.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Most Economy Cargo shipments are delivered within an estimated <strong>9–14 business days</strong> from the applicable shipping or dispatch date. This is an estimate provided to help customers plan their shipments reliably.
                </p>
                <p>
                  Actual delivery timing can vary depending on the destination, airline schedules, customs processing, inspections, local delivery operations, and other stages of the international shipping process.
                </p>

                {/* Exceptional Delay Accordion / Callout */}
                <div className="mt-6 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                  <button 
                    onClick={() => setOpenExceptions(!openExceptions)}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-100/70 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 font-black">
                        !
                      </div>
                      <div>
                        <h4 className="font-black uppercase text-xs text-slate-900 tracking-wider">
                          What Happens If An Unexpected Delay Occurs?
                        </h4>
                        <p className="text-[11px] text-slate-500 font-semibold">
                          Click to review our exceptional circumstances and 19-business-day contingency guidelines
                        </p>
                      </div>
                    </div>
                    <ChevronDown size={18} className={`text-slate-500 transition-transform ${openExceptions ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {openExceptions && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="p-6 border-t border-slate-200 bg-white space-y-4 text-xs md:text-sm text-slate-600"
                      >
                        <p className="font-semibold text-slate-800">
                          International shipping sometimes involves circumstances outside Shipplix's reasonable control. These may include:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Airline or carrier schedule changes
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Customs processing backlogs
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Customs and border physical inspections
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Aviation security screening procedures
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Destination regulatory procedures
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Adverse weather conditions
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Local delivery operational disruptions
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Other unforeseen logistics circumstances
                          </li>
                        </ul>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-slate-800">
                          <p className="font-black text-xs uppercase text-amber-950 mb-1">
                            Exceptional Delay Provision (Up to 19 Business Days)
                          </p>
                          <p className="text-xs leading-relaxed font-medium">
                            Where an exceptional delay occurs, the shipment may take longer than the normal estimated timeframe. <strong>In exceptional circumstances, delivery may extend up to 19 business days.</strong>
                          </p>
                          <p className="text-xs leading-relaxed font-bold text-slate-900 mt-2">
                            Important Clarification: The 19-business-day period is an exceptional delay contingency provision and is NOT the standard delivery timeframe. Most shipments arrive within 9–14 business days.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Section>

              {/* SECTION 4: WHEN DO WE SHIP? */}
              <Section 
                id="when-we-ship" 
                number="04" 
                title="When Do We Ship?" 
                subtitle="Scheduled weekly export dispatches from Lagos Hub"
                icon={<Calendar size={22} className="text-blue-900" />}
              >
                <p>
                  Shipplix Economy Cargo shipments generally go out:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border-2 border-blue-900/20 rounded-2xl p-5 text-center">
                    <span className="text-[10px] font-black uppercase text-amber-600 tracking-widest block mb-1">Primary Dispatch</span>
                    <h4 className="text-xl font-black uppercase text-blue-950">Mostly Fridays</h4>
                    <p className="text-xs text-slate-500 font-semibold mt-1">Our primary weekly flight consolidation window</p>
                  </div>
                  <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 text-center">
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-1">Mid-Week Dispatch</span>
                    <h4 className="text-xl font-black uppercase text-blue-950">Sometimes Wednesdays</h4>
                    <p className="text-xs text-slate-500 font-semibold mt-1">Scheduled depending on cargo readiness &amp; airline allocations</p>
                  </div>
                </div>

                <p>
                  Please note that submitting a booking does not necessarily mean the shipment leaves Nigeria that same day. On the applicable shipping day, the operational sequence proceeds as follows:
                </p>

                <ol className="space-y-2 mt-4 text-xs md:text-sm font-semibold text-slate-700 list-decimal list-inside bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <li>Shipment documents and customs export declarations are prepared.</li>
                  <li>Cargo weight and manifest information are prepared for airline submission.</li>
                  <li>Export documents are formally submitted to the airline cargo handling agent.</li>
                  <li>The airline reviews and accepts the shipment.</li>
                  <li>The airline assigns an available flight schedule and air waybill (AWB).</li>
                  <li>Cargo hold space is booked and secured.</li>
                  <li>The shipment proceeds toward its destination country.</li>
                </ol>
              </Section>

              {/* SECTION 5: YOUR ECONOMY SHIPPING JOURNEY */}
              <Section 
                id="shipping-journey" 
                number="05" 
                title="Your Economy Shipping Journey" 
                subtitle="A transparent 11-step visual timeline from pickup to final door delivery"
                icon={<Workflow size={22} className="text-blue-900" />}
              >
                <p>
                  Here is the step-by-step path your cargo follows from the moment it is received by Shipplix until it reaches the recipient's door:
                </p>

                <div className="relative border-l-2 border-blue-900/20 ml-4 sm:ml-6 my-8 space-y-6">
                  {[
                    { step: "1", title: "Cargo Collection / Drop-Off", desc: "Shipplix receives the customer's items at the applicable pickup location, doorstep, or Lagos office." },
                    { step: "2", title: "Inspection & Preparation", desc: "Items may be inspected, weighed, packaged where required, and prepared safely for international export." },
                    { step: "3", title: "Shipment Identification", desc: "The customer's package receives its own distinct shipment and box identification numbers (e.g. SPX001)." },
                    { step: "4", title: "Consolidation", desc: "Separately identified packages travelling to the same destination are grouped together for shared air transportation." },
                    { step: "5", title: "Export Documentation", desc: "Required customs clearance manifests, safety declarations, and export cargo files are compiled." },
                    { step: "6", title: "Airline Submission", desc: "The shipment information and documentation are submitted to the airline cargo terminal." },
                    { step: "7", title: "Airline Processing", desc: "The airline reviews the cargo, assigns available flight arrangements, and books cargo hold space." },
                    { step: "8", title: "International Transportation", desc: "The consolidated shipment departs Nigeria and flies toward the international destination country." },
                    { step: "9", title: "Customs Clearance", desc: "The shipment undergoes the applicable customs inspection, security checks, and entry clearance process upon arrival." },
                    { step: "10", title: "Local Delivery Handover", desc: "After applicable clearance, packages are sorted and transferred to Shipplix delivery teams or trusted local last-mile courier partners." },
                    { step: "11", title: "Final Delivery", desc: "The package is safely delivered to the receiver's doorstep address or designated pickup point." }
                  ].map((s) => (
                    <div key={s.step} className="relative pl-6 sm:pl-8 group">
                      <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-blue-900 text-shipplix-yellow font-black text-xs flex items-center justify-center border-4 border-white shadow-sm">
                        {s.step}
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-blue-900 transition-colors">
                        <h4 className="font-black uppercase text-xs text-blue-950 tracking-wider mb-1">{s.title}</h4>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* At A Glance Ribbon */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 text-center border-2 border-shipplix-yellow">
                  <span className="text-[10px] font-black uppercase text-shipplix-yellow tracking-widest block mb-2">
                    Economy Shipping Flow — At a Glance
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-bold text-slate-200 uppercase tracking-tight">
                    <span>Your Package</span>
                    <span className="text-shipplix-yellow">▸</span>
                    <span>Separately Identified</span>
                    <span className="text-shipplix-yellow">▸</span>
                    <span>Consolidated for Transportation</span>
                    <span className="text-shipplix-yellow">▸</span>
                    <span>Export Documentation</span>
                    <span className="text-shipplix-yellow">▸</span>
                    <span>Airline Submission</span>
                    <span className="text-shipplix-yellow">▸</span>
                    <span>Airline Schedules &amp; Books</span>
                    <span className="text-shipplix-yellow">▸</span>
                    <span>International Transit</span>
                    <span className="text-shipplix-yellow">▸</span>
                    <span>Customs Clearance</span>
                    <span className="text-shipplix-yellow">▸</span>
                    <span className="text-emerald-400 font-black">Local Delivery to Recipient</span>
                  </div>
                  <p className="text-xs text-shipplix-yellow font-black mt-4 uppercase tracking-wider">
                    Your Package. Your Shipment ID. One Consolidated Transportation Process.
                  </p>
                </div>
              </Section>

              {/* SECTION 6: WHAT IS INCLUDED? */}
              <Section 
                id="what-is-included" 
                number="06" 
                title="What's Included With Economy Cargo?" 
                subtitle="Complete visibility on service deliverables"
                icon={<CheckCircle2 size={22} className="text-blue-900" />}
              >
                <p>
                  Economy Cargo provides a complete end-to-end logistics package. The standard service includes:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  {[
                    "Cargo collection or drop-off at designated hubs",
                    "Shipment inspection, weighing, and export preparation",
                    "Separate shipment identification and individual tracking labeling",
                    "Consolidated international air transportation",
                    "Export documentation and customs manifest generation",
                    "Official airline cargo submission and booking",
                    "International airline transportation to destination country",
                    "Customs clearance facilitation and broker support",
                    "Local delivery to the receiver's address or designated pickup point"
                  ].map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3.5 bg-emerald-50/50 border border-emerald-100 rounded-xl text-xs font-bold text-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-semibold text-slate-600">
                  <strong className="text-slate-900 block mb-1 uppercase text-[11px] font-black">Important Note on Excluded Charges:</strong>
                  Shipplix does not claim that every government charge, import duty, value-added tax, destination inspection charge, terminal storage fee, or third-party port charge is automatically included, unless Shipplix has expressly agreed in writing to cover that specific charge for your corridor.
                </div>
              </Section>

              {/* SECTION 7: CUSTOMER RESPONSIBILITIES */}
              <Section 
                id="customer-responsibilities" 
                number="07" 
                title="Customer Responsibilities" 
                subtitle="Accurate information ensures fast processing and safe transit"
                icon={<UserCheck size={22} className="text-blue-900" />}
              >
                <p>
                  Customers are responsible for providing accurate and truthful information. By submitting a shipment to Shipplix, the customer confirms that:
                </p>

                <div className="space-y-2.5 my-4">
                  {[
                    "All shipment information provided is complete, honest, and accurate.",
                    "Shipment contents have been declared correctly with no hidden or omitted items.",
                    "The receiver's information (full name, delivery address, postal code, working phone number, email) is accurate and reachable.",
                    "The shipment does not contain any prohibited items under Nigerian or international aviation laws.",
                    "The shipment does not contain any illegal items or contraband.",
                    "The shipment does not contain hazardous, combustible, or dangerous items.",
                    "The shipment does not contain restricted items unless properly permitted, certified, and officially accepted in writing.",
                    "There are no undeclared items packed inside.",
                    "There are no misdeclared items under alternate generic labels."
                  ].map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center flex-shrink-0 text-[10px] font-black mt-0.5">
                        {i + 1}
                      </div>
                      <p>{resp}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-500 font-semibold">
                  Accurate information directly helps Shipplix with: efficient warehouse intake, compliant export documentation, airline space clearance, swift customs processing at destination ports, and prompt local doorstep delivery.
                </p>
              </Section>

              {/* SECTION 8: BOOKING CONFIRMATION */}
              <Section 
                id="booking-confirmation" 
                number="08" 
                title="Booking Confirmation" 
                subtitle="Mandatory steps required before international export processing"
                icon={<FileCheck size={22} className="text-blue-900" />}
              >
                <p>
                  Before any shipment can proceed for export consolidation and dispatch, the customer must complete the following steps:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  {[
                    { num: "1", title: "Complete Booking Form", desc: "Fill out the official Shipplix Economy Cargo Booking / Shipment Confirmation Form." },
                    { num: "2", title: "Provide Cargo Details", desc: "Submit all itemized cargo contents, receiver addresses, and contact numbers." },
                    { num: "3", title: "Review Terms", desc: "Thoroughly review these Shipplix Economy Cargo Terms & Conditions." },
                    { num: "4", title: "Accept Terms & Conditions", desc: "Tick the mandatory confirmation checkbox and submit official approval." },
                    { num: "5", title: "Complete Booking Flow", desc: "Verify booking reference and receive confirmation from your account officer." }
                  ].map((b) => (
                    <div key={b.num} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center">
                          {b.num}
                        </span>
                        <h5 className="font-black uppercase text-xs text-slate-900">{b.title}</h5>
                      </div>
                      <p className="text-xs text-slate-500 font-medium pl-7">{b.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs font-semibold text-slate-700 bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                  <strong>Authorization:</strong> By completing the booking process and accepting these Terms &amp; Conditions, the customer explicitly authorizes Shipplix to proceed with shipment processing, export preparation, airline space booking, customs-related filing, and related logistics services applicable to the shipment.
                </p>
              </Section>

              {/* SECTION 9: IF THE CUSTOMER DOES NOT COMPLETE THE BOOKING */}
              <Section 
                id="incomplete-booking" 
                number="09" 
                title="If the Customer Does Not Complete the Booking" 
                subtitle="Clear procedures for unconfirmed bookings and refund allocations"
                icon={<AlertTriangle size={22} className="text-blue-900" />}
              >
                <p>
                  If a customer chooses not to complete the required booking process, fails to submit mandatory receiver or item declarations, or does not accept these Terms &amp; Conditions, Shipplix reserves the right to:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4 text-xs font-bold text-slate-700">
                  <li className="flex items-center gap-2 p-3 bg-red-50/50 border border-red-100 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Suspend export processing
                  </li>
                  <li className="flex items-center gap-2 p-3 bg-red-50/50 border border-red-100 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Cancel the shipment booking
                  </li>
                  <li className="flex items-center gap-2 p-3 bg-red-50/50 border border-red-100 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Return the shipment to the sender
                  </li>
                  <li className="flex items-center gap-2 p-3 bg-red-50/50 border border-red-100 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Release the shipment without export processing
                  </li>
                </ul>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-2">
                  <p className="font-bold text-slate-800">Refund Policy for Incomplete Bookings:</p>
                  <p>
                    Where applicable, amounts already paid may be refunded after deduction of operational costs already incurred by Shipplix on behalf of the customer. These deductible costs may include:
                  </p>
                  <p className="font-semibold text-slate-700">
                    • Handling and weighing fees • Inspection and verification labor • Packaging materials and boxing • Administrative overhead • Warehouse storage fees • Local courier or pickup transportation expenses already expended.
                  </p>
                </div>
              </Section>

              {/* SECTION 10: CUSTOMS, DUTIES, TAXES & ADDITIONAL CHARGES */}
              <Section 
                id="customs-and-charges" 
                number="10" 
                title="Customs, Duties, Taxes & Additional Charges" 
                subtitle="Transparent guidelines on statutory destination assessments"
                icon={<Scale size={22} className="text-blue-900" />}
              >
                <p>
                  International shipments may be subject to additional statutory requirements or regulatory charges depending on: the destination country, the nature or quantity of the goods, national customs requirements, import regulations, and government policies.
                </p>

                <p className="font-semibold text-slate-800">
                  Potential charges or regulatory requirements may include:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3 text-xs font-semibold text-slate-700">
                  {[
                    "Customs physical or X-ray inspections",
                    "Import customs duties and tariffs",
                    "Value-Added Taxes (VAT) or sales taxes",
                    "Sanitary, agricultural, or phytosanitary permits",
                    "Special regulatory certifications (e.g. FDA, CE, UKCA)",
                    "Terminal demurrage or airport bonded storage fees",
                    "Special cargo handling or terminal charges",
                    "Government-imposed statutory environmental fees",
                    "Other destination-related customs or port charges"
                  ].map((chg, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                      <span>{chg}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-xs text-slate-800 space-y-2">
                  <p className="font-black uppercase text-amber-950 text-xs">Clear Responsibility Notice:</p>
                  <p className="leading-relaxed">
                    These charges are separate from Shipplix's standard airfreight shipping charges unless expressly agreed otherwise in writing. Where applicable, such charges remain the exclusive responsibility of the receiver or cargo owner.
                  </p>
                  <p className="leading-relaxed font-bold">
                    Where reasonably practicable, Shipplix will inform the customer or receiver before payment is required if an additional government or destination-related charge becomes applicable.
                  </p>
                </div>
              </Section>

              {/* SECTION 11: DELIVERY DELAYS */}
              <Section 
                id="delays-and-exceptions" 
                number="11" 
                title="What If There Is a Delay?" 
                subtitle="Reassuring explanation of international logistics variables"
                icon={<Clock size={22} className="text-blue-900" />}
              >
                <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-6 mb-4">
                  <h4 className="font-black uppercase text-xs text-blue-950 mb-2">Reassurance First:</h4>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                    Most Economy Cargo shipments are expected to arrive within the normal <strong>9–14 business-day estimated timeframe</strong>. Our consolidation operations run smoothly week after week.
                  </p>
                </div>

                <p>
                  However, international shipments must pass through commercial airlines, customs authorities, government regulatory procedures, and local delivery networks across continents. Occasionally, these processes can take longer than anticipated due to external factors.
                </p>

                <p className="font-semibold text-slate-800">
                  Possible causes of transit adjustments include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-600 my-3">
                  <li className="flex items-center gap-2">• Airline commercial flight schedule changes</li>
                  <li className="flex items-center gap-2">• Carrier routing modifications or layovers</li>
                  <li className="flex items-center gap-2">• Random customs physical inspections</li>
                  <li className="flex items-center gap-2">• Government border clearance procedures</li>
                  <li className="flex items-center gap-2">• Heightened international security screening</li>
                  <li className="flex items-center gap-2">• Destination food / agricultural regulatory reviews</li>
                  <li className="flex items-center gap-2">• Severe meteorological and adverse weather events</li>
                  <li className="flex items-center gap-2">• Local port strikes or operational disruptions</li>
                </ul>

                <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 text-xs text-slate-700">
                  <h5 className="font-black uppercase text-slate-900 mb-1">Exceptional Circumstances Clause:</h5>
                  <p className="leading-relaxed">
                    In exceptional circumstances, delivery may extend up to <strong>19 business days</strong>.
                  </p>
                  <p className="leading-relaxed font-bold text-slate-900 mt-2">
                    Please note: This is an exceptional delay contingency provision and does not represent the standard delivery timeframe. It exists to protect your expectations against international variables without making unrealistic promises.
                  </p>
                </div>
              </Section>

              {/* SECTION 12: CLAIMS PROCESS */}
              <Section 
                id="claims-process" 
                number="12" 
                title="Claims Process" 
                subtitle="Structured, evidence-based review procedure for reported shipment issues"
                icon={<FileText size={22} className="text-blue-900" />}
              >
                <p>
                  If a customer reports a shipment issue or non-delivery, Shipplix initiates a thorough and impartial review of all relevant operational data before determining the appropriate resolution.
                </p>
                
                <p className="font-semibold text-slate-800">
                  The claims review process may examine:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <span className="block text-xs font-black uppercase text-blue-950 mb-1">Physical Proof</span>
                    <p className="text-xs text-slate-500 font-medium">Package intake photos, packing video recordings, and weighbridge scales.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <span className="block text-xs font-black uppercase text-blue-950 mb-1">Carrier Logs</span>
                    <p className="text-xs text-slate-500 font-medium">Airline Master Air Waybill (MAWB) records and warehouse transfer manifests.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <span className="block text-xs font-black uppercase text-blue-950 mb-1">Last-Mile Records</span>
                    <p className="text-xs text-slate-500 font-medium">Customs exit receipts, destination courier handovers, and GPS proof-of-delivery.</p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-600 font-medium">
                  This comprehensive review helps Shipplix objectively determine what happened and ascertain whether the shipment was lost while under Shipplix's direct handling and responsibility.
                </p>
              </Section>

              {/* SECTION 13: LOSS & GOODWILL RESOLUTION */}
              <Section 
                id="loss-compensation" 
                number="13" 
                title="Loss & Goodwill Resolution" 
                subtitle="Guidelines regarding confirmed lost shipment resolutions"
                icon={<Coins size={22} className="text-blue-900" />}
              >
                <p>
                  Shipplix operates with strict custody and handling standards to ensure your cargo arrives safely. Where Shipplix confirms through its claims review that a shipment was lost while under Shipplix's direct handling and responsibility, compensation may be provided as a goodwill resolution.
                </p>

                <div className="my-5 p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 text-xs md:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-blue-900 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5 uppercase text-[11px] font-black">Direct Handling Requirement:</strong>
                      Compensation applies exclusively where a shipment is verified to have been lost while under Shipplix's direct physical custody, handling, and responsibility.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-blue-900 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5 uppercase text-[11px] font-black">Goodwill Resolution Limit:</strong>
                      Approved claims are subject to a maximum goodwill compensation limit of <strong>₦50,000 (Fifty Thousand Naira)</strong> per affected shipment.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-blue-900 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5 uppercase text-[11px] font-black">Fixed Goodwill Nature:</strong>
                      This is a fixed goodwill resolution payment. It is not calculated based on declared value, commercial invoice value, purchase price, replacement cost, or sentimental value of shipment contents.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle size={16} className="text-slate-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5 uppercase text-[11px] font-black">Commercial Notice:</strong>
                      This goodwill resolution is not an insurance policy or cargo underwriter contract. Senders shipping fragile or high-value items are encouraged to acquire independent third-party marine/cargo insurance where desired.
                    </div>
                  </div>
                </div>
              </Section>

              {/* SECTION 14: WHEN GOODWILL COMPENSATION DOES NOT APPLY */}
              <Section 
                id="compensation-exclusions" 
                number="14" 
                title="When Goodwill Compensation Does Not Apply" 
                subtitle="Specific statutory and third-party exclusion categories"
                icon={<Ban size={22} className="text-blue-900" />}
              >
                <p>
                  To maintain complete commercial clarity, goodwill compensation strictly DOES NOT apply, and Shipplix assumes no liability, for claims arising from any of the following 24 conditions:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 my-4">
                  {[
                    "1. Customs seizure by origin or destination authorities",
                    "2. Customs detention, quarantine, or holding orders",
                    "3. Customs destruction of non-compliant items",
                    "4. Customs confiscation under border regulations",
                    "5. Government statutory enforcement actions",
                    "6. Inclusion of prohibited goods in the package",
                    "7. Inclusion of restricted goods without authorization",
                    "8. Inclusion of undeclared goods",
                    "9. Inclusion of misdeclared or falsely labeled goods",
                    "10. Incorrect shipment or receiver information provided by customer",
                    "11. Delays caused by customs clearance backlogs",
                    "12. Delays caused by mandatory physical inspections",
                    "13. Delays caused by international security screening",
                    "14. Delays caused by civil aviation regulatory reviews",
                    "15. Damage, loss, or actions resulting from airlines",
                    "16. Damage, loss, or actions resulting from customs authorities",
                    "17. Damage, loss, or actions resulting from airport/seaport authorities",
                    "18. Damage, loss, or actions resulting from government agencies",
                    "19. Damage, loss, or actions resulting from third-party logistics providers",
                    "20. Natural disasters and extreme meteorological conditions",
                    "21. Labor strikes or union port shutdowns",
                    "22. Public emergencies and sanitary quarantines",
                    "23. Civil disturbances, riots, or unrest",
                    "24. Other force majeure circumstances beyond Shipplix's reasonable control"
                  ].map((excl, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 bg-red-50/40 border border-red-100 rounded-xl text-xs font-semibold text-slate-700">
                      <Ban size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{excl}</span>
                    </div>
                  ))}
                </div>
              </Section>

              {/* SECTION 15: THIRD-PARTY SERVICE PROVIDERS */}
              <Section 
                id="third-party-providers" 
                number="15" 
                title="Third-Party Service Providers" 
                subtitle="Understanding independent entities involved in global cargo logistics"
                icon={<Globe size={22} className="text-blue-900" />}
              >
                <p>
                  International logistics necessarily involves independent third parties whose operational standards, sovereign authority, and timelines are outside of Shipplix's direct management. These include:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                  {[
                    { label: "Commercial Airlines", desc: "Space allocations, flight schedules, transit routes, and ground handling." },
                    { label: "Customs Authorities", desc: "Statutory inspections, tariff assessments, and import clearance decisions." },
                    { label: "Government Agencies", desc: "Aviation security, drug enforcement, border protection, and agricultural quarantine." },
                    { label: "Airport Cargo Terminals", desc: "Terminal handling, ramp operations, and bonded storage facilities." },
                    { label: "Last-Mile Delivery Partners", desc: "Domestic couriers (e.g. FedEx, UPS, DHL, Royal Mail, local couriers)." },
                    { label: "Port Logistics Operators", desc: "Container freight stations and cross-docking distribution centers." }
                  ].map((tp, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <h5 className="font-black uppercase text-xs text-blue-950 mb-1">{tp.label}</h5>
                      <p className="text-[11px] text-slate-500 font-medium leading-normal">{tp.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-600 font-semibold bg-slate-50 p-4 rounded-xl border border-slate-200">
                  Their internal procedures, schedules, physical inspections, statutory decisions, or operational circumstances may affect overall shipment timing. Shipplix does not and cannot control independent decisions made by statutory or third-party entities.
                </p>
              </Section>

              {/* SECTION 16: PROHIBITED, RESTRICTED, UNDECLARED & MISDECLARED GOODS */}
              <Section 
                id="prohibited-items" 
                number="16" 
                title="Prohibited, Restricted, Undeclared & Misdeclared Goods" 
                subtitle="Strict zero-tolerance policy against unlawful and undeclared cargo"
                icon={<AlertTriangle size={22} className="text-blue-900" />}
              >
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-2 text-red-900 mb-2">
                    <AlertTriangle size={20} className="text-red-600" />
                    <h4 className="font-black uppercase text-xs tracking-wider">Mandatory Declaration Warning</h4>
                  </div>
                  <p className="text-xs md:text-sm text-slate-800 font-medium leading-relaxed">
                    Customers must accurately declare every single item contained in their shipment. Senders must NEVER submit:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-xs font-bold text-red-950 space-y-1">
                    <li>Prohibited goods under aviation or civil law</li>
                    <li>Illegal substances, narcotics, or weapons</li>
                    <li>Hazardous, combustible, or flammable materials</li>
                    <li>Restricted goods without pre-approved official documentation</li>
                    <li>Undeclared goods hidden inside legitimate packages</li>
                    <li>Misdeclared goods disguised under deceptive naming</li>
                  </ul>
                </div>

                <p>
                  Where applicable, shipments containing such items will be delayed, rejected at intake, returned to the sender at the sender's cost, detained, seized, or confiscated by airport security or customs authorities without liability to Shipplix.
                </p>

                <div className="mt-4 flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div>
                    <h5 className="font-black uppercase text-xs text-slate-900">Need the Complete Allowed Cargo List?</h5>
                    <p className="text-xs text-slate-500 font-medium">Review categorized guides for foodstuffs, cosmetics, textiles, and commercial goods.</p>
                  </div>
                  <Button 
                    as="a" 
                    href="#/cargo-items"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      window.location.hash = '/cargo-items';
                    }}
                    variant="outline"
                    className="text-xs font-black uppercase py-2 px-4"
                  >
                    View Cargo Items Policy
                    <ExternalLink size={12} />
                  </Button>
                </div>
              </Section>

              {/* SECTION 17: CUSTOMER ACKNOWLEDGEMENT */}
              <Section 
                id="customer-acknowledgement" 
                number="17" 
                title="Customer Acknowledgement" 
                subtitle="Legal agreement binding upon shipment booking"
                icon={<ShieldCheck size={22} className="text-blue-900" />}
              >
                <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
                  <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-shipplix-yellow">
                    By Booking With Shipplix:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    By submitting an Economy Cargo booking, completing the Shipment Confirmation Form, proceeding with shipment processing, and/or accepting these Terms &amp; Conditions, you formally acknowledge that you have had full access to, reviewed, understood, and agreed to the Shipplix Economy Cargo Terms &amp; Conditions, Claims Process, and Compensation Policy.
                  </p>
                  <p className="text-xs text-slate-400 font-semibold italic border-t border-slate-800 pt-3">
                    The customer is responsible for reviewing these Terms before completing their shipment booking.
                  </p>
                </div>
              </Section>

              {/* SECTION 18: WHY CHOOSE ECONOMY CARGO? (From Page 6 of PDF) */}
              <Section 
                id="why-choose-economy" 
                number="18" 
                title="Why Choose Shipplix Economy Shipping?" 
                subtitle="The preferred choice for thousands of smart exporters and diaspora families"
                icon={<Award size={22} className="text-blue-900" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Lower Shipping Cost", desc: "A substantially more cost-effective option for international air cargo shipments." },
                    { title: "Separately Identified Packages", desc: "Your package remains individually identified, sealed, and traceable throughout." },
                    { title: "Consolidated Transportation", desc: "Your shipment travels together with other separately identified parcels to share airline capacity." },
                    { title: "Ideal for Non-Urgent Shipments", desc: "A practical option when you want to save on shipping costs and do not require express delivery." },
                    { title: "Reliable Shipping Process", desc: "A structured process from collection through international transportation, customs clearance, and final delivery." },
                    { title: "International Reach", desc: "Doorstep delivery available across the USA (all 50 states), UK, Canada, Europe, and China." }
                  ].map((w, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-shipplix-yellow/20 text-blue-950 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-shipplix-yellow/30">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-black uppercase text-xs text-slate-900 tracking-wide mb-1">{w.title}</h4>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* SECTION 19: FAQS */}
              <Section 
                id="faqs" 
                number="19" 
                title="Frequently Asked Questions" 
                subtitle="Quick answers to common customer inquiries regarding Economy Cargo"
                icon={<HelpCircle size={22} className="text-blue-900" />}
              >
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50 hover:bg-slate-50"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-5 text-left font-black uppercase text-xs text-slate-900 tracking-wider cursor-pointer"
                      >
                        <span className="pr-4">{faq.q}</span>
                        <ChevronDown 
                          size={16} 
                          className={`text-slate-500 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {openFaq === idx && (
                        <div className="px-5 pb-5 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-200/60 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Section>

              {/* TERMS VERSION & STATUTORY METADATA FOOTER (Section 20) */}
              <div className="mt-12 pt-8 border-t-2 border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
                <div>
                  <p className="text-slate-800 font-bold">
                    Terms Version: <strong className="text-blue-950 font-black">Version 2.4 (October 2026)</strong>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Effective Date: October 2, 2026 • Supersedes all previous web and document editions.
                  </p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-slate-700 font-bold">
                    Legal Business Name: <strong className="text-slate-900 font-black">Shipplix Value Tech Services</strong>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    All rights reserved. Made in Lagos, Nigeria for Global Trade.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Ready to Ship Callout CTA */}
      <section className="py-16 bg-blue-950 text-white relative overflow-hidden border-t-4 border-shipplix-yellow">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15)_0%,transparent_60%)]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
          <div className="w-16 h-16 bg-shipplix-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-shipplix-yellow/20 shadow-xl">
            <Ship className="text-shipplix-yellow" size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-3">
            Ready to Ship with Economy Cargo?
          </h2>
          <p className="text-xs md:text-sm text-white/80 font-medium mb-8 uppercase tracking-widest leading-relaxed">
            Move your non-urgent cargo with complete peace of mind, transparent timelines, and maximum cost savings.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Button 
              as="a" 
              href={URL_BOOK_ECONOMY} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="yellow" 
              className="py-4 px-8 uppercase tracking-wider text-xs font-black"
            >
              Book Economy Shipment
              <ArrowRight size={14} />
            </Button>
            <Button 
              as="a" 
              href={URL_DOWNLOAD_GUIDE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="ghost" 
              className="py-4 px-8 uppercase tracking-wider text-xs font-black border border-white/20 hover:bg-white/10"
            >
              Download PDF Guide
              <Download size={14} />
            </Button>
          </div>
        </div>
      </section>

      {/* Mini Copyright Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800 text-center text-xs">
        <div className="container mx-auto px-6 space-y-1.5">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">
            © {new Date().getFullYear()} SHIPPLIX LOGISTICS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-slate-400 text-xs font-medium normal-case">
            Legal Business Name: Shipplix Value Tech Services
          </p>
        </div>
      </footer>
    </div>
  );
}
