import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-white border-t border-slate-200 py-16 text-slate-500">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-slate-900 text-white font-black px-2 py-1 rounded text-lg tracking-tighter shadow-sm">SHIPPLIX</div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Safe. Fast. Transparent.</span>
          </div>
          <p className="text-xs font-bold leading-relaxed max-w-sm mb-6 text-slate-500 uppercase tracking-tight">
            The leading export logistics ecosystem for African vendors. We don't just ship boxes; we build global businesses.
          </p>
          <a href="mailto:services@shipplix.com" className="text-shipplix-blue font-black text-sm hover:underline tracking-tight">services@shipplix.com</a>
        </div>
        
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Quick Links</h4>
          <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest">
            <a href="/" className="hover:text-shipplix-blue transition-colors">Home</a>
            <a href="#what" className="hover:text-shipplix-blue transition-colors">Categories</a>
            <a href="#how" className="hover:text-shipplix-blue transition-colors">Guarantee</a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Explore</h4>
          <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest">
            <Link to="/export-hub" className="text-shipplix-blue font-black hover:text-blue-700 transition-colors">Export Hub</Link>
            <a href="/export-hub#learn" className="hover:text-shipplix-blue transition-colors text-slate-400">Learn Exporting</a>
            <a href="/export-hub#community" className="hover:text-shipplix-blue transition-colors text-slate-400">Hub Community</a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-widest">
         <p>© {new Date().getFullYear()} SHIPPLIX EXPORT LOGISTICS. MADE IN LAGOS.</p>
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-shipplix-blue">
              <span className="w-1.5 h-1.5 bg-shipplix-blue rounded-full"></span>
              2,400+ Exports
            </div>
            <div className="flex items-center gap-2 text-shipplix-blue">
              <span className="w-1.5 h-1.5 bg-shipplix-blue rounded-full"></span>
              100% Tax Clearance
            </div>
         </div>
      </div>
    </div>
  </footer>
);
