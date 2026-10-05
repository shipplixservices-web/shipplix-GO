import React from 'react';
import { 
  ArrowRight, 
  Package, 
  Truck, 
  MapPin, 
  Check 
} from 'lucide-react';
import trackingBannerPhoneImg from '../assets/images/tracking_banner_phone_1791218712432.jpg';

interface ShipmentTrackingSectionProps {
  onNavigate?: (path: string) => void;
}

export const ShipmentTrackingSection: React.FC<ShipmentTrackingSectionProps> = () => {
  const statusSteps = [
    {
      label: "Picked Up",
      icon: <Package size={18} className="text-white" />,
      badgeBg: "bg-[#0A4DBC] border-2 border-white/20 text-white shadow-md",
      textColor: "text-white font-bold"
    },
    {
      label: "In Transit",
      icon: <Truck size={18} className="text-white" />,
      badgeBg: "bg-[#0A4DBC] border-2 border-white/20 text-white shadow-md",
      textColor: "text-white font-bold"
    },
    {
      label: "Arrived",
      icon: <MapPin size={18} className="text-white" />,
      badgeBg: "bg-[#0A4DBC] border-2 border-white/20 text-white shadow-md",
      textColor: "text-white font-bold"
    },
    {
      label: "Delivered",
      icon: <Check size={20} className="text-[#032B73] stroke-[3]" />,
      badgeBg: "bg-[#FFD700] text-[#032B73] ring-4 ring-[#FFD700]/30 shadow-lg",
      textColor: "text-[#FFD700] font-black"
    }
  ];

  return (
    <section 
      id="tracking" 
      className="scroll-mt-20 py-12 sm:py-16 lg:py-24 bg-white"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wide Promotional Tracking Banner Card */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden bg-gradient-to-r from-[#032B73] via-[#04338C] to-[#021F54] text-white shadow-2xl border-4 border-white/10">
          
          {/* Subtle Ambient Waves & Glow Effects */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0066FF]/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD700]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Grid Layout: Left Content, Right Phone & Status Timeline */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center p-6 sm:p-10 lg:p-12 xl:p-16">
            
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-6 xl:col-span-5 text-center lg:text-left space-y-4 sm:space-y-6">
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Track Your Shipment <br />
                in <span className="text-[#FFD700]">Real Time</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                Get live updates from pickup to delivery.
              </p>

              {/* Primary CTA Button: Links directly to real tracking portal */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <a
                  href="https://track.shipplix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-[#032B73] font-black text-sm sm:text-base py-3.5 sm:py-4 px-8 sm:px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#FFD700]/50 cursor-pointer"
                >
                  <span>Track Now</span>
                  <ArrowRight size={18} className="text-[#032B73] stroke-[3] group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>

              {/* Subdued helper text */}
              <div className="pt-1 text-[11px] font-bold text-slate-300/80">
                <span>Direct Airway Bill &amp; Consignment lookup on </span>
                <span className="text-[#FFD700] font-black">track.shipplix.com</span>
              </div>

            </div>

            {/* Right Column: Visual Mockup (Phone + Map + Package + Status Milestones) */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 sm:gap-8 lg:gap-10">
              
              {/* 3D Smartphone Map Visual Card */}
              <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] shrink-0">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group">
                  <img
                    src={trackingBannerPhoneImg}
                    alt="Shipplix Real-Time Shipment Tracking on Smartphone GPS Map"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 select-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#032B73]/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Status Milestone Indicators (Picked Up -> In Transit -> Arrived -> Delivered) */}
              <div className="flex flex-row sm:flex-col flex-wrap justify-center gap-3 sm:gap-4 shrink-0">
                {statusSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 bg-white/10 sm:bg-white/5 backdrop-blur-md px-4 py-2 sm:px-4 sm:py-2.5 rounded-2xl border border-white/15 hover:bg-white/15 transition-colors shadow-sm"
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${step.badgeBg}`}>
                      {step.icon}
                    </div>
                    <span className={`text-xs sm:text-sm md:text-base tracking-wide whitespace-nowrap ${step.textColor}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ShipmentTrackingSection;
