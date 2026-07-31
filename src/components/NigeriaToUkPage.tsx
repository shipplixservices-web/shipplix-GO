import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ChevronDown
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
const URL_UK_QUOTE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get a rate quote to ship a package from Nigeria to the United Kingdom (UK).")}`;
const URL_UK_BOOK = `https://myshipment.shipplix.com`;

interface NigeriaToUkPageProps {
  onNavigate?: (path: string) => void;
}

export default function NigeriaToUkPage({ onNavigate }: NigeriaToUkPageProps) {
  // SEO Meta & Title setup
  React.useEffect(() => {
    document.title = "Ship from Nigeria to UK | Fast, Secure & Affordable Delivery | Shipplix";

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Ship food items, personal belongings, fashion products, commercial cargo, and business shipments from Nigeria to London and every part of the United Kingdom with reliable door-to-door air freight delivery.'
    );

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Ship from Nigeria to UK | Express Air Cargo | Shipplix' },
      { property: 'og:description', content: 'Fast 3-5 business days door-to-door delivery from Nigeria to London, Manchester, Birmingham, and all UK postcodes. Vacuum sealing, HMRC customs clearance, and transparent per-kg rates.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://shipplix.com/ship-from-nigeria-to-uk' }
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
    schemaScript.id = 'uk-shipping-schema';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "International Freight & Parcel Cargo Logistics",
      "name": "Ship from Nigeria to UK",
      "provider": {
        "@type": "LogisticsBusiness",
        "name": "Shipplix Global Commerce & Logistics",
        "url": "https://shipplix.com",
        "telephone": "+2349168273513",
        "email": "services@shipplix.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "NG"
        }
      },
      "areaServed": [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Nigeria" }
      ],
      "description": "Fast 3-5 days express air freight and door-to-door package delivery from Nigeria to London, Birmingham, Manchester, and all UK postcodes."
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('uk-shipping-schema');
      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, []);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "How many days does shipping from Nigeria to the UK take?",
      a: "Our express air freight cargo delivers to any doorstep in the United Kingdom within 3 to 5 business days. Packages fly directly out of Murtala Muhammed International Airport (MMIA) in Lagos straight into London Heathrow (LHR) or London Gatwick (LGW)."
    },
    {
      q: "Do you deliver door-to-door across all UK cities and postcodes?",
      a: "Yes! Shipplix provides 100% complete door-to-door delivery to every postal address in England, Scotland, Wales, and Northern Ireland—including London, Birmingham, Manchester, Leeds, Glasgow, Edinburgh, Coventry, Leicester, Luton, Kent, Essex, and Aberdeen."
    },
    {
      q: "Can I ship Nigerian foodstuff like Egusi, Crayfish, Stockfish, and Garri to the UK?",
      a: "Yes! Dried Nigerian foodstuffs (egusi, crayfish, dried stockfish, garri, yam flour, bitterleaf, plantain chips, kilishi, and spices) are fully permitted for importation into the UK. We provide complimentary commercial vacuum sealing for all dried food items to ensure they remain 100% airtight, odourless, and compliant with UK DEFRA food standards."
    },
    {
      q: "How are shipping rates calculated for Nigeria to UK packages?",
      a: "Shipping rates are calculated on a per-kilogram basis based on the gross weight or volumetric weight (length x width x height / 5000), whichever is higher. Our pricing is all-inclusive and transparent—covering export handling, vacuum sealing, air freight, and final UK doorstep delivery."
    },
    {
      q: "How does UK Customs (HMRC) clearance work?",
      a: "Shipplix manages UK HMRC customs processing on your behalf. We prepare standard commercial invoices, declaration forms, and commodity codes so your package clears UK customs seamlessly without unexpected delays."
    },
    {
      q: "Do you pick up packages from my address in Nigeria?",
      a: "Yes! You can drop off your goods at our main Lagos Hub or request doorstep pickup from anywhere in Lagos, Abuja, Port Harcourt, Ibadan, Benin City, Enugu, Abeokuta, and other major Nigerian cities."
    }
  ];

  const popularRegions = [
    { name: "Greater London", cities: "Woolwich, Peckham, Barking, Thamesmead, Croydon, Wembley" },
    { name: "West Midlands", cities: "Birmingham, Coventry, Wolverhampton, Walsall" },
    { name: "North West", cities: "Manchester, Liverpool, Salford, Bolton, Preston" },
    { name: "Yorkshire & Humber", cities: "Leeds, Sheffield, Bradford, Wakefield, Hull" },
    { name: "East Midlands", cities: "Leicester, Nottingham, Derby, Northampton" },
    { name: "East of England", cities: "Luton, Milton Keynes, Essex, Hertfordshire, Cambridgeshire" },
    { name: "Scotland", cities: "Glasgow, Edinburgh, Aberdeen, Dundee" },
    { name: "Wales & N. Ireland", cities: "Cardiff, Swansea, Newport, Belfast" }
  ];

  return (
    <div className="pt-20 bg-slate-50 text-slate-900 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-shipplix-blue text-white py-16 lg:py-24 overflow-hidden border-b-4 border-shipplix-yellow">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-shipplix-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Hero Text Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shipplix-yellow/20 text-shipplix-yellow border border-shipplix-yellow/30 text-[11px] font-black uppercase tracking-widest mb-6">
                <Plane size={14} className="animate-pulse" />
                #1 Air Cargo Partner for Nigeria to UK Freight
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.05] tracking-tight uppercase">
                Ship from Nigeria to the UK with <br className="hidden md:inline" />
                <span className="text-shipplix-yellow">Fast, Secure &amp; Affordable</span> Delivery
              </h1>

              <p className="text-base md:text-xl text-slate-200 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                Send food items, personal belongings, fashion products, commercial cargo, and business shipments from Nigeria to London and every part of the United Kingdom with reliable door-to-door delivery.
              </p>

              {/* Key Highlights Pill Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 max-w-xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl flex items-center gap-2.5">
                  <Clock className="text-shipplix-yellow shrink-0" size={20} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-black tracking-widest text-slate-300">Transit Time</div>
                    <div className="text-xs font-black text-white">3 - 5 Days Express</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl flex items-center gap-2.5">
                  <Truck className="text-shipplix-yellow shrink-0" size={20} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-black tracking-widest text-slate-300">UK Coverage</div>
                    <div className="text-xs font-black text-white">All UK Postcodes</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <ShieldCheck className="text-shipplix-yellow shrink-0" size={20} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-black tracking-widest text-slate-300">Customs</div>
                    <div className="text-xs font-black text-white">100% HMRC Compliant</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  as="a" 
                  href={URL_UK_BOOK}
                  target="_self"
                  variant="yellow" 
                  className="py-4 px-8 text-xs uppercase tracking-widest font-black shadow-lg hover:scale-105 transition-transform"
                >
                  Book Shipment
                  <ArrowRight size={16} />
                </Button>

                <Button 
                  as="a" 
                  href={URL_UK_QUOTE} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="ghost" 
                  className="py-4 px-8 text-xs uppercase tracking-widest font-black border border-white/20 hover:bg-white/10"
                >
                  <MessageCircle size={18} className="text-emerald-400" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 1: WHY CHOOSE SHIPPLIX FOR UK SHIPPING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Why Choose Shipplix for <span className="text-shipplix-blue">Shipping from Nigeria to UK</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              We connect Nigerian exporters, merchants, students, and families directly with London and every UK region using express air freight and hassle-free door delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">3 - 5 Days Fast Express Air</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Direct cargo flights out of MMIA Lagos into London Heathrow (LHR) mean your shipment lands in the United Kingdom faster than traditional cargo lines.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <Truck size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Door-To-Door to All UK Postcodes</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We deliver directly to residential homes, business addresses, student accommodations, and retail shops across England, Scotland, Wales, and Northern Ireland.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">HMRC UK Customs Assistance</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Full compliance management for UK Her Majesty's Revenue and Customs (HMRC). We handle commercial invoices, declarations, and tariff classifications for effortless clearance.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Free Vacuum Packing</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We vacuum-seal all dried foodstuffs, dried fish, egusi, ogbono, and spices at our Lagos hub free of charge. This locks in freshness, eliminates odour, and reduces package size.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Live Real-time Package Tracking</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Track your package from Lagos hub drop-off, air freight takeoff, London airport arrival, UK customs release, down to last-mile doorstep dispatch.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <DollarSign size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Transparent Per-KG Rates</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                No unexpected hidden charges upon arrival in London or Manchester. Our upfront pricing covers export processing, flight freight, and doorstep UK delivery.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 2: SHIPPING RATES & WEIGHT BANDS */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-shipplix-blue text-shipplix-yellow text-[10px] font-black uppercase tracking-widest mb-3">
              Transparent Pricing
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Nigeria to UK <span className="text-shipplix-blue">Shipping Rates</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Affordable air cargo pricing per kilogram. All packages include export processing, vacuum sealing, and doorstep delivery across the United Kingdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Rate Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-shipplix-blue transition-all">
              <div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Express Parcel</div>
                <h3 className="text-xl font-black text-slate-900 mb-1">5kg – 10kg</h3>
                <div className="text-xs font-bold text-shipplix-blue mb-4">3-5 Days Express Air</div>
                <p className="text-xs text-slate-500 mb-6 font-medium">
                  Ideal for personal belongings, native fashion, wigs, family food parcels, and student care packages.
                </p>
              </div>
              <div>
                <div className="bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                  <div className="text-[10px] font-black uppercase text-slate-400">Includes</div>
                  <div className="text-xs font-bold text-slate-700">Free Vacuum Sealing + UK Doorstep Delivery</div>
                </div>
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get the live rate for a 5kg-10kg parcel to the UK.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-shipplix-blue text-white rounded-xl text-xs font-black uppercase tracking-wider block text-center hover:bg-shipplix-navy transition-colors"
                >
                  Get 5-10kg Rate
                </a>
              </div>
            </div>

            {/* Rate Card 2 */}
            <div className="bg-white border-2 border-shipplix-blue rounded-2xl p-6 shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-shipplix-yellow text-blue-950 px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                Most Popular
              </div>
              <div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Standard Cargo</div>
                <h3 className="text-xl font-black text-slate-900 mb-1">11kg – 25kg</h3>
                <div className="text-xs font-bold text-shipplix-blue mb-4">3-5 Days Express Air</div>
                <p className="text-xs text-slate-500 mb-6 font-medium">
                  Great value for medium Nigerian food exports, fashion boutiques, African market supplies, and cosmetics.
                </p>
              </div>
              <div>
                <div className="bg-blue-50 p-3 rounded-xl mb-4 border border-blue-100">
                  <div className="text-[10px] font-black uppercase text-blue-600">Includes</div>
                  <div className="text-xs font-bold text-slate-800">Priority Flight + HMRC Customs Processing</div>
                </div>
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get the live rate for an 11kg-25kg shipment to the UK.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-shipplix-yellow text-blue-950 rounded-xl text-xs font-black uppercase tracking-wider block text-center hover:bg-amber-400 transition-colors"
                >
                  Get 11-25kg Rate
                </a>
              </div>
            </div>

            {/* Rate Card 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-shipplix-blue transition-all">
              <div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Heavy Cargo</div>
                <h3 className="text-xl font-black text-slate-900 mb-1">26kg – 50kg</h3>
                <div className="text-xs font-bold text-shipplix-blue mb-4">3-5 Days Express Air</div>
                <p className="text-xs text-slate-500 mb-6 font-medium">
                  Optimized for commercial African food markets in London, Birmingham, and Manchester, plus bulk fashion items.
                </p>
              </div>
              <div>
                <div className="bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                  <div className="text-[10px] font-black uppercase text-slate-400">Includes</div>
                  <div className="text-xs font-bold text-slate-700">Consolidated Air Space + Fast Clearance</div>
                </div>
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get the live rate for a 26kg-50kg cargo shipment to the UK.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-shipplix-blue text-white rounded-xl text-xs font-black uppercase tracking-wider block text-center hover:bg-shipplix-navy transition-colors"
                >
                  Get 26-50kg Rate
                </a>
              </div>
            </div>

            {/* Rate Card 4 */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="text-xs font-black text-shipplix-yellow uppercase tracking-widest mb-2">Commercial Bulk</div>
                <h3 className="text-xl font-black text-white mb-1">50kg+ Commercial</h3>
                <div className="text-xs font-bold text-emerald-400 mb-4">Discounted Wholesale Tier</div>
                <p className="text-xs text-slate-300 mb-6 font-medium">
                  Special commercial freight rates for African restaurants, grocery chains, and wholesale distributors across the UK.
                </p>
              </div>
              <div>
                <div className="bg-white/10 p-3 rounded-xl mb-4 border border-white/10">
                  <div className="text-[10px] font-black uppercase text-shipplix-yellow">Includes</div>
                  <div className="text-xs font-bold text-white">Dedicated Account Manager + Custom Commercial Invoice</div>
                </div>
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I have a bulk shipment over 50kg for commercial export to the UK. Please provide a custom wholesale quote.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-wider block text-center hover:bg-emerald-600 transition-colors"
                >
                  Get Bulk Commercial Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 3: DOOR-TO-DOOR UK COVERAGE & CITIES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-shipplix-blue text-[10px] font-black uppercase tracking-widest mb-3">
              Comprehensive UK Logistics Network
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Door-to-Door Delivery Across <span className="text-shipplix-blue">London &amp; All UK Regions</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              We deliver your packages straight to any doorstep in England, Scotland, Wales, and Northern Ireland.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {popularRegions.map((region, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-shipplix-blue transition-all">
                <div className="flex items-center gap-2 text-shipplix-blue font-black mb-2 text-sm">
                  <MapPin size={18} className="text-shipplix-yellow fill-shipplix-blue" />
                  {region.name}
                </div>
                <div className="text-xs text-slate-600 font-semibold leading-relaxed">
                  {region.cities}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 4: DELIVERY TIMELINE & HOW IT WORKS */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              How the <span className="text-shipplix-blue">Nigeria to UK Shipping</span> Process Works
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              From Lagos hub intake to final delivery at your UK address—our simple 4-step workflow guarantees speed and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            {/* Step 1 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl relative text-center shadow-sm">
              <div className="w-10 h-10 bg-shipplix-blue text-shipplix-yellow rounded-full flex items-center justify-center font-black mx-auto mb-4 text-sm shadow-md">
                1
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-tight">Drop Off or Lagos Pickup</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Drop off your items at our Lagos Hub or request doorstep pickup from anywhere in Lagos, Abuja, Port Harcourt, Ibadan, or Enugu.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl relative text-center shadow-sm">
              <div className="w-10 h-10 bg-shipplix-blue text-shipplix-yellow rounded-full flex items-center justify-center font-black mx-auto mb-4 text-sm shadow-md">
                2
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-tight">Vacuum Packing &amp; HMRC Documentation</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We inspect, weigh, vacuum-seal dried foods, and prepare UK customs manifests and commercial invoices.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl relative text-center shadow-sm">
              <div className="w-10 h-10 bg-shipplix-blue text-shipplix-yellow rounded-full flex items-center justify-center font-black mx-auto mb-4 text-sm shadow-md">
                3
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-tight">Direct Flight to London</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Your cargo flies on scheduled commercial aircraft out of MMIA Lagos straight into London Heathrow (LHR) or Gatwick (LGW).
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl relative text-center shadow-sm">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-black mx-auto mb-4 text-sm shadow-md">
                4
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-tight">UK Doorstep Handover</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Following swift UK customs clearance, our UK courier partners deliver the package straight to your doorstep.
              </p>
            </div>
          </div>

          {/* Detailed Timeline Breakdown Card */}
          <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 max-w-4xl mx-auto border border-slate-800 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
              <div>
                <h3 className="text-xl font-black text-shipplix-yellow uppercase tracking-tight">3 - 5 Days Express Air Schedule</h3>
                <p className="text-xs text-slate-400 font-medium">Frequent flight departures out of Lagos to London international airport hubs</p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-bold text-white">
                <Clock size={16} className="text-shipplix-yellow" />
                Multiple Flights Weekly
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-shipplix-yellow font-black uppercase mb-1">Day 1 - Day 2</div>
                <div className="font-bold text-white mb-1">Intake, Vacuum Packaging &amp; Processing</div>
                <div className="text-[11px] text-slate-400">Hub receiving, weighing, commercial vacuum sealing, and export documentation.</div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-shipplix-yellow font-black uppercase mb-1">Day 3</div>
                <div className="font-bold text-white mb-1">MMIA Airport Takeoff &amp; Flight</div>
                <div className="text-[11px] text-slate-400">Customs exit clearance in Lagos and direct flight connection to London (LHR).</div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-emerald-400 font-black uppercase mb-1">Day 4 - Day 5</div>
                <div className="font-bold text-white mb-1">UK Customs Release &amp; Doorstep Delivery</div>
                <div className="text-[11px] text-slate-400">HMRC customs clearance and final delivery handover across London and UK postcodes.</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 5: ITEMS YOU CAN SHIP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Items You Can <span className="text-shipplix-blue">Ship from Nigeria to UK</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              We ship a wide range of permitted products with professional vacuum packaging and full customs documentation compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Category 1: Foodstuff */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-black mb-4">
                <Utensils size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Dried Foodstuff &amp; Spices</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Complimentary vacuum sealing provided for airtight, odourless food transport to the UK.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Egusi, Ogbono &amp; Melon Seeds</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Dried Crayfish, Smoked Fish &amp; Stockfish</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Garri, Yam Flour (Elubo) &amp; Plantain Flour</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Dried Bitterleaf, Ukazi, Uziza &amp; Scent Leaf</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Plantain Chips, Kilishi, Suya Pepper &amp; Spices</li>
              </ul>
            </div>

            {/* Category 2: Fashion & Wigs */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-shipplix-blue rounded-xl flex items-center justify-center font-black mb-4">
                <Shirt size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Fashion, Wigs &amp; Apparel</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Ship bespoke native fashion, Ankara collections, and human hair wigs to UK clients.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Ankara, Lace &amp; Aso-Oke Materials</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Tailored Agbada, Kaftans &amp; Dresses</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Human Hair Wigs, Extensions &amp; Frontals</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Traditional African Accessories &amp; Beads</li>
              </ul>
            </div>

            {/* Category 3: Cosmetics & Skincare */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 text-pink-700 rounded-xl flex items-center justify-center font-black mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Cosmetics &amp; Personal Care</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Export natural skincare products and organic West African beauty formulations.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Unrefined Raw Shea Butter</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> African Black Soap (Dudu Osun)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Natural Hair Products &amp; Oils</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Organic Body Creams &amp; Scrubs</li>
              </ul>
            </div>

            {/* Category 4: Personal Belongings */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center font-black mb-4">
                <Box size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Personal Effects &amp; Books</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Send personal belongings, study materials, and cultural books to family or students in the UK.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Personal Clothes &amp; Footwear</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Nigerian Books, Bibles &amp; Study Textbooks</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Event Souvenirs &amp; Gift Items</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Wall Art &amp; Decorative Craftwork</li>
              </ul>
            </div>

            {/* Category 5: Commercial Stock */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-black mb-4">
                <Package size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Commercial Cargo &amp; Stock</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Scale your UK-based African retail brand or wholesale grocery enterprise.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> E-commerce Product Inventory</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Packaged Branded Grocery Stock</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Print Marketing Materials &amp; Labels</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Wholesale Samples &amp; Merchandizing</li>
              </ul>
            </div>

            {/* CTA Card linking to full cargo list */}
            <div className="bg-shipplix-blue text-white p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-black text-shipplix-yellow uppercase tracking-widest mb-2">Item Checker</div>
                <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Need to verify a specific item?</h3>
                <p className="text-xs text-slate-200 font-medium mb-6">
                  Check our full searchable cargo items guide for complete compliance rules on over 100+ Nigerian products.
                </p>
              </div>
              <button 
                onClick={() => onNavigate?.('/cargo-items')}
                className="w-full py-3 bg-shipplix-yellow text-blue-950 rounded-xl text-xs font-black uppercase tracking-wider text-center hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 font-black"
              >
                Search Cargo Items List
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 6: RESTRICTED & PROHIBITED ITEMS */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-red-50 border-2 border-red-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-600 text-white rounded-2xl shrink-0">
                <AlertTriangle size={28} />
              </div>
              <div>
                <h3 className="text-xl font-black text-red-900 uppercase tracking-tight">
                  Prohibited &amp; Restricted Items for UK Air Freight
                </h3>
                <p className="text-xs text-red-700 font-medium">
                  For flight safety and UK Border Force compliance, the following items cannot be accepted in general air freight:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold text-red-950">
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Powerbanks &amp; Loose Lithium Batteries
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Perfumes, Aerosols &amp; Flammable Liquids
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Fresh Unprocessed Meat or Poultry
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Prescription Drugs without Doctor Certification
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Counterfeit Goods &amp; Currency
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Explosives, Firearms &amp; Corrosive Materials
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-red-800 font-medium">
              If you have questions regarding a specific product, <a href={URL_UK_QUOTE} target="_blank" rel="noopener noreferrer" className="underline font-black text-red-900 hover:text-black">contact our team on WhatsApp</a> before packaging.
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 7: CUSTOMS CLEARANCE ASSISTANCE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-shipplix-blue text-white rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-shipplix-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-shipplix-yellow text-[10px] font-black uppercase tracking-widest mb-4">
                  <FileCheck size={14} />
                  HMRC Clearance Experts
                </div>
                <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight text-white">
                  Seamless <span className="text-shipplix-yellow">UK Customs Clearance</span> Guaranteed
                </h2>
                <p className="text-xs md:text-sm text-slate-200 font-medium leading-relaxed mb-6">
                  Navigating Her Majesty's Revenue and Customs (HMRC) and UK import regulations can be confusing. Shipplix handles 100% of the export paperwork, commercial declarations, and tariff classification so your cargo clears UK customs smoothly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-100">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-shipplix-yellow shrink-0" /> Full Commercial Invoice Filing</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-shipplix-yellow shrink-0" /> Zero Unexpected Customs Delays</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-shipplix-yellow shrink-0" /> DEFRA Food Import Compliance</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-shipplix-yellow shrink-0" /> Transparent Duty Guidance</div>
                </div>
              </div>

              <div className="md:col-span-4 text-center md:text-right">
                <Button 
                  as="a" 
                  href={URL_UK_QUOTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="yellow" 
                  className="w-full py-4 text-xs uppercase tracking-widest font-black shadow-lg hover:scale-105"
                >
                  <MessageCircle size={18} />
                  Ask Customs Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-shipplix-blue text-shipplix-yellow text-[10px] font-black uppercase tracking-widest mb-3">
              Got Questions?
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Frequently Asked <span className="text-shipplix-blue">Questions</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Everything you need to know about shipping from Nigeria to London and the UK.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-black text-slate-900 hover:text-shipplix-blue transition-colors text-sm md:text-base"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-shipplix-blue shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 text-slate-400 shrink-0 ${openFaq === i ? 'rotate-180 text-shipplix-blue' : ''}`} 
                  />
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-100 bg-slate-50/50"
                    >
                      <div className="p-6 text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 9: CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Trusted by <span className="text-shipplix-blue">Thousands in the UK</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Read what UK-based Nigerians and commercial exporters say about our shipping service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xs text-slate-700 font-medium italic mb-6 leading-relaxed">
                  "Shipplix delivered my foodstuff parcel to my house in Woolwich, London in just 4 days! The egusi and dried fish were vacuum-packed so cleanly. Very impressed!"
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-slate-900">Blessing O.</div>
                  <div className="text-[10px] font-bold text-slate-400">London, United Kingdom</div>
                </div>
                <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Verified Ship</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xs text-slate-700 font-medium italic mb-6 leading-relaxed">
                  "I export native wears and Ankara collections from Lagos to clients in Birmingham and Manchester. Shipplix handles all my shipping reliably every single week."
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-slate-900">Tunde A.</div>
                  <div className="text-[10px] font-bold text-slate-400">Fashion Brand Owner, Lagos</div>
                </div>
                <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Commercial Client</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xs text-slate-700 font-medium italic mb-6 leading-relaxed">
                  "My mother sent my textbooks and food supplies to Coventry. Everything arrived safe and fast. The WhatsApp tracking support was super responsive!"
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-slate-900">Chidimma E.</div>
                  <div className="text-[10px] font-bold text-slate-400">Coventry University Student</div>
                </div>
                <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Verified Ship</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 10: INTERNAL LINKS & OTHER GLOBAL DESTINATIONS */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <h3 className="text-lg font-black uppercase tracking-tight text-slate-900">
              Explore Shipplix Global Shipping Routes &amp; Resources
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Seamless air freight and logistics connecting Nigeria with top global destinations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs font-bold text-center">
            <button 
              onClick={() => onNavigate?.('/ship-from-nigeria-to-usa')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-shipplix-blue hover:text-shipplix-blue transition-all shadow-sm flex flex-col items-center gap-2"
            >
              <Globe size={18} className="text-shipplix-yellow" />
              <span>Ship to USA</span>
            </button>

            <button 
              onClick={() => onNavigate?.('/cargo-items')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-shipplix-blue hover:text-shipplix-blue transition-all shadow-sm flex flex-col items-center gap-2"
            >
              <Search size={18} className="text-blue-600" />
              <span>Permitted Cargo List</span>
            </button>

            <button 
              onClick={() => onNavigate?.('/processing')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-shipplix-blue hover:text-shipplix-blue transition-all shadow-sm flex flex-col items-center gap-2"
            >
              <Clock size={18} className="text-emerald-600" />
              <span>Processing Workflow</span>
            </button>

            <button 
              onClick={() => onNavigate?.('/economy-cargo-terms')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-shipplix-blue hover:text-shipplix-blue transition-all shadow-sm flex flex-col items-center gap-2"
            >
              <FileCheck size={18} className="text-purple-600" />
              <span>Terms &amp; Metrics</span>
            </button>

            <button 
              onClick={() => onNavigate?.('/trust')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-shipplix-blue hover:text-shipplix-blue transition-all shadow-sm flex flex-col items-center gap-2"
            >
              <ShieldCheck size={18} className="text-indigo-600" />
              <span>Trust &amp; Verification</span>
            </button>

            <button 
              onClick={() => onNavigate?.('/export-blueprint')}
              className="p-4 bg-white rounded-xl border border-slate-200 hover:border-shipplix-blue hover:text-shipplix-blue transition-all shadow-sm flex flex-col items-center gap-2"
            >
              <Box size={18} className="text-amber-600" />
              <span>Export Blueprint</span>
            </button>
          </div>
        </div>
      </section>


      {/* SECTION 11: FINAL CALL TO ACTION */}
      <section className="py-20 bg-shipplix-blue text-white relative overflow-hidden border-t-4 border-shipplix-yellow">
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-shipplix-yellow/20 text-shipplix-yellow border border-shipplix-yellow/30 text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles size={16} />
            Ready to Send Your Package to the UK?
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-white">
            Send Your Shipment from <span className="text-shipplix-yellow">Nigeria to UK Today</span>
          </h2>

          <p className="text-sm md:text-lg text-slate-200 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Fast 3-5 days express air cargo, free commercial vacuum packing, complete HMRC customs handling, and door-to-door delivery across London and all UK postcodes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              as="a" 
              href={URL_UK_BOOK}
              target="_self"
              variant="yellow" 
              className="py-4 px-10 text-xs uppercase tracking-widest font-black shadow-2xl hover:scale-105"
            >
              Book Shipment Now
              <ArrowRight size={18} />
            </Button>

            <Button 
              as="a" 
              href={URL_UK_QUOTE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="ghost" 
              className="py-4 px-10 text-xs uppercase tracking-widest font-black border border-white/20 hover:bg-white/10"
            >
              <MessageCircle size={18} className="text-emerald-400" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
