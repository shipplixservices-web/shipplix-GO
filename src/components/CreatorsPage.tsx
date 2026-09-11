import React, { useState, useRef } from 'react';
import { 
  Video, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  Smartphone, 
  DollarSign, 
  Users, 
  Share2, 
  Copy, 
  Check, 
  AlertTriangle, 
  Film, 
  FileText, 
  ThumbsUp, 
  Award, 
  BadgeCheck, 
  ExternalLink,
  Layers,
  MessageCircle,
  Eye,
  CheckCheck,
  TrendingUp,
  Globe,
  Radio,
  Clock,
  Sparkle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import creatorHeroImg from '../assets/images/creator_recording_hero_1789126747712.jpg';
import creatorUnboxImg from '../assets/images/creator_phone_unboxing_1789126763524.jpg';

interface CreatorsPageProps {
  onNavigate?: (path: string) => void;
}

export default function CreatorsPage({ onNavigate }: CreatorsPageProps) {
  const applicationFormRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    tiktokUsername: '',
    instagramUsername: '',
    facebookUsername: '',
    youtubeChannel: '',
    primaryPlatform: 'TikTok',
    followersCount: '500 - 2,500',
    contentType: 'Lifestyle & Vlogs',
    country: 'Nigeria',
    whyJoin: '',
    referralCode: '',
    agreeTerms: false
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApplication, setSubmittedApplication] = useState<{
    id: string;
    fullName: string;
    whatsapp: string;
    primaryPlatform: string;
  } | null>(null);

  const [copiedId, setCopiedId] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.whatsapp.trim()) errors.whatsapp = 'Valid WhatsApp phone number required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email address required';
    if (!formData.whyJoin.trim()) errors.whyJoin = 'Please share a brief sentence on why you want to create for Shipplix';
    if (!formData.agreeTerms) errors.agreeTerms = 'You must accept the Shipplix creator program guidelines';

    // Must have at least one social handle filled
    const hasHandle = formData.tiktokUsername.trim() || 
                      formData.instagramUsername.trim() || 
                      formData.facebookUsername.trim() || 
                      formData.youtubeChannel.trim();
    if (!hasHandle) {
      errors.primaryHandle = 'Please provide at least one active social media handle (TikTok, IG, FB or YouTube)';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Generate reference code
    const generatedRef = `SHP-CR-${Math.floor(1000 + Math.random() * 9000)}`;

    const newApplication = {
      id: generatedRef,
      fullName: formData.fullName.trim(),
      whatsapp: formData.whatsapp.trim(),
      email: formData.email.trim(),
      tiktok: formData.tiktokUsername.trim(),
      instagram: formData.instagramUsername.trim(),
      facebook: formData.facebookUsername.trim(),
      youtube: formData.youtubeChannel.trim(),
      primaryPlatform: formData.primaryPlatform,
      followers: formData.followersCount,
      contentType: formData.contentType,
      country: formData.country,
      whyJoin: formData.whyJoin.trim(),
      referralCode: formData.referralCode.trim(),
      submittedAt: new Date().toISOString()
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('shipplix_creator_applications') || '[]');
      existing.unshift(newApplication);
      localStorage.setItem('shipplix_creator_applications', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage save error', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedApplication({
        id: generatedRef,
        fullName: formData.fullName.trim(),
        whatsapp: formData.whatsapp.trim(),
        primaryPlatform: formData.primaryPlatform
      });
      // Scroll to application card confirmation
      applicationFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 800);
  };

  const copyRefId = () => {
    if (submittedApplication?.id) {
      navigator.clipboard.writeText(submittedApplication.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2500);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#032B73] text-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-blue-950">
        {/* Subtle Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FEB919]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Official Program Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-amber-300">
                <BadgeCheck size={16} className="text-[#FEB919]" />
                <span>Shipplix Creator &amp; Affiliate Program</span>
              </div>

              {/* PRIMARY HEADLINE */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
                Get Paid to Create Content for <span className="text-[#FEB919] underline decoration-rose-500 decoration-4 underline-offset-8">Shipplix</span>
              </h1>

              {/* SUBHEAD */}
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl font-black tracking-wide text-amber-400 uppercase">
                  Create. Post. Refer. Earn.
                </p>
                <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Shipplix is building a nationwide network of short-form video creators and affiliates who can help more people discover Shipplix's reliable international shipping services to the USA, UK, Canada, and Europe.
                </p>
              </div>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/15">
                  <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Scripts Included</div>
                  <div className="text-sm font-black text-white mt-0.5">Ready-to-Shoot</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/15">
                  <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Fast Approval</div>
                  <div className="text-sm font-black text-white mt-0.5">Dedicated Desk</div>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/15">
                  <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Per Approved Video</div>
                  <div className="text-sm font-black text-emerald-400 mt-0.5">₦1,000+ Base Pay</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={() => scrollToSection(applicationFormRef)}
                  className="w-full sm:w-auto bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-4 px-8 rounded-xl text-base uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply to Become a Shipplix Creator</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => scrollToSection(howItWorksRef)}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl text-base border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Learn How It Works</span>
                  <ChevronDown size={18} />
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-300 font-medium pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  Free to Apply
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  500+ Followers
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  Authentic Brand
                </span>
              </div>
            </div>

            {/* Right Media Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                {/* Visual Frame */}
                <div className="bg-slate-900/80 p-2.5 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-md">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800">
                    <img
                      src={creatorHeroImg}
                      alt="Nigerian creator recording video content with ring light and smartphone"
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30"></div>
                    
                    {/* Live Recording Simulation Badge */}
                    <div className="absolute top-3 left-3 bg-red-600/90 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                      <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                      Creator Mode
                    </div>

                    {/* Short-form social badges */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/15">
                      <span>TikTok</span>
                      <span className="text-slate-400">•</span>
                      <span>IG Reels</span>
                      <span className="text-slate-400">•</span>
                      <span>Shorts</span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-3 inset-x-3 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-white">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-extrabold text-[#FEB919]">Script Supplied by Shipplix</span>
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">Review &amp; Earn</span>
                      </div>
                      <p className="text-xs text-slate-200 font-medium line-clamp-2 leading-snug">
                        "Need to send Egusi, Kpomo, or fashion pieces to your family in Texas? Here is how Shipplix handles it safely..."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Card */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-black text-lg">
                    ₦
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Reward Streams</div>
                    <div className="text-xs font-black text-blue-900">Content • Performance • Referrals</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1 — WHAT IS THE SHIPPLIX CREATOR PROGRAM?
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Overview
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              What is the Shipplix Creator Program?
            </h2>
            <p className="text-slate-600 text-base md:text-lg mt-3 font-medium leading-relaxed">
              A structured, transparent partnership connecting active short-form content creators with an international freight and logistics leader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 relative">
              <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center mb-4 shadow-md">
                <FileText size={24} className="text-[#FEB919]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Approved Scripts &amp; Hooks</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Shipplix provides approved content ideas, tested hooks, and word-for-word scripts. You never have to guess what topics will perform.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 relative">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4 shadow-md">
                <Smartphone size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Your Own Natural Style</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Record short-form videos in your own natural voice and camera presence. Submit the video to Shipplix for quick verification, then publish.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 relative">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-md">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">Multiple Earning Tiers</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Earn from approved published content, performance milestones, and qualified customer referrals, subject to current program terms.
              </p>
            </div>
          </div>

          {/* Emphasized Callout Box */}
          <div className="mt-10 bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-blue-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-widest">
                <Sparkles size={16} />
                No Guesswork Required
              </div>
              <p className="text-xl sm:text-2xl font-black text-white leading-tight">
                You don't need to write the script yourself. Shipplix provides the content direction and approved scripts.
              </p>
              <p className="text-sm text-slate-300 font-medium">
                You bring your camera confidence, authentic delivery, and community engagement. We handle the messaging.
              </p>
            </div>

            <button
              onClick={() => scrollToSection(applicationFormRef)}
              className="whitespace-nowrap bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-3.5 px-6 rounded-xl text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md"
            >
              Join the Network
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — HOW IT WORKS (5-STEP PROCESS)
          ========================================================================= */}
      <section ref={howItWorksRef} className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200">
              Simple Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-slate-600 text-base font-medium mt-2">
              From application to payout: a clear, 5-step transparent creator journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-900 text-white font-black text-base flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2">Apply</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Join the Shipplix Creator &amp; Affiliate Program by submitting your social handles and creator profile.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-blue-900 uppercase">
                Step 01 • Fast Review
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FEB919] text-[#032B73] font-black text-base flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2">Receive Your Script</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Shipplix provides approved content ideas, proven hooks, talking points, and word-for-word scripts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-amber-600 uppercase">
                Step 02 • Plug &amp; Play
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-900 text-white font-black text-base flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2">Record Your Video</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Record a natural, authentic video using the supplied script on your phone in your own authentic voice.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-blue-900 uppercase">
                Step 03 • Natural Voice
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-rose-600 text-white font-black text-base flex items-center justify-center mb-4">
                  4
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2">Submit &amp; Publish</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Send your video to Shipplix for quick review before publishing. Once approved, post it on your platform.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-rose-600 uppercase">
                Step 04 • Compliance Check
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-base flex items-center justify-center mb-4">
                  5
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2">Earn</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Earn according to the creator and affiliate reward structure: approved content, milestones, and customer referrals.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700 uppercase">
                Step 05 • Verified Payout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — WHO CAN APPLY?
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                Eligibility
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Who Can Apply?
              </h2>
              <p className="text-slate-600 text-base font-medium leading-relaxed">
                We work with passionate creators across TikTok, Instagram, Facebook, and YouTube who take pride in publishing authentic, high-quality content.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                <div className="font-black text-slate-900 text-base pb-2 border-b border-slate-200">
                  You should have:
                </div>
                <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>At least <strong>500 followers</strong> on your active platform</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>A public, active social media account</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>An active TikTok, Instagram, Facebook or YouTube presence</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>Original content that reflects your genuine style</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>A genuine, engaged audience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>Good communication and responsiveness</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>Willingness to follow Shipplix's content guidelines</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                    <span>Willingness to submit videos for approval before publishing</span>
                  </li>
                </ul>
              </div>

              {/* Engagement note */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs font-semibold text-amber-900 flex items-start gap-3">
                <Sparkle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Creators with strong engagement</strong> may also be considered based on content quality, communication clarity, and audience relevance.
                </div>
              </div>
            </div>

            {/* Visual Side Card */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#FEB919]">Creator Profile Match</span>
                  <span className="bg-white/10 text-[10px] px-2.5 py-1 rounded-full text-slate-300 font-bold uppercase">All Niches</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                    <div className="font-extrabold text-white text-sm mb-1">Lifestyle &amp; Vlogs</div>
                    <p className="text-slate-400 text-[11px]">Sharing everyday routines, family ties, and diaspora connections.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                    <div className="font-extrabold text-white text-sm mb-1">Comedy &amp; Skits</div>
                    <p className="text-slate-400 text-[11px]">Relatable Nigerian abroad situations and food parcel surprises.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                    <div className="font-extrabold text-white text-sm mb-1">Business &amp; Fashion</div>
                    <p className="text-slate-400 text-[11px]">Vendors exporting Aso-Ebi, hair, beauty, and cultural products.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                    <div className="font-extrabold text-white text-sm mb-1">Food &amp; Spices</div>
                    <p className="text-slate-400 text-[11px]">Egusi, crayfish, dried fish, and authentic African delicacies.</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Application Status:</span>
                  <span className="text-emerald-400 font-black flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Applications Currently Open
                  </span>
                </div>

                <button
                  onClick={() => scrollToSection(applicationFormRef)}
                  className="w-full bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-3.5 px-4 rounded-xl text-center text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Your Social Profile
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — HOW YOU CAN EARN
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200">
              Rewards Structure
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Create Content. Build Your Audience. Earn More.
            </h2>
            <p className="text-slate-600 text-base font-medium mt-2">
              Shipplix offers a credible, tiered compensation model based on approved creative work, content performance, and real business impact.
            </p>
          </div>

          {/* Core Rewards Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 1. Content Rewards */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center mb-4">
                <Video size={22} className="text-[#FEB919]" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">Stream 1</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Content Rewards</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                Guaranteed base rewards for eligible approved and published Shipplix video content.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs font-bold text-blue-950">
                Base Payout: <span className="text-blue-900 font-black">₦1,000+ per approved &amp; published video</span>
              </div>
            </div>

            {/* 2. Performance Rewards */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4">
                <TrendingUp size={22} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Stream 2</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Performance Rewards</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                Additional milestone bonuses when your published video achieves defined view and engagement targets.
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs font-bold text-amber-950">
                Milestone Bonuses: <span className="text-amber-800 font-black">Tiered per performance tier</span>
              </div>
            </div>

            {/* 3. Referral Rewards */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                <Award size={22} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Stream 3</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Referral Rewards</h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                Creators can earn ongoing commissions when their unique referral code or link brings eligible paying shipping clients.
              </p>
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-xs font-bold text-emerald-950">
                Direct Attribution: <span className="text-emerald-700 font-black">Earn per booked consignment</span>
              </div>
            </div>
          </div>

          {/* Earnings Potential Banner (Credible, No Fake Piles of Cash) */}
          <div className="bg-[#032B73] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-900 text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-block bg-white/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300">
              Opportunity Benchmark
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#FEB919]">
              Potential earnings of up to ₦1,000,000
            </div>
            <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Actual earnings vary based on approved content, content performance, referrals, customer activity and the applicable program terms.
            </p>
            <div className="pt-2 text-[11px] text-slate-400 font-semibold max-w-xl mx-auto border-t border-white/10">
              Payment is subject to video approval, successful publication, and strict adherence to the applicable program rules.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — WHY CREATE FOR SHIPPLIX? (4 BENEFIT CARDS)
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Creator Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Why Create for Shipplix?
            </h2>
            <p className="text-slate-600 text-base font-medium mt-2">
              We remove the hardest parts of commercial brand deals so you can focus on creating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                <Smartphone size={22} className="text-[#FEB919]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-900">Use Your Own Style</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  You don't have to sound like a traditional advertisement. Deliver the approved message naturally in your own voice.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#FEB919] text-[#032B73] flex items-center justify-center shrink-0 font-black">
                <FileText size={22} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-900">Get Scripts From Shipplix</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  You don't have to constantly think about what to say. Shipplix provides content direction and scripts.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0">
                <Award size={22} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-900">Build Your Portfolio</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  Create real commercial content and build your experience as a creator with an established international logistics brand.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Users size={22} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-900">Earn From Referrals</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  Your audience can become customers, giving you another opportunity to earn recurring commissions on international cargo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — CONTENT CATEGORIES
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200">
              Creative Library
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Content Categories
            </h2>
            <p className="text-slate-600 text-base font-medium mt-2">
              Examples of the high-converting content angles and short-form themes you may receive from Shipplix.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-10">
            {[
              { title: "Nigeria → USA Shipping", desc: "Door-to-door air freight to Houston, Atlanta, NY, Dallas & all 50 states." },
              { title: "Nigeria → UK Shipping", desc: "Express delivery to London, Manchester, Birmingham & Scotland." },
              { title: "Shipping Questions & Answers", desc: "Addressing everyday diaspora questions on customs and packaging." },
              { title: "Diaspora Shipping", desc: "Connecting families abroad with home food, memories, and care parcels." },
              { title: "Nigerian Goods Abroad", desc: "How African stores in the West stock Nigerian products safely." },
              { title: "Business Shipping", desc: "Commercial freight for African fashion designers, merchants & beauty brands." },
              { title: "How Shipping Works", desc: "Simple explainer on Lagos hub intake, air freight dispatch & delivery." },
              { title: "Shipping Tips & Tricks", desc: "How to properly seal, weigh, and prepare packages for international flights." },
              { title: "Common Shipping Mistakes", desc: "Educating viewers on avoiding illegal carriers or unverified middlemen." },
              { title: "Shipplix Services", desc: "Highlighting express air freight, group cargo, and verified tracking." },
              { title: "Customer Education", desc: "Demystifying customs rules, FDA regulations, and prohibited export lists." },
              { title: "Authentic Unboxing", desc: "Showcasing vacuum-sealed packaging and intact parcels arriving overseas." }
            ].map((cat, idx) => (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-sm hover:border-blue-300 transition-colors">
                <div className="text-xs font-black text-blue-900 mb-1">{cat.title}</div>
                <div className="text-[11px] text-slate-500 font-medium leading-relaxed">{cat.desc}</div>
              </div>
            ))}
          </div>

          {/* Strict Compliance Warning */}
          <div className="bg-rose-50 border-l-4 border-rose-600 p-4 sm:p-5 rounded-r-xl text-xs font-medium text-rose-950 flex items-start gap-3">
            <AlertTriangle size={20} className="text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-rose-900 font-extrabold uppercase tracking-wide">Strict Information Integrity:</strong>
              <p className="mt-1 leading-relaxed">
                Creators will receive approved content direction and must not invent shipping prices, delivery timeframes, prohibited-item exceptions, or any company claims. All operational facts are provided in the script.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — CREATOR CONTENT PROCESS
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
                Quality Assurance
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Before You Post: Send Your Video to Shipplix
              </h2>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                To protect our customers and preserve your credibility as a creator, every video undergoes a fast, structured review before going live.
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Shipplix Reviews Every Video For:</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Accuracy</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Brand Representation</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Shipping Details</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Guideline Compliance</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 font-medium">
                Once reviewed and approved by our Creator Desk, you receive the green light to publish on your selected social channels.
              </div>
            </div>

            <div className="md:col-span-6">
              {/* Highlighted Notice Card */}
              <div className="bg-blue-900 text-white p-6 sm:p-8 rounded-2xl border border-blue-800 shadow-xl space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                  <ShieldCheck size={16} className="text-[#FEB919]" />
                  Eligibility Rule
                </div>

                <h3 className="text-xl font-black text-white">
                  Pre-Approval Verification
                </h3>

                <p className="text-amber-200 font-bold text-sm leading-relaxed">
                  Important: Videos must be approved before publication to qualify for the applicable creator reward.
                </p>

                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Videos published prior to receiving official approval from the Shipplix Creator Desk cannot be considered for compensation or performance rewards.
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Turnaround Time:</span>
                  <span className="text-emerald-400 font-bold">Typically within 24–48 hours</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — YOUR CONTENT CAN GO FURTHER
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-800">
                <img
                  src={creatorUnboxImg}
                  alt="African creator presenting a shipping package to camera"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2 space-y-4">
              <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-100/60 px-3.5 py-1.5 rounded-full border border-blue-200">
                Amplification
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Your Content Can Go Further
              </h2>
              <p className="text-slate-600 text-base font-medium leading-relaxed">
                Selected creator content may also be considered by Shipplix for its broader marketing channels, including Shipplix official social media and advertising campaigns, subject to the creator agreement and applicable usage permissions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-white border border-slate-200 p-3.5 rounded-xl">
                  <div className="font-black text-slate-900 text-sm mb-1">Paid Ad Feature Opportunity</div>
                  <p className="text-slate-500 text-xs">Top-performing short videos can be boosted as official brand campaigns.</p>
                </div>
                <div className="bg-white border border-slate-200 p-3.5 rounded-xl">
                  <div className="font-black text-slate-900 text-sm mb-1">Portfolio Credibility</div>
                  <p className="text-slate-500 text-xs">Demonstrate real brand impact with an international logistics company.</p>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                * Note: Selection for paid amplification is based on video clarity, audience resonance, and operational relevance. Not every submitted video will be selected for paid advertising.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — CREATOR & AFFILIATE
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Role Clarification
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Creator vs. Affiliate: How They Differ
            </h2>
            <p className="text-slate-600 text-base font-medium mt-2">
              Understand the two functional pathways, or combine both for maximum rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Creator */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-black mb-4">
                  <Film size={20} className="text-[#FEB919]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">Role 01</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Creator</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
                  Focuses primarily on filming, producing, and publishing approved Shipplix short-form videos on their own social media channels using supplied scripts.
                </p>
              </div>
              <div className="bg-white border border-slate-200/80 p-3 rounded-xl text-xs font-semibold text-slate-700">
                Primary Reward: <strong>Approved Content &amp; Milestone Bonuses</strong>
              </div>
            </div>

            {/* Affiliate */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black mb-4">
                  <Share2 size={20} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Role 02</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Affiliate</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
                  Refers potential international shippers and business owners to Shipplix using an assigned creator/referral code or tracking method.
                </p>
              </div>
              <div className="bg-white border border-slate-200/80 p-3 rounded-xl text-xs font-semibold text-slate-700">
                Primary Reward: <strong>Referral Commissions per Paying Shipper</strong>
              </div>
            </div>

            {/* Creator + Affiliate */}
            <div className="bg-blue-900 text-white rounded-2xl p-6 relative flex flex-col justify-between shadow-lg border border-blue-950">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FEB919] text-[#032B73] flex items-center justify-center font-black mb-4">
                  <Sparkles size={20} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">Best of Both</div>
                <h3 className="text-xl font-black text-white mb-3">Creator + Affiliate</h3>
                <p className="text-slate-200 text-sm font-medium leading-relaxed mb-4">
                  Does both: publishes authentic approved videos and provides their community with their assigned referral tracking code. Qualifies for both reward categories.
                </p>
              </div>
              <div className="bg-white/10 border border-white/20 p-3 rounded-xl text-xs font-bold text-amber-300">
                Dual Eligibility: <strong>Content Pay + Referral Commissions</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — IMPORTANT RULES
          ========================================================================= */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-[0.2em] bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
              Integrity &amp; Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Important Rules &amp; Guidelines
            </h2>
            <p className="text-slate-600 text-base font-medium mt-2">
              Shipplix is a compliant international logistics enterprise. We hold all creator partnerships to the highest ethical and factual standards.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <ul className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {[
                "Only submit original content recorded by you.",
                "Do not make false, misleading, or unsubstantiated claims.",
                "Do not invent Shipplix prices or special rates.",
                "Do not guarantee specific delivery dates or flight schedules.",
                "Do not claim Shipplix accepts an item unless explicitly confirmed in the approved script or permitted catalog.",
                "Do not use fake testimonials or fictional customer stories.",
                "Do not impersonate Shipplix staff or logistics clearing officers.",
                "Do not purchase fake followers, artificial views, or bot engagement.",
                "Content must strictly comply with the respective social media platform rules (TikTok, Meta, YouTube).",
                "Shipplix reserves the right to reject content that does not meet its quality or brand guidelines.",
                "Rewards are subject to the current Shipplix Creator & Affiliate Program terms and verification."
              ].map((rule, idx) => (
                <li key={idx} className="py-3.5 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — FAQ
          ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold text-[#032B73] uppercase tracking-[0.2em] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base font-medium mt-2">
              Everything you need to know about joining the Shipplix creator roster.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do I need 1,000 followers?",
                a: "The standard minimum application threshold is 500 followers, but follower count is not the only factor considered. Engagement, audience relevance and content quality may also be considered."
              },
              {
                q: "Do I have to write my own script?",
                a: "No. Shipplix provides approved scripts, proven hooks, and content direction so you always know what to say."
              },
              {
                q: "Can I use my own style?",
                a: "Yes. Creators are encouraged to deliver approved messaging naturally in their own voice, tone, and personality."
              },
              {
                q: "Do I post immediately after recording?",
                a: "No. Submit your video to Shipplix first for approval. Once reviewed and approved, your video can then be published."
              },
              {
                q: "Can I earn from customers I refer?",
                a: "Yes, eligible creators who also act as affiliates may earn referral rewards according to the current program terms."
              },
              {
                q: "Can Shipplix use my video?",
                a: "Selected creator content may be used by Shipplix according to the creator agreement and applicable content-usage permissions."
              },
              {
                q: "How much can I earn?",
                a: "Earnings vary. Eligible creators can earn from approved content, performance and successful referrals. The program may offer potential cumulative earnings of up to ₦1,000,000, but earnings are not guaranteed."
              },
              {
                q: "Is joining free?",
                a: "Yes. There should be no fee to apply to the Shipplix Creator & Affiliate Program. Application is 100% free."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-100/70 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${activeFaq === index ? 'rotate-180 text-blue-900' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-sm font-medium leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — APPLICATION FORM
          ========================================================================= */}
      <section ref={applicationFormRef} className="py-16 md:py-20 bg-slate-100 border-b border-slate-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-[#032B73] text-white p-6 sm:p-8 text-center relative overflow-hidden">
              <div className="relative z-10 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FEB919] bg-white/10 px-3 py-1 rounded-full">
                  Official Application
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Apply to Become a Shipplix Creator
                </h2>
                <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-lg mx-auto">
                  Fill out the form below. Our team reviews creator submissions daily and contacts qualified applicants via WhatsApp and email.
                </p>
              </div>
            </div>

            {/* Form Body or Success State */}
            <div className="p-6 sm:p-10">
              {submittedApplication ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCheck size={36} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900">Application Received</h3>
                    <p className="text-slate-600 text-sm font-medium max-w-md mx-auto leading-relaxed">
                      Thank you for applying to become a Shipplix Creator. Our team will review your application and contact you through the details provided.
                    </p>
                  </div>

                  {/* Reference ID Card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto space-y-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Your Application Reference ID
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl font-black text-[#032B73] tracking-wider font-mono">
                        {submittedApplication.id}
                      </span>
                      <button
                        onClick={copyRefId}
                        className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 transition-colors text-slate-700"
                        title="Copy Reference ID"
                      >
                        {copiedId ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                      </button>
                    </div>
                    {copiedId && (
                      <div className="text-[11px] font-bold text-emerald-600">Copied to clipboard!</div>
                    )}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={`https://wa.me/2348095271168?text=${encodeURIComponent(
                        `Hello Shipplix Creator Desk! I just submitted my application for the Creator & Affiliate Program. My Reference ID is ${submittedApplication.id}. Name: ${submittedApplication.fullName}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <MessageCircle size={18} />
                      <span>Message Creator Desk (08095271168)</span>
                    </a>

                    <button
                      onClick={() => setSubmittedApplication(null)}
                      className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-6 rounded-xl text-sm transition-colors cursor-pointer"
                    >
                      Submit Another Profile
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  
                  {/* Personal Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Chioma Adeyemi"
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                          formErrors.fullName ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-rose-600 text-xs mt-1 font-semibold">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="e.g. +234 801 234 5678"
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                          formErrors.whatsapp ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.whatsapp && (
                        <p className="text-rose-600 text-xs mt-1 font-semibold">{formErrors.whatsapp}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. chioma@gmail.com"
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                          formErrors.email ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-rose-600 text-xs mt-1 font-semibold">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Country of Residence <span className="text-rose-600">*</span>
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      >
                        <option value="Nigeria">Nigeria</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Other">Other International Country</option>
                      </select>
                    </div>
                  </div>

                  {/* Social Handles Block */}
                  <div className="border-t border-slate-200 pt-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-black uppercase tracking-wider text-slate-800">
                        Social Media Channels
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">At least one handle required</span>
                    </div>

                    {formErrors.primaryHandle && (
                      <p className="text-rose-600 text-xs font-semibold bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                        {formErrors.primaryHandle}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          TikTok Username
                        </label>
                        <input
                          type="text"
                          name="tiktokUsername"
                          value={formData.tiktokUsername}
                          onChange={handleInputChange}
                          placeholder="@yourtiktokhandle"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Instagram Username
                        </label>
                        <input
                          type="text"
                          name="instagramUsername"
                          value={formData.instagramUsername}
                          onChange={handleInputChange}
                          placeholder="@yourinstagramhandle"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Facebook Profile / Page
                        </label>
                        <input
                          type="text"
                          name="facebookUsername"
                          value={formData.facebookUsername}
                          onChange={handleInputChange}
                          placeholder="fb.com/yourprofile or Page Name"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          YouTube Channel
                        </label>
                        <input
                          type="text"
                          name="youtubeChannel"
                          value={formData.youtubeChannel}
                          onChange={handleInputChange}
                          placeholder="@yourchannel or URL"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Platform & Audience Parameters */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200 pt-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Platform <span className="text-rose-600">*</span>
                      </label>
                      <select
                        name="primaryPlatform"
                        value={formData.primaryPlatform}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      >
                        <option value="TikTok">TikTok</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="YouTube">YouTube</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Followers Count <span className="text-rose-600">*</span>
                      </label>
                      <select
                        name="followersCount"
                        value={formData.followersCount}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      >
                        <option value="500 - 2,500">500 – 2,500</option>
                        <option value="2,501 - 10,000">2,501 – 10,000</option>
                        <option value="10,001 - 50,000">10,001 – 50,000</option>
                        <option value="50,001 - 100,000">50,001 – 100,000</option>
                        <option value="100,000+">100,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Content Category <span className="text-rose-600">*</span>
                      </label>
                      <select
                        name="contentType"
                        value={formData.contentType}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                      >
                        <option value="Lifestyle & Vlogs">Lifestyle &amp; Vlogs</option>
                        <option value="Comedy & Skits">Comedy &amp; Skits</option>
                        <option value="Business & Finance">Business &amp; Finance</option>
                        <option value="Fashion & Beauty">Fashion &amp; Beauty</option>
                        <option value="Food & Cooking">Food &amp; Cooking</option>
                        <option value="Tech & Gadgets">Tech &amp; Gadgets</option>
                        <option value="Education & Tips">Education &amp; Tips</option>
                        <option value="Other">Other Niche</option>
                      </select>
                    </div>
                  </div>

                  {/* Why Join */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Why do you want to become a Shipplix Creator? <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      name="whyJoin"
                      rows={3}
                      value={formData.whyJoin}
                      onChange={handleInputChange}
                      placeholder="Tell us briefly about your style, your audience, or why you'd like to collaborate with Shipplix..."
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                        formErrors.whyJoin ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.whyJoin && (
                      <p className="text-rose-600 text-xs mt-1 font-semibold">{formErrors.whyJoin}</p>
                    )}
                  </div>

                  {/* Referral Code (Optional) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Referral / Affiliate Code <span className="text-slate-400 font-normal">(Optional, if referred by existing creator)</span>
                    </label>
                    <input
                      type="text"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleInputChange}
                      placeholder="e.g. SHP-CR-XXXX"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  {/* Mandatory Agreement Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-900 focus:ring-blue-900"
                      />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        I confirm that the information I have provided is accurate and I agree to follow the Shipplix Creator &amp; Affiliate Program guidelines.
                      </span>
                    </label>
                    {formErrors.agreeTerms && (
                      <p className="text-rose-600 text-xs mt-1 font-semibold pl-7">{formErrors.agreeTerms}</p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FEB919] hover:bg-[#e2a412] text-[#032B73] font-black py-4 px-6 rounded-xl text-base uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/25 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <span>APPLY NOW</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-medium">
                    Shipplix will never charge any fee to apply or participate. Your contact data is handled strictly in accordance with our Privacy Policy.
                  </p>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FINAL BOTTOM CALL TO ACTION
          ========================================================================= */}
      <section className="py-12 bg-white text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            Ready to Partner With an Established Global Logistics Brand?
          </h3>
          <p className="text-slate-600 text-sm font-medium mb-6">
            Join our growing roster of creators helping African businesses and families stay connected worldwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection(applicationFormRef)}
              className="bg-[#032B73] hover:bg-blue-950 text-white font-black py-3.5 px-8 rounded-xl text-sm uppercase tracking-wider transition-colors cursor-pointer"
            >
              Apply to Become a Creator
            </button>
            <a
              href="https://wa.me/2348095271168?text=Hello%20Shipplix%20Creator%20Desk%2C%20I%20have%20a%20question%20about%20the%20Creator%20%26%20Affiliate%20Program."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3.5 px-6 rounded-xl text-sm flex items-center gap-2 transition-colors border border-slate-200"
            >
              <MessageCircle size={16} className="text-emerald-600" />
              <span>Contact Creator Desk: 08095271168</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
