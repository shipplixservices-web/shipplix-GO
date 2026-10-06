import React, { useState } from 'react';
import { 
  Home, 
  Package, 
  Search, 
  Globe, 
  MessageCircle, 
  ChevronUp, 
  X,
  Plane,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { openWhatsApp } from '../utils/whatsapp';

interface MobileBottomNavProps {
  onNavigate?: (path: string) => void;
  currentPath?: string;
  onOpenTrack?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  onNavigate, 
  currentPath = '/',
  onOpenTrack
}) => {
  const [showCorridorDrawer, setShowCorridorDrawer] = useState(false);

  const handleBookClick = () => {
    if (currentPath !== '/') {
      onNavigate?.('/');
      setTimeout(() => {
        const el = document.getElementById('quick-actions');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('quick-actions');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTrackClick = () => {
    if (onOpenTrack) {
      onOpenTrack();
      return;
    }
    if (currentPath !== '/') {
      onNavigate?.('/');
      setTimeout(() => {
        const el = document.getElementById('quick-actions');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('quick-actions');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    openWhatsApp('need_help', {
      customMessage: 'I am on your mobile app and need assistance with booking / tracking a shipment.'
    });
  };

  return (
    <>
      {/* Corridor Quick Drawer for Mobile */}
      <AnimatePresence>
        {showCorridorDrawer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex flex-col justify-end"
            onClick={() => setShowCorridorDrawer(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-t-3xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#032B73] bg-[#FFD700] px-2.5 py-0.5 rounded-full">
                    Shipplix Corridors
                  </span>
                  <h3 className="text-base font-black text-slate-900 mt-1">Select Shipping Destination</h3>
                </div>
                <button
                  onClick={() => setShowCorridorDrawer(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { title: "Ship Nigeria → USA (All 50 States)", path: "/ship-from-nigeria-to-usa", time: "3-5 Days Express" },
                  { title: "Ship Nigeria → Houston, Texas", path: "/ship-from-nigeria-to-houston", time: "Specialized Hub" },
                  { title: "Ship Nigeria → UK (London & All Postcodes)", path: "/ship-from-nigeria-to-uk", time: "3-5 Days Express" },
                  { title: "Ship Nigeria → Canada (All Provinces)", path: "/ship-from-nigeria-to-canada", time: "5-7 Days" },
                  { title: "Ship Nigeria → Europe (EU Wide)", path: "/ship-from-nigeria-to-europe", time: "5-7 Days" },
                  { title: "China → Nigeria Import Trade", path: "/ship-from-china-to-nigeria", time: "Air & Sea Cargo" },
                  { title: "Economy Cargo Consolidated (9-14 Days)", path: "/economy-cargo", time: "Lowest Cost" },
                  { title: "Cargo Items Lookup (Allowed & Prohibited)", path: "/cargo-items", time: "Customs Guide" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setShowCorridorDrawer(false);
                      onNavigate?.(item.path);
                    }}
                    className="w-full text-left p-3.5 rounded-2xl bg-slate-50 hover:bg-[#032B73]/5 border border-slate-200/80 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-xs font-black text-slate-900">{item.title}</div>
                        <div className="text-[10px] text-slate-500 font-bold">{item.time}</div>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-[#032B73]" />
                  </button>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500">Need personal route advice?</span>
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] text-white font-black text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-xl flex items-center gap-1.5"
                >
                  <MessageCircle size={14} className="fill-white" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom App Navigation Bar (Mobile Only) */}
      <nav 
        aria-label="Mobile Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-2xl px-1 sm:px-2 pt-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          
          {/* 1. Home */}
          <button
            onClick={() => {
              if (currentPath !== '/') {
                onNavigate?.('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`flex flex-col items-center justify-center p-1.5 rounded-xl min-w-[56px] min-h-[48px] transition-colors cursor-pointer select-none active:scale-95 ${
              currentPath === '/' ? 'text-[#032B73]' : 'text-slate-500 hover:text-slate-900'
            }`}
            aria-label="Home"
          >
            <Home size={20} className={currentPath === '/' ? 'text-[#032B73] stroke-[2.5]' : ''} />
            <span className={`text-[10px] tracking-wider mt-0.5 ${currentPath === '/' ? 'font-black text-[#032B73]' : 'font-bold'}`}>
              Home
            </span>
          </button>

          {/* 2. My Shipments */}
          <button
            onClick={handleTrackClick}
            className="flex flex-col items-center justify-center p-1.5 rounded-xl min-w-[56px] min-h-[48px] text-slate-500 hover:text-[#032B73] transition-colors cursor-pointer select-none active:scale-95"
            aria-label="My Shipments and Tracking"
          >
            <Search size={20} />
            <span className="text-[10px] tracking-wider font-bold mt-0.5 whitespace-nowrap">
              Shipments
            </span>
          </button>

          {/* 3. Center High-Impact Book Button */}
          <button
            onClick={handleBookClick}
            className="relative -top-4 flex flex-col items-center justify-center px-1 cursor-pointer select-none active:scale-95"
            aria-label="Book a shipment"
          >
            <div className="w-13 h-13 rounded-full bg-[#FFD700] text-[#032B73] flex items-center justify-center shadow-lg border-4 border-white transition-transform hover:bg-[#F5C400]">
              <Package size={23} className="stroke-[2.5]" />
            </div>
            <span className="text-[10px] uppercase tracking-wider font-black text-slate-900 mt-0.5">
              Book
            </span>
            <span className="absolute top-0 right-1.5 w-2.5 h-2.5 bg-[#032B73] rounded-full border-2 border-white"></span>
          </button>

          {/* 4. Support (WhatsApp) */}
          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center justify-center p-1.5 rounded-xl min-w-[56px] min-h-[48px] text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer select-none active:scale-95"
            aria-label="Support on WhatsApp"
          >
            <div className="relative">
              <MessageCircle size={20} className="text-emerald-600 fill-emerald-600/20" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            </div>
            <span className="text-[10px] tracking-wider font-bold mt-0.5">
              Support
            </span>
          </button>

          {/* 5. More */}
          <button
            onClick={() => setShowCorridorDrawer(true)}
            className="flex flex-col items-center justify-center p-1.5 rounded-xl min-w-[56px] min-h-[48px] text-slate-500 hover:text-[#032B73] transition-colors cursor-pointer select-none active:scale-95"
            aria-label="More corridors and services"
          >
            <Globe size={20} />
            <span className="text-[10px] tracking-wider font-bold mt-0.5">
              More
            </span>
          </button>

        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;
