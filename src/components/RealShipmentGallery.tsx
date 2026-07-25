import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Tag, 
  CheckCircle2, 
  Package, 
  Truck, 
  Plane, 
  Image as ImageIcon,
  ShieldCheck,
  Sparkles,
  Instagram,
  ExternalLink,
  MessageCircle,
  Camera
} from 'lucide-react';

import shipplixReal1 from '../assets/images/shipplixreal1.jpg';
import shipplixReal2 from '../assets/images/shipplixreal2.jpg';
import shipplixReal3 from '../assets/images/shipplixreal3.jpg';

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'Package Collection' | 'Packaging & Quality Check' | 'Warehouse Operations' | 'International Shipping' | 'Successful Deliveries';
  date: string;
  location?: string;
}

const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: 'sg-1',
    url: shipplixReal1,
    caption: 'Doorstep air cargo package for IFEYINWE in Houston, TX with official Shipplix destination label',
    category: 'Package Collection',
    date: 'July 24, 2026',
    location: 'Houston, TX, USA'
  },
  {
    id: 'sg-2',
    url: shipplixReal2,
    caption: 'Temitope express consignment packaged, verified & sealed for USA destination',
    category: 'Packaging & Quality Check',
    date: 'July 23, 2026',
    location: 'Lagos Export Hub, Nigeria'
  },
  {
    id: 'sg-3',
    url: shipplixReal3,
    caption: 'Vacuum-sealed reinforced export carton for LASIRI (Post Code 77433) ready for delivery.',
    category: 'International Shipping',
    date: 'July 22, 2026',
    location: 'MMIA Air Cargo Hub, Lagos'
  }
];

export const RealShipmentGallery: React.FC = () => {
  const [items] = useState<GalleryItem[]>(DEFAULT_GALLERY);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Show strictly 3 pictures
  const displayedItems = items.slice(0, 3);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === 0 ? displayedItems.length - 1 : (prev as number) - 1
    );
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === displayedItems.length - 1 ? 0 : (prev as number) + 1
    );
  };

  // Keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, displayedItems.length]);

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 border border-blue-200 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3">
            <ShieldCheck size={14} className="text-shipplix-blue" />
            Verified Operations &amp; Proof
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-950 mb-4">
            Real Shipment Gallery
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
            Experience the journey behind every shipment. These photos showcase our real operations, helping customers see the care, professionalism, and attention that go into every package we handle.
          </p>
        </div>

        {/* Clean 3 Pictures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
              onClick={() => handleOpenLightbox(index)}
            >
              {/* Image Wrapper */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    (e.target as HTMLElement).setAttribute('src', shipplixReal1);
                  }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10 bg-slate-900/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 shadow-sm">
                  {item.category === 'Package Collection' && <Package size={10} className="text-shipplix-yellow" />}
                  {item.category === 'Packaging & Quality Check' && <CheckCircle2 size={10} className="text-green-400" />}
                  {item.category === 'Warehouse Operations' && <Truck size={10} className="text-blue-400" />}
                  {item.category === 'International Shipping' && <Plane size={10} className="text-yellow-400" />}
                  {item.category === 'Successful Deliveries' && <Sparkles size={10} className="text-amber-400" />}
                  <span>{item.category}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-blue-950 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn size={14} /> View Photo
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs font-bold text-slate-800 leading-snug mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                  {item.caption}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-slate-400" />
                    {item.location || 'Lagos Hub'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} className="text-slate-400" />
                    {item.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {displayedItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 max-w-md mx-auto my-8">
            <ImageIcon size={40} className="mx-auto text-slate-300 mb-3" />
            <h3 className="text-sm font-black uppercase text-slate-800">No Photos in this Category</h3>
            <p className="text-xs text-slate-500 font-bold mt-1">Select another filter or add photos in the admin mode.</p>
          </div>
        )}

        {/* View More on Social Media Callout Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-2xl p-6 md:p-8 text-white border border-blue-800/50 shadow-xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-shipplix-yellow/20 text-shipplix-yellow border border-shipplix-yellow/30 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              <Camera size={13} className="animate-pulse" />
              Live Daily Updates &amp; Video Proof
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
              Want To See More Live Shipments?
            </h3>
            <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed">
              We update our social media channels daily with real package collections, warehouse packing videos, air cargo departures, and customer unpackings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://www.instagram.com/shipplixCARGO1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102 text-center"
            >
              <Instagram size={16} />
              <span>View On Instagram</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>

            <a
              href="https://wa.me/2349168273513?text=Hello%20Shipplix,%20I%20want%20to%20see%20more%20shipment%20photos%20and%20videos!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102 text-center"
            >
              <MessageCircle size={16} />
              <span>Watch WhatsApp Status</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && displayedItems[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
              onClick={handleCloseLightbox}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseLightbox}
                className="absolute top-5 right-5 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
                title="Close Lightbox (Esc)"
              >
                <X size={20} />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all cursor-pointer"
                title="Previous Image (Left Arrow)"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Navigation Right */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all cursor-pointer"
                title="Next Image (Right Arrow)"
              >
                <ChevronRight size={24} />
              </button>

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Main Lightbox Image */}
                <div className="md:w-2/3 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[480px]">
                  <img
                    src={displayedItems[lightboxIndex].url}
                    alt={displayedItems[lightboxIndex].caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain max-h-[70vh]"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] font-mono px-2.5 py-1 rounded-md border border-white/10">
                    Photo {lightboxIndex + 1} of {displayedItems.length}
                  </div>
                </div>

                {/* Lightbox Sidebar Details */}
                <div className="md:w-1/3 p-6 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-white/10 text-white">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-shipplix-yellow/20 text-shipplix-yellow text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-4 border border-shipplix-yellow/30">
                      <Tag size={12} />
                      {displayedItems[lightboxIndex].category}
                    </div>

                    <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-white mb-4 leading-snug">
                      {displayedItems[lightboxIndex].caption}
                    </h3>

                    <div className="space-y-3 text-xs font-semibold text-slate-300 bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-shipplix-yellow" />
                        <span>Location: <strong>{displayedItems[lightboxIndex].location || 'Lagos Hub'}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-shipplix-yellow" />
                        <span>Date Processed: <strong>{displayedItems[lightboxIndex].date}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-green-400" />
                        <span>Status: <strong className="text-green-400">Verified Operation</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="https://wa.me/2349168273513?text=Hello%20Shipplix,%20I%20saw%20your%20real%20shipment%20photos%20and%20want%20to%20ship%20my%20goods!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-shipplix-yellow text-blue-950 hover:bg-yellow-400 font-black text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md text-center"
                    >
                      Ship Similar Package Now
                    </a>

                    <button
                      onClick={handleCloseLightbox}
                      className="w-full bg-white/10 hover:bg-white/20 text-slate-300 font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
