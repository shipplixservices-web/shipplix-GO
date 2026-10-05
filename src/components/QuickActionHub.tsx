import React, { useState } from 'react';
import { 
  Package, 
  MapPin, 
  Plane, 
  Scale, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { openWhatsApp } from '../utils/whatsapp';

interface QuickActionHubProps {
  onNavigate?: (path: string) => void;
}

export const QuickActionHub: React.FC<QuickActionHubProps> = ({ onNavigate }) => {
  // Booking Form State
  const [pickupLocation, setPickupLocation] = useState('Lagos, Nigeria (Any Location)');
  const [destination, setDestination] = useState('USA - United States (All 50 States)');
  const [cargoType, setCargoType] = useState('Foodstuffs & Groceries (Egusi, Fish, Spices, etc.)');
  const [weightCategory, setWeightCategory] = useState('5 - 15 kg (Standard Box)');
  const [senderName, setSenderName] = useState('');

  const scrollToTracking = (e: React.MouseEvent) => {
    e.preventDefault();
    const trackingEl = document.getElementById('tracking');
    if (trackingEl) {
      trackingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="quick-actions" className="relative z-20 -mt-10 lg:-mt-16 xl:-mt-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden">
        
        {/* Quick Quote Interface Header */}
        <div className="bg-slate-50/90 border-b border-slate-200 px-6 py-4.5 sm:px-8 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#032B73] text-[#FFD700] flex items-center justify-center font-black shrink-0">
              <Package size={17} />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <span>Quick Shipping Quote</span>
                <span className="hidden sm:inline-block text-[9px] font-black uppercase tracking-widest bg-[#FFD700] text-[#032B73] px-2 py-0.5 rounded-full">
                  Instant Estimate
                </span>
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Doorstep pickup anywhere in Nigeria • Direct export clearance at MMIA
              </p>
            </div>
          </div>

          {/* Quick link to tracking */}
          <button
            onClick={scrollToTracking}
            className="self-start sm:self-auto text-[11px] font-black uppercase tracking-wider text-[#032B73] hover:text-[#061B4F] flex items-center gap-1.5 transition-colors cursor-pointer bg-white border border-slate-200 px-3 py-1.5 rounded-xl hover:border-[#032B73]"
          >
            <Search size={13} className="text-[#032B73]" />
            <span>Have a Tracking ID? Track Consignment ↓</span>
          </button>
        </div>

        {/* Quick Quote 4-Field Input Grid */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            {/* Field 1: Pickup Location */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90 focus-within:border-[#032B73] focus-within:ring-2 focus-within:ring-[#032B73]/10 transition-all">
              <label htmlFor="quote-pickup" className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-1.5">
                <MapPin size={12} className="text-[#032B73]" /> From: Pickup Location
              </label>
              <select
                id="quote-pickup"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <optgroup label="Nigeria (Pickup or Drop-off)">
                  <option value="Lagos, Nigeria (Any Location)">Lagos, Nigeria (Any Location)</option>
                  <option value="Abuja (FCT), Nigeria">Abuja (FCT)</option>
                  <option value="Port Harcourt, Rivers">Port Harcourt (Rivers)</option>
                  <option value="Onitsha / Aba / Eastern States">Onitsha / Aba / Eastern States</option>
                  <option value="Ibadan / South-Western States">Ibadan / South-Western States</option>
                  <option value="Kano / Kaduna / Northern States">Kano / Kaduna / Northern States</option>
                  <option value="Any of 36 Nigerian States">Any of the 36 Nigerian States</option>
                </optgroup>
                <optgroup label="International Imports into Nigeria">
                  <option value="China (Guangzhou / Yiwu)">China (Guangzhou / Yiwu)</option>
                  <option value="USA (Houston, NYC, Atlanta)">USA (Houston, Atlanta, Dallas)</option>
                  <option value="UK (London, Manchester)">UK (London, Manchester)</option>
                </optgroup>
              </select>
              <span className="text-[9px] text-slate-400 font-semibold block mt-1">Free pickup in major city hubs</span>
            </div>

            {/* Field 2: Destination */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90 focus-within:border-[#032B73] focus-within:ring-2 focus-within:ring-[#032B73]/10 transition-all">
              <label htmlFor="quote-dest" className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-1.5">
                <Plane size={12} className="text-[#032B73]" /> To: Destination
              </label>
              <select
                id="quote-dest"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <optgroup label="Primary International Destinations">
                  <option value="USA - United States (All 50 States)">🇺🇸 United States (All 50 States)</option>
                  <option value="Houston, Texas (Direct Hub)">🇺🇸 Houston, TX (Direct Hub)</option>
                  <option value="UK - United Kingdom (London & All Postcodes)">🇬🇧 United Kingdom (London & All Postcodes)</option>
                  <option value="Canada (Toronto, Calgary, Edmonton)">🇨🇦 Canada (Toronto & All Provinces)</option>
                  <option value="Europe (Germany, France, Italy, Ireland)">🇪🇺 Europe (EU-Wide Doorstep Delivery)</option>
                  <option value="China (Guangzhou / Yiwu / Shenzhen)">🇨🇳 China (Export & Trade)</option>
                  <option value="Other International Country">🌍 Other International Country</option>
                </optgroup>
                <optgroup label="Domestic Haulage (Within Nigeria)">
                  <option value="Lagos Intra-State Delivery">🇳🇬 Lagos Intra-State Doorstep</option>
                  <option value="Interstate Delivery (36 States)">🇳🇬 Interstate Transport (36 States)</option>
                </optgroup>
              </select>
              <span className="text-[9px] text-emerald-600 font-bold block mt-1">Door-to-door delivery included</span>
            </div>

            {/* Field 3: What are you shipping? */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90 focus-within:border-[#032B73] focus-within:ring-2 focus-within:ring-[#032B73]/10 transition-all">
              <label htmlFor="quote-cargo" className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-1.5">
                <Package size={12} className="text-[#032B73]" /> What are you shipping?
              </label>
              <select
                id="quote-cargo"
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="Foodstuffs & Groceries (Egusi, Fish, Spices, etc.)">🍲 Foodstuffs (Egusi, Fish, Spices, etc.)</option>
                <option value="Miss Paris Perfumes, Cosmetics & Fragrances">🧴 Miss Paris Perfumes & Cosmetics</option>
                <option value="Approved Medications, Supplements & Herbs">💊 Supplements & Approved Herbs</option>
                <option value="African Fashion, Ankara Fabrics & Wigs">👗 African Fashion, Ankara & Wigs</option>
                <option value="Personal Belongings & Diaspora Packages">📦 Personal Effects & Diaspora Parcels</option>
                <option value="Commercial Cargo & Export Inventory">💼 Commercial Goods & Business Cargo</option>
                <option value="Electronics & Accessories">📱 Electronics & Accessories</option>
              </select>
              <span className="text-[9px] text-[#032B73] font-bold block mt-1">Specialized cargo pre-cleared</span>
            </div>

            {/* Field 4: Approximate Weight */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90 focus-within:border-[#032B73] focus-within:ring-2 focus-within:ring-[#032B73]/10 transition-all">
              <label htmlFor="quote-weight" className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-1.5">
                <Scale size={12} className="text-[#032B73]" /> Approximate Weight
              </label>
              <select
                id="quote-weight"
                value={weightCategory}
                onChange={(e) => setWeightCategory(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="1 - 5 kg (Small Parcel / Samples)">1 – 5 kg (Small Parcel / Document / Sample)</option>
                <option value="5 - 15 kg (Standard Box)">5 – 15 kg (Standard Box)</option>
                <option value="15 - 30 kg (Medium Cargo Box)">15 – 30 kg (Medium Cargo Box)</option>
                <option value="30 - 50 kg (Large Cargo / Foodstuffs)">30 – 50 kg (Large Cargo / Foodstuffs)</option>
                <option value="50 kg - 100 kg (Commercial Consolidation)">50 – 100 kg (Commercial Consolidation)</option>
                <option value="100 kg+ / Commercial Container">100 kg+ / Pallet / Sea Container</option>
              </select>
              <span className="text-[9px] text-slate-400 font-semibold block mt-1">Weighed accurately on live video</span>
            </div>

          </div>

          {/* Quick Summary Pill & Instant WhatsApp Action */}
          <div className="bg-[#032B73]/5 border border-[#032B73]/15 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="w-10 h-10 rounded-xl bg-[#032B73] text-[#FFD700] flex items-center justify-center font-black text-sm shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-xs font-black text-[#032B73] uppercase tracking-wide flex items-center gap-1.5">
                  <span>MMIA Terminal Export Cleared</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-600 font-bold">Fast Flight Manifesting</span>
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  Route: <strong className="text-slate-900">{pickupLocation.split('(')[0]}</strong> → <strong className="text-slate-900">{destination.split('(')[0]}</strong>
                </div>
              </div>
            </div>

            {/* Action Inputs & Button */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                autoCapitalize="words"
                autoComplete="name"
                className="w-full sm:w-44 bg-white border border-slate-300 rounded-xl px-3 py-3 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#032B73]"
              />
              
              <WhatsAppButton
                action="quote"
                params={{
                  from: pickupLocation,
                  to: destination,
                  item: cargoType,
                  weight: weightCategory,
                  name: senderName
                }}
                label="Get Quote on WhatsApp"
                variant="yellow"
                size="md"
                showArrow={true}
                className="w-full sm:w-auto text-xs"
              />
            </div>

          </div>

          {/* Micro Reassurances */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-600" />
              100% Tax Compliant &amp; CAC Verified (RC: 8032416)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-amber-500">📹</span>
              Watch Cargo Packed Live On Verified Scales
            </span>
            <span className="flex items-center gap-1.5">
              <Plane size={13} className="text-[#032B73]" />
              Scheduled Weekly Cargo Flights from MMIA
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default QuickActionHub;
