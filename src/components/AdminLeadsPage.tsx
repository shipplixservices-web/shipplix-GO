import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Download, 
  Lock, 
  Unlock, 
  MessageSquare, 
  Calendar, 
  Trash2, 
  ChevronLeft, 
  ShieldAlert, 
  MapPin, 
  Briefcase,
  Database,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

interface Lead {
  id: string;
  fullName: string;
  businessName: string;
  email: string;
  whatsapp: string;
  country: string;
  products: string;
  timestamp: string;
}

export default function AdminLeadsPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('all');

  const CORRECT_PASSCODE = 'shipplix2026'; // Admin Passcode

  // Load leads from localStorage for immediate visibility
  useEffect(() => {
    if (isAuthenticated) {
      try {
        const storedLeads = JSON.parse(localStorage.getItem('shipplix_export_leads') || '[]');
        // Sort leads by date descending (newest first)
        const sorted = storedLeads.sort((a: Lead, b: Lead) => {
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        });
        setLeads(sorted);
      } catch (err) {
        console.error("Failed to parse local leads", err);
      }
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === CORRECT_PASSCODE) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid Administrator Passcode. Please try again.');
    }
  };

  const handleDeleteLead = (id: string) => {
    if (window.confirm("Are you sure you want to remove this lead?")) {
      const updated = leads.filter(lead => lead.id !== id);
      setLeads(updated);
      localStorage.setItem('shipplix_export_leads', JSON.stringify(updated));
    }
  };

  const handleClearAllLeads = () => {
    if (window.confirm("CRITICAL WARNING: Are you sure you want to permanently clear ALL lead data from local storage? This action cannot be undone.")) {
      localStorage.removeItem('shipplix_export_leads');
      setLeads([]);
    }
  };

  // Export to CSV helper
  const exportToCSV = () => {
    if (leads.length === 0) return;

    // CSV Headers
    const headers = ["Lead ID", "Full Name", "Business Name", "Email", "WhatsApp Number", "Country", "Products Selling", "Submission Date"];
    
    // Format rows
    const rows = leads.map(lead => [
      lead.id,
      `"${lead.fullName.replace(/"/g, '""')}"`,
      `"${lead.businessName.replace(/"/g, '""')}"`,
      lead.email,
      `"${lead.whatsapp}"`,
      `"${lead.country}"`,
      `"${lead.products.replace(/"/g, '""')}"`,
      new Date(lead.timestamp).toLocaleString()
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(e => e.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Shipplix_Export_Blueprint_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter & Search Logic
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.whatsapp.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.products.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCountry = filterCountry === 'all' || lead.country.toLowerCase() === filterCountry.toLowerCase();

    return matchesSearch && matchesCountry;
  });

  // Get list of unique countries for filter dropdown
  const uniqueCountries = Array.from(new Set(leads.map(l => l.country))).filter(Boolean);

  // Authentication / Passcode Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
        {/* Background glow grids */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative z-10 space-y-8">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-blue-900/40 border border-blue-500/30 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={28} />
            </div>
            <span className="text-shipplix-yellow text-[9px] font-black uppercase tracking-[0.3em] bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full inline-block">
              Internal Secure System
            </span>
            <h1 className="text-2xl font-black text-white uppercase tracking-tight">
              Shipplix Admin Portal
            </h1>
            <p className="text-slate-400 text-xs font-semibold leading-relaxed max-w-xs mx-auto">
              Please enter the administrator security passcode to access the Blueprint lead databases.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Security Passcode
              </label>
              <div className="relative">
                <input 
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl py-3.5 px-4 text-sm font-semibold tracking-widest focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-700 text-center"
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-red-400 text-[10px] font-black uppercase tracking-wider pt-1 flex items-center gap-1.5 justify-center">
                  <ShieldAlert size={12} /> {error}
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl transition-colors duration-200 text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-900/20"
            >
              Authenticate System <ArrowRight size={14} />
            </button>
          </form>

          <div className="border-t border-slate-800/60 pt-4 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase tracking-wider">
            <button 
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors flex items-center gap-1 focus:outline-none"
            >
              <ChevronLeft size={12} /> Back to Website
            </button>
            <span>Passcode: shipplix2026</span>
          </div>
        </div>
      </div>
    );
  }

  // Active Authenticated Admin Dashboard View
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <button 
              onClick={() => onNavigate('/')}
              className="text-[10px] text-slate-500 hover:text-slate-950 font-black uppercase tracking-widest flex items-center gap-1 transition-colors focus:outline-none"
            >
              <ChevronLeft size={12} /> Back to Website
            </button>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter">
                Blueprint Leads Database
              </h1>
              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1">
                <Unlock size={10} /> Active
              </span>
            </div>
            <p className="text-slate-500 text-xs font-semibold leading-relaxed">
              Export Blueprint download requests, client products, and instant WhatsApp follow-up portal.
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button 
              onClick={exportToCSV}
              disabled={leads.length === 0}
              className="flex-1 md:flex-none bg-blue-950 hover:bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
            >
              <Download size={14} /> Export CSV Excel
            </button>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              Lock System
            </button>
          </div>
        </div>

        {/* IMPORTANT IMPLEMENTATION NOTICE BANNER */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden">
          <div className="absolute right-4 bottom-0 opacity-10 text-white pointer-events-none transform translate-y-4">
            <Database size={160} />
          </div>
          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="text-shipplix-yellow text-[9px] font-black uppercase tracking-[0.25em] bg-white/10 border border-white/20 px-3 py-1 rounded-full inline-block">
              Cloud Database Recommendation
            </span>
            <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-white">
              Connect this form to a centralized Cloud Database (Firebase Firestore)
            </h2>
            <p className="text-slate-200 text-xs font-semibold leading-relaxed">
              Currently, this admin dashboard displays blueprint leads saved on **your current browser** (local storage). Because local storage is local to each machine, if a customer in another country fills out the form, their details will save on *their* computer, and you won't see them here.
            </p>
            <p className="text-shipplix-yellow text-xs font-black uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shipplix-yellow animate-ping"></span>
              Ready to Upgrade? Simply type "Setup Firebase Firestore for leads" in the AI agent chat to configure automatic cloud synchronization!
            </p>
          </div>
        </div>

        {/* METRICS BLOCKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
            <div className="text-slate-400 text-[10px] font-black uppercase tracking-wider">Total Blueprint Leads</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900">{leads.length}</span>
              <span className="text-slate-400 text-xs font-bold">contacts</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
            <div className="text-slate-400 text-[10px] font-black uppercase tracking-wider font-mono">Database Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="text-xs font-black uppercase text-amber-600 tracking-wider">Local Sandbox Mode</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
            <div className="text-slate-400 text-[10px] font-black uppercase tracking-wider">Latest Submission</div>
            <div className="text-xs font-black text-slate-800 uppercase tracking-tight flex items-center gap-1.5">
              <Calendar size={14} className="text-blue-900" />
              {leads.length > 0 ? new Date(leads[0].timestamp).toLocaleDateString() : 'No leads recorded'}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
            <div className="text-slate-400 text-[10px] font-black uppercase tracking-wider">Latest Lead City / Country</div>
            <div className="text-xs font-black text-slate-800 uppercase tracking-tight flex items-center gap-1.5">
              <MapPin size={14} className="text-red-500" />
              {leads.length > 0 ? leads[0].country : 'N/A'}
            </div>
          </div>
        </div>

        {/* SEARCH AND FILTERS */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <div className="relative w-full md:max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search leads by name, WhatsApp, product description..."
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-blue-900 transition-colors"
            />
          </div>

          <div className="flex gap-3 w-full md:w-auto self-stretch md:self-auto justify-end">
            <select 
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-4 py-3 rounded-xl focus:outline-none focus:border-blue-900"
            >
              <option value="all">All Countries</option>
              {uniqueCountries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>

            {leads.length > 0 && (
              <button 
                onClick={handleClearAllLeads}
                className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 font-bold text-xs p-3 rounded-xl flex items-center justify-center gap-1 transition-colors"
                title="Clear all leads"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>

        </div>

        {/* LEADS LIST / TABLE CONTAINER */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          
          {filteredLeads.length === 0 ? (
            <div className="py-20 px-6 text-center space-y-4">
              <div className="w-16 h-16 bg-slate-50 border border-slate-200 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <Users size={24} />
              </div>
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">
                No Leads Found
              </h3>
              <p className="text-xs text-slate-400 font-semibold max-w-sm mx-auto leading-relaxed">
                {leads.length === 0 
                  ? "Nobody has submitted the blueprint download form on this browser yet. Fill out the form yourself to test this dashboard!" 
                  : "No submissions match your search parameters. Try adjusting your filter settings."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] text-slate-400 font-black uppercase tracking-wider">
                    <th className="py-4 px-6">Customer / Business</th>
                    <th className="py-4 px-6">WhatsApp & Country</th>
                    <th className="py-4 px-6">Products They Sell</th>
                    <th className="py-4 px-6">Submission Time</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-xs font-semibold">
                  {filteredLeads.map((lead) => {
                    const waLink = `https://wa.me/${lead.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${lead.fullName}, I noticed you requested Shipplix's Export Blueprint! My name is from Shipplix. I'd love to help you scale your ${lead.products} export sales. Let's chat!`)}`;
                    
                    return (
                      <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-5 px-6 space-y-1">
                          <div className="text-slate-900 font-black uppercase tracking-tight text-xs flex items-center gap-1.5">
                            {lead.fullName}
                          </div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide flex items-center gap-1.5">
                            <Briefcase size={12} className="text-blue-900/60" /> {lead.businessName}
                          </div>
                          <div className="text-[10px] text-slate-400 select-all font-mono">
                            {lead.email}
                          </div>
                        </td>

                        <td className="py-5 px-6 space-y-1">
                          <div className="text-slate-900 font-bold font-mono">
                            {lead.whatsapp}
                          </div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide flex items-center gap-1">
                            <MapPin size={12} className="text-red-500" /> {lead.country}
                          </div>
                        </td>

                        <td className="py-5 px-6 max-w-xs">
                          <p className="text-slate-600 font-medium italic line-clamp-2 leading-relaxed">
                            "{lead.products}"
                          </p>
                        </td>

                        <td className="py-5 px-6 text-slate-500 font-bold font-mono text-[10px]">
                          {new Date(lead.timestamp).toLocaleDateString()}<br/>
                          {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </td>

                        <td className="py-5 px-6 text-right">
                          <div className="flex gap-2 justify-end">
                            <a 
                              href={waLink}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase tracking-wider px-3 py-2 rounded-lg flex items-center gap-1 transition-colors border border-emerald-100"
                              title="Connect on WhatsApp"
                            >
                              <MessageSquare size={13} fill="currentColor" className="opacity-80" /> Connect
                            </a>
                            <button 
                              onClick={() => handleDeleteLead(lead.id)}
                              className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-all border border-transparent hover:border-red-100"
                              title="Delete Lead"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
