import React from 'react';
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
import { motion, AnimatePresence } from 'motion/react';

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
const URL_USA_QUOTE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get a rate quote to ship a package from Nigeria to the USA.")}`;
const URL_USA_BOOK = `https://myshipment.shipplix.com`;

interface NigeriaToUsaPageProps {
  onNavigate?: (path: string) => void;
}

export default function NigeriaToUsaPage({ onNavigate }: NigeriaToUsaPageProps) {
  // SEO Meta & Title setup
  React.useEffect(() => {
    document.title = "Ship from Nigeria to USA | Fast, Reliable & Affordable Air Cargo | Shipplix";

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Ship packages, foodstuff, fashion, personal effects, and commercial cargo from Nigeria to any city in the USA. Fast 5-7 days door-to-door air freight shipping with 100% customs clearance.'
    );

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Ship from Nigeria to USA | Express Air Cargo | Shipplix' },
      { property: 'og:description', content: 'Fast 5-7 business days door-to-door delivery from Nigeria to all 50 US states. FDA compliance, vacuum sealing, and transparent per-kg shipping rates.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://shipplix.com/ship-from-nigeria-to-usa' }
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
    schemaScript.id = 'usa-shipping-schema';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "International Logistics & Air Freight Cargo",
      "name": "Ship from Nigeria to USA",
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
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Nigeria" }
      ],
      "description": "Fast 5-7 days express air freight and door-to-door package delivery from Nigeria to all 50 states in the USA."
    });
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById('usa-shipping-schema');
      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, []);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "How many days does shipping from Nigeria to the USA take?",
      a: "Our standard express air cargo delivers to any doorstep in the USA within 5 to 7 business days. Transit time starts from our weekly flight departure out of Murtala Muhammed International Airport (MMIA) in Lagos."
    },
    {
      q: "Do you deliver to all 50 states in the United States?",
      a: "Yes! Shipplix provides complete door-to-door delivery across every US state—including Texas (Houston, Dallas), Maryland (Baltimore, Bowie), Georgia (Atlanta), New York, California (Los Angeles), Florida, Illinois (Chicago), Minnesota, Pennsylvania, and Washington DC."
    },
    {
      q: "Can I ship Nigerian foodstuff like Egusi, Crayfish, and Garri to the USA legally?",
      a: "Yes, absolutely! Dried foodstuffs (egusi, crayfish, dried fish, yam flour, garri, bitterleaf, plantain chips) are fully permitted for shipping from Nigeria to the USA. We provide complimentary commercial vacuum sealing for all dried food items to keep them 100% airtight and fresh for US customs clearance."
    },
    {
      q: "How are shipping rates calculated for Nigeria to USA packages?",
      a: "Shipping rates are billed on a per-kilogram basis based on the actual gross weight or volumetric (dimensional) weight, whichever is higher. Our rates are transparent and all-inclusive—covering vacuum packing, customs export documentation, and last-mile US doorstep delivery."
    },
    {
      q: "How does US Customs (FDA & CBP) clearance work?",
      a: "Shipplix handles 100% of the customs paperwork, including US FDA Prior Notice filings and Customs and Border Protection (CBP) declarations. You don't have to worry about complicated import documentation or unexpected border holds."
    },
    {
      q: "Do you pick up packages from my house or office in Nigeria?",
      a: "Yes! You can drop off your goods at our Lagos Hub or request doorstep pickup from anywhere in Lagos, Abuja, Port Harcourt, Ibadan, Benin, Enugu, or other cities across Nigeria."
    }
  ];

  const popularStates = [
    { name: "Texas", cities: "Houston, Dallas, Austin, San Antonio" },
    { name: "Maryland", cities: "Baltimore, Bowie, Silver Spring" },
    { name: "Georgia", cities: "Atlanta, Alpharetta, Marietta" },
    { name: "New York", cities: "NYC, Queens, Brooklyn, Bronx" },
    { name: "California", cities: "Los Angeles, San Jose, Sacramento" },
    { name: "Illinois", cities: "Chicago, Naperville, Evanston" },
    { name: "Florida", cities: "Miami, Orlando, Tampa, Jacksonville" },
    { name: "Pennsylvania", cities: "Philadelphia, Pittsburgh" }
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
            
            {/* Hero Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shipplix-yellow/20 text-shipplix-yellow border border-shipplix-yellow/30 text-[11px] font-black uppercase tracking-widest mb-6">
                <Plane size={14} className="animate-pulse" />
                #1 Air Freight Partner for USA Exports
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.05] tracking-tight uppercase">
                Ship from Nigeria to USA with <br className="hidden md:inline" />
                <span className="text-shipplix-yellow">Fast, Reliable &amp; Affordable</span> Delivery
              </h1>

              <p className="text-base md:text-xl text-slate-200 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                Send food items, fashion, personal effects, business cargo, and commercial shipments from Nigeria to any city in the United States with secure door-to-door delivery.
              </p>

              {/* Key Highlights Pill Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 max-w-xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl flex items-center gap-2.5">
                  <Clock className="text-shipplix-yellow shrink-0" size={20} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-black tracking-widest text-slate-300">Transit Time</div>
                    <div className="text-xs font-black text-white">5 - 7 Days Air Cargo</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl flex items-center gap-2.5">
                  <Truck className="text-shipplix-yellow shrink-0" size={20} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-black tracking-widest text-slate-300">US Coverage</div>
                    <div className="text-xs font-black text-white">All 50 US States</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <ShieldCheck className="text-shipplix-yellow shrink-0" size={20} />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-black tracking-widest text-slate-300">Customs</div>
                    <div className="text-xs font-black text-white">100% Cleared &amp; FDA</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  as="a" 
                  href={URL_USA_BOOK}
                  target="_self"
                  variant="yellow" 
                  className="py-4 px-8 text-xs uppercase tracking-widest font-black shadow-lg hover:scale-105 transition-transform"
                >
                  Book Shipment
                  <ArrowRight size={16} />
                </Button>

                <Button 
                  as="a" 
                  href={URL_USA_QUOTE} 
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


      {/* SECTION 1: WHY CHOOSE SHIPPLIX FOR USA SHIPPING */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Why Choose Shipplix for <span className="text-shipplix-blue">Shipping from Nigeria to USA</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              We eliminate customs delays, high freight fees, and lost packages. Experience the most dependable door-to-door air cargo logistics service connecting Nigeria directly to the United States.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">5 - 7 Days Fast Express Air</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Direct commercial flight routes out of MMIA Lagos to major US international hubs ensure your cargo reaches its destination fast without endless transit layovers.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <Truck size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Door-To-Door to All 50 States</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Whether your buyer or family is in Houston, Texas, Atlanta, Georgia, Baltimore, Maryland, or Los Angeles, California, we deliver straight to their residential or business doorstep.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">US FDA &amp; CBP Clearance</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Complete compliance documentation prepared beforehand. We handle US Customs &amp; Border Protection declarations and FDA Prior Notices so your foodstuff clears with zero border holds.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Free Vacuum Packing</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We vacuum-seal all dried foodstuff, fish, egusi, and spices at our Lagos hub free of charge. This keeps food fresh, completely odourless, and compact to save you shipping weight.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Live Package Tracking</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Track your shipment journey from Lagos departure, flight movement, US customs release, and final delivery vehicle dispatch via our online manifest and WhatsApp updates.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-shipplix-blue text-shipplix-yellow rounded-xl flex items-center justify-center font-black mb-6">
                <DollarSign size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Transparent Per-KG Rates</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                No surprise handling charges or hidden customs fees upon delivery. Our upfront rates cover export processing, flight freight, and last-mile US delivery.
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
              Nigeria to USA <span className="text-shipplix-blue">Shipping Rates</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Affordable air cargo pricing scaled to your shipment size. All packages include export processing, vacuum sealing, and doorstep delivery across the US.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Rate Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-shipplix-blue transition-all">
              <div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Express Parcel</div>
                <h3 className="text-xl font-black text-slate-900 mb-1">5kg – 10kg</h3>
                <div className="text-xs font-bold text-shipplix-blue mb-4">5-7 Days Air Freight</div>
                <p className="text-xs text-slate-500 mb-6 font-medium">
                  Ideal for personal effects, native wears, gift boxes, and small foodstuff parcels for family and friends.
                </p>
              </div>
              <div>
                <div className="bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                  <div className="text-[10px] font-black uppercase text-slate-400">Includes</div>
                  <div className="text-xs font-bold text-slate-700">Free Vacuum Sealing + Doorstep Delivery</div>
                </div>
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get the live rate for a 5kg-10kg parcel to the USA.")}`}
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
                <div className="text-xs font-bold text-shipplix-blue mb-4">5-7 Days Air Freight</div>
                <p className="text-xs text-slate-500 mb-6 font-medium">
                  Best value for medium foodstuff exports, fashion boutique orders, wig inventory, and general cargo.
                </p>
              </div>
              <div>
                <div className="bg-blue-50 p-3 rounded-xl mb-4 border border-blue-100">
                  <div className="text-[10px] font-black uppercase text-blue-600">Includes</div>
                  <div className="text-xs font-bold text-slate-800">Priority Flight + FDA Customs Clearance</div>
                </div>
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get the live rate for an 11kg-25kg shipment to the USA.")}`}
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
                <div className="text-xs font-bold text-shipplix-blue mb-4">5-7 Days Air Freight</div>
                <p className="text-xs text-slate-500 mb-6 font-medium">
                  Optimized for commercial merchants, African grocery stockists, and high-volume food exporters.
                </p>
              </div>
              <div>
                <div className="bg-slate-50 p-3 rounded-xl mb-4 border border-slate-100">
                  <div className="text-[10px] font-black uppercase text-slate-400">Includes</div>
                  <div className="text-xs font-bold text-slate-700">Consolidated Air Space + Express Clearance</div>
                </div>
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I would like to get the live rate for a 26kg-50kg cargo shipment to the USA.")}`}
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
                <div className="text-xs font-bold text-emerald-400 mb-4">Discounted Freight Tier</div>
                <p className="text-xs text-slate-300 mb-6 font-medium">
                  Bespoke volume rates for commercial exporters, restaurant supplies, and wholesale distributors in the US.
                </p>
              </div>
              <div>
                <div className="bg-white/10 p-3 rounded-xl mb-4 border border-white/10">
                  <div className="text-[10px] font-black uppercase text-shipplix-yellow">Includes</div>
                  <div className="text-xs font-bold text-white">Dedicated Account Manager + Custom Manifest</div>
                </div>
                <a 
                  href={`${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I have a bulk shipment over 50kg for commercial export to the USA. Please provide a custom wholesale quote.")}`}
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


      {/* SECTION 3: DELIVERY TIMELINE & HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              How <span className="text-shipplix-blue">Shipping from Nigeria to USA</span> Works
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              From Lagos hub drop-off to final delivery in Houston, Atlanta, or Baltimore—our streamlined 4-step workflow guarantees speed and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative text-center">
              <div className="w-10 h-10 bg-shipplix-blue text-shipplix-yellow rounded-full flex items-center justify-center font-black mx-auto mb-4 text-sm shadow-md">
                1
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-tight">Drop Off or Request Pickup</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Drop off your package at our Lagos Hub or schedule doorstep pickup anywhere in Lagos, Abuja, Port Harcourt, or Ibadan.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative text-center">
              <div className="w-10 h-10 bg-shipplix-blue text-shipplix-yellow rounded-full flex items-center justify-center font-black mx-auto mb-4 text-sm shadow-md">
                2
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-tight">Vacuum Sealing &amp; Documentation</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                We inspect, weigh, vacuum-seal dried foodstuff, and file US FDA Prior Notice and Federal export customs manifests.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative text-center">
              <div className="w-10 h-10 bg-shipplix-blue text-shipplix-yellow rounded-full flex items-center justify-center font-black mx-auto mb-4 text-sm shadow-md">
                3
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-tight">Express Flight Departure</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Your package flies on scheduled commercial airlines out of MMIA Lagos directly to US international logistics gateways (JFK, ORD, ATL, DFW).
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative text-center">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-black mx-auto mb-4 text-sm shadow-md">
                4
              </div>
              <h3 className="text-base font-black text-slate-900 mb-2 uppercase tracking-tight">US Doorstep Handover</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                After swift US customs clearance, last-mile courier partners (UPS, FedEx, DHL) deliver the package directly to your recipient's home or office.
              </p>
            </div>
          </div>

          {/* Detailed Timeline Breakdown Card */}
          <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 max-w-4xl mx-auto border border-slate-800 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
              <div>
                <h3 className="text-xl font-black text-shipplix-yellow uppercase tracking-tight">5-7 Days Transit Calendar</h3>
                <p className="text-xs text-slate-400 font-medium">Weekly flight departures from Lagos to United States hubs</p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-bold text-white">
                <Clock size={16} className="text-shipplix-yellow" />
                Flight Departs Weekly
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-shipplix-yellow font-black uppercase mb-1">Mon - Wed</div>
                <div className="font-bold text-white mb-1">Cargo Processing &amp; Vacuum Sealing</div>
                <div className="text-[11px] text-slate-400">Package intake, weight audit, vacuum packaging, and FDA filings.</div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-shipplix-yellow font-black uppercase mb-1">Thu - Fri</div>
                <div className="font-bold text-white mb-1">Export Clearance &amp; Flight Departure</div>
                <div className="text-[11px] text-slate-400">Customs release at MMIA Airport and air cargo departure to USA.</div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-emerald-400 font-black uppercase mb-1">Mon - Tue</div>
                <div className="font-bold text-white mb-1">US Customs Release &amp; Doorstep Delivery</div>
                <div className="text-[11px] text-slate-400">Customs clearance in the US and final delivery to buyer doorstep.</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 4: ITEMS YOU CAN SHIP */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Items You Can <span className="text-shipplix-blue">Ship from Nigeria to USA</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              We ship a wide variety of permitted goods with professional vacuum sealing and full documentation compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Category 1: Foodstuff */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-black mb-4">
                <Utensils size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Dried Foodstuff &amp; Spices</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Full vacuum packing provided free of charge for fresh, odourless air transit.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Egusi (Melon Seeds) &amp; Ogbono</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Dried Crayfish &amp; Stockfish / Fish</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Garri (Yellow / White) &amp; Yam Flour (Elubo)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Dried Bitterleaf, Ukazi, Uziza &amp; Scent Leaf</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Plantain Chips, Kilishi, &amp; Suya Pepper</li>
              </ul>
            </div>

            {/* Category 2: Fashion & Wigs */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-shipplix-blue rounded-xl flex items-center justify-center font-black mb-4">
                <Shirt size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Fashion, Wigs &amp; Apparel</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Ship tailored native wears, commercial fashion lines, and luxury human hair wigs.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Ankara, Lace &amp; Aso-Oke Fabrics</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Custom Agbada, Kaftan &amp; Ready-to-wear</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Human Hair Wigs, Extensions &amp; Bundles</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> African Footwear, Beads &amp; Accessories</li>
              </ul>
            </div>

            {/* Category 3: Cosmetics & Skincare */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 text-pink-700 rounded-xl flex items-center justify-center font-black mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Cosmetics &amp; Personal Care</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Export natural skincare, organic shea butter, and African soaps securely packaged.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Raw Organic Shea Butter</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> African Black Soap (Dudu Osun)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Natural Oils &amp; Body Lotions</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Herbal Hair Products</li>
              </ul>
            </div>

            {/* Category 4: Books & Culture */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center font-black mb-4">
                <Box size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Books, Artwork &amp; Crafts</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Share Nigerian literature, religious texts, and cultural craftworks overseas.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Nigerian Literature &amp; School Books</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Cultural Bibles &amp; Religious Publications</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Handcrafted Wood Carvings &amp; Paintings</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Traditional Event Souvenirs</li>
              </ul>
            </div>

            {/* Category 5: Commercial Stock */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-black mb-4">
                <Package size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">Commercial &amp; Business Goods</h3>
              <p className="text-xs text-slate-500 font-medium mb-4">
                Scale your African e-commerce brand or store with bulk inventory shipments.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> E-commerce Merchant Product Stock</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Packaged Branded Grocery Line</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Print Marketing Materials &amp; Labels</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> Business Samples &amp; Catalogs</li>
              </ul>
            </div>

            {/* CTA Card linking to full cargo list */}
            <div className="bg-shipplix-blue text-white p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-black text-shipplix-yellow uppercase tracking-widest mb-2">Item Lookup Tool</div>
                <h3 className="text-xl font-black mb-2 uppercase tracking-tight">Not sure if your item is allowed?</h3>
                <p className="text-xs text-slate-200 font-medium mb-6">
                  Check our full permitted cargo database with detailed guidelines for over 100+ Nigerian products.
                </p>
              </div>
              <button 
                onClick={() => onNavigate?.('/cargo-items')}
                className="w-full py-3 bg-shipplix-yellow text-blue-950 rounded-xl text-xs font-black uppercase tracking-wider text-center hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
              >
                Search Cargo Items List
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 5: RESTRICTED & PROHIBITED ITEMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-red-50 border-2 border-red-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-600 text-white rounded-2xl shrink-0">
                <AlertTriangle size={28} />
              </div>
              <div>
                <h3 className="text-xl font-black text-red-900 uppercase tracking-tight">
                  Prohibited &amp; Restricted Items for US Flights
                </h3>
                <p className="text-xs text-red-700 font-medium">
                  To ensure 100% flight safety and compliance with US TSA and Aviation laws, the following items cannot be shipped in general air cargo:
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
                Aerosols, Perfumes &amp; Flammable Sprays
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Fresh Meat / Poultry (Un-dried or raw)
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Illegal Narcotics, CBD &amp; Controlled Substances
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Currency, Cash &amp; Unregistered Precious Metals
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Counterfeit Branded Goods or Knockoffs
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-200 text-[11px] text-red-800 font-medium text-center">
              * Note: Liquid palm oil and prescription medication require specific leakproof packaging and doctor pharmacy notes respectively.
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 6: CUSTOMS CLEARANCE & POPULAR US DESTINATIONS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shipplix-yellow/20 text-shipplix-yellow text-[10px] font-black uppercase tracking-widest mb-4">
                <FileCheck size={14} />
                US FDA &amp; CBP Compliance
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight">
                Hassle-Free <span className="text-shipplix-yellow">US Customs Clearance</span> Guaranteed
              </h2>
              <p className="text-sm md:text-base text-slate-300 font-medium mb-6 leading-relaxed">
                Navigating United States import laws can be complex. Shipplix handles 100% of the customs manifest documentation, US Food and Drug Administration (FDA) Prior Notices, and Federal Aviation compliance.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-emerald-500 text-white rounded-full mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">FDA Prior Notice Filing</h4>
                    <p className="text-xs text-slate-400 font-medium">All foodstuff packages receive digital FDA prior notice tags before flight departure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-emerald-500 text-white rounded-full mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Zero Border Seizure Record</h4>
                    <p className="text-xs text-slate-400 font-medium">Proper vacuum sealing prevents air leakage, keeping inspectors satisfied.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 bg-emerald-500 text-white rounded-full mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">Full Duty &amp; Export Tax Handling</h4>
                    <p className="text-xs text-slate-400 font-medium">Transparent upfront clearance with zero surprise customs fees charged on arrival.</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => onNavigate?.('/trust')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                Read Security &amp; Trust Policies
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Right side: Popular States Grid */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
              <h3 className="text-lg font-black text-shipplix-yellow mb-2 uppercase tracking-tight">
                Top US Destinations Delivered Daily
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-6">
                We provide door-to-door delivery across all 50 states. Here are our highest volume destination hubs:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {popularStates.map((st, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                    <div className="flex items-center gap-2 text-xs font-black text-white mb-0.5">
                      <MapPin size={14} className="text-shipplix-yellow shrink-0" />
                      {st.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium pl-5">
                      {st.cities}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                <div className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                  + All Other 42 US States Delivered Door-to-Door!
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-shipplix-blue text-shipplix-yellow text-[10px] font-black uppercase tracking-widest mb-3">
              Got Questions?
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Nigeria to USA Shipping <span className="text-shipplix-blue">FAQs</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              Everything you need to know about shipping packages from Nigeria to the United States.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tight">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-shipplix-blue shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-6 pt-0 text-xs md:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 bg-slate-50"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter text-slate-900">
              Trusted By Exporters &amp; <span className="text-shipplix-blue">Diaspora Families</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium">
              See what our customers in Houston, Atlanta, Baltimore, and Dallas say about shipping with Shipplix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-3">
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                </div>
                <p className="text-xs text-slate-600 font-medium italic mb-6 leading-relaxed">
                  "My foodstuff package arrived in Houston in just 5 days! The crayfish and egusi were vacuum-packed so tightly that there was zero smell. Excellent service!"
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <div className="text-xs font-black text-slate-900">Dr. Mrs. Kemi O.</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Houston, Texas</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-3">
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                </div>
                <p className="text-xs text-slate-600 font-medium italic mb-6 leading-relaxed">
                  "Shipplix handles all my fashion exports from Lagos to buyers in Maryland and Atlanta. Rates are transparent and delivery is always on point."
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <div className="text-xs font-black text-slate-900">Tunde B. (African Apparel Merchant)</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Lagos &amp; Baltimore, MD</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 gap-1 mb-3">
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                </div>
                <p className="text-xs text-slate-600 font-medium italic mb-6 leading-relaxed">
                  "I was worried about US customs stopping my stockfish, but Shipplix handled the FDA paperwork perfectly. Delivered right to my door in Atlanta!"
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <div className="text-xs font-black text-slate-900">Grace E.</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Atlanta, Georgia</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* HOUSTON / MAJOR CITIES QUICK LINK */}
      <section className="py-8 bg-slate-100 border-t border-slate-200 text-center">
        <div className="container mx-auto px-6">
          <p className="text-xs font-bold text-slate-600 mb-3 uppercase tracking-wider">Popular US Destination Portals</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="#/ship-from-nigeria-to-houston" 
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/ship-from-nigeria-to-houston');
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-slate-800 text-xs font-bold hover:border-blue-900 transition-colors shadow-sm"
            >
              <span>🇺🇸 Ship Nigeria to Houston, Texas (Sugar Land, Katy, Pearland)</span>
              <ArrowRight size={14} className="text-blue-900" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CALL TO ACTION */}
      <section className="py-20 bg-shipplix-blue text-white relative overflow-hidden border-t-4 border-shipplix-yellow">
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-shipplix-yellow/20 text-shipplix-yellow border border-shipplix-yellow/30 text-[11px] font-black uppercase tracking-widest mb-6">
            <Plane size={14} className="animate-pulse" />
            Next Flight Departure Loading
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight leading-tight">
            Ready to <span className="text-shipplix-yellow">Ship from Nigeria to USA</span>?
          </h2>

          <p className="text-base md:text-xl text-slate-200 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Book your package now for this week's express flight batch. Get fast 5-7 days door-to-door delivery with complimentary vacuum sealing and full customs clearance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              as="a" 
              href={URL_USA_BOOK}
              target="_self"
              variant="yellow" 
              className="py-4 px-10 text-xs uppercase tracking-widest font-black shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
            >
              Book Shipment Now
              <ArrowRight size={16} />
            </Button>

            <Button 
              as="a" 
              href={URL_USA_QUOTE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="ghost" 
              className="py-4 px-10 text-xs uppercase tracking-widest font-black border border-white/20 hover:bg-white/10 w-full sm:w-auto"
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
