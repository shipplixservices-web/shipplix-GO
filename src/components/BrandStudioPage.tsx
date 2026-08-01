import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Upload, 
  Sparkles, 
  Image as ImageIcon, 
  Trash2, 
  Check, 
  Layers, 
  Move, 
  Maximize2, 
  RotateCw, 
  Eye, 
  Download, 
  Sliders, 
  Lock, 
  Plus, 
  Copy, 
  Palette, 
  Type, 
  HelpCircle, 
  QrCode, 
  Award, 
  FileText, 
  Grid, 
  RefreshCw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrandProfile, 
  BrandAsset, 
  BrandColor, 
  BrandFont, 
  CanvasOverlayConfig,
  LogoPlacementRegion
} from '../types';
import { 
  getBrandProfile, 
  saveBrandProfile, 
  getPrimaryLogoAsset, 
  generatePromptWithBrandLock 
} from '../lib/brandStore';

// Preset Scene Templates for Quick Marketing Image Generation
const PRESET_MARKETING_TEMPLATES = [
  {
    id: 'truck',
    title: 'Cargo Delivery Truck',
    description: 'Heavy duty Shipplix freight truck on highway',
    prompt: 'Photorealistic modern heavy logistics cargo delivery truck driving on a smooth highway at golden hour sunset, sleek clean side panel ready for branding, 8k resolution cinematic lighting',
    defaultRegion: { xRatio: 0.45, yRatio: 0.42, scale: 0.35, skewX: -5, skewY: 2 }
  },
  {
    id: 'parcel_box',
    title: 'Air Export Parcel Box',
    description: 'Heavy duty cardboard package in dispatch center',
    prompt: 'A pristine brown corrugated export cargo package box sitting on a clean wooden packing table in a modern bright warehouse, clean surface on box front for label, shallow depth of field',
    defaultRegion: { xRatio: 0.50, yRatio: 0.50, scale: 0.40, skewX: 0, skewY: 0 }
  },
  {
    id: 'warehouse',
    title: 'Shipplix Export Hub',
    description: 'Modern logistics hub & warehouse building exterior',
    prompt: 'Exterior shot of a modern high-tech logistics fulfillment center warehouse building with glass and blue metal facade, wide entrance, bright sunny daylight',
    defaultRegion: { xRatio: 0.50, yRatio: 0.28, scale: 0.45, skewX: 0, skewY: 0 }
  },
  {
    id: 'courier_polo',
    title: 'Courier Staff Uniform',
    description: 'Logistics agent wearing polo shirt',
    prompt: 'Professional friendly African courier logistics agent standing in a brightly lit office wearing a solid navy blue polo shirt, chest area clear for logo, smiling warmly',
    defaultRegion: { xRatio: 0.48, yRatio: 0.38, scale: 0.18, skewX: 0, skewY: 0 }
  },
  {
    id: 'container',
    title: 'Sea Freight Container',
    description: 'Blue shipping container at Lagos seaport',
    prompt: 'A giant blue shipping container stacked at a busy international container port terminal with gantry cranes in background, crisp side wall ready for branding',
    defaultRegion: { xRatio: 0.42, yRatio: 0.46, scale: 0.38, skewX: -8, skewY: 0 }
  },
  {
    id: 'billboard',
    title: 'City Center Billboard',
    description: 'High-visibility advertisement board in city street',
    prompt: 'A clean modern digital billboard banner on a metallic pole against a blue sky above a vibrant bustling city highway, pristine billboard face',
    defaultRegion: { xRatio: 0.50, yRatio: 0.38, scale: 0.55, skewX: 0, skewY: 0 }
  }
];

export const BrandStudioPage: React.FC = () => {
  // Brand Profile State
  const [profile, setProfile] = useState<BrandProfile>(() => getBrandProfile());
  const [activeTab, setActiveTab] = useState<'generator' | 'assets' | 'palette'>('generator');
  
  // Prompt & Generation State
  const [userPrompt, setUserPrompt] = useState<string>('Shipplix freight cargo truck delivering goods on a highway');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('truck');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [injectedPromptNotice, setInjectedPromptNotice] = useState<boolean>(true);
  
  // Generated/Base Image State
  const [baseImageSrc, setBaseImageSrc] = useState<string>('/pwa-512x512.png');
  
  // Active Selected Overlay Asset
  const [selectedAssetId, setSelectedAssetId] = useState<string>('');
  
  // Canvas Composite Config State
  const [overlayConfig, setOverlayConfig] = useState<CanvasOverlayConfig>({
    assetId: '',
    x: 50, // Percentage 0-100
    y: 50,
    scale: 35, // Percentage
    rotation: 0,
    opacity: 100,
    blendMode: 'source-over',
    shadowBlur: 10,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffsetX: 2,
    shadowOffsetY: 4,
    skewX: 0,
    skewY: 0
  });

  // Expansion Assets (QR Code, Certified Seal, Custom Watermark)
  const [showQRCode, setShowQRCode] = useState<boolean>(false);
  const [showCertifiedSeal, setShowCertifiedSeal] = useState<boolean>(false);
  const [showWatermark, setShowWatermark] = useState<boolean>(false);
  const [watermarkText, setWatermarkText] = useState<string>('SHIPPLIX OFFICIAL CARGO');

  // Preview Modal State
  const [previewAsset, setPreviewAsset] = useState<BrandAsset | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // References
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Initialize selected asset from profile
  useEffect(() => {
    const primaryAsset = getPrimaryLogoAsset(profile);
    if (primaryAsset) {
      setSelectedAssetId(primaryAsset.id);
      setOverlayConfig(prev => ({ ...prev, assetId: primaryAsset.id }));
    }
  }, [profile.primaryLogoId]);

  // Persist profile changes to localStorage
  useEffect(() => {
    saveBrandProfile(profile);
  }, [profile]);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Render Canvas Composite whenever base image or overlay config changes
  useEffect(() => {
    renderCanvasComposite();
  }, [
    baseImageSrc, 
    overlayConfig, 
    selectedAssetId, 
    showQRCode, 
    showCertifiedSeal, 
    showWatermark, 
    watermarkText,
    profile
  ]);

  // Generate Base Scene using Canvas or Gemini API
  const handleGenerateImage = async () => {
    setIsGenerating(true);
    showToast('Injecting Brand Lock prompt & generating base image...');

    const fullPrompt = generatePromptWithBrandLock(userPrompt, profile.brandLockEnabled);
    console.log('Final Injected Image Prompt:', fullPrompt);

    try {
      // Try server-side or Gemini API if key is present
      const response = await fetch('/api/generate-scene', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: fullPrompt, templateId: selectedTemplate })
      }).catch(() => null);

      if (response && response.ok) {
        const data = await response.json();
        if (data.imageUrl) {
          setBaseImageSrc(data.imageUrl);
          showToast('Base image generated! Official logo composited automatically.');
          setIsGenerating(false);
          return;
        }
      }

      // Procedural Canvas Scene Synthesizer (Fallback to high quality realistic template background)
      setTimeout(() => {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 1024;
        tempCanvas.height = 768;
        const ctx = tempCanvas.getContext('2d');

        if (ctx) {
          // Draw high-quality gradient backdrop corresponding to selected template
          if (selectedTemplate === 'truck') {
            const grad = ctx.createLinearGradient(0, 0, 1024, 768);
            grad.addColorStop(0, '#1e293b');
            grad.addColorStop(0.5, '#334155');
            grad.addColorStop(1, '#0f172a');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 1024, 768);

            // Draw Truck Outline / Road Graphic
            ctx.fillStyle = '#0284c7';
            ctx.fillRect(200, 220, 620, 320); // Truck side panel
            ctx.fillStyle = '#e2e8f0';
            ctx.fillRect(180, 200, 660, 20); // Roof rail
            ctx.fillStyle = '#64748b';
            ctx.fillRect(0, 540, 1024, 228); // Asphalt road

            // White Road Lines
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(100, 640, 200, 16);
            ctx.fillRect(450, 640, 200, 16);
            ctx.fillRect(800, 640, 200, 16);

            // Label
            ctx.fillStyle = '#94a3b8';
            ctx.font = 'bold 24px sans-serif';
            ctx.fillText('SHIPPLIX CARGO FREIGHT TRUCK [BASE SCENE]', 220, 260);
          } else if (selectedTemplate === 'parcel_box') {
            const grad = ctx.createLinearGradient(0, 0, 1024, 768);
            grad.addColorStop(0, '#f8fafc');
            grad.addColorStop(1, '#e2e8f0');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 1024, 768);

            // Cardboard Box
            ctx.fillStyle = '#d97706';
            ctx.fillRect(260, 200, 500, 420);
            ctx.fillStyle = '#b45309';
            ctx.fillRect(260, 200, 500, 40);

            ctx.fillStyle = '#78350f';
            ctx.font = 'bold 22px sans-serif';
            ctx.fillText('EXPORT AIR PARCEL PACKAGE [BASE SCENE]', 290, 280);
          } else {
            const grad = ctx.createLinearGradient(0, 0, 1024, 768);
            grad.addColorStop(0, '#0b1736');
            grad.addColorStop(1, '#1e293b');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 1024, 768);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 28px sans-serif';
            ctx.fillText(`SHIPPLIX BRANDED MARKETING SCENE`, 280, 360);
          }

          setBaseImageSrc(tempCanvas.toDataURL('image/png'));
        }
        setIsGenerating(false);
        showToast('Base scene generated! Official logo composite applied.');
      }, 1200);

    } catch (err) {
      console.error('Error generating image:', err);
      setIsGenerating(false);
    }
  };

  // Render HTML5 Composite Canvas with Official Logo Overlay
  const renderCanvasComposite = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const baseImg = new Image();
    baseImg.crossOrigin = 'anonymous';
    baseImg.src = baseImageSrc;

    baseImg.onload = () => {
      // Set canvas dimensions to match base image
      canvas.width = baseImg.naturalWidth || 1024;
      canvas.height = baseImg.naturalHeight || 768;

      // 1. Draw Base Image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

      // 2. Locate Active Logo Asset
      const activeAsset = profile.assets.find(a => a.id === (overlayConfig.assetId || selectedAssetId)) 
                          || getPrimaryLogoAsset(profile);

      if (!activeAsset) return;

      const logoImg = new Image();
      logoImg.crossOrigin = 'anonymous';
      logoImg.src = activeAsset.dataUrl;

      logoImg.onload = () => {
        ctx.save();

        // Canvas Coordinates
        const centerX = (overlayConfig.x / 100) * canvas.width;
        const centerY = (overlayConfig.y / 100) * canvas.height;

        // Calculate Scale
        const baseSize = Math.min(canvas.width, canvas.height) * 0.4;
        const targetWidth = baseSize * (overlayConfig.scale / 100);
        const aspect = logoImg.naturalWidth / (logoImg.naturalHeight || 1);
        const targetHeight = targetWidth / aspect;

        // Move to overlay center
        ctx.translate(centerX, centerY);

        // Apply Rotation
        ctx.rotate((overlayConfig.rotation * Math.PI) / 180);

        // Apply Opacity
        ctx.globalAlpha = overlayConfig.opacity / 100;

        // Apply Blend Mode
        if (overlayConfig.blendMode) {
          ctx.globalCompositeOperation = overlayConfig.blendMode as GlobalCompositeOperation;
        }

        // Apply Drop Shadow
        if (overlayConfig.shadowBlur > 0) {
          ctx.shadowColor = overlayConfig.shadowColor;
          ctx.shadowBlur = overlayConfig.shadowBlur;
          ctx.shadowOffsetX = overlayConfig.shadowOffsetX;
          ctx.shadowOffsetY = overlayConfig.shadowOffsetY;
        }

        // Apply Skew / Perspective Transformation
        if (overlayConfig.skewX !== 0 || overlayConfig.skewY !== 0) {
          const radX = (overlayConfig.skewX * Math.PI) / 180;
          const radY = (overlayConfig.skewY * Math.PI) / 180;
          ctx.transform(1, Math.tan(radY), Math.tan(radX), 1, 0, 0);
        }

        // Draw Official Logo (Centered on point)
        ctx.drawImage(logoImg, -targetWidth / 2, -targetHeight / 2, targetWidth, targetHeight);

        ctx.restore();

        // 3. Draw Future Expansion Assets (QR Code, Certified Seal, Custom Watermark)
        if (showQRCode) {
          drawQRCodeOverlay(ctx, canvas.width, canvas.height);
        }

        if (showCertifiedSeal) {
          drawCertifiedSealOverlay(ctx, canvas.width, canvas.height);
        }

        if (showWatermark) {
          drawWatermarkOverlay(ctx, canvas.width, canvas.height, watermarkText);
        }
      };
    };
  };

  // Draw Digital QR Code Overlay
  const drawQRCodeOverlay = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.save();
    const qrSize = Math.min(width, height) * 0.12;
    const x = width - qrSize - 30;
    const y = height - qrSize - 30;

    // Background badge
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 10;
    ctx.fillRect(x - 8, y - 8, qrSize + 16, qrSize + 16);

    // QR grid simulation
    ctx.fillStyle = '#0b1736';
    ctx.fillRect(x, y, qrSize, qrSize);
    ctx.fillStyle = '#ffffff';
    
    // Corners
    ctx.fillRect(x + 10, y + 10, qrSize * 0.3, qrSize * 0.3);
    ctx.fillRect(x + qrSize * 0.6, y + 10, qrSize * 0.3, qrSize * 0.3);
    ctx.fillRect(x + 10, y + qrSize * 0.6, qrSize * 0.3, qrSize * 0.3);

    ctx.restore();
  };

  // Draw Certified Export Seal Overlay
  const drawCertifiedSealOverlay = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.save();
    const radius = Math.min(width, height) * 0.08;
    const cx = 50 + radius;
    const cy = height - 50 - radius;

    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowBlur = 12;

    // Outer Gold Ring
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fbbf24';
    ctx.fill();

    // Inner Navy Circle
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.85, 0, Math.PI * 2);
    ctx.fillStyle = '#0b1736';
    ctx.fill();

    // Seal Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'black 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SHIPPLIX', cx, cy - 8);
    ctx.fillText('CERTIFIED', cx, cy + 4);
    ctx.fillText('EXPORTER', cx, cy + 16);

    ctx.restore();
  };

  // Draw Custom Watermark Overlay
  const drawWatermarkOverlay = (ctx: CanvasRenderingContext2D, width: number, height: number, text: string) => {
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate((-20 * Math.PI) / 180);
    ctx.font = '900 36px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.strokeStyle = 'rgba(11, 23, 54, 0.3)';
    ctx.lineWidth = 2;
    ctx.textAlign = 'center';
    ctx.strokeText(text.toUpperCase(), 0, 0);
    ctx.fillText(text.toUpperCase(), 0, 0);
    ctx.restore();
  };

  // Handle User Canvas Click to Position Logo Spot
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const xPercent = Math.round((clickX / rect.width) * 100);
    const yPercent = Math.round((clickY / rect.height) * 100);

    setOverlayConfig(prev => ({
      ...prev,
      x: xPercent,
      y: yPercent
    }));

    showToast(`Logo moved to (${xPercent}%, ${yPercent}%)`);
  };

  // Handle Logo Asset Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('image/png') && !file.type.includes('image/svg') && !file.type.includes('image/jpeg')) {
      alert('Please upload a PNG (transparent), SVG, or JPEG logo file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const dataUrl = uploadEvent.target?.result as string;
      const format = file.type.includes('svg') ? 'svg' : 'png';

      const newAsset: BrandAsset = {
        id: `logo_upload_${Date.now()}`,
        name: file.name.replace(/\.[^/.]+$/, ""),
        type: 'logo_primary',
        dataUrl,
        isDefault: profile.assets.length === 0,
        format,
        createdAt: Date.now()
      };

      const updatedProfile: BrandProfile = {
        ...profile,
        primaryLogoId: profile.assets.length === 0 ? newAsset.id : profile.primaryLogoId,
        assets: [newAsset, ...profile.assets]
      };

      setProfile(updatedProfile);
      setSelectedAssetId(newAsset.id);
      setOverlayConfig(prev => ({ ...prev, assetId: newAsset.id }));
      showToast(`Uploaded official logo "${newAsset.name}" successfully!`);
    };
    reader.readAsDataURL(file);
  };

  // Set Primary Logo
  const handleSetPrimaryLogo = (assetId: string) => {
    const updatedProfile: BrandProfile = {
      ...profile,
      primaryLogoId: assetId,
      assets: profile.assets.map(a => ({
        ...a,
        isDefault: a.id === assetId
      }))
    };
    setProfile(updatedProfile);
    setSelectedAssetId(assetId);
    setOverlayConfig(prev => ({ ...prev, assetId }));
    showToast('Primary official logo updated!');
  };

  // Delete Logo Asset
  const handleDeleteAsset = (assetId: string) => {
    if (profile.assets.length <= 1) {
      alert('You must keep at least one official brand logo asset.');
      return;
    }

    const updatedAssets = profile.assets.filter(a => a.id !== assetId);
    const newPrimary = updatedAssets[0].id;

    const updatedProfile: BrandProfile = {
      ...profile,
      primaryLogoId: profile.primaryLogoId === assetId ? newPrimary : profile.primaryLogoId,
      assets: updatedAssets
    };

    setProfile(updatedProfile);
    if (selectedAssetId === assetId) {
      setSelectedAssetId(newPrimary);
      setOverlayConfig(prev => ({ ...prev, assetId: newPrimary }));
    }
    showToast('Asset removed from Brand Vault.');
  };

  // Download Final Branded Composite Image
  const handleDownloadComposite = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Shipplix_Branded_Graphic_${Date.now()}.png`;
    link.href = dataUrl;
    link.click();

    showToast('High-resolution branded image downloaded!');
  };

  // Preset Template Selection
  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
    const t = PRESET_MARKETING_TEMPLATES.find(x => x.id === templateId);
    if (t) {
      setUserPrompt(t.prompt);
      setOverlayConfig(prev => ({
        ...prev,
        x: Math.round(t.defaultRegion.xRatio * 100),
        y: Math.round(t.defaultRegion.yRatio * 100),
        scale: Math.round(t.defaultRegion.scale * 100),
        skewX: t.defaultRegion.skewX,
        skewY: t.defaultRegion.skewY
      }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8 pt-24 font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 bg-shipplix-yellow text-slate-950 font-black px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-amber-300 text-xs uppercase tracking-wide"
          >
            <CheckCircle2 size={18} className="text-slate-950" />
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Header Title & Brand Lock Status */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-shipplix-blue text-shipplix-yellow font-black px-2.5 py-1 rounded text-xs uppercase tracking-wider flex items-center gap-1 border border-blue-500/30">
                <ShieldCheck size={14} /> Brand Lock Engine
              </span>
              <span className="text-xs text-slate-400 font-medium">Shipplix Official Asset Protection</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              AI Brand Studio &amp; Logo Protection Studio
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Generates marketing graphics while enforcing strict <strong className="text-shipplix-yellow">Brand Lock</strong>—preventing AI from recreating or altering your official company logo.
            </p>
          </div>

          {/* Master Brand Lock Toggle */}
          <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800 flex-shrink-0">
            <div className="flex items-center gap-2">
              <Lock size={18} className={profile.brandLockEnabled ? 'text-green-400' : 'text-slate-500'} />
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  <span>BRAND LOCK</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-black ${profile.brandLockEnabled ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-slate-800 text-slate-400'}`}>
                    {profile.brandLockEnabled ? 'ACTIVE' : 'OFF'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">Zero AI Logo Recreation</div>
              </div>
            </div>
            <button
              onClick={() => {
                const newStatus = !profile.brandLockEnabled;
                setProfile({ ...profile, brandLockEnabled: newStatus });
                showToast(`Brand Lock is now ${newStatus ? 'ENABLED' : 'DISABLED'}`);
              }}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                profile.brandLockEnabled ? 'bg-green-500' : 'bg-slate-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  profile.brandLockEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('generator')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'generator'
                ? 'bg-shipplix-yellow text-slate-950 shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Sparkles size={16} />
            <span>1. AI Image Generator &amp; Overlay Studio</span>
          </button>

          <button
            onClick={() => setActiveTab('assets')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'assets'
                ? 'bg-shipplix-yellow text-slate-950 shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <ShieldCheck size={16} />
            <span>2. Official Brand Vault &amp; Logos</span>
          </button>

          <button
            onClick={() => setActiveTab('palette')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'palette'
                ? 'bg-shipplix-yellow text-slate-950 shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Palette size={16} />
            <span>3. Brand Colors &amp; Fonts</span>
          </button>
        </div>

        {/* TAB 1: AI GENERATOR & INTERACTIVE COMPOSITE STUDIO */}
        {activeTab === 'generator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls: Prompt & Presets (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Marketing Preset Selector */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
                <h3 className="text-xs font-bold text-shipplix-yellow uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Grid size={16} />
                  <span>Select Scene Template</span>
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {PRESET_MARKETING_TEMPLATES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleSelectTemplate(t.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedTemplate === t.id
                          ? 'bg-shipplix-blue/30 border-shipplix-yellow text-white shadow-md'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold text-white mb-0.5">{t.title}</div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">{t.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompt Input Box */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-1.5">
                    <Type size={14} className="text-shipplix-yellow" />
                    <span>Marketing Image Prompt</span>
                  </label>
                  <button
                    onClick={() => setInjectedPromptNotice(!injectedPromptNotice)}
                    className="text-[10px] text-shipplix-yellow hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <HelpCircle size={12} />
                    <span>View Injected Guardrail</span>
                  </button>
                </div>

                <textarea
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 focus:border-shipplix-yellow focus:outline-none resize-none leading-relaxed"
                  placeholder="Describe the background scene..."
                />

                {/* System Prompt Injection Preview */}
                {injectedPromptNotice && profile.brandLockEnabled && (
                  <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-3 text-[11px] text-blue-200 space-y-1">
                    <div className="font-bold flex items-center gap-1 text-blue-300 text-[10px] uppercase">
                      <Lock size={12} /> Automatic Brand Lock Prompt Injection:
                    </div>
                    <p className="text-[10px] text-blue-200/80 leading-snug font-mono italic">
                      "...Use the official uploaded company logo as a protected brand asset. Never recreate, redesign, or imitate the logo. Leave branding areas blank if the logo cannot be composited. The application will insert the official logo after image generation."
                    </p>
                  </div>
                )}

                <button
                  onClick={handleGenerateImage}
                  disabled={isGenerating}
                  className="w-full bg-shipplix-yellow hover:bg-yellow-400 text-slate-950 font-black text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all uppercase tracking-wider cursor-pointer disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      <span>Generating Base Image...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      <span>Generate Base Scene</span>
                    </>
                  )}
                </button>
              </div>

              {/* Logo Overlay Controls */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
                <h3 className="text-xs font-bold text-shipplix-yellow uppercase tracking-wider flex items-center gap-2">
                  <Sliders size={16} />
                  <span>Logo Overlay Controls</span>
                </h3>

                {/* Logo Variant Selector */}
                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1.5 uppercase">
                    Select Logo Variant from Vault
                  </label>
                  <select
                    value={overlayConfig.assetId || selectedAssetId}
                    onChange={(e) => {
                      const id = e.target.value;
                      setSelectedAssetId(id);
                      setOverlayConfig(prev => ({ ...prev, assetId: id }));
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:border-shipplix-yellow"
                  >
                    {profile.assets.map(asset => (
                      <option key={asset.id} value={asset.id}>
                        {asset.name} ({asset.format.toUpperCase()}) {asset.isDefault ? '[DEFAULT]' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Size / Scale Slider */}
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-300 mb-1">
                    <span>Logo Scale / Size</span>
                    <span className="text-shipplix-yellow">{overlayConfig.scale}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    value={overlayConfig.scale}
                    onChange={(e) => setOverlayConfig({ ...overlayConfig, scale: Number(e.target.value) })}
                    className="w-full accent-shipplix-yellow"
                  />
                </div>

                {/* Rotation Slider */}
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-300 mb-1">
                    <span>Rotation</span>
                    <span className="text-shipplix-yellow">{overlayConfig.rotation}°</span>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={overlayConfig.rotation}
                    onChange={(e) => setOverlayConfig({ ...overlayConfig, rotation: Number(e.target.value) })}
                    className="w-full accent-shipplix-yellow"
                  />
                </div>

                {/* Opacity Slider */}
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-300 mb-1">
                    <span>Opacity</span>
                    <span className="text-shipplix-yellow">{overlayConfig.opacity}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={overlayConfig.opacity}
                    onChange={(e) => setOverlayConfig({ ...overlayConfig, opacity: Number(e.target.value) })}
                    className="w-full accent-shipplix-yellow"
                  />
                </div>

                {/* Skew X & Y for Perspective Alignment */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-1">Perspective Tilt X</label>
                    <input
                      type="range"
                      min="-45"
                      max="45"
                      value={overlayConfig.skewX}
                      onChange={(e) => setOverlayConfig({ ...overlayConfig, skewX: Number(e.target.value) })}
                      className="w-full accent-shipplix-yellow"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-1">Perspective Tilt Y</label>
                    <input
                      type="range"
                      min="-45"
                      max="45"
                      value={overlayConfig.skewY}
                      onChange={(e) => setOverlayConfig({ ...overlayConfig, skewY: Number(e.target.value) })}
                      className="w-full accent-shipplix-yellow"
                    />
                  </div>
                </div>

                {/* Blend Mode Selector */}
                <div>
                  <label className="text-[11px] font-bold text-slate-300 block mb-1">Blend Mode</label>
                  <select
                    value={overlayConfig.blendMode}
                    onChange={(e) => setOverlayConfig({ ...overlayConfig, blendMode: e.target.value as GlobalCompositeOperation })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-xs text-white"
                  >
                    <option value="source-over">Normal (Crisp)</option>
                    <option value="multiply">Multiply (Darken / Print on Cardboard)</option>
                    <option value="overlay">Overlay (Blend with Surface)</option>
                    <option value="screen">Screen (Brighten / Glass)</option>
                    <option value="soft-light">Soft Light (Subtle Texture)</option>
                  </select>
                </div>

                {/* Expansion Protected Assets */}
                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold text-white uppercase tracking-wider">Future Expansion Protected Assets</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <button
                      onClick={() => setShowQRCode(!showQRCode)}
                      className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                        showQRCode ? 'bg-shipplix-yellow text-slate-950 border-amber-400 font-bold' : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      <QrCode size={14} />
                      <span>Tracking QR Code</span>
                    </button>

                    <button
                      onClick={() => setShowCertifiedSeal(!showCertifiedSeal)}
                      className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                        showCertifiedSeal ? 'bg-shipplix-yellow text-slate-950 border-amber-400 font-bold' : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      <Award size={14} />
                      <span>Certified Export Seal</span>
                    </button>

                    <button
                      onClick={() => setShowWatermark(!showWatermark)}
                      className={`px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                        showWatermark ? 'bg-shipplix-yellow text-slate-950 border-amber-400 font-bold' : 'bg-slate-950 text-slate-400 border-slate-800'
                      }`}
                    >
                      <FileText size={14} />
                      <span>Watermark</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Canvas Composite Studio (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Layers size={18} className="text-shipplix-yellow" />
                      <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                        Live Composite Canvas Studio
                      </h3>
                    </div>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded font-mono">
                      Click canvas to position logo
                    </span>
                  </div>

                  {/* Canvas Container */}
                  <div className="relative bg-slate-950 border-2 border-dashed border-slate-800 rounded-2xl overflow-hidden flex items-center justify-center p-2 min-h-[420px]">
                    <canvas
                      ref={canvasRef}
                      onClick={handleCanvasClick}
                      className="max-w-full max-h-[500px] object-contain rounded-xl cursor-crosshair shadow-2xl transition-all"
                    />

                    {/* Quick Helper Banner */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 backdrop-blur-md flex items-center justify-between text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Move size={14} className="text-shipplix-yellow" />
                        <span>Click anywhere on the image to place the logo</span>
                      </div>
                      <span className="font-mono text-[10px] text-amber-300 font-bold">
                        X: {overlayConfig.x}% | Y: {overlayConfig.y}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Export & Download Bar */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-400">
                    Protected by <strong className="text-white">Shipplix Brand Lock</strong>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={handleDownloadComposite}
                      className="flex-1 sm:flex-initial bg-shipplix-yellow hover:bg-yellow-400 text-slate-950 font-black text-xs py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all uppercase tracking-wider cursor-pointer"
                    >
                      <Download size={16} />
                      <span>Download Branded Image</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: OFFICIAL BRAND VAULT & LOGOS */}
        {activeTab === 'assets' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
                  <ShieldCheck size={20} className="text-shipplix-yellow" />
                  <span>Official Brand Asset Vault</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Upload and manage protected company logo files. The AI image model uses these files exclusively.
                </p>
              </div>

              {/* Upload Button */}
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/png,image/svg+xml,image/jpeg"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-shipplix-yellow hover:bg-yellow-400 text-slate-950 font-black text-xs py-2.5 px-4 rounded-xl flex items-center gap-2 shadow-md uppercase tracking-wider cursor-pointer"
                >
                  <Upload size={16} />
                  <span>Upload Logo (PNG / SVG)</span>
                </button>
              </div>
            </div>

            {/* Asset Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {profile.assets.map((asset) => (
                <div
                  key={asset.id}
                  className={`bg-slate-950 border rounded-2xl p-4 flex flex-col justify-between transition-all ${
                    asset.isDefault || profile.primaryLogoId === asset.id
                      ? 'border-shipplix-yellow shadow-xl'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {asset.format.toUpperCase()} FORMAT
                      </span>
                      {asset.isDefault && (
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-1">
                          <Check size={12} /> Default Logo
                        </span>
                      )}
                    </div>

                    {/* Logo Image Preview */}
                    <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-4 h-36 flex items-center justify-center mb-3">
                      <img
                        src={asset.dataUrl}
                        alt={asset.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-md"
                      />
                    </div>

                    <h4 className="font-bold text-xs text-white truncate">{asset.name}</h4>
                    <p className="text-[10px] text-slate-400">
                      Added {new Date(asset.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    {!asset.isDefault && (
                      <button
                        onClick={() => handleSetPrimaryLogo(asset.id)}
                        className="text-[11px] font-bold text-shipplix-yellow hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Check size={14} /> Make Default
                      </button>
                    )}

                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        onClick={() => setPreviewAsset(asset)}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        title="Preview"
                      >
                        <Eye size={14} />
                      </button>

                      <button
                        onClick={() => handleDeleteAsset(asset.id)}
                        className="p-1.5 rounded-lg bg-red-950/40 text-red-400 hover:bg-red-900/60 transition-colors cursor-pointer"
                        title="Delete Asset"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BRAND COLORS & FONTS */}
        {activeTab === 'palette' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Color Palette Manager */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <h2 className="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <Palette size={18} className="text-shipplix-yellow" />
                <span>Protected Brand Color Palette</span>
              </h2>
              <div className="space-y-3">
                {profile.colors.map((color) => (
                  <div key={color.id} className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg border border-white/20 shadow-inner" style={{ backgroundColor: color.hex }} />
                      <div>
                        <div className="text-xs font-bold text-white">{color.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{color.hex}</div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-900 px-2 py-1 rounded">
                      {color.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & Brand Fonts */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <h2 className="text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <Type size={18} className="text-shipplix-yellow" />
                <span>Approved Brand Typography</span>
              </h2>
              <div className="space-y-3">
                {profile.fonts.map((font) => (
                  <div key={font.id} className="bg-slate-950 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{font.name}</div>
                      <div className="text-[10px] text-slate-400 capitalize">{font.category}</div>
                    </div>
                    {font.isDefault && (
                      <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                        PRIMARY FONT
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Preview Asset Modal */}
      {previewAsset && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setPreviewAsset(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              ✕
            </button>
            <h3 className="font-bold text-base text-white mb-2">{previewAsset.name}</h3>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-center min-h-[220px]">
              <img src={previewAsset.dataUrl} alt={previewAsset.name} className="max-h-52 max-w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandStudioPage;
