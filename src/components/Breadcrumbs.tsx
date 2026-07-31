import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  className?: string;
}

export default function Breadcrumbs({ currentPath, onNavigate, className = '' }: BreadcrumbsProps) {
  // Hide breadcrumbs on homepage or admin dashboard if not needed
  if (!currentPath || currentPath === '/') {
    return null;
  }

  // Generate breadcrumb hierarchy
  const getBreadcrumbs = (path: string): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: 'Home', path: '/' }
    ];

    switch (path) {
      // Shipping Routes
      case '/ship-from-nigeria-to-usa':
        items.push({ label: 'Shipping Routes', path: '/' });
        items.push({ label: 'Nigeria to USA' });
        break;
      case '/ship-from-nigeria-to-houston':
        items.push({ label: 'Shipping Routes', path: '/' });
        items.push({ label: 'Nigeria to Houston, TX' });
        break;
      case '/ship-from-nigeria-to-uk':
        items.push({ label: 'Shipping Routes', path: '/' });
        items.push({ label: 'Nigeria to UK' });
        break;
      case '/ship-from-nigeria-to-canada':
        items.push({ label: 'Shipping Routes', path: '/' });
        items.push({ label: 'Nigeria to Canada' });
        break;
      case '/ship-from-nigeria-to-europe':
        items.push({ label: 'Shipping Routes', path: '/' });
        items.push({ label: 'Nigeria to Europe' });
        break;
      case '/ship-from-china-to-nigeria':
        items.push({ label: 'Shipping Routes', path: '/' });
        items.push({ label: 'China to Nigeria' });
        break;
      case '/ship-from-usa-to-nigeria':
        items.push({ label: 'Shipping Routes', path: '/' });
        items.push({ label: 'USA to Nigeria' });
        break;
      case '/ship-from-uk-to-nigeria':
        items.push({ label: 'Shipping Routes', path: '/' });
        items.push({ label: 'UK to Nigeria' });
        break;

      // Services & Operations
      case '/cargo-items':
        items.push({ label: 'Services', path: '/' });
        items.push({ label: 'Permitted Cargo Catalog' });
        break;
      case '/economy-cargo':
        items.push({ label: 'Services', path: '/' });
        items.push({ label: 'Economy Group Cargo' });
        break;
      case '/processing':
        items.push({ label: 'Operations', path: '/' });
        items.push({ label: 'Customs & Processing Flow' });
        break;
      case '/trust':
        items.push({ label: 'Verification', path: '/' });
        items.push({ label: 'Trust & Anti-Scam Policy' });
        break;

      // Legal & Partner
      case '/economy-cargo-terms':
        items.push({ label: 'Legal', path: '/' });
        items.push({ label: 'Economy Cargo Terms' });
        break;
      case '/revenue-partner':
        items.push({ label: 'Partnerships', path: '/' });
        items.push({ label: 'Revenue Partner Program' });
        break;

      // Export Blueprint & Resources
      case '/export-blueprint':
        items.push({ label: 'Resources', path: '/' });
        items.push({ label: 'African Export Blueprint' });
        break;
      case '/export-blueprint/thank-you':
        items.push({ label: 'Resources', path: '/' });
        items.push({ label: 'African Export Blueprint', path: '/export-blueprint' });
        items.push({ label: 'Download Guide' });
        break;

      // Ecosystem & Admin
      case '/future-products':
        items.push({ label: 'Ecosystem', path: '/' });
        items.push({ label: 'Product Roadmap' });
        break;
      case '/admin-leads':
        items.push({ label: 'Admin', path: '/' });
        items.push({ label: 'Leads Management' });
        break;

      // Dynamic fallback
      default: {
        const segments = path.split('/').filter(Boolean);
        let accumulatedPath = '';
        segments.forEach((segment, idx) => {
          accumulatedPath += `/${segment}`;
          const formattedLabel = segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
          
          if (idx === segments.length - 1) {
            items.push({ label: formattedLabel });
          } else {
            items.push({ label: formattedLabel, path: accumulatedPath });
          }
        });
        break;
      }
    }

    return items;
  };

  const breadcrumbs = getBreadcrumbs(currentPath);

  // Schema.org JSON-LD structured data for search engine crawlability and rich snippets
  const domain = typeof window !== 'undefined' ? window.location.origin : 'https://shipplix.com';
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': item.path ? `${domain}${item.path}` : `${domain}${currentPath}`
    }))
  };

  return (
    <div className="w-full bg-[#031d4d] border-b border-blue-900/60 text-white/90 pt-[62px] z-30 relative shadow-inner font-sans">
      {/* Structured Data Script for Search Engine Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-2.5 max-w-7xl">
        <nav aria-label="Breadcrumb navigation">
          <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium tracking-tight">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              const isFirst = index === 0;

              return (
                <li key={index} className="flex items-center gap-1.5 sm:gap-2">
                  {index > 0 && (
                    <ChevronRight size={12} className="text-amber-400/70 shrink-0" aria-hidden="true" />
                  )}

                  {isLast ? (
                    <span 
                      className="font-bold text-shipplix-yellow bg-white/10 border border-shipplix-yellow/30 px-2 py-0.5 rounded shadow-xs truncate max-w-[180px] sm:max-w-xs"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.path) {
                          onNavigate(item.path);
                        }
                      }}
                      className="flex items-center gap-1 text-white/80 hover:text-amber-300 font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-amber-400 rounded px-1 py-0.5 cursor-pointer"
                    >
                      {isFirst && <Home size={12} className="text-amber-400 mb-0.5 shrink-0" />}
                      <span>{item.label}</span>
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
