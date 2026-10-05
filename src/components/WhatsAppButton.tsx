import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { 
  WhatsAppActionType, 
  WhatsAppMessageParams, 
  openWhatsApp, 
  getWhatsAppUrl 
} from '../utils/whatsapp';

export interface WhatsAppButtonProps {
  action?: WhatsAppActionType;
  params?: WhatsAppMessageParams;
  label?: string;
  variant?: 'yellow' | 'whatsapp' | 'navy' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  showArrow?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  ariaLabel?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  action = 'general' as WhatsAppActionType,
  params = {},
  label,
  variant = 'yellow',
  size = 'md',
  fullWidth = false,
  showArrow = false,
  className = '',
  children,
  onClick,
  ariaLabel
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
      if (e.defaultPrevented) return;
    }
    e.preventDefault();
    openWhatsApp(action, params);
  };

  // Base styling ensuring 44px min tap target on touchscreens for accessibility
  const baseStyles = 'inline-flex items-center justify-center font-black uppercase tracking-wider rounded-2xl transition-all duration-200 cursor-pointer select-none active:scale-[0.98] min-h-[44px]';

  // Sizing definitions with generous touch targets
  const sizeStyles = {
    sm: 'text-[11px] py-2.5 px-4 gap-1.5 min-h-[44px]',
    md: 'text-xs sm:text-sm py-3.5 px-6 gap-2 min-h-[48px]',
    lg: 'text-sm sm:text-base py-4 px-8 gap-2.5 min-h-[52px]'
  };

  // Color variants ensuring WhatsApp green does not overpower Shipplix Yellow / Royal Blue
  const variantStyles = {
    yellow: 'bg-[#FFD700] hover:bg-[#F5C400] text-[#032B73] shadow-md hover:shadow-lg border border-[#FFD700]',
    navy: 'bg-[#032B73] hover:bg-[#061B4F] text-[#FFD700] shadow-md hover:shadow-lg border border-[#032B73]',
    whatsapp: 'bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-lg border border-[#25D366]',
    outline: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-xs hover:border-[#032B73]',
    ghost: 'bg-transparent hover:bg-black/5 text-[#032B73]'
  };

  const defaultLabels: Record<WhatsAppActionType, string> = {
    quote: 'Get My Shipping Quote',
    international: 'Inquire International Freight',
    local: 'Book Local Delivery',
    china: 'Inquire China Shipping',
    truck: 'Hire A Truck On WhatsApp',
    van: 'Book A Van On WhatsApp',
    interstate: 'Book Interstate Haulage',
    need_help: 'Chat With An Agent',
    tracking_help: 'Help With My Tracking',
    general: 'Chat on WhatsApp'
  };

  const buttonText = children || label || defaultLabels[action];
  const url = getWhatsAppUrl(action, params);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={ariaLabel || buttonText?.toString() || 'Chat on WhatsApp with Shipplix'}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <MessageCircle 
        size={size === 'sm' ? 15 : size === 'lg' ? 20 : 17} 
        className={variant === 'yellow' ? 'fill-[#032B73] text-[#032B73]' : variant === 'whatsapp' ? 'fill-white text-white' : 'text-current'} 
      />
      <span>{buttonText}</span>
      {showArrow && <ArrowRight size={size === 'sm' ? 13 : 16} />}
    </a>
  );
};

export default WhatsAppButton;
