import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  User, 
  Users, 
  Plane, 
  Award, 
  Globe, 
  Coins, 
  MapPin, 
  FileCheck 
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
  const base = "px-6 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-center text-sm cursor-pointer";
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-950 shadow-md",
    yellow: "bg-amber-400 text-blue-950 hover:bg-amber-500 shadow-md",
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

export default function TrustPage() {
  const reasons = [
    {
      title: "Real-Time Tracking",
      desc: "Know exactly where your goods are — from Lagos departures to UK arrivals.",
    },
    {
      title: "No Hidden Costs",
      desc: "What we quote is what you pay. No stories, no customs surprises.",
    },
    {
      title: "Video Verification",
      desc: "We record your goods being packed. You see the proof before it flies.",
    },
    {
      title: "Fully Insured",
      desc: "Real insurance for your peace of mind. Your investment is protected.",
    },
    {
      title: "Expert Customs Clearance",
      desc: "Our dedicated aviation customs handlers ensure quick, zero-seizure releases.",
    },
    {
      title: "Secure Lagos Hub",
      desc: "A fully staffed warehouse facility to safely receive, pack, and manifest your cargo.",
    }
  ];

  const stats = [
    { val: "3M+", label: "Potential Customers in UK" },
    { val: "£450", label: "Avg. Weekly Spend per Diaspora Family" },
    { val: "7 Days", label: "From Lagos Hub to London Doorstep" },
    { val: "99.4%", label: "Customs Clearance Success Rate" }
  ];

  const testimonials = [
    {
      name: "Mrs. Adebayo",
      role: "Fashion Vendor",
      text: "I sent 50kg of Egusi to London. No stories, no customs issues. I already made my money back triple!",
      tag: "UK EXPORT"
    },
    {
      name: "Emeka O.",
      role: "Wholesaler",
      text: "I was scared of scams, but Shipplix showed me my goods in the warehouse via video. Now I ship weekly.",
      tag: "CANADA EXPORT"
    },
    {
      name: "Ngozi A.",
      role: "Retailer",
      text: "My account in Dollars is growing. My sister abroad sells my palm oil easily. Best logistic partner ever.",
      tag: "USA EXPORT"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-amber-400 selection:text-blue-950 pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-16 md:py-20 relative overflow-hidden border-b-4 border-amber-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="bg-amber-400 text-blue-950 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block font-mono">
            Security & Reputation Registry
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-none uppercase tracking-tighter mb-4">
            Why Vendors <span className="text-amber-400">Trust Shipplix</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            We understand that shipping your hard-earned merchandise abroad is a major leap of faith. That's why we operate under a high-transparency, fully-insured safety model.
          </p>
        </div>
      </section>

      {/* Core Trust Factors */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-black text-blue-900 mb-6 uppercase tracking-tighter leading-none">
                A High-Transparency <br/><span className="text-amber-500">Shipping Model</span>
              </h2>
              <p className="text-sm text-slate-600 font-medium mb-8 leading-relaxed">
                Logistics shouldn't feel like a gamble. We have done away with hidden charges, unnotified airport delays, and the typical silence of traditional cargo agents. With Shipplix, you are in complete control of your export inventory.
              </p>
              
              <div className="bg-blue-900 text-white p-6 rounded-2xl relative overflow-hidden border border-blue-950 shadow-lg">
                <div className="relative z-10">
                  <div className="text-amber-400 font-black text-3xl mb-1">99.4%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-70">Aviation Customs Clearance Success</div>
                </div>
                <Plane className="absolute -bottom-4 -right-4 text-white/5 w-32 h-32 rotate-12" />
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <div key={i} className="p-6 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors bg-slate-50/30">
                  <CheckCircle2 size={24} className="text-emerald-600 mb-3" />
                  <h3 className="text-sm font-black mb-2 uppercase tracking-tight text-slate-900">{r.title}</h3>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diaspora Statistics Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-amber-400 p-8 md:p-12 rounded-3xl border-4 border-blue-900 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 leading-none tracking-tighter uppercase">
                The Diaspora Market <br/><span className="bg-blue-900 text-amber-400 px-2 inline-block mt-1">Is Waiting</span>
              </h2>
              <p className="text-blue-950 font-bold text-base md:text-lg mb-8 italic">
                "Your people abroad are ready to buy... the question is — are you ready to supply?"
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="border-b border-blue-900/10 pb-2">
                    <div className="text-2xl font-black text-blue-900">{s.val}</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-blue-900/60 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 bg-white/40 p-8 rounded-2xl border border-white/40 text-center relative z-10">
              <p className="text-blue-900 font-black text-lg mb-4 leading-snug">
                Nigerians in London, Houston, and Toronto spend millions on native goods every month. Take your business international.
              </p>
              <Button 
                as="a" 
                href="https://wa.me/2349168273513" 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary" 
                className="mx-auto w-full py-4 text-xs tracking-widest uppercase mb-4"
              >
                Inquire Global Export Rates
              </Button>
              <p className="text-[9px] font-black uppercase text-blue-900/50">Grow your foreign exchange reserves</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-blue-950">
              Trusted By Ambition Merchants
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Read real outcomes from verified business exporters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-blue-900 transition-colors">
                <div>
                  <div className="bg-blue-100 text-blue-900 text-[8px] font-black uppercase px-2 py-0.5 rounded inline-block mb-4">
                    {t.tag}
                  </div>
                  <p className="text-xs font-bold text-slate-700 leading-relaxed italic mb-6">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 border border-slate-300">
                    <User size={16} className="text-slate-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{t.name}</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Guard Guarantee */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl mb-6">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-blue-950 uppercase tracking-tighter mb-4">
            Our 100% Anti-Loss Cargo Insurance
          </h2>
          <p className="text-xs text-slate-600 font-medium max-w-xl mx-auto mb-8 leading-relaxed">
            In the highly unlikely event that your package is lost during air transit, delayed beyond standard limits, or seized due to administrative aircraft manifests, Shipplix provides real, cash-backed compensation based on declared invoices.
          </p>

          <div className="inline-flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <Award size={16} className="text-amber-500" />
              Full Declared Value Cover
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <FileCheck size={16} className="text-amber-500" />
              Zero Hassle Claims Files
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <Coins size={16} className="text-amber-500" />
              Transparent Payout Cycles
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_40%)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
            Join 1,000+ smart Nigerian exporters
          </h2>
          <p className="text-sm text-slate-300 font-medium mb-8 uppercase tracking-wider">
            Your cargo is protected, verified, and delivered. Guaranteed.
          </p>
          <Button 
            as="a"
            href="https://wa.me/2349168273513" 
            target="_blank" 
            rel="noopener noreferrer"
            variant="yellow"
            className="mx-auto px-8 py-4 uppercase text-xs tracking-widest font-black"
          >
            Start Shipping Safely
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
}
