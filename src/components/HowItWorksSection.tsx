import React from 'react';
import { 
  FileText, 
  Package, 
  Plane, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle 
} from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface HowItWorksSectionProps {
  onNavigate?: (path: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: "01",
      title: "Tell Us What You're Moving",
      desc: "Use our simple quick quote form or message us on WhatsApp with your pickup location, destination, and cargo type.",
      detail: "No complex logistics paperwork needed",
      icon: <FileText size={22} className="text-[#032B73]" />
    },
    {
      num: "02",
      title: "Doorstep Pickup or Hub Drop-Off",
      desc: "Enjoy doorstep collection anywhere in Nigeria, or drop off your items at our dedicated warehouse receiving hubs.",
      detail: "Available nationwide across 36 states",
      icon: <Package size={22} className="text-[#032B73]" />
    },
    {
      num: "03",
      title: "Live Video Packing & Clearance",
      desc: "Watch your cargo weighed on certified scales, sealed with security seals, and cleared through MMIA airport export inspection.",
      detail: "100% video transparency & barcode tag",
      icon: <Plane size={22} className="text-[#032B73]" />
    },
    {
      num: "04",
      title: "Fast Doorstep Delivery Abroad",
      desc: "Your shipment departs on scheduled weekly flights and is delivered directly to your recipient's home or business address.",
      detail: "USA, UK, Canada, Europe & Nationwide",
      icon: <MapPin size={22} className="text-[#032B73]" />
    }
  ];

  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-[#032B73] border border-blue-200 mb-3">
            <CheckCircle2 size={13} className="text-[#032B73]" />
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            How Shipping With Shipplix Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
            Zero friction, zero stress. You tell us what you want to move and we handle the end-to-end journey.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#032B73] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#FFD700]/30 border border-slate-200 flex items-center justify-center transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-[#032B73]/20 transition-colors font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#032B73]">
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="bg-white max-w-3xl mx-auto rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">
              Ready to start your first shipment?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Next cargo flights depart every Wednesday &amp; Friday from Lagos MMIA.
            </p>
          </div>
          <WhatsAppButton
            action="quote"
            label="Book On WhatsApp"
            variant="navy"
            showArrow={true}
          />
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
