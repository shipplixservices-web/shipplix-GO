import React from 'react';
import { 
  ShieldCheck, 
  FileCheck, 
  CreditCard, 
  Video, 
  Award, 
  CheckCircle2, 
  Scale, 
  Clock, 
  Plane,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import watchLiveImg from '../assets/images/watch_your_cargo_packed_live-1.jpg';
import realShipment1 from '../assets/images/shipplixreal1.jpg';
import realShipment2 from '../assets/images/shipplixreal2.jpg';
import realShipment3 from '../assets/images/shipplixreal3.jpg';

interface WhyShipplixSectionProps {
  onNavigate?: (path: string) => void;
}

export const WhyShipplixSection: React.FC<WhyShipplixSectionProps> = ({ onNavigate }) => {
  const trustPoints = [
    {
      title: "100% Tax Compliant (FIRS)",
      subtitle: "Legitimate Corporate Operations",
      desc: "Fully cleared and compliant with the Federal Inland Revenue Service (FIRS) and Nigerian trade regulatory authorities.",
      icon: <FileCheck className="text-emerald-600" size={24} />
    },
    {
      title: "CAC Registered Entity",
      subtitle: "Official Registration RC: 8032416",
      desc: "Registered Nigerian logistics provider operating under transparent corporate governance with verified physical hubs.",
      icon: <ShieldCheck className="text-[#032B73]" size={24} />
    },
    {
      title: "Watch Cargo Packed Live",
      subtitle: "Zero Switch-Out Guarantee",
      desc: "We weigh and seal your cargo on camera with verified scales, recording real-time video footage sent straight to your WhatsApp.",
      icon: <Video className="text-amber-600" size={24} />
    },
    {
      title: "Direct MMIA Customs Clearance",
      subtitle: "Scheduled Air Line-Haul",
      desc: "Export cargo manifested directly at Murtala Muhammed International Airport with compliant documentation and fast dispatch.",
      icon: <Plane className="text-[#032B73]" size={24} />
    },
    {
      title: "Secure Payment Gateways",
      subtitle: "Encrypted Transactions",
      desc: "Multiple payment options in Naira and foreign currencies with transparent receipts and zero hidden charges.",
      icon: <CreditCard className="text-indigo-600" size={24} />
    },
    {
      title: "Dedicated WhatsApp Concierge",
      subtitle: "Personal Support Team",
      desc: "Real logistics agents available to help calculate weights, check flight departures, and update you until doorstep arrival.",
      icon: <MessageCircle className="text-emerald-600" size={24} />
    }
  ];

  return (
    <section id="why-shipplix" className="scroll-mt-20 py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <ShieldCheck size={13} className="text-emerald-600" />
            Trust, Security &amp; Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Shippers Choose Shipplix
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
            International and domestic shipping without stress, scams, or hidden surprises. Here is how we guarantee your peace of mind.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-[#032B73] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-5">
                  {point.icon}
                </div>
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                  {point.subtitle}
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {point.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-[#032B73]">
                <CheckCircle2 size={13} className="text-emerald-600" />
                <span>Standard on every booking</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Operations Showcase Gallery */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="bg-[#FFD700] text-[#032B73] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full inline-block">
                Real Warehouse Operations
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Watch Your Cargo Packed Live On Video.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Before your cargo boards any flight, our warehouse team conducts live video packing and weight verification on certified scales. You see your items sealed with tamper-proof security tape in real-time.
              </p>
              
              <div className="space-y-2 pt-2 text-xs font-bold text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#FFD700]" />
                  <span>Exact scale weight confirmed on camera</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#FFD700]" />
                  <span>Individual parcel barcodes &amp; tracking labels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#FFD700]" />
                  <span>Full export documentation clearance</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/2349168273513?text=Hello%20Shipplix!%20I%20would%20like%20to%20know%20more%20about%20your%20live%20video%20packing%20and%20drop-off%20process."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#F5C400] text-[#032B73] font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle size={15} className="fill-[#032B73]" />
                  <span>Ask A Logistics Agent</span>
                </a>
              </div>
            </div>

            {/* Gallery Images */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden border border-white/20 h-40 sm:h-48 relative group">
                <img 
                  src={watchLiveImg} 
                  alt="Watch Cargo Packed Live" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-bold text-[#FFD700]">
                  📹 Live Video Packing Scales
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/20 h-40 sm:h-48 relative group">
                <img 
                  src={realShipment1} 
                  alt="Shipplix Real Shipment" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-bold text-white">
                  ✈️ MMIA Flight Manifesting
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/20 h-40 sm:h-48 relative group">
                <img 
                  src={realShipment2} 
                  alt="Shipplix Cargo Boxes" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-bold text-white">
                  📦 Sealed Cargo Consolidation
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/20 h-40 sm:h-48 relative group">
                <img 
                  src={realShipment3} 
                  alt="Shipplix Airport Handoff" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-bold text-white">
                  🚚 Last-Mile Doorstep Dispatch
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyShipplixSection;
