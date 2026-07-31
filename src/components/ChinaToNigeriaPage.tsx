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
  Ship,
  Warehouse,
  ShoppingBag,
  Layers,
  Search
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
const URL_CHINA_QUOTE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get an import shipping quote from China to Nigeria.")}`;
const URL_CHINA_BOOK = `https://myshipment.shipplix.com`;

interface ChinaToNigeriaPageProps {
  onNavigate?: (path: string) => void;
}

export default function ChinaToNigeriaPage({ onNavigate }: ChinaToNigeriaPageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // SEO Meta & Title setup
  React.useEffect(() => {
    document.title = "Ship from China to Nigeria | Air Cargo & Sea Freight Import | Shipplix";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Import products from China to Nigeria with fast air cargo and affordable sea freight. Direct supplier pickup in Guangzhou, Yiwu, Shenzhen, cargo consolidation, customs clearance, and door delivery across Nigeria.'
    );

    const ogTags = [
      { property: 'og:title', content: 'Ship from China to Nigeria | Air Cargo & Sea Freight Logistics | Shipplix' },
      { property: 'og:description', content: 'Fast 5-7 days air freight and cost-effective sea shipping from China (Guangzhou, Yiwu, Shenzhen) to Lagos, Abuja, and nationwide Nigeria. Warehouse consolidation & customs clearing included.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://shipplix.com/ship-from-china-to-nigeria' }
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
      "name": "Shipping from China to Nigeria",
      "provider": {
        "@type": "Organization",
        "name": "Shipplix",
        "url": "https://shipplix.com"
      },
      "serviceType": "Air Freight & Sea Cargo Import Logistics",
      "areaServed": [
        { "@type": "Country", "name": "Nigeria" },
        { "@type": "Country", "name": "China" }
      ],
      "description": "Fast express air cargo, sea freight container shipping, warehouse consolidation, and customs clearance from Guangzhou, Yiwu, and Shenzhen to Lagos and all Nigerian cities.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://shipplix.com/ship-from-china-to-nigeria"
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

  const sourcingCities = [
    { city: "Guangzhou", role: "Primary Apparel & General Cargo Hub", address: "Baiyun & Yuexiu Wholesale Districts" },
    { city: "Yiwu", role: "World's Largest Commodities Market", address: "Futian Market & Small Commodities Hub" },
    { city: "Shenzhen", role: "Global Electronics & Tech Capital", address: "Huaqiangbei & Baoan Industrial Park" },
    { city: "Ningbo", role: "Major Deepwater Sea Freight Port", address: "Beilun Port & Industrial Logistics Zone" },
    { city: "Shanghai", role: "Commercial Capital & Ocean Freight", address: "Pudong Air & Yangshan Deep Sea Port" },
    { city: "Foshan", role: "Furniture, Tiles & Building Materials", address: "Shunde Furniture & Ceramic City" },
    { city: "Dongguan", role: "Manufacturing & Footwear Center", address: "Houjie & Chang'an Production Hubs" },
    { city: "Xiamen", role: "Stone, Textiles & Light Industry", address: "Huli District & Free Trade Logistics" },
    { city: "Qingdao", role: "Heavy Machinery & Tires Hub", address: "Huangdao Port Logistics Center" },
    { city: "Hangzhou", role: "E-Commerce & Digital Sourcing Hub", address: "Yuhang & Binjiang Technology Parks" }
  ];

  const faqs = [
    {
      q: "How long does air cargo from China to Nigeria take?",
      a: "Express Air Freight takes 5-7 business days from our Guangzhou or Shenzhen warehouses to Lagos. Normal Air Cargo takes approximately 7-10 days."
    },
    {
      q: "How long does sea freight shipping from China to Nigeria take?",
      a: "Sea Freight takes approximately 35-45 days from major Chinese ports (Guangzhou, Ningbo, Shanghai, Shenzhen) to Lagos ports (Tincan & Apapa)."
    },
    {
      q: "Can Shipplix collect goods directly from my Chinese suppliers or 1688/Alibaba?",
      a: "Yes! We offer nationwide supplier pickup across China. Alternatively, your 1688, Taobao, or Alibaba suppliers can send packages directly to our Guangzhou or Yiwu warehouse addresses using local domestic couriers."
    },
    {
      q: "Do you offer cargo consolidation services?",
      a: "Yes! You can buy items from multiple different suppliers in China. We receive, inspect, combine, and package all your goods together into a single shipment to save you significant shipping costs."
    },
    {
      q: "Is customs clearing in Nigeria included in your rates?",
      a: "Yes, our door-to-door and warehouse-to-door import rates include complete Nigerian customs clearance processing at Lagos airport and seaports."
    },
    {
      q: "How is sea freight charged (CBM)?",
      a: "Sea freight is calculated per Cubic Meter (CBM) based on the length, width, and height of your shipping boxes (L x W x H in meters = CBM). Our logistics team assists with exact CBM measurement."
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
                <Globe size={14} /> China to Nigeria Import Logistics
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
                Ship from China to <span className="text-shipplix-yellow underline decoration-wavy decoration-2">Nigeria</span> with Reliable Air &amp; Sea Freight
              </h1>

              <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-8">
                Import products from China to Nigeria with fast, secure, and cost-effective shipping. Whether you&apos;re importing for your business or personal use, Shipplix provides supplier coordination, cargo consolidation, customs clearance, and nationwide delivery across Nigeria.
              </p>

              {/* Quick Key Specs */}
              <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-100 max-w-xl mx-auto mb-10">
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                  <Plane className="text-shipplix-yellow shrink-0" size={18} />
                  <span>Air Cargo: 5 - 7 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                  <Ship className="text-shipplix-yellow shrink-0" size={18} />
                  <span>Sea Freight: 35 - 45 Days</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10 justify-center">
                  <Warehouse className="text-shipplix-yellow shrink-0" size={18} />
                  <span>Guangzhou &amp; Yiwu Hubs</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  as="a" 
                  href={URL_CHINA_QUOTE} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="yellow" 
                  className="py-4 px-8 text-base uppercase tracking-widest font-black shadow-xl"
                >
                  Get Shipping Quote <ArrowRight size={18} />
                </Button>

                <Button 
                  as="a" 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to chat about shipping my goods from China to Nigeria.")}`} 
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

      {/* 2. WHY IMPORT WITH SHIPPLIX */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Hundreds of Nigerian Importers Choose Shipplix
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We eliminate supplier communication friction, high shipping fees, and clearing delays at Nigerian ports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                <Warehouse size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">China Warehousing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Free short-term storage at our modern Guangzhou and Yiwu warehouse hubs while awaiting your complete supplier order.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Free Parcel Consolidation</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Combine orders from 1688, Taobao, Alibaba, or multiple factories into a single master box to reduce chargeable weight.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Full Customs Clearance</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We handle complete Nigerian Customs clearing at Lagos airports and seaports—no hidden clearing tariffs or surprise fees.
              </p>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-blue-900 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <Truck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Nationwide Door Delivery</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Once cleared in Lagos, we deliver straight to your store, office, or home in Lagos, Abuja, Port Harcourt, Ibadan, Kano, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AIR VS SEA FREIGHT SERVICES */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              Flexible Shipping Modes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              China to Nigeria Shipping Services
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Choose the right shipping mode depending on your budget, speed requirements, and package volume.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Air Freight Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:border-blue-900 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center">
                    <Plane size={24} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
                    Fastest Mode
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Air Cargo Express</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Ideal for urgent shipments, high-value electronics, fashion items, wigs, sample orders, and small-to-medium retail stock.
                </p>

                <ul className="space-y-3 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Timeline: 5 - 7 Business Days</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Billing Metric: Per KG (Gross or Volumetric)</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Includes Guangzhou &amp; Yiwu airport dispatch</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Customs clearance at MMIA Airport Lagos</span>
                  </li>
                </ul>
              </div>

              <Button 
                as="a" 
                href={URL_CHINA_QUOTE} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary" 
                className="w-full py-3 text-xs uppercase tracking-widest font-extrabold"
              >
                Get Air Cargo Quote <ArrowRight size={14} />
              </Button>
            </div>

            {/* Sea Freight Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:border-blue-900 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    <Ship size={24} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                    Best Value for Bulk
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Sea Freight Container Shipping</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">
                  Best for large commercial inventories, furniture, heavy machinery, building materials, and bulk wholesale goods.
                </p>

                <ul className="space-y-3 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Timeline: 35 - 45 Days</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Billing Metric: Per CBM (Cubic Meter)</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Supports LCL (Groupage) &amp; Full Container Loads (FCL)</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Seaport clearance at Tincan &amp; Apapa ports</span>
                  </li>
                </ul>
              </div>

              <Button 
                as="a" 
                href={URL_CHINA_QUOTE} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="yellow" 
                className="w-full py-3 text-xs uppercase tracking-widest font-extrabold"
              >
                Get Sea Freight Quote <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHINESE SOURCING CITIES & WAREHOUSES */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              Sourcing Hubs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Popular Chinese Cities We Receive Cargo From
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Shipplix accepts supplier deliveries from every major manufacturing and wholesale industrial zone across China.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sourcingCities.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-blue-900 hover:bg-blue-50/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-blue-900 shrink-0" />
                    <h3 className="font-extrabold text-slate-900 text-sm">{item.city}</h3>
                  </div>
                  <p className="text-slate-600 text-[11px] font-bold mb-1">
                    {item.role}
                  </p>
                  <p className="text-slate-400 text-[10px]">
                    {item.address}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] font-black text-blue-900 flex items-center justify-between">
                  <span>Hub Connected</span>
                  <CheckCircle2 size={12} className="text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALLOWED IMPORT PRODUCTS VS PROHIBITED */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Products You Can Import from China
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Ensure your imported merchandise complies with Nigerian Customs Service (NCS) and SONCAP regulations.
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
                  <h3 className="font-extrabold text-slate-900 text-lg">Popular Approved Import Goods</h3>
                  <p className="text-emerald-800 text-xs">High demand commercial products</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Shirt className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Apparel, Shoes &amp; Wigs</strong>
                    Men &amp; women clothes, shoes, bags, human hair bundles, wigs, jewelry, and fashion accessories.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Sparkles className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Gadgets &amp; Consumer Electronics</strong>
                    Smartphones, phone accessories, laptops, smartwatches, solar panels, power banks, audio gadgets.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-emerald-100">
                  <Box className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Home Appliances &amp; Hardware</strong>
                    Kitchen equipment, furniture, light fixtures, tiles, auto spare parts, industrial machinery.
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
                  <h3 className="font-extrabold text-slate-900 text-lg">Restricted &amp; Prohibited Goods</h3>
                  <p className="text-rose-800 text-xs">Cannot be cleared through customs</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Contraband &amp; Illegal Substances</strong>
                    Firearms, ammunition, illegal drugs, counterfeit currency, pornography, hazardous chemicals.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <Lock className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Hazardous Liquids &amp; Batteries</strong>
                    Flammable liquids, pure mercury, uncertified lithium batteries sent via general air cargo without UN safety MSDS.
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-rose-100">
                  <ShieldCheck className="text-rose-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="text-slate-900 block text-sm">Used Clothing &amp; Perishables</strong>
                    Used underwear/textiles banned by NCS, uninspected raw meat products.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STEP BY STEP IMPORT PROCESS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
              Simple Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              How the China to Nigeria Import Process Works
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Importing with Shipplix is quick, structured, and completely transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                01
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Get Shipping Code</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Contact Shipplix to receive your unique Shipping Code and designated warehouse address in Guangzhou or Yiwu.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                02
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Suppliers Send Goods</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Your 1688 or Alibaba suppliers dispatch packages to our warehouse. We receive, inspect, measure, and consolidate your boxes.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                03
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Air / Sea Freight</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Your cargo is loaded on aircraft or ocean vessel to Lagos. Track progress online as your package moves across international waters.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-white font-black flex items-center justify-center text-sm mb-4">
                04
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">Customs &amp; Door Delivery</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We clear customs in Lagos and deliver directly to your residence, shop, or office anywhere in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Trusted by Top Nigerian Importers &amp; Business Owners
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              See how Shipplix helps e-commerce vendors, fashion merchants, and electronics importers grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex text-amber-400 gap-1">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-slate-700 text-xs leading-relaxed italic">
                &quot;Shipplix consolidated 6 different supplier orders from 1688 in Guangzhou into one neat box. My air cargo arrived in Ikeja, Lagos in just 6 days!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Nneka E.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Fashion Vendor, Lagos</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex text-amber-400 gap-1">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-slate-700 text-xs leading-relaxed italic">
                &quot;We ship 3 CBM of phone accessories from Yiwu every month with Shipplix sea cargo. Zero damage, transparent CBM rates, and fast clearing in Apapa.&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Ibrahim M.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Tech Store Owner, Abuja</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex text-amber-400 gap-1">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-slate-700 text-xs leading-relaxed italic">
                &quot;Their WhatsApp team guided me on supplier communication in China and verified package weights before flying. Outstanding service!&quot;
              </p>
              <div className="pt-2 border-t border-slate-200">
                <strong className="text-slate-900 text-xs block">Kelechi O.</strong>
                <span className="text-[10px] text-slate-500 font-bold">Wholesaler, Port Harcourt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions (China to Nigeria Import)
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Everything you need to know about importing cargo from China to Nigeria.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 font-bold text-slate-900 text-sm flex justify-between items-center gap-4 hover:bg-slate-100"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-blue-900' : ''}`} 
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INTERNAL NAVIGATION & LINKING FOOTER CTA */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-4 text-center">
              Explore Other Shipplix Shipping Routes &amp; Services
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-bold">
              <a 
                href="#/ship-from-nigeria-to-usa" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-usa')}
                className="bg-white hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl border border-slate-200 transition-all"
              >
                🇺🇸 Ship Nigeria to USA
              </a>
              <a 
                href="#/ship-from-nigeria-to-uk" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-uk')}
                className="bg-white hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl border border-slate-200 transition-all"
              >
                🇬🇧 Ship Nigeria to UK
              </a>
              <a 
                href="#/ship-from-nigeria-to-canada" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-canada')}
                className="bg-white hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl border border-slate-200 transition-all"
              >
                🇨🇦 Ship Nigeria to Canada
              </a>
              <a 
                href="#/ship-from-nigeria-to-europe" 
                onClick={(e) => handleLinkClick(e, '/ship-from-nigeria-to-europe')}
                className="bg-white hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl border border-slate-200 transition-all"
              >
                🇪🇺 Ship Nigeria to Europe
              </a>
              <a 
                href="#/cargo-items" 
                onClick={(e) => handleLinkClick(e, '/cargo-items')}
                className="bg-white hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl border border-slate-200 transition-all"
              >
                📦 Cargo Guidelines
              </a>
              <a 
                href="#/economy-cargo" 
                onClick={(e) => handleLinkClick(e, '/economy-cargo')}
                className="bg-white hover:bg-blue-900 hover:text-white text-slate-800 px-4 py-2.5 rounded-xl border border-slate-200 transition-all"
              >
                ✈️ Economy Cargo Rates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Import Cargo from China to Nigeria?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Get your unique China warehouse address and shipping code today. Chat with our logistics team now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button 
              as="a" 
              href={URL_CHINA_QUOTE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="yellow" 
              className="py-4 px-8 text-base font-black uppercase tracking-widest shadow-xl"
            >
              Get Shipping Quote <ArrowRight size={18} />
            </Button>

            <Button 
              as="a" 
              href={URL_CHINA_BOOK} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="ghost" 
              className="py-4 px-8 text-base border border-white/20 text-white hover:bg-white/10 uppercase tracking-widest font-black shadow-xl"
            >
              Book Shipment Online
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
