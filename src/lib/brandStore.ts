import { BrandProfile, BrandAsset, BrandColor, BrandFont } from '../types';

const STORAGE_KEY = 'shipplix_official_brand_profile';

export const OFFICIAL_SHIPPLIX_PRIMARY_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <radialGradient id="sphereGrad" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#025eff" />
      <stop offset="40%" stop-color="#0239c4" />
      <stop offset="85%" stop-color="#011873" />
      <stop offset="100%" stop-color="#000d47" />
    </radialGradient>
    <linearGradient id="redEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff1a00" />
      <stop offset="60%" stop-color="#ff4400" />
      <stop offset="100%" stop-color="#ff7d00" />
    </linearGradient>
    <linearGradient id="yellowRibbonGrad" x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" stop-color="#ffea00" />
      <stop offset="30%" stop-color="#ffcc00" />
      <stop offset="75%" stop-color="#f5a000" />
      <stop offset="100%" stop-color="#d97700" />
    </linearGradient>
    <linearGradient id="lowerRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffe600" />
      <stop offset="50%" stop-color="#ffb700" />
      <stop offset="100%" stop-color="#e08200" />
    </linearGradient>
  </defs>
  <g transform="translate(256 256) rotate(-28) translate(-256 -256)">
    <path d="M 310 110 C 370 100 425 140 435 195 C 440 225 410 245 365 255 C 390 220 395 180 355 145 Z" fill="url(#redEdgeGrad)" />
    <ellipse cx="256" cy="256" rx="145" ry="192" fill="url(#sphereGrad)" />
    <path d="M 405 180 C 420 215 390 250 325 285 C 235 335 125 375 55 380 C 35 380 38 345 68 320 C 135 265 255 190 375 148 C 395 140 420 142 432 158 Z" fill="url(#yellowRibbonGrad)" />
    <path d="M 55 380 C 35 380 38 345 68 320 C 95 300 120 325 115 350 C 110 370 85 380 55 380 Z" fill="#d97700" />
    <path d="M 90 355 C 135 370 215 390 315 380 C 385 373 420 335 405 295 C 390 330 350 353 285 360 C 195 370 125 355 90 355 Z" fill="url(#lowerRibbonGrad)" />
  </g>
</svg>`;

export const DEFAULT_BRAND_PROFILE: BrandProfile = {
  companyName: 'Shipplix Logistics',
  tagline: 'Global Commerce & Export Shipping Platform',
  brandLockEnabled: true,
  primaryLogoId: 'shipplix_logo_primary',
  assets: [
    {
      id: 'shipplix_logo_primary',
      name: 'Official 3D Sphere Logo (Color)',
      type: 'logo_primary',
      dataUrl: '/pwa-512x512.png',
      isDefault: true,
      format: 'png',
      width: 512,
      height: 512,
      createdAt: Date.now(),
    },
    {
      id: 'shipplix_logo_svg',
      name: 'Official Vector Logo (SVG)',
      type: 'logo_svg',
      dataUrl: `data:image/svg+xml;utf8,${encodeURIComponent(OFFICIAL_SHIPPLIX_PRIMARY_SVG)}`,
      isDefault: false,
      format: 'svg',
      width: 512,
      height: 512,
      createdAt: Date.now(),
    },
    {
      id: 'shipplix_logo_monochrome',
      name: 'Monochrome White Logo Variant',
      type: 'logo_monochrome',
      dataUrl: '/pwa-512x512.png', // Can be styled in canvas
      isDefault: false,
      format: 'png',
      width: 512,
      height: 512,
      createdAt: Date.now(),
    }
  ],
  colors: [
    { id: 'c1', name: 'Shipplix Navy Blue', hex: '#0b1736', role: 'primary' },
    { id: 'c2', name: 'Shipplix Royal Gold', hex: '#fbbf24', role: 'secondary' },
    { id: 'c3', name: 'Crimson Export Red', hex: '#e61a00', role: 'accent' },
    { id: 'c4', name: 'Crisp White Canvas', hex: '#ffffff', role: 'neutral' },
    { id: 'c5', name: 'Midnight Charcoal', hex: '#0f172a', role: 'dark' }
  ],
  fonts: [
    { id: 'f1', name: 'Plus Jakarta Sans', category: 'sans-serif', isDefault: true },
    { id: 'f2', name: 'Playfair Display', category: 'serif', isDefault: false },
    { id: 'f3', name: 'Inter', category: 'sans-serif', isDefault: false }
  ]
};

export function getBrandProfile(): BrandProfile {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Ensure primary logo asset exists
      if (parsed && parsed.assets && parsed.assets.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading brand profile from localStorage:', err);
  }
  return DEFAULT_BRAND_PROFILE;
}

export function saveBrandProfile(profile: BrandProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Error saving brand profile to localStorage:', err);
  }
}

export function getPrimaryLogoAsset(profile: BrandProfile): BrandAsset {
  const found = profile.assets.find(a => a.id === profile.primaryLogoId || a.isDefault);
  return found || profile.assets[0] || DEFAULT_BRAND_PROFILE.assets[0];
}

export function generatePromptWithBrandLock(userPrompt: string, brandLockEnabled: boolean): string {
  const brandInstruction = ` [BRAND LOCK INSTRUCTION: Use the official uploaded company logo as a protected brand asset. Never recreate, redesign, or imitate the logo. Leave branding areas blank or unadorned where the logo will be composited. The application will insert the official logo after image generation.]`;
  
  if (!brandLockEnabled) {
    return userPrompt;
  }
  
  return `${userPrompt.trim()}${brandInstruction}`;
}
