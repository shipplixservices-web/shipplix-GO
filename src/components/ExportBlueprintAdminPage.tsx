import React, { useState, useEffect } from "react";
import { 
  Database, 
  Check, 
  FileSpreadsheet, 
  Loader2, 
  RefreshCw, 
  LogIn, 
  LogOut, 
  PlusCircle, 
  ExternalLink, 
  ChevronLeft, 
  Trash2,
  AlertCircle,
  HelpCircle,
  Search,
  CheckCircle2,
  Lock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  googleSignIn, 
  logOut, 
  initAuth, 
  getAccessToken 
} from "../lib/firebaseAuth";
import { 
  createSpreadsheet, 
  appendLeadsToSpreadsheet, 
  verifySpreadsheetExists 
} from "../lib/googleSheets";

interface Lead {
  id: string;
  fullName: string;
  businessName: string;
  email: string;
  whatsapp: string;
  country: string;
  products: string;
  businessStage: string;
  monthlyRevenue: string;
  strategySession: boolean;
  futureTips: boolean;
  timestamp: string;
  synced: boolean;
}

interface ExportBlueprintAdminPageProps {
  onBack: () => void;
}

export default function ExportBlueprintAdminPage({ onBack }: ExportBlueprintAdminPageProps) {
  // Authentication & Session state
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authRequired, setAuthRequired] = useState(true);

  // Configuration state
  const [spreadsheetId, setSpreadsheetId] = useState("");
  const [sheetInput, setSheetInput] = useState("");
  const [isVerifyingSheet, setIsVerifyingSheet] = useState(false);
  const [sheetVerified, setSheetVerified] = useState(false);

  // Leads list and table state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "unsynced" | "synced">("all");

  // Interaction/Action loaders
  const [isCreatingSheet, setIsCreatingSheet] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Load backend leads & Google Sheets configuration
  const loadConfigAndLeads = async () => {
    setIsLoadingLeads(true);
    try {
      // 1. Fetch leads from server
      const leadsRes = await fetch("/api/leads");
      if (leadsRes.ok) {
        const data = await leadsRes.json();
        setLeads(data);
      }

      // 2. Fetch Google Sheets config from server
      const configRes = await fetch("/api/admin/config");
      if (configRes.ok) {
        const config = await configRes.json();
        if (config.spreadsheetId) {
          setSpreadsheetId(config.spreadsheetId);
          setSheetInput(config.spreadsheetId);
        }
      }
    } catch (err) {
      console.error("Failed to load initial admin data:", err);
      showFeedback("error", "Failed to connect to backend server endpoints.");
    } finally {
      setIsLoadingLeads(false);
    }
  };

  // Listen to Auth State
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, accessToken) => {
        setUser(currentUser);
        setToken(accessToken);
        setAuthRequired(false);
      },
      () => {
        setUser(null);
        setToken(null);
        setAuthRequired(true);
      }
    );

    loadConfigAndLeads();

    return () => unsubscribe();
  }, []);

  // Show temporary action feedback toast
  const showFeedback = (type: "success" | "error", text: string) => {
    setFeedback({ type, text });
    setTimeout(() => {
      setFeedback(null);
    }, 6000);
  };

  // Log in to Google Account with Firebase popup
  const handleGoogleLogin = async () => {
    setIsAuthenticating(true);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setToken(result.accessToken);
        setAuthRequired(false);
        showFeedback("success", `Authenticated successfully as ${result.user.email}`);
      }
    } catch (err: any) {
      console.error("Authentication failed:", err);
      showFeedback("error", err.message || "Google Authentication failed. Please check permissions.");
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Sign Out helper
  const handleSignOut = async () => {
    try {
      await logOut();
      setUser(null);
      setToken(null);
      setAuthRequired(true);
      showFeedback("success", "Signed out of Google Sheets session successfully.");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Save specific Spreadsheet ID to the server config
  const saveSpreadsheetId = async (id: string) => {
    try {
      const response = await fetch("/api/admin/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spreadsheetId: id })
      });

      if (response.ok) {
        setSpreadsheetId(id);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Failed to save config on server:", err);
      return false;
    }
  };

  // Extract Spreadsheet ID from standard URL strings
  const parseSpreadsheetIdInput = (input: string): string => {
    const trimmed = input.trim();
    if (trimmed.includes("docs.google.com/spreadsheets/d/")) {
      const parts = trimmed.split("/d/");
      if (parts[1]) {
        return parts[1].split("/")[0];
      }
    }
    return trimmed;
  };

  // Link and verify existing Spreadsheet
  const handleLinkSpreadsheet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      showFeedback("error", "Please authenticate with Google first to link spreadsheets.");
      return;
    }

    const id = parseSpreadsheetIdInput(sheetInput);
    if (!id) {
      showFeedback("error", "Please provide a valid Spreadsheet ID or full Google Sheets URL.");
      return;
    }

    setIsVerifyingSheet(true);
    try {
      const exists = await verifySpreadsheetExists(token, id);
      if (exists) {
        const saved = await saveSpreadsheetId(id);
        if (saved) {
          setSheetVerified(true);
          showFeedback("success", "Google Spreadsheet connected and verified successfully!");
        } else {
          showFeedback("error", "Connected to sheet, but failed to save configuration on Express backend.");
        }
      } else {
        showFeedback("error", "Could not verify Google Sheet. Check if you have permissions or if the ID is correct.");
      }
    } catch (err: any) {
      showFeedback("error", err.message || "Failed to link Google Spreadsheet.");
    } finally {
      setIsVerifyingSheet(false);
    }
  };

  // Auto create a beautifully configured Spreadsheet
  const handleCreateNewSheet = async () => {
    if (!token) {
      showFeedback("error", "Please authenticate with Google first.");
      return;
    }

    setIsCreatingSheet(true);
    try {
      const newId = await createSpreadsheet(token, `Shipplix Export Blueprint Leads (${new Date().toLocaleDateString()})`);
      if (newId) {
        const saved = await saveSpreadsheetId(newId);
        if (saved) {
          setSheetInput(newId);
          setSheetVerified(true);
          showFeedback("success", "Created a new 'Shipplix Export Blueprint Leads' Google Sheet successfully!");
        } else {
          showFeedback("error", "Created spreadsheet, but failed to persist the configuration on the backend.");
        }
      }
    } catch (err: any) {
      showFeedback("error", err.message || "Spreadsheet creation failed.");
    } finally {
      setIsCreatingSheet(false);
    }
  };

  // Sync Unsynced leads to Google Sheets
  const handleSyncLeads = async () => {
    if (!token) {
      showFeedback("error", "Please authorize your Google Account to push syncs.");
      return;
    }
    if (!spreadsheetId) {
      showFeedback("error", "No Spreadsheet linked. Please link or create a Google Sheet first.");
      return;
    }

    const unsyncedLeads = leads.filter(l => !l.synced);
    if (unsyncedLeads.length === 0) {
      showFeedback("success", "All leads are already in sync!");
      return;
    }

    setIsSyncing(true);
    try {
      // 1. Double check spreadsheet permissions
      const exists = await verifySpreadsheetExists(token, spreadsheetId);
      if (!exists) {
        throw new Error("Cannot access the linked Google Sheet. Verify sharing settings or re-link the sheet.");
      }

      // 2. Append rows to Google Sheet
      await appendLeadsToSpreadsheet(token, spreadsheetId, unsyncedLeads);

      // 3. Notify backend of successful sync
      const syncIds = unsyncedLeads.map(l => l.id);
      const updateRes = await fetch("/api/leads/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadIds: syncIds })
      });

      if (updateRes.ok) {
        showFeedback("success", `Successfully synced ${unsyncedLeads.length} lead(s) to your Google Sheet!`);
        // Refresh leads list
        await loadConfigAndLeads();
      } else {
        showFeedback("success", `Appended to Google Sheet, but backend failed to update sync statuses.`);
      }
    } catch (err: any) {
      console.error("Sync failure:", err);
      showFeedback("error", err.message || "Failed to synchronize lead data to Google Sheets.");
    } finally {
      setIsSyncing(false);
    }
  };

  // Mock a Lead Submission for testing/demo purposes
  const handleAddMockLead = async () => {
    const mockNames = ["Adegoke Balogun", "Kofi Mensah", "Nneka Okafor", "Fatoumata Diallo", "Chioma Davies"];
    const mockBusinesses = ["Okafor Agri Sourcing", "West Africa Textiles Ltd", "Organic Shea Cosmetics", "Pure Cocoa Export", "Ankara Premium Crafts"];
    const mockEmails = ["adegoke@balogunagri.com", "k.mensah@ghanacocoa.org", "nneka@sheacosmetics.com", "info@diallofoods.com", "chioma@ankaracrafts.com"];
    const mockProducts = ["Processed Cocoa, Shea Butter", "Ankara Garments & Accessories", "Raw Cassava Flake Sacks", "Dried Herbs, Spices, Bitter Kola", "Handcrafted Leather Bags"];
    const mockStages = ["Just Starting", "Just Starting", "Just Starting", "Just Starting", "Just Starting"];
    const mockRevenues = ["Under 500k", "1M - 5M", "Over 5M", "Under 500k", "1M - 5M"];
    const mockCountries = ["Nigeria", "Ghana", "Nigeria", "Guinea", "Nigeria"];

    const randomIndex = Math.floor(Math.random() * mockNames.length);

    const mockFormData = {
      fullName: mockNames[randomIndex],
      businessName: mockBusinesses[randomIndex],
      email: mockEmails[randomIndex],
      whatsapp: `+234 80${Math.floor(10000000 + Math.random() * 90000000)}`,
      country: mockCountries[randomIndex],
      products: mockProducts[randomIndex],
      businessStage: mockStages[randomIndex],
      monthlyRevenue: mockRevenues[randomIndex],
      strategySession: true,
      futureTips: true
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mockFormData)
      });
      if (res.ok) {
        showFeedback("success", "Mock lead generated. Ready for Google Sheets sync!");
        await loadConfigAndLeads();
      }
    } catch (err) {
      console.error("Failed to add mock lead:", err);
    }
  };

  // Filter & Search leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.country.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterType === "synced") return matchesSearch && lead.synced;
    if (filterType === "unsynced") return matchesSearch && !lead.synced;
    return matchesSearch;
  });

  const unsyncedCount = leads.filter(l => !l.synced).length;

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 md:px-10 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors text-slate-600"
            >
              <ChevronLeft size={18} />
            </button>
            <div>
              <div className="flex items-center gap-2 text-xs font-black text-shipplix-blue uppercase tracking-widest mb-1">
                <Database size={12} />
                Shipplix CRM
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                Export Blueprint Leads Tracker
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={handleAddMockLead}
              className="px-4 py-2.5 bg-slate-200/80 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all border border-slate-300 flex items-center gap-1.5"
            >
              <PlusCircle size={14} />
              Add Test Lead
            </button>
            <button 
              onClick={loadConfigAndLeads}
              className="p-2.5 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-xl transition-all"
              title="Refresh Lead Data"
            >
              <RefreshCw size={16} className={isLoadingLeads ? "animate-spin" : ""} />
            </button>
          </div>
        </div>

        {/* Feedback Alert Banner */}
        <AnimatePresence>
          {feedback && (
            <motion.div 
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              className={`p-4 rounded-2xl border mb-6 flex items-start gap-3 shadow-md ${
                feedback.type === "success" 
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                  : "bg-red-50 border-red-200 text-red-800"
              }`}
            >
              {feedback.type === "success" ? <CheckCircle2 size={18} className="shrink-0 text-emerald-600" /> : <AlertCircle size={18} className="shrink-0 text-red-600" />}
              <span className="text-xs font-bold leading-relaxed">{feedback.text}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Two-Column Administration Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Google Sheets Configuration Block */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Google Sheets Sync Controller Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileSpreadsheet size={16} className="text-emerald-500" />
                Sheets Connection State
              </h2>

              {/* Step 1: OAuth Authentication */}
              <div className="mb-6">
                <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                  1. Authenticate Account
                </label>
                {authRequired ? (
                  <button 
                    onClick={handleGoogleLogin}
                    disabled={isAuthenticating}
                    className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-white border-2 border-slate-200 hover:border-slate-300 active:bg-slate-50 text-slate-700 text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-sm group"
                  >
                    {isAuthenticating ? (
                      <Loader2 size={16} className="animate-spin text-slate-500" />
                    ) : (
                      <LogIn size={16} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    )}
                    Sign In with Google
                  </button>
                ) : (
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between gap-3">
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-slate-800 truncate">
                        {user?.displayName || "Connected App"}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate font-mono">
                        {user?.email || "shipplixservices@gmail.com"}
                      </div>
                    </div>
                    <button 
                      onClick={handleSignOut}
                      className="p-2 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all"
                      title="Disconnect Google Account"
                    >
                      <LogOut size={16} />
                    </button>
                  </div>
                )}
              </div>

              {/* Step 2: Spreadsheet Configuration */}
              <div className="mb-6">
                <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                  2. Spreadsheet Destination
                </label>
                
                {spreadsheetId ? (
                  <div className="p-4 bg-emerald-50/50 border border-emerald-200/80 rounded-2xl mb-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="overflow-hidden">
                        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-800 mb-1 flex items-center gap-1">
                          <Check size={12} /> Spreadsheet Active
                        </div>
                        <div className="text-[10px] text-slate-500 truncate font-mono select-all">
                          ID: {spreadsheetId}
                        </div>
                      </div>
                      <a 
                        href={`https://docs.google.com/spreadsheets/d/${spreadsheetId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-shipplix-blue"
                        title="Open in Google Sheets"
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl mb-4 flex items-start gap-2.5">
                    <AlertCircle size={14} className="text-orange-500 shrink-0 mt-0.5" />
                    <div className="text-[11px] text-orange-800 leading-normal font-medium">
                      No Google Sheet connected. Create one or enter an existing spreadsheet ID to sync lead records.
                    </div>
                  </div>
                )}

                <form onSubmit={handleLinkSpreadsheet} className="space-y-3">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Paste Google Sheet URL or ID"
                      value={sheetInput}
                      onChange={(e) => setSheetInput(e.target.value)}
                      disabled={authRequired}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-900 focus:bg-white text-xs font-medium rounded-xl transition-all outline-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button 
                      type="submit"
                      disabled={authRequired || isVerifyingSheet}
                      className="flex-1 py-2.5 px-3 bg-blue-900 hover:bg-blue-950 disabled:bg-slate-200 disabled:text-slate-400 text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      {isVerifyingSheet && <Loader2 size={12} className="animate-spin" />}
                      Verify & Save
                    </button>
                    <button 
                      type="button"
                      onClick={handleCreateNewSheet}
                      disabled={authRequired || isCreatingSheet}
                      className="py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-200 disabled:text-slate-400 text-white text-[10px] font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
                      title="Create fresh structured spreadsheet"
                    >
                      {isCreatingSheet ? (
                        <Loader2 size={12} className="animate-spin" />
                      ) : (
                        <PlusCircle size={12} />
                      )}
                      Auto-Create Sheet
                    </button>
                  </div>
                </form>
              </div>

              {/* Sync Button Action */}
              <div className="pt-4 border-t border-slate-100">
                <button 
                  onClick={handleSyncLeads}
                  disabled={authRequired || !spreadsheetId || isSyncing || unsyncedCount === 0}
                  className="w-full py-4 bg-[#FEB919] hover:bg-[#e2a412] disabled:bg-slate-100 disabled:text-slate-400 disabled:border-transparent disabled:shadow-none text-blue-950 text-xs font-black uppercase tracking-widest rounded-2xl transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  {isSyncing ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <RefreshCw size={14} />
                  )}
                  Push {unsyncedCount} Leads to Google Sheets
                </button>
                {unsyncedCount > 0 && (
                  <div className="mt-3 text-center text-[10px] font-bold text-orange-500 flex items-center justify-center gap-1">
                    <AlertCircle size={10} />
                    {unsyncedCount} lead(s) are local-only and ready for synchronization!
                  </div>
                )}
              </div>
            </div>

            {/* Quick Helper Panel */}
            <div className="bg-slate-100 border border-slate-200/80 rounded-3xl p-6">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <HelpCircle size={14} className="text-shipplix-blue" />
                Integration Instructions
              </h3>
              <ul className="text-[11px] text-slate-500 space-y-3 font-medium leading-relaxed">
                <li>
                  <strong className="text-slate-700">1. Authenticate first</strong>: Sign in with your shipplixservices@gmail.com Google account. This gives the app permission to write lead records to Google Sheets.
                </li>
                <li>
                  <strong className="text-slate-700">2. Setup spreadsheet</strong>: Click "Auto-Create Sheet" to instantly spin up a clean spreadsheet named "Shipplix Export Blueprint Leads" with all table headers, or paste your existing Sheet URL and click "Verify & Save".
                </li>
                <li>
                  <strong className="text-slate-700">3. Sync on demand</strong>: When customers fill the download form on your site, they are securely saved. Open this Admin panel anytime and click the yellow button to append new entries directly!
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Collected Leads Management Table */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Leads Table Card */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              
              {/* Table Controls Bar */}
              <div className="p-6 border-b border-slate-100 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <Database size={16} className="text-shipplix-blue" />
                    Collected Lead Records ({leads.length})
                  </h2>

                  {/* Filter Switches */}
                  <div className="flex border border-slate-200 rounded-xl p-0.5 bg-slate-50 shrink-0">
                    <button 
                      onClick={() => setFilterType("all")}
                      className={`px-3 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all ${filterType === "all" ? "bg-white text-blue-950 shadow-xs border border-slate-200/50" : "text-slate-400 hover:text-slate-700"}`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setFilterType("unsynced")}
                      className={`px-3 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all flex items-center gap-1 ${filterType === "unsynced" ? "bg-white text-orange-600 shadow-xs border border-slate-200/50" : "text-slate-400 hover:text-slate-700"}`}
                    >
                      Pending ({leads.filter(l => !l.synced).length})
                    </button>
                    <button 
                      onClick={() => setFilterType("synced")}
                      className={`px-3 py-1.5 text-[10px] font-black uppercase rounded-lg transition-all flex items-center gap-1 ${filterType === "synced" ? "bg-white text-emerald-600 shadow-xs border border-slate-200/50" : "text-slate-400 hover:text-slate-700"}`}
                    >
                      Synced ({leads.filter(l => l.synced).length})
                    </button>
                  </div>
                </div>

                {/* Search input */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Search size={14} />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Search by Full Name, Business Name, Country, or Email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-blue-900 focus:bg-white text-xs font-medium rounded-xl transition-all outline-none"
                  />
                </div>
              </div>

              {/* Responsive Table Content */}
              <div className="overflow-x-auto">
                {isLoadingLeads ? (
                  <div className="p-20 text-center text-slate-400 space-y-3">
                    <Loader2 size={32} className="animate-spin mx-auto text-blue-900" />
                    <div className="text-xs font-bold uppercase tracking-wider">Loading Shipplix CRM leads...</div>
                  </div>
                ) : filteredLeads.length === 0 ? (
                  <div className="p-20 text-center text-slate-400 space-y-2">
                    <Database size={32} className="mx-auto text-slate-300" />
                    <div className="text-xs font-black uppercase tracking-wider">No matching lead records found.</div>
                    <div className="text-[11px] font-medium text-slate-400">Try running some mock tests or clear search term parameters.</div>
                  </div>
                ) : (
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100 text-[9px] font-black uppercase tracking-wider text-slate-400">
                        <th className="py-4 px-6">Lead Sourced</th>
                        <th className="py-4 px-6">Full Name</th>
                        <th className="py-4 px-6">Business Details</th>
                        <th className="py-4 px-6">Contact / WhatsApp</th>
                        <th className="py-4 px-6">Products</th>
                        <th className="py-4 px-6">Monthly Revenue</th>
                        <th className="py-4 px-6 text-center">Sync</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[11px] font-medium text-slate-600">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="font-bold text-slate-800">
                              {new Date(lead.timestamp).toLocaleDateString()}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <div className="font-black text-slate-900 leading-tight">{lead.fullName}</div>
                            <div className="text-[10px] text-slate-400">{lead.email}</div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="font-bold text-slate-800 leading-tight">{lead.businessName}</div>
                            <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <span className="uppercase font-black text-[9px] bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded-sm shrink-0">
                                {lead.country}
                              </span>
                              <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-sm">
                                {lead.businessStage}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6 whitespace-nowrap">
                            <a 
                              href={`https://wa.me/${lead.whatsapp.replace(/[^0-9+]/g, "")}`}
                              target="_blank"
                              rel="noreferrer"
                              className="font-bold text-blue-900 hover:underline flex items-center gap-1 font-mono"
                            >
                              {lead.whatsapp}
                            </a>
                            <div className="text-[9px] text-slate-400 flex items-center gap-2 mt-0.5">
                              {lead.strategySession && <span className="text-emerald-600 font-bold">✓ Strategy Requested</span>}
                            </div>
                          </td>
                          <td className="py-4 px-6 max-w-[160px] truncate" title={lead.products}>
                            {lead.products}
                          </td>
                          <td className="py-4 px-6 font-bold text-slate-700">
                            {lead.monthlyRevenue}
                          </td>
                          <td className="py-4 px-6 text-center whitespace-nowrap">
                            {lead.synced ? (
                              <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                                <Check size={10} className="stroke-[3]" /> Synced
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
                                Pending
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              {/* Sync Table Footer Indicator */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Showing {filteredLeads.length} of {leads.length} lead submissions
                </span>
                <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                  <Lock size={10} /> Secure sandbox administration environment
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
