import React from 'react';

const LOGO_LIST = [
  {
    name: "DHL",
    render: () => (
      <svg viewBox="0 0 150 40" fill="#E31837" className="h-6 w-auto" aria-hidden="true">
        <path d="M5 5h18.2c12.3 0 19.3 5.3 19.3 14.5 0 9.2-7 14.5-19.3 14.5H5V5zm16 23.5c4 0 7-1.7 7-9s-3-9-7-9H16.5v18H21z M46 5h11.5v11.5H69V5h11.5v29H69V22.5H57.5V34H46V5zm38.5 0h11.5v23.5H111V34H84.5V5z" />
        <path d="M2.5 10h-2L3 16h2zM7.5 10H5.5L8.5 16h2zM12.5 10h-2L13.5 16h2z" fill="#FFCC00"/>
      </svg>
    )
  },
  {
    name: "FedEx",
    render: () => (
      <svg viewBox="0 0 120 40" className="h-6 w-auto" aria-hidden="true">
        <path d="M5 8h16V13H11V18h9v5H11v11H5V8zm18 13.5c0-4.5 3-7.5 7.5-7.5s7.5 3 7.5 7.5v2h-10c0 2 1.5 3 3.5 3 1.5 0 2.5-.5 3-1.5h5c-.5 3.5-3.5 5.5-8 5.5-5 0-8.5-3.5-8.5-9zm10-1c0-1.5-.5-2.5-1.5-2.5s-1.5 1-1.5 2.5h3zm10 4.5c0-5 3.5-8.5 8.5-8.5 2.5 0 4.5 1 5.5 2.5V8h5v26h-5v-2c-1 1.5-3 2.5-5.5 2.5-5 0-8.5-3.5-8.5-8.5zm14 0c0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-4v-1c0-2.5-1.5-4-3.5-4s-3.5 1.5-3.5 4v1z" fill="#4D148C" />
        <path d="M65.5 14.5c0-4.5 3-7.5 7.5-7.5s7.5 3 7.5 7.5v2h-10c0 2 1.5 3 3.5 3 1.5 0 2.5-.5 3-1.5h5c-.5 3.5-3.5 5.5-8 5.5-5 0-8.5-3.5-8.5-9zm10-1c0-1.5-.5-2.5-1.5-2.5s-1.5 1-1.5 2.5h3zm12.5-6.5h6l4.5 6.5 4.5-6.5h6l-7.5 10 7.5 10h-6l-4.5-6.5-4.5 6.5h-6l7.5-10-7.5-10z" fill="#FF6600" />
      </svg>
    )
  },
  {
    name: "UPS",
    render: () => (
      <svg viewBox="0 0 100 120" className="h-7 w-auto" aria-hidden="true">
        <path d="M10 5 C 10 5, 50 15, 90 5 C 90 5, 90 65, 80 90 C 70 110, 50 115, 50 115 C 50 115, 30 110, 20 90 C 10 65, 10 5, 10 5" fill="#351C15" />
        <path d="M10 5 C 10 5, 50 15, 90 5 L 90 35 C 90 35, 50 45, 10 35 L 10 5" fill="#FFC72C" />
        <text x="50" y="85" fill="#FFFFFF" fontSize="38" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">UPS</text>
      </svg>
    )
  },
  {
    name: "Aramex",
    render: () => (
      <svg viewBox="0 0 120 30" className="h-5 w-auto" aria-hidden="true">
        <text x="5" y="22" fill="#E31B23" fontSize="24" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">aramex</text>
      </svg>
    )
  },
  {
    name: "Lufthansa Cargo",
    render: () => (
      <svg viewBox="0 0 240 40" className="h-6 w-auto" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="#002F6C" />
        <path d="M10 17 c5 -5, 15 -7, 22 -4 c-3 2, -10 1, -14 3 c4 1, 9 0, 11 -1 c-2 2, -6 3, -10 3 c3 .5, 7 0, 8 -1 c-3 2.5, -6 3, -9 3" stroke="#FFC72C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="45" y="25" fill="#002F6C" fontSize="16" fontWeight="900" fontFamily="sans-serif">Lufthansa</text>
        <text x="135" y="25" fill="#6C757D" fontSize="16" fontWeight="400" fontFamily="sans-serif">Cargo</text>
      </svg>
    )
  },
  {
    name: "Turkish Airlines Cargo",
    render: () => (
      <svg viewBox="0 0 240 40" className="h-6 w-auto" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="#C8102E" />
        <path d="M10 22 C 12 16, 22 10, 30 14 C 24 16, 16 18, 12 24 M15 17 L25 15" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <text x="45" y="25" fill="#0A192F" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">TURKISH CARGO</text>
      </svg>
    )
  },
  {
    name: "KLM Cargo",
    render: () => (
      <svg viewBox="0 0 160 40" className="h-6 w-auto" aria-hidden="true">
        <path d="M10 25 L10 15 L16 20 L22 15 L28 20 L34 15 L34 25 Z" fill="#00A1DE" />
        <circle cx="10" cy="13" r="2" fill="#00A1DE" />
        <circle cx="22" cy="13" r="2" fill="#00A1DE" />
        <circle cx="34" cy="13" r="2" fill="#00A1DE" />
        <rect x="8" y="27" width="28" height="3" fill="#00A1DE" />
        <text x="44" y="25" fill="#00A1DE" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">KLM</text>
        <text x="92" y="25" fill="#5C768D" fontSize="16" fontWeight="700" fontFamily="sans-serif">Cargo</text>
      </svg>
    )
  },
  {
    name: "Delta Cargo",
    render: () => (
      <svg viewBox="0 0 180 40" className="h-6 w-auto" aria-hidden="true">
        <path d="M10 32 L25 8 L40 32 L25 22 Z" fill="#E31B23" />
        <path d="M10 32 L25 8 L25 22 Z" fill="#002F6C" />
        <text x="48" y="26" fill="#002F6C" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.5">DELTA</text>
        <text x="112" y="26" fill="#E31B23" fontSize="16" fontWeight="400" fontFamily="sans-serif" letterSpacing="1">CARGO</text>
      </svg>
    )
  },
  {
    name: "Emirates SkyCargo",
    render: () => (
      <svg viewBox="0 0 220 45" className="h-7 w-auto" aria-hidden="true">
        <rect x="5" y="5" width="35" height="35" rx="4" fill="#D71920" />
        <path d="M12 28 C15 28, 20 25, 20 20 C20 15, 12 12, 16 25" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <text x="48" y="23" fill="#D71920" fontSize="15" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">Emirates</text>
        <text x="48" y="37" fill="#1C1C1C" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="1">SkyCargo</text>
      </svg>
    )
  },
  {
    name: "Qatar Airways Cargo",
    render: () => (
      <svg viewBox="0 0 200 40" className="h-6 w-auto" aria-hidden="true">
        <path d="M10 30 C 12 15, 20 5, 28 5 M10 30 C 14 25, 24 20, 24 15 M18 12 L 18 32" stroke="#5A1827" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="14" cy="22" r="2" fill="#5A1827" />
        <text x="36" y="25" fill="#5A1827" fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">QATAR</text>
        <text x="104" y="25" fill="#5C5C5C" fontSize="16" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">CARGO</text>
      </svg>
    )
  },
  {
    name: "Air France Cargo",
    render: () => (
      <svg viewBox="0 0 220 40" className="h-5 w-auto" aria-hidden="true">
        <path d="M10 28 L35 12 L30 32 Z" fill="#E30613" />
        <text x="42" y="25" fill="#002157" fontSize="14" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">AIRFRANCE</text>
        <text x="135" y="25" fill="#E30613" fontSize="14" fontWeight="800" fontFamily="sans-serif">CARGO</text>
      </svg>
    )
  },
  {
    name: "Ethiopian Cargo",
    render: () => (
      <svg viewBox="0 0 220 40" className="h-6 w-auto" aria-hidden="true">
        <path d="M5 10 L25 10 L30 30 L10 30 Z" fill="#008A4B" />
        <path d="M12 10 L22 10 L25 30 L15 30 Z" fill="#FCD116" />
        <path d="M19 10 L25 10 L22 30 L16 30 Z" fill="#D91621" />
        <text x="38" y="25" fill="#008A4B" fontSize="15" fontWeight="900" fontFamily="sans-serif">Ethiopian</text>
        <text x="122" y="25" fill="#D91621" fontSize="15" fontWeight="800" fontFamily="sans-serif">Cargo</text>
      </svg>
    )
  },
  {
    name: "British Airways Cargo",
    render: () => (
      <svg viewBox="0 0 240 40" className="h-5 w-auto" aria-hidden="true">
        <path d="M10 15 C 20 12, 35 15, 45 25 C 35 25, 20 22, 10 15" fill="#00247D" />
        <path d="M25 20 C 35 18, 48 22, 55 30 C 45 30, 32 26, 25 20" fill="#CF142B" />
        <text x="62" y="24" fill="#00247D" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">BRITISH AIRWAYS</text>
        <text x="195" y="24" fill="#CF142B" fontSize="12" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">CARGO</text>
      </svg>
    )
  }
];

// Duplicate list for a seamless loop
const DUPLICATED_LOGOS = [...LOGO_LIST, ...LOGO_LIST];

export const GlobalLogisticsNetwork: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-slate-100 overflow-hidden" id="global-logistics-network">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-logos {
          animation: scroll-left 32s linear infinite;
        }
        .animate-scroll-logos:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-logos {
            animation: none !important;
          }
          .carousel-container-inner {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;
            gap: 2rem !important;
            justify-items: center !important;
            width: 100% !important;
            transform: none !important;
          }
          .logo-wrapper-item {
            margin: 0 !important;
          }
        }
      `}</style>

      <div className="container mx-auto px-6">
        {/* Header Block */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="bg-blue-50 text-blue-800 text-[10px] font-black px-3 py-1.5 rounded uppercase tracking-widest font-mono">
            Carrier &amp; Airline Network
          </span>
          <h2 className="text-2xl md:text-4xl font-black uppercase text-slate-900 mt-3 mb-4 tracking-tighter">
            Global Logistics Network
          </h2>
          <p className="text-xs md:text-sm text-slate-600 font-bold leading-relaxed tracking-tight max-w-3xl mx-auto">
            Shipplix utilizes a trusted network of international logistics carriers and airline cargo services to move shipments safely and efficiently across the USA, UK, Canada, Europe, and other destinations worldwide.
          </p>
        </div>

        {/* Logo Carousel Container */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Subtle horizontal mask gradients for a smooth visual blend */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max">
            <div className="animate-scroll-logos flex items-center gap-16 pr-16 carousel-container-inner">
              {DUPLICATED_LOGOS.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex items-center justify-center transition-all duration-300 transform hover:scale-105 filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 logo-wrapper-item"
                  style={{ height: '32px', minWidth: '130px' }}
                  role="img"
                  aria-label={`${logo.name} Logo`}
                >
                  {logo.render()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLogisticsNetwork;
