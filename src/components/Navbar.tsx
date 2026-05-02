import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Common';
import { URL_QUOTE } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isHub = location.pathname === '/export-hub';

  const NavLinks = () => (
    <>
      {isHub ? (
        <>
          <a href="#about" className="hover:text-shipplix-yellow transition-colors">About</a>
          <a href="#learn" className="hover:text-shipplix-yellow transition-colors">Curriculum</a>
          <a href="#how" className="hover:text-shipplix-yellow transition-colors">How it works</a>
        </>
      ) : (
        <>
          <a href="#what" className="hover:text-shipplix-yellow transition-colors">Categories</a>
          <a href="#how" className="hover:text-shipplix-yellow transition-colors">Process</a>
          <a href="#trust" className="hover:text-shipplix-yellow transition-colors">Trust</a>
        </>
      )}
      <Link 
        to="/export-hub" 
        className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-black transition-all border-2 ${
          isHub 
            ? 'bg-shipplix-yellow text-shipplix-blue border-shipplix-yellow' 
            : 'border-shipplix-yellow text-shipplix-yellow hover:bg-shipplix-yellow hover:text-shipplix-blue'
        }`}
      >
        Export Hub
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shipplix-blue border-b-4 border-shipplix-yellow text-white py-3 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-shipplix-yellow text-shipplix-blue font-black p-1 rounded-sm text-xl tracking-tighter">SHIPPLIX</div>
          <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest opacity-80 uppercase leading-none">Official Export<br/>Partner</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
          <NavLinks />
          <Button 
            as="a" 
            href={URL_QUOTE} 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="yellow" 
            className="py-2 px-6 text-[10px] uppercase tracking-widest"
          >
            Get Quote
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-shipplix-blue border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6 font-bold text-xs uppercase tracking-wider">
              <NavLinks />
              <Button 
                as="a" 
                href={URL_QUOTE} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="yellow" 
                className="w-full"
              >
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
