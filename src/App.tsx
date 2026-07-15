/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Plane, 
  Package, 
  Truck, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  Utensils, 
  Shirt, 
  Palette, 
  Box, 
  Ship,
  Menu, 
  X,
  Phone,
  Video,
  ExternalLink,
  Info,
  Globe,
  User,
  Cpu,
  TrendingUp,
  ShoppingCart,
  Zap,
  Bot,
  Store,
  FileCheck,
  CreditCard,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import EconomyTerms from './components/EconomyTerms';
import CargoItemsPage from './components/CargoItemsPage';
import EconomyCargoPage from './components/EconomyCargoPage';
import ProcessingPage from './components/ProcessingPage';
import TrustPage from './components/TrustPage';
import RevenuePartnerPage from './components/RevenuePartnerPage';
import ExportBlueprintPage from './components/ExportBlueprintPage';
import AdminLeadsPage from './components/AdminLeadsPage';

// Common Components
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
  const base = "px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-center text-sm";
  const variants = {
    primary: "bg-shipplix-blue text-white hover:bg-shipplix-navy shadow-md",
    yellow: "bg-shipplix-yellow text-blue-900 hover:bg-yellow-500 shadow-md",
    outline: "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    ghost: "text-white/80 hover:text-white hover:bg-white/10"
  };
  
  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

const WHATSAPP_BASE = "https://wa.me/2349168273513?text=";
const URL_QUOTE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I want to get a quote for a shipment.")}`;
const URL_START = `${WHATSAPP_BASE}${encodeURIComponent("Hello, I'm ready to start my first shipment with Shipplix.")}`;
const URL_TRACK = `${WHATSAPP_BASE}${encodeURIComponent("I want to track my shipment status.")}`;
const URL_CONNECT = `${WHATSAPP_BASE}${encodeURIComponent("I want to connect to international markets and start selling my goods abroad.")}`;
const URL_SPACE = `${WHATSAPP_BASE}${encodeURIComponent("I'm interested in Group Shipping to save costs. How does it work?")}`;
const URL_PROCESS = `${WHATSAPP_BASE}${encodeURIComponent("I'd like to know more about your export security and guarantee.")}`;
const URL_RESERVE = `${WHATSAPP_BASE}${encodeURIComponent("I want to reserve a spot in this week's shipment batch before it's full.")}`;

const SectionTitle = ({ title, subtitle, light = false, centered = true }: { title: string; subtitle?: string; light?: boolean; centered?: boolean }) => (
  <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-black mb-2 uppercase tracking-tighter ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-sm md:text-base max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-slate-500'} font-medium`}>
        {subtitle}
      </p>
    )}
  </div>
);

// Navigation
const Navbar = ({ onNavigate, currentPath }: { onNavigate?: (path: string) => void; currentPath?: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate?.(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shipplix-blue border-b-4 border-shipplix-yellow text-white py-3 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => {
            setIsOpen(false);
            onNavigate?.('/');
          }}
        >
          <div className="bg-shipplix-yellow text-shipplix-blue font-black p-1 rounded-sm text-xl tracking-tighter">SHIPPLIX</div>
          <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest opacity-80 uppercase leading-none">Official Export<br/>Partner</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
          <a href="#/cargo-items" onClick={(e) => handleLinkClick(e, '/cargo-items')} className={`transition-colors ${currentPath === '/cargo-items' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Cargo Items</a>
          <a href="#/economy-cargo" onClick={(e) => handleLinkClick(e, '/economy-cargo')} className={`transition-colors ${currentPath === '/economy-cargo' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Economy Cargo</a>
          <a href="#/economy-cargo-terms" onClick={(e) => handleLinkClick(e, '/economy-cargo-terms')} className={`transition-colors ${currentPath === '/economy-cargo-terms' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Economy Terms</a>
          <a href="#/processing" onClick={(e) => handleLinkClick(e, '/processing')} className={`transition-colors ${currentPath === '/processing' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Processing</a>
          <a href="#/trust" onClick={(e) => handleLinkClick(e, '/trust')} className={`transition-colors ${currentPath === '/trust' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Trust</a>
          <a href="#/revenue-partner" onClick={(e) => handleLinkClick(e, '/revenue-partner')} className={`transition-colors ${currentPath === '/revenue-partner' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Revenue Partner</a>
          <a href="#/export-blueprint" onClick={(e) => handleLinkClick(e, '/export-blueprint')} className={`transition-colors ${currentPath === '/export-blueprint' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Blueprint</a>
          <a 
            href="https://myshipment.shipplix.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-2.5 px-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5"
          >
            Book my shipment
          </a>
          <Button 
            as="a" 
            href={URL_QUOTE} 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="ghost" 
            className="py-2 px-4 text-[10px] uppercase tracking-widest border border-white/20 hover:bg-white/10"
          >
            Get Quote
          </Button>
        </div>

        <button className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-shipplix-blue border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6 font-bold text-xs uppercase tracking-wider">
              <a href="#/cargo-items" onClick={(e) => handleLinkClick(e, '/cargo-items')} className={`py-1 ${currentPath === '/cargo-items' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Cargo Items</a>
              <a href="#/economy-cargo" onClick={(e) => handleLinkClick(e, '/economy-cargo')} className={`py-1 ${currentPath === '/economy-cargo' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Economy Cargo</a>
              <a href="#/economy-cargo-terms" onClick={(e) => handleLinkClick(e, '/economy-cargo-terms')} className={`py-1 ${currentPath === '/economy-cargo-terms' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Economy Terms</a>
              <a href="#/processing" onClick={(e) => handleLinkClick(e, '/processing')} className={`py-1 ${currentPath === '/processing' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Processing</a>
              <a href="#/trust" onClick={(e) => handleLinkClick(e, '/trust')} className={`py-1 ${currentPath === '/trust' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Trust</a>
              <a href="#/revenue-partner" onClick={(e) => handleLinkClick(e, '/revenue-partner')} className={`py-1 ${currentPath === '/revenue-partner' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Revenue Partner</a>
              <a href="#/export-blueprint" onClick={(e) => handleLinkClick(e, '/export-blueprint')} className={`py-1 ${currentPath === '/export-blueprint' ? 'text-shipplix-yellow underline font-black' : 'hover:text-shipplix-yellow'}`}>Blueprint</a>
              <a 
                href="https://myshipment.shipplix.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-3 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-xs uppercase tracking-widest mt-2"
              >
                Book my shipment
              </a>
              <Button 
                as="a" 
                href={URL_START} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="ghost" 
                className="w-full mt-1 border border-white/20 text-white hover:bg-white/10"
              >
                Ship Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Sections
const Hero = () => (
  <section className="relative pt-32 pb-12 bg-shipplix-bg overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden flex flex-col lg:flex-row gap-0">
        <div className="relative z-10 lg:w-2/3 lg:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest mb-4 inline-block">
              Nigeria to UK, USA & Canada
            </span>
            
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 mb-4">
              Turn Your Nigerian Goods Into <span className="text-shipplix-blue underline decoration-shipplix-yellow decoration-4 underline-offset-4">Pounds, Dollars</span> & Canadian Cash.
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg mb-8 max-w-2xl font-medium">
              We help African vendors ship food, fashion & cultural goods from Nigeria safely. No stories. No scams. No lost goods. Just pure profit delivered to your destination.
            </p>

            <div className="mb-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://myshipment.shipplix.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto text-center bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-4 px-10 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  Book my shipment
                </a>
                <Button 
                  as="a"
                  href={URL_PROCESS}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary" 
                  className="w-full sm:w-auto px-10 py-4 text-[13px] uppercase tracking-widest bg-slate-100 text-slate-700"
                >
                  See How It Works
                </Button>
              </div>
              <p className="mt-3 text-xs text-slate-500 font-bold italic flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Book your shipment online in less than 2 minutes.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/3 mt-8 lg:mt-0 bg-blue-50/50 flex items-center justify-center border-l-0 lg:border-l border-slate-100 -m-6 md:-m-10 lg:m-0 p-8">
          <div className="text-center w-full">
            <div className="text-4xl font-black text-blue-900 mb-1">$2,500+</div>
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-6">Avg. Potential Growth per Vendor</div>
            
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm italic text-blue-800">
                "Sent 50kg Garri to UK!"
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm italic text-blue-800">
                "Native wears to USA!"
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm italic text-blue-800">
                "Wigs cleared in 3 days"
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm italic text-blue-800">
                "Paid in GBP today!"
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <CheckCircle2 size={16} className="text-green-500" />, label: "No Hidden Charges" },
          { icon: <CheckCircle2 size={16} className="text-green-500" />, label: "Real-Time Video Proof" },
          { icon: <CheckCircle2 size={16} className="text-green-500" />, label: "Expert Customs Support" },
          { icon: <CheckCircle2 size={16} className="text-green-500" />, label: "Warehouse Hub in Lagos" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm font-bold text-[11px] uppercase tracking-tight text-slate-600">
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const UrgencyBanner = () => (
  <div className="bg-yellow-100 border-y border-yellow-300 py-3 relative overflow-hidden">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
      <div className="flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
        </span>
        Shipment Batch Closing Soon!
      </div>
      <p className="text-sm font-bold text-slate-800">
        Next flight leaves on <span className="underline decoration-red-500 decoration-2">Wednesday - Friday</span>. Space almost full.
      </p>
      <div className="w-48 bg-slate-200 rounded-full h-2 hidden sm:block">
        <div className="bg-red-500 h-2 rounded-full w-[92%]"></div>
      </div>
      <a 
        href={URL_RESERVE}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-colors"
      >
        Secure Spot Now
      </a>
    </div>
  </div>
);

const ExportCategories = () => {
  const categories = [
    {
      title: "Foodstuff",
      icon: <Utensils size={32} className="text-shipplix-blue" />,
      items: ["Garri", "Egusi", "Palm Oil", "Spices", "Dried Fish", "Crayfish"],
      tag: "Most Popular",
    },
    {
      title: "Fashion",
      icon: <Shirt size={32} className="text-shipplix-accent" />,
      items: ["Ankara Fabric", "Wigs & Hair", "Native Wear", "Accessories"],
      tag: "High Demand",
    },
    {
      title: "Heritage Goods",
      icon: <Palette size={32} className="text-blue-500" />,
      items: ["Cultural Crafts", "Artwork", "Beads & Jewellery", "Souvenirs"],
      tag: "High Value",
    },
    {
      title: "Essentials",
      icon: <Box size={32} className="text-slate-400" />,
      items: ["General Goods", "Business Inventory", "Personal Packages", "Gifts"],
      tag: "Flexible",
    }
  ];

  return (
    <section id="what" className="scroll-mt-24 py-16 bg-shipplix-bg">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Export Categories" 
          subtitle="If people abroad are buying it, we can ship it."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative text-center"
            >
              <div className="absolute top-2 right-2 bg-blue-50 text-blue-800 text-[8px] font-black uppercase px-2 py-0.5 rounded border border-blue-100">
                {cat.tag}
              </div>
              <div className="mb-4 flex justify-center">{cat.icon}</div>
              <h3 className="text-sm font-black mb-4 text-slate-900 uppercase tracking-wider">{cat.title}</h3>
              <ul className="space-y-1 text-left hidden md:block">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-bold uppercase tracking-tight">
                    <CheckCircle2 size={10} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 md:hidden text-[10px] text-slate-500 font-bold uppercase">
                {cat.items[0]}, {cat.items[1]}...
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl text-center border border-slate-200">
           <p className="text-sm font-bold opacity-70 mb-2 uppercase tracking-widest">Not sure if we ship your product?</p>
           <a href={URL_QUOTE} target="_blank" rel="noopener noreferrer" className="text-shipplix-blue font-black text-lg underline underline-offset-4 flex items-center justify-center gap-2">
             Ask us on WhatsApp <ArrowRight size={20} />
           </a>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Drop-off",
      desc: "Lagos Hub or Pickup Request",
      reassurance: "We handle everything",
      step: "01"
    },
    {
      title: "Packaging",
      desc: "Export-grade prep",
      reassurance: "No stress for you",
      step: "02"
    },
    {
      title: "Air Freight",
      desc: "Safe weekly flights",
      reassurance: "Tracked & secure",
      step: "03"
    },
    {
      title: "Doorstep",
      desc: "UK/US/Canada delivery",
      reassurance: "Happy money",
      step: "04"
    }
  ];

  return (
    <section id="how" className="scroll-mt-24 py-16 bg-shipplix-blue text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Security Guarantee" 
          subtitle="Simple 4-Step Process. Fully Tracked."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-shipplix-yellow font-black text-5xl opacity-20 mb-4 transition-opacity group-hover:opacity-40">
                {step.step}
              </div>
              <h4 className="text-lg font-black mb-1 uppercase tracking-tight text-shipplix-yellow">{step.title}</h4>
              <p className="text-white/70 text-sm font-medium mb-3">{step.desc}</p>
              <div className="inline-block px-2 py-0.5 bg-white/10 text-white/50 text-[10px] font-black uppercase tracking-widest rounded border border-white/10">
                {step.reassurance}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center pt-8 border-t border-white/10">
           <Button 
            as="a"
            href="https://track.shipplix.com"
            variant="yellow" 
            className="mx-auto text-xs px-10 uppercase tracking-[0.2em]"
            aria-label="Track My Shipments"
           >
             Track My Shipments
           </Button>
        </div>
      </div>
    </section>
  );
};

const ShippingServices = () => {
  const options = [
    {
      title: "Express Shipping",
      time: "3–4 Days",
      desc: "Fastest option for urgent deliveries. We prioritize these shipments for the next available flight.",
      benefit: "Next-flight priority",
      useCase: "Urgent documents, time-sensitive goods",
      icon: <Zap className="text-shipplix-yellow" size={24} />
    },
    {
      title: "Standard Shipping",
      time: "5–7 Business Days",
      desc: "Balanced option between speed and cost. Reliable delivery for your everyday exports.",
      benefit: "Cost-effective speed",
      useCase: "Regular inventory, fashion items",
      icon: <Plane className="text-shipplix-yellow" size={24} />
    },
    {
      title: "Economy Cargo",
      time: "9–14 Business Days",
      desc: "Affordable option for bulk or non-urgent shipments. Save more on larger volumes.",
      benefit: "Lowest shipping rates",
      useCase: "Bulk foodstuff, non-urgent heavy cargo",
      icon: <Ship className="text-shipplix-yellow" size={24} />
    }
  ];

  const steps = [
    { title: "Drop off or Request Pickup at Lagos Hub", icon: <Truck size={20} /> },
    { title: "We Process & Ship", icon: <Package size={20} /> },
    { title: "Track Your Package", icon: <Globe size={20} /> },
    { title: "Delivered to Doorstep", icon: <CheckCircle2 size={20} /> }
  ];

  const trustPoints = [
    "Safe & secure handling",
    "On-time delivery",
    "Customer support",
    "Affordable pricing"
  ];

  return (
    <section id="services" className="scroll-mt-24 py-16 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Our Shipping Services" 
          subtitle="Shipplix offers fast, reliable, and affordable shipping options from Nigeria to the USA. We provide tailored solutions to match your urgency and budget."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {options.map((opt, i) => (
            <div key={i} className="p-6 bg-white border border-slate-200 rounded-xl hover:border-shipplix-blue transition-all shadow-sm flex flex-col h-full group">
              <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-shipplix-blue/5 transition-colors">
                {opt.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-1 uppercase tracking-tight">{opt.title}</h3>
              <div className="text-shipplix-blue font-black text-xs uppercase mb-3 tracking-widest">{opt.time}</div>
              <p className="text-sm text-slate-600 font-medium mb-6 flex-grow">{opt.desc}</p>
              
              <div className="mt-auto space-y-3 pt-4 border-t border-slate-100">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Key Benefit</div>
                  <div className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">{opt.benefit}</div>
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Ideal For</div>
                  <div className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">{opt.useCase}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-shipplix-blue text-white p-8 md:p-14 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter italic">How It Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-shipplix-yellow text-shipplix-blue flex items-center justify-center font-black text-lg border-2 border-white/20 shadow-lg">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-white/40 mb-1">{step.icon}</div>
                    <div className="font-black text-xs uppercase tracking-widest leading-tight">{step.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-shipplix-yellow italic">Why Trust Shipplix?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {trustPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-shipplix-yellow flex-shrink-0" />
                  <span className="text-xs font-black uppercase tracking-tight">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-base font-black mb-4 uppercase tracking-tight text-white/90">Ready to ship to the USA?</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  as="a" 
                  href={URL_QUOTE} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="yellow" 
                  className="w-full text-[10px] py-4 uppercase tracking-widest shadow-xl"
                >
                  Get A Quote
                </Button>
                <Button 
                  as="a" 
                  href={URL_START} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="ghost" 
                  className="w-full border border-white/20 text-[10px] py-4 uppercase tracking-widest"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative background element */}
          <Truck className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-[-15deg] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const reasons = [
    {
      title: "Real-Time Tracking",
      desc: "Know exactly where your goods are — from Lagos departures to UK arrivals.",
    },
    {
      title: "No Hidden Costs",
      desc: "What we quote is what you pay. No stories, no customs surprises.",
    },
    {
      title: "Video Verification",
      desc: "We record your goods being packed. You see the proof before it flies.",
    },
    {
      title: "Careful Handling",
      desc: "We are committed to handling every shipment with care. Where applicable, compensation may be provided in accordance with our published Compensation Policy and Terms & Conditions.",
    },
  ];

  return (
    <section id="trust" className="scroll-mt-24 py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 uppercase tracking-tighter leading-none">
              Why African Vendors <br/><span className="text-shipplix-accent">Truly Trust Shipplix</span>
            </h2>
            <p className="text-slate-600 font-medium mb-8">
              We know you've heard horror stories of lost goods and fake agents. That's why we've built a high-transparency shipping model.
            </p>
            <div className="bg-blue-900 text-white p-6 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-shipplix-yellow font-black text-2xl mb-1">99%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-70">Customs Success Rate</div>
                </div>
                <Plane className="absolute -bottom-4 -right-4 text-white/5 w-32 h-32 rotate-12" />
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="p-6 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                <CheckCircle2 size={24} className="text-green-600 mb-2" />
                <h3 className="text-sm font-black mb-2 uppercase tracking-tight text-slate-900">{r.title}</h3>
                <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DiasporaSection = () => (
  <section className="py-16 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="bg-shipplix-yellow p-8 md:p-12 rounded-2xl border-4 border-shipplix-blue flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-black text-shipplix-blue mb-6 leading-none tracking-tighter uppercase">
            Your People Abroad <br/><span className="bg-shipplix-blue text-shipplix-yellow px-2">Are Waiting</span>
          </h2>
          <p className="text-shipplix-blue/80 font-bold text-lg mb-8 italic">
            "Your people abroad are ready to buy... the question is — are you ready to supply?"
          </p>
          <div className="space-y-4">
             {[
               { val: "3M+", label: "Potential Customers in UK" },
               { val: "£450", label: "Avg. Weekly Spend per Diaspora Family" },
               { val: "7 Days", label: "From Lagos Hub to London Doorstep" }
             ].map((s, i) => (
               <div key={i} className="flex items-center gap-4 border-b border-shipplix-blue/10 pb-2">
                 <span className="text-2xl font-black text-shipplix-blue">{s.val}</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-shipplix-blue/60">{s.label}</span>
               </div>
             ))}
          </div>
        </div>
        <div className="md:w-1/2 bg-white/40 p-10 rounded-xl border border-white/40 text-center">
            <p className="text-shipplix-blue font-black text-xl mb-4 leading-snug">
              Nigerians in UK, USA & Canada are spending millions on food and fashion every month. 
            </p>
            <Button 
              as="a" 
              href={URL_CONNECT} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary" 
              className="mx-auto w-full py-4 text-xs tracking-widest uppercase mb-4"
            >
              Connect With Markets Abroad
            </Button>
            <p className="text-[10px] font-black uppercase text-shipplix-blue/50">Earn in GBP, USD, or CAD weekly</p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16 bg-shipplix-bg">
    <div className="container mx-auto px-6">
      <SectionTitle 
        title="Real Vendors. Real Results." 
        subtitle="Success stories from our smart export community."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            name: "Mrs. Adebayo",
            role: "Fashion Vendor",
            text: "I sent 50kg of Egusi to London. No stories, no customs issues. I already made my money back triple!",
            tag: "UK EXPORT"
          },
          {
            name: "Emeka O.",
            role: "Wholesaler",
            text: "I was scared of scams, but Shipplix showed me my goods in the warehouse via video. Now I ship weekly.",
            tag: "CANADA EXPORT"
          },
          {
            name: "Ngozi A.",
            role: "Retailer",
            text: "My account in Dollars is growing. My sister abroad sells my palm oil easily. Best logistic partner ever.",
            tag: "USA EXPORT"
          }
        ].map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-blue-50 text-blue-800 text-[8px] font-black uppercase px-2 py-0.5 rounded inline-block mb-4">
                {t.tag}
              </div>
              <p className="text-xs font-bold text-slate-700 leading-relaxed italic mb-6">"{t.text}"</p>
            </div>
            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 border border-slate-200">
                <User size={16} className="text-slate-400" />
              </div>
              <div>
                 <div className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{t.name}</div>
                 <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GroupShipping = () => (
  <section className="py-16 bg-white border-y border-slate-200">
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
        <div className="relative z-10 md:w-2/3">
          <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Save Big Money</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter leading-none">
            Group Shipping (40% OFF)
          </h2>
          <p className="text-white/60 font-medium text-sm md:text-base mb-6">
            Join other vendors to share space. Stop paying full price for half-empty boxes. Smart vendors ship together.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded">
              <CheckCircle2 size={12} className="text-shipplix-yellow" />
              Pay for only your weight
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded">
              <CheckCircle2 size={12} className="text-shipplix-yellow" />
              Committed Safe Handling
            </div>
          </div>
          <Button 
            as="a"
            href={URL_SPACE}
            target="_blank"
            rel="noopener noreferrer"
            variant="yellow" 
            className="text-xs px-10 uppercase tracking-widest"
          >
            Inquire About Splitting Space
          </Button>
        </div>
        <div className="md:w-1/3 flex justify-center">
            <div className="bg-white/5 p-8 rounded-full border border-white/10 animate-pulse">
                <Box size={80} className="text-shipplix-yellow opacity-40" />
            </div>
        </div>
      </div>
    </div>
  </section>
);

const ExportHub = () => {
  const features = [
    {
      title: "AI Commerce",
      desc: "Use AI to create content, captions, ads, and product descriptions faster.",
      icon: <Bot className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "Global Shipping",
      desc: "Ship products from Nigeria to USA, UK, Canada & Europe.",
      icon: <Globe className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "Customer Acquisition",
      desc: "Learn how to attract international customers online.",
      icon: <TrendingUp className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "E-commerce Systems",
      desc: "Build online stores and automate your business.",
      icon: <ShoppingCart className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "Export Guidance",
      desc: "Learn packaging, pricing, and export processes.",
      icon: <FileCheck className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "Vendor Community",
      desc: "Join ambitious African entrepreneurs building global brands.",
      icon: <Users className="text-shipplix-yellow" size={24} />,
    }
  ];

  const timeline = [
    { step: "1", title: "Choose Your Product" },
    { step: "2", title: "Learn Modern Selling" },
    { step: "3", title: "Use AI Tools" },
    { step: "4", title: "Attract Global Customers" },
    { step: "5", title: "Ship Worldwide With Shipplix" },
    { step: "6", title: "Scale Internationally" },
  ];

  return (
    <section id="hub" className="py-20 lg:py-32 bg-shipplix-blue relative overflow-hidden text-white font-sans">
      {/* Background Decorative Elements - Enhanced */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] -left-[10%] w-[500px] h-[500px] bg-shipplix-yellow/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] -right-[10%] w-[500px] h-[500px] bg-shipplix-accent/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hub Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-shipplix-yellow/10 border border-shipplix-yellow/20 px-3 py-1 rounded-full mb-6 text-shipplix-yellow text-[10px] uppercase font-black tracking-widest">
                <Zap size={14} className="animate-pulse" />
                Shipplix Export Hub
              </div>
              <p className="text-shipplix-yellow font-bold text-lg mb-2 tracking-tight uppercase">Learn • Sell • Ship Worldwide</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[0.95] tracking-tighter uppercase">
                Turn Your Nigerian <br/> 
                <span className="text-shipplix-yellow">Products Into</span> <br/>
                Pounds, Dollars <br/>
                & Canadian Cash.
              </h2>
              <p className="text-lg text-white/80 font-medium max-w-xl mb-10 leading-relaxed md:text-xl">
                Learn how to sell Nigerian products globally using AI tools, customer acquisition systems, eCommerce strategies, and Shipplix international shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  as="a" 
                  href={URL_CONNECT} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="yellow" 
                  className="px-10 py-5 text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-105"
                >
                  Start Selling Globally
                </Button>
                <Button 
                  as="a" 
                  href={URL_START} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="ghost" 
                  className="px-10 py-5 text-sm border border-white/20 uppercase tracking-widest"
                >
                  Ship With Shipplix
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
            {/* Visual Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex items-center justify-center"
            >
              {/* World Map Glow Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-md max-h-md rounded-full bg-shipplix-accent/20 blur-[60px] animate-pulse"></div>
                <Globe className="w-64 h-64 text-white/5 absolute opacity-20" strokeWidth={0.5} />
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-1/4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl flex flex-col items-center gap-2"
              >
                 <Package className="text-shipplix-yellow" size={32} />
                 <div className="text-[10px] font-black uppercase text-white/60 tracking-wider">To: London</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-1/4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl flex flex-col items-center gap-2"
              >
                 <Box className="text-shipplix-yellow" size={32} />
                 <div className="text-[10px] font-black uppercase text-white/60 tracking-wider">To: New York</div>
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)] w-full max-w-sm relative z-10"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-shipplix-yellow/20 flex items-center justify-center">
                      <Cpu size={20} className="text-shipplix-yellow" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase text-white tracking-widest">AI Hub</div>
                      <div className="text-[10px] text-white/50 uppercase">Analysis...</div>
                    </div>
                  </div>
                  <div className="text-shipplix-yellow">
                    <TrendingUp size={20} />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-shipplix-yellow"
                    ></motion.div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      transition={{ duration: 2, delay: 0.7 }}
                      className="h-full bg-shipplix-accent"
                    ></motion.div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-lg text-center">
                    <div className="text-shipplix-yellow font-black text-lg">$</div>
                    <div className="text-[8px] uppercase tracking-widest opacity-50">Earnings</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg text-center">
                    <div className="text-white font-black text-lg">£</div>
                    <div className="text-[8px] uppercase tracking-widest opacity-50">Profit</div>
                  </div>
                </div>
              </motion.div>

              {/* Entrepreneur Visual (Simplified representation) */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 opacity-40 pointer-events-none">
                 <Users className="w-full h-full text-white/10" strokeWidth={1} />
              </div>

              {/* Currency Symbols */}
              <div className="absolute top-1/4 left-10 text-white/20 font-black text-4xl select-none">$</div>
              <div className="absolute top-1/3 right-5 text-shipplix-yellow/20 font-black text-5xl select-none">£</div>
              <div className="absolute bottom-1/4 left-5 text-shipplix-accent/20 font-black text-4xl select-none">€</div>
              <div className="absolute bottom-1/3 right-10 text-white/20 font-black text-3xl select-none">CAD</div>
            </motion.div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all hover:border-shipplix-yellow/30"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-shipplix-yellow/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-black mb-3 uppercase tracking-tight group-hover:text-shipplix-yellow transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Psychology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="relative p-10 md:p-14 bg-gradient-to-br from-shipplix-yellow/20 to-transparent border border-shipplix-yellow/30 rounded-[2rem] text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-shipplix-blue flex items-center justify-center rounded-full border border-shipplix-yellow/30 shadow-2xl">
              <Star className="text-shipplix-yellow" size={24} fill="#facc15" />
            </div>
            <p className="text-xl md:text-3xl font-black leading-tight italic tracking-tight">
              “The world already wants African products. <br className="hidden md:block" /> 
              Most vendors simply lack visibility, systems, and global access. <br className="hidden md:block" /> 
              Shipplix helps bridge that gap.”
            </p>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-24">
          <SectionTitle 
            title="How It Works" 
            subtitle="The path to global commerce is shorter than you think." 
            light 
          />
          <div className="relative mt-16 overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex lg:grid lg:grid-cols-6 gap-4 min-w-[900px] lg:min-w-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex-1 relative">
                  {/* Connector Line */}
                  {i < timeline.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[60%] right-[-40%] h-[2px] bg-white/10 z-0">
                      <div className="h-full bg-shipplix-yellow w-0 group-while-in-view:w-full transition-all duration-1000"></div>
                    </div>
                  )}
                  {/* Step Node */}
                  <div className="relative z-10 flex flex-col items-center text-center px-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 font-black text-shipplix-yellow shadow-xl">
                      {item.step}
                    </div>
                    <div className="text-[10px] uppercase font-black tracking-[0.2em] text-white">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white p-10 md:p-20 rounded-[3rem] shadow-2xl border-4 border-shipplix-yellow relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black text-shipplix-blue mb-8 uppercase tracking-tighter italic">
              YOUR PRODUCTS <span className="bg-shipplix-yellow px-2">DESERVE</span> <br/> A GLOBAL MARKET.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Button 
                as="a" 
                href={URL_CONNECT} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary" 
                className="w-full sm:w-auto px-12 py-5 text-xs tracking-widest uppercase bg-shipplix-blue"
              >
                Start Selling Globally
              </Button>
              <Button 
                as="a" 
                href={URL_START} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="outline" 
                className="w-full sm:w-auto px-12 py-5 text-xs tracking-widest uppercase border-shipplix-blue text-shipplix-blue"
              >
                Ship With Shipplix
              </Button>
            </div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-shipplix-blue/40 max-w-lg mx-auto leading-relaxed">
              The future belongs to African vendors who combine products + technology + global logistics.
            </p>
          </div>
          {/* Subtle pattern background for CTA */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
             <div className="grid grid-cols-12 h-full">
                {Array.from({length: 144}).map((_, i) => (
                  <div key={i} className="border border-shipplix-blue aspect-square"></div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>

      {/* Sticky Mobile CTA for this section (optional but prompt requested) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:hidden pointer-events-none">
          <motion.div 
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="pointer-events-auto"
          >
             {/* This could be a floating message button or similar, but the user requested a sticky mobile CTA */}
          </motion.div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-16 bg-shipplix-bg">
    <div className="container mx-auto px-6 text-center">
       <div className="max-w-2xl mx-auto">
          <SectionTitle 
            title="Start Earning in FX Today" 
            subtitle="No stress. No stories. Just safe, fast delivery to your destination."
          />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              as="a" 
              href={URL_START} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary" 
              className="py-4 text-xs uppercase tracking-widest bg-shipplix-blue flex-1"
            >
              Start First Shipment
            </Button>
            <Button 
              as="a" 
              href={URL_QUOTE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary" 
              className="py-4 text-xs uppercase tracking-widest bg-green-600 border-green-600 flex-1 hover:bg-green-700"
            >
              Message on WhatsApp
            </Button>
          </div>
          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            Nigeria Hub — Closed on Sundays
          </p>
       </div>
    </div>
  </section>
);

const Footer = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate?.(path);
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-500">
      <div className="container mx-auto px-6">
        {/* Prominent Footer CTA Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-base font-black text-slate-900 uppercase tracking-tight mb-1">
              Ready to Export Your Nigerian Cargo?
            </h4>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Experience stress-free, fast, and secure delivery to your global buyers.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 w-full md:w-auto">
            <a 
              href="https://myshipment.shipplix.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full md:w-auto text-center bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-3.5 px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Book my shipment
            </a>
            <span className="text-[10px] text-slate-400 font-bold tracking-tight">
              Book your shipment online in less than 2 minutes.
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 text-white font-black px-2 py-1 rounded text-lg tracking-tighter">SHIPPLIX</div>
            <span className="text-[10px] font-bold tracking-widest uppercase">Safe. Fast. Transparent.</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-[10px] font-black uppercase tracking-widest items-center">
             <a href="#/cargo-items" onClick={(e) => handleLinkClick(e, '/cargo-items')} className="hover:text-blue-600">Cargo Items</a>
             <a href="#/trust" onClick={(e) => handleLinkClick(e, '/trust')} className="hover:text-blue-600">Trust</a>
             <a href="#/processing" onClick={(e) => handleLinkClick(e, '/processing')} className="hover:text-blue-600">Processing</a>
             <a href="#/economy-cargo-terms" onClick={(e) => handleLinkClick(e, '/economy-cargo-terms')} className="hover:text-blue-600">Economy Terms</a>
             <a href="#/revenue-partner" onClick={(e) => handleLinkClick(e, '/revenue-partner')} className="hover:text-blue-600">Revenue Partner</a>
             <a href="#/export-blueprint" onClick={(e) => handleLinkClick(e, '/export-blueprint')} className="hover:text-blue-600">Export Blueprint</a>
             <a href="mailto:services@shipplix.com" className="hover:text-blue-600 lowercase tracking-normal">services@shipplix.com</a>
          </div>
        </div>
      <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest">
         <p>© {new Date().getFullYear()} SHIPPLIX EXPORT LOGISTICS. MADE IN LAGOS.</p>
         <div className="flex items-center gap-4">
            <span className="text-blue-600">2,400+ Exports</span>
            <span className="text-slate-300">|</span>
            <span className="text-blue-600">100% Tax Clearance</span>
         </div>
      </div>
    </div>
  </footer>
  );
};

export default function App() {
  const [currentPath, setCurrentPath] = React.useState(() => {
    const p = window.location.pathname;
    const h = window.location.hash;
    if (p === '/admin-leads' || h === '#/admin-leads' || h === '#admin-leads') {
      return '/admin-leads';
    }
    if (p === '/economy-cargo-terms' || h === '#/economy-cargo-terms' || h === '#economy-cargo-terms' || p === '/terms' || h === '#/terms' || h === '#terms') {
      return '/economy-cargo-terms';
    }
    if (p === '/cargo-items' || h === '#/cargo-items' || h === '#cargo-items') {
      return '/cargo-items';
    }
    if (p === '/economy-cargo' || h === '#/economy-cargo' || h === '#economy-cargo') {
      return '/economy-cargo';
    }
    if (p === '/processing' || h === '#/processing' || h === '#processing') {
      return '/processing';
    }
    if (p === '/trust' || h === '#/trust' || h === '#trust') {
      return '/trust';
    }
    if (p === '/revenue-partner' || h === '#/revenue-partner' || h === '#revenue-partner') {
      return '/revenue-partner';
    }
    if (p === '/export-blueprint' || h === '#/export-blueprint' || h === '#export-blueprint') {
      return '/export-blueprint';
    }
    if (p === '/export-blueprint/thank-you' || h === '#/export-blueprint/thank-you' || h === '#export-blueprint-thank-you') {
      return '/export-blueprint/thank-you';
    }
    return '/';
  });

  React.useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      const h = window.location.hash;
      if (p === '/admin-leads' || h === '#/admin-leads' || h === '#admin-leads') {
        setCurrentPath('/admin-leads');
      } else if (p === '/economy-cargo-terms' || h === '#/economy-cargo-terms' || h === '#economy-cargo-terms' || p === '/terms' || h === '#/terms' || h === '#terms') {
        setCurrentPath('/economy-cargo-terms');
      } else if (p === '/cargo-items' || h === '#/cargo-items' || h === '#cargo-items') {
        setCurrentPath('/cargo-items');
      } else if (p === '/economy-cargo' || h === '#/economy-cargo' || h === '#economy-cargo') {
        setCurrentPath('/economy-cargo');
      } else if (p === '/processing' || h === '#/processing' || h === '#processing') {
        setCurrentPath('/processing');
      } else if (p === '/trust' || h === '#/trust' || h === '#trust') {
        setCurrentPath('/trust');
      } else if (p === '/revenue-partner' || h === '#/revenue-partner' || h === '#revenue-partner') {
        setCurrentPath('/revenue-partner');
      } else if (p === '/export-blueprint' || h === '#/export-blueprint' || h === '#export-blueprint') {
        setCurrentPath('/export-blueprint');
      } else if (p === '/export-blueprint/thank-you' || h === '#/export-blueprint/thank-you' || h === '#export-blueprint-thank-you') {
        setCurrentPath('/export-blueprint/thank-you');
      } else {
        setCurrentPath('/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    const hashPath = path === '/' ? '' : '#' + path;
    window.history.pushState({}, '', '/' + hashPath);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (currentPath === '/') {
      document.title = "Shipplix Logistics – Fast & Reliable Export Shipping from Nigeria";
    } else if (currentPath === '/admin-leads') {
      document.title = "Admin Leads Portal – Shipplix";
    } else if (currentPath === '/cargo-items') {
      document.title = "Permitted Export & Cargo Items Catalog – Shipplix";
    } else if (currentPath === '/economy-cargo') {
      document.title = "Economy Cargo & Split Space Shipping – Shipplix";
    } else if (currentPath === '/processing') {
      document.title = "Customs Clearance & Processing Flow – Shipplix";
    } else if (currentPath === '/trust') {
      document.title = "Trust & Anti-Scam Verification – Shipplix";
    } else if (currentPath === '/economy-cargo-terms') {
      document.title = "Economy Cargo Terms & Conditions – Shipplix";
    } else if (currentPath === '/revenue-partner') {
      document.title = "Become a Shipplix Revenue Partner – Earn referring customers";
    } else if (currentPath === '/export-blueprint') {
      document.title = "The African Export Blueprint | Free Export Business Guide | Shipplix";
    } else if (currentPath === '/export-blueprint/thank-you') {
      document.title = "Thank You – Download The African Export Blueprint | Shipplix";
    }
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-white">
      {currentPath !== '/admin-leads' && <Navbar onNavigate={navigateTo} currentPath={currentPath} />}
      
      <main className="min-h-screen">
        {currentPath === '/' && (
          <>
            <Hero />
            <UrgencyBanner />
            
            {/* Elegant Standalone Gateway Portal */}
            <section className="py-16 bg-white border-b border-slate-200">
              <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-12">
                  <span className="bg-blue-100 text-blue-900 text-[10px] font-black px-3 py-1.5 rounded uppercase tracking-widest font-mono">
                    Explore Standalone Divisions
                  </span>
                  <h2 className="text-3xl font-black uppercase text-slate-950 mt-2 mb-4 tracking-tighter">
                    Dedicated Customer Portals
                  </h2>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider max-w-xl mx-auto leading-relaxed">
                    Click any panel to jump into our specialized, deep-dive information pages.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Cargo Items", desc: "Lookup allowed foodstuff, cosmetics, fashion, and forbidden products.", link: "/cargo-items", num: "01" },
                    { title: "Economy Cargo", desc: "Cooperative space consolidation, freight estimators, and rates.", link: "/economy-cargo", num: "02" },
                    { title: "Processing Flow", desc: "Our 5-step packing, MMIA customs manifesting, and last-mile.", link: "/processing", num: "03" },
                    { title: "Trust & Reviews", desc: "Anti-scam video packing scales, customer reviews, and insurance.", link: "/trust", num: "04" },
                    { title: "Economy Terms", desc: "Full service agreements, dimensional metrics, and payload rules.", link: "/economy-cargo-terms", num: "05" },
                    { title: "Revenue Partner", desc: "Earn extra passive income by referring customers to ship with Shipplix.", link: "/revenue-partner", num: "06" },
                    { title: "Export Blueprint", desc: "Learn how to find overseas buyers and build custom customer acquisition systems.", link: "/export-blueprint", num: "07" }
                  ].map((portal, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors flex flex-col justify-between">
                      <div>
                        <div className="text-amber-500 font-black text-xs font-mono mb-2">{portal.num}</div>
                        <h3 className="text-sm font-black uppercase text-blue-950 tracking-tight mb-2">{portal.title}</h3>
                        <p className="text-[11px] text-slate-500 font-bold leading-normal mb-6">{portal.desc}</p>
                      </div>
                      <Button onClick={() => navigateTo(portal.link)} variant="outline" className="w-full text-[10px] py-2.5 uppercase tracking-widest font-black">
                        Open Portal
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <ExportCategories />
            <ShippingServices />
            <HowItWorks />
            <TrustSection />
            <DiasporaSection />
            <GroupShipping />
            <Testimonials />
            <ExportHub />
            
            {/* Urgent Recap Section */}
            <section className="py-16 bg-white overflow-hidden relative border-t border-slate-200">
              <div className="container mx-auto px-6 text-center">
                 <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-lg mb-8 shadow-2xl relative">
                    <Clock className="text-white" size={32} />
                    <div className="absolute inset-0 animate-ping rounded-lg bg-red-600 opacity-20"></div>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-none">
                   Batch Closing <span className="text-red-500">Fast</span>
                 </h2>
                 <p className="text-sm md:text-lg text-slate-500 font-bold max-w-2xl mx-auto mb-10 uppercase tracking-widest leading-relaxed">
                   If your goods miss this week's flight, you're <span className="text-slate-900 underline decoration-shipplix-yellow decoration-4 underline-offset-4">delaying your profit.</span>
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-3xl mx-auto border border-slate-200 rounded-xl overflow-hidden mb-12">
                    <div className="bg-red-50 p-6 border-b md:border-b-0 md:border-r border-slate-200">
                      <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-2">Mon - Wed Batch</div>
                      <div className="text-red-600 font-black text-lg">FULL</div>
                    </div>
                    <div className="bg-orange-50 p-6 border-b md:border-b-0 md:border-r border-slate-200">
                      <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-2">Wed - Fri Batch</div>
                      <div className="text-orange-500 font-black text-lg">ALMOST FULL</div>
                    </div>
                    <div className="bg-emerald-50 p-6">
                      <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-2">Weekend Batch</div>
                      <div className="text-emerald-600 font-black text-lg">SPOTS LEFT</div>
                    </div>
                 </div>
                 

                 <Button 
                   as="a" 
                   href={URL_RESERVE} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   variant="primary" 
                   className="mx-auto text-xs px-12 py-5 uppercase tracking-[0.2em] bg-shipplix-blue group"
                 >
                    Reserve My Spot Now
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                 </Button>
              </div>
            </section>

            <FinalCTA />
          </>
        )}

        {currentPath === '/cargo-items' && <CargoItemsPage />}
        {currentPath === '/economy-cargo' && <EconomyCargoPage />}
        {currentPath === '/processing' && <ProcessingPage />}
        {currentPath === '/trust' && <TrustPage />}
        {currentPath === '/economy-cargo-terms' && <EconomyTerms onBack={() => navigateTo('/')} />}
        {currentPath === '/revenue-partner' && <RevenuePartnerPage />}
        {currentPath === '/export-blueprint' && <ExportBlueprintPage onNavigate={navigateTo} currentPath={currentPath} />}
        {currentPath === '/export-blueprint/thank-you' && <ExportBlueprintPage onNavigate={navigateTo} currentPath={currentPath} />}
        {currentPath === '/admin-leads' && <AdminLeadsPage onNavigate={navigateTo} />}
      </main>

      {currentPath !== '/admin-leads' && <Footer onNavigate={navigateTo} />}
    </div>
  );
}
