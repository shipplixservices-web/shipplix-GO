import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Truck, 
  Package, 
  Globe, 
  Clock, 
  Layers, 
  ShieldCheck, 
  FileText, 
  Compass, 
  Video 
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

export default function ProcessingPage() {
  const steps = [
    {
      step: "01",
      title: "Lagos Hub Drop-Off or Pickup",
      desc: "Deliver your boxed or loose goods directly to our state-of-the-art Lagos warehouse. Don't live in Lagos? Request our dispatch riders to pick up your packages from your location effortlessly.",
      icon: <Truck size={24} className="text-blue-900" />,
      reassurance: "Home pickups available"
    },
    {
      step: "02",
      title: "Expert Packaging & Custom Sealing",
      desc: "Our export specialists inspect, measure, weigh, and repack your cargo. Heavily scented items are triple vacuum-sealed. Liquids are reinforced to withstand flight pressure. You receive real-time video proof.",
      icon: <Package size={24} className="text-blue-900" />,
      reassurance: "Triple vacuum sealed"
    },
    {
      step: "03",
      title: "Aviation Customs & Manifesting",
      desc: "We compile all federal paperwork, export licenses, customs declarations, and commercial invoices. Goods are organized into structured flight manifests for secure, official air transport clearance.",
      icon: <FileText size={24} className="text-blue-900" />,
      reassurance: "Hassle-free declarations"
    },
    {
      step: "04",
      title: "Real-Time Tracking & Live Manifests",
      desc: "As the flight departs, you receive a direct tracking link and our unique live flight manifest file showing your waybill registry. Track your cargo from Departure to destination port clearance.",
      icon: <Globe size={24} className="text-blue-900" />,
      reassurance: "100% Transparency"
    },
    {
      step: "05",
      title: "Smooth Last-Mile Doorstep Delivery",
      desc: "Upon arrival, our international logistics partners manage swift local customs release and hand over your boxes to domestic delivery couriers. Safely deposited directly at your doorstep.",
      icon: <CheckCircle2 size={24} className="text-blue-900" />,
      reassurance: "No customs stress"
    }
  ];

  const batches = [
    { day: 'Monday - Tuesday', activity: 'Lagos Hub Consolidation', details: 'Perfect time to drop off heavy foodstuffs and business stock.' },
    { day: 'Wednesday', activity: 'Export Packing & Security Scan', details: 'All packages are weighed, vacuum sealed, and security scanned.' },
    { day: 'Thursday', activity: 'Customs Clearance at MMIA Airport', details: 'Export manifests finalized with Federal Customs Aviation Division.' },
    { day: 'Friday - Saturday', activity: 'Weekly Flight Departure', details: 'Aircraft departs Lagos. Live manifest file shared in real-time.' },
    { day: 'Monday - Tuesday', activity: 'Destination Customs & Delivery', details: 'Local clearance and home delivery across UK, USA, and Canada.' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-amber-400 selection:text-blue-950 pt-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-16 md:py-20 relative overflow-hidden border-b-4 border-amber-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="bg-amber-400 text-blue-950 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block font-mono">
            Full-Spectrum Processing Workflow
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-none uppercase tracking-tighter mb-4">
            How Shipping <span className="text-amber-400">Works</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            A highly optimized, step-by-step export workflow from Lagos Hub drop-offs directly to London, New York, or Toronto doorsteps. No delays. No secrets.
          </p>
        </div>
      </section>

      {/* Stepper Timeline */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black uppercase tracking-tight text-blue-950">
              The 5-Step Export Journey
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Fully tracked. Zero customs stress for vendors.
            </p>
          </div>

          <div className="space-y-12 relative before:absolute before:left-6 md:before:left-1/2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                {/* Visual Icon circle */}
                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center font-black border-4 border-white shadow-md z-10 text-sm">
                  {step.step}
                </div>
                
                {/* Content block left or right */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-right md:pr-10' : 'md:order-last md:pl-10'}`}>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-900 transition-colors">
                    <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {step.icon}
                      <h3 className="text-sm font-black text-blue-950 uppercase tracking-tight">{step.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <span className="inline-block px-2.5 py-1 bg-blue-100 text-blue-900 text-[9px] font-black uppercase tracking-widest rounded">
                      {step.reassurance}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Schedules & Batches */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-blue-950">
              Weekly Flight Batches & Schedules
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Know when to send your goods to catch the weekly aircraft
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
            <div className="bg-blue-900 text-white p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-black text-sm uppercase tracking-wide">Weekly Schedule Blueprint</h3>
                  <p className="text-xs opacity-70">Drop off goods early in the week to ensure priority loading.</p>
                </div>
                <Clock className="text-amber-400" size={32} />
              </div>
            </div>

            <div className="divide-y divide-slate-100 font-sans">
              {batches.map((b, idx) => (
                <div key={idx} className="p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:bg-slate-50 transition-colors">
                  <div className="sm:w-1/3">
                    <span className="text-xs font-black uppercase text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg font-mono">
                      {b.day}
                    </span>
                  </div>
                  <div className="sm:w-2/3">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">{b.activity}</h4>
                    <p className="text-xs text-slate-500 font-bold">{b.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Packing Proof (Real-time Transparency) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-xl mb-6">
                <Video size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-blue-950 uppercase tracking-tighter mb-4">
                Watch Your Cargo Packed Live
              </h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                Anti-Scam Video Proof Guarantee
              </p>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                We've heard the nightmare stories of logistics agents swapping premium items for cheap ones. To build complete, unwavering trust, our warehouse staff records a clear packing and sealing video of your box on our high-precision digital scales. 
              </p>
              
              <ul className="space-y-3 font-bold text-xs">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span className="uppercase tracking-tight">Proof of weighing scales</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span className="uppercase tracking-tight">Visual double-wrapping proof</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600" />
                  <span className="uppercase tracking-tight">Sent directly to you on WhatsApp</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200 text-center relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-red-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded animate-pulse">
                Live Sample
              </div>
              <Compass className="text-slate-200 absolute -bottom-10 -left-10 w-48 h-48 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="bg-slate-900 rounded-xl aspect-video mb-6 flex items-center justify-center border border-slate-800">
                  <span className="text-white/40 font-black font-mono text-xs uppercase tracking-widest animate-pulse">[ VIDEO ENVELOPE RECORDING ]</span>
                </div>
                <h4 className="text-sm font-black text-blue-950 uppercase mb-2">"Video received! Packing is perfect"</h4>
                <p className="text-[10px] text-slate-500 font-medium">Mrs. Adebayo, London Fashion Exporter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_40%)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
            Ready to experience frictionless shipping?
          </h2>
          <p className="text-sm text-slate-300 font-medium mb-8 uppercase tracking-wider">
            Our dispatch riders can pick up from your doorstep in Lagos today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              as="a"
              href="https://wa.me/2349132227111" 
              target="_blank" 
              rel="noopener noreferrer"
              variant="yellow"
              className="px-8 py-4 uppercase text-xs tracking-widest font-black"
            >
              Book Doorstep Pickup
              <ArrowRight size={16} />
            </Button>
            <Button 
              as="a"
              href="https://wa.me/2349132227111" 
              target="_blank" 
              rel="noopener noreferrer"
              variant="ghost"
              className="px-8 py-4 uppercase text-xs tracking-widest font-black border border-white/20"
            >
              Lagos Hub Address
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
