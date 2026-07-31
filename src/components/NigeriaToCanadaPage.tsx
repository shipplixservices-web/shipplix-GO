import React, { useState } from 'react';
import { 
  Plane, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Globe, 
  Truck, 
  Box, 
  HelpCircle, 
  Star, 
  FileCheck, 
  DollarSign, 
  Package, 
  ArrowRight, 
  AlertTriangle,
  Utensils,
  Shirt,
  Sparkles,
  MapPin,
  Search,
  Lock,
  ChevronDown,
  Building2,
  Users
} from 'lucide-react';

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
    primary: "bg-blue-900 text-white hover:bg-blue-950 shadow-md",
    yellow: "bg-amber-400 text-blue-950 hover:bg-amber-500 shadow-md",
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
const URL_CANADA_QUOTE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get a shipping rate quote from Nigeria to Canada.")}`;
const URL_CANADA_BOOK = `https://myshipment.shipplix.com`;

interface NigeriaToCanadaPageProps {
  onNavigate?: (path: string) => void;
}

export default function NigeriaToCanadaPage({ onNavigate }: NigeriaToCanadaPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // SEO Meta & Title setup
  React.useEffect(() => {
    document.title = "Ship from Nigeria to Canada | Fast, Secure & Affordable Air Cargo | Shipplix";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Send food items, personal belongings, fashion products, commercial cargo, and business shipments from Nigeria to Toronto, Calgary, Vancouver, Ottawa, Montreal, and all across Canada with fast door-to-door air freight delivery.'
    );

    const ogTags = [
      { property: 'og:title', content: 'Ship from Nigeria to Canada | Express Air Cargo & Door-to-Door | Shipplix' },
      { property: 'og:description', content: 'Fast 5-7 business days door-to-door delivery from Nigeria to Ontario, Alberta, British Columbia, Quebec, and all Canadian provinces. Professional vacuum sealing, CBSA customs clearance, and transparent rates.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://shipplix.com/ship-from-nigeria-to-canada' }
    ];

    ogTags.forEach(tagData => {
      let el = document.querySelector(`meta[property="${tagData.property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', tagData.property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', tagData.content);
    });

    // Add JSON-LD Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Shipping from Nigeria to Canada",
      "provider": {
        "@type": "Organization",
        "name": "Shipplix",
        "url": "https://shipplix.com"
      },
      "serviceType": "International Air Cargo & Door-to-Door Logistics",
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Nigeria" }
      ],
      "description": "Fast express air cargo, foodstuff shipping, and door-to-door package delivery services from Nigeria to Toronto, Calgary, Vancouver, Ottawa, Montreal, and all 10 Canadian provinces.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://shipplix.com/ship-from-nigeria-to-canada"
      }
    });
    document.head.appendChild(schemaScript);

    return () => {
      if (document.head.contains(schemaScript)) {
        document.head.removeChild(schemaScript);
      }
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
      window.scrollTo(0, 0);
    }
  };

  const faqs = [
    {
      q: "How long does shipping from Nigeria to Canada take?",
      a: "Express Air Freight takes 5-7 business days door-to-door across major cities like Toronto, Calgary, Edmonton, Ottawa, Vancouver, and Montreal. Economy Air Cargo takes approximately 7-10 business days."
    },
    {
      q: "Can I ship foodstuffs from Nigeria to Canada?",
      a: "Yes! You can ship dried, processed, and packaged Nigerian food items including Egusi, Ogbono, Crayfish, Kilishi, Dried Fish, Pepper, Yam Flour, Garri, and Spices. All food items undergo professional moisture inspection and commercial vacuum sealing to meet CBSA and CFIA import requirements."
    },
    {
      q: "How are custom duties handled in Canada?",
      a: "Shipplix provides complete CBSA (Canada Border Services Agency) customs declaration guidance. For personal effects and standard non-commercial packages under designated value thresholds, clearance is fast and seamless. Any applicable GST/HST or provincial duties are clearly communicated prior to final delivery."
    },
    {
      q: "Which cities and provinces in Canada do you deliver to?",
      a: "We deliver door-to-door to all 10 provinces in Canada, including Ontario (Toronto, Ottawa, Mississauga, Brampton, Hamilton), Alberta (Calgary, Edmonton), British Columbia (Vancouver, Surrey), Quebec (Montreal), Manitoba (Winnipeg), Nova Scotia (Halifax), Saskatchewan, and New Brunswick."
    },
    {
      q: "What is the minimum weight requirement for shipping to Canada?",
      a: "We accept packages starting from 1kg for express air delivery. For bulk merchants, exporters, and commercial traders, we offer volume tier discounts for shipments over 50kg, 100kg, and 500kg."
    },
    {
      q: "What items are prohibited from shipping to Canada?",
      a: "Prohibited items include live plants, raw meat or poultry products containing blood or uninspected fresh produce, firearms, illegal narcotics, liquids with high alcohol content, lithium batteries without UN certification, and counterfeit trademarked goods."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#032B73] via-[#053285] to-[#021B4A] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(254,185,25,0.12),transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-shipplix-yellow text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-6">
                <Globe size={14} /> Nigeria to Canada Air Freight Express
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Ship from Nigeria to <span className="text-shipplix-yellow underline decoration-wavy decoration-2">Canada</span> with Fast &amp; Secure Delivery
              </h1>

              <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-8">
                Send food items, personal belongings, fashion products, commercial cargo, and business shipments from Lagos, Abuja, or Port Harcourt to Toronto, Calgary, Vancouver, Ottawa, Montreal, and every Canadian postal code.
              </p>

              {/* Key Quick Highlights */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-100 max-w-xl mx-auto mb-10">
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                  <Clock className="text-shipplix-yellow shrink-0" size={18} />
                  <span>5 - 7 Days Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                  <Truck className="text-shipplix-yellow shrink-0" size={18} />
                  <span>Door-to-Door Nationwide</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                  <ShieldCheck className="text-shipplix-yellow shrink-0" size={18} />
                  <span>CBSA Customs Support</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  as="a" 
                  href={URL_CANADA_BOOK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="yellow" 
                  className="py-4 px-8 text-base uppercase tracking-widest font-black shadow-xl"
                >
                  Book Shipment Now <ArrowRight size={18} />
                </Button>

                <Button 
                  as="a" 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to chat about shipping my package from Nigeria to Canada.")}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="emerald" 
                  className="py-4 px-8 text-base uppercase tracking-widest font-black shadow-xl"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE SHIPPLIX FOR CANADA */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Thousands of Nigerians in Canada Rely on Shipplix
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We eliminate the stress, delays, and exorbitant fees of sending parcels from Nigeria to North America.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                <Plane size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Direct Air Express</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Scheduled flights leaving weekly from Lagos to major Canadian hub airports with real-time tracking from origin to destination.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Vacuum Food Sealing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Free commercial-grade vacuum packing for dried food items to eliminate odor, reduce volumetric weight, and meet inspection requirements.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">CBSA Customs Experts</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Our team handles documentation and customs manifest compliance to ensure your package clears Canadian customs smoothly.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <Truck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Door Delivery Across Canada</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Direct final-mile courier delivery straight to your doorstep in Toronto, Brampton, Calgary, Edmonton, Ottawa, or Vancouver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CANADIAN DESTINATIONS COVERED */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-blue-950 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-shipplix-yellow bg-white/10 px-3 py-1 rounded-full inline-block">
                  Provinces &amp; Major Cities
                </span>
                <h2 className="text-2xl sm:text-3xl font-black leading-tight">
                  Door-to-Door Delivery Across All 10 Canadian Provinces
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Whether you are a student, diaspora resident, business owner, or family sending gifts, Shipplix delivers packages safely to every major urban center and regional municipality in Canada.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-200">
                  <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl">
                    <MapPin size={14} className="text-shipplix-yellow" /> Toronto &amp; GTA (ON)
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl">
                    <MapPin size={14} className="text-shipplix-yellow" /> Calgary (AB)
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl">
                    <MapPin size={14} className="text-shipplix-yellow" /> Edmonton (AB)
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl">
                    <MapPin size={14} className="text-shipplix-yellow" /> Ottawa &amp; Gatineau
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl">
                    <MapPin size={14} className="text-shipplix-yellow" /> Vancouver (BC)
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl">
                    <MapPin size={14} className="text-shipplix-yellow" /> Winnipeg (MB)
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4">
                <h3 className="font-extrabold text-shipplix-yellow text-lg flex items-center gap-2">
                  <Building2 size={20} /> Popular Shipping Centers &amp; Hubs
                </h3>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Ontario Hub:</strong> Mississauga, Brampton, Hamilton, London, Kitchener, Windsor, Scarborough, North York.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Alberta Hub:</strong> Calgary, Edmonton, Lethbridge, Red Deer, Fort McMurray.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>British Columbia &amp; Quebec:</strong> Vancouver, Surrey, Burnaby, Victoria, Montreal, Quebec City.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Atlantic Provinces:</strong> Halifax (NS), St. John&apos;s (NL), Moncton &amp; Fredericton (NB).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ITEMS YOU CAN SHIP VS PROHIBITED */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What You Can &amp; Cannot Ship to Canada
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Shipplix strictly adheres to Canadian inspection guidelines to guarantee 100% border compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Allowed Items */}
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Allowed &amp; Popular Items</h3>
                  <p className="text-emerald-800 text-xs">Fully approved for air cargo to Canada</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Utensils className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Dry Foodstuffs &amp; Spices</strong>
                    Egusi, Ogbono, Crayfish, Kilishi, Yam Flour, Garri, Dried Fish, Pepper, Suya Spice, Bitterleaf, Ofada Rice.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Shirt className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Fashion &amp; Textiles</strong>
                    Ankara fabrics, Senator attire, Aso-Oke, lace materials, custom dresses, wigs, shoes, and human hair extensions.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Box className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Personal &amp; Commercial Goods</strong>
                    Books, handcrafted art, cosmetics (non-liquid), wedding favors, religious items, and merchant resale inventory.
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a 
                  href="#/cargo-items" 
                  onClick={(e) => handleLinkClick(e, '/cargo-items')}
                  className="text-emerald-700 hover:text-emerald-800 font-extrabold text-xs inline-flex items-center gap-1 underline"
                >
                  View Complete Allowed Foodstuff Checklist <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Prohibited Items */}
            <div className="bg-rose-50/60 border border-rose-200 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Restricted &amp; Prohibited Items</h3>
                  <p className="text-rose-800 text-xs">Cannot be shipped via air freight</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Uninspected Meats &amp; Fresh Produce</strong>
                    Fresh uninspected meat, raw poultry, live animals, fresh green leaves containing soil, or unpreserved fruits.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <Lock className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Dangerous Goods &amp; Liquids</strong>
                    Flammable liquids, perfumes with alcohol, compressed gas cylinders, lithium batteries without UN certification, weapons.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <ShieldCheck className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Illicit &amp; Counterfeit Goods</strong>
                    Narcotics, prescription drugs without international medical clearance, counterfeit designer items.
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I want to verify if my item is allowed for shipping to Canada.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-700 hover:text-rose-800 font-extrabold text-xs inline-flex items-center gap-1 underline"
                >
                  Ask Customer Support on WhatsApp <MessageCircle size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STEP BY STEP PROCESS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              Seamless Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              How the Nigeria to Canada Shipping Process Works
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From package drop-off in Nigeria to doorstep delivery in Canada in 4 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Book or Drop Off</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Book online or bring your items to our hub offices in Lagos, Abuja, or Port Harcourt. We also offer doorstep pick-up across Nigeria.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Inspection &amp; Vacuum Packaging</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Our logistics experts inspect foodstuff, apply free vacuum sealing, re-pack into reinforced boxes, and issue exact weight documentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Air Freight &amp; Customs</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Your cargo flies direct to Canada. Shipplix handles customs manifests and CBSA border processing smoothly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                04
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Door Delivery in Canada</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Courier drivers deliver your box directly to your residence, business, or apartment in Toronto, Calgary, Vancouver, or anywhere in Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Trusted by Nigerians Living Across Canada
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              See what our customers in Ontario, Alberta, and British Columbia have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex text-amber-400 gap-1">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-slate-700 text-xs leading-relaxed italic">
                &quot;I received my 35kg box of Egusi, dried fish, and Ankara dresses in Brampton within 6 days. Everything was vacuum sealed neatly without any spill or smell. Unbelievable service!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Dr. Chinedu O.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Brampton, Ontario</span>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex text-amber-400 gap-1">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-slate-700 text-xs leading-relaxed italic">
                &quot;Shipping food items to Calgary used to be a nightmare until I found Shipplix. Their customs guidance was smooth and package tracking was accurate all through.&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Amina B.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Calgary, Alberta</span>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex text-amber-400 gap-1">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-slate-700 text-xs leading-relaxed italic">
                &quot;Shipplix handles our commercial hair extensions and fashion line inventory from Lagos to Vancouver every month. Reliable timelines and great support!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Funke A.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Vancouver, BC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (Canada Shipping)
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Everything you need to know about air cargo from Nigeria to Canada.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 font-bold text-slate-900 text-sm flex justify-between items-center gap-4 hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-blue-900' : ''}`} 
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERNAL NAVIGATION & LINKING FOOTER CTA */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-4 text-center">
              Explore Other Popular Shipplix Routes &amp; Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-bold">
              <a 
                href="#/ship-from-nigeria-to-usa" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-usa')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇺🇸 Ship Nigeria to USA
              </a>
              <a 
                href="#/ship-from-nigeria-to-uk" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-uk')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇬🇧 Ship Nigeria to UK
              </a>
              <a 
                href="#/cargo-items" 
                onClick={(e) => handleLinkClick(e, '/cargo-items')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                📦 Approved Cargo Items
              </a>
              <a 
                href="#/economy-cargo" 
                onClick={(e) => handleLinkClick(e, '/economy-cargo')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                ✈️ Economy Cargo Rates
              </a>
              <a 
                href="#/export-blueprint" 
                onClick={(e) => handleLinkClick(e, '/export-blueprint')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                📘 Export Blueprint Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Send Your Shipment to Canada?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Get instant assistance from our logistics team or book your door-to-door shipment online in under 2 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button 
              as="a" 
              href={URL_CANADA_BOOK} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="yellow" 
              className="py-4 px-8 text-base font-black uppercase tracking-widest shadow-xl"
            >
              Book Shipment Now <ArrowRight size={18} />
            </Button>

            <Button 
              as="a" 
              href={URL_CANADA_QUOTE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="ghost" 
              className="py-4 px-8 text-base border border-white/20 text-white hover:bg-white/10 uppercase tracking-widest font-black shadow-xl"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
