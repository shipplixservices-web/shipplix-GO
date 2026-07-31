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
  ArrowRight, 
  AlertTriangle,
  Shirt,
  Sparkles,
  MapPin,
  Lock,
  ChevronDown,
  Utensils,
  PackageCheck,
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
const URL_HOUSTON_QUOTE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get a shipping rate quote for sending a package from Nigeria to Houston, Texas.")}`;
const URL_HOUSTON_BOOK = `https://myshipment.shipplix.com`;

interface NigeriaToHoustonPageProps {
  onNavigate?: (path: string) => void;
}

export default function NigeriaToHoustonPage({ onNavigate }: NigeriaToHoustonPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // SEO Meta & Title setup
  React.useEffect(() => {
    document.title = "Ship from Nigeria to Houston, Texas | Fast Door-to-Door Delivery | Shipplix";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Ship food items, fashion products, personal belongings, business cargo, commercial goods, and household items from Nigeria to Houston, Texas with reliable door-to-door delivery, customs clearance support, and real-time shipment tracking.'
    );

    const ogTags = [
      { property: 'og:title', content: 'Ship from Nigeria to Houston, Texas | Fast Air Cargo & Doorstep Delivery | Shipplix' },
      { property: 'og:description', content: 'Fast 5-7 business days express air freight from Lagos, Abuja, Port Harcourt to Houston, Texas (Sugar Land, Katy, Pearland, Cypress & Harris County). Doorstep pickup and customs clearance included.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://shipplix.com/ship-from-nigeria-to-houston' }
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
      "name": "Shipping from Nigeria to Houston, Texas",
      "provider": {
        "@type": "Organization",
        "name": "Shipplix",
        "url": "https://shipplix.com"
      },
      "serviceType": "International Air Freight & Door-to-Door Courier Logistics",
      "areaServed": [
        { "@type": "City", "name": "Houston" },
        { "@type": "State", "name": "Texas" },
        { "@type": "Country", "name": "United States" }
      ],
      "description": "Fast express air cargo, foodstuff delivery, personal package shipping, and doorstep courier service from Nigeria to Houston, Sugar Land, Katy, Pearland, Cypress, and the Greater Houston metro area.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://shipplix.com/ship-from-nigeria-to-houston"
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

  const houstonAreas = [
    { name: "Downtown & Southwest Houston", zip: "77002, 77036, 77074", note: "Central Houston Diaspora Hub" },
    { name: "Sugar Land & Missouri City", zip: "77478, 77479, 77489", note: "High-Volume Residential Delivery Zone" },
    { name: "Katy & Energy Corridor", zip: "77449, 77450, 77079", note: "Commercial & Family Express Coverage" },
    { name: "Pearland & Friendswood", zip: "77581, 77584", note: "Direct Doorstep Courier Delivery" },
    { name: "Cypress & Spring / Woodlands", zip: "77429, 77379, 77380", note: "North Houston Metropolitan Service" },
    { name: "Alief & Westchase District", zip: "77072, 77082, 77042", note: "Popular West Houston Cultural Corridor" }
  ];

  const faqs = [
    {
      q: "How long does shipping from Nigeria to Houston, Texas take?",
      a: "Express Air Freight takes 5-7 business days from Lagos to your recipient's doorstep in Houston, Texas (including Sugar Land, Katy, Pearland, Cypress, and surrounding Harris County neighborhoods)."
    },
    {
      q: "Can I ship Nigerian food items (egusi, ogbono, crayfish, palm oil) to Houston?",
      a: "Yes! We specialize in shipping commercially packaged and dried Nigerian foodstuff to Houston. All food items must be properly dried, sealed, and labeled to pass US FDA and Customs inspection without delay."
    },
    {
      q: "Do you offer doorstep pickup in Nigeria for Houston-bound packages?",
      a: "Yes! We pick up packages directly from homes, stores, and offices in Lagos, Abuja, Port Harcourt, Ibadan, Benin City, Enugu, and major Nigerian cities for direct flight dispatch to Houston."
    },
    {
      q: "Is US Customs clearance included in the Houston shipping rate?",
      a: "Yes, Shipplix handles US Customs clearance paperwork and clearance manifests. Standard customs clearance processing is included in our all-inclusive rate."
    },
    {
      q: "What items are prohibited from shipping to Houston, Texas?",
      a: "Prohibited items include fresh or un-dried meat/poultry, live plants, raw unprocessed seeds, illegal substances, counterfeit currency, firearms, and uncertified prescription drugs."
    },
    {
      q: "How are shipping charges calculated for Houston shipments?",
      a: "Charges are calculated per kg based on actual gross weight or volumetric weight (Length x Width x Height in cm / 5000), whichever is higher. We re-weigh and inspect every parcel before flight departure."
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
                <Globe size={14} /> Nigeria to Houston Express Route
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Ship from Nigeria to <span className="text-shipplix-yellow underline decoration-wavy decoration-2">Houston, Texas</span> with Fast &amp; Secure Delivery
              </h1>

              <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-8">
                Ship food items, fashion products, personal belongings, business cargo, commercial goods, and household items from Nigeria to Houston, Texas with reliable door-to-door delivery, customs clearance support, and real-time shipment tracking.
              </p>

              {/* Quick Key Specs */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-100 max-w-xl mx-auto mb-10">
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                  <Clock className="text-shipplix-yellow shrink-0" size={18} />
                  <span>5 - 7 Days Express Air</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                  <Truck className="text-shipplix-yellow shrink-0" size={18} />
                  <span>Doorstep Delivery in Houston</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                  <ShieldCheck className="text-shipplix-yellow shrink-0" size={18} />
                  <span>US Customs Clearance Included</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  as="a" 
                  href={URL_HOUSTON_BOOK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="yellow" 
                  className="py-4 px-8 text-base uppercase tracking-widest font-black shadow-xl"
                >
                  Book Shipment <ArrowRight size={18} />
                </Button>

                <Button 
                  as="a" 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to chat about shipping a package from Nigeria to Houston, Texas.")}`} 
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

      {/* 2. WHY HOUSTON SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              Dedicated USA Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Why Houston is Shipplix&apos;s Premier US Gateway
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Houston, Texas is home to one of the largest Nigerian and African communities in North America. We provide specialized cargo routing built specifically for this corridor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Thriving Nigerian Community</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Dedicated shipping channels connecting families and vendors in Nigeria with relatives and businesses across Houston, Sugar Land, Katy, and Alief.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Commercial &amp; Trade Sourcing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Support for fashion designers, African food markets, oilfield equipment, and commercial vendors shipping inventory into Texas.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Regular Flight Schedules</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Multiple direct cargo flights departing weekly from Lagos (LOS) to Houston George Bush Intercontinental Airport (IAH).
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <Truck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Reliable Last-Mile Delivery</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Our local logistics partners deliver your package straight to homes, apartments, stores, and business offices across the Greater Houston area.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Fast Customs Clearance</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Streamlined US Customs &amp; Border Protection (CBP) and FDA clearance for foodstuff and general merchandise without surprise duties.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <Utensils size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Specialized Foodstuff Cargo</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Vacuum-sealing guidelines and packaging standards to ensure traditional Nigerian ingredients arrive fresh and aromatic in Texas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GREATER HOUSTON DELIVERY METRO COVERAGE */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              Houston Metro Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Greater Houston Areas &amp; Suburbs We Deliver To
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Shipplix provides door-to-door delivery across Harris County, Fort Bend County, and surrounding Texas metro areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {houstonAreas.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={18} className="text-blue-900 shrink-0" />
                    <h3 className="font-extrabold text-slate-900 text-base">{item.name}</h3>
                  </div>
                  <p className="text-slate-500 text-xs font-bold mb-1">
                    ZIP Codes: {item.zip}
                  </p>
                  <p className="text-slate-600 text-xs">
                    {item.note}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 text-[11px] font-black text-blue-900 flex items-center justify-between">
                  <span>5 - 7 Business Days</span>
                  <CheckCircle2 size={14} className="text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPROVED VS PROHIBITED ITEMS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What You Can &amp; Cannot Ship to Houston, Texas
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Follow US TSA air security and US FDA guidelines for food and commercial cargo.
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
                  <h3 className="font-extrabold text-slate-900 text-lg">Approved Cargo &amp; Foodstuff</h3>
                  <p className="text-emerald-800 text-xs">Clears FDA &amp; US Customs smoothly</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Utensils className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Nigerian Dry Foodstuff</strong>
                    Dried crayfish, egusi, ogbono, dried fish (well-vacuumed), pounded yam flour, plantain flour, garri, dried spices.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Shirt className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Fashion, Ankara &amp; Aso-Ebi</strong>
                    Native attires, bespoke dresses, suits, human hair extensions, lace fabrics, beaded jewelry, leather footwear.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Box className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Personal Goods &amp; Business Cargo</strong>
                    Books, souvenir gifts, art crafts, cosmetics (solid), commercial inventory, documents.
                  </div>
                </div>
              </div>
            </div>

            {/* Prohibited Items */}
            <div className="bg-rose-50/60 border border-rose-200 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Prohibited &amp; Banned Items</h3>
                  <p className="text-rose-800 text-xs">Strictly prohibited on US flights</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Fresh Meat &amp; Un-dried Perishables</strong>
                    Fresh un-dried meat, poultry, fresh fruits/vegetables, raw seeds without agricultural permit (USDA ban).
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <Lock className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Flammable Liquids &amp; Batteries</strong>
                    Pressurized sprays, high-alcohol perfumes, uncertified lithium batteries sent loose.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <ShieldCheck className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Illegal Substances &amp; Contraband</strong>
                    Firearms, weapons, counterfeit currency, uncertified prescription drugs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STEP BY STEP SHIPPING PROCESS */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              4-Step Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              How Shipping to Houston Works
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Simple 4-step process from pickup in Nigeria to doorstep delivery in Houston, Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Book &amp; Hand Over</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Book online or request home pickup in Lagos, Abuja, Port Harcourt, or drop off at our office.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Inspection &amp; Packaging</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We inspect, weigh, and re-pack your box with durable export standards and FDA compliant manifests.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Direct Air Cargo Flight</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Your shipment flies to Houston (IAH). Track progress live via your tracking code.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                04
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Door Delivery in Houston</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Customs clear in the US and deliver straight to your doorstep anywhere in Houston, Sugar Land, or Katy.
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
              What Customers Say About Our Houston Service
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Reviews from Nigerian families and business owners residing in Houston, Texas.
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
                &quot;Shipplix sent 30kg of dried crayfish, egusi, and native outfits from Lagos to my home in Sugar Land, Houston. Arrived in 5 days flat!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Dr. Blessing O.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Sugar Land, Houston, TX</span>
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
                &quot;I run an African fashion store in Katy, Houston. Shipplix handles my weekly Aso-Ebi and Ankara shipments from Ibadan. Super reliable.&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Mrs. Temitope A.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Katy, Houston, TX</span>
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
                &quot;Clear pricing, no unexpected customs fees, and great WhatsApp communication. My package was delivered right to my door in Alief.&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Chiebonam U.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Houston, TX</span>
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
              Frequently Asked Questions (Nigeria to Houston)
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Answers to popular questions about shipping packages from Nigeria to Houston, Texas.
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

      {/* 8. INTERNAL NAVIGATION FOOTER */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-4 text-center">
              Explore Related Shipplix Routes &amp; Logistics Services
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-bold">
              <a 
                href="#/ship-from-nigeria-to-usa" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-usa')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇺🇸 Ship Nigeria to USA (All States)
              </a>
              <a 
                href="#/ship-from-usa-to-nigeria" 
                onClick={(e) => handleLinkClick(e, '/ship-from-usa-to-nigeria')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇺🇸 Ship USA to Nigeria
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
                href="#/ship-from-china-to-nigeria" 
                onClick={(e) => handleLinkClick(e, '/ship-from-china-to-nigeria')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇨🇳 Ship China to Nigeria
              </a>
              <a 
                href="#/cargo-items" 
                onClick={(e) => handleLinkClick(e, '/cargo-items')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                📦 Cargo Guidelines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Ship from Nigeria to Houston, Texas?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Get an instant shipping rate quote or schedule a package pickup today. Our Houston logistics team is ready to serve you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button 
              as="a" 
              href={URL_HOUSTON_BOOK} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="yellow" 
              className="py-4 px-8 text-base font-black uppercase tracking-widest shadow-xl"
            >
              Book Shipment Now <ArrowRight size={18} />
            </Button>

            <Button 
              as="a" 
              href={URL_HOUSTON_QUOTE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="ghost" 
              className="py-4 px-8 text-base border border-white/20 text-white hover:bg-white/10 uppercase tracking-widest font-black shadow-xl"
            >
              Get Custom Rate Quote
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
