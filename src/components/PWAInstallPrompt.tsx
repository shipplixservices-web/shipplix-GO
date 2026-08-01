import React, { useState, useEffect } from 'react';
import { Download, Smartphone, X, Share, PlusSquare, CheckCircle2, Sparkles } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showIOSGuide, setShowIOSGuide] = useState<boolean>(false);
  const [isIOS, setIsIOS] = useState<boolean>(false);

  useEffect(() => {
    // 1. Check if previously marked as installed in localStorage
    const hasBeenInstalled = localStorage.getItem('shipplix_app_installed') === 'true';

    // 2. Check if currently running in display-mode: standalone or iOS standalone
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                         (window.navigator as any).standalone === true;

    if (hasBeenInstalled || isStandalone) {
      setIsInstalled(true);
      return;
    }

    // 3. Check getInstalledRelatedApps API if available (Chrome 80+, Edge, Android)
    if ('getInstalledRelatedApps' in navigator) {
      (navigator as any).getInstalledRelatedApps()
        .then((relatedApps: any[]) => {
          if (relatedApps && relatedApps.length > 0) {
            localStorage.setItem('shipplix_app_installed', 'true');
            setIsInstalled(true);
          }
        })
        .catch(() => {});
    }

    // Detect iOS device
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Check session storage if user dismissed prompt in current session
    const hasDismissed = sessionStorage.getItem('shipplix_pwa_prompt_dismissed') === 'true';

    // Listen for beforeinstallprompt event (Android, Chrome Desktop, Edge)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      // If already installed, never store or show prompt
      if (localStorage.getItem('shipplix_app_installed') === 'true') {
        return;
      }

      setDeferredPrompt(e as BeforeInstallPromptEvent);
      if (!hasDismissed) {
        setIsVisible(true);
      } else {
        setIsMinimized(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for appinstalled event (fired upon successful installation)
    const handleAppInstalled = () => {
      localStorage.setItem('shipplix_app_installed', 'true');
      setIsInstalled(true);
      setIsVisible(false);
      setIsMinimized(false);
      setDeferredPrompt(null);
      console.log('Shipplix App was successfully installed!');
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    // Listen to display-mode change (e.g. app launched in standalone mode)
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleDisplayModeChange = (evt: MediaQueryListEvent) => {
      if (evt.matches) {
        localStorage.setItem('shipplix_app_installed', 'true');
        setIsInstalled(true);
        setIsVisible(false);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleDisplayModeChange);
    }

    // On iOS, if not installed and not dismissed, show prompt trigger
    if (isIOSDevice && !isStandalone && !hasBeenInstalled) {
      if (!hasDismissed) {
        setIsVisible(true);
      } else {
        setIsMinimized(true);
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleDisplayModeChange);
      }
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the Shipplix PWA install prompt');
        localStorage.setItem('shipplix_app_installed', 'true');
        setIsInstalled(true);
        setIsVisible(false);
        setIsMinimized(false);
        setDeferredPrompt(null);
      } else {
        console.log('User dismissed the install prompt');
        setIsMinimized(true);
        sessionStorage.setItem('shipplix_pwa_prompt_dismissed', 'true');
      }
    } catch (err) {
      console.error('Error triggering PWA install prompt:', err);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsMinimized(true);
    sessionStorage.setItem('shipplix_pwa_prompt_dismissed', 'true');
  };

  if (isInstalled) return null;

  return (
    <>
      {/* Full Floating Install Banner / Banner Bar */}
      {isVisible && !isMinimized && (
        <div className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 bg-slate-900 border border-slate-700/80 shadow-2xl rounded-2xl p-4.5 text-white backdrop-blur-lg animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-shipplix-blue flex items-center justify-center p-2 shadow-inner border border-blue-400/30 flex-shrink-0">
                <img src="/pwa-192x192.png" alt="Shipplix Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-white">Shipplix Mobile App</h4>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] font-black uppercase px-1.5 py-0.5 rounded tracking-wide border border-amber-400/30 flex items-center gap-0.5">
                    <Sparkles size={10} /> Fast
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                  Install Shipplix for quick rate calculations, live cargo tracking &amp; instant booking!
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
              aria-label="Dismiss install prompt"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-3.5 flex items-center gap-2">
            <button
              onClick={handleInstallClick}
              className="flex-1 bg-shipplix-yellow hover:bg-yellow-400 text-slate-950 font-black text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all uppercase tracking-wide cursor-pointer"
            >
              <Download size={15} />
              <span>Install Shipplix App</span>
            </button>
            <button
              onClick={handleDismiss}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors cursor-pointer"
            >
              Later
            </button>
          </div>
        </div>
      )}

      {/* Minimized Floating Icon Trigger (when dismissed or available) */}
      {(isMinimized || (!isVisible && (deferredPrompt || isIOS))) && (
        <button
          onClick={() => {
            setIsVisible(true);
            setIsMinimized(false);
          }}
          className="fixed bottom-6 left-6 z-40 bg-slate-900 border border-shipplix-yellow/50 text-white p-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
          title="Install Shipplix App"
          aria-label="Install Shipplix App"
        >
          <div className="relative">
            <Smartphone size={20} className="text-shipplix-yellow" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full" />
          </div>
          <span className="text-xs font-bold text-white max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap pr-1">
            Install App
          </span>
        </button>
      )}

      {/* iOS Installation Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-shipplix-blue flex items-center justify-center p-1.5 border border-blue-400/30">
                <img src="/pwa-192x192.png" alt="Shipplix" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Install on iPhone / iPad</h3>
                <p className="text-xs text-slate-400">Add Shipplix to your Home Screen</p>
              </div>
            </div>

            <ol className="space-y-3.5 text-xs text-slate-300 my-5">
              <li className="flex items-start gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <span className="bg-shipplix-blue text-white rounded-lg p-1.5 flex-shrink-0 mt-0.5">
                  <Share size={16} />
                </span>
                <span>
                  Tap the <strong className="text-white">Share button</strong> at the bottom of your Safari browser toolbar.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <span className="bg-amber-500 text-slate-950 rounded-lg p-1.5 flex-shrink-0 mt-0.5">
                  <PlusSquare size={16} />
                </span>
                <span>
                  Scroll down and tap <strong className="text-white">Add to Home Screen</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
                <span className="bg-green-500 text-slate-950 rounded-lg p-1.5 flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={16} />
                </span>
                <span>
                  Tap <strong className="text-white">Add</strong> in the top right corner. Shipplix will appear on your home screen!
                </span>
              </li>
            </ol>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full bg-shipplix-yellow hover:bg-yellow-400 text-slate-950 font-black text-xs py-3 rounded-xl uppercase tracking-wider transition-colors cursor-pointer"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
};
