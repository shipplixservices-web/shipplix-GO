export interface BrandAsset {
  id: string;
  name: string;
  type: 'logo_primary' | 'logo_svg' | 'logo_light' | 'logo_dark' | 'logo_monochrome' | 'seal' | 'qr_code' | 'watermark';
  dataUrl: string;
  isDefault?: boolean;
  format: 'png' | 'svg' | 'jpeg';
  width?: number;
  height?: number;
  createdAt: number;
}

export interface BrandColor {
  id: string;
  name: string;
  hex: string;
  role: 'primary' | 'secondary' | 'accent' | 'neutral' | 'dark';
}

export interface BrandFont {
  id: string;
  name: string;
  category: 'sans-serif' | 'serif' | 'display' | 'monospace';
  isDefault?: boolean;
}

export interface BrandProfile {
  companyName: string;
  tagline: string;
  brandLockEnabled: boolean;
  primaryLogoId: string;
  assets: BrandAsset[];
  colors: BrandColor[];
  fonts: BrandFont[];
}

export interface LogoPlacementRegion {
  id: string;
  label: string;
  xRatio: number; // 0 to 1
  yRatio: number; // 0 to 1
  widthRatio: number;
  heightRatio: number;
  rotation?: number;
  description?: string;
}

export interface CanvasOverlayConfig {
  assetId: string;
  x: number; // percentage or px
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
  blendMode: GlobalCompositeOperation;
  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
  skewX: number;
  skewY: number;
}

export interface ExpansionAsset {
  id: string;
  name: string;
  type: 'qr_code' | 'seal' | 'watermark' | 'shipping_label' | 'export_badge';
  enabled: boolean;
  content?: string;
  xRatio: number;
  yRatio: number;
  scale: number;
  opacity: number;
}
