import React from 'react';
import { 
  Plane, 
  Package, 
  Globe, 
  Truck, 
  ArrowRight, 
  MessageCircle, 
  MapPin,
  Car
} from 'lucide-react';
import { WhatsAppActionType, openWhatsApp } from '../utils/whatsapp';
import shipplixAirfreightInMotion from '../assets/images/shipplix_airfreight_in_motion.png';
import serviceLocalBoxes from '../assets/images/service_local_boxes_1791028718311.jpg';
import serviceChinaShipping from '../assets/images/service_china_shipping_1791028756928.jpg';
import serviceTruckHaulage from '../assets/images/regenerated_image_1791243757227.png';
import serviceVanHiace from '../assets/images/service_van_hiace_1791028733401.jpg';
import serviceNigeriaMap from '../assets/images/service_nigeria_map_1791028769311.jpg';

interface HomepageServicesProps {
  onNavigate?: (path: string) => void;
}

interface ServiceCardItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  cardBg: string;
  borderColor: string;
  hoverBorder: string;
  route?: string;
  action: WhatsAppActionType;
  primaryCtaText: string;
}

export const HomepageServices: React.FC<HomepageServicesProps> = ({ onNavigate }) => {
  const services: ServiceCardItem[] = [
    {
      id: "international-shipping",
      title: "International Shipping",
      desc: "Ship from Nigeria to USA, UK, Canada & more.",
      image: shipplixAirfreightInMotion,
      icon: <Plane size={18} className="text-[#032B73]" />,
      iconBg: "bg-blue-50 border-blue-200",
      iconColor: "text-[#032B73]",
      cardBg: "bg-gradient-to-b from-[#F0F5FF] via-white to-white",
      borderColor: "border-blue-100",
      hoverBorder: "hover:border-[#032B73]",
      route: "/ship-from-nigeria-to-usa",
      action: "international",
      primaryCtaText: "Explore Route"
    },
    {
      id: "local-delivery",
      title: "Local Delivery",
      desc: "Fast and reliable delivery within Lagos.",
      image: serviceLocalBoxes,
      icon: <Package size={18} className="text-amber-800" />,
      iconBg: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-800",
      cardBg: "bg-gradient-to-b from-[#FFFDF0] via-white to-white",
      borderColor: "border-amber-100",
      hoverBorder: "hover:border-amber-400",
      action: "local",
      primaryCtaText: "Book Delivery"
    },
    {
      id: "china-to-nigeria",
      title: "China to Nigeria",
      desc: "Import goods from China to Nigeria.",
      image: serviceChinaShipping,
      icon: <Globe size={18} className="text-red-700" />,
      iconBg: "bg-red-50 border-red-200",
      iconColor: "text-red-700",
      cardBg: "bg-gradient-to-b from-[#FFF5F5] via-white to-white",
      borderColor: "border-red-100",
      hoverBorder: "hover:border-red-400",
      route: "/ship-from-china-to-nigeria",
      action: "china",
      primaryCtaText: "Import Goods"
    },
    {
      id: "truck-haulage",
      title: "Truck & Haulage",
      desc: "10-Ton, 30-Ton & heavy cargo.",
      image: serviceTruckHaulage,
      icon: <Truck size={18} className="text-[#032B73]" />,
      iconBg: "bg-slate-100 border-slate-300",
      iconColor: "text-[#032B73]",
      cardBg: "bg-gradient-to-b from-[#F8FAFC] via-white to-white",
      borderColor: "border-slate-200",
      hoverBorder: "hover:border-slate-700",
      action: "truck",
      primaryCtaText: "Hire Truck"
    },
    {
      id: "van-hiace-hire",
      title: "Van & Hiace Hire",
      desc: "Reliable vans for personal and business transport.",
      image: serviceVanHiace,
      icon: <Car size={18} className="text-emerald-800" />,
      iconBg: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-800",
      cardBg: "bg-gradient-to-b from-[#F0FDF4] via-white to-white",
      borderColor: "border-emerald-100",
      hoverBorder: "hover:border-emerald-400",
      action: "van",
      primaryCtaText: "Book Van"
    },
    {
      id: "interstate-transport",
      title: "Interstate Transport",
      desc: "Move goods from Lagos to other states across Nigeria.",
      image: serviceNigeriaMap,
      icon: <MapPin size={18} className="text-indigo-800" />,
      iconBg: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-800",
      cardBg: "bg-gradient-to-b from-[#FAF5FF] via-white to-white",
      borderColor: "border-indigo-100",
      hoverBorder: "hover:border-indigo-400",
      action: "interstate",
      primaryCtaText: "Ship Interstate"
    }
  ];

  const handleCardClick = (service: ServiceCardItem) => {
    if (service.route && onNavigate) {
      onNavigate(service.route);
    } else {
      openWhatsApp(service.action);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, service: ServiceCardItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(service);
    }
  };

  return (
    <section id="services" className="scroll-mt-20 py-14 sm:py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 lg:mb-18">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#032B73]/10 text-[#032B73] border border-[#032B73]/15 mb-3">
            <Globe size={13} className="text-[#032B73]" />
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Services: <br className="hidden sm:block" />
            <span className="text-[#032B73] underline decoration-[#FFD700] decoration-4 underline-offset-6">
              Move Anything With Shipplix.
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed mt-3 max-w-xl mx-auto">
            Doorstep pickup across Nigeria with express international air freight, China imports, and nationwide domestic transport.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid: 2-columns on mobile, 3-columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 items-stretch">
          {services.map((service) => (
            <div 
              key={service.id}
              tabIndex={0}
              role="button"
              aria-label={`${service.title} - ${service.desc}`}
              onClick={() => handleCardClick(service)}
              onKeyDown={(e) => handleKeyDown(e, service)}
              className={`
                ${service.cardBg}
                ${service.borderColor}
                ${service.hoverBorder}
                rounded-2xl sm:rounded-3xl border
                overflow-hidden shadow-xs hover:shadow-xl
                transition-all duration-300
                flex flex-col justify-between
                cursor-pointer group
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#032B73] focus-visible:ring-offset-2
                h-full
              `}
            >
              {/* Card Top: Visual Image + Floating Service Icon */}
              <div>
                <div className="relative w-full h-28 sm:h-36 md:h-44 overflow-hidden bg-slate-900">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating Service Icon + Title + Short Description */}
                <div className="p-3 sm:p-5 relative">
                  {/* Service Icon Badge */}
                  <div className={`-mt-7 sm:-mt-9 mb-2.5 sm:mb-3 w-8 h-8 sm:w-11 sm:h-11 rounded-xl shadow-md border ${service.iconBg} flex items-center justify-center relative z-10 transition-transform group-hover:scale-110`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xs sm:text-base md:text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#032B73] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 font-medium leading-relaxed mt-1 sm:mt-1.5">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Card Bottom: Primary Arrow CTA + Optional WhatsApp CTA */}
              <div className="p-3 sm:p-5 pt-0 mt-auto border-t border-slate-100/80">
                <div className="flex items-center justify-between gap-2 pt-2.5 sm:pt-3">
                  {/* Primary Arrow CTA */}
                  <button
                    type="button"
                    tabIndex={-1}
                    className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#032B73] hover:text-[#061B4F] group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>{service.primaryCtaText}</span>
                    <ArrowRight size={13} className="shrink-0 stroke-[2.5]" />
                  </button>

                  {/* Optional WhatsApp CTA */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openWhatsApp(service.action);
                    }}
                    aria-label={`Chat on WhatsApp about ${service.title}`}
                    className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xs hover:shadow-md transition-all duration-150 text-[10px] sm:text-[11px] font-bold cursor-pointer shrink-0 min-h-[32px] sm:min-h-[36px]"
                  >
                    <MessageCircle size={13} className="fill-white shrink-0" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomepageServices;
