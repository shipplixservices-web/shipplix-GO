import React from 'react';
import { 
  Ship, 
  Plane, 
  Zap, 
  CheckCircle2, 
  Box, 
  ArrowRight, 
  DollarSign, 
  TrendingDown, 
  ShieldCheck, 
  Clock, 
  HelpCircle 
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

export default function EconomyCargoPage() {
  const rates = [
    { 
      destination: 'United Kingdom (London)', 
      minWeight: '15kg', 
      transit: '9-14 Days (Air) • 6 Weeks (Sea)',
      airWhatsapp: 'https://wa.me/2349168273513?text=Hello%20Shipplix%2C%20I%20would%20like%20to%20get%20the%20live%20Economy%20Air%20Rate%20for%20United%20Kingdom%20(London).',
      seaWhatsapp: 'https://wa.me/2349168273513?text=Hello%20Shipplix%2C%20I%20would%20like%20to%20get%20the%20live%20Ocean%20Freight%20Rate%20for%20United%20Kingdom%20(London).'
    },
    { 
      destination: 'United States (Texas / Houston)', 
      minWeight: '20kg', 
      transit: '10-14 Days (Air) • 8 Weeks (Sea)',
      airWhatsapp: 'https://wa.me/2349168273513?text=Hello%20Shipplix%2C%20I%20would%20like%20to%20get%20the%20live%20Economy%20Air%20Rate%20for%20United%20States%20(Texas%20%2F%20Houston).',
      seaWhatsapp: 'https://wa.me/2349168273513?text=Hello%20Shipplix%2C%20I%20would%20like%20to%20get%20the%20live%20Ocean%20Freight%20Rate%20for%20United%20States%20(Texas%20%2F%20Houston).'
    },
    { 
      destination: 'United States (Maryland / DMV)', 
      minWeight: '20kg', 
      transit: '10-14 Days (Air) • 8 Weeks (Sea)',
      airWhatsapp: 'https://wa.me/2349168273513?text=Hello%20Shipplix%2C%20I%20would%20like%20to%20get%20the%20live%20Economy%20Air%20Rate%20for%20United%20States%20(Maryland%20%2F%20DMV).',
      seaWhatsapp: 'https://wa.me/2349168273513?text=Hello%20Shipplix%2C%20I%20would%20like%20to%20get%20the%20live%20Ocean%20Freight%20Rate%20for%20United%20States%20(Maryland%20%2F%20DMV).'
    },
    { 
      destination: 'Canada (Toronto / GTA)', 
      minWeight: '20kg', 
      transit: '11-14 Days (Air) • 8 Weeks (Sea)',
      airWhatsapp: 'https://wa.me/2349168273513?text=Hello%20Shipplix%2C%20I%20would%20like%20to%20get%20the%20live%20Economy%20Air%20Rate%20for%20Canada%20(Toronto%20%2F%20GTA).',
      seaWhatsapp: 'https://wa.me/2349168273513?text=Hello%20Shipplix%2C%20I%20would%20like%20to%20get%20the%20live%20Ocean%20Freight%20Rate%20for%20Canada%20(Toronto%20%2F%20GTA).'
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-amber-400 selection:text-blue-950 pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-16 md:py-20 relative overflow-hidden border-b-4 border-amber-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="bg-amber-400 text-blue-950 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block font-mono">
            Low-Cost Business Shipping
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-none uppercase tracking-tighter mb-4">
            Shipplix <span className="text-amber-400">Economy Cargo</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            Maximize your profit margins on heavy exports. Perfect for wholesalers, food vendors, and bulk merchandise exporters who want reliable delivery without premium airfares.
          </p>
        </div>
      </section>

      {/* Pricing and Destination Table */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tight text-blue-950">
              Economy Price Estimator
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Guaranteed lowest rates for commercial and group shipments
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    <th className="pb-3">Destination</th>
                    <th className="pb-3">Economy Air Rate</th>
                    <th className="pb-3">Min Weight</th>
                    <th className="pb-3">Ocean Freight Rate</th>
                    <th className="pb-3">Est. Transit Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium">
                  {rates.map((rate, idx) => (
                    <tr key={idx} className="hover:bg-slate-100/50 transition-colors">
                      <td className="py-4 font-black text-slate-900 uppercase tracking-tight">{rate.destination}</td>
                      <td className="py-4">
                        <a 
                          href={rate.airWhatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 hover:underline font-bold font-mono"
                        >
                          Ask for Live Rate
                        </a>
                      </td>
                      <td className="py-4 text-slate-500 font-mono text-[10px] uppercase">{rate.minWeight}</td>
                      <td className="py-4">
                        <a 
                          href={rate.seaWhatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 hover:underline font-bold font-mono"
                        >
                          Ask for Live Rate
                        </a>
                      </td>
                      <td className="py-4 text-slate-600 font-bold">{rate.transit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 flex items-center gap-2 bg-amber-50 p-4 rounded-xl border border-amber-100 text-amber-800 text-xs font-bold leading-normal">
              <ShieldCheck size={20} className="flex-shrink-0" />
              <span>*Due to constant adjustments in aviation fuel, custom clearing fees, and carrier surcharges, we supply live rates directly on WhatsApp. Tap any "Ask for Live Rate" above to get an instant, zero-obligation price breakdown.</span>
            </div>
          </div>

          <div className="mt-12 text-center bg-slate-900 text-white p-8 md:p-10 rounded-2xl border border-slate-800 relative overflow-hidden shadow-md">
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-2">Ready to lock in your export?</h3>
              <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-6">Book your space in our weekly consolidated shipments instantly online.</p>
              <a 
                href="https://myshipment.shipplix.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto text-center bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-4 px-10 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                Book my shipment
              </a>
              <p className="mt-3 text-xs text-slate-400 font-semibold italic">
                Book your shipment online in less than 2 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Shipping Feature (Integrated beautifully) */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden border border-slate-800 shadow-xl">
            <div className="relative z-10 md:w-2/3">
              <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block font-mono">
                Cooperative Splitting Space
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter leading-none">
                Group Shipping (40% OFF)
              </h2>
              <p className="text-white/60 font-medium text-sm md:text-base mb-8">
                Don't pay full price for half-empty shipping crates. Shipplix lets small vendors pool their weights together to unlock the ultimate bulk cargo tier rates. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs font-bold">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  <span className="uppercase tracking-tight">Pay strictly for your weight</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  <span className="uppercase tracking-tight">Committed Safe Handling cargo split</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  <span className="uppercase tracking-tight">Weekly consolidation cycles</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  <span className="uppercase tracking-tight">Dedicated group tracker files</span>
                </div>
              </div>

              <Button 
                as="a"
                href="https://wa.me/2349168273513"
                target="_blank"
                rel="noopener noreferrer"
                variant="yellow" 
                className="text-xs px-10 py-4 uppercase tracking-widest font-black"
              >
                Inquire About Space Sharing
                <ArrowRight size={16} />
              </Button>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/5 p-8 rounded-full border border-white/10 animate-pulse">
                <Box size={80} className="text-amber-400 opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economy Cargo Advantages */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-blue-950">
              Why Choose Economy Shipping?
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
              Tailored rules for smart merchants who value cost over hyper-speed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-blue-900 mb-4">
                <TrendingDown size={32} />
              </div>
              <h3 className="text-base font-black uppercase tracking-tight text-blue-950 mb-2">Maximize Profits</h3>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                By choosing a 9–14 day cycle instead of 3 days, you save up to 50% on air transport costs, which directly boosts your retail margin per sale.
              </p>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-blue-900 mb-4">
                <Box size={32} />
              </div>
              <h3 className="text-base font-black uppercase tracking-tight text-blue-950 mb-2">Ideal for Dry Foodstuff</h3>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                Items like melon seeds, yam flour, dry herbs, and raw textiles do not spoil. Paying for urgent express delivery is an unnecessary business overhead.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-blue-900 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-base font-black uppercase tracking-tight text-blue-950 mb-2">Regular Shipping Cycles</h3>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">
                With structured bi-weekly consol departures from our Lagos hub, you can synchronize your manufacturing cycles with routine cargo drop-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-black uppercase tracking-tight text-blue-950 text-center mb-10">
            Economy Cargo FAQ
          </h2>
          
          <div className="space-y-4">
            {[
              { q: "Is there a minimum weight limit for economy air?", a: "Yes, our economy cargo baseline starts at 15kg for the UK and 20kg for the US and Canada. For smaller weights, standard shipping is highly recommended." },
              { q: "How can I track my group shipment?", a: "Each vendor receives their own unique sub-waybill index linked to the master flight container tracking file, so you can track your cargo seamlessly." },
              { q: "Are customs duties included in these low rates?", a: "Yes! All rates are fully inclusive of clearing fees at Lagos airport and standard customs release processing in destination countries. Zero hidden charges." },
              { q: "Do you ship liquids via economy cargo?", a: "Yes, in small commercially-approved quantities, subject to leakproof double-boxing. Flammables or aerosol cosmetic cans are strictly banned." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 font-black text-blue-950 text-sm uppercase mb-2">
                  <HelpCircle size={16} className="text-amber-500 flex-shrink-0" />
                  {faq.q}
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_40%)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
            Consolidate your weight today
          </h2>
          <p className="text-sm text-slate-300 font-medium mb-8 uppercase tracking-wider">
            Save up to 40% on bulk shipments or group space. Tap the button to get quoted.
          </p>
          <Button 
            as="a"
            href="https://wa.me/2349168273513" 
            target="_blank" 
            rel="noopener noreferrer"
            variant="yellow"
            className="mx-auto px-8 py-4 uppercase text-xs tracking-widest font-black"
          >
            Inquire Economy Rates
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  );
}
