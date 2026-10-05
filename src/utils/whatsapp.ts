/**
 * Shipplix WhatsApp Conversion & Message Generator Utility
 * 
 * Generates human, conversational, and properly encoded WhatsApp messages
 * for all primary customer intent channels.
 */

export const SHIPPLIX_WHATSAPP_PHONE = '2349168273513';
export const SHIPPLIX_WHATSAPP_DISPLAY = '+234 916 827 3513';

export type WhatsAppActionType =
  | 'quote'
  | 'international'
  | 'local'
  | 'china'
  | 'truck'
  | 'van'
  | 'interstate'
  | 'need_help'
  | 'tracking_help'
  | 'general';

export interface WhatsAppMessageParams {
  from?: string;
  to?: string;
  item?: string;
  weight?: string;
  name?: string;
  phone?: string;
  service?: string;
  trackingNumber?: string;
  customMessage?: string;
  vehicleType?: string;
}

/**
 * Strips technical noise or parenthetical hints for clean human copy
 */
const cleanValue = (val?: string): string => {
  if (!val) return '';
  return val.replace(/\s*\(.*?\)\s*/g, ' ').trim();
};

/**
 * Builds human, conversational messages for each customer intent
 */
export const buildWhatsAppMessage = (
  action: WhatsAppActionType,
  params: WhatsAppMessageParams = {}
): string => {
  const from = cleanValue(params.from);
  const to = cleanValue(params.to);
  const item = cleanValue(params.item);
  const weight = cleanValue(params.weight);
  const name = params.name?.trim();
  const trackingNumber = params.trackingNumber?.trim();
  const vehicle = cleanValue(params.vehicleType);

  switch (action) {
    case 'quote': {
      let msg = 'Hello Shipplix 👋\n\nI need help with a shipment.';
      if (name) msg += `\n\nName: ${name}`;
      if (from) msg += `\nFrom: ${from}`;
      if (to) msg += `\nTo: ${to}`;
      if (item) msg += `\nItem: ${item}`;
      if (weight) msg += `\nWeight: ${weight}`;
      msg += '\n\nPlease help me with a quote.';
      return msg;
    }

    case 'international': {
      let msg = 'Hello Shipplix 👋\n\nI would like to get a quote for International Shipping from Nigeria.';
      if (from && from !== 'Nigeria') msg += `\n\nPickup: ${from}`;
      if (to) msg += `\nDestination: ${to}`;
      if (item) msg += `\nCargo / Goods: ${item}`;
      if (weight) msg += `\nApprox. Weight: ${weight}`;
      msg += '\n\nPlease share your current air cargo rates, weekly flight departures, and pickup details.';
      return msg;
    }

    case 'local': {
      let msg = 'Hello Shipplix 👋\n\nI need assistance with a Local City Delivery.';
      if (from && from !== 'Nigeria') msg += `\n\nPickup Area: ${from}`;
      if (to) msg += `\nDelivery Area: ${to}`;
      if (item) msg += `\nPackage: ${item}`;
      msg += '\n\nPlease let me know your local delivery timeline and pricing.';
      return msg;
    }

    case 'china': {
      let msg = 'Hello Shipplix 👋\n\nI would like to inquire about China to Nigeria shipping & procurement.';
      msg += '\n\nRoute: China (Guangzhou / Yiwu) ↔ Nigeria (Lagos)';
      if (item) msg += `\nGoods Description: ${item}`;
      msg += '\n\nPlease share your current exchange rates, China warehouse collection address, and air & sea freight rates.';
      return msg;
    }

    case 'truck': {
      let msg = 'Hello Shipplix 👋\n\nI need to hire a dedicated truck for cargo haulage in Nigeria.';
      if (vehicle) msg += `\n\nVehicle Required: ${vehicle}`;
      if (from) msg += `\nPickup Location: ${from}`;
      if (to) msg += `\nDestination State: ${to}`;
      if (item) msg += `\nCargo: ${item}`;
      msg += '\n\nPlease provide vehicle availability and haulage pricing.';
      return msg;
    }

    case 'van': {
      let msg = 'Hello Shipplix 👋\n\nI would like to book a Van or Hiace bus for cargo movement.';
      if (from) msg += `\n\nPickup: ${from}`;
      if (to) msg += `\nDestination: ${to}`;
      if (item) msg += `\nItems: ${item}`;
      msg += '\n\nPlease provide vehicle availability and rental rates.';
      return msg;
    }

    case 'interstate': {
      let msg = 'Hello Shipplix 👋\n\nI need to transport cargo between Nigerian states.';
      if (from) msg += `\n\nOrigin State: ${from}`;
      if (to) msg += `\nDestination State: ${to}`;
      if (item) msg += `\nCargo Description: ${item}`;
      msg += '\n\nPlease provide your scheduled linehaul rates and delivery timeframe.';
      return msg;
    }

    case 'need_help': {
      let msg = 'Hello Shipplix 👋\n\nI am currently on your website and need some guidance with my shipment.';
      if (params.customMessage) msg += `\n\nInquiry: ${params.customMessage}`;
      msg += '\n\nCould an export logistics specialist please assist me?';
      return msg;
    }

    case 'tracking_help': {
      let msg = 'Hello Shipplix 👋\n\nI am trying to track my shipment but need help locating my tracking number or latest status.';
      if (trackingNumber) msg += `\n\nTracking ID: ${trackingNumber}`;
      if (name) msg += `\nSender / Receiver Name: ${name}`;
      msg += '\n\nCould you please help look up my consignment records?';
      return msg;
    }

    case 'general':
    default: {
      return (
        params.customMessage ||
        'Hello Shipplix 👋\n\nI would like to make an inquiry regarding Shipplix logistics services.\n\nCould an agent please assist me?'
      );
    }
  }
};

/**
 * Tracks WhatsApp link interaction safely through window dataLayer or custom event
 */
export const trackWhatsAppClick = (action: WhatsAppActionType, params?: WhatsAppMessageParams) => {
  try {
    if (typeof window !== 'undefined') {
      // 1. Dispatch custom DOM event
      window.dispatchEvent(
        new CustomEvent('shipplix_whatsapp_click', {
          detail: { action, params, timestamp: new Date().toISOString() }
        })
      );

      // 2. Google Analytics / Tag Manager compatibility if present
      const win = window as any;
      if (typeof win.gtag === 'function') {
        win.gtag('event', 'whatsapp_click', {
          event_category: 'Conversion',
          event_label: action,
          destination: params?.to || 'general'
        });
      }

      if (Array.isArray(win.dataLayer)) {
        win.dataLayer.push({
          event: 'whatsapp_click',
          whatsappAction: action,
          whatsappDestination: params?.to || 'general'
        });
      }

      // 3. Meta Pixel compatibility if present
      if (typeof win.fbq === 'function') {
        win.fbq('trackCustom', 'WhatsAppContact', {
          action: action,
          destination: params?.to || 'general'
        });
      }
    }
  } catch (err) {
    // Non-blocking, fails gracefully
  }
};

/**
 * Generates the clean encoded WhatsApp URL
 */
export const getWhatsAppUrl = (
  action: WhatsAppActionType,
  params: WhatsAppMessageParams = {}
): string => {
  const message = buildWhatsAppMessage(action, params);
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${SHIPPLIX_WHATSAPP_PHONE}?text=${encodedText}`;
};

/**
 * Opens WhatsApp link in a new tab and tracks event
 */
export const openWhatsApp = (
  action: WhatsAppActionType,
  params: WhatsAppMessageParams = {}
): void => {
  trackWhatsAppClick(action, params);
  const url = getWhatsAppUrl(action, params);
  window.open(url, '_blank', 'noopener,noreferrer');
};
