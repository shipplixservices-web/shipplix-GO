import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  ShieldCheck, 
  Scale, 
  AlertTriangle, 
  Coins, 
  Info, 
  HelpCircle, 
  ChevronDown, 
  FileText, 
  Download, 
  CheckCircle2, 
  Plane, 
  Ship, 
  FileCheck, 
  UserCheck, 
  Settings,
  Workflow,
  Globe,
  Ban
} from 'lucide-react';
import { motion } from 'motion/react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  as: Component = 'button',
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'yellow'; 
  className?: string;
  as?: any;
  [key: string]: any;
}) => {
  const base = "px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-center text-sm";
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-950 shadow-md",
    yellow: "bg-shipplix-yellow text-blue-950 hover:bg-yellow-500 shadow-md",
    outline: "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    ghost: "text-white/80 hover:text-white hover:bg-white/10"
  };
  
  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-24 mb-16 border-b border-slate-100 pb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-slate-900 italic">
        {title}
      </h2>
    </div>
    <div className="text-slate-600 font-medium leading-relaxed text-sm md:text-base space-y-4">
      {children}
    </div>
  </section>
);

export default function EconomyTerms({ onBack }: { onBack: () => void }) {
  // Set SEO Meta tags on mount
  useEffect(() => {
    document.title = "Shipplix Economy Cargo Terms & Conditions | Shipping Policy";
    
    // Find or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Learn how Shipplix Economy Cargo works, including delivery timelines, customer responsibilities, customs information, claims policy, and shipping guidelines before booking your shipment.');
    
    // Add keywords for SEO
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Shipplix Economy Cargo, Economy Shipping Nigeria, Affordable International Shipping, Cargo Terms and Conditions, Shipping Policy, Nigeria to USA Shipping, Nigeria to Canada Shipping, Nigeria to UK Shipping, International Cargo Guide');

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState('about');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sections = [
    { id: 'about', title: 'About Economy Cargo', icon: <Info size={20} /> },
    { id: 'how-it-works', title: 'How Economy Shipping Works', icon: <Workflow size={20} /> },
    { id: 'delivery-estimates', title: 'Delivery Time Estimates', icon: <Clock size={20} /> },
    { id: 'shipment-processing', title: 'Shipment Processing', icon: <Settings size={20} /> },
    { id: 'customer-responsibilities', title: 'Customer Responsibilities', icon: <UserCheck size={20} /> },
    { id: 'customs-duties', title: 'Customs, Duties & Taxes', icon: <Scale size={20} /> },
    { id: 'prohibited-items', title: 'Prohibited & Restricted Items', icon: <Ban size={20} /> },
    { id: 'claims-compensation', title: 'Claims & Compensation Policy', icon: <Coins size={20} /> },
    { id: 'compensation-exclusions', title: 'Compensation Exclusions', icon: <AlertTriangle size={20} /> },
    { id: 'limitation-liability', title: 'Limitation of Liability', icon: <ShieldCheck size={20} /> },
    { id: 'changes-to-terms', title: 'Changes to these Terms', icon: <FileCheck size={20} /> },
    { id: 'faqs', title: 'Frequently Asked Questions', icon: <HelpCircle size={20} /> },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const WHATSAPP_BASE = "https://wa.me/2349168273513?text=";
  const URL_BOOK_ECONOMY = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I'd like to book an Economy Cargo shipment.")}`;
  const URL_DOWNLOAD_GUIDE = `${WHATSAPP_BASE}${encodeURIComponent("Hello Shipplix, I'd like to request the Shipplix Economy Cargo Guide PDF.")}`;

  const faqs = [
    {
      q: "How long does Shipplix Economy Cargo delivery take?",
      a: "Typically, delivery takes 2 to 3 weeks. These timelines are estimates and depend on airline schedules, airport backlogs, customs clearance inspections, and local transit networks. We ship out primarily on Fridays and occasionally on Wednesdays."
    },
    {
      q: "Does Shipplix Economy Cargo include door-to-door delivery?",
      a: "Yes, Economy Cargo includes final doorstep delivery to the recipient in destination countries (USA, UK, Canada, and Europe) after the customs clearance process is fully completed."
    },
    {
      q: "What is the maximum compensation limit for lost shipments?",
      a: "For verified losses under our direct care, Shipplix offers a maximum goodwill compensation limit of ₦50,000 (Fifty Thousand Naira) per affected shipment. It is a fixed goodwill resolution and is not based on actual, declared, or sentimental value."
    },
    {
      q: "What happens if customs seizes or holds my package?",
      a: "Customs authorities have sole jurisdiction over inspections, seizures, or holds. Shipplix is not liable for any customs actions, confiscation, or destruction of items. Compensation does not apply to customs seizures or regulatory reviews."
    },
    {
      q: "Are there items I am strictly forbidden from shipping?",
      a: "Yes. Prohibited items include hazardous or flammable materials, drugs, explosive materials, unpreserved perishables, weapons, currencies, contraband, and undeclared goods. Always check with our team before packaging."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-shipplix-yellow selection:text-shipplix-blue">
      {/* Dynamic Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-950 border-b-4 border-shipplix-yellow text-white py-3 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
            <div className="bg-shipplix-yellow text-blue-950 font-black p-1 rounded-sm text-xl tracking-tighter">SHIPPLIX</div>
            <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest opacity-80 uppercase leading-none">Official Export<br/>Partner</span>
          </div>
          
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-shipplix-yellow transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-16 bg-gradient-to-b from-blue-950 to-blue-900 text-white overflow-hidden">
        {/* Subtle background illustrations & grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-shipplix-yellow/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="grid grid-cols-12 h-full">
            {Array.from({length: 48}).map((_, i) => (
              <div key={i} className="border-r border-b border-white/5 aspect-square"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6 text-shipplix-yellow text-[10px] uppercase font-black tracking-widest">
            <FileText size={12} />
            Official Policy Document
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-4 italic">
            Shipplix Economy Cargo <br/>
            <span className="text-shipplix-yellow">Terms & Conditions</span>
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto font-bold mb-8 uppercase tracking-wider">
            Everything you need to know before booking an Economy Cargo shipment with Shipplix.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs font-black text-white/60 tracking-wider">
            <span>LAST UPDATED: JULY 2026</span>
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></span>
          </div>
        </div>
      </header>

      {/* Disclaimer Box */}
      <div className="bg-amber-50 border-y border-amber-200 py-4 text-center text-amber-900 font-bold text-xs uppercase tracking-wider">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-2">
          <AlertTriangle size={16} className="text-amber-600 flex-shrink-0" />
          <span>This page explains how our Economy Shipping service operates. Acceptance of these Terms is completed during the official booking process.</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sticky Table of Contents */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 pb-2 border-b border-slate-100">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleScrollTo(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2.5 cursor-pointer ${
                      activeSection === section.id 
                        ? 'bg-blue-900 text-white shadow-sm font-black transform translate-x-1' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span className="opacity-80">{section.icon}</span>
                    <span className="truncate">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Detailed Content Panels */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-12 shadow-sm relative overflow-hidden">
              {/* Background watermark decorations */}
              <div className="absolute top-10 right-10 opacity-[0.01] pointer-events-none select-none">
                <Plane size={300} />
              </div>
              <div className="absolute bottom-10 left-10 opacity-[0.01] pointer-events-none select-none">
                <Ship size={300} />
              </div>

              {/* 1. About Economy Cargo */}
              <Section id="about" title="About Economy Cargo" icon={<Info size={20} className="text-blue-900" />}>
                <p>
                  Shipplix Economy Cargo is our most budget-friendly, consolidated shipping service specially tailored for customers who wish to send shipments internationally at highly affordable rates.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-4">
                  <h4 className="font-black uppercase text-xs text-slate-800 tracking-wider mb-2">How consolidation benefits you</h4>
                  <p className="text-xs font-bold text-slate-500 leading-relaxed">
                    By consolidating your goods with packages from other members of our smart export community, we achieve significant bulk shipping discounts from airline partners. We pass these cost-savings directly back to you, offering professional logistics for a fraction of standard premium costs.
                  </p>
                </div>
                <p>
                  This service covers our entire operational process—from safe collection or office drop-offs in our Lagos Hub, export documentation preparation, terminal submission, and airline dispatch, to customs clearance facilitation and door-to-door delivery in destination countries.
                </p>
              </Section>

              {/* 2. How Economy Shipping Works */}
              <Section id="how-it-works" title="How Economy Shipping Works" icon={<Workflow size={20} className="text-blue-900" />}>
                <p>
                  Economy Shipping is highly streamlined to balance cost-efficiency with logistical safety. Our standard operational sequence follows an 8-step quality pipeline:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {[
                    { step: "1", title: "Cargo Collection", desc: "Goods are dropped off at our secure Lagos Hub or collected. Items are weighed, measured, and verified." },
                    { step: "2", title: "Consolidation", desc: "Shipments heading to the same destination are grouped inside durable, high-strength shipping containers." },
                    { step: "3", title: "Export Processing", desc: "Once minimum consolidation capacity is achieved, our logistics specialists compile custom export manifests." },
                    { step: "4", title: "Airline Submission", desc: "Consolidated containers and documents are prepared and handed over to our verified commercial airline partners." },
                    { step: "5", title: "Airline Booking", desc: "The airline plans space, schedules transit, and books the next available cargo hold." },
                    { step: "6", title: "Global Transit", desc: "Aircraft departs Lagos and flies the freight directly to international hub airports." },
                    { step: "7", title: "Customs Clearance", desc: "Our experienced clearance brokers facilitate inspections and clear duties with local import authorities." },
                    { step: "8", title: "Final Doorstep Delivery", desc: "Cargo is transferred to our trusted destination last-mile partners to be delivered directly to the receiver." }
                  ].map((s) => (
                    <div key={s.step} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-900 text-shipplix-yellow font-black text-xs flex items-center justify-center flex-shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <h4 className="font-black uppercase text-[11px] text-slate-900 tracking-wider mb-1">{s.title}</h4>
                        <p className="text-[11px] text-slate-500 font-bold leading-normal">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p>
                  We primarily ship out on <span className="text-slate-950 font-bold underline decoration-shipplix-yellow">Fridays</span> and occasionally on <span className="text-slate-950 font-bold underline decoration-shipplix-yellow">Wednesdays</span>. Documents are prepared and submitted to airlines immediately following consolidation.
                </p>
              </Section>

              {/* 3. Delivery Time Estimates */}
              <Section id="delivery-estimates" title="Delivery Time Estimates" icon={<Clock size={20} className="text-blue-900" />}>
                <p>
                  The estimated delivery timeframe for Shipplix Economy Cargo is **2 to 3 weeks** from Lagos dispatch.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 my-4 flex items-start gap-4">
                  <Clock className="text-blue-900 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-black uppercase text-xs text-blue-900 tracking-wider mb-1">Timeline Disclaimer</h4>
                    <p className="text-xs font-bold text-blue-800 leading-normal">
                      All delivery timelines are non-guaranteed estimates. Because economy transit relies on consolidated slots, timelines can expand or contract based on factors outside of Shipplix’s immediate control.
                    </p>
                  </div>
                </div>
                <p>
                  Delivery timelines may be actively affected or delayed by the following external factors:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-4 text-xs font-bold uppercase tracking-tight text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-900 flex-shrink-0" />
                    Customs clearance & import inspection backlogs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-900 flex-shrink-0" />
                    Airline commercial flight scheduling changes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-900 flex-shrink-0" />
                    Adverse meteorological and weather conditions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-900 flex-shrink-0" />
                    Public holidays or local transport strikes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-900 flex-shrink-0" />
                    Strict security screenings at international borders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-900 flex-shrink-0" />
                    Government or civil aviation regulatory reviews
                  </li>
                </ul>
              </Section>

              {/* 4. Shipment Processing */}
              <Section id="shipment-processing" title="Shipment Processing" icon={<Settings size={20} className="text-blue-900" />}>
                <p>
                  Submission of the official Shipplix Economy Cargo Booking Form and acceptance of these Terms & Conditions are absolute prerequisites before shipment processing can begin.
                </p>
                <p>
                  All packages received at our offices will remain in "Pending" status in our warehouses and will not enter consolidation queues until the customer has completely furnished all receiver data, packing declarations, and verified their booking details.
                </p>
                <p>
                  If a customer declines to complete the booking workflow or fails to accept these Terms & Conditions within **14 calendar days** of cargo receipt, Shipplix reserves the right to suspend processing, refuse export clearance, cancel the order, and return or release the shipment to the sender.
                </p>
                <p>
                  In such cases, any shipping fees already paid will be refunded minus handling fees, terminal storage, repackaging, administration, and transportation costs already incurred by Shipplix on behalf of the customer.
                </p>
              </Section>

              {/* 5. Customer Responsibilities */}
              <Section id="customer-responsibilities" title="Customer Responsibilities" icon={<UserCheck size={20} className="text-blue-900" />}>
                <p>
                  When you submit any package to Shipplix for Economy Cargo processing, you explicitly covenant and confirm that:
                </p>
                <div className="space-y-3 my-4">
                  {[
                    "All shipment information provided during booking (including item description, weights, quantities, values, and dimensions) is 100% accurate.",
                    "The recipient's full legal name, active delivery address, working telephone number, and email address are correct and verified.",
                    "All package contents have been fully, honestly, and correctly declared in the manifest. No undeclared or misdeclared goods are hidden inside.",
                    "No prohibited, illegal, hazardous, hazardous-waste, radioactive, flammable, restricted, or contraband goods are contained in any portion of the cargo.",
                    "You accept full financial responsibility for any fees, penalties, legal costs, or return transport expenses caused by packing inaccurate, illegal, or restricted items."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 items-start bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs font-bold text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center flex-shrink-0 font-black text-[10px]">
                        {i + 1}
                      </div>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* 6. Customs, Duties & Taxes */}
              <Section id="customs-duties" title="Customs, Duties & Taxes" icon={<Scale size={20} className="text-blue-900" />}>
                <p>
                  International shipments sent via consolidated airfreight are subjected to stringent regulatory oversight by origin and destination custom offices.
                </p>
                <p>
                  All shipments may be subject to customs duties, tariffs, VAT, processing taxes, quarantine fees, import permits, container inspection charges, terminal warehousing, or other government-imposed statutory assessments at the port of entry.
                </p>
                <div className="bg-blue-55 border border-blue-100 bg-blue-50/50 rounded-xl p-5 my-4">
                  <p className="text-xs font-black uppercase text-blue-950 mb-1">Receiver Obligation</p>
                  <p className="text-xs font-bold text-slate-500 leading-normal">
                    Unless explicitly agreed in writing prior to dispatch and specified on the waybill, any customs clearance duties, import tariffs, and municipal taxes are the exclusive legal and financial responsibility of the receiver or cargo owner. Shipplix is not liable for packages abandoned due to unpaid taxes.
                  </p>
                </div>
              </Section>

              {/* 7. Prohibited & Restricted Items */}
              <Section id="prohibited-items" title="Prohibited & Restricted Items" icon={<Ban size={20} className="text-blue-900" />}>
                <p>
                  To protect our flight manifests, satisfy aviation laws, and maintain our stellar customs clearance rating, Shipplix enforces a strict zero-tolerance policy against prohibited materials.
                </p>
                <p className="font-bold text-red-600 mb-4 text-xs uppercase tracking-wide">
                  ⚠️ PACKING ANY OF THESE ITEMS WILL LEAD TO IMMEDIATE DISPATCH FORFEITURE, CUSTOMS CONFISCATION, AND POTENTIAL CIVIL OR CRIMINAL PROSECUTION:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { cat: "Hazardous & Flammable", items: "Aerosols, perfumes, lithium-ion batteries, matchboxes, compressed gas canisters, gasoline, or combustible spirits." },
                    { cat: "Perishables without Preservation", items: "Fresh, unpreserved meats, raw fish, unsterilized dairy, or items prone to rapid decay during transit." },
                    { cat: "Chemicals & Drugs", items: "Undeclared pharmaceuticals, narcotic substances, prescription medications without legal permits, or unregulated powders." },
                    { cat: "Weapons & Explosives", items: "Firearms, ammunition, tactical knives, fireworks, signal flares, toy weapon replicas, or combat devices." },
                    { cat: "Currencies & High Valuables", items: "Physical banknotes, precious gold/silver bullion, gemstone jewelry, sovereign bonds, or negotiable instruments." },
                    { cat: "Contraband & Protected Goods", items: "Counterfeit apparel, illegal wildlife derivatives, ivory, or items strictly banned by the destination nation's border control." }
                  ].map((p, i) => (
                    <div key={i} className="p-4 rounded-xl border border-red-100 bg-red-50/20">
                      <div className="flex items-center gap-2 mb-2 text-red-800">
                        <Ban size={14} />
                        <h4 className="font-black uppercase text-[10px] tracking-wider">{p.cat}</h4>
                      </div>
                      <p className="text-[11px] font-bold text-slate-500 leading-normal">{p.items}</p>
                    </div>
                  ))}
                </div>
              </Section>

              {/* 8. Claims & Compensation Policy */}
              <Section id="claims-compensation" title="Claims & Compensation Policy" icon={<Coins size={20} className="text-blue-900" />}>
                <p>
                  Shipplix operates under strict safety protocols to ensure your cargo is handled securely. However, in extremely rare cases of transit anomalies where a shipment is verified as lost, we apply our standard claims process:
                </p>
                <p>
                  If an issue or total loss is reported, Shipplix will perform an exhaustive security review of our warehouse camera files, weight receipts, transport manifests, airline transfer sheets, and local delivery handovers before issuing a determination.
                </p>

                <div className="my-6 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-blue-900 text-white p-5">
                    <h4 className="font-black uppercase text-xs tracking-wider text-shipplix-yellow">Compensation Policy Details</h4>
                  </div>
                  <div className="p-6 bg-slate-50 space-y-4 text-xs font-bold text-slate-600">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-blue-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-900 font-black uppercase">Maximum Compensation Limit: </span>
                        Approved claims for lost freight are subject to a strict maximum compensation cap of <span className="text-blue-900 font-black underline decoration-shipplix-yellow decoration-2">₦50,000 (Fifty Thousand Naira)</span> per affected shipment.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-blue-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-900 font-black uppercase">Goodwill Nature: </span>
                        This compensation is provided as a fixed goodwill resolution and is NOT an insurance product. It is not calculated based on, nor does it cover, the actual purchase price, declared valuation, replacement market cost, or sentimental value of any contents inside.
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              {/* 9. Compensation Exclusions */}
              <Section id="compensation-exclusions" title="Compensation Exclusions" icon={<AlertTriangle size={20} className="text-blue-900" />}>
                <p>
                  Compensation strictly DOES NOT apply, and Shipplix will bear no financial or logistical liability, for issues, losses, seizures, or delays arising from:
                </p>
                <ul className="space-y-3 mt-4 text-xs font-bold text-slate-700">
                  {[
                    "Customs seizure, detention, opening, inspection, confiscation, destruction, or quarantine by customs authorities in Nigeria or destination countries.",
                    "Enforcement actions by local or international government agencies, aviation security, or border safety authorities.",
                    "Inclusion of prohibited, dangerous, illegal, undeclared, restricted, or misdeclared items inside the customer’s package.",
                    "Incorrect or incomplete recipient or sender details (such as wrong names, ZIP/postal codes, phone numbers, or addresses) provided during booking.",
                    "Transit delays triggered by custom inspections, airline schedule modifications, security checks, port backlogs, or regulatory reviews.",
                    "Damage, spilling, melting, leaking, or aesthetic degradation of packages resulting from flight vibrations, temperature variations, or improper initial packaging by the sender.",
                    "Natural disasters, acts of God, extreme meteorological events, civil unrest, labor strikes, pandemics, wars, or other force majeure events beyond Shipplix’s direct control."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <Ban size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* 10. Limitation of Liability */}
              <Section id="limitation-liability" title="Limitation of Liability" icon={<ShieldCheck size={20} className="text-blue-900" />}>
                <p>
                  To the maximum extent permitted by applicable law, Shipplix Export Logistics shall not be liable to any customer, sender, recipient, or third-party claimant for any indirect, incidental, special, punitive, exemplary, or consequential damages.
                </p>
                <p>
                  This limitation includes but is not limited to: loss of anticipated business revenue, loss of business profit, loss of market opportunity, loss of contract, or damage to business reputation arising out of or related to shipment delay, total loss, or customs confiscation.
                </p>
                <p>
                  Under all circumstances, Shipplix’s aggregate liability for any single shipment shall never exceed the maximum compensation limit set forth in Section 8. Senders seeking full coverage of high-value shipments are encouraged to secure independent private cargo insurance.
                </p>
              </Section>

              {/* 11. Changes to these Terms */}
              <Section id="changes-to-terms" title="Changes to these Terms" icon={<FileCheck size={20} className="text-blue-900" />}>
                <p>
                  Shipplix Export Logistics reserves the absolute right, at its sole discretion, to modify, update, revise, or replace any portion of these Terms & Conditions at any time.
                </p>
                <p>
                  Any such updates or modifications will become immediately active and legally binding upon being published on the Shipplix official website.
                </p>
                <p>
                  The version of these Terms & Conditions in effect at the exact time a shipment is collected at our Lagos hub will govern that specific transaction. Senders are highly encouraged to review this page prior to making any new shipment booking.
                </p>
              </Section>

              {/* 12. Frequently Asked Questions */}
              <Section id="faqs" title="Frequently Asked Questions" icon={<HelpCircle size={20} className="text-blue-900" />}>
                <div className="space-y-3 mt-4">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="border border-slate-100 rounded-xl overflow-hidden transition-all bg-slate-50/50 hover:bg-slate-50"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-5 text-left font-black uppercase text-xs text-slate-800 tracking-wider cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown 
                          size={16} 
                          className={`text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {openFaq === idx && (
                        <div className="px-5 pb-5 text-xs text-slate-500 font-bold leading-relaxed border-t border-slate-100/55 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Section>

              {/* 13. Important Notice Section (highlighted info box) */}
              <div className="mt-12 p-8 bg-blue-900 text-white rounded-2xl relative overflow-hidden shadow-md">
                <div className="relative z-10 flex flex-col md:flex-row gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-shipplix-yellow text-blue-950 flex items-center justify-center flex-shrink-0 font-black text-xl shadow-lg">
                    !
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-shipplix-yellow mb-2 italic">
                      Important Notice
                    </h3>
                    <p className="text-xs font-bold leading-relaxed text-white/95 mb-4">
                      This page is provided strictly for customer information, guidance, and complete transactional transparency. 
                    </p>
                    <p className="text-xs font-bold leading-relaxed text-white/95">
                      The official acceptance of the Shipplix Economy Cargo Terms & Conditions takes place only during the official booking process through the Shipplix booking form. Senders are highly encouraged to thoroughly review this reference page before confirming their booking.
                    </p>
                  </div>
                </div>
                {/* Airplane background overlay */}
                <Plane className="absolute -bottom-8 -right-8 text-white/5 w-48 h-48 rotate-[-15deg] pointer-events-none" />
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Footer Call To Action */}
      <section className="py-20 bg-blue-950 text-white relative overflow-hidden border-t-4 border-shipplix-yellow">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15)_0%,transparent_60%)]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
          <div className="w-16 h-16 bg-shipplix-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-shipplix-yellow/20 shadow-xl">
            <Ship className="text-shipplix-yellow" size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">
            Ready to Ship?
          </h2>
          <p className="text-sm md:text-base text-white/80 font-bold mb-10 uppercase tracking-widest leading-relaxed">
            Book your Economy Cargo shipment with Shipplix today. During the booking process, you will be asked to review and accept our official Economy Cargo Terms & Conditions before your shipment is processed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as="a" 
              href={URL_BOOK_ECONOMY} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="yellow" 
              className="py-5 px-10 uppercase tracking-widest text-xs font-black shadow-[0_20px_40px_-15px_rgba(250,204,21,0.2)] hover:scale-105"
            >
              Book Economy Shipment
              <ArrowRight size={14} />
            </Button>
            <Button 
              as="a" 
              href={URL_DOWNLOAD_GUIDE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="ghost" 
              className="py-5 px-10 uppercase tracking-widest text-xs font-black border border-white/20 hover:bg-white/10"
            >
              Download Economy Cargo Guide (PDF)
              <Download size={14} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer copyright */}
      <footer className="bg-slate-900 text-slate-500 py-8 border-t border-slate-800 text-center">
        <div className="container mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} SHIPPLIX EXPORT LOGISTICS. ALL RIGHTS RESERVED. MADE IN LAGOS.
          </p>
        </div>
      </footer>
    </div>
  );
}
