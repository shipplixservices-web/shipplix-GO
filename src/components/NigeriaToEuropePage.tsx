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
  Star, 
  FileCheck, 
  Package, 
  ArrowRight, 
  AlertTriangle,
  Utensils,
  Shirt,
  Sparkles,
  MapPin,
  Lock,
  ChevronDown,
  Building2,
  Euro
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
const URL_EUROPE_QUOTE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get a shipping rate quote from Nigeria to Europe.")}`;
const URL_EUROPE_BOOK = `https://myshipment.shipplix.com`;

interface NigeriaToEuropePageProps {
  onNavigate?: (path: string) => void;
}

export default function NigeriaToEuropePage({ onNavigate }: NigeriaToEuropePageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // SEO Meta & Title setup
  React.useEffect(() => {
    document.title = "Ship from Nigeria to Europe | Fast, Secure & Affordable Delivery | Shipplix";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Ship food items, personal belongings, fashion products, business cargo, commercial goods, and export shipments from Nigeria to Germany, France, Italy, Spain, Netherlands, Belgium, Ireland, and across Europe with reliable door-to-door delivery.'
    );

    const ogTags = [
      { property: 'og:title', content: 'Ship from Nigeria to Europe | Express Air Freight & Door-to-Door | Shipplix' },
      { property: 'og:description', content: 'Fast 5-7 business days door-to-door air freight delivery from Nigeria to Germany, France, Italy, Spain, Netherlands, Ireland, Belgium, and all EU nations. Vacuum food sealing & EU customs clearance.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://shipplix.com/ship-from-nigeria-to-europe' }
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
      "name": "Shipping from Nigeria to Europe",
      "provider": {
        "@type": "Organization",
        "name": "Shipplix",
        "url": "https://shipplix.com"
      },
      "serviceType": "International Air Cargo & Door-to-Door Logistics",
      "areaServed": [
        { "@type": "Continent", "name": "Europe" },
        { "@type": "Country", "name": "Nigeria" }
      ],
      "description": "Fast express air cargo, foodstuff shipping, and door-to-door parcel delivery from Nigeria to Germany, France, Italy, Spain, Netherlands, Belgium, Ireland, and across Europe.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://shipplix.com/ship-from-nigeria-to-europe"
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

  const europeanCountries = [
    { country: "Germany", flag: "🇩🇪", hubs: "Berlin, Frankfurt, Munich, Hamburg, Cologne" },
    { country: "France", flag: "🇫🇷", hubs: "Paris, Lyon, Marseille, Toulouse, Lille" },
    { country: "Italy", flag: "🇮🇹", hubs: "Rome, Milan, Naples, Turin, Florence" },
    { country: "Spain", flag: "🇪🇸", hubs: "Madrid, Barcelona, Valencia, Seville, Zaragoza" },
    { country: "Netherlands", flag: "🇳🇱", hubs: "Amsterdam, Rotterdam, The Hague, Utrecht" },
    { country: "Belgium", flag: "🇧🇪", hubs: "Brussels, Antwerp, Ghent, Liège" },
    { country: "Ireland", flag: "🇮🇪", hubs: "Dublin, Cork, Limerick, Galway" },
    { country: "Portugal", flag: "🇵🇹", hubs: "Lisbon, Porto, Amadora, Braga" },
    { country: "Austria", flag: "🇦🇹", hubs: "Vienna, Graz, Linz, Salzburg" },
    { country: "Switzerland", flag: "🇨🇭", hubs: "Zurich, Geneva, Basel, Bern" },
    { country: "Sweden", flag: "🇸🇪", hubs: "Stockholm, Gothenburg, Malmö" },
    { country: "Norway", flag: "🇳🇴", hubs: "Oslo, Bergen, Trondheim, Stavanger" },
    { country: "Denmark", flag: "🇩🇰", hubs: "Copenhagen, Aarhus, Odense" },
    { country: "Finland", flag: "🇫🇮", hubs: "Helsinki, Espoo, Tampere" },
    { country: "Poland", flag: "🇵🇱", hubs: "Warsaw, Kraków, Wrocław, Poznań" }
  ];

  const faqs = [
    {
      q: "How long does shipping from Nigeria to Europe take?",
      a: "Express Air Freight takes 5-7 business days door-to-door to major European destinations like Germany, France, Italy, Netherlands, Spain, Belgium, and Ireland. Economy Cargo takes approximately 7-10 business days."
    },
    {
      q: "Can I ship foodstuffs from Nigeria to European Union countries?",
      a: "Yes! Dry and processed Nigerian foodstuffs such as Egusi, Ogbono, Crayfish, Kilishi, Yam Flour, Garri, Pepper, Suya Spice, and Dried Fish can be shipped. Shipplix provides commercial vacuum sealing and sanitary inspection checks required for EU border entry."
    },
    {
      q: "How are European Union customs and VAT/Duties handled?",
      a: "Shipplix prepares accurate customs declarations according to EU import regulations. Applicable VAT, customs tariffs, or clearance fees depend on destination country rules and shipment value. Our logistics team guides you through all required documentation before dispatch."
    },
    {
      q: "Do you offer door-to-door delivery across all European cities?",
      a: "Yes! We partner with leading European courier networks to deliver straight to your residential or business address in Berlin, Paris, Madrid, Amsterdam, Dublin, Rome, Brussels, Vienna, Zurich, and hundreds of other cities."
    },
    {
      q: "What is the minimum and maximum weight limit for Europe shipments?",
      a: "Minimum weight is 1kg for express air parcels. For commercial exporters, trade vendors, and bulk shippers, we offer volume tier discounts for shipments over 50kg, 100kg, 250kg, and 500kg."
    },
    {
      q: "What items are prohibited from shipping to Europe?",
      a: "Prohibited items include fresh uninspected meats or raw poultry, live plants, fresh vegetables containing soil, counterfeit trademarked goods, firearms, flammable liquids, narcotics, and uncertified lithium batteries."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#032B73] via-[#053285] to-[#021B4A] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(254,185,25,0.12),transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-shipplix-yellow text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Globe size={14} /> Nigeria to Europe Air Freight Express
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Ship from Nigeria to <span className="text-shipplix-yellow underline decoration-wavy decoration-2">Europe</span> with Fast &amp; Secure Delivery
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              Ship food items, personal belongings, fashion products, business cargo, commercial goods, and export shipments from Nigeria to Germany, France, Italy, Spain, Netherlands, Belgium, Ireland, and across Europe with reliable door-to-door delivery.
            </p>

            {/* Key Quick Highlights */}
            <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-100 max-w-xl mx-auto">
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                <Clock className="text-shipplix-yellow shrink-0" size={18} />
                <span>5 - 7 Days Express</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                <Truck className="text-shipplix-yellow shrink-0" size={18} />
                <span>Door-to-Door Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                <ShieldCheck className="text-shipplix-yellow shrink-0" size={18} />
                <span>EU Customs Compliant</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button 
                as="a" 
                href={URL_EUROPE_BOOK} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="yellow" 
                className="py-4 px-8 text-base uppercase tracking-widest font-black shadow-xl"
              >
                Book Shipment Now <ArrowRight size={18} />
              </Button>

              <Button 
                as="a" 
                href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to chat about shipping my package from Nigeria to Europe.")}`} 
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
      </section>

      {/* 2. WHY CHOOSE SHIPPLIX FOR EUROPE */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Exporters &amp; Diaspora Residents Trust Shipplix for Europe
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We make shipping packages from Nigeria to European countries seamless, affordable, and transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                <Plane size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Pan-European Network</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Direct scheduled air freight connections from Lagos to major hub airports in Frankfurt, Paris, Amsterdam, and Madrid.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Commercial Vacuum Packing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Professional vacuum sealing for dried foodstuffs to lock in freshness, eliminate odor, and meet strict European border standards.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">EU Customs Support</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Complete documentation assistance including airway bills, commercial invoices, and tariff declarations for hassle-free entry.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <Truck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Final-Mile Door Delivery</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Seamless last-mile courier delivery to your home, office, or university campus across all European cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COUNTRIES WE SERVE IN EUROPE */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              European Destinations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              European Countries We Deliver To
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Shipplix provides door-to-door express air freight coverage to 15+ major European countries and surrounding territories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {europeanCountries.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.flag}</span>
                    <h3 className="font-extrabold text-slate-900 text-base">{item.country}</h3>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-snug">
                    {item.hubs}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-blue-900">
                  <span>5 - 7 Days Delivery</span>
                  <CheckCircle2 size={12} className="text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-white p-6 rounded-2xl border border-slate-200 max-w-2xl mx-auto">
            <p className="text-xs text-slate-700 font-medium">
              Don&apos;t see your specific European country or island listed above? We cover all EU &amp; Schengen member states. 
            </p>
            <a 
              href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I want to confirm if you deliver to my country in Europe.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-blue-900 hover:text-blue-950 font-black text-xs underline"
            >
              Ask Support on WhatsApp <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. ITEMS YOU CAN SHIP VS PROHIBITED */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What You Can &amp; Cannot Ship to Europe
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Shipplix ensures full regulatory compliance with European food safety and customs frameworks.
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
                  <h3 className="font-extrabold text-slate-900 text-lg">Approved &amp; Allowed Items</h3>
                  <p className="text-emerald-800 text-xs">Cleared for air freight export to Europe</p>
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
                    <strong className="text-slate-900 block text-sm">Fashion, Textiles &amp; Hair</strong>
                    Ankara fabrics, Senator attire, Aso-Oke, lace materials, custom garments, wigs, human hair weaves.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Box className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Commercial Cargo &amp; Crafts</strong>
                    Books, handcrafted souvenirs, cosmetics (solid), African cosmetics, religious materials, retail products.
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a 
                  href="#/cargo-items" 
                  onClick={(e) => handleLinkClick(e, '/cargo-items')}
                  className="text-emerald-700 hover:text-emerald-800 font-extrabold text-xs inline-flex items-center gap-1 underline"
                >
                  View Complete Allowed Cargo Item List <ArrowRight size={14} />
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
                  <p className="text-rose-800 text-xs">Cannot be accepted for air cargo</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Raw Meat &amp; Fresh Produce</strong>
                    Uninspected fresh meat, live poultry, fresh green leaves containing soil, unpreserved perishable produce.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <Lock className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Hazardous Liquids &amp; Flammables</strong>
                    High-proof alcohol, aerosol sprays, perfumes, lithium batteries without UN safety certification, explosives.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <ShieldCheck className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Counterfeits &amp; Controlled Goods</strong>
                    Fake branded apparel, narcotics, unprescribed pharmaceuticals without European medical clearance.
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I want to verify if my item is allowed for shipping to Europe.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-700 hover:text-rose-800 font-extrabold text-xs inline-flex items-center gap-1 underline"
                >
                  Verify Item Eligibility on WhatsApp <MessageCircle size={14} />
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
              4-Step Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              How Shipping from Nigeria to Europe Works
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From package drop-off in Nigeria to doorstep delivery in Europe in 4 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Drop Off or Pick Up</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Drop off items at our hubs in Lagos, Abuja, or Port Harcourt, or schedule a doorstep pick-up across Nigeria.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Vacuum Sealing &amp; Packing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We inspect items, vacuum seal dry foodstuffs, consolidate into reinforced shipping boxes, and calculate precise billing weight.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Air Cargo &amp; Customs</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Your cargo flies direct to European air hubs. Shipplix handles customs declarations and manifest processing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                04
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">European Door Delivery</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                European partner couriers deliver the parcel directly to your address in Berlin, Paris, Madrid, Dublin, or Amsterdam.
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
              Customer Reviews Across Europe
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Hear from our customers in Germany, France, Ireland, and Spain.
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
                &quot;Shipplix delivered my 25kg box of foodstuff to Frankfurt in just 5 days! The vacuum packaging saved my crayfish and Egusi from smelling. Top notch service!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Emeka K.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Frankfurt, Germany</span>
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
                &quot;Sending my fashion designs and Senator outfits to Paris was super smooth. Customs clearance in France was handled without any hassle. Will use Shipplix always!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Blessing O.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Paris, France</span>
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
                &quot;My package arrived at my home address in Dublin within 6 days. The tracking link was updated live and customer support on WhatsApp was extremely helpful.&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Tunde A.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Dublin, Ireland</span>
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
              Frequently Asked Questions (Europe Shipping)
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Common questions about air cargo from Nigeria to European destinations.
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
              Explore Other Popular Shipplix Shipping Routes &amp; Resources
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
                href="#/ship-from-nigeria-to-canada" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-canada')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇨🇦 Ship Nigeria to Canada
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
            Ready to Send Your Shipment to Europe?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Contact our logistics team for instant assistance or book your door-to-door shipment online in under 2 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button 
              as="a" 
              href={URL_EUROPE_BOOK} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="yellow" 
              className="py-4 px-8 text-base font-black uppercase tracking-widest shadow-xl"
            >
              Book Shipment Now <ArrowRight size={18} />
            </Button>

            <Button 
              as="a" 
              href={URL_EUROPE_QUOTE} 
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
