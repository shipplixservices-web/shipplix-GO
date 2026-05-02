import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Sparkles, 
  TrendingUp, 
  ShoppingCart, 
  ShieldCheck, 
  Zap,
  Users,
  Layout,
  Instagram,
  MessageCircle,
  Package,
  Plane
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button, SectionTitle } from '../components/Common';
import { 
  URL_HUB_START,
  URL_START
} from '../constants';

import wigImg from '../assets/images/regenerated_image_1777712964095.jpg';
import fashionImg from '../assets/images/regenerated_image_1777713137148.jpg';
import foodImg from '../assets/images/regenerated_image_1777713318605.jpg';
import skincareImg from '../assets/images/regenerated_image_1777713537927.jpg';

const HubHero = () => (
  <section className="relative pt-32 pb-24 bg-shipplix-blue overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-shipplix-yellow rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-shipplix-yellow/20 text-shipplix-yellow px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-shipplix-yellow/30 backdrop-blur-sm">
            <Sparkles size={12} />
            The Future of African Export
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
            Turn Your Nigerian Products Into <span className="text-shipplix-yellow italic">Pounds, Dollars</span> & Canadian Cash.
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl font-medium mb-12 leading-relaxed">
            Learn how to sell Nigerian products globally using AI, eCommerce systems, customer acquisition strategies, and Shipplix international shipping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as="a" 
              href={URL_HUB_START} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="yellow" 
              className="px-10 py-5 text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] transition-all"
            >
              Start Selling Globally
            </Button>
            <Button 
              as="a"
              href="#about"
              className="px-10 py-5 text-sm uppercase tracking-widest bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md"
            >
              Join Export Hub
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Graphics Visual Mockup */}
      <div className="mt-20 relative px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center transform hover:scale-105 transition-transform">
             <Globe className="text-shipplix-yellow mx-auto mb-4" size={32} />
             <div className="text-white font-black text-xl mb-1">$1.2B+</div>
             <div className="text-white/40 text-[9px] uppercase font-bold tracking-widest">Global Market Size</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center transform hover:scale-105 transition-transform mt-4">
             <Zap className="text-shipplix-yellow mx-auto mb-4" size={32} />
             <div className="text-white font-black text-xl mb-1">AI Powered</div>
             <div className="text-white/40 text-[9px] uppercase font-bold tracking-widest">Content Automation</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center transform hover:scale-105 transition-transform">
             <Package className="text-shipplix-yellow mx-auto mb-4" size={32} />
             <div className="text-white font-black text-xl mb-1">Global Ship</div>
             <div className="text-white/40 text-[9px] uppercase font-bold tracking-widest">Express Air Freight</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center transform hover:scale-105 transition-transform mt-4">
             <Users className="text-shipplix-yellow mx-auto mb-4" size={32} />
             <div className="text-white font-black text-xl mb-1">Community</div>
             <div className="text-white/40 text-[9px] uppercase font-bold tracking-widest">Vendor Networking</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhatIsHub = () => {
  const features = [
    {
      title: "AI Commerce",
      desc: "Use AI to write product descriptions, create marketing content, and automate customer responses in minutes.",
      icon: <Sparkles className="text-shipplix-yellow" size={24} />
    },
    {
      title: "Global Shipping",
      desc: "Seamless logistics from Nigeria to your customer's doorstep in the UK, USA, or Canada. fully tracked.",
      icon: <Plane className="text-shipplix-yellow" size={24} />
    },
    {
      title: "Customer Acquisition",
      desc: "Master Meta Ads, Google Search, and organic social media to find buyers who pay in foreign currency.",
      icon: <TrendingUp className="text-shipplix-yellow" size={24} />
    },
    {
      title: "E-commerce Systems",
      desc: "Build professional stores on Shopify or optimized WhatsApp catalogues that look like global brands.",
      icon: <ShoppingCart className="text-shipplix-yellow" size={24} />
    },
    {
      title: "Export Guidance",
      desc: "Navigate international regulations, packaging standards, and customs without any technical headache.",
      icon: <ShieldCheck className="text-shipplix-yellow" size={24} />
    },
    {
      title: "Vendor Community",
      desc: "Join a high-level network of African entrepreneurs sharing secrets, suppliers, and success stories.",
      icon: <Users className="text-shipplix-yellow" size={24} />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <SectionTitle 
            title="More Than Shipping. We Help African Vendors Build Global Businesses."
            subtitle="Shipplix Export Hub is a comprehensive ecosystem designed to take you from a local seller to a global brand owner."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 hover:border-shipplix-yellow/50 transition-all group"
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-shipplix-blue group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-slate-900">{f.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed italic">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GlobalDemand = () => {
  const products = [
    { name: "Luxury Wigs", category: "Beauty", market: "USA/UK", img: wigImg },
    { name: "Ankara Fashion", category: "Style", market: "Global", img: fashionImg },
    { name: "Dried Foodstuff", category: "Food", market: "Canada", img: foodImg },
    { name: "Organic Skincare", category: "Beauty", market: "UK", img: skincareImg },
  ];

  return (
    <section className="py-24 bg-shipplix-blue text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">
              African Products <br/>Are In <span className="text-shipplix-yellow">Global Demand.</span>
            </h2>
            <p className="text-white/70 text-lg font-medium mb-10 leading-relaxed italic">
              The opportunity is massive. Millions of people in the diaspora and internationals are looking for authentic African goods. Most vendors simply lack visibility, systems, and global access.
            </p>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 italic">
               <span className="text-shipplix-yellow font-black block mb-2 uppercase tracking-widest text-xs">The Problem</span>
               "I have great products but I don't know how to reach customers abroad or how to ship safely."
            </div>
            <div className="mt-6 bg-shipplix-yellow text-shipplix-blue p-8 rounded-3xl font-black text-xl italic uppercase tracking-tighter">
              Shipplix solves exactly that.
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {products.map((p, i) => (
              <div key={i} className="relative group overflow-hidden rounded-[32px] aspect-square">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-shipplix-blue to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="text-[10px] font-black uppercase tracking-widest text-shipplix-yellow mb-1">{p.category} | {p.market}</div>
                  <div className="text-lg font-black uppercase">{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  const modules = [
    { title: "AI Content Creation", icon: <Zap size={20} />, color: "bg-orange-500" },
    { title: "Meta Ads & Targeting", icon: <TrendingUp size={20} />, color: "bg-blue-600" },
    { title: "WhatsApp Selling", icon: <MessageCircle size={20} />, color: "bg-green-500" },
    { title: "Instagram Growth", icon: <Instagram size={20} />, color: "bg-pink-500" },
    { title: "Shopify Setup", icon: <ShoppingCart size={20} />, color: "bg-emerald-600" },
    { title: "Global Branding", icon: <Layout size={20} />, color: "bg-purple-600" },
    { title: "Export Packaging", icon: <Package size={20} />, color: "bg-amber-600" },
    { title: "Acquisition Systems", icon: <Users size={20} />, color: "bg-indigo-600" },
    { title: "Automation Tools", icon: <Sparkles size={20} />, color: "bg-cyan-600" },
    { title: "International Ship", icon: <Globe size={20} />, color: "bg-slate-900" },
  ];

  return (
    <section id="learn" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="What You Will Master"
          subtitle="A high-performance curriculum built for the modern African entrepreneur."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {modules.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
              <div className={`${m.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {m.icon}
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">{m.title}</h4>
              <div className="w-8 h-1 bg-slate-100 rounded-full group-hover:bg-shipplix-yellow transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technology = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="bg-slate-950 rounded-[48px] overflow-hidden relative p-12 lg:p-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Future-Proof Your Business</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">
              Build Smarter With AI & Technology.
            </h2>
            <div className="space-y-6">
              {[
                { title: "Create Content Faster", desc: "No more writers' block. AI generates captions and ads." },
                { title: "Automate Replies", desc: "WhatsApp bots handle your basic customer inquiries 24/7." },
                { title: "Product Descriptions", desc: "Persuasive, high-converting copy generated in seconds." },
                { title: "Scale Easier", desc: "Systems that work while you sleep, finding global buyers." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-shipplix-yellow/10 border border-shipplix-yellow/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 size={12} className="text-shipplix-yellow" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-tight mb-1">{item.title}</h4>
                    <p className="text-white/50 text-xs font-medium leading-relaxed uppercase tracking-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-shipplix-yellow to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/10">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Sparkles size={20} />
                   </div>
                   <div className="font-black text-white tracking-widest text-[10px] uppercase">AI Commerce Dashboard</div>
                </div>
                <div className="space-y-6">
                   <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-blue-500"></div>
                   </div>
                   <div className="h-4 w-3/4 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[65%] bg-shipplix-yellow"></div>
                   </div>
                   <div className="h-20 w-full bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center italic text-white/30 text-[10px] uppercase font-bold tracking-widest">
                      Generating Global Content...
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorksHub = () => (
  <section id="how" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle 
        title="Your Path to Global Dominance"
        subtitle="Follow our tested blueprint to launch your international business."
      />

      <div className="relative max-w-5xl mx-auto space-y-12">
        <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-1 bg-slate-100 -translate-x-1/2"></div>
        
        {[
          { icon: <CheckCircle2 />, title: "Choose your product", desc: "Select high-demand export goods." },
          { icon: <Layout />, title: "Learn branding", desc: "Create a global identity." },
          { icon: <Zap />, title: "Use AI tools", desc: "Automate your marketing content." },
          { icon: <TrendingUp />, title: "Launch online", desc: "Go live on social and web." },
          { icon: <Users />, title: "Get customers", desc: "Attract buyers in UK, US, Canada." },
          { icon: <Globe />, title: "Ship globally", desc: "Scale with Shipplix logistics." },
          { icon: <TrendingUp />, title: "Scale internationally", desc: "Multiply your foreign earnings." }
        ].map((step, i) => (
          <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-10 relative ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
            <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'justify-end text-right' : 'justify-start text-left'} hidden md:flex`}>
               <div>
                  <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-sm font-medium italic">{step.desc}</p>
               </div>
            </div>
            
            <div className="z-10 w-10 h-10 rounded-full bg-shipplix-yellow text-shipplix-blue flex items-center justify-center border-4 border-white shadow-xl flex-shrink-0">
               {React.cloneElement(step.icon as React.ReactElement, { size: 16 })}
            </div>
            
            <div className="md:w-1/2 flex flex-col md:hidden">
               <h4 className="text-lg font-black uppercase tracking-tighter text-slate-900 mb-1">{step.title}</h4>
               <p className="text-slate-500 text-sm font-medium italic">{step.desc}</p>
            </div>
            <div className="md:w-1/2 md:block hidden"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HubCommunity = () => (
  <section id="community" className="py-24 bg-shipplix-blue text-white overflow-hidden relative">
    <div className="container mx-auto px-6 text-center">
       <span className="text-shipplix-yellow text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Join the Elite</span>
       <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight tracking-tighter uppercase">
          Join A New Generation Of <br/>African Global Entrepreneurs.
       </h2>
       
       <div className="max-w-2xl mx-auto italic text-white/50 font-medium mb-12">
          "The biggest advantage of Export Hub isn't just the learning — it's the high-level network of mentors and shipping partners that make your global dream a reality."
       </div>
    </div>
  </section>
);

const HubFinalCTA = () => (
  <section className="py-24 bg-shipplix-yellow relative overflow-hidden">
    <div className="container mx-auto px-6 text-center relative z-10">
       <h2 className="text-4xl md:text-7xl font-black text-shipplix-blue leading-[0.9] tracking-tighter uppercase mb-8">
          Your Products Deserve <br/>A <span className="underline decoration-shipplix-blue decoration-8 decoration-skip-ink">Global Market.</span>
       </h2>
       <p className="text-shipplix-blue/70 text-lg font-black mb-12 uppercase tracking-tight max-w-xl mx-auto italic">
          Stop limiting your business locally. Learn, sell, and ship worldwide with Shipplix Export Hub.
       </p>
       <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            as="a" 
            href={URL_HUB_START} 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="primary" 
            className="px-12 py-5 text-sm uppercase tracking-widest bg-shipplix-blue hover:bg-shipplix-navy shadow-2xl"
          >
            Start Now
          </Button>
          <Button 
            as="a" 
            href={URL_START} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-12 py-5 text-sm uppercase tracking-widest border-2 border-shipplix-blue text-shipplix-blue hover:bg-shipplix-blue hover:text-white transition-all bg-transparent"
          >
            Ship With Shipplix
          </Button>
       </div>
    </div>
  </section>
);

export default function ExportHub() {
  return (
    <main className="min-h-screen bg-white">
      <HubHero />
      <WhatIsHub />
      <GlobalDemand />
      <Curriculum />
      <Technology />
      <HowItWorksHub />
      <HubCommunity />
      <HubFinalCTA />
      
      {/* Footer Addition Info */}
      <section className="py-12 bg-shipplix-bg border-t border-slate-200">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Hub Exclusive Access</div>
            <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-slate-400">
               <span>AI Training</span>
               <span>Meta Ads Mastery</span>
               <span>Logistics Integration</span>
            </div>
         </div>
      </section>
    </main>
  );
}
