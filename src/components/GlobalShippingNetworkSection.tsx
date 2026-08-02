import React, { useState } from 'react';
import { 
  Plane, 
  Ship, 
  Globe, 
  ArrowRight, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Box, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

interface RouteData {
  id: string;
  fromFlag: string;
  fromName: string;
  fromCode: string;
  toFlag: string;
  toName: string;
  toCode: string;
  title: string;
  description: string;
  transitTime: string;
  type: 'air' | 'sea' | 'hybrid';
  badges: string[];
  features: string[];
  popularFor: string;
  curvedPath: string; // SVG path
}

const SHIPPING_ROUTES: RouteData[] = [
  {
    id: 'ng-usa',
    fromFlag: '🇳🇬',
    fromName: 'Nigeria',
    fromCode: 'LOS',
    toFlag: '🇺🇸',
    toName: 'USA',
    toCode: 'USA',
    title: 'Nigeria to USA',
    description: 'Fast door-to-door and business shipping across all U.S. states.',
    transitTime: '5 - 7 Days Express Air',
    type: 'air',
    badges: ['Door-to-Door', 'Customs Cleared', 'All 50 States'],
    features: ['Foodstuffs & Fashion', 'Commercial Cargo', 'Houston, NYC, Atlanta, LA'],
    popularFor: 'Foodstuffs, African Fashion & E-commerce',
    curvedPath: 'M 40 80 Q 150 10 260 80'
  },
  {
    id: 'ng-uk',
    fromFlag: '🇳🇬',
    fromName: 'Nigeria',
    fromCode: 'LOS',
    toFlag: '🇬🇧',
    toName: 'United Kingdom',
    toCode: 'LHR',
    title: 'Nigeria to United Kingdom',
    description: 'Reliable express and economy cargo services.',
    transitTime: '3 - 5 Days Express',
    type: 'air',
    badges: ['Express Air', 'Economy Cargo', 'DDP Available'],
    features: ['London & UK Nationwide', 'Door Step Delivery', 'Consolidated Space'],
    popularFor: 'Personal Effects, Groceries & Business Exports',
    curvedPath: 'M 40 80 Q 150 15 260 80'
  },
  {
    id: 'ng-ca',
    fromFlag: '🇳🇬',
    fromName: 'Nigeria',
    fromCode: 'LOS',
    toFlag: '🇨🇦',
    toName: 'Canada',
    toCode: 'YYZ',
    title: 'Nigeria to Canada',
    description: 'Secure shipping for personal and commercial shipments.',
    transitTime: '5 - 7 Days Express Air',
    type: 'air',
    badges: ['Personal & Commercial', 'Secure Freight', '10 Provinces'],
    features: ['Toronto, Calgary & Vancouver', 'Full Customs Support', 'Live Tracking'],
    popularFor: 'Relocation Packages & Diaspora Groceries',
    curvedPath: 'M 40 80 Q 150 10 260 80'
  },
  {
    id: 'ng-eu',
    fromFlag: '🇳🇬',
    fromName: 'Nigeria',
    fromCode: 'LOS',
    toFlag: '🇪🇺',
    toName: 'Europe',
    toCode: 'FRA',
    title: 'Nigeria to Europe',
    description: 'International freight to major European destinations.',
    transitTime: '5 - 7 Days EU Freight',
    type: 'air',
    badges: ['EU Freight', 'Air Cargo', 'Customs Clearance'],
    features: ['Germany, France & Italy', 'Spain & Netherlands', 'Door-to-Door Delivery'],
    popularFor: 'Raw Materials, Fashion & Dried Foods',
    curvedPath: 'M 40 80 Q 150 20 260 80'
  },
  {
    id: 'cn-ng',
    fromFlag: '🇨🇳',
    fromName: 'China',
    fromCode: 'CAN',
    toFlag: '🇳🇬',
    toName: 'Nigeria',
    toCode: 'LOS',
    title: 'China to Nigeria',
    description: 'Reliable air and sea freight solutions for imports from China.',
    transitTime: '7-10 Days Air / 35-45 Days Sea',
    type: 'hybrid',
    badges: ['Air Cargo Express', 'Sea Freight', 'Lagos Customs Clearance'],
    features: ['Guangzhou & Yiwu Hubs', 'Procurement & Supplier Verification', 'Lagos Door Delivery'],
    popularFor: 'Electronics, Machinery, Fabrics & Commercial Imports',
    curvedPath: 'M 40 80 Q 150 25 260 80'
  }
];

export const GlobalShippingNetworkSection: React.FC = () => {
  const [activeRouteId, setActiveRouteId] = useState<string>('ng-usa');

  const activeRoute = SHIPPING_ROUTES.find(r => r.id === activeRouteId) || SHIPPING_ROUTES[0];

  return (
    <section 
      id="our-global-shipping-network" 
      className="bg-white py-20 border-b border-slate-100 relative overflow-hidden select-none"
    >
      {/* Subtle World Map SVG Pattern Background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 1000 500" className="w-full h-full object-cover text-[#032B73]" fill="currentColor">
          {/* Stylized world dot matrix map */}
          <path d="M150,120 Q160,100 200,110 T250,150 T200,220 T140,200 Z" />
          <path d="M220,260 Q260,250 290,300 T270,420 T200,400 Z" />
          <path d="M450,100 Q500,80 550,120 T520,200 T440,160 Z" />
          <path d="M460,220 Q520,210 540,280 T500,380 T450,320 Z" />
          <path d="M600,100 Q750,80 850,150 T800,300 T650,250 Z" />
          <path d="M780,320 Q850,300 880,380 T800,450 Z" />
        </svg>
      </div>

      {/* Decorative Brand Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#032B73]/[0.02] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/[0.05] rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#032B73]/[0.06] text-[#032B73] border border-[#032B73]/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
          >
            <Globe className="text-[#032B73] animate-spin-slow" size={14} />
            Global Shipping Routes
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-tight"
          >
            🌍 Our Global <span className="text-[#032B73] underline decoration-[#FFD700] decoration-4 underline-offset-8">Shipping Network</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Connecting businesses and individuals through reliable international logistics across Africa, North America, Europe, and Asia.
          </motion.p>
        </div>

        {/* Desktop & Mobile Interactive Route Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 max-w-5xl mx-auto">
          {SHIPPING_ROUTES.map((route) => {
            const isActive = route.id === activeRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setActiveRouteId(route.id)}
                className={`px-4 py-3 rounded-xl text-xs md:text-sm font-black transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#032B73] text-white border-[#032B73] shadow-lg shadow-[#032B73]/20 scale-105'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#032B73]/40 hover:bg-slate-50'
                }`}
              >
                <span className="text-base">{route.fromFlag}</span>
                <span className="text-[#FFD700]">→</span>
                <span className="text-base">{route.toFlag}</span>
                <span className="ml-1 uppercase tracking-wider">{route.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Route Showcase Banner with Animated Flight Arc */}
        <div className="max-w-5xl mx-auto mb-12">
          <motion.div 
            key={activeRoute.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#032B73] via-[#021F54] to-[#011438] text-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden border border-blue-900/50"
          >
            {/* Background Accent Grids */}
            <div className="absolute inset-0 bg-[radial-gradient(#FEB919_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Route Summary Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#032B73] font-black px-3.5 py-1 rounded-full text-[11px] uppercase tracking-widest shadow-md">
                  <Sparkles size={12} />
                  Active Freight Corridor
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15">
                    <span className="text-3xl">{activeRoute.fromFlag}</span>
                    <div>
                      <div className="text-[10px] text-blue-200 uppercase font-black tracking-widest">Origin</div>
                      <div className="text-sm font-black">{activeRoute.fromName} ({activeRoute.fromCode})</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFD700] text-[#032B73] font-black shadow-lg">
                    <ArrowRight size={20} />
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15">
                    <span className="text-3xl">{activeRoute.toFlag}</span>
                    <div>
                      <div className="text-[10px] text-blue-200 uppercase font-black tracking-widest">Destination</div>
                      <div className="text-sm font-black">{activeRoute.toName} ({activeRoute.toCode})</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  {activeRoute.title}
                </h3>

                <p className="text-blue-100 text-sm md:text-base font-medium leading-relaxed">
                  {activeRoute.description}
                </p>

                {/* Badges & Features */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {activeRoute.badges.map((b, i) => (
                    <span key={i} className="bg-white/15 text-white text-xs font-bold px-3 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#FFD700]" />
                      {b}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-amber-300 font-bold">
                  <Clock size={14} className="text-[#FFD700]" />
                  <span>Estimated Transit Time: <strong className="text-white">{activeRoute.transitTime}</strong></span>
                </div>
              </div>

              {/* Interactive Curved Flight Path Card Visualizer */}
              <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center relative">
                
                {/* SVG Arc Flight Path with Moving Cargo Aircraft / Ship */}
                <div className="w-full h-36 relative flex items-center justify-center">
                  <svg viewBox="0 0 300 120" className="w-full h-full">
                    {/* Curved dashed line path */}
                    <path 
                      d="M 30 90 Q 150 15 270 90" 
                      fill="none" 
                      stroke="rgba(255, 215, 0, 0.3)" 
                      strokeWidth="3" 
                      strokeDasharray="6 6"
                    />
                    
                    {/* Pulsing origin node */}
                    <circle cx="30" cy="90" r="8" fill="#FFD700" className="animate-pulse" />
                    <circle cx="30" cy="90" r="14" fill="none" stroke="#FFD700" strokeWidth="1.5" className="animate-ping opacity-75" />
                    
                    {/* Pulsing destination node */}
                    <circle cx="270" cy="90" r="8" fill="#FFD700" className="animate-pulse" />
                    <circle cx="270" cy="90" r="14" fill="none" stroke="#FFD700" strokeWidth="1.5" className="animate-ping opacity-75" />

                    {/* Animated moving aircraft or ship on curve */}
                    <g className="animate-flight-arc">
                      <foreignObject x="0" y="0" width="100%" height="100%">
                        <div className="w-full h-full relative">
                          <motion.div
                            animate={{
                              x: [20, 135, 250],
                              y: [75, 10, 75],
                              rotate: [-20, 0, 20]
                            }}
                            transition={{
                              duration: 3.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute"
                          >
                            <div className="bg-[#FFD700] text-[#032B73] p-2 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                              {activeRoute.type === 'sea' ? <Ship size={18} /> : <Plane size={18} />}
                            </div>
                          </motion.div>
                        </div>
                      </foreignObject>
                    </g>
                  </svg>
                </div>

                <div className="mt-2 text-xs font-bold text-blue-100 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#FFD700]" />
                  <span>Fully Verified Air &amp; Cargo Freight Route</span>
                </div>

                <div className="mt-1 text-[11px] text-slate-300">
                  Popular for: <span className="text-[#FFD700] font-bold">{activeRoute.popularFor}</span>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

        {/* 5 Shipping Routes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {SHIPPING_ROUTES.map((route, index) => {
            const isSelected = route.id === activeRouteId;
            return (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveRouteId(route.id)}
                className={`bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer relative flex flex-col justify-between group ${
                  isSelected 
                    ? 'border-[#032B73] shadow-xl shadow-[#032B73]/10 ring-2 ring-[#032B73]/20' 
                    : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#032B73]/40'
                }`}
              >
                <div>
                  {/* Card Header: Flags & Route Code */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{route.fromFlag}</span>
                      <span className="text-xs font-black text-[#FFD700] bg-[#032B73] px-2 py-0.5 rounded">→</span>
                      <span className="text-2xl">{route.toFlag}</span>
                    </div>

                    <span className="bg-slate-100 text-[#032B73] text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
                      {route.fromCode} - {route.toCode}
                    </span>
                  </div>

                  {/* Route Title */}
                  <h3 className="text-base md:text-lg font-black text-slate-900 group-hover:text-[#032B73] transition-colors mb-2 flex items-center justify-between">
                    <span>{route.title}</span>
                    {route.type === 'hybrid' ? (
                      <span className="text-slate-400 group-hover:text-[#032B73]"><Ship size={18} /></span>
                    ) : (
                      <span className="text-slate-400 group-hover:text-[#032B73]"><Plane size={18} /></span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {route.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <ul className="space-y-1.5 mb-5">
                    {route.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#032B73]"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Badge & Transit Time */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-black text-[#032B73]">
                    <Clock size={13} className="text-[#FEB919]" />
                    <span>{route.transitTime}</span>
                  </div>

                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-[#032B73] text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-[#032B73] group-hover:text-white transition-colors'
                  }`}>
                    {isSelected ? 'Selected' : 'View Route'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Centered CTA Action Button */}
        <div className="text-center">
          <motion.a 
            href="https://myshipment.shipplix.com" 
            target="_self"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-4 px-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-xs md:text-sm uppercase tracking-widest inline-flex items-center justify-center gap-3 border border-[#FEB919]/50"
          >
            <span>Get a Shipping Quote</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <p className="mt-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
            Fast response • Door-to-Door Delivery • Real-Time Tracking
          </p>
        </div>

      </div>
    </section>
  );
};

export default GlobalShippingNetworkSection;
