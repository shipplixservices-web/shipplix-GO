import React, { useState } from 'react';
import { 
  Store, 
  Users, 
  Globe, 
  GraduationCap, 
  Warehouse, 
  Bot, 
  BarChart3, 
  Code, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  MessageCircle, 
  Bell, 
  ShieldCheck, 
  ChevronRight, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  X, 
  Check, 
  ArrowLeft,
  Building2,
  Lock,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FutureProductsPageProps {
  onNavigate?: (path: string) => void;
}

export interface FutureProduct {
  id: string;
  name: string;
  category: 'B2B & Trade' | 'Logistics & Infra' | 'Education & AI' | 'Apps & Developer';
  icon: React.ElementType;
  badge: string;
  horizon: string;
  tagline: string;
  description: string;
  features: string[];
  targetAudience: string;
}

const FUTURE_PRODUCTS: FutureProduct[] = [
  {
    id: 'shipplix-commerce',
    name: 'Shipplix Commerce',
    category: 'B2B & Trade',
    icon: Store,
    badge: 'Coming Soon',
    horizon: 'Phase 1 • Q4 2026',
    tagline: 'Global B2B Wholesale Marketplace for African Exporters',
    description: 'A trade platform connecting verified African foodstuff processors, agricultural producers, and manufacturers with international buyers, supermarkets, and ethnic grocers across USA, UK, Canada, and Europe.',
    features: [
      'Verified exporter storefronts & product catalogs',
      'Escrow-protected international payments',
      'Integrated Shipplix logistics & customs clearance',
      'Bulk wholesale order negotiating tools'
    ],
    targetAudience: 'African Exporters & Overseas Wholesale Importers'
  },
  {
    id: 'supplier-directory',
    name: 'Supplier Directory',
    category: 'B2B & Trade',
    icon: Users,
    badge: 'In Development',
    horizon: 'Phase 1 • Q4 2026',
    tagline: 'Verified African Producer & Exporter Database',
    description: 'A searchable directory of audited, verified suppliers across Nigeria and West Africa. Search by product category, export readiness score, farm capacity, and FDA/NEPC certifications.',
    features: [
      'NEPC & FDA compliance verification badges',
      'Direct WhatsApp & RFQ communication channel',
      'Product lab testing & quality inspection reports',
      'Minimum Order Quantity (MOQ) transparent filters'
    ],
    targetAudience: 'Overseas Importers & Procurement Managers'
  },
  {
    id: 'buyer-directory',
    name: 'Buyer Directory',
    category: 'B2B & Trade',
    icon: Globe,
    badge: 'Coming Soon',
    horizon: 'Phase 2 • Q1 2027',
    tagline: 'Global Database of Active African Foodstuff Importers',
    description: 'Access a curated database of verified African diaspora grocery stores, ethnic supermarkets, distributors, and restaurant chains actively looking to source products from Africa.',
    features: [
      'Verified buyer profiles in Houston, London, Toronto, etc.',
      'Sourcing requests & active purchase leads',
      'Direct buyer outreach permission workflow',
      'Trade intent & volume demand insights'
    ],
    targetAudience: 'Verified Exporters & Commercial Farmers'
  },
  {
    id: 'export-academy',
    name: 'Export Academy',
    category: 'Education & AI',
    icon: GraduationCap,
    badge: 'Beta Coming Soon',
    horizon: 'Phase 1 • Q4 2026',
    tagline: 'Masterclass, Certification & Trade Guidance',
    description: 'Comprehensive video training, trade compliance blueprints, and step-by-step masterclasses teaching businesses how to build automated customer acquisition systems and export standard goods globally.',
    features: [
      'Step-by-step export compliance video courses',
      'US FDA, UK HACCP & EU regulatory templates',
      'Live Q&A masterclasses with trade veterans',
      'Certified Export Specialist digital badge'
    ],
    targetAudience: 'Agri-preneurs, Food Processors & Exporters'
  },
  {
    id: 'warehouse-platform',
    name: 'Warehouse & Fulfillment Platform',
    category: 'Logistics & Infra',
    icon: Warehouse,
    badge: 'Coming Soon',
    horizon: 'Phase 2 • Q1 2027',
    tagline: 'Smart Bonded Warehousing & Last-Mile Prep',
    description: 'On-demand inventory storage, vacuum-sealing, barcoding, and micro-fulfillment nodes in Lagos, Houston, London, and Toronto for fast diaspora delivery.',
    features: [
      'Real-time inventory levels & batch tracking',
      'Temperature-controlled food storage facilities',
      'Pick, pack & ship fulfillment for e-commerce',
      'Automated Amazon FBA & retail store prep'
    ],
    targetAudience: 'E-commerce Brands & High-Volume Exporters'
  },
  {
    id: 'ai-export-assistant',
    name: 'AI Export Assistant',
    category: 'Education & AI',
    icon: Bot,
    badge: 'R&D Phase',
    horizon: 'Phase 2 • Q2 2027',
    tagline: 'Instant Customs Tariff & Regulatory Intelligence',
    description: 'Conversational AI trained on international trade tariffs, HS code classification rules, prohibited item registries, and customs documentation requirements.',
    features: [
      'Instant HS Code finder & duty rate estimator',
      'Automated export document validation scanner',
      'Packaging & vacuum-sealing requirement checker',
      '24/7 AI trade compliance advisor'
    ],
    targetAudience: 'All Shipplix Exporters & Freight Clients'
  },
  {
    id: 'business-dashboard',
    name: 'Business Dashboard',
    category: 'Apps & Developer',
    icon: BarChart3,
    badge: 'In Design',
    horizon: 'Phase 2 • Q1 2027',
    tagline: 'Commercial Export Analytics & Operations Hub',
    description: 'An operational dashboard for export companies to track shipment batches, monitor profit margins, generate multi-currency invoices, and manage repeat client rosters.',
    features: [
      'Multi-shipment financial analytics & profit metrics',
      'Commercial invoice & packing list generator',
      'Automated customer tracking SMS/Email updates',
      'Team permissions & multi-office access'
    ],
    targetAudience: 'Commercial Exporters & Logistics Teams'
  },
  {
    id: 'developer-api',
    name: 'Developer API Platform',
    category: 'Apps & Developer',
    icon: Code,
    badge: 'Planning',
    horizon: 'Phase 3 • Q3 2027',
    tagline: 'Embed Shipplix Shipping & Tracking Into Any App',
    description: 'RESTful APIs and webhooks allowing e-commerce stores, B2B marketplaces, and ERP systems to fetch real-time freight rates, programmatically book shipments, and track status.',
    features: [
      'Real-time air & sea freight rates endpoint',
      'Programmatic label creation & dispatch API',
      'Live shipment tracking webhooks',
      'Sandboxed developer portal & SDKs'
    ],
    targetAudience: 'Software Developers & Enterprise Marketplaces'
  },
  {
    id: 'mobile-app',
    name: 'Shipplix Mobile App',
    category: 'Apps & Developer',
    icon: Smartphone,
    badge: 'Coming Soon',
    horizon: 'Phase 2 • Q2 2027',
    tagline: 'Ship, Track & Manage Cargo on iOS & Android',
    description: 'A native mobile application to scan cargo barcodes, book doorstep pickups, receive push notifications for customs status, and chat directly with logistics managers.',
    features: [
      'Instant cargo barcode camera scanner',
      'Real-time push alerts for flight status',
      'One-tap door collection booking',
      'In-app digital payment & wallet support'
    ],
    targetAudience: 'Individual Shippers & Mobile Exporters'
  }
];

export const FutureProductsPage: React.FC<FutureProductsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<FutureProduct | null>(null);

  // Form states
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [userRole, setUserRole] = useState<string>('African Exporter / Farmer');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const categories = ['All', 'B2B & Trade', 'Logistics & Infra', 'Education & AI', 'Apps & Developer'];

  const filteredProducts = selectedCategory === 'All' 
    ? FUTURE_PRODUCTS 
    : FUTURE_PRODUCTS.filter(p => p.category === selectedCategory);

  const handleOpenWaitlist = (product?: FutureProduct) => {
    setSelectedProduct(product || FUTURE_PRODUCTS[0]);
    setSubmitted(false);
    setErrorMsg('');
    setModalOpen(true);
  };

  const handleSubmitWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please fill in your name, email, and phone/WhatsApp number.');
      return;
    }

    const newLead = {
      id: 'lead-' + Date.now(),
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      userRole,
      notes: notes.trim(),
      productInterested: selectedProduct?.name || 'General Future Ecosystem',
      date: new Date().toISOString()
    };

    // Save to local storage for persistent tracking
    try {
      const existing = JSON.parse(localStorage.getItem('shipplix_future_waitlist_leads') || '[]');
      existing.push(newLead);
      localStorage.setItem('shipplix_future_waitlist_leads', JSON.stringify(existing));
    } catch (e) {
      console.error('Error saving lead locally', e);
    }

    setSubmitted(true);
  };

  const handleWhatsAppNotify = (productName: string) => {
    const text = encodeURIComponent(`Hello Shipplix! I am interested in joining the VIP Early Access Waitlist for: ${productName}. Please notify me when beta access opens.`);
    window.open(`https://wa.me/2349168273513?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-20">
      {/* Top Header / Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 py-4 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <button 
              onClick={() => onNavigate?.('/')} 
              className="flex items-center gap-1.5 text-shipplix-blue hover:text-blue-900 transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              Home
            </button>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="text-slate-900">Future Products Roadmap</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-amber-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Roadmap 2026 – 2027
            </span>
          </div>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="bg-shipplix-blue text-white py-16 px-6 relative overflow-hidden border-b-4 border-shipplix-yellow">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-shipplix-yellow text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 mb-6">
              <Sparkles size={14} />
              Ecosystem Product Roadmap
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 leading-none">
              Building The <span className="text-shipplix-yellow underline decoration-white decoration-4 underline-offset-4">Global Trade</span> Operating System
            </h1>

            <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
              Shipplix is expanding beyond air and sea freight into a complete end-to-end export ecosystem. From B2B wholesale marketplaces to AI tariff intelligence and smart bonded warehousing, explore what we are building next.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-wider">
              <button 
                onClick={() => handleOpenWaitlist()}
                className="bg-shipplix-yellow hover:bg-yellow-500 text-shipplix-blue font-black py-3.5 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <Bell size={16} />
                Join VIP Early Access Waitlist
              </button>
              <a 
                href="https://wa.me/2349168273513?text=Hello%20Shipplix%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20upcoming%20future%20products%20and%20partnership%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3.5 px-8 rounded-xl transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                Contact Partnership Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 max-w-7xl pt-12">
        {/* Filter Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-black uppercase text-slate-900 tracking-tight">
              Upcoming Modules &amp; Platforms
            </h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
              Select a category to filter upcoming products
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-shipplix-blue text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => {
            const IconComponent = product.icon;

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200 hover:border-shipplix-blue rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-shipplix-blue via-indigo-600 to-shipplix-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-shipplix-blue group-hover:bg-shipplix-blue group-hover:text-white transition-colors flex items-center justify-center shrink-0 border border-blue-100">
                      <IconComponent size={24} />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-amber-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping"></span>
                        {product.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                        {product.horizon}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-1 group-hover:text-shipplix-blue transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-bold text-shipplix-blue uppercase tracking-wider mb-3">
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6">
                    {product.description}
                  </p>

                  {/* Key Features List */}
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 mb-6">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                      <Layers size={12} className="text-shipplix-blue" />
                      Planned Capabilities
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="text-[11px] font-semibold text-slate-700 flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer & Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Target Audience:</span>
                    <span className="text-slate-700 font-black">{product.targetAudience}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <button
                      onClick={() => handleOpenWaitlist(product)}
                      className="w-full bg-shipplix-blue hover:bg-blue-950 text-white font-black text-xs uppercase tracking-wider py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Bell size={14} />
                      Waitlist
                    </button>
                    <button
                      onClick={() => handleWhatsAppNotify(product.name)}
                      className="w-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-xs uppercase tracking-wider py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle size={14} className="text-emerald-600" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Waitlist & Enterprise Banner */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800 mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-shipplix-blue/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="bg-shipplix-yellow text-shipplix-blue text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md mb-4 inline-block">
                Priority Beta &amp; Investor Network
              </span>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4">
                Be First to Access The Shipplix Infrastructure
              </h2>
              <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed max-w-xl">
                Are you a commercial exporter, overseas distributor, logistics partner, or technology developer? Join our early access waitlist to receive priority invitations, beta access, and customized onboarding when each product rolls out.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => handleOpenWaitlist()}
                className="bg-shipplix-yellow hover:bg-yellow-500 text-shipplix-blue font-black py-4 px-8 rounded-xl uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Bell size={16} />
                Reserve VIP Early Access
              </button>
              <a
                href="https://wa.me/2349168273513?text=Hello%20Shipplix%20Team%2C%20I%20am%20interested%20in%20becoming%20an%20early%20partner%20or%20beta%20tester%20for%20your%20upcoming%20platforms."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-xl uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Partner / Investor Inquiry
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Waitlist Registration Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 my-8"
            >
              {/* Modal Header */}
              <div className="bg-shipplix-blue text-white p-6 relative">
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <span className="bg-shipplix-yellow text-shipplix-blue text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded mb-2 inline-block">
                  VIP Early Access Registration
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  Join Waitlist: {selectedProduct ? selectedProduct.name : 'Shipplix Ecosystem'}
                </h3>
                <p className="text-xs text-white/80 font-medium mt-1">
                  Reserving your spot is 100% free with no commitment.
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-300">
                      <Check size={32} />
                    </div>
                    <h4 className="text-xl font-black uppercase text-slate-900 mb-2">
                      You're On The VIP List!
                    </h4>
                    <p className="text-xs text-slate-600 font-medium mb-6 leading-relaxed max-w-sm mx-auto">
                      Thank you <span className="font-bold text-slate-900">{fullName}</span>. We have saved your reservation for <span className="font-bold text-shipplix-blue">{selectedProduct?.name || 'Shipplix Future Products'}</span>. You will receive priority updates as development progresses.
                    </p>

                    <div className="flex flex-col gap-3">
                      <a
                        href={`https://wa.me/2349168273513?text=${encodeURIComponent(
                          `Hello Shipplix! I just registered my waitlist interest for ${selectedProduct?.name || 'Future Products'}. My name is ${fullName} (${email}). Please confirm my spot!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
                      >
                        <MessageCircle size={16} />
                        Confirm Instantly via WhatsApp
                      </a>
                      <button
                        onClick={() => setModalOpen(false)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-xl transition-colors cursor-pointer"
                      >
                        Close Window
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitWaitlist} className="space-y-4">
                    {errorMsg && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-bold">
                        {errorMsg}
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Select Product of Interest
                      </label>
                      <select
                        value={selectedProduct?.id || ''}
                        onChange={(e) => {
                          const p = FUTURE_PRODUCTS.find(item => item.id === e.target.value);
                          if (p) setSelectedProduct(p);
                        }}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-shipplix-blue"
                      >
                        {FUTURE_PRODUCTS.map((prod) => (
                          <option key={prod.id} value={prod.id}>
                            {prod.name} ({prod.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Chief Temitope Adebayo"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-shipplix-blue placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3.5 top-3 text-slate-400" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@business.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-shipplix-blue placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                          WhatsApp / Phone <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-3.5 top-3 text-slate-400" />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-shipplix-blue placeholder:text-slate-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Your Industry / Role
                      </label>
                      <select
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-shipplix-blue"
                      >
                        <option value="African Exporter / Farmer">African Exporter / Farmer / Processor</option>
                        <option value="Overseas Buyer / Supermarket">Overseas Buyer / Distributor / Grocer</option>
                        <option value="E-commerce Seller / Merchant">E-commerce Seller / Merchant</option>
                        <option value="Freight & Logistics Partner">Freight &amp; Logistics Partner</option>
                        <option value="Software Developer / API User">Software Developer / API Integration</option>
                        <option value="Investor / Strategic Partner">Investor / Strategic Partner</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                        Specific Features or Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us what specific features you'd like to see..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-medium text-slate-900 focus:outline-none focus:border-shipplix-blue placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-shipplix-blue hover:bg-blue-950 text-white font-black text-xs uppercase tracking-widest py-4 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <CheckCircle2 size={16} />
                        Submit Early Access Registration
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FutureProductsPage;
