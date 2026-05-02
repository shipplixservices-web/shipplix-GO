import React from 'react';
import { 
  ArrowRight, 
  Plane, 
  Box, 
  Clock, 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button, SectionTitle } from '../components/Common';
import { 
  URL_QUOTE, 
  URL_START, 
  URL_TRACK, 
  URL_CONNECT, 
  URL_SPACE, 
  URL_PROCESS, 
  URL_RESERVE 
} from '../constants';

const Hero = () => (
  <section className="relative pt-32 pb-12 bg-shipplix-bg overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden flex flex-col lg:flex-row gap-0">
        <div className="relative z-10 lg:w-2/3 lg:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest mb-4 inline-block">
              Nigeria to UK, USA & Canada
            </span>
            
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 mb-4">
              Turn Your Nigerian Goods Into <span className="text-shipplix-blue underline decoration-shipplix-yellow decoration-4 underline-offset-4">Pounds, Dollars</span> & Canadian Cash.
            </h1>
            
            <p className="text-slate-600 text-base md:text-lg mb-8 max-w-2xl font-medium">
              We help African vendors ship food, fashion & cultural goods from Nigeria safely. No stories. No scams. No lost goods. Just pure profit delivered to your destination.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                as="a" 
                href={URL_START} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="yellow" 
                className="px-8 py-4 text-[13px] uppercase tracking-widest"
              >
                Start My First Shipment
              </Button>
              <Button 
                as="a"
                href={URL_PROCESS}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary" 
                className="px-8 py-4 text-[13px] uppercase tracking-widest bg-slate-100 text-slate-700"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/3 mt-8 lg:mt-0 bg-blue-50/50 flex items-center justify-center border-l-0 lg:border-l border-slate-100 -m-6 md:-m-10 lg:m-0 p-8">
          <div className="text-center w-full">
            <div className="text-4xl font-black text-blue-900 mb-1">$4,200+</div>
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-6">Avg. Monthly Profit per Vendor</div>
            
            <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm italic text-blue-800">
                "Sent 50kg Garri to UK!"
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm italic text-blue-800">
                "Native wears to USA!"
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm italic text-blue-800">
                "Wigs cleared in 3 days"
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm italic text-blue-800">
                "Paid in GBP today!"
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "No Hidden Charges" },
          { label: "Real-Time Video Proof" },
          { label: "100% Customs Clearance" },
          { label: "Warehouse Hub in Lagos" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm font-bold text-[11px] uppercase tracking-tight text-slate-600">
            {item.label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const UrgencyBanner = () => (
  <div className="bg-yellow-100 border-y border-yellow-300 py-3 relative overflow-hidden">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
      <div className="flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
        </span>
        Shipment Batch Closing Soon!
      </div>
      <p className="text-sm font-bold text-slate-800">
        Next flight leaves on <span className="underline decoration-red-500 decoration-2">Wednesday - Friday</span>. Space almost full.
      </p>
      <div className="w-48 bg-slate-200 rounded-full h-2 hidden sm:block">
        <div className="bg-red-500 h-2 rounded-full w-[92%]"></div>
      </div>
      <a 
        href={URL_RESERVE}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-colors"
      >
        Secure Spot Now
      </a>
    </div>
  </div>
);

const ExportCategories = () => {
  const categories = [
    {
      title: "Foodstuff",
      emoji: "🍲",
      items: ["Garri", "Egusi", "Palm Oil", "Spices", "Dried Fish", "Crayfish"],
      tag: "Most Popular",
    },
    {
      title: "Fashion",
      emoji: "👗",
      items: ["Ankara Fabric", "Wigs & Hair", "Native Wear", "Accessories"],
      tag: "High Demand",
    },
    {
      title: "Heritage Goods",
      emoji: "🎭",
      items: ["Cultural Crafts", "Artwork", "Beads & Jewellery", "Souvenirs"],
      tag: "High Value",
    },
    {
      title: "Essentials",
      emoji: "📦",
      items: ["General Goods", "Business Inventory", "Personal Packages", "Gifts"],
      tag: "Flexible",
    }
  ];

  return (
    <section id="what" className="py-16 bg-shipplix-bg">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Export Categories" 
          subtitle="If people abroad are buying it, we can ship it."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative text-center"
            >
              <div className="absolute top-2 right-2 bg-blue-50 text-blue-800 text-[8px] font-black uppercase px-2 py-0.5 rounded border border-blue-100">
                {cat.tag}
              </div>
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <h3 className="text-sm font-black mb-4 text-slate-900 uppercase tracking-wider">{cat.title}</h3>
              <ul className="space-y-1 text-left hidden md:block">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-bold uppercase tracking-tight">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 md:hidden text-[10px] text-slate-500 font-bold uppercase">
                {cat.items[0]}, {cat.items[1]}...
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl text-center border border-slate-200">
           <p className="text-sm font-bold opacity-70 mb-2 uppercase tracking-widest">Not sure if we ship your product?</p>
           <a href={URL_QUOTE} target="_blank" rel="noopener noreferrer" className="text-shipplix-blue font-black text-lg underline underline-offset-4 flex items-center justify-center gap-2">
             Ask us on WhatsApp <ArrowRight size={20} />
           </a>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Drop-off",
      desc: "Pickup or Lagos Hub Hub",
      reassurance: "We handle everything",
      step: "01"
    },
    {
      title: "Packaging",
      desc: "Export-grade prep",
      reassurance: "No stress for you",
      step: "02"
    },
    {
      title: "Air Freight",
      desc: "Safe weekly flights",
      reassurance: "Tracked & secure",
      step: "03"
    },
    {
      title: "Doorstep",
      desc: "UK/US/Canada delivery",
      reassurance: "Happy money",
      step: "04"
    }
  ];

  return (
    <section id="how" className="py-16 bg-shipplix-blue text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Security Guarantee" 
          subtitle="Simple 4-Step Process. Fully Tracked."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-shipplix-yellow font-black text-5xl opacity-20 mb-4 transition-opacity group-hover:opacity-40">
                {step.step}
              </div>
              <h4 className="text-lg font-black mb-1 uppercase tracking-tight text-shipplix-yellow">{step.title}</h4>
              <p className="text-white/70 text-sm font-medium mb-3">{step.desc}</p>
              <div className="inline-block px-2 py-0.5 bg-white/10 text-white/50 text-[10px] font-black uppercase tracking-widest rounded border border-white/10">
                {step.reassurance}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center pt-8 border-t border-white/10">
           <Button 
            as="a"
            href={URL_TRACK}
            target="_blank"
            rel="noopener noreferrer"
            variant="yellow" 
            className="mx-auto text-xs px-10 uppercase tracking-[0.2em]"
           >
             Track My Shipments
           </Button>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const reasons = [
    {
      title: "Real-Time Tracking",
      desc: "Know exactly where your goods are \u2014 from Lagos departures to UK arrivals.",
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
  ];

  return (
    <section id="trust" className="py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 uppercase tracking-tighter leading-none">
              Why African Vendors <br/><span className="text-shipplix-accent">Truly Trust Shipplix</span>
            </h2>
            <p className="text-slate-600 font-medium mb-8">
              We know you've heard horror stories of lost goods and fake agents. That's why we've built a high-transparency shipping model.
            </p>
            <div className="bg-blue-900 text-white p-6 rounded-xl relative overflow-hidden text-center">
                <div className="relative z-10">
                  <div className="text-shipplix-yellow font-black text-2xl mb-1">100%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-70">Customs Clearance Success Rate</div>
                </div>
                <Plane className="absolute -bottom-4 -right-4 text-white/5 w-32 h-32 rotate-12" />
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="p-6 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                <h3 className="text-sm font-black mb-2 uppercase tracking-tight text-slate-900">{r.title}</h3>
                <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DiasporaSection = () => (
  <section className="py-16 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="bg-shipplix-yellow p-8 md:p-12 rounded-2xl border-4 border-shipplix-blue flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-black text-shipplix-blue mb-6 leading-none tracking-tighter uppercase">
            Your People Abroad <br/><span className="bg-shipplix-blue text-shipplix-yellow px-2">Are Waiting</span>
          </h2>
          <p className="text-shipplix-blue/80 font-bold text-lg mb-8 italic">
            "Your people abroad are ready to buy... the question is \u2014 are you ready to supply?"
          </p>
          <div className="space-y-4">
             {[
               { val: "3M+", label: "Potential Customers in UK" },
               { val: "\u00a3450", label: "Avg. Weekly Spend per Diaspora Family" },
               { val: "7 Days", label: "From Lagos Hub to London Doorstep" }
             ].map((s, i) => (
               <div key={i} className="flex items-center gap-4 border-b border-shipplix-blue/10 pb-2">
                 <span className="text-2xl font-black text-shipplix-blue">{s.val}</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-shipplix-blue/60">{s.label}</span>
               </div>
             ))}
          </div>
        </div>
        <div className="md:w-1/2 bg-white/40 p-10 rounded-xl border border-white/40 text-center">
            <p className="text-shipplix-blue font-black text-xl mb-4 leading-snug">
              Nigerians in UK, USA & Canada are spending millions on food and fashion every month. 
            </p>
            <Button 
              as="a" 
              href={URL_CONNECT} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary" 
              className="mx-auto w-full py-4 text-xs tracking-widest uppercase mb-4"
            >
              Connect With Markets Abroad
            </Button>
            <p className="text-[10px] font-black uppercase text-shipplix-blue/50">Earn in GBP, USD, or CAD weekly</p>
        </div>
      </div>
    </div>
  </section>
);

const GroupShipping = () => (
  <section className="py-16 bg-white border-y border-slate-200">
    <div className="container mx-auto px-6">
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
        <div className="relative z-10 md:w-2/3">
          <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Save Big Money</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter leading-none">
            Group Shipping (40% OFF)
          </h2>
          <p className="text-white/60 font-medium text-sm md:text-base mb-6">
            Join other vendors to share space. Stop paying full price for half-empty boxes. Smart vendors ship together.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded">
              Pay for only your weight
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded">
              Fully Insured Share
            </div>
          </div>
          <Button 
            as="a"
            href={URL_SPACE}
            target="_blank"
            rel="noopener noreferrer"
            variant="yellow" 
            className="text-xs px-10 uppercase tracking-widest"
          >
            Inquire About Splitting Space
          </Button>
        </div>
        <div className="md:w-1/3 flex justify-center">
            <div className="bg-white/5 p-8 rounded-full border border-white/10 animate-pulse">
                <Box size={80} className="text-shipplix-yellow opacity-40" />
            </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16 bg-shipplix-bg">
    <div className="container mx-auto px-6">
      <SectionTitle 
        title="Real Vendors. Real Results." 
        subtitle="Success stories from our smart export community."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
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
        ].map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-blue-50 text-blue-800 text-[8px] font-black uppercase px-2 py-0.5 rounded inline-block mb-4">
                {t.tag}
              </div>
              <p className="text-xs font-bold text-slate-700 leading-relaxed italic mb-6">"{t.text}"</p>
            </div>
            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} alt={t.name} />
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
);

const FinalCTA = () => (
  <section className="py-16 bg-shipplix-bg">
    <div className="container mx-auto px-6 text-center">
       <div className="max-w-2xl mx-auto">
          <SectionTitle 
            title="Start Earning in FX Today" 
            subtitle="No stress. No stories. Just safe, fast delivery to your destination."
          />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              as="a" 
              href={URL_START} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary" 
              className="py-4 text-xs uppercase tracking-widest bg-shipplix-blue flex-1"
            >
              Start First Shipment
            </Button>
            <Button 
              as="a" 
              href={URL_QUOTE} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary" 
              className="py-4 text-xs uppercase tracking-widest bg-green-600 border-green-600 flex-1 hover:bg-green-700"
            >
              Message on WhatsApp
            </Button>
          </div>
          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            Nigeria Hub \u2014 Closed on Sundays
          </p>
       </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <UrgencyBanner />
      <ExportCategories />
      <HowItWorks />
      <TrustSection />
      <DiasporaSection />
      <GroupShipping />
      <Testimonials />
      
      {/* Urgent Recap Section */}
      <section className="py-16 bg-white overflow-hidden relative border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
           <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-lg mb-8 shadow-2xl relative">
              <Clock className="text-white" size={32} />
              <div className="absolute inset-0 animate-ping rounded-lg bg-red-600 opacity-20"></div>
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-none">
             Batch Closing <span className="text-red-500">Fast</span>
           </h2>
           <p className="text-sm md:text-lg text-slate-500 font-bold max-w-2xl mx-auto mb-10 uppercase tracking-widest leading-relaxed">
             If your goods miss this week's flight, you're <span className="text-slate-900 underline decoration-shipplix-yellow decoration-4 underline-offset-4">delaying your profit.</span>
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-3xl mx-auto border border-slate-200 rounded-xl overflow-hidden mb-12">
              <div className="bg-red-50 p-6 border-b md:border-b-0 md:border-r border-slate-200">
                <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-2">Mon - Wed Batch</div>
                <div className="text-red-600 font-black text-lg">FULL</div>
              </div>
              <div className="bg-orange-50 p-6 border-b md:border-b-0 md:border-r border-slate-200">
                <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-2">Wed - Fri Batch</div>
                <div className="text-orange-500 font-black text-lg">ALMOST FULL</div>
              </div>
              <div className="bg-emerald-50 p-6">
                <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-2">Weekend Batch</div>
                <div className="text-emerald-600 font-black text-lg">SPOTS LEFT</div>
              </div>
           </div>
           

           <Button 
             as="a" 
             href={URL_RESERVE} 
             target="_blank" 
             rel="noopener noreferrer" 
             variant="primary" 
             className="mx-auto text-xs px-12 py-5 uppercase tracking-[0.2em] bg-shipplix-blue group"
           >
              Reserve My Spot Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
           </Button>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
