import React, { useState, useRef } from 'react';
import { 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  AlertCircle, 
  PhoneCall, 
  ChevronDown, 
  Copy, 
  Share2, 
  Lock, 
  Check,
  Award,
  DollarSign,
  TrendingUp,
  MapPin,
  ClipboardList,
  ShieldAlert,
  Smartphone,
  CheckCircle,
  FileCheck2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Reusable Button Component Matching the Site's Theme
const Button = ({ 
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

export default function RevenuePartnerPage() {
  // Navigation / Scrolling Refs
  const registerRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // State for Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    state: '',
    city: '',
    occupation: '',
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [generatedPartner, setGeneratedPartner] = useState<{
    name: string;
    partnerId: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form Validation and ID Generation
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

  const generateRandomID = () => {
    // Format: SP-7X4K9 (SP- followed by 5 random uppercase characters and numbers)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomPart = '';
    for (let i = 0; i < 5; i++) {
      randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `SP-${randomPart}`;
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) errors.phone = 'Phone Number is required';
    if (!formData.whatsapp.trim()) errors.whatsapp = 'WhatsApp Number is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!formData.city.trim()) errors.city = 'City is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Generate Partner ID
    const generatedId = generateRandomID();

    /* 
      =========================================
      PLACEHOLDER: PARTNER DATABASE INTEGRATION
      =========================================
      Future developers can insert API call here:
      
      const response = await fetch('/api/partners/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          state: formData.state,
          city: formData.city,
          occupation: formData.occupation,
          partnerId: generatedId
        })
      });
      if (response.ok) { ... }
    */

    setGeneratedPartner({
      name: formData.fullName,
      partnerId: generatedId
    });

    // Clear form errors
    setFormErrors({});
  };

  const handleCopyCode = () => {
    if (!generatedPartner) return;
    navigator.clipboard.writeText(generatedPartner.partnerId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pre-filled WhatsApp message URL
  const getWhatsAppActivationUrl = () => {
    if (!generatedPartner) return '#';
    const message = `Hello Shipplix,\n\nI have completed my Revenue Partner registration.\n\nMy Name:\n${generatedPartner.name}\n\nMy Partner ID:\n${generatedPartner.partnerId}\n\nPlease activate my Revenue Partner account.`;
    return `https://wa.me/2349168273513?text=${encodeURIComponent(message)}`;
  };

  const getDirectChatUrl = () => {
    const message = "Hello Shipplix, I am interested in learning more about the Revenue Partner Program.";
    return `https://wa.me/2349168273513?text=${encodeURIComponent(message)}`;
  };

  // Why Join Points
  const benefits = [
    { text: "Earn commission on every verified shipment referred through your Partner ID." },
    { text: "The more customers you refer, the more you can earn." },
    { text: "No limit to your earning potential." },
    { text: "Work from anywhere." },
    { text: "Flexible schedule." },
    { text: "No registration fee." },
    { text: "Free marketing materials." },
    { text: "WhatsApp support." }
  ];

  // How It Works Steps
  const steps = [
    { num: "01", title: "Register as a Partner", desc: "Register as a Shipplix Revenue Partner using our quick online form." },
    { num: "02", title: "Get Your Partner ID", desc: "Generate your unique Partner ID instantly upon registration." },
    { num: "03", title: "Share Your ID", desc: "Share your unique Partner ID with your network of sellers, business owners, and customers." },
    { num: "04", title: "Customers Book", desc: "Customers enter your unique Partner ID when booking their international shipment." },
    { num: "05", title: "Cargo Verification", desc: "Shipplix receives, verifies, and weighs the cargo at our office." },
    { num: "06", title: "Payment Confirmation", desc: "The customer's shipment payment is confirmed by the Shipplix team." },
    { num: "07", title: "Commission Calculated", desc: "Your commission is automatically calculated using the verified weight and details." },
    { num: "08", title: "Fast Payout", desc: "Your calculated commission is credited and paid out directly to your account." }
  ];

  // FAQ Content
  const faqs = [
    {
      q: "Do I pay to join?",
      a: "No. Registration is completely free. We do not charge any onboarding or registration fee."
    },
    {
      q: "Can I work from anywhere?",
      a: "Yes. You can share your Partner ID and refer customers from any state or country. There are no geographical boundaries."
    },
    {
      q: "Can I refer unlimited customers?",
      a: "Yes. There are absolutely no limits on the number of customers you can refer or the amount of commission you can earn."
    },
    {
      q: "When do I receive my commission?",
      a: "Commissions are processed and paid out after Shipplix successfully confirms the customer's payment, verifies the cargo at our Lagos office, and completes the final weight measurements."
    },
    {
      q: "Do I need logistics experience?",
      a: "No prior logistics or freight experience is required. We handle all cargo weighing, customs clearance, and shipping while you focus on referring customers."
    },
    {
      q: "Can businesses join?",
      a: "Yes, absolutely! Individuals, small businesses, digital influencers, content creators, freight agents, and marketers are all welcome to register."
    }
  ];

  return (
    <div className="bg-shipplix-bg pt-20">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-shipplix-blue text-white overflow-hidden border-b-4 border-shipplix-yellow">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="bg-[#FEB919] text-[#032B73] text-[10px] md:text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest font-mono inline-block mb-6 shadow-md">
              💰 Extra Income Network
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
              Become a Shipplix <span className="text-[#FEB919]">Revenue Partner</span>
            </h1>
            <p className="text-base md:text-xl text-slate-200 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Turn your network into an additional source of income by referring customers who ship with Shipplix. No registration fee. Work from anywhere. No logistics experience required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection(registerRef)} 
                variant="yellow" 
                className="w-full sm:w-auto px-8 py-4 font-black uppercase tracking-wider text-xs"
              >
                Become a Revenue Partner
              </Button>
              <Button 
                onClick={() => scrollToSection(howItWorksRef)} 
                variant="ghost" 
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold border border-white/20 hover:bg-white/10 uppercase tracking-wider"
              >
                Learn How It Works
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-white aspect-square"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-[10px] font-black px-3 py-1.5 bg-blue-50 rounded uppercase tracking-widest font-mono">
              The Partner Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-950 mt-3 mb-4 tracking-tighter">
              Why Join Shipplix?
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider max-w-xl mx-auto">
              Build passive revenue leveraging Africa's fastest-growing export logistics provider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-[#FEB919] transition-all hover:shadow-md flex items-start gap-4"
              >
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-slate-800 font-bold leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section (Timeline) */}
      <section ref={howItWorksRef} className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-[10px] font-black px-3 py-1.5 bg-blue-50 rounded uppercase tracking-widest font-mono">
              Step-by-Step Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-950 mt-3 mb-4 tracking-tighter">
              How It Works
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider max-w-xl mx-auto">
              A transparent, streamlined process from registration to payouts.
            </p>
          </div>

          <div className="relative border-l border-slate-300 ml-4 md:ml-8 pl-8 md:pl-12 space-y-10 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                {/* Bullet badge icon */}
                <span className="absolute -left-[50px] md:-left-[66px] top-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-900 border-4 border-slate-50 text-[#FEB919] font-black text-xs font-mono shadow-md">
                  {step.num}
                </span>
                
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-sm md:text-base font-black uppercase text-blue-950 mb-1.5 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Important Information Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-50 border border-blue-200 rounded-3xl p-6 md:p-8 max-w-3xl mx-auto flex gap-4 items-start shadow-sm"
          >
            <div className="bg-blue-100 p-3 rounded-2xl text-blue-900 flex-shrink-0">
              <AlertCircle size={24} />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-black uppercase text-blue-950 mb-3 tracking-tight">
                Important Information
              </h4>
              <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider mb-3">
                Commission is calculated only after:
              </p>
              <ul className="space-y-2 text-xs text-slate-600 font-medium mb-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#FEB919] text-base">•</span> Customer payment has been confirmed.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FEB919] text-base">•</span> Shipment has arrived at the Shipplix office.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FEB919] text-base">•</span> Shipment weight has been verified by Shipplix.
                </li>
              </ul>
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 bg-white/60 inline-block px-3 py-1 rounded border border-slate-100">
                This process ensures fairness, transparency and prevents fraud.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section ref={registerRef} className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-[10px] font-black px-3 py-1.5 bg-blue-50 rounded uppercase tracking-widest font-mono">
              Onboard Instantly
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-950 mt-3 mb-4 tracking-tighter">
              Revenue Partner Registration
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider max-w-xl mx-auto">
              Fill in your correct details to generate your official, lifelong Partner ID.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 shadow-lg max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {!generatedPartner ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleRegister} 
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-600 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-900 shadow-sm"
                      />
                      {formErrors.fullName && (
                        <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wide">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., 08012345678"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-900 shadow-sm"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wide">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-600 mb-1.5">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="e.g., 08012345678"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-900 shadow-sm"
                      />
                      {formErrors.whatsapp && (
                        <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wide">{formErrors.whatsapp}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-600 mb-1.5">
                        Occupation (Optional)
                      </label>
                      <input 
                        type="text" 
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        placeholder="e.g., Merchant, Creator"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-900 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-600 mb-1.5">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Lagos State"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-900 shadow-sm"
                      />
                      {formErrors.state && (
                        <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wide">{formErrors.state}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-slate-600 mb-1.5">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Ikeja"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:border-blue-900 shadow-sm"
                      />
                      {formErrors.city && (
                        <p className="text-red-500 text-[10px] font-bold mt-1 uppercase tracking-wide">{formErrors.city}</p>
                      )}
                    </div>
                  </div>



                  {/* 
                    ========================================
                    PLACEHOLDER: CLIENT-SIDE AUTH INDICATOR
                    ========================================
                    Can be expanded with Google/Facebook auth or OAuth systems in the future.
                  */}
                  <div className="pt-4 border-t border-slate-200">
                    <Button 
                      type="submit"
                      variant="yellow"
                      className="w-full text-xs font-black uppercase tracking-widest py-4 rounded-xl"
                    >
                      Generate My Partner ID
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="generated"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-950 uppercase mb-1">Congratulations!</h3>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Welcome to the Shipplix Revenue Partner Program.
                    </p>
                  </div>

                  {/* Generated ID Card */}
                  <div className="bg-white border-2 border-dashed border-slate-200 p-6 rounded-2xl relative shadow-sm max-w-sm mx-auto overflow-hidden">
                    <span className="absolute top-2 right-2 bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded">
                      Lifelong Badge
                    </span>
                    
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">Partner Name</p>
                    <p className="text-base font-black text-slate-900 uppercase mb-4">{generatedPartner.name}</p>

                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">Your Partner ID</p>
                    <div className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 mb-2">
                      <span className="text-xl font-black font-mono tracking-widest text-blue-950 select-all">{generatedPartner.partnerId}</span>
                      <button 
                        onClick={handleCopyCode} 
                        className="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-slate-100 transition-colors"
                        title="Copy Partner ID"
                      >
                        {copied ? <Check className="text-emerald-500" size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                    {copied && (
                      <p className="text-emerald-600 text-[9px] font-black uppercase tracking-wider">Copied to Clipboard!</p>
                    )}
                  </div>

                  {/* Highlighted Instruction Messages */}
                  <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl max-w-md mx-auto text-left space-y-2.5">
                    <p className="text-amber-800 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                      <AlertCircle size={14} className="text-amber-600" /> Action Required: Save this ID
                    </p>
                    <p className="text-slate-700 text-[11px] font-bold leading-normal">
                      📌 <span className="font-black text-slate-950">Please take a screenshot or save this page.</span> You will need your Partner ID whenever referring customers to Shipplix.
                    </p>
                    <p className="text-slate-700 text-[11px] font-bold leading-normal">
                      📌 Customers must enter this Partner ID during shipment booking for commissions to be credited correctly.
                    </p>
                  </div>

                  {/* WhatsApp Activation Button */}
                  <div className="pt-4 border-t border-slate-200 max-w-md mx-auto">
                    <a 
                      href={getWhatsAppActivationUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase text-xs tracking-widest py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <Smartphone size={16} />
                      Activate My Partner Account
                    </a>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">
                      Launches WhatsApp with pre-filled ID activation instructions.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-[10px] font-black px-3 py-1.5 bg-blue-50 rounded uppercase tracking-widest font-mono">
              Have Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-950 mt-3 mb-4 tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Answers to common queries about the Revenue Partner program.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left p-5 font-black uppercase text-xs md:text-sm text-blue-950 tracking-tight hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-slate-500 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-500 font-medium leading-relaxed border-t border-slate-100">
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

      {/* Final Call to Action */}
      <section className="py-20 bg-blue-950 text-white relative overflow-hidden border-t-4 border-shipplix-yellow">
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
            Start Building an Additional <br className="hidden md:block" /> Income with Shipplix
          </h2>
          <p className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wider mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of future Shipplix Revenue Partners and start earning by connecting customers with reliable international shipping services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection(registerRef)} 
              variant="yellow" 
              className="w-full sm:w-auto px-8 py-4 font-black uppercase tracking-wider text-xs"
            >
              Become a Revenue Partner
            </Button>
            <a 
              href={getDirectChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase text-xs tracking-wider py-4 px-8 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
            >
              <PhoneCall size={14} />
              Chat with Shipplix on WhatsApp
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-white aspect-square"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Disclaimers & Notes */}
      <section className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-[10px] font-medium leading-relaxed">
        <div className="container mx-auto px-6 max-w-5xl space-y-6">
          <p className="text-center text-[9px] font-black uppercase tracking-widest text-slate-500">
            Shipplix reserves the right to update the Revenue Partner Program, commission structure, and terms as the program grows. Any changes will be communicated to registered partners in advance.
          </p>
        </div>
      </section>
    </div>
  );
}
