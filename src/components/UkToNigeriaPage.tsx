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
  Building2,
  PackageCheck
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
const URL_UK_QUOTE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get a shipping rate quote from the UK to Nigeria.")}`;
const URL_UK_BOOK = `https://myshipment.shipplix.com`;

interface UkToNigeriaPageProps {
  onNavigate?: (path: string) => void;
}

export default function UkToNigeriaPage({ onNavigate }: UkToNigeriaPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // SEO Meta & Title setup
  React.useEffect(() => {
    document.title = "Ship from UK to Nigeria | Fast, Secure & Affordable Delivery | Shipplix";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Ship personal belongings, gifts, commercial cargo, fashion products, food items, business inventory, and household goods from anywhere in the United Kingdom to Nigeria with reliable door-to-door delivery and customs clearance support.'
    );

    const ogTags = [
      { property: 'og:title', content: 'Ship from UK to Nigeria | Fast Door-to-Door Air Cargo | Shipplix' },
      { property: 'og:description', content: 'Fast 3-5 business days express air freight from London, Manchester, Birmingham, Leeds, Glasgow, Edinburgh, and across all UK postcodes to Lagos and nationwide Nigeria. Doorstep pickup and customs clearing included.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://shipplix.com/ship-from-uk-to-nigeria' }
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
      "name": "Shipping from UK to Nigeria",
      "provider": {
        "@type": "Organization",
        "name": "Shipplix",
        "url": "https://shipplix.com"
      },
      "serviceType": "International Air Cargo & Import Logistics",
      "areaServed": [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Nigeria" }
      ],
      "description": "Fast express air cargo, personal package shipping, and door-to-door parcel delivery from London, Manchester, Birmingham, Liverpool, Leeds, Glasgow, Edinburgh, and all UK regions to Lagos and nationwide Nigeria.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "availability": "https://schema.org/InStock",
        "url": "https://shipplix.com/ship-from-uk-to-nigeria"
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

  const ukLocations = [
    { city: "London", hub: "Greater London Express Hub & Home Pickup Center" },
    { city: "Manchester", hub: "North West Cargo Receiving & Consolidation Depot" },
    { city: "Birmingham", hub: "West Midlands Air Cargo Collection Point" },
    { city: "Liverpool", hub: "Merseyside Regional Parcel Drop-off Center" },
    { city: "Leeds", hub: "Yorkshire & Humber Freight Dispatch Station" },
    { city: "Glasgow", hub: "Scotland Central Belt Cargo Service Hub" },
    { city: "Edinburgh", hub: "Scottish Capital Receiving & Collection Center" },
    { city: "Bristol", hub: "South West England Collection Logistics Center" },
    { city: "Nottingham", hub: "East Midlands Parcel Processing Hub" },
    { city: "Leicester", hub: "Central UK Logistics Drop-off Center" }
  ];

  const faqs = [
    {
      q: "How long does shipping from the UK to Nigeria take?",
      a: "Express Air Cargo takes 3 to 5 business days from our UK receiving depots (London, Manchester, Birmingham) to Lagos. Delivery to other states in Nigeria takes an additional 1-2 days."
    },
    {
      q: "Do you offer doorstep pickup service across UK postcodes?",
      a: "Yes! We provide pre-paid DPD, DHL, or Hermes/Evri collection labels for households and businesses anywhere in England, Scotland, Wales, and Northern Ireland."
    },
    {
      q: "Is customs clearance in Nigeria included in the shipping fee?",
      a: "Yes, Shipplix handles complete customs clearance at Murtala Muhammed International Airport (MMIA) in Lagos. All standard import clearance fees and manifest duties are included."
    },
    {
      q: "Can I ship online shopping orders from UK stores (ASOS, Marks & Spencer, Amazon UK, Next)?",
      a: "Yes! You can shop online from any UK retail store using our UK warehouse as your shipping address. We receive your parcels, consolidate them into a single shipment, and deliver to Nigeria."
    },
    {
      q: "What items are prohibited from shipping from the UK to Nigeria?",
      a: "Prohibited items include weapons, ammunitions, illegal drugs, counterfeit currency, lithium ion batteries shipped loose without safety documentation, and pressurized aerosol cans."
    },
    {
      q: "How are UK shipping rates calculated?",
      a: "Rates are calculated per kilogram based on actual weight or volumetric weight (L x W x H in cm / 6000), whichever is higher. Our team re-weighs each box upon arrival for transparent billing."
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
              <Globe size={14} /> UK to Nigeria Air Freight &amp; Import
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Ship from UK to <span className="text-shipplix-yellow underline decoration-wavy decoration-2">Nigeria</span> with Fast &amp; Secure Delivery
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              Ship personal belongings, gifts, commercial cargo, fashion products, food items, business inventory, and household goods from anywhere in the United Kingdom to Nigeria with reliable door-to-door delivery and customs clearance support.
            </p>

            {/* Quick Key Specs */}
            <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-100 max-w-xl mx-auto">
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                <Clock className="text-shipplix-yellow shrink-0" size={18} />
                <span>3 - 5 Days Express Air</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                <Truck className="text-shipplix-yellow shrink-0" size={18} />
                <span>All UK Postcodes Covered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                <ShieldCheck className="text-shipplix-yellow shrink-0" size={18} />
                <span>Lagos Customs Included</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button 
                as="a" 
                href={URL_UK_BOOK} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="yellow" 
                className="py-4 px-8 text-base uppercase tracking-widest font-black shadow-xl"
              >
                Book Shipment <ArrowRight size={18} />
              </Button>

              <Button 
                as="a" 
                href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to chat about shipping my package from the UK to Nigeria.")}`} 
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

      {/* 2. WHY CHOOSE SHIPPLIX FOR UK TO NIGERIA */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Shippers &amp; UK Diaspora Trust Shipplix
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We make sending parcels, shopping orders, and commercial cargo from the UK to Nigeria fast, cheap, and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                <Truck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">UK-Wide Home Collection</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Collection labels provided for home pickup or drop-off at thousands of local parcel collection shops across all UK postcodes.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Box size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">UK Store Shopping Address</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Shop on ASOS, Marks &amp; Spencer, Amazon UK, or Next using our UK warehouse address. We consolidate multiple boxes to cut shipping costs.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Lagos Airport Customs Clearance</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Complete customs manifest processing at Murtala Muhammed International Airport (MMIA) with zero hidden clearance charges.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <PackageCheck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Doorstep Delivery in Nigeria</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Direct doorstep parcel delivery across Lagos, Abuja, Port Harcourt, Ibadan, Enugu, Benin City, Kano, and all 36 states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAJOR UK PICKUP LOCATIONS */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              UK Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Major UK Locations We Pickup From
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Shipplix operates receiving centers and offers door-to-door pickup across all key UK cities and regions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ukLocations.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-blue-900 shrink-0" />
                    <h3 className="font-extrabold text-slate-900 text-sm">{item.city}</h3>
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    {item.hub}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-black text-blue-900 flex items-center justify-between">
                  <span>3 - 5 Days Delivery</span>
                  <CheckCircle2 size={12} className="text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-white p-6 rounded-2xl border border-slate-200 max-w-2xl mx-auto">
            <p className="text-xs text-slate-700 font-medium">
              Living in another UK town or county? We generate pre-paid courier labels so you can easily hand over your package at any local drop-off point near you.
            </p>
            <a 
              href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I am in the UK and need a pickup label for my shipment to Nigeria.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-blue-900 hover:text-blue-950 font-black text-xs underline"
            >
              Request UK Pickup Label on WhatsApp <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 4. ITEMS YOU CAN SHIP VS PROHIBITED */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What You Can &amp; Cannot Ship from UK to Nigeria
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Adhere to UK Civil Aviation Authority regulations and Nigerian customs clearance mandates.
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
                  <h3 className="font-extrabold text-slate-900 text-lg">Approved Cargo &amp; Goods</h3>
                  <p className="text-emerald-800 text-xs">Accepted on direct air cargo flights</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Shirt className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">UK High-Street Fashion &amp; Designer Wear</strong>
                    Clothes from ASOS, Zara, Next, M&amp;S, luxury designer bags, footwear, and accessories.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Sparkles className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Electronics &amp; Laptops</strong>
                    MacBooks, iPhones, tablets, home electronics, gaming consoles, and appliances.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Box className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Packaged Food, Gifts &amp; Books</strong>
                    Dried non-perishable foodstuffs, tea, chocolates, personal items, cosmetics (solid), health supplements.
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
                  <h3 className="font-extrabold text-slate-900 text-lg">Prohibited &amp; Restricted Items</h3>
                  <p className="text-rose-800 text-xs">Strictly prohibited from air freight</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Dangerous Goods &amp; Weapons</strong>
                    Firearms, ammunitions, explosives, knives, pepper spray (strict aviation ban).
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <Lock className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Aerosols &amp; Alcohol-based Perfumes</strong>
                    Pressurized sprays, high-alcohol liquid perfumes, standalone lithium power banks without MSDS.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <ShieldCheck className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Illegal Substances &amp; Perishables</strong>
                    Uncertified prescription drugs, illegal narcotics, fresh un-preserved meat or poultry.
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
              How Shipping from UK to Nigeria Works
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From package collection in London or Manchester to doorstep delivery in Nigeria in 4 steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Book &amp; Get UK Label</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Register your package online or via WhatsApp to get your UK warehouse shipping address and drop label.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Drop Off or Shop Online</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Drop off your box locally or ship online orders from ASOS, M&amp;S, or Amazon UK directly to our UK address.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Air Cargo &amp; Customs</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Your goods fly express to Lagos MMIA Airport. Shipplix handles customs clearing and documentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                04
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Doorstep Delivery</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Our local logistics network delivers the package directly to your recipient&apos;s doorstep anywhere in Nigeria.
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
              Customer Reviews from UK Shippers
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Feedback from UK residents, students, and businesses shipping to Nigeria.
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
                &quot;Sent 25kg of clothes and electronics from Woolwich, London to my mum in Ikeja, Lagos. It took just 4 days from drop-off to delivery!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Toluwalase A.</strong>
                <span className="text-[10px] text-slate-500 font-bold">London, UK</span>
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
                &quot;I buy items on ASOS and Marks &amp; Spencer in Manchester and ship them via Shipplix to my boutique in Port Harcourt. Smooth customs clearing always.&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Funmi K.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Manchester, UK</span>
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
                &quot;Home pickup in Birmingham was super easy. The WhatsApp support team guided me through item declaration and tracking.&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Emeka N.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Birmingham, UK</span>
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
              Frequently Asked Questions (UK to Nigeria Shipping)
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Common questions about air cargo and parcel delivery from the UK to Nigeria.
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
              Explore Other Shipplix International Routes &amp; Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-bold">
              <a 
                href="#/ship-from-nigeria-to-uk" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-uk')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇬🇧 Ship Nigeria to UK
              </a>
              <a 
                href="#/ship-from-usa-to-nigeria" 
                onClick={(e) => handleLinkClick(e, '/ship-from-usa-to-nigeria')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇺🇸 Ship USA to Nigeria
              </a>
              <a 
                href="#/ship-from-nigeria-to-usa" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-usa')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇺🇸 Ship Nigeria to USA
              </a>
              <a 
                href="#/ship-from-china-to-nigeria" 
                onClick={(e) => handleLinkClick(e, '/ship-from-china-to-nigeria')}
                className="bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl transition-all"
              >
                🇨🇳 Ship China to Nigeria
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
            Ready to Send Your Package from UK to Nigeria?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Get your UK drop-off label or warehouse shipping address instantly. Chat with our UK logistics team now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button 
              as="a" 
              href={URL_UK_BOOK} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="yellow" 
              className="py-4 px-8 text-base font-black uppercase tracking-widest shadow-xl"
            >
              Book Shipment Now <ArrowRight size={18} />
            </Button>

            <Button 
              as="a" 
              href={URL_UK_QUOTE} 
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
