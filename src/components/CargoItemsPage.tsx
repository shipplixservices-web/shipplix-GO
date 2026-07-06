import React from 'react';
import { 
  Search, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Utensils, 
  Shirt, 
  Palette, 
  Box, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  FileCheck
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

export default function CargoItemsPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const cargoItemsDB = [
    { name: 'Garri (Yellow/White)', category: 'Foodstuff', status: 'permitted', notes: 'Must be thoroughly dried and packed in airtight, clear nylon.' },
    { name: 'Egusi (Melon Seeds)', category: 'Foodstuff', status: 'permitted', notes: 'Must be dry and free of insects.' },
    { name: 'Crayfish (Dried)', category: 'Foodstuff', status: 'permitted', notes: 'Requires vacuum-sealing to prevent odour leakage during flight.' },
    { name: 'Palm Oil', category: 'Foodstuff', status: 'conditional', notes: 'Subject to strict spill-proof sealing and container double-wrapping.' },
    { name: 'Dried Fish / Stockfish', category: 'Foodstuff', status: 'permitted', notes: 'Vacuum sealing is strictly mandatory to prevent strong odours.' },
    { name: 'Kilishi (Beef Jerky)', category: 'Foodstuff', status: 'conditional', notes: 'Airtight commercial packaging preferred. Subject to destination meat regulations.' },
    { name: 'Yam Flour (Elubo)', category: 'Foodstuff', status: 'permitted', notes: 'Double-bagged in clear industrial-grade polythene bags.' },
    { name: 'Ankara Fabric / Lace', category: 'Fashion', status: 'permitted', notes: 'No special restrictions. Pack in dry, clear clothing bags.' },
    { name: 'Wigs & Raw Human Hair', category: 'Fashion', status: 'permitted', notes: 'Highly permitted. Ensure items are properly tagged for smooth customs processing.' },
    { name: 'Native Wears (Agbada, Kaftan)', category: 'Fashion', status: 'permitted', notes: 'No special restrictions. Fold neatly to avoid heavy pressing requirements.' },
    { name: 'Shea Butter', category: 'Cosmetics', status: 'permitted', notes: 'Must be in solid form and stored in leak-proof screw-top plastic jars.' },
    { name: 'Black Soap / Dudu Osun', category: 'Cosmetics', status: 'permitted', notes: 'Permitted in bar or paste forms when dry and wrapped securely.' },
    { name: 'Beads & Cultural Jewellery', category: 'Heritage', status: 'permitted', notes: 'Wrapped in bubble wrap to prevent scratch or transit damage.' },
    { name: 'Paintings & Artworks', category: 'Heritage', status: 'permitted', notes: 'Subject to export permit verification if classified as national relics.' },
    { name: 'Prescription Medication', category: 'Pharmaceuticals', status: 'conditional', notes: 'Requires signed doctor notes and original commercial pharmacy labels.' },
    { name: 'Aerosols / Perfumes', category: 'Flammables', status: 'banned', notes: 'Strictly prohibited on all commercial passenger and cargo flights.' },
    { name: 'Powerbanks / Lithium Batteries', category: 'Electronics', status: 'banned', notes: 'Classified as hazardous air transport cargo. Prohibited.' },
    { name: 'CBD Oil / Herbs', category: 'Controlled', status: 'banned', notes: 'Illegal for international cargo export under aviation and federal law.' }
  ];

  const filteredItems = searchQuery.trim() === '' 
    ? cargoItemsDB 
    : cargoItemsDB.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase()));

  const categories = [
    {
      title: "Foodstuff Exports",
      icon: <Utensils size={32} className="text-blue-900" />,
      tag: "Most Demanded",
      desc: "Connect home cooks, restaurants, and retail shoppers abroad with native Nigerian food products.",
      rules: ["Vacuum-sealing required for heavily scented items", "Grains & flours must be totally insect-free", "Liquids require leakproof secondary containment"]
    },
    {
      title: "Fashion & Hair",
      icon: <Shirt size={32} className="text-amber-500" />,
      tag: "High Value",
      desc: "Export tailored native clothing, custom fabrics, and highly sought-after hair products.",
      rules: ["Wigs must be neatly tagged", "Clothing should be packed in dry-sealed bags", "Accessories wrapped in bubble liners"]
    },
    {
      title: "Heritage & Souvenirs",
      icon: <Palette size={32} className="text-indigo-600" />,
      tag: "Custom Checked",
      desc: "Ship local woodcrafts, bead jewelry, paintings, and traditional items with complete paperwork.",
      rules: ["Relics require a national museum release letter", "Fragile crafts must be crated for protection", "Proper documentation of materials"]
    },
    {
      title: "General Inventory",
      icon: <Box size={32} className="text-slate-600" />,
      tag: "Flexible",
      desc: "Ship books, packaged electronics, hardware, printed documents, and standard office cargo.",
      rules: ["No batteries pre-installed in devices", "Aerosols and compressed gases are excluded", "Maximum package dimensional limits apply"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-amber-400 selection:text-blue-950 pt-20">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-16 md:py-20 relative overflow-hidden border-b-4 border-amber-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="bg-amber-400 text-blue-950 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block font-mono">
            Official Permitted Cargo Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-none uppercase tracking-tighter mb-4">
            Export Cargo & <span className="text-amber-400">Permitted Items</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            Ensure your shipments reach the UK, USA, or Canada without delays or customs seizures. Use our intelligent lookup tool to verify if your item is cleared to fly.
          </p>
        </div>
      </section>

      {/* Lookup Engine Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-black text-blue-950 uppercase tracking-tight mb-4 flex items-center gap-2">
              <Search className="text-amber-400" size={20} />
              Cargo Eligibility Lookup Engine
            </h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
              Type in your export product (e.g. egusi, garri, hair, powerbank) to instantly see its shipping guidelines:
            </p>
            
            <div className="relative mb-6">
              <input 
                type="text"
                placeholder="Search item name or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 bg-white font-bold text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    <th className="pb-3">Item Name</th>
                    <th className="pb-3">Category</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Packaging Guidelines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-100/50 transition-colors">
                        <td className="py-4 font-black text-slate-900 uppercase tracking-tight">{item.name}</td>
                        <td className="py-4 text-slate-500 font-mono text-[10px] uppercase">{item.category}</td>
                        <td className="py-4">
                          {item.status === 'permitted' && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 uppercase">
                              <CheckCircle2 size={12} /> Permitted
                            </span>
                          )}
                          {item.status === 'conditional' && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-black text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-100 uppercase">
                              <AlertTriangle size={12} /> Conditional
                            </span>
                          )}
                          {item.status === 'banned' && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-black text-red-700 bg-red-50 px-2.5 py-1 rounded border border-red-100 uppercase">
                              <XCircle size={12} /> Banned
                            </span>
                          )}
                        </td>
                        <td className="py-4 text-slate-600 max-w-xs font-bold text-[11px] leading-relaxed">{item.notes}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-slate-400 font-bold uppercase tracking-widest text-[11px]">
                        No matches found. Contact our support desk for custom item evaluations.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-blue-950 uppercase tracking-tighter">
              Deep-Dive Export Classifications
            </h2>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-2">
              Learn how we categorize and handle different classes of goods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-900 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-slate-100 p-4 rounded-xl text-blue-950">
                      {cat.icon}
                    </div>
                    <span className="bg-blue-50 text-blue-900 text-[9px] font-black uppercase px-2.5 py-1 rounded border border-blue-200">
                      {cat.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-black text-blue-950 uppercase tracking-tight mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-3 block">Mandatory Cargo Prep Rules:</span>
                  <ul className="space-y-2">
                    {cat.rules.map((rule, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-700 uppercase tracking-tight">
                        <CheckCircle2 size={12} className="text-blue-900 flex-shrink-0" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Best Practices */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-xl mb-6">
            <Sparkles size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-blue-950 uppercase tracking-tighter mb-4">
            Pro Tips: Foodstuff Export Packaging
          </h2>
          <p className="text-sm font-medium text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Most delays at international borders are due to packaging issues. Follow our gold standards to ensure your food stuff is cleared on arrival:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="font-black text-blue-950 mb-2 text-sm uppercase">1. Moisture Control</div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Items like dried fish, crayfish, or stockfish must be completely bone-dry. Any moisture leads to mould, which triggers instant rejection by health inspectors.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="font-black text-blue-950 mb-2 text-sm uppercase">2. Triple Odour Seal</div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Airports have zero tolerance for strong smells. We vacuum pack and triple-wrap crayfish and spices. This locks in scent and protects adjacent clothing cargo.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="font-black text-blue-950 mb-2 text-sm uppercase">3. Strict Labeling</div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Label everything clearly. Unmarked white powders (even if only yam flour or starch) attract heavy customs delays. We help print compliant export labels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_40%)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10 max-w-2xl">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
            Have a shipment ready to export?
          </h2>
          <p className="text-sm text-slate-300 font-medium mb-8 uppercase tracking-wider">
            Our teams are waiting at our Lagos Hub to package, manifest, and clear your items.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              as="a"
              href="https://wa.me/2349132227111" 
              target="_blank" 
              rel="noopener noreferrer"
              variant="yellow"
              className="px-8 py-4 uppercase text-xs tracking-widest font-black"
            >
              Start Ship Request
              <ArrowRight size={16} />
            </Button>
            <Button 
              as="a"
              href="https://wa.me/2349132227111" 
              target="_blank" 
              rel="noopener noreferrer"
              variant="ghost"
              className="px-8 py-4 uppercase text-xs tracking-widest font-black border border-white/20"
            >
              Ask Eligibility Question
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
