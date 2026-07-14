import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Download, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  TrendingUp, 
  Sparkles, 
  Globe, 
  ChevronRight, 
  Star, 
  HelpCircle, 
  Briefcase, 
  ShieldCheck,
  Check,
  Store,
  Laptop,
  MessageSquare,
  Megaphone,
  Database,
  Search,
  Users,
  Compass,
  ArrowDownToLine,
  ExternalLink,
  ChevronLeft,
  BookOpen,
  Utensils,
  Shirt,
  Palette,
  Package
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Common WhatsApp link matching app convention
const WHATSAPP_BASE = "https://wa.me/2349168273513?text=";
const URL_STRATEGY_CALL = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to book a Free Export Strategy Session to discuss my export business plans.")}`;
const URL_CHAT = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to chat about setting up my export business systems and international shipping.")}`;

// Reusable Button matching site's theme
const PageButton = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  as: Component = 'button',
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'yellow' | 'green'; 
  className?: string;
  as?: any;
  [key: string]: any;
}) => {
  const base = "px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-center text-sm cursor-pointer";
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-950 shadow-md",
    yellow: "bg-[#FEB919] text-[#032B73] hover:bg-[#e2a412] shadow-md hover:-translate-y-0.5",
    outline: "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    ghost: "text-white/80 hover:text-white hover:bg-white/10",
    green: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-md hover:-translate-y-0.5"
  };
  
  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

interface ExportBlueprintPageProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

export default function ExportBlueprintPage({ onNavigate, currentPath }: ExportBlueprintPageProps) {
  // Leads Storage & Form State
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    whatsapp: '',
    country: '',
    products: '',
    businessStage: 'Just Starting',
    monthlyRevenue: '',
    strategySession: true,
    futureTips: true
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Active Index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Testimonial Carousel Index
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Book Preview Active Page
  const [previewPage, setPreviewPage] = useState(0);

  // SEO Schema Injection on mount
  useEffect(() => {
    // Injects FAQ, Article, and Breadcrumb Schema dynamically for pristine SEO compatibility
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is this guide free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, The African Export Blueprint is 100% free to download. Our goal is to empower African exporters with modern customer acquisition and automation systems to grow their international trade."
          }
        },
        {
          "@type": "Question",
          "name": "Who is this guide for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is designed specifically for food exporters, fashion designers, manufacturers, farm owners, grocery suppliers, and entrepreneurs across Africa looking to build robust customer acquisition funnels for international buyers."
          }
        }
      ]
    };

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The African Export Blueprint: How to Build an International Customer Acquisition System",
      "description": "Download the official guide on how African businesses attract, validate, and convert overseas buyers systematically with modern technology and logistics.",
      "publisher": {
        "@type": "Organization",
        "name": "Shipplix",
        "logo": {
          "@type": "ImageObject",
          "url": "https://shipplix.com/logo.png"
        }
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://shipplix.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The African Export Blueprint",
          "item": "https://shipplix.com/export-blueprint"
        }
      ]
    };

    const scripts = [
      { id: 'seo-faq', data: faqSchema },
      { id: 'seo-article', data: articleSchema },
      { id: 'seo-breadcrumb', data: breadcrumbSchema }
    ].map(s => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = s.id;
      script.innerHTML = JSON.stringify(s.data);
      document.head.appendChild(script);
      return script;
    });

    // Cleanup scripts on unmount
    return () => {
      scripts.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) el.remove();
      });
    };
  }, []);

  // Helper to trigger direct download of a simulated beautifully formatted blueprint PDF
  const triggerBlueprintDownload = () => {
    const textContent = `THE AFRICAN EXPORT BLUEPRINT
========================================================================
How to Build an International Customer Acquisition System That Attracts Overseas Buyers Consistently.
Brought to you by Shipplix Logistics (https://shipplix.com)
========================================================================

PHASE 1: Building an International Business Buyers Trust
------------------------------------------------------------------------
* Trust is your primary product; physical goods are second.
* Before wiring funds, international buyers ask subconscious safety questions:
  - Can I trust this business?
  - Will I receive my order?
  - Is this company professional?
  - Can I contact them if something goes wrong?
* Essential elements to establish instant buyer confidence:
  - Custom business domain email (e.g. sales@yourbrand.com) instead of @gmail.com
  - Fully complete WhatsApp Business Profile with automatic replies and detailed catalog
  - Dynamic, responsive, secure digital storefront website
  - High-quality, original product photos and professional-looking packaging
  - Clear, accessible refund policies, delivery timelines, and contact information.

PHASE 2: Finding Overseas Customers
------------------------------------------------------------------------
* Stop waiting to be discovered. Build four dependable customer pipelines:
  1. Targeted Meta Ads: Direct laser focus on diaspora communities, African groceries, fashion stores, and beauty boutique owners in the USA, UK, Canada, and Europe.
  2. Authentic Content Marketing: Show product sourcing, behind-the-scenes hygienic packaging, and verified weight quality controls.
  3. Active Diaspora Community Engagement: Provide genuine value in online forums and local groups rather than generic spamming.
  4. Structured Referral Engine: Offer rewarding incentives (discounts, free packaging, shipping credits) to existing customers for word-of-mouth growth.

PHASE 3: Building a Sales System That Works While You Sleep
------------------------------------------------------------------------
* Map out a frictionless, structured 10-step client journey:
  1. Ad/Content View -> 2. Website Visit -> 3. Catalog Browse -> 4. Simple Question -> 5. Place Order -> 6. Secure Invoice -> 7. Packing/Scale Scale Video -> 8. Tracking Code -> 9. Safe Delivery -> 10. Review & Referral.
* Ensure automated CRM, fast response messaging, and self-serve ordering options to prevent lead drop-offs.

PHASE 4: Turning One Customer Into Ten
------------------------------------------------------------------------
* Retaining a customer is exponentially cheaper than hunting for a new one.
* Deliver an unmatched sensory experience (neat packaging, secure boxes, clear tracking, surprise bonus items).
* Solicit reviews systematically after every arrival. Use these reviews to create secondary marketing assets.

PHASE 5: Scaling an Export Business
------------------------------------------------------------------------
* Unite marketing, tech, automation, and reliable logistics into one operational engine.
* Maintain a strict 90-day execution framework:
  - Month 1: Settle foundation, branding, and WhatsApp catalogs.
  - Month 2: Scale consistent posting and launch targeted Meta Ads campaigns.
  - Month 3: Optimize sales pipelines, integrate shipping automation, and expand territories.

IMPLEMENTATION PARTNER
------------------------------------------------------------------------
Need expert implementation of these systems?
Shipplix builds your premium websites, online stores, corporate emails, CRM integrations, Meta Ads setups, and handles your entire high-priority international freight delivery.
Contact: services@shipplix.com | WhatsApp: +234 916 827 3513
========================================================================`;

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "Shipplix_The_African_Export_Blueprint.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Form Validation and Submission
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.businessName.trim()) errors.businessName = 'Business Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid Email Address is required';
    if (!formData.whatsapp.trim()) errors.whatsapp = 'WhatsApp Number is required';
    if (!formData.country.trim()) errors.country = 'Country is required';
    if (!formData.products.trim()) errors.products = 'Products You Sell is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstError = Object.keys(errors)[0];
      const element = document.getElementsByName(firstError)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate database CRM persistence
    setTimeout(() => {
      try {
        const existingLeads = JSON.parse(localStorage.getItem('shipplix_export_leads') || '[]');
        existingLeads.push({
          ...formData,
          id: 'lead_' + Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('shipplix_export_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.error("Local storage lead save error", err);
      }

      setIsSubmitting(false);
      onNavigate('/export-blueprint/thank-you');
      triggerBlueprintDownload(); // Automatically trigger instant download as requested
    }, 1200);
  };

  // Scroll Helper
  const scrollToForm = () => {
    const element = document.getElementById('download-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Guide Previews
  const previewPages = [
    {
      title: "Cover Page",
      text: "The African Export Blueprint: How to Build an International Customer Acquisition System That Attracts Overseas Buyers Consistently.",
      badge: "GUIDE START"
    },
    {
      title: "Phase 1: Trust",
      text: "International buyers are sending money to someone they have never met. Trust is your primary product. Actual goods come second.",
      badge: "PAGE 4"
    },
    {
      title: "Phase 2: Discovery",
      text: "Stop hoping. Build four reliable customer sources: Meta ads to diaspora owners, organic behind-the-scenes content, active community values, and referral programs.",
      badge: "PAGE 9"
    },
    {
      title: "Phase 3: Sales Machine",
      text: "Establish a digital storefront with business email and automatic WhatsApp catalog replies. Create a clear 10-step client pathway to finalize orders seamlessly.",
      badge: "PAGE 13"
    },
    {
      title: "Phase 4: Scaling",
      text: "Turn one customer into ten. Retain them through clean packaging, real-time tracking videos, feedback surveys, and incentivized word-of-mouth credits.",
      badge: "PAGE 18"
    }
  ];

  // Testimonials Array
  const testimonials = [
    {
      name: "Chidi Egwu",
      role: "CEO, Egwu Agricultural Foods",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "We struggled to find distributors in Texas for our processed garri and melon seed batches. After implementing the Phase 1 & 2 guidelines, overseas buyers verified us via our Shipplix website and placed orders worth $12k in our first month. Absolute game changer!",
      rating: 5
    },
    {
      name: "Amina Yusuf",
      role: "Creative Director, Amina Ankara Luxury",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content: "Most exporters told us we just need social media. But getting our professional domain email and the website system setup from Shipplix instantly converted three international boutique store owners from the UK. The guide's trust framework is golden.",
      rating: 5
    },
    {
      name: "Tolani Balogun",
      role: "Founder, Tolani Beauty & Herbs",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      content: "The WhatsApp automation tips saved me. I used to lose US customers because of the timezone differences. Now, our catalog and answers are delivered instantly. Combined with Shipplix's fast air-cargo, my client retention rate is over 75%!",
      rating: 5
    }
  ];

  // FAQs Array
  const faqs = [
    {
      q: "Is this guide free?",
      a: "Yes, The African Export Blueprint is 100% free with no hidden charges. It serves as our contribution to help African brands professionalize and access global trade opportunities confidently."
    },
    {
      q: "Who is this guide for?",
      a: "This blueprint is specifically designed for agricultural product suppliers, food processors, fashion designers, beauty/cosmetic brands, handcrafted gift makers, and small-to-medium entrepreneurs across Africa aspiring to win high-value overseas buyers."
    },
    {
      q: "Do I need export experience?",
      a: "No! The guide explains concepts in clear, beginner-friendly marketing psychology. It walks you step-by-step from building trust and branding to acquiring customers, setting up sales systems, and shipping internationally."
    },
    {
      q: "Can Shipplix build my website?",
      a: "Absolutely. Beyond freight forwarding, we help businesses implement their full tech systems—including custom responsive websites, optimized online catalogues, and fast search-engine visibility."
    },
    {
      q: "Can Shipplix run Meta Ads?",
      a: "Yes. Our growth marketing specialists set up, optimize, and manage highly profitable Meta (Facebook & Instagram) advertising campaigns specifically target-matched to active diaspora buyers."
    },
    {
      q: "Can Shipplix build my online store?",
      a: "Yes, we build secure online stores with standard checkouts, integrated currency switchers, automated shipping calculation rates, and detailed product lists."
    },
    {
      q: "Can Shipplix help with WhatsApp automation?",
      a: "Yes. We design and integrate professional WhatsApp Business automations, including custom greeting templates, catalogue links, interactive FAQs, and AI auto-responders."
    },
    {
      q: "Can Shipplix handle international shipping?",
      a: "Yes, Shipplix is a leading global logistics provider specializing in fast, reliable air and ocean cargo from Africa to the USA, UK, Canada, and Europe—complete with customs clearance and anti-scam video packing scale integrations."
    },
    {
      q: "Can Shipplix help me find overseas customers?",
      a: "Yes, through our structured digital frameworks (websites, targeted ads, content systems, SEO, and diaspora community pipelines) we build the exact customer acquisition funnel your brand needs to attract global buyers."
    }
  ];

  // RENDER THANK YOU STATE
  if (currentPath === '/export-blueprint/thank-you') {
    return (
      <div className="bg-slate-50 min-h-screen py-20 px-6 font-sans">
        <div className="max-w-2xl mx-auto bg-white border border-slate-200/80 rounded-3xl shadow-xl overflow-hidden text-center p-10 md:p-16">
          <motion.div 
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-emerald-100"
          >
            <ShieldCheck size={44} />
          </motion.div>

          <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.3em] bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block">
            Access Authorized
          </span>

          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Congratulations!
          </h1>
          <h2 className="text-xl font-bold text-slate-600 mb-6">
            Your Export Blueprint Is Ready.
          </h2>

          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-lg mx-auto mb-10">
            The free guide has been successfully transmitted to your email address. You can also download it instantly below to begin your global export journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PageButton 
              variant="yellow" 
              onClick={triggerBlueprintDownload}
              className="w-full sm:w-auto px-10 py-5 text-xs uppercase tracking-widest font-black"
            >
              <Download size={16} />
              Download PDF Blueprint
            </PageButton>

            <PageButton 
              variant="outline" 
              onClick={() => onNavigate('/')}
              className="w-full sm:w-auto px-10 py-5 text-xs uppercase tracking-widest font-black"
            >
              Back to Homepage
              <ArrowRight size={16} />
            </PageButton>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-100 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
              <Sparkles size={14} className="text-shipplix-yellow" /> What's Next?
            </h4>
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-sm text-slate-700 space-y-4">
              <p className="font-bold">
                🚀 Take Advantage of Your Free Export Strategy Session
              </p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Since you checked the strategy session request, a Shipplix representative will reach out to you on WhatsApp within the next 24 business hours to analyze your product list, audit your digital trust parameters, and map out your optimal international target audiences.
              </p>
              <div className="pt-2">
                <a 
                  href={URL_STRATEGY_CALL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-wider hover:underline"
                >
                  Skip the Wait: Open WhatsApp Chat
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RENDER LANDING PAGE STATE
  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-shipplix-yellow selection:text-blue-950 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white pt-24 pb-20 md:py-32 px-6 overflow-hidden">
        {/* Background Visual Enhancements (Containers, Shipping routes feeling) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <svg className="absolute w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,200 Q500,50 900,400 T1500,100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,10" />
            <path d="M50,400 Q700,300 1200,600" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-shipplix-yellow text-[10px] uppercase font-black tracking-widest shadow-inner">
                <Sparkles size={12} className="animate-pulse" /> Official Lead Magnet Guide
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                The African <br className="hidden md:inline" />
                <span className="text-shipplix-yellow bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">Export Blueprint</span>
              </h1>

              <h2 className="text-lg md:text-xl font-extrabold text-slate-100 tracking-tight leading-relaxed">
                Learn How to Find Overseas Customers, Build Trust, Market Your Products Internationally, and Create an Export Business That Generates Consistent Sales.
              </h2>

              <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed max-w-2xl">
                Whether you sell food, fashion, beauty products, agricultural products, handmade goods, or any export-ready product, this free guide will show you the systems successful businesses use to attract buyers from the USA, UK, Canada, Europe, and beyond.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                {[
                  "Free 5 Phase Guide",
                  "Beginner Friendly",
                  "Marketing Psychology",
                  "Export Business Blueprint"
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                    <CheckCircle2 size={12} className="text-shipplix-yellow flex-shrink-0" />
                    <span className="text-[10px] font-black uppercase tracking-tight text-slate-100">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <PageButton variant="yellow" onClick={scrollToForm} className="px-8 py-4.5 text-xs uppercase tracking-widest font-black shadow-[0_0_30px_rgba(250,204,21,0.25)] hover:scale-[1.02]">
                  <Download size={14} /> Download Free Blueprint
                </PageButton>
                <PageButton variant="ghost" as="a" href={URL_STRATEGY_CALL} target="_blank" rel="noopener noreferrer" className="border border-white/20 px-8 py-4.5 text-xs uppercase tracking-widest font-black hover:bg-white/5">
                  Book Free Strategy Call
                </PageButton>
              </div>
            </div>

            {/* Hero Right Visual: Book Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-shipplix-yellow to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-45 transition duration-1000"></div>
                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col w-[280px] md:w-[320px] transform hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Book Spine Accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-l-2xl"></div>
                  
                  <div className="pl-4 flex flex-col justify-between h-[360px] md:h-[400px]">
                    <div>
                      <div className="flex justify-between items-start text-slate-500 text-[8px] font-mono tracking-widest uppercase mb-6">
                        <span>VOLUME I</span>
                        <span>SHIPPLIX PRESS</span>
                      </div>
                      
                      <span className="text-[10px] font-black text-shipplix-yellow uppercase tracking-widest bg-yellow-500/10 border border-yellow-500/20 px-2 py-1 rounded inline-block mb-3">
                        SPECIAL EDITION
                      </span>
                      
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white leading-tight">
                        THE AFRICAN<br />EXPORT<br />BLUEPRINT
                      </h3>
                      
                      <p className="text-[10px] text-slate-400 font-bold leading-relaxed mt-4">
                        How to Build an International Customer Acquisition System That Attracts Overseas Buyers Consistently.
                      </p>
                    </div>

                    <div className="border-t border-slate-800 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <FileText size={14} className="text-shipplix-yellow" />
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">23 High-Density Pages</span>
                      </div>
                      <span className="text-[8px] font-mono text-slate-500">© 2026</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHO THIS GUIDE IS FOR SECTION */}
      <section className="py-20 bg-white border-y border-slate-200/60 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Intended Audience
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Who This Guide Is Perfect For
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              Crafted specifically to support diverse African creators, suppliers, and producers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Food Exporters", icon: Utensils, desc: "Processors of local grains, spices, oils, & packaged meals." },
              { label: "Fashion Brands", icon: Shirt, desc: "Designers shipping Ankara fabric, clothing, & customized fits." },
              { label: "Beauty Brands", icon: Palette, desc: "Sellers of pure Shea butter, cosmetic oils, & herbal soaps." },
              { label: "Manufacturers", icon: Package, desc: "Makers of packaged FMCG goods, retail craft, & home decor." },
              { label: "Farmers & Producers", icon: Compass, desc: "Growers of cocoa, nuts, chili peppers, charcoal, & split beans." },
              { label: "Grocery Suppliers", icon: Store, desc: "Bulk traders dispatching ethnic food stocks to Western stores." },
              { label: "Entrepreneurs", icon: Sparkles, desc: "Self-starters setting up brand new international trades." },
              { label: "Business Owners", icon: Briefcase, desc: "Established companies upgrading to foreign currencies." },
              { label: "Export Beginners", icon: BookOpen, desc: "Newcomers looking to avoid costly logistics mistakes." },
              { label: "Existing Exporters", icon: TrendingUp, desc: "Pro players wanting to scale and automate their operations." }
            ].map((audience, i) => {
              const Icon = audience.icon;
              return (
                <div key={i} className="bg-slate-50 border border-slate-200/80 hover:border-shipplix-blue hover:bg-white p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between group">
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-200/60 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all shadow-sm">
                    <Icon size={18} />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-900 transition-colors">
                      {audience.label}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-bold mt-1.5 leading-normal">
                      {audience.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN (5 PHASES SUMMARY) */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Comprehensive Walkthrough
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Inside the 5-Phase Blueprint
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              Summarized into clear actionable objectives extracted straight from our PDF blueprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Building Trust",
                desc: "Establish core international credibility. Discover why buyers buy trust before physical goods. Acquire custom domain emails, detailed WhatsApp business profiles, product photo standards, and a professional digital presence to answer safety queries instantly.",
                bullets: ["Custom Domain Emails", "WhatsApp Business", "Product Catalog Basics", "Confidence Parameters"]
              },
              {
                phase: "Phase 2",
                title: "Finding Customers",
                desc: "Transition from manual posting to reliable digital channels. Build four consistent acquisition pipelines: Diaspora-targeted Meta Ads, educational behind-the-scenes organic content, value-first community integrations, and structured reward-based referrals.",
                bullets: ["Laser-targeted Meta Ads", "80/20 Content Framework", "Diaspora Channels", "Referral Loops"]
              },
              {
                phase: "Phase 3",
                title: "Sales Automation",
                desc: "Create an active digital salesperson running 24/7. Design a streamlined, automated customer journey from ad view to payment receipt. Set up self-service checkouts and instant auto-replies to secure sales even while you sleep.",
                bullets: ["Frictionless checkout", "24/7 Auto-replies", "10-Step Customer Path", "CRM Integrations"]
              },
              {
                phase: "Phase 4: Retention",
                title: "Value Multipliers",
                desc: "Multiply initial acquisition efforts. Optimize neat packaging, fast transit notifications, and post-delivery follow-up protocols. Systematically gather customer reviews and configure credit referral engines.",
                bullets: ["Memorable unboxing", "Review-collection scripts", "Referral credits", "Re-engagement campaigns"]
              },
              {
                phase: "Phase 5",
                title: "Scaling Operations",
                desc: "Scale into a valuable, enduring global export name. Put your 90-day growth roadmap into action, systematize product audits, and link directly to automated international logistics to fulfill cargo volumes reliably.",
                bullets: ["90-Day Execution Plan", "Scale-ready workflows", "Logistics synchronization", "Multiterritory growth"]
              }
            ].map((p, i) => (
              <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-blue-900 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-widest">
                      {p.phase}
                    </span>
                    <span className="text-slate-300 font-bold font-mono text-sm">0{i+1}</span>
                  </div>
                  
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-900 transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 mt-6 pt-4">
                  <ul className="space-y-1.5">
                    {p.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-[9px] font-bold text-slate-600 uppercase tracking-tight">
                        <Check size={10} className="text-emerald-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS GUIDE IS DIFFERENT */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column Left Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.3em] bg-white/5 border border-white/10 px-3 py-1.5 rounded inline-block">
                Strategic Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight">
                Why This Guide Is Different
              </h2>
              <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed">
                Most traditional export courses only teach you customs codes and freight logistics. They assume customers will magically find you.
              </p>
              <p className="text-slate-300 text-xs md:text-sm font-bold leading-relaxed">
                This blueprint flips the model: it teaches you how to build the complete digital trust engine first, ensuring you have reliable buyers lined up before your cargo even leaves the warehouse.
              </p>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <p className="text-xl md:text-2xl font-black italic text-shipplix-yellow tracking-tight leading-relaxed">
                  "International customers don't buy products first. They buy trust. This blueprint teaches you how to build that trust."
                </p>
              </div>
            </div>

            {/* Column Right Points Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Understand Buyer Psychology", desc: "Unlock emotional hooks and trust dynamics foreign clients demand." },
                  { title: "Acquire Premium Branding", desc: "Build professional email, logos, and business styles." },
                  { title: "Meta Ads & Target Channels", desc: "Configure precise Facebook & Instagram targeted funnels." },
                  { title: "WhatsApp & AI Automation", desc: "Create auto-responders to serve leads 24 hours a day." },
                  { title: "Seamless Checkout Stores", desc: "Enable digital self-service checkouts and catalogs." },
                  { title: "Operational Scaling", desc: "Deploy systematic checklists, CRM retention, and metrics." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                    <h4 className="text-xs font-black text-shipplix-yellow uppercase tracking-wider mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PREVIEW THE GUIDE SECTION */}
      <section className="py-20 bg-white px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Sneak Peek
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Preview The Guide Contents
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              Flip through some of the core actionable pages before downloading your free copy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Book Pages Slideshow */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 min-h-[260px] relative shadow-xl border border-slate-800 flex flex-col justify-between">
                
                {/* Simulated Book Page Header */}
                <div className="flex justify-between items-center text-slate-400 text-[8px] font-mono tracking-widest uppercase">
                  <span>THE AFRICAN EXPORT BLUEPRINT</span>
                  <span className="bg-slate-800 text-shipplix-yellow px-2 py-0.5 rounded">
                    {previewPages[previewPage].badge}
                  </span>
                </div>

                <div className="my-8 space-y-3">
                  <h3 className="text-lg md:text-xl font-black text-shipplix-yellow uppercase tracking-tight">
                    {previewPages[previewPage].title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                    "{previewPages[previewPage].text}"
                  </p>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                  <div className="flex gap-1.5">
                    {previewPages.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setPreviewPage(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${previewPage === idx ? 'bg-shipplix-yellow w-5' : 'bg-slate-700'}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => setPreviewPage(prev => prev === 0 ? previewPages.length - 1 : prev - 1)}
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      onClick={() => setPreviewPage(prev => (prev + 1) % previewPages.length)}
                      className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

              </div>

              {/* Cover Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: "23 Pages", val: "High Density Content" },
                  { label: "5 Phases", val: "A-Z Structuring" },
                  { label: "Checklists", val: "Practical Action Steps" },
                  { label: "Marketing", val: "Psychology & Meta Ads" },
                  { label: "Business Systems", val: "Online Automations" },
                  { label: "Export Logistics", val: "Delivery & Tracking" }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                    <span className="text-xs font-black text-blue-900 block uppercase tracking-tight">{stat.label}</span>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Cover CTA info */}
            <div className="lg:col-span-5 space-y-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-shipplix-yellow" /> Download Package Included:
                </h4>
                <p className="text-sm font-extrabold text-slate-800">
                  You get the complete blueprint document instantly, plus matching checklist checklists, ready to apply to your business today.
                </p>
                <div className="mt-6 space-y-3.5">
                  {[
                    "Proven WhatsApp script templates",
                    "A-Z target buyer avatar definitions",
                    "A complete 90-day expansion planner",
                    "Anti-scam video scaling parameters"
                  ].map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                      <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <PageButton variant="primary" onClick={scrollToForm} className="w-full text-xs uppercase tracking-widest font-black py-4 mt-6">
                Download My Copy
              </PageButton>
            </div>

          </div>
        </div>
      </section>

      {/* DOWNLOAD FORM SECTION (HIGHEST CONVERTING SECTION) */}
      <section id="download-form-section" className="py-20 bg-slate-100 border-b border-slate-200 px-6">
        <div className="container mx-auto max-w-3xl">
          
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white px-8 py-10 text-center space-y-2 relative">
              {/* Abs decoration */}
              <div className="absolute right-4 top-4 opacity-10">
                <FileText size={80} />
              </div>
              <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.3em] bg-white/5 border border-white/10 px-3 py-1.5 rounded inline-block">
                Instant Digital Delivery
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Download Your Free Export Blueprint
              </h2>
              <p className="text-slate-300 text-xs font-medium leading-relaxed max-w-xl mx-auto">
                Complete the form below to receive instant access. The guide will be instantly delivered to your email and made available on the next screen.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="p-8 md:p-12 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <User size={12} className="text-blue-900" /> Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Enter your first & last name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.fullName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.fullName && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.fullName}</p>}
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <Briefcase size={12} className="text-blue-900" /> Business Name *
                  </label>
                  <input 
                    type="text" 
                    name="businessName"
                    placeholder="Enter your company name"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.businessName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.businessName && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.businessName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <Mail size={12} className="text-blue-900" /> Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="you@yourcompany.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.email && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.email}</p>}
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <Phone size={12} className="text-blue-900" /> WhatsApp Number *
                  </label>
                  <input 
                    type="tel" 
                    name="whatsapp"
                    placeholder="e.g. +234 80 1234 5678"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.whatsapp ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.whatsapp && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.whatsapp}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Country */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <MapPin size={12} className="text-blue-900" /> Country *
                  </label>
                  <input 
                    type="text" 
                    name="country"
                    placeholder="e.g. Nigeria"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.country ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.country && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.country}</p>}
                </div>

                {/* Products You Sell */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <Store size={12} className="text-blue-900" /> Products You Sell *
                  </label>
                  <input 
                    type="text" 
                    name="products"
                    placeholder="e.g. Processed Foods, Ankara Fashion, Shea Butter"
                    value={formData.products}
                    onChange={handleInputChange}
                    className={`w-full bg-slate-50 border ${formErrors.products ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors`}
                  />
                  {formErrors.products && <p className="text-red-500 text-[9px] font-black uppercase tracking-wider">{formErrors.products}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Business Stage (Dropdown) */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <TrendingUp size={12} className="text-blue-900" /> Business Stage *
                  </label>
                  <select 
                    name="businessStage"
                    value={formData.businessStage}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-900 transition-colors cursor-pointer"
                  >
                    <option value="Just Starting">Just Starting</option>
                    <option value="Already Selling">Already Selling Locally</option>
                    <option value="Already Exporting">Already Exporting</option>
                    <option value="Planning to Export">Planning to Export Soon</option>
                  </select>
                </div>

                {/* Monthly Revenue (Optional) */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    Monthly Revenue (Optional)
                  </label>
                  <input 
                    type="text" 
                    name="monthlyRevenue"
                    placeholder="e.g. Under 500k, 1M - 5M, Over 5M"
                    value={formData.monthlyRevenue}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 transition-colors"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="strategySession"
                    checked={formData.strategySession}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-0.5 accent-blue-900 cursor-pointer"
                  />
                  <span className="text-slate-600 text-xs font-semibold select-none">
                    Yes, I'd like a <span className="text-blue-900 font-bold">FREE Export Strategy Session</span> with a Shipplix growth partner.
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="futureTips"
                    checked={formData.futureTips}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-0.5 accent-blue-900 cursor-pointer"
                  />
                  <span className="text-slate-600 text-xs font-semibold select-none">
                    Send me future export tips and high-converting business opportunities.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <PageButton 
                  variant="yellow" 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full text-xs uppercase tracking-widest font-black py-4.5"
                >
                  {isSubmitting ? 'Transmitting Leads...' : 'Download My Free Blueprint'}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </PageButton>
                <p className="text-center text-[10px] text-slate-400 mt-3 font-semibold uppercase tracking-wider">
                  🔐 We respect your privacy. No spam. Secure database transmission.
                </p>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* NEED HELP BUILDING EVERYTHING? (IMPLEMENTATION SECTION) */}
      <section className="py-20 bg-white px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Strategic Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Need Help Building Everything?
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              The guide teaches you the strategy. Shipplix helps businesses implement the entire physical & digital system.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Professional Website", icon: Laptop, desc: "A clean, dynamic custom storefront to display products professionally." },
              { title: "Online Store Setup", icon: Store, desc: "Complete digital checkout, multi-currency display, & auto rates." },
              { title: "Business Email", icon: Mail, desc: "Establish immediate overseas trust with domain-hosted mail." },
              { title: "WhatsApp Business", icon: Phone, desc: "Set up professional catalog links, greeting alerts, & automations." },
              { title: "AI Customer Support", icon: Sparkles, desc: "Deploy intelligent chat bots to converse with leads 24/7." },
              { title: "Meta Ads Setup", icon: Megaphone, desc: "Highly profitable diaspora targeting campaigns." },
              { title: "Lead Generation", icon: Compass, desc: "Set up custom landing capture and inquiry pages." },
              { title: "Sales Funnels", icon: TrendingUp, desc: "Frictionless multi-step customer journey automation." },
              { title: "CRM Setup", icon: Database, desc: "Store, tag, and nurture international customer databases." },
              { title: "Customer Automation", icon: Users, desc: "Auto follow-ups and review loops after every parcel." },
              { title: "Shipment Tracking", icon: FileText, desc: "Real-time tracking pages integrated on your own site." },
              { title: "International Shipping", icon: Globe, desc: "Express air cargo, ocean consolidations, and clearance." },
              { title: "Business Consulting", icon: Briefcase, desc: "Personal analysis of products, pricing, and packaging." }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl flex flex-col justify-between hover:border-shipplix-blue hover:bg-white transition-all duration-300 group">
                  <div>
                    <div className="w-10 h-10 bg-white border border-slate-200/60 rounded-xl flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all shadow-sm">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight mt-4 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-bold mt-1.5 leading-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
            <PageButton variant="primary" as="a" href={URL_STRATEGY_CALL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10">
              Book My Strategy Call
            </PageButton>
            <PageButton variant="outline" as="a" href={URL_CHAT} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10">
              <MessageCircle size={16} /> Chat With Shipplix
            </PageButton>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH SHIPPLIX */}
      <section className="py-20 bg-slate-50 px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphics */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white p-8 rounded-3xl shadow-xl space-y-6">
                <span className="text-shipplix-yellow text-[9px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-2 py-1 rounded inline-block">
                  Growth Partner Ecosystem
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  Beyond Just Shipping
                </h3>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Building a successful export trade requires an integrated mesh of trust parameters, active automation pipelines, and high-quality deliveries.
                </p>
                
                <div className="space-y-3.5 pt-4 border-t border-white/10">
                  {[
                    "Reliable Technology integrations",
                    "Targeted growth marketing",
                    "Seamless local & global logistics",
                    "Customized international fulfillment"
                  ].map((sys, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-200 font-semibold">
                      <CheckCircle2 size={14} className="text-shipplix-yellow" />
                      <span>{sys}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
                Value Differentiation
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
                Why Work With Shipplix
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">
                Most freight forwarders wait for you to bring your boxes, hand you an invoice, and wave goodbye. If your business doesn't sell, they don't care.
              </p>
              <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                Shipplix is a **business growth partner**, not just a logistics supplier. We understand that your physical exports are only possible when your technology, marketing, branding, and customer retention systems are performing brilliantly.
              </p>
              <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                By helping you design, deploy, and automate your complete digital customer acquisition funnel, we establish a robust commercial flywheel that generates predictable, high-value, high-frequency export cargo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS (CAROUSEL) */}
      <section className="py-20 bg-white px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Exporters Success
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Trusted By African Exporters
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              Hear from actual business owners who transformed their operations using the Blueprint frameworks.
            </p>
          </div>

          {/* Testimonial card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-12 relative shadow-sm">
            <div className="absolute right-8 top-8 opacity-10 text-slate-400">
              <Star size={80} fill="currentColor" />
            </div>

            <div className="space-y-6">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-shipplix-yellow fill-shipplix-yellow" />
                ))}
              </div>

              <p className="text-slate-700 text-sm md:text-base font-bold italic leading-relaxed">
                "{testimonials[testimonialIndex].content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60">
                <img 
                  src={testimonials[testimonialIndex].image} 
                  alt={testimonials[testimonialIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border border-slate-200 object-cover"
                />
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">
                    {testimonials[testimonialIndex].name}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                    {testimonials[testimonialIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Switcher Buttons */}
            <div className="flex gap-2 justify-end mt-8">
              <button 
                onClick={() => setTestimonialIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => setTestimonialIndex(prev => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 px-6 border-b border-slate-200/60">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-shipplix-blue text-[10px] font-black uppercase tracking-[0.25em] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Faq
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-bold tracking-tight">
              Get detailed, professional explanations regarding our free blueprint, tech setup, and shipping support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                      <HelpCircle size={16} className="text-blue-900 flex-shrink-0" />
                      {faq.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronRight size={14} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="container mx-auto max-w-3xl relative z-10 space-y-6">
          <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.3em] bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block">
            Launch Your Global Trade
          </span>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
            Your International Customers Are Waiting.
          </h2>

          <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Thousands of buyers around the world are already looking for quality African products. The opportunity is real. The businesses that win are the ones that build trust, create professional systems, market consistently, and deliver reliably.
          </p>

          <p className="text-shipplix-yellow font-extrabold text-sm tracking-tight uppercase">
            Download the free blueprint today and take the first step toward building an export business that grows beyond borders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <PageButton variant="yellow" onClick={scrollToForm} className="w-full sm:w-auto px-10">
              <Download size={14} /> Download Blueprint
            </PageButton>
            <PageButton variant="ghost" as="a" href={URL_STRATEGY_CALL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-white/20 px-10">
              Book Strategy Session
            </PageButton>
          </div>
        </div>
      </section>

    </div>
  );
}
