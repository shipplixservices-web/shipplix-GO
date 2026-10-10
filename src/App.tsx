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
  TrendingUp,
  ShoppingCart,
  MessageSquare,
  Store,
  FileCheck,
  CreditCard,
  Briefcase,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Award,
  Facebook,
  Instagram,
  MapPin,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { openWhatsApp } from './utils/whatsapp';
import EconomyTerms from './components/EconomyTerms';
import CargoItemsPage from './components/CargoItemsPage';
import EconomyCargoPage from './components/EconomyCargoPage';
import ProcessingPage from './components/ProcessingPage';
import TrustPage from './components/TrustPage';
import RevenuePartnerPage from './components/RevenuePartnerPage';
import CreatorsPage from './components/CreatorsPage';
import ExportBlueprintPage from './components/ExportBlueprintPage';
import AdminLeadsPage from './components/AdminLeadsPage';
import GlobalLogisticsNetwork from './components/GlobalLogisticsNetwork';
import GlobalShippingNetworkSection from './components/GlobalShippingNetworkSection';
import { RealShipmentGallery } from './components/RealShipmentGallery';
import NigeriaToUsaPage from './components/NigeriaToUsaPage';
import NigeriaToUkPage from './components/NigeriaToUkPage';
import NigeriaToCanadaPage from './components/NigeriaToCanadaPage';
import NigeriaToEuropePage from './components/NigeriaToEuropePage';
import ChinaToNigeriaPage from './components/ChinaToNigeriaPage';
import UsaToNigeriaPage from './components/UsaToNigeriaPage';
import UkToNigeriaPage from './components/UkToNigeriaPage';
import NigeriaToHoustonPage from './components/NigeriaToHoustonPage';
import Breadcrumbs from './components/Breadcrumbs';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import shipplixPackagingUploaded from './assets/images/shipplix_packaging.png';
import heroLogisticsBanner from './assets/images/global_shipping_in_motion.png';
import globalShippingMotionImg from './assets/images/global_shipping_in_motion.png';
import shipplixOfficialLogo from './assets/images/shipplix_official_logo.png';
import servicePlaneBoxes from './assets/images/shipplix_airfreight_in_motion.png';
import serviceChinaShipping from './assets/images/service_china_shipping_1791028756928.jpg';
import serviceVanHiace from './assets/images/service_van_hiace_1791028733401.jpg';
import serviceTruckHaulage from './assets/images/regenerated_image_1791243757227.png';
import serviceLocalBoxes from './assets/images/service_local_boxes_1791028718311.jpg';
import QuickActionHub from './components/QuickActionHub';
import MobileBottomNav from './components/MobileBottomNav';
import HomepageServices from './components/HomepageServices';
import ShipmentTrackingSection from './components/ShipmentTrackingSection';
import WhyShipplixSection from './components/WhyShipplixSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhatsAppCtaSection from './components/WhatsAppCtaSection';
import { WhatsAppButton } from './components/WhatsAppButton';

// Common Components
const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  as: Component = 'button',
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'yellow' | 'emerald'; 
  className?: string;
  as?: any;
  [key: string]: any;
}) => {
  const base = "px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-center text-sm cursor-pointer";
  const variants = {
    primary: "bg-shipplix-blue text-white hover:bg-shipplix-navy shadow-md",
    yellow: "bg-shipplix-yellow text-blue-900 hover:bg-yellow-500 shadow-md",
    emerald: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md",
    outline: "border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 shadow-sm",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    ghost: "text-white hover:text-white hover:bg-white/10"
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
const URL_TRACK = "https://track.shipplix.com";
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
  const [expandedMobileSection, setExpandedMobileSection] = React.useState<string | null>(null);
  const [showAccountMenu, setShowAccountMenu] = React.useState(false);
  const [supportOpen, setSupportOpen] = React.useState(false);
  const lastFaqClickRef = React.useRef(0);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    setShowAccountMenu(false);
    setSupportOpen(false);
    onNavigate?.(path);
  };

  const handleFaqNavigation = (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
    }
    const now = Date.now();
    if (now - lastFaqClickRef.current < 250) {
      return;
    }
    lastFaqClickRef.current = now;

    setSupportOpen(false);
    setIsOpen(false);
    setShowAccountMenu(false);

    if (window.location.hash !== '#faq') {
      window.history.pushState(null, '', '/#faq');
    }

    const scrollToFaq = () => {
      const el = document.getElementById('faq');
      if (el) {
        const headerHeight = 72;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
        const targetTop = el.getBoundingClientRect().top + scrollTop - headerHeight;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        return true;
      }
      return false;
    };

    if (currentPath !== '/') {
      onNavigate?.('/#faq');
      setTimeout(scrollToFaq, 60);
      setTimeout(scrollToFaq, 200);
      setTimeout(scrollToFaq, 500);
    } else {
      scrollToFaq();
      setTimeout(scrollToFaq, 60);
      setTimeout(scrollToFaq, 200);
    }
  };

  React.useEffect(() => {
    if (!supportOpen) return;
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest('.support-dropdown-container')) {
        setSupportOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [supportOpen]);

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(prev => prev === section ? null : section);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shipplix-blue border-b-4 border-shipplix-yellow text-white py-2.5 sm:py-3 shadow-md">
      <div className="container max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-2 sm:gap-2.5 cursor-pointer" 
          onClick={() => {
            setIsOpen(false);
            onNavigate?.('/');
          }}
        >
          <img 
            src={shipplixOfficialLogo} 
            alt="Shipplix" 
            className="h-6 sm:h-7 w-auto object-contain brightness-0 invert"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div>
            <div className="bg-shipplix-yellow text-shipplix-blue font-black px-1.5 py-0.5 rounded text-base sm:text-lg tracking-tighter leading-none inline-block">
              SHIPPLIX
            </div>
            <div className="hidden sm:block text-[8px] font-black tracking-widest text-[#FFD700] uppercase leading-tight mt-0.5">
              THINK SHIPPING THINK SHIPPLIX
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-[10.5px] xl:text-xs font-bold uppercase tracking-wider">
          
          {/* 1. Services Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-shipplix-yellow transition-colors font-black uppercase tracking-wider focus:outline-none cursor-pointer">
              <span>Services</span>
              <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180 text-shipplix-yellow" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[270px]">
              <div className="bg-slate-900 border border-white/10 text-white rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl">
                <div className="px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[#FFD700] border-b border-white/10 mb-1">
                  Shipplix Logistics Services
                </div>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPath !== '/') {
                      onNavigate?.('/');
                      setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100);
                    } else {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors"
                >
                  All 6 Core Logistics Services
                </a>
                <a 
                  href="#/economy-cargo" 
                  onClick={(e) => handleLinkClick(e, '/economy-cargo')} 
                  className={`block px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors ${currentPath === '/economy-cargo' ? 'bg-white/10 text-shipplix-yellow font-black' : ''}`}
                >
                  Economy Air Cargo (9-14 Days)
                </a>
                <a 
                  href="#/cargo-items" 
                  onClick={(e) => handleLinkClick(e, '/cargo-items')} 
                  className={`block px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors ${currentPath === '/cargo-items' ? 'bg-white/10 text-shipplix-yellow font-black' : ''}`}
                >
                  Allowed Cargo Items Guide
                </a>
                <a 
                  href="#/processing" 
                  onClick={(e) => handleLinkClick(e, '/processing')} 
                  className={`block px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors ${currentPath === '/processing' ? 'bg-white/10 text-shipplix-yellow font-black' : ''}`}
                >
                  Inspection &amp; Live Video Packing
                </a>
                <div className="my-1 border-t border-white/10"></div>
                <button
                  onClick={() => openWhatsApp('truck')}
                  className="w-full text-left px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors cursor-pointer"
                >
                  Dedicated Truck &amp; Haulage
                </button>
                <button
                  onClick={() => openWhatsApp('van')}
                  className="w-full text-left px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors cursor-pointer"
                >
                  Van &amp; Hiace Hire
                </button>
              </div>
            </div>
          </div>

          {/* 2. Routes Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-shipplix-yellow transition-colors font-black uppercase tracking-wider focus:outline-none cursor-pointer">
              <span>Routes</span>
              <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180 text-shipplix-yellow" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[280px]">
              <div className="bg-slate-900 border border-white/10 text-white rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl">
                <div className="px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[#FFD700] border-b border-white/10 mb-1">
                  Core Export Corridors
                </div>
                <a 
                  href="#/ship-from-nigeria-to-usa" 
                  onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-usa')} 
                  className={`block px-3.5 py-2 rounded-xl text-[11px] font-black hover:bg-white/10 hover:text-shipplix-yellow transition-colors ${currentPath === '/ship-from-nigeria-to-usa' ? 'bg-white/10 text-shipplix-yellow font-black' : ''}`}
                >
                  Ship Nigeria to USA (All 50 States)
                </a>
                <a 
                  href="#/ship-from-nigeria-to-houston" 
                  onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-houston')} 
                  className={`block px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors ${currentPath === '/ship-from-nigeria-to-houston' ? 'bg-white/10 text-shipplix-yellow font-black' : ''}`}
                >
                  Ship Nigeria to Houston, TX
                </a>
                <a 
                  href="#/ship-from-nigeria-to-uk" 
                  onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-uk')} 
                  className={`block px-3.5 py-2 rounded-xl text-[11px] font-black hover:bg-white/10 hover:text-shipplix-yellow transition-colors ${currentPath === '/ship-from-nigeria-to-uk' ? 'bg-white/10 text-shipplix-yellow font-black' : ''}`}
                >
                  Ship Nigeria to UK (London Express)
                </a>
                <div className="px-3 py-1 text-[9px] font-black uppercase tracking-widest text-slate-400 border-t border-b border-white/10 my-1">
                  Global Corridors &amp; Imports
                </div>
                <a 
                  href="#/ship-from-nigeria-to-canada" 
                  onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-canada')} 
                  className={`block px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors ${currentPath === '/ship-from-nigeria-to-canada' ? 'bg-white/10 text-shipplix-yellow font-black' : ''}`}
                >
                  Ship Nigeria to Canada
                </a>
                <a 
                  href="#/ship-from-nigeria-to-europe" 
                  onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-europe')} 
                  className={`block px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors ${currentPath === '/ship-from-nigeria-to-europe' ? 'bg-white/10 text-shipplix-yellow font-black' : ''}`}
                >
                  Ship Nigeria to Europe (EU-Wide)
                </a>
                <a 
                  href="#/ship-from-china-to-nigeria" 
                  onClick={(e) => handleLinkClick(e, '/ship-from-china-to-nigeria')} 
                  className={`block px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors ${currentPath === '/ship-from-china-to-nigeria' ? 'bg-white/10 text-shipplix-yellow font-black' : ''}`}
                >
                  China ↔ Nigeria (Import Trade)
                </a>
                <button 
                  onClick={() => openWhatsApp('interstate')} 
                  className="w-full text-left px-3.5 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 hover:text-shipplix-yellow transition-colors cursor-pointer"
                >
                  Interstate Transport (36 States)
                </button>
              </div>
            </div>
          </div>

          {/* 3. Track Shipment */}
          <a 
            href="#tracking" 
            onClick={(e) => {
              e.preventDefault();
              if (currentPath !== '/') {
                onNavigate?.('/');
                setTimeout(() => document.getElementById('tracking')?.scrollIntoView({ behavior: 'smooth' }), 100);
              } else {
                document.getElementById('tracking')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hover:text-shipplix-yellow transition-colors py-2 flex items-center gap-1.5 cursor-pointer"
          >
            <Search size={14} className="text-[#FFD700]" />
            <span>Track Shipment</span>
          </a>

          {/* 4. Get a Quote */}
          <button 
            onClick={() => {
              if (currentPath !== '/') {
                onNavigate?.('/');
                setTimeout(() => document.getElementById('quick-actions')?.scrollIntoView({ behavior: 'smooth' }), 100);
              } else {
                document.getElementById('quick-actions')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hover:text-shipplix-yellow transition-colors py-2 flex items-center gap-1.5 cursor-pointer font-bold"
          >
            <Clock size={14} className="text-[#FFD700]" />
            <span>Get a Quote</span>
          </button>

          {/* 5. Support */}
          <div className="relative group py-2 support-dropdown-container">
            <button 
              type="button"
              onClick={() => {
                setSupportOpen(prev => !prev);
                setShowAccountMenu(false);
              }}
              className="flex items-center gap-1 hover:text-shipplix-yellow transition-colors font-bold uppercase tracking-wider focus:outline-none cursor-pointer"
            >
              <span>Support</span>
              <ChevronDown size={13} className={`transition-transform duration-200 text-shipplix-yellow ${supportOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
            </button>
            <div className={`absolute top-full left-0 pt-2 transition-all duration-200 z-50 min-w-[240px] ${supportOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'}`}>
              <div className="bg-slate-900 border border-white/10 text-white rounded-2xl shadow-2xl p-2.5 backdrop-blur-xl">
                <button 
                  onClick={() => {
                    setSupportOpen(false);
                    openWhatsApp('need_help');
                  }} 
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-[11px] font-bold text-emerald-400 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle size={14} className="fill-emerald-400/20" />
                    <span>WhatsApp Helpdesk</span>
                  </span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded uppercase font-black">24/7</span>
                </button>
                <a href="#/trust" onClick={(e) => { setSupportOpen(false); handleLinkClick(e, '/trust'); }} className="block px-3.5 py-2 rounded-xl text-[11px] font-bold text-slate-200 hover:bg-white/10 hover:text-shipplix-yellow transition-colors">
                  Trust &amp; Export Security
                </a>
                <a 
                  href="/#faq" 
                  onClick={handleFaqNavigation}
                  onPointerDown={(e) => {
                    if (e.button === 0) {
                      handleFaqNavigation(e);
                    }
                  }}
                  className="block px-3.5 py-2 rounded-xl text-[11px] font-bold text-slate-200 hover:bg-white/10 hover:text-shipplix-yellow transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </a>
                <a href="mailto:services@shipplix.com" onClick={() => setSupportOpen(false)} className="block px-3.5 py-2 rounded-xl text-[11px] font-medium text-slate-400 hover:text-white transition-colors lowercase">
                  services@shipplix.com
                </a>
              </div>
            </div>
          </div>

          {/* 6. WhatsApp Button */}
          <WhatsAppButton
            action="general"
            label="WhatsApp"
            variant="whatsapp"
            size="sm"
            className="text-[11px] font-black uppercase px-3 py-2 rounded-xl shrink-0"
          />

          {/* 7. Book a shipment */}
          <a 
            href="https://myshipment.shipplix.com" 
            target="_self" 
            className="bg-[#FFD700] hover:bg-[#F5C400] text-[#032B73] font-black py-2 px-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md text-[11px] uppercase tracking-wider flex items-center gap-1.5 shrink-0"
          >
            <Package size={13} />
            <span>Book a shipment</span>
          </a>

        </div>

        {/* Header Utility Area: Account & Mobile Hamburger Menu */}
        <div className="flex items-center gap-1 sm:gap-2">

          {/* Account Area (Mobile & Tablet quick access) */}
          <div className="relative lg:hidden">
            <button
              onClick={() => {
                setShowAccountMenu(!showAccountMenu);
                setIsOpen(false);
              }}
              className="p-1.5 sm:p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5 min-w-[36px] min-h-[36px]"
              aria-label="Account and shipments portal"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-[#FFD700]">
                <User size={14} />
              </div>
              <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-wider text-slate-200">
                Portal
              </span>
            </button>

            {/* Account Dropdown */}
            <AnimatePresence>
              {showAccountMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-72 bg-slate-900 border border-white/15 rounded-2xl shadow-2xl p-3 text-white z-50 text-left"
                >
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 mb-2">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#FFD700]">Shipplix Customer Portal</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">Manage &amp; Track Consignments</div>
                  </div>

                  <div className="space-y-1">
                    <a
                      href="https://myshipment.shipplix.com"
                      target="_self"
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-xs font-black uppercase tracking-wider text-white"
                    >
                      <span className="flex items-center gap-2">
                        <Package size={14} className="text-[#FFD700]" />
                        <span>My Shipments Portal</span>
                      </span>
                      <ExternalLink size={12} className="text-slate-400" />
                    </a>

                    <a
                      href="https://track.shipplix.com"
                      onClick={() => setShowAccountMenu(false)}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-xs font-black uppercase tracking-wider text-white cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Search size={14} className="text-blue-400" />
                        <span>Track Airway Bill</span>
                      </span>
                      <ArrowRight size={12} className="text-slate-400" />
                    </a>

                    <button
                      onClick={() => {
                        setShowAccountMenu(false);
                        openWhatsApp('quote');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-xs font-black uppercase tracking-wider text-white cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <DollarSign size={14} className="text-[#FFD700]" />
                        <span>Get Instant Quote</span>
                      </span>
                      <ArrowRight size={12} className="text-slate-400" />
                    </button>

                    <button
                      onClick={() => {
                        setShowAccountMenu(false);
                        openWhatsApp('need_help');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/60 transition-colors flex items-center justify-between text-xs font-black uppercase tracking-wider cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <MessageCircle size={14} className="text-emerald-400 fill-emerald-400/20" />
                        <span>WhatsApp Helpdesk</span>
                      </span>
                      <ArrowRight size={12} className="text-emerald-400" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Mobile Hamburger Toggle Button */}
          <button 
            className="lg:hidden flex items-center justify-center p-2 rounded-xl hover:bg-white/10 transition-colors text-white min-w-[36px] min-h-[36px] cursor-pointer" 
            onClick={() => {
              setIsOpen(!isOpen);
              setShowAccountMenu(false);
            }} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-white/10 overflow-hidden text-white"
          >
            <div className="flex flex-col gap-2 p-6 font-bold text-xs uppercase tracking-wider max-h-[80vh] overflow-y-auto">
              
              {/* Home */}
              <a 
                href="#/" 
                onClick={(e) => handleLinkClick(e, '/')} 
                className={`py-2 px-3 rounded-xl transition-colors ${currentPath === '/' ? 'bg-white/10 text-shipplix-yellow font-black' : 'hover:text-shipplix-yellow'}`}
              >
                Home
              </a>

              {/* International Shipping Routes Accordion - PRIMARY */}
              <div className="border-b border-white/10 pb-2">
                <button 
                  onClick={() => toggleMobileSection('routes')} 
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors font-black uppercase text-shipplix-yellow"
                >
                  <span className="flex items-center gap-1.5">
                    <span>International Shipping</span>
                    <span className="text-[9px] bg-shipplix-yellow/20 text-shipplix-yellow px-1.5 py-0.5 rounded">Core</span>
                  </span>
                  <ChevronDown size={16} className={`text-shipplix-yellow transition-transform duration-200 ${expandedMobileSection === 'routes' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileSection === 'routes' && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-2 border-l-2 border-shipplix-yellow/40 my-1 bg-white/5 rounded-r-xl">
                    <div className="text-[9px] font-black uppercase tracking-widest text-shipplix-yellow opacity-80 pt-1">Hero Routes</div>
                    <a href="#/ship-from-nigeria-to-usa" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-usa')} className="py-1.5 text-white font-black hover:text-shipplix-yellow">Ship Nigeria to USA</a>
                    <a href="#/ship-from-nigeria-to-houston" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-houston')} className="py-1.5 text-slate-200 hover:text-shipplix-yellow">Ship Nigeria to Houston, TX</a>
                    <a href="#/ship-from-nigeria-to-uk" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-uk')} className="py-1.5 text-white font-black hover:text-shipplix-yellow">Ship Nigeria to UK</a>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 pt-2 border-t border-white/10">Global Corridors</div>
                    <a href="#/ship-from-nigeria-to-canada" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-canada')} className="py-1.5 text-slate-200 hover:text-shipplix-yellow">Ship Nigeria to Canada</a>
                    <a href="#/ship-from-nigeria-to-europe" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-europe')} className="py-1.5 text-slate-200 hover:text-shipplix-yellow">Ship Nigeria to Europe</a>
                    <a href="#/ship-from-china-to-nigeria" onClick={(e) => handleLinkClick(e, '/ship-from-china-to-nigeria')} className="py-1.5 text-slate-200 hover:text-shipplix-yellow">China ↔ Nigeria (Import)</a>
                    <a href="#/ship-from-usa-to-nigeria" onClick={(e) => handleLinkClick(e, '/ship-from-usa-to-nigeria')} className="py-1.5 text-slate-200 hover:text-shipplix-yellow">Ship USA to Nigeria</a>
                    <a href="#/ship-from-uk-to-nigeria" onClick={(e) => handleLinkClick(e, '/ship-from-uk-to-nigeria')} className="py-1.5 text-slate-200 hover:text-shipplix-yellow">Ship UK to Nigeria</a>
                  </div>
                )}
              </div>

              {/* Domestic Shipping Accordion - SECONDARY */}
              <div className="border-b border-white/10 pb-2">
                <button 
                  onClick={() => toggleMobileSection('domestic')} 
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors font-bold uppercase text-slate-300"
                >
                  <span>Domestic Logistics</span>
                  <ChevronDown size={16} className={`text-slate-400 transition-transform duration-200 ${expandedMobileSection === 'domestic' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileSection === 'domestic' && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-2 border-l-2 border-white/20 my-1 bg-white/5 rounded-r-xl">
                    <a 
                      href="#domestic-services" 
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        if (currentPath !== '/') {
                          onNavigate?.('/');
                          setTimeout(() => {
                            document.getElementById('domestic-services')?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        } else {
                          document.getElementById('domestic-services')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }} 
                      className="py-1.5 text-slate-300 hover:text-shipplix-yellow"
                    >
                      Interstate Haulage (36 States)
                    </a>
                    <a 
                      href="#domestic-services" 
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        if (currentPath !== '/') {
                          onNavigate?.('/');
                          setTimeout(() => {
                            document.getElementById('domestic-services')?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        } else {
                          document.getElementById('domestic-services')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }} 
                      className="py-1.5 text-slate-300 hover:text-shipplix-yellow"
                    >
                      Intra-State City Delivery
                    </a>
                    <a 
                      href="#truck-van-hire" 
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        if (currentPath !== '/') {
                          onNavigate?.('/');
                          setTimeout(() => {
                            document.getElementById('truck-van-hire')?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        } else {
                          document.getElementById('truck-van-hire')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }} 
                      className="py-1.5 text-slate-300 hover:text-shipplix-yellow"
                    >
                      Dedicated Truck &amp; Van Hire
                    </a>
                  </div>
                )}
              </div>

              {/* Services Accordion */}
              <div className="border-b border-white/10 pb-2">
                <button 
                  onClick={() => toggleMobileSection('services')} 
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors font-black uppercase text-slate-200"
                >
                  Services
                  <ChevronDown size={16} className={`text-shipplix-yellow transition-transform duration-200 ${expandedMobileSection === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileSection === 'services' && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-2 border-l-2 border-shipplix-yellow/40 my-1 bg-white/5 rounded-r-xl">
                    <a href="#/economy-cargo" onClick={(e) => handleLinkClick(e, '/economy-cargo')} className="py-1.5 text-slate-300 hover:text-shipplix-yellow">Economy Air Cargo</a>
                    <a href="#/processing" onClick={(e) => handleLinkClick(e, '/processing')} className="py-1.5 text-slate-300 hover:text-shipplix-yellow">Processing &amp; Inspection</a>
                    <a href="#/cargo-items" onClick={(e) => handleLinkClick(e, '/cargo-items')} className="py-1.5 text-slate-300 hover:text-shipplix-yellow">Allowed Cargo Items</a>
                    <a href="#/economy-cargo-terms" onClick={(e) => handleLinkClick(e, '/economy-cargo-terms')} className="py-1.5 text-slate-300 hover:text-shipplix-yellow">Economy Cargo Terms</a>
                    <a href="#/revenue-partner" onClick={(e) => handleLinkClick(e, '/revenue-partner')} className="py-1.5 text-slate-300 hover:text-shipplix-yellow">Revenue Partner Program</a>
                  </div>
                )}
              </div>

              {/* Tracking */}
              <a 
                href="https://track.shipplix.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-shipplix-yellow transition-colors flex items-center justify-between"
              >
                <span>Track Shipment</span>
                <ExternalLink size={14} className="text-shipplix-yellow" />
              </a>

              {/* Shop */}
              <a 
                href="https://shop.shipplix.com" 
                className="py-2.5 px-3 rounded-xl hover:bg-white/5 hover:text-shipplix-yellow transition-colors flex items-center justify-between font-black uppercase text-slate-200"
              >
                <span>Shop</span>
              </a>

              {/* Resources Accordion */}
              <div className="border-b border-white/10 pb-2">
                <button 
                  onClick={() => toggleMobileSection('resources')} 
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors font-black uppercase text-slate-200"
                >
                  Resources
                  <ChevronDown size={16} className={`text-shipplix-yellow transition-transform duration-200 ${expandedMobileSection === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {expandedMobileSection === 'resources' && (
                  <div className="pl-4 pr-2 py-2 flex flex-col gap-2 border-l-2 border-shipplix-yellow/40 my-1 bg-white/5 rounded-r-xl">
                    <a href="#/creators" onClick={(e) => handleLinkClick(e, '/creators')} className="py-1.5 text-slate-300 hover:text-shipplix-yellow flex items-center justify-between">
                      <span>Creator &amp; Affiliate Program</span>
                      <span className="text-[9px] font-black bg-[#FEB919] text-[#032B73] px-1.5 py-0.5 rounded uppercase">Earn</span>
                    </a>
                    <a href="#/revenue-partner" onClick={(e) => handleLinkClick(e, '/revenue-partner')} className="py-1.5 text-slate-300 hover:text-shipplix-yellow">Revenue Partner Program</a>
                    <a href="#/export-blueprint" onClick={(e) => handleLinkClick(e, '/export-blueprint')} className="py-1.5 text-slate-300 hover:text-shipplix-yellow">Export Blueprint</a>
                    <a href="#/trust" onClick={(e) => handleLinkClick(e, '/trust')} className="py-1.5 text-slate-300 hover:text-shipplix-yellow">Trust &amp; Security</a>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-3">
                <a 
                  href="https://myshipment.shipplix.com" 
                  target="_self" 
                  className="w-full text-center bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-3 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-xs uppercase tracking-widest"
                >
                  Book my shipment
                </a>
                <Button 
                  as="a" 
                  href={URL_QUOTE} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="ghost" 
                  className="w-full border border-white/20 text-white hover:bg-white/10"
                >
                  Get Quote
                </Button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Sections
const Hero = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  const scrollToQuickActions = (tabId?: 'book' | 'track' | 'rates') => {
    const el = document.getElementById('quick-actions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = `Hello Shipplix!

I would like to get a shipping quote / book specialized international shipping.

• Tagline: THINK SHIPPING THINK SHIPPLIX
• Move Anything With Shipplix (Nigeria ↔ USA, UK, Canada & China)

Please provide me with your latest schedules and rates. Thank you!`;

    window.open(`https://wa.me/2349168273513?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative pt-28 md:pt-36 lg:pt-40 xl:pt-44 pb-20 md:pb-28 lg:pb-36 bg-[#032B73] text-white overflow-hidden select-none">
      {/* Background World Flow Grid Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Subtle Glow Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0066FF]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#FFD700]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Headlines, Tagline, Value Prop & CTAs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Brand Header & Official Tagline */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
                  <img 
                    src={shipplixOfficialLogo} 
                    alt="Shipplix" 
                    className="h-5 w-auto object-contain brightness-0 invert" 
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#FFD700]">
                    SHIPPLIX
                  </span>
                </div>

                <span className="bg-[#FFD700] text-[#032B73] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                  THINK SHIPPING THINK SHIPPLIX
                </span>
              </div>

              {/* Main Positioning Headline */}
              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                  Move Anything <br />
                  <span className="text-[#FFD700] underline decoration-white/40 decoration-4 underline-offset-8">
                    With Shipplix.
                  </span>
                </h1>
                
                {/* Supporting Route Copy */}
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-200">
                  <span className="bg-white/15 px-3 py-1 rounded-lg border border-white/10">
                    Local • National • International
                  </span>
                  <span className="text-[#FFD700] font-black">
                    Nigeria ↔ USA, UK, Canada &amp; China
                  </span>
                </div>
              </div>

              {/* Core Reassuring Statement */}
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed max-w-xl">
                From foodstuff, dried fish, kpomo, and Miss Paris perfume to spiritual products, approved medication, fashion, and commercial inventory: tell us what you want to move, where it is going, and Shipplix handles the rest.
              </p>

              {/* CTA Action Row */}
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
                {/* Primary CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById('quick-actions');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#FFD700] hover:bg-[#F5C400] text-[#032B73] font-black py-4 px-7 rounded-2xl shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer border border-[#FFD700]"
                >
                  <Package size={18} className="fill-[#032B73]" />
                  <span>Get a Quote</span>
                  <ArrowRight size={16} />
                </button>

                {/* Secondary CTA */}
                <button
                  onClick={() => {
                    const el = document.getElementById('tracking');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/15 hover:bg-white/25 text-white font-black py-4 px-6 rounded-2xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                >
                  <Search size={16} className="text-[#FFD700]" />
                  <span>Track Shipment</span>
                </button>

                {/* WhatsApp CTA */}
                <WhatsAppButton
                  action="general"
                  label="Chat on WhatsApp"
                  variant="whatsapp"
                  size="md"
                />
              </div>

              {/* Trust Indicators / Badges */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px] font-bold text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={13} />
                  </div>
                  <span>Door-to-Door Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center shrink-0">
                    <ShieldCheck size={13} />
                  </div>
                  <span>Export Cleared at MMIA</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <div className="w-5 h-5 rounded-full bg-blue-400/20 text-blue-300 flex items-center justify-center shrink-0">
                    <Plane size={13} />
                  </div>
                  <span>3-5 Days Express Flights</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Visual Showcase (Airplanes, Containers, Trucks, Global Movements) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Main Logistics Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group">
                <img 
                  src={globalShippingMotionImg} 
                  alt="Shipplix Global Shipping in Motion - Aircraft, Vessels, Trucks and Air Cargo" 
                  className="w-full h-80 sm:h-96 lg:h-[430px] xl:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#032B73]/90 via-[#032B73]/20 to-transparent"></div>
                
                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-[#032B73]/80 backdrop-blur-md text-[#FFD700] text-[10px] font-black uppercase px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                    <Plane size={12} />
                    Direct Air &amp; Ocean Freighting
                  </span>
                  <span className="bg-emerald-500 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-md animate-pulse">
                    Live Dispatch
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-[#FFD700]">
                        Global Movement Corridors
                      </div>
                      <div className="text-xs font-black text-white">
                        Lagos MMIA to Houston • London • Toronto • Guangzhou
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Highlight Badge 1: Watch Cargo Live */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-slate-900 p-3 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Video size={20} />
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase text-emerald-700 tracking-wider">
                    Anti-Scam Transparency
                  </div>
                  <div className="text-xs font-black text-slate-900">
                    Watch Cargo Packed Live
                  </div>
                </div>
              </div>

              {/* Floating Mini Highlight Badge 2: Flight Status */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900/90 text-white p-3 rounded-2xl shadow-xl border border-white/20 items-center gap-2.5 backdrop-blur-md">
                <div>
                  <div className="text-[9px] font-black uppercase text-[#FFD700] tracking-wider">
                    Weekly Cargo Flights
                  </div>
                  <div className="text-xs font-black">
                    Wed &amp; Fri Departures
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

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

const TrustCertifications = () => (
  <section className="bg-slate-50 py-6 border-b border-slate-200 font-sans">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-items-center max-w-4xl mx-auto">
        
        {/* Badge 1: 100% Tax Compliant */}
        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200/80 shadow-sm w-full transition-all duration-300 hover:shadow-md">
          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
            <FileCheck size={20} className="stroke-[2.5]" />
          </div>
          <div>
            <div className="font-black text-slate-900 text-[11px] uppercase tracking-tight">100% Tax Compliant</div>
            <div className="text-[9px] text-slate-500 font-extrabold tracking-wider uppercase">FIRS Fully Cleared</div>
          </div>
        </div>

        {/* Badge 2: CAC Registered */}
        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200/80 shadow-sm w-full transition-all duration-300 hover:shadow-md">
          <div className="p-2 bg-amber-50 text-amber-600 rounded-lg shrink-0">
            <ShieldCheck size={20} className="stroke-[2.5]" />
          </div>
          <div>
            <div className="font-black text-slate-900 text-[11px] uppercase tracking-tight">CAC Registered</div>
            <div className="text-[9px] text-slate-500 font-extrabold tracking-wider uppercase">RC: 8032416</div>
          </div>
        </div>

        {/* Badge 3: Secure Payment Gateway */}
        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200/80 shadow-sm w-full transition-all duration-300 hover:shadow-md">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
            <CreditCard size={20} className="stroke-[2.5]" />
          </div>
          <div>
            <div className="font-black text-slate-900 text-[11px] uppercase tracking-tight">Secure Payments</div>
            <div className="text-[9px] text-slate-500 font-extrabold tracking-wider uppercase">Encrypted Checkout</div>
          </div>
        </div>

      </div>
    </div>
  </section>
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
          subtitle="Whether you produce foodstuff, fashion, or cultural goods, Shipplix powers your global shipping and trade growth."
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

const CountUp = ({ value, duration = 800 }: { value: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalFrames = Math.round(duration / 16);
    const increment = end / totalFrames;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const currentVal = Math.min(Math.round(increment * currentFrame), end);
      setCount(currentVal);

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}%</span>;
};

const TopItemCategoriesShipped = () => {
  type TabId = 'China' | 'USA' | 'UK' | 'Canada' | 'Europe';
  const [activeTab, setActiveTab] = React.useState<TabId>('China');

  const tabs: { id: TabId; label: string }[] = [
    { id: 'China', label: 'China' },
    { id: 'USA', label: 'USA' },
    { id: 'UK', label: 'United Kingdom' },
    { id: 'Canada', label: 'Canada' },
    { id: 'Europe', label: 'Europe' }
  ];

  const categoriesData = {
    China: {
      title: "Top Item Categories Shipped (China Import & Export)",
      items: [
        { label: "Electronics & Tech Hardware", percentage: 35, color: "bg-blue-900" },
        { label: "Fashion, Textiles & Apparel", percentage: 28, color: "bg-blue-600" },
        { label: "Agricultural Goods (Sesame, Cocoa)", percentage: 18, color: "bg-shipplix-accent" },
        { label: "Machinery & Industrial Hardware", percentage: 12, color: "bg-teal-500" },
        { label: "Commercial Goods & Materials", percentage: 7, color: "bg-slate-400" },
      ],
      destinations: [{ x: 380, y: 110, label: "China (Guangzhou / Yiwu)" }],
      flightPath: "M 240 175 Q 310 120 380 110",
      packagePos: { x: 76, y: 28 }
    },
    USA: {
      title: "Top Item Categories Shipped To United States",
      items: [
        { label: "African Food & Groceries", percentage: 42, color: "bg-blue-900" },
        { label: "Fashion & Clothing", percentage: 24, color: "bg-blue-600" },
        { label: "Beauty Products", percentage: 13, color: "bg-shipplix-accent" },
        { label: "Health & Herbal Products", percentage: 11, color: "bg-teal-500" },
        { label: "Electronics", percentage: 10, color: "bg-slate-400" },
      ],
      destinations: [{ x: 110, y: 120, label: "USA" }],
      flightPath: "M 240 175 Q 165 110 110 120",
      packagePos: { x: 22, y: 35 }
    },
    UK: {
      title: "Top Item Categories Shipped To United Kingdom",
      items: [
        { label: "African Food & Groceries", percentage: 48, color: "bg-blue-900" },
        { label: "Fashion & Clothing", percentage: 20, color: "bg-blue-600" },
        { label: "Personal Care", percentage: 12, color: "bg-shipplix-accent" },
        { label: "Home Essentials", percentage: 10, color: "bg-teal-500" },
        { label: "Business Parcels", percentage: 10, color: "bg-slate-400" },
      ],
      destinations: [{ x: 235, y: 85, label: "London, UK" }],
      flightPath: "M 240 175 Q 225 125 235 85",
      packagePos: { x: 52, y: 22 }
    },
    Canada: {
      title: "Top Item Categories Shipped To Canada",
      items: [
        { label: "African Food & Groceries", percentage: 40, color: "bg-blue-900" },
        { label: "Fashion & Clothing", percentage: 22, color: "bg-blue-600" },
        { label: "Beauty Products", percentage: 15, color: "bg-shipplix-accent" },
        { label: "Health Products", percentage: 13, color: "bg-teal-500" },
        { label: "Electronics", percentage: 10, color: "bg-slate-400" },
      ],
      destinations: [{ x: 100, y: 90, label: "Canada" }],
      flightPath: "M 240 175 Q 160 100 100 90",
      packagePos: { x: 20, y: 25 }
    },
    Europe: {
      title: "Top Item Categories Shipped Across Europe",
      items: [
        { label: "African Food & Groceries", percentage: 38, color: "bg-blue-900" },
        { label: "Fashion & Clothing", percentage: 25, color: "bg-blue-600" },
        { label: "Beauty & Cosmetics", percentage: 15, color: "bg-shipplix-accent" },
        { label: "Health Products", percentage: 12, color: "bg-teal-500" },
        { label: "Commercial Goods", percentage: 10, color: "bg-slate-400" },
      ],
      destinations: [
        { x: 245, y: 95, label: "France" },
        { x: 260, y: 90, label: "Germany" },
        { x: 260, y: 110, label: "Italy" }
      ],
      flightPath: "M 240 175 Q 248 130 252 100",
      packagePos: { x: 56, y: 28 }
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 font-sans" id="volume-statistics">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle 
          title="Top Item Categories Shipped" 
          subtitle="Real-time volume distribution of goods exported from Nigeria to our key global destinations."
          centered={true}
        />

        {/* Custom Premium Tabs with Sliding Pill */}
        <div className="flex justify-start sm:justify-center mb-12 overflow-x-auto scrollbar-hide max-w-full px-2 py-1">
          <div className="bg-slate-200/60 p-1.5 rounded-full flex gap-1 border border-slate-300/40 relative min-w-max mx-auto">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider transition-colors duration-300 focus:outline-none select-none whitespace-nowrap ${
                    isSelected ? 'text-blue-950' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-white rounded-full shadow-md border border-slate-200/60"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content with transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Progress Bars (Left column) */}
            <div className="lg:col-span-5 space-y-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-50 text-blue-950 rounded-lg shrink-0">
                  <TrendingUp size={20} className="stroke-[2.5]" />
                </div>
                <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-slate-900 leading-tight">
                  {categoriesData[activeTab].title}
                </h3>
              </div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-6">
                Weekly cargo volume share by category
              </p>
              
              <div className="space-y-4">
                {categoriesData[activeTab].items.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-wide">
                      <span className="text-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item.label}
                      </span>
                      <span className="text-blue-900 font-mono font-black text-sm">
                        <CountUp value={item.percentage} />
                      </span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-[2px] border border-slate-200/40">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map (Right column) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 border border-slate-850 rounded-3xl p-6 relative overflow-hidden h-[340px] md:h-[400px] flex items-center justify-center shadow-xl">
                {/* World Map Background Grid / Glows */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
                
                {/* Soft ambient glow behind map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-blue-500/10 blur-[80px]" />
                  {activeTab === 'China' && <div className="absolute left-[70%] top-[30%] w-32 h-32 rounded-full bg-amber-400/20 blur-[50px] animate-pulse" />}
                  {activeTab === 'USA' && <div className="absolute left-[20%] top-[40%] w-32 h-32 rounded-full bg-blue-500/20 blur-[50px] animate-pulse" />}
                  {activeTab === 'UK' && <div className="absolute left-[45%] top-[30%] w-24 h-24 rounded-full bg-blue-500/20 blur-[45px] animate-pulse" />}
                  {activeTab === 'Canada' && <div className="absolute left-[18%] top-[30%] w-32 h-32 rounded-full bg-blue-500/20 blur-[50px] animate-pulse" />}
                  {activeTab === 'Europe' && <div className="absolute left-[50%] top-[30%] w-32 h-32 rounded-full bg-blue-500/20 blur-[50px] animate-pulse" />}
                </div>

                <svg viewBox="0 0 500 300" className="w-full h-full relative z-10 select-none">
                  {/* Stylized simplified continent paths with soft low opacity */}
                  {/* North America */}
                  <path 
                    d="M30,70 L50,60 L90,55 L130,50 L160,50 L190,40 L180,70 L150,85 L140,110 L125,125 L115,140 L100,140 L90,120 L80,110 L60,115 L50,100 Z" 
                    fill="currentColor" 
                    className={`transition-colors duration-500 ${activeTab === 'USA' || activeTab === 'Canada' ? 'text-slate-700/80' : 'text-slate-800/40'}`} 
                  />
                  
                  {/* South America */}
                  <path 
                    d="M110,150 L125,155 L140,170 L155,190 L165,210 L150,240 L135,270 L125,280 L120,260 L120,230 L110,200 L105,175 Z" 
                    fill="currentColor" 
                    className="text-slate-800/40 transition-colors duration-500" 
                  />
                  
                  {/* Africa */}
                  <path 
                    d="M200,160 L220,150 L245,140 L270,145 L285,155 L295,170 L300,190 L285,220 L270,250 L255,275 L245,260 L245,230 L225,200 L210,190 Z" 
                    fill="currentColor" 
                    className="text-slate-700/60" 
                  />
                  
                  {/* Europe */}
                  <path 
                    d="M205,120 L210,105 L225,85 L245,75 L265,70 L280,75 L275,100 L260,115 L245,120 L225,125 Z" 
                    fill="currentColor" 
                    className={`transition-colors duration-500 ${activeTab === 'UK' || activeTab === 'Europe' ? 'text-slate-700/80' : 'text-slate-800/40'}`} 
                  />
                  
                  {/* Asia */}
                  <path 
                    d="M285,75 L310,65 L350,60 L390,55 L430,60 L460,70 L470,90 L465,110 L440,120 L410,135 L375,145 L345,150 L315,140 L295,115 Z" 
                    fill="currentColor" 
                    className={`transition-colors duration-500 ${activeTab === 'China' ? 'text-amber-400/70' : 'text-slate-800/40'}`} 
                  />
                  
                  {/* Australia */}
                  <path 
                    d="M400,220 L425,215 L450,220 L460,240 L450,260 L430,265 L410,255 L395,240 Z" 
                    fill="currentColor" 
                    className="text-slate-800/40 transition-colors duration-500" 
                  />

                  {/* Origin Pin: Lagos, Nigeria */}
                  <g className="translate-x-[240px] translate-y-[175px]">
                    <circle r="4" fill="#facc15" />
                    <circle r="8" fill="none" stroke="#facc15" strokeWidth="1.5" className="animate-ping opacity-75" />
                  </g>

                  {/* Label for Lagos */}
                  <text x="248" y="188" fill="#facc15" fontSize="8" fontWeight="bold" className="font-mono tracking-widest uppercase opacity-80">
                    Lagos (MMIA)
                  </text>

                  {/* Dotted Flight Path */}
                  {activeTab === 'Europe' ? (
                    <>
                      {/* France */}
                      <motion.path 
                        id="path-France"
                        d="M 240 175 Q 235 130 245 95" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                      {/* Germany */}
                      <motion.path 
                        id="path-Germany"
                        d="M 240 175 Q 248 130 260 90" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                      />
                      {/* Italy */}
                      <motion.path 
                        id="path-Italy"
                        d="M 240 175 Q 252 140 260 110" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                      />
                    </>
                  ) : (
                    <motion.path 
                      id={`flightPath-${activeTab}`}
                      d={categoriesData[activeTab].flightPath} 
                      fill="none" 
                      stroke="#3b82f6" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  )}

                  {/* Native animated plane flying along path */}
                  {activeTab === 'Europe' ? (
                    <>
                      {/* Plane 1: France */}
                      <g>
                        <path d="M-4,-4 L4,0 L-4,4 L-2,0 Z" fill="#facc15" transform="scale(1.3)" />
                        <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto">
                          <mpath href="#path-France" />
                        </animateMotion>
                      </g>
                      {/* Plane 2: Germany */}
                      <g>
                        <path d="M-4,-4 L4,0 L-4,4 L-2,0 Z" fill="#facc15" transform="scale(1.3)" />
                        <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                          <mpath href="#path-Germany" />
                        </animateMotion>
                      </g>
                    </>
                  ) : (
                    <g>
                      <path d="M-4,-4 L4,0 L-4,4 L-2,0 Z" fill="#facc15" transform="scale(1.4)" />
                      <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                        <mpath href={`#flightPath-${activeTab}`} />
                      </animateMotion>
                    </g>
                  )}

                  {/* Destination Pin(s) */}
                  {categoriesData[activeTab].destinations.map((dest, i) => (
                    <g key={i} className="transition-all duration-500" transform={`translate(${dest.x}, ${dest.y})`}>
                      {/* Glow rings */}
                      <circle r="6" fill="#3b82f6" opacity="0.4" className="animate-ping" style={{ animationDuration: '3s' }} />
                      <circle r="12" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.2" className="animate-pulse" />
                      <circle r="3" fill="#3b82f6" />
                      
                      {/* Custom tooltip / label for the pin */}
                      <text x="8" y="3" fill="#ffffff" fontSize="7" fontWeight="black" className="font-sans uppercase tracking-wider bg-slate-950/80 px-1 py-0.5 rounded">
                        {dest.label}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Floating Package Icons */}
                <AnimatePresence>
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.6, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.4 }}
                    style={{ 
                      position: 'absolute', 
                      left: `${categoriesData[activeTab].packagePos.x}%`, 
                      top: `${categoriesData[activeTab].packagePos.y}%` 
                    }}
                    className="z-20 bg-slate-950/95 border border-slate-800 p-2 px-3 rounded-xl shadow-2xl flex items-center gap-1.5 pointer-events-none"
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Package className="text-shipplix-yellow" size={14} />
                    </motion.div>
                    <span className="text-[9px] font-black uppercase text-white tracking-widest font-mono">Cargo Shipped</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const PremiumPackagingSection = () => {
  const [imageSrc] = React.useState<string>(shipplixPackagingUploaded);

  const features = [
    "Branded Premium Packaging",
    "Secure Shipment Handling",
    "Worldwide Delivery",
    "Real-Time Tracking",
    "Fast Processing",
    "Reliable Logistics"
  ];

  const stats = [
    {
      value: "10,000+",
      label: "Packages Delivered",
      sub: "USA • UK • Canada • Europe",
      icon: <Package className="text-shipplix-yellow" size={20} />
    },
    {
      value: "99%",
      label: "Customer Satisfaction",
      sub: "Fast & Secure",
      icon: <Award className="text-shipplix-yellow" size={20} />
    },
    {
      value: "24/7",
      label: "Customer Support",
      sub: "Dedicated Team",
      icon: <Clock className="text-shipplix-yellow" size={20} />
    },
    {
      value: "100%",
      label: "Secure & Covered",
      sub: "Fully Insured",
      icon: <ShieldCheck className="text-shipplix-yellow" size={20} />
    }
  ];

  return (
    <section id="packaging-showcase" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50/50 border-b border-slate-200 font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-900 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full border border-blue-100">
                <ShieldCheck size={12} className="stroke-[2.5]" />
                Premium Packaging Standards
              </span>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 leading-tight">
                Professional Packaging That Protects Every Shipment
              </h2>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                Every package shipped with Shipplix is professionally handled using secure packaging materials, branded shipping bags, and reliable tracking systems to ensure your shipment arrives safely from Nigeria to destinations worldwide.
              </p>
            </div>

            {/* Checklist Features */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 bg-emerald-50 text-emerald-600 rounded-full shrink-0 border border-emerald-100">
                    <CheckCircle2 size={12} className="stroke-[3]" />
                  </span>
                  <span className="text-xs md:text-sm font-bold text-slate-700 tracking-tight">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                as="a" 
                href="https://myshipment.shipplix.com" 
                target="_self" 
                variant="yellow" 
                className="px-8 py-3 text-xs uppercase tracking-widest font-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
              >
                Book Your Shipment
              </Button>
              <Button 
                as="a" 
                href="https://track.shipplix.com" 
                target="_self" 
                variant="outline" 
                className="px-8 py-3 text-xs uppercase tracking-widest font-black transition-all duration-300 hover:border-blue-900"
              >
                Track Shipment
              </Button>
            </div>

            {/* Small Statistics Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="p-4 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-900/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-slate-50 group-hover:bg-blue-50 text-blue-950 rounded-xl transition-colors duration-300 shrink-0">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-black text-slate-900 font-mono tracking-tight leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-black uppercase text-blue-950 tracking-tight mt-1 leading-none">
                      {stat.label}
                    </div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 leading-none">
                      {stat.sub}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Premium Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center items-center relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-blue-500/5 blur-[50px] rounded-3xl pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/5 via-transparent to-amber-500/5 blur-3xl rounded-3xl pointer-events-none" />

            {/* Container wrapper for soft float and hover actions */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 max-w-[560px] lg:max-w-none w-full bg-slate-100 transition-shadow hover:shadow-slate-900/15 group"
            >
              {/* Soft overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/5 opacity-80 z-10 transition-opacity duration-500 pointer-events-none group-hover:opacity-60" />
              
              <img 
                src={imageSrc}
                alt="Shipplix Custom Premium Poly Mailer Packaging Bags Showcase"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-auto object-cover object-center relative block select-none transform transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />

              {/* Extra Trust Badge overlaid at the bottom */}
              <div className="absolute bottom-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-mono tracking-widest font-black uppercase px-3 py-1.5 rounded-full border border-slate-700/50 flex items-center gap-1.5 shadow-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Shipplix Certified Branding
              </div>
            </motion.div>
          </motion.div>
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
      desc: "China, UK, USA & Canada delivery",
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
  const internationalOptions = [
    {
      title: "Nigeria → USA Express Air Freight",
      time: "3-5 Business Days",
      desc: "Send food products, fashion items, business inventory and diaspora packages from Nigeria to all 50 US States with customs clearance included.",
      benefit: "Priority US Hub Express",
      useCase: "Foodstuffs (Egusi, Ogbono, Fish), fashion apparel, hair, diaspora & commercial cargo",
      icon: <Plane className="text-[#FEB919]" size={24} />,
      image: servicePlaneBoxes,
      features: ["Weekly scheduled flights to Houston, NY, Atlanta, Dallas", "Full US Customs & FDA document clearance", "Door-to-door delivery across all 50 US states"],
      badge: "Primary Corridor • Express"
    },
    {
      title: "Nigeria → UK Express Air Freight",
      time: "3-5 Business Days",
      desc: "Direct air cargo exports from Nigeria to the United Kingdom with coordinated pickup, packaging inspection, and last-mile door delivery.",
      benefit: "Direct London Line-Haul",
      useCase: "Packaged groceries, African fashion, cosmetics, retail stock & diaspora parcels",
      icon: <Plane className="text-[#FEB919]" size={24} />,
      image: servicePlaneBoxes,
      features: ["Direct flights to London Heathrow / Gatwick", "UK Border Force & Customs handling", "Doorstep delivery in London, Manchester, Birmingham & Scotland"],
      badge: "Primary Corridor • Express"
    },
    {
      title: "Nigeria → Canada Air Cargo",
      time: "5-7 Business Days",
      desc: "Dependable air freight service connecting Nigerian shippers with buyers and families across Toronto, Calgary, Edmonton, Ottawa, and all 10 provinces.",
      benefit: "All 10 Provinces Doorstep Reach",
      useCase: "Food items, African fabrics, artisan crafts & commercial samples",
      icon: <Globe className="text-[#FEB919]" size={24} />,
      image: serviceLocalBoxes,
      features: ["CBSA compliant customs handling", "Doorstep delivery across Ontario, Alberta & Quebec", "Reliable tracking from Lagos MMIA departure"],
      badge: "Popular Global Route"
    },
    {
      title: "Nigeria → Europe Express Cargo",
      time: "5-7 Business Days",
      desc: "Comprehensive export solutions from Nigeria to Germany, France, Italy, Ireland, Netherlands, Spain and destinations across the European Union.",
      benefit: "Pan-European Door Delivery",
      useCase: "African food groceries, fashion textiles, cosmetics & business goods",
      icon: <Globe className="text-[#FEB919]" size={24} />,
      image: serviceLocalBoxes,
      features: ["EU customs declaration & clearance", "Coverage across Western & Central Europe", "Safe, temperature-controlled packaging support"],
      badge: "EU Wide Coverage"
    },
    {
      title: "China ↔ Nigeria Bilateral Freight",
      time: "Air Express (5-8 Days) & Sea Cargo",
      desc: "End-to-end China-Nigeria trade support: supplier verification, product sourcing, warehouse consolidation in Guangzhou/Yiwu, shipping & customs clearing in Lagos.",
      benefit: "Direct Factory Sourcing & Port Clearing",
      useCase: "Electronics, machinery, fashion apparel, auto parts & raw materials",
      icon: <Box className="text-[#FEB919]" size={24} />,
      image: serviceChinaShipping,
      features: ["Guangzhou & Yiwu receiving warehouse hubs", "Air express cargo & containerized sea freight", "Complete Apapa/Tincan port clearing & Lagos delivery"],
      badge: "Bilateral Trade Hub"
    },
    {
      title: "International Sea Freight & Containers",
      time: "Economy Sea Cargo (4-6 Weeks)",
      desc: "Consolidated Less than Container Load (LCL) and Full Container Load (FCL) sea freight for high-volume commercial shipments, heavy machinery, and commodities.",
      benefit: "Maximum Economy on Bulk Freight",
      useCase: "Heavy manufacturing equipment, agricultural commodities, bulk raw materials",
      icon: <Ship className="text-[#FEB919]" size={24} />,
      image: heroLogisticsBanner,
      features: ["FCL (20ft / 40ft) & LCL consolidation", "Export documentation & port compliance", "Cost-effective bulk commercial rates"],
      badge: "Heavy & Bulk Cargo"
    }
  ];

  const steps = [
    { title: "Pickup or Hub Drop-Off", icon: <Truck size={20} /> },
    { title: "Packaging & Inspection", icon: <Package size={20} /> },
    { title: "Air / Sea Freight & Customs", icon: <Plane size={20} /> },
    { title: "Doorstep Delivery Abroad", icon: <CheckCircle2 size={20} /> }
  ];

  const trustPoints = [
    "Dedicated USA & UK Express Corridors (3-5 Days)",
    "Canada & Europe Wide Door-to-Door Delivery",
    "Complete Export Documentation & Customs Clearance",
    "Real-Time Online Tracking & Video Inspection"
  ];

  return (
    <section id="services" className="scroll-mt-24 py-16 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="From Pickup In Nigeria To Delivery Abroad" 
          subtitle="Shipplix helps individuals, vendors, exporters and businesses move eligible goods from Nigeria to international destinations through a coordinated logistics process."
        />

        {/* Global Process Ribbon */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 mb-12 flex flex-wrap items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-black uppercase text-[#032B73] tracking-wider">End-to-End International Logistics:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto flex-1 max-w-3xl">
            <div className="bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700">1. Pickup in Nigeria</div>
            <div className="bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700">2. Cargo Inspection</div>
            <div className="bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700">3. Global Freight</div>
            <div className="bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-700">4. Delivery Abroad</div>
          </div>
        </div>

        {/* 6 International Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {internationalOptions.map((opt, i) => (
            <div 
              key={i} 
              className={`p-5 bg-white rounded-3xl transition-all shadow-sm flex flex-col h-full group ${
                i < 2 
                  ? 'border-2 border-[#032B73] shadow-md ring-2 ring-[#FFD700]/30 hover:shadow-xl' 
                  : 'border border-slate-200 hover:border-[#032B73]'
              }`}
            >
              {/* Card Image Header */}
              {opt.image && (
                <div className="h-40 rounded-2xl overflow-hidden mb-4 relative bg-slate-900">
                  <img 
                    src={opt.image} 
                    alt={opt.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-md ${
                      i < 2 
                        ? 'bg-[#032B73] text-[#FFD700] border border-[#FFD700]/30' 
                        : 'bg-white/90 text-[#032B73] backdrop-blur-sm'
                    }`}>
                      {opt.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#FFD700] bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                      {opt.time}
                    </span>
                    <span className="text-[9px] font-bold text-white/90 flex items-center gap-1">
                      <ShieldCheck size={12} className="text-emerald-400" />
                      MMIA Cleared
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2.5 mb-2">
                <div className="bg-slate-50 w-9 h-9 rounded-xl flex items-center justify-center group-hover:bg-[#032B73]/10 transition-colors shrink-0">
                  {opt.icon}
                </div>
                <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug">{opt.title}</h3>
              </div>
              
              <p className="text-xs text-slate-600 font-medium mb-4 flex-grow leading-relaxed">{opt.desc}</p>
              
              <div className="mt-auto space-y-2.5 pt-3 border-t border-slate-100">
                <div>
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">Key Route Advantage</div>
                  <div className="text-[10px] font-bold text-slate-800 uppercase tracking-tight">{opt.benefit}</div>
                </div>
                <div>
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">Common Cargo</div>
                  <div className="text-[10px] font-medium text-slate-600 line-clamp-2">{opt.useCase}</div>
                </div>
                {opt.features && (
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    {opt.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[10px] font-bold text-slate-700">
                        <CheckCircle2 size={12} className="text-[#032B73] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="pt-2">
                  <a 
                    href={`https://wa.me/2349168273513?text=${encodeURIComponent(`Hello Shipplix! I am inquiring about shipping via route: ${opt.title} (${opt.time}). Please let me know the rates and next scheduled flight.`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full text-center bg-[#FFD700] hover:bg-[#F5C400] text-[#032B73] font-black py-2.5 px-4 rounded-xl transition-all hover:shadow-md text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle size={14} className="fill-[#032B73]" />
                    <span>Quote on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How International Shipping Works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#032B73] text-white p-8 md:p-14 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter italic">How It Works</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FEB919] text-[#032B73] flex items-center justify-center font-black text-lg border-2 border-white/20 shadow-lg">
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
            <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-[#FEB919] italic">Why Ship Internationally With Shipplix?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {trustPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#FEB919] flex-shrink-0" />
                  <span className="text-xs font-black uppercase tracking-tight">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-base font-black mb-4 uppercase tracking-tight text-white/90">Ready to export products or ship abroad?</h4>
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
          <Plane className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 rotate-[-15deg] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

// Secondary Service Section: Domestic & Interstate Logistics
const DomesticLogisticsSection = () => {
  const domesticRoutes = [
    { from: "Lagos", to: "Abuja", highlight: "Daily Express Linehaul", desc: "Commercial documents, retail stock, wholesale inventory & door delivery across the Federal Capital Territory." },
    { from: "Lagos", to: "Port Harcourt", highlight: "Industrial & Commercial Cargo", desc: "Heavy commercial dispatch, corporate logistics & retail merchandise delivery across Rivers State." },
    { from: "Lagos", to: "Onitsha", highlight: "Wholesale & Trader Distribution", desc: "High-volume market deliveries, consumer goods & textile inventory for commercial hubs." },
    { from: "Lagos", to: "Enugu", highlight: "Eastern Regional Cargo", desc: "Scheduled interstate freight connecting commercial vendors with South-Eastern markets." },
    { from: "Lagos", to: "Ibadan", highlight: "Rapid South-West Transit", desc: "Same-day and next-day cargo movement between Lagos and Oyo State distribution points." },
    { from: "Across Nigeria", to: "All 36 States", highlight: "Nationwide Network", desc: "Dependable line-haul road freight connecting northern, eastern, western, and southern state capitals." }
  ];

  return (
    <section id="domestic-services" className="scroll-mt-24 py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="bg-[#032B73]/10 text-[#032B73] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block border border-[#032B73]/15">
            Secondary Logistics Service
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mb-3">
            Need To Move Goods Within Nigeria?
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
            Shipplix also provides interstate and domestic transportation solutions for businesses, vendors and individuals moving goods between major Nigerian cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {domesticRoutes.map((route, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#032B73]/40 transition-all shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-slate-900 font-black text-base">
                  <Truck size={18} className="text-[#032B73]" />
                  <span>{route.from} → {route.to}</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  {route.highlight}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                {route.desc}
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#032B73]">
                <span>Scheduled Linehaul</span>
                <span className="text-slate-400 text-[10px]">1-3 Days</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">Need a customized interstate haulage quote?</h4>
            <p className="text-xs text-slate-500 font-medium">Send your pickup location, destination state, and cargo weight for immediate dispatch rates.</p>
          </div>
          <a 
            href={URL_QUOTE} 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 bg-[#032B73] hover:bg-[#022157] text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            Inquire Domestic Logistics
          </a>
        </div>
      </div>
    </section>
  );
};

// Tertiary Service Section: Truck & Van Hire
const TruckVanHireSection = () => {
  const fleetOptions = [
    { 
      title: "Mini-Vans & Hiace Vans", 
      cap: "Up to 1.5 Tons", 
      use: "Urban deliveries, e-commerce batch distribution, fragile packages & retail stock.",
      image: serviceVanHiace
    },
    { 
      title: "3-Ton & 5-Ton Trucks", 
      cap: "3,000kg to 5,000kg", 
      use: "Medium commercial shipments, warehouse inventory transfers & corporate moves.",
      image: serviceTruckHaulage
    },
    { 
      title: "10-Ton & 30-Ton Haulage", 
      cap: "10,000kg to 30,000kg", 
      use: "Heavy industrial cargo, agricultural commodities, construction materials & container haulage.",
      image: heroLogisticsBanner
    }
  ];

  return (
    <section id="truck-van-hire" className="scroll-mt-24 py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="bg-slate-100 text-slate-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block border border-slate-200">
            Dedicated Logistics Service
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mb-3">
            Need A Dedicated Vehicle For Bulk Movement?
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
            We coordinate suitable trucks and relocation vans with professional, verified drivers for qualifying cargo and interstate transportation requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {fleetOptions.map((fleet, idx) => (
            <div key={idx} className="bg-slate-50 p-5 rounded-3xl border border-slate-200 flex flex-col justify-between group hover:border-[#032B73] transition-all">
              <div>
                <div className="h-36 rounded-2xl overflow-hidden mb-4 bg-slate-900 relative">
                  <img 
                    src={fleet.image} 
                    alt={fleet.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-sm text-[#FFD700] text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full">
                    {fleet.cap}
                  </div>
                </div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight mb-1">{fleet.title}</h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">{fleet.use}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  Vetted Drivers
                </span>
                <a
                  href={`https://wa.me/2349168273513?text=${encodeURIComponent(`Hello Shipplix! I am inquiring about booking a dedicated vehicle: ${fleet.title} (${fleet.cap}). Please provide availability and rates.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#032B73] hover:bg-[#061B4F] text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg flex items-center gap-1"
                >
                  <MessageCircle size={12} className="text-[#FFD700]" />
                  <span>Quote</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={`https://wa.me/2349168273513?text=${encodeURIComponent('Hello Shipplix! I would like to request a dedicated truck or van for interstate haulage in Nigeria.')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#F5C400] text-[#032B73] text-xs font-black uppercase tracking-widest px-8 py-3.5 rounded-2xl transition-all shadow-md hover:-translate-y-0.5"
          >
            <MessageCircle size={15} className="fill-[#032B73]" />
            <span>Request A Dedicated Vehicle On WhatsApp</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const reasons = [
    {
      title: "Real-Time Tracking",
      desc: "Know exactly where your goods are, from Lagos departures to UK arrivals.",
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
              Why African Businesses <br/><span className="text-shipplix-accent">Grow with Shipplix</span>
            </h2>
            <p className="text-slate-600 font-medium mb-8">
              Shipplix is more than a freight forwarder: we are your complete partner for global commerce. From transparent international logistics to AI tools, store setup, and buyer acquisition systems, we help you build an enduring international brand.
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
            "Your people abroad are ready to buy... the question is, are you ready to supply?"
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

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.hash === '#faq' || window.location.hash === '#/faq')) {
      const scrollToFaq = () => {
        const el = document.getElementById('faq');
        if (el) {
          const headerHeight = 72;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
          const targetTop = el.getBoundingClientRect().top + scrollTop - headerHeight;
          window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        }
      };
      const t1 = setTimeout(scrollToFaq, 80);
      const t2 = setTimeout(scrollToFaq, 300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, []);

  const faqs = [
    {
      question: "What are the exact transit times to China, USA, UK, Canada, and Europe?",
      answer: "Our standard air cargo and freight transit times are fast and reliable:\n\n• China (Guangzhou / Yiwu): 5 to 8 business days (Air) • 4 to 6 weeks (Sea)\n• United Kingdom: 3 to 5 business days\n• United States: 5 to 7 business days\n• Canada: 5 to 7 business days\n• Europe: 5 to 8 business days\n\nTransit times are counted from our weekly flight departure. Once your shipment clears customs in the destination country, it is instantly handed over to last-mile delivery partners to reach your doorstep."
    },
    {
      question: "How do China Import & Export services work with Shipplix?",
      answer: "Shipplix provides complete end-to-end China trade solutions:\n\n• Import from China to Nigeria: We handle supplier sourcing, factory verification, quality inspection, cargo consolidation in China, air & sea freight, customs clearance at Nigerian ports, and nationwide doorstep delivery.\n• Export from Nigeria to China: We support agricultural exports (sesame, ginger, cocoa), packaged foodstuffs, textiles, and commercial goods, offering full export documentation, permits, and air freight logistics to major Chinese hubs."
    },
    {
      question: "How does Shipplix handle customs clearance for exports?",
      answer: "Shipplix operates a fully managed, stress-free clearance service. We handle 100% of the customs inspection, export paperwork, and destination clearance on your behalf, both at MMIA Lagos and in the destination ports (US Customs, UK Border Force, CBSA Canada, etc.). This ensures your buyers never have to deal with complex shipping agents or unexpected clearance hurdles. Note that all food items are packed and declared in compliance with international food import guidelines."
    },
    {
      question: "Are my shipments covered by insurance? What is the payout process?",
      answer: "Yes, every single shipment handled by Shipplix includes standard cargo protection. For absolute peace of mind, we offer our optional Premium Shipment Insurance at just 2% of your declared goods value. This premium cover guarantees a 100% full payout of your declared goods value and shipping fees in the highly unlikely event of transit loss, customs confiscation (for non-prohibited items), or damage."
    },
    {
      question: "What items are strictly prohibited or restricted from being exported?",
      answer: "For safety and international import regulations, the following items are strictly prohibited:\n\n• Biological samples, raw fresh meat, or unprocessed hides.\n• Fresh, unlabelled fruits, soil, or unregistered seeds.\n• Liquids or herbs without proper commercial labelling or security clearance.\n• Dangerous goods, ammunition, and explosives.\n\nHowever, we fully permit and regularly ship cosmetics, wigs, fashion apparel, African fabrics, dried herbs, spices, dried foodstuffs, and packaged food items. Please refer to our Cargo Items Portal for the complete up-to-date catalog."
    },
    {
      question: "How are shipping costs calculated? Is it by weight or dimensions?",
      answer: "Shipping costs are calculated based on either the actual weight of the package or its volumetric weight (Length × Width × Height in cm / 5000), whichever is greater. This is a standard global aviation industry practice. To save on costs, we strongly advise using durable, custom-fit boxes and packing as compactly as possible to minimize empty space."
    },
    {
      question: "How do we split space using your 'Group Shipping' feature?",
      answer: "Group Shipping is our cooperative space-splitting solution that allows you to join other vendors sending goods in the same batch. Instead of paying the higher single-package rate for half-empty boxes, your items are securely grouped with others, letting you pay only for your exact share of the weight. This saves up to 40% on standard cargo rates!"
    }
  ];

  return (
    <section className="scroll-mt-24 py-20 bg-slate-50 border-y border-slate-200 font-sans" id="faq">
      <div id="faqs" className="hidden" aria-hidden="true" />
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Answers to common queries about customs, insurance, transit times, and space consolidation."
          centered={true}
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-blue-900 shadow-md' : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-blue-900 transition-colors focus:outline-none"
                >
                  <span className="text-sm md:text-base tracking-tight leading-snug">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg transition-transform duration-300 ${isOpen ? 'bg-blue-50 text-blue-900 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Action 8: Need Help / Action 10: General Inquiry Support Callout */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">
              Have a question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Our export specialists and customer support concierges are ready to assist you right now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <WhatsAppButton
              action="need_help"
              label="Need Help? Chat With Us"
              variant="navy"
              showArrow={true}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

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
      title: "Build An Online Business",
      desc: "Custom e-commerce store design, branding, and digital storefront setup tailored to showcase your catalog to domestic and international buyers.",
      icon: <ShoppingCart className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "Import From China",
      desc: "Direct factory sourcing, supplier verification, cargo consolidation, port customs clearance, and air/sea freight from China directly to Nigeria.",
      icon: <Box className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "Digital Marketing & Outreach",
      desc: "Professional WhatsApp messaging, customer inquiry routing, and targeted marketing campaigns to acquire high-converting global buyers.",
      icon: <MessageSquare className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "Export Products Worldwide",
      desc: "Express air freight, export documentation, regulatory permits, and customs clearance to ship goods across China, USA, UK, Canada, and Europe.",
      icon: <Globe className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "Global Shipping & Payments",
      desc: "Doorstep delivery nationwide and overseas, with multi-currency payment infrastructure to collect revenue in USD, GBP, CAD, EUR, and NGN.",
      icon: <TrendingUp className="text-shipplix-yellow" size={24} />,
    },
    {
      title: "Scale Into a Global Brand",
      desc: "Strategic pricing models, revenue partnership frameworks, and logistics automation to scale your commercial brand internationally.",
      icon: <Users className="text-shipplix-yellow" size={24} />,
    }
  ];

  const timeline = [
    { step: "1", title: "Build Your Store" },
    { step: "2", title: "Import From China" },
    { step: "3", title: "Marketing & Sales Setup" },
    { step: "4", title: "Sell Locally & Globally" },
    { step: "5", title: "Export With Shipplix" },
    { step: "6", title: "Scale Global Brand" },
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
                Shipplix Growth Platform
              </div>
              <p className="text-shipplix-yellow font-bold text-lg mb-2 tracking-tight uppercase">Build • Sell • Import • Export • Scale Globally</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[0.95] tracking-tighter uppercase">
                Your Complete <br/> 
                <span className="text-shipplix-yellow">Global Commerce</span> <br/>
                &amp; Logistics Ecosystem
              </h2>
              <p className="text-lg text-white/80 font-medium max-w-xl mb-10 leading-relaxed md:text-xl">
                Shipplix Growth Platform empowers entrepreneurs to build an online store, import high-demand products from China, generate customers using digital marketing, export goods worldwide, accept international payments, and scale into a thriving global brand.
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
                  Speak With a Growth Expert
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
                      <TrendingUp size={20} className="text-shipplix-yellow" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase text-white tracking-widest">Growth Hub</div>
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
              “The world is eager for African products. <br className="hidden md:block" /> 
              With Shipplix as your global commerce and logistics partner, <br className="hidden md:block" /> 
              you get the shipping, technology, and growth systems to sell everywhere.”
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
          <div className="relative mt-16 overflow-x-auto pb-8 scrollbar-hide max-w-full w-full">
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
            Nigeria Hub: Closed on Sundays
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
    <footer className="bg-white border-t border-slate-200 py-12 pb-28 lg:pb-12 text-slate-500">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prominent Footer CTA Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-base font-black text-slate-900 uppercase tracking-tight mb-1">
              Ship From Nigeria To The World
            </h4>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Weekly express air cargo to USA, UK, Canada &amp; Europe, China-Nigeria freight, plus nationwide domestic logistics.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 w-full md:w-auto">
            <a 
              href="https://myshipment.shipplix.com" 
              target="_self" 
              className="w-full md:w-auto text-center bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-3.5 px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Book my shipment
            </a>
            <span className="text-[10px] text-slate-400 font-bold tracking-tight">
              Book your shipment online in less than 2 minutes.
            </span>
          </div>
        </div>

        {/* Footer Links & Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-xs">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-slate-900 text-white font-black px-2 py-1 rounded text-lg tracking-tighter">SHIPPLIX</div>
              <span className="text-[10px] font-bold tracking-widest uppercase">Safe. Fast. Transparent.</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-3">
              Leading international shipping &amp; logistics company connecting Nigerian exporters, vendors, and diaspora families with the USA, UK, Canada, Europe, and China, with supportive domestic freight solutions across Nigeria.
            </p>
            <p className="text-slate-600 text-xs font-semibold mb-4">
              Legal Business Name: Shipplix Value Tech Services
            </p>
            {/* Follow Us */}
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Follow Us:</span>
              <div className="flex items-center gap-4">
                <a 
                  href="https://web.facebook.com/profile.php?id=61571461311460" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
                <a 
                  href="https://www.instagram.com/shipplixcargo1/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-pink-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
                <a 
                  href="https://www.tiktok.com/@shipplixcargo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-slate-900 transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.69a6.33 6.33 0 0 0 10.86 4.43 6.25 6.25 0 0 0 1.62-4.4V10.22a8.27 8.27 0 0 0 4.1 1.71V8.4a4.81 4.81 0 0 1-2-.41 4.8 4.8 0 0 1-2-1.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* International Corridors - PRIMARY */}
          <div>
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-[11px] mb-3">International Freight</h5>
            <ul className="space-y-2 font-medium">
              <li><a href="#/ship-from-nigeria-to-usa" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-usa')} className="hover:text-blue-600 font-bold">Nigeria → USA Express</a></li>
              <li><a href="#/ship-from-nigeria-to-uk" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-uk')} className="hover:text-blue-600 font-bold">Nigeria → UK Air Cargo</a></li>
              <li><a href="#/ship-from-nigeria-to-houston" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-houston')} className="hover:text-blue-600">Nigeria → Houston, TX</a></li>
              <li><a href="#/ship-from-nigeria-to-canada" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-canada')} className="hover:text-blue-600">Nigeria → Canada Air Cargo</a></li>
              <li><a href="#/ship-from-nigeria-to-europe" onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-europe')} className="hover:text-blue-600">Nigeria → Europe Wide</a></li>
              <li><a href="#/ship-from-china-to-nigeria" onClick={(e) => handleLinkClick(e, '/ship-from-china-to-nigeria')} className="hover:text-blue-600">China ↔ Nigeria Trade</a></li>
            </ul>
          </div>

          {/* Domestic Logistics - SECONDARY */}
          <div>
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-[11px] mb-3">Domestic &amp; Interstate</h5>
            <ul className="space-y-2 font-medium">
              <li>
                <a 
                  href="#domestic-services" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.hash !== '') {
                      onNavigate?.('/');
                      setTimeout(() => {
                        document.getElementById('domestic-services')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.getElementById('domestic-services')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Interstate Cargo (Lagos → Abuja, PH, Onitsha)
                </a>
              </li>
              <li>
                <a 
                  href="#domestic-services" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.hash !== '') {
                      onNavigate?.('/');
                      setTimeout(() => {
                        document.getElementById('domestic-services')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.getElementById('domestic-services')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Intra-State City Deliveries
                </a>
              </li>
              <li>
                <a 
                  href="#truck-van-hire" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.hash !== '') {
                      onNavigate?.('/');
                      setTimeout(() => {
                        document.getElementById('truck-van-hire')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.getElementById('truck-van-hire')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="hover:text-blue-600 transition-colors"
                >
                  Dedicated Truck &amp; Van Hire
                </a>
              </li>
              <li>
                <a href="https://myshipment.shipplix.com" target="_self" className="hover:text-blue-600 font-bold transition-colors">
                  Book Local Pickup →
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h5 className="font-black text-slate-900 uppercase tracking-widest text-[11px] mb-3">Resources &amp; Support</h5>
            <ul className="space-y-2 font-medium">
              <li><a href="https://shop.shipplix.com" className="hover:text-blue-600 font-bold">Shop</a></li>
              <li><a href="https://track.shipplix.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 font-bold">Track Shipment</a></li>
              <li><a href="#/creators" onClick={(e) => handleLinkClick(e, '/creators')} className="hover:text-blue-600 font-bold text-amber-600 flex items-center gap-1.5"><span>Creator &amp; Affiliate</span> <span className="bg-amber-100 text-amber-800 text-[8px] px-1 py-0.5 rounded font-black">EARN</span></a></li>
              <li><a href="#/revenue-partner" onClick={(e) => handleLinkClick(e, '/revenue-partner')} className="hover:text-blue-600">Revenue Partner Program</a></li>
              <li><a href="#/cargo-items" onClick={(e) => handleLinkClick(e, '/cargo-items')} className="hover:text-blue-600">Allowed Cargo Items</a></li>
              <li><a href="#/processing" onClick={(e) => handleLinkClick(e, '/processing')} className="hover:text-blue-600">Processing &amp; Inspection</a></li>
              <li><a href="#/economy-cargo-terms" onClick={(e) => handleLinkClick(e, '/economy-cargo-terms')} className="hover:text-blue-600">Shipping Terms</a></li>
              <li><a href="#/trust" onClick={(e) => handleLinkClick(e, '/trust')} className="hover:text-blue-600">Trust &amp; Security</a></li>
              <li><a href="mailto:services@shipplix.com" className="hover:text-blue-600 lowercase tracking-normal">services@shipplix.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center md:text-left">
            <p>© {new Date().getFullYear()} SHIPPLIX LOGISTICS. INTERNATIONAL &amp; DOMESTIC FREIGHT SERVICES.</p>
            <span className="hidden sm:inline text-slate-300">|</span>
            <p className="normal-case font-bold text-slate-600">Legal Business Name: Shipplix Value Tech Services</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-600">USA • UK • Canada • Europe • China</span>
            <span className="text-slate-300">|</span>
            <span className="text-blue-600">Customs Clearance</span>
            <span className="text-slate-300">|</span>
            <span className="text-blue-600">Door-to-Door Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper function to dynamically update document title, meta description, Open Graph, Twitter, and canonical tags based on active page path
function updatePageSeo(path: string) {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://shipplix.com';
  const canonicalUrl = `${origin}${path === '/' ? '' : path}`;
  const defaultOgImage = `${origin}/shipplix_packaging.png`;

  interface SeoConfig {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogType?: string;
  }

  const seoDataMap: Record<string, SeoConfig> = {
    '/': {
      title: "Shipplix | Global Commerce & Logistics Platform | Expand Beyond Borders",
      description: "Shipplix is a leading global commerce and international logistics platform. We offer door-to-door express air cargo, China-to-Nigeria import freight, export systems, customs clearance, and global commerce growth.",
      ogTitle: "Shipplix | Global Commerce & Logistics Platform",
      ogDescription: "Door-to-door express air cargo, China-to-Nigeria import, international exports, customs clearance, and global commerce tools."
    },
    '/ship-from-nigeria-to-usa': {
      title: "Ship from Nigeria to USA | Fast, Reliable & Affordable Air Cargo | Shipplix",
      description: "Fast 3-5 business day door-to-door air freight shipping from Nigeria to all 50 US states. Customs cleared, tracking included, handling commercial cargo and African foodstuff.",
      ogTitle: "Ship from Nigeria to USA: Express Air Cargo | Shipplix",
      ogDescription: "Deliver packages from Lagos, Abuja, or PH to any US state in 3-5 days with full customs clearance and real-time tracking."
    },
    '/ship-from-nigeria-to-houston': {
      title: "Ship from Nigeria to Houston, Texas | Fast, Secure & Affordable Delivery | Shipplix",
      description: "Direct door-to-door air cargo shipping from Nigeria to Houston, Sugar Land, Katy, and The Woodlands, TX. Fast 3-5 day delivery for foodstuffs, commercial goods, and packages.",
      ogTitle: "Ship from Nigeria to Houston, TX: Direct Air Cargo | Shipplix",
      ogDescription: "Seamless express air cargo from Nigeria to Houston, Texas diaspora community. Fast, reliable, fully cleared customs."
    },
    '/ship-from-nigeria-to-uk': {
      title: "Ship from Nigeria to UK | Fast, Secure & Affordable Delivery | Shipplix",
      description: "Express 3-5 business day air freight shipping from Nigeria to London, Manchester, Birmingham, and across the UK. Full UK customs clearance & doorstep delivery.",
      ogTitle: "Ship from Nigeria to UK: Express Doorstep Delivery | Shipplix",
      ogDescription: "Send food items, fashion, and commercial goods from Nigeria to the United Kingdom with guaranteed fast clearance."
    },
    '/ship-from-nigeria-to-canada': {
      title: "Ship from Nigeria to Canada | Fast, Secure & Affordable Air Cargo | Shipplix",
      description: "Reliable air cargo shipping from Nigeria to Toronto, Calgary, Montreal, Vancouver, and all Canadian provinces. CBSA cleared with door delivery.",
      ogTitle: "Ship from Nigeria to Canada: Air Cargo Logistics | Shipplix",
      ogDescription: "Door-to-door air cargo shipping from Nigeria to Canada. Fast clearance and direct delivery to Canadian addresses."
    },
    '/ship-from-nigeria-to-europe': {
      title: "Ship from Nigeria to Europe | Fast, Secure & Affordable Delivery | Shipplix",
      description: "Express air freight delivery from Nigeria to Germany, France, Netherlands, Ireland, Italy, and EU destinations. Complete customs handling and tracking.",
      ogTitle: "Ship from Nigeria to Europe: EU Doorstep Air Cargo | Shipplix",
      ogDescription: "Ship food, commercial goods, and personal packages from Nigeria to EU countries safely and fast."
    },
    '/ship-from-china-to-nigeria': {
      title: "Ship from China to Nigeria | Air Cargo & Sea Freight Import | Shipplix",
      description: "Hassle-free China to Nigeria import freight forwarding. Express air cargo (3-7 days) & sea freight consolidation with Lagos door delivery and clearing.",
      ogTitle: "Ship from China to Nigeria: Import Freight & Air Cargo | Shipplix",
      ogDescription: "Source goods in China and ship seamlessly to Lagos, Abuja, and Port Harcourt with full customs clearing."
    },
    '/ship-from-usa-to-nigeria': {
      title: "Ship from USA to Nigeria | Fast, Secure & Affordable Delivery | Shipplix",
      description: "Express air cargo and procurement shipping from the USA to Nigeria. Ship online purchases and commercial packages straight to your doorstep.",
      ogTitle: "Ship from USA to Nigeria: Fast Express Air Cargo | Shipplix",
      ogDescription: "Import from the United States to Nigeria with fast transit, reliable customs handling, and Lagos door delivery."
    },
    '/ship-from-uk-to-nigeria': {
      title: "Ship from UK to Nigeria | Fast, Secure & Affordable Delivery | Shipplix",
      description: "Reliable freight shipping from UK to Nigeria. Doorstep collection across UK and fast delivery to Lagos, Abuja, and all Nigerian states.",
      ogTitle: "Ship from UK to Nigeria: Reliable Freight & Courier | Shipplix",
      ogDescription: "Ship personal items and commercial purchases from the UK to Nigeria with transparent pricing."
    },
    '/cargo-items': {
      title: "Permitted Export & Cargo Items Catalog | Shipplix",
      description: "Check approved export items, packaged African foodstuffs, commercial goods, and restricted cargo rules for international shipping.",
      ogTitle: "Permitted Export & Cargo Items Catalog | Shipplix",
      ogDescription: "Comprehensive guidelines on what you can ship internationally from Nigeria, including packaging requirements and customs rules."
    },
    '/economy-cargo': {
      title: "Economy Cargo & Split Space Shipping | Shipplix",
      description: "Save up to 40% on international shipping with Shipplix Economy Group Cargo. Consolidated space for budget-friendly air freight.",
      ogTitle: "Economy Cargo & Group Space Shipping | Shipplix",
      ogDescription: "Affordable consolidated group cargo shipping for budget-conscious business owners and exporters."
    },
    '/processing': {
      title: "Customs Clearance & Processing Flow | Shipplix",
      description: "Learn about Shipplix 5-stage export processing flow: reception, inspection, vacuum packaging, customs manifest, and air uplift.",
      ogTitle: "Customs Clearance & Processing Flow | Shipplix",
      ogDescription: "Transparent step-by-step export clearance and security inspection process at MMIA Lagos."
    },
    '/trust': {
      title: "Trust & Anti-Scam Verification | Shipplix",
      description: "Shipplix official verification portal. Learn about our official communication channels, office addresses, bank details, and scam protection.",
      ogTitle: "Trust & Anti-Scam Policy: Shipplix Verification",
      ogDescription: "Verify authentic Shipplix accounts, bank details, and customer support channels to protect against fraud."
    },
    '/economy-cargo-terms': {
      title: "Shipplix Economy Cargo Terms & Conditions | Official Shipping Policy",
      description: "Official Shipplix Economy Cargo Terms & Conditions. Learn about our 9-14 business day estimated delivery, separate box identification, consolidated air transport, customer responsibilities, claims process, and goodwill compensation policy.",
      ogTitle: "Shipplix Economy Cargo Terms & Conditions: Official Policy",
      ogDescription: "Affordable, reliable consolidated international shipping. Clear 9-14 business day delivery expectations, separate packaging identification, customer responsibilities, and claims guidelines."
    },
    '/revenue-partner': {
      title: "Become a Shipplix Revenue Partner: Earn referring customers",
      description: "Join the Shipplix Revenue Partner network. Earn recurring commissions in FX by introducing business owners and shippers to Shipplix.",
      ogTitle: "Shipplix Revenue Partner Program: Earn in FX",
      ogDescription: "Partner with Shipplix and earn commissions on international freight referrals."
    },
    '/creators': {
      title: "Shipplix Creator & Affiliate Program | Get Paid to Create Content",
      description: "Join the Shipplix Creator & Affiliate Program. Get paid to create and publish authentic short-form videos with scripts supplied by Shipplix.",
      ogTitle: "Shipplix Creator & Affiliate Program: Create. Post. Refer. Earn.",
      ogDescription: "Get paid to create short-form videos for Shipplix. Scripts provided, content rewards, performance bonuses, and referral commissions."
    },
    '/creator': {
      title: "Shipplix Creator & Affiliate Program | Get Paid to Create Content",
      description: "Join the Shipplix Creator & Affiliate Program. Get paid to create and publish authentic short-form videos with scripts supplied by Shipplix.",
      ogTitle: "Shipplix Creator & Affiliate Program: Create. Post. Refer. Earn.",
      ogDescription: "Get paid to create short-form videos for Shipplix. Scripts provided, content rewards, performance bonuses, and referral commissions."
    },
    '/export-blueprint': {
      title: "The African Export Blueprint | Free Export Business Guide | Shipplix",
      description: "Free step-by-step guide on how to build an international customer acquisition system that attracts overseas buyers consistently.",
      ogTitle: "The African Export Blueprint: Free Masterclass Guide | Shipplix",
      ogDescription: "Download the complete framework for scaling your African products and attracting buyers in US, UK, Canada & EU."
    },
    '/export-blueprint/thank-you': {
      title: "Thank You: Download The African Export Blueprint | Shipplix",
      description: "Your copy of The African Export Blueprint is ready for download. Start building your international customer acquisition system.",
      ogTitle: "Download The African Export Blueprint | Shipplix",
      ogDescription: "Access your free export growth blueprint now."
    },
    '/admin-leads': {
      title: "Admin Leads Portal | Shipplix",
      description: "Internal administrative leads dashboard for Shipplix team members.",
      ogTitle: "Shipplix Admin Portal",
      ogDescription: "Admin dashboard for managing logistics inquiries."
    }
  };

  const currentSeo = seoDataMap[path] || {
    title: "Shipplix | Global Commerce & Logistics Platform",
    description: "Shipplix is a leading global commerce and international logistics platform providing air cargo, express shipping, and customs clearance.",
    ogTitle: "Shipplix Logistics",
    ogDescription: "Fast & Reliable Export Shipping and Commerce Platform."
  };

  // 1. Update Document Title
  document.title = currentSeo.title;

  // 2. Helper to set or create meta element
  const setMeta = (attrKey: 'name' | 'property', attrVal: string, contentVal: string) => {
    let element = document.querySelector(`meta[${attrKey}="${attrVal}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrKey, attrVal);
      document.head.appendChild(element);
    }
    element.setAttribute('content', contentVal);
  };

  // 3. Helper to set or create link element (canonical)
  const setLink = (relVal: string, hrefVal: string) => {
    let element = document.querySelector(`link[rel="${relVal}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', relVal);
      document.head.appendChild(element);
    }
    element.setAttribute('href', hrefVal);
  };

  const titleVal = currentSeo.ogTitle || currentSeo.title;
  const descVal = currentSeo.ogDescription || currentSeo.description;

  // Set Standard Meta Description
  setMeta('name', 'description', currentSeo.description);

  // Set Open Graph Tags
  setMeta('property', 'og:title', titleVal);
  setMeta('property', 'og:description', descVal);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:type', currentSeo.ogType || 'website');
  setMeta('property', 'og:site_name', 'Shipplix Logistics');
  setMeta('property', 'og:image', defaultOgImage);

  // Set Twitter Card Meta Tags
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', titleVal);
  setMeta('name', 'twitter:description', descVal);
  setMeta('name', 'twitter:image', defaultOgImage);

  // Set Canonical Link Tag
  setLink('canonical', canonicalUrl);
}

export default function App() {
  const [currentPath, setCurrentPath] = React.useState(() => {
    const p = window.location.pathname;
    const h = window.location.hash;
    if (h === '#faq' || h === '#/faq') {
      return '/';
    }
    if (p === '/admin-leads' || h === '#/admin-leads' || h === '#admin-leads') {
      return '/admin-leads';
    }
    if (p === '/ship-from-nigeria-to-usa' || h === '#/ship-from-nigeria-to-usa' || h === '#ship-from-nigeria-to-usa') {
      return '/ship-from-nigeria-to-usa';
    }
    if (p === '/ship-from-nigeria-to-houston' || h === '#/ship-from-nigeria-to-houston' || h === '#ship-from-nigeria-to-houston') {
      return '/ship-from-nigeria-to-houston';
    }
    if (p === '/ship-from-nigeria-to-uk' || h === '#/ship-from-nigeria-to-uk' || h === '#ship-from-nigeria-to-uk') {
      return '/ship-from-nigeria-to-uk';
    }
    if (p === '/ship-from-nigeria-to-canada' || h === '#/ship-from-nigeria-to-canada' || h === '#ship-from-nigeria-to-canada') {
      return '/ship-from-nigeria-to-canada';
    }
    if (p === '/ship-from-nigeria-to-europe' || h === '#/ship-from-nigeria-to-europe' || h === '#ship-from-nigeria-to-europe') {
      return '/ship-from-nigeria-to-europe';
    }
    if (p === '/ship-from-china-to-nigeria' || h === '#/ship-from-china-to-nigeria' || h === '#ship-from-china-to-nigeria') {
      return '/ship-from-china-to-nigeria';
    }
    if (p === '/ship-from-usa-to-nigeria' || h === '#/ship-from-usa-to-nigeria' || h === '#ship-from-usa-to-nigeria') {
      return '/ship-from-usa-to-nigeria';
    }
    if (p === '/ship-from-uk-to-nigeria' || h === '#/ship-from-uk-to-nigeria' || h === '#ship-from-uk-to-nigeria') {
      return '/ship-from-uk-to-nigeria';
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
    if (p === '/creators' || h === '#/creators' || h === '#creators' || p === '/creator' || h === '#/creator' || h === '#creator') {
      return '/creators';
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
      if (h === '#faq' || h === '#/faq') {
        setCurrentPath('/');
        const scrollToFaq = () => {
          const el = document.getElementById('faq');
          if (el) {
            const headerHeight = 72;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
            const targetTop = el.getBoundingClientRect().top + scrollTop - headerHeight;
            window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
            return true;
          }
          return false;
        };
        setTimeout(scrollToFaq, 60);
        setTimeout(scrollToFaq, 250);
        return;
      }
      if (p === '/admin-leads' || h === '#/admin-leads' || h === '#admin-leads') {
        setCurrentPath('/admin-leads');
      } else if (p === '/ship-from-nigeria-to-usa' || h === '#/ship-from-nigeria-to-usa' || h === '#ship-from-nigeria-to-usa') {
        setCurrentPath('/ship-from-nigeria-to-usa');
      } else if (p === '/ship-from-nigeria-to-houston' || h === '#/ship-from-nigeria-to-houston' || h === '#ship-from-nigeria-to-houston') {
        setCurrentPath('/ship-from-nigeria-to-houston');
      } else if (p === '/ship-from-nigeria-to-uk' || h === '#/ship-from-nigeria-to-uk' || h === '#ship-from-nigeria-to-uk') {
        setCurrentPath('/ship-from-nigeria-to-uk');
      } else if (p === '/ship-from-nigeria-to-canada' || h === '#/ship-from-nigeria-to-canada' || h === '#ship-from-nigeria-to-canada') {
        setCurrentPath('/ship-from-nigeria-to-canada');
      } else if (p === '/ship-from-nigeria-to-europe' || h === '#/ship-from-nigeria-to-europe' || h === '#ship-from-nigeria-to-europe') {
        setCurrentPath('/ship-from-nigeria-to-europe');
      } else if (p === '/ship-from-china-to-nigeria' || h === '#/ship-from-china-to-nigeria' || h === '#ship-from-china-to-nigeria') {
        setCurrentPath('/ship-from-china-to-nigeria');
      } else if (p === '/ship-from-usa-to-nigeria' || h === '#/ship-from-usa-to-nigeria' || h === '#ship-from-usa-to-nigeria') {
        setCurrentPath('/ship-from-usa-to-nigeria');
      } else if (p === '/ship-from-uk-to-nigeria' || h === '#/ship-from-uk-to-nigeria' || h === '#ship-from-uk-to-nigeria') {
        setCurrentPath('/ship-from-uk-to-nigeria');
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
      } else if (p === '/creators' || h === '#/creators' || h === '#creators' || p === '/creator' || h === '#/creator' || h === '#creator') {
        setCurrentPath('/creators');
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

  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.hash === '#faq' || window.location.hash === '#/faq')) {
      const scrollToFaq = () => {
        const el = document.getElementById('faq');
        if (el) {
          const headerHeight = 72;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
          const targetTop = el.getBoundingClientRect().top + scrollTop - headerHeight;
          window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
          return true;
        }
        return false;
      };
      setTimeout(scrollToFaq, 100);
      setTimeout(scrollToFaq, 300);
      setTimeout(scrollToFaq, 600);
    }
  }, []);

  const navigateTo = (path: string) => {
    if (path === '/#faq' || path === '#faq') {
      if (window.location.hash !== '#faq') {
        window.history.pushState(null, '', '/#faq');
      }
      setCurrentPath('/');
      const scrollToFaq = () => {
        const el = document.getElementById('faq');
        if (el) {
          const headerHeight = 72;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
          const targetTop = el.getBoundingClientRect().top + scrollTop - headerHeight;
          window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
          return true;
        }
        return false;
      };
      setTimeout(scrollToFaq, 60);
      setTimeout(scrollToFaq, 200);
      setTimeout(scrollToFaq, 500);
      return;
    }
    const hashPath = path === '/' ? '' : '#' + path;
    window.history.pushState({}, '', '/' + hashPath);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    updatePageSeo(currentPath);
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {currentPath !== '/admin-leads' && <Navbar onNavigate={navigateTo} currentPath={currentPath} />}
      {currentPath !== '/admin-leads' && <Breadcrumbs currentPath={currentPath} onNavigate={navigateTo} />}
      
      <main className="min-h-screen pb-20 lg:pb-0">
        {currentPath === '/' && (
          <>
            {/* 1. Header is rendered above as Navbar */}

            {/* 2. Hero */}
            <Hero onNavigate={navigateTo} />

            {/* 3. Quick Shipping Action */}
            <QuickActionHub onNavigate={navigateTo} />

            {/* 4. Services (6 Visual Cards) */}
            <HomepageServices onNavigate={navigateTo} />

            {/* 5. Shipment Tracking */}
            <ShipmentTrackingSection onNavigate={navigateTo} />

            {/* 6. Why Shipplix */}
            <WhyShipplixSection onNavigate={navigateTo} />

            {/* 7. How It Works */}
            <HowItWorksSection onNavigate={navigateTo} />

            {/* 8. Frequently Asked Questions */}
            <FAQSection />

            {/* 9. Support / WhatsApp */}
            <WhatsAppCtaSection />

            {/* 10. Footer is rendered below */}
          </>
        )}

        {currentPath === '/cargo-items' && <CargoItemsPage />}
        {currentPath === '/ship-from-nigeria-to-usa' && <NigeriaToUsaPage onNavigate={navigateTo} />}
        {currentPath === '/ship-from-nigeria-to-houston' && <NigeriaToHoustonPage onNavigate={navigateTo} />}
        {currentPath === '/ship-from-nigeria-to-uk' && <NigeriaToUkPage onNavigate={navigateTo} />}
        {currentPath === '/ship-from-nigeria-to-canada' && <NigeriaToCanadaPage onNavigate={navigateTo} />}
        {currentPath === '/ship-from-nigeria-to-europe' && <NigeriaToEuropePage onNavigate={navigateTo} />}
        {currentPath === '/ship-from-china-to-nigeria' && <ChinaToNigeriaPage onNavigate={navigateTo} />}
        {currentPath === '/ship-from-usa-to-nigeria' && <UsaToNigeriaPage onNavigate={navigateTo} />}
        {currentPath === '/ship-from-uk-to-nigeria' && <UkToNigeriaPage onNavigate={navigateTo} />}
        {currentPath === '/economy-cargo' && <EconomyCargoPage />}
        {currentPath === '/processing' && <ProcessingPage />}
        {currentPath === '/trust' && <TrustPage />}
        {currentPath === '/economy-cargo-terms' && <EconomyTerms onBack={() => navigateTo('/')} />}
        {currentPath === '/revenue-partner' && <RevenuePartnerPage />}
        {currentPath === '/creators' && <CreatorsPage onNavigate={navigateTo} />}
        {currentPath === '/export-blueprint' && <ExportBlueprintPage onNavigate={navigateTo} currentPath={currentPath} />}
        {currentPath === '/export-blueprint/thank-you' && <ExportBlueprintPage onNavigate={navigateTo} currentPath={currentPath} />}
        {currentPath === '/admin-leads' && <AdminLeadsPage onNavigate={navigateTo} />}
      </main>

      {currentPath !== '/admin-leads' && <Footer onNavigate={navigateTo} />}

      {/* Floating WhatsApp Action Button (Desktop Only) */}
      {currentPath !== '/admin-leads' && (
        <div className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-1 select-none pointer-events-auto">
          {/* Tooltip / Label */}
          <div className="bg-slate-950 text-white border border-slate-800/80 px-3 py-1 rounded-full shadow-2xl text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 pointer-events-none mb-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Export Expert Online
          </div>

          {/* WhatsApp Button */}
          <motion.a 
            href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to make a bespoke inquiry about shipping products from Nigeria to global markets.")}`}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 text-white p-4 rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:bg-emerald-600 transition-colors flex items-center justify-center border-2 border-white/20 group relative"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={26} className="fill-white/10 group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Pulsing Outer Ring */}
            <span className="absolute -inset-1 rounded-full border border-emerald-500/30 animate-pulse pointer-events-none"></span>
          </motion.a>
        </div>
      )}

      {/* Mobile App Bottom Navigation Bar */}
      {currentPath !== '/admin-leads' && (
        <MobileBottomNav onNavigate={navigateTo} currentPath={currentPath} />
      )}

      {/* Progressive Web App Install Prompt */}
      <PWAInstallPrompt />
    </div>
  );
}
