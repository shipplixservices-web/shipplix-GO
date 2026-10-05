import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Clock, Phone } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const WhatsAppCtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-[#032B73] text-white relative overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0066FF]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFD700]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#FFD700] text-[#032B73] mb-5 shadow-sm">
          <MessageCircle size={14} className="fill-[#032B73]" />
          Instant WhatsApp Logistics Concierge
        </span>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5">
          Move Anything With Shipplix. <br />
          <span className="text-[#FFD700] underline decoration-white/30 decoration-4 underline-offset-8">
            Chat Directly On WhatsApp.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
          Skip long forms and confusing terminology. Tell our shipping team what you want to move, where it is going, and receive your exact quote, schedule, and pickup details in minutes.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            action="general"
            label="Chat on WhatsApp"
            variant="whatsapp"
            size="lg"
            showArrow={true}
            className="w-full sm:w-auto"
          />

          <a
            href="#quick-actions"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('quick-actions')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-wider py-4 px-8 rounded-2xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get A Shipping Quote</span>
          </a>
        </div>

        {/* Key Reassurances */}
        <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-[11px] font-bold text-slate-300">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-emerald-400" />
            Average Response: Under 5 Minutes
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-400" />
            Official CAC Registered RC: 8032416
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-400" />
            Doorstep Delivery Worldwide
          </span>
        </div>

      </div>
    </section>
  );
};

export default WhatsAppCtaSection;
