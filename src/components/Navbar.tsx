import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, LogOut } from 'lucide-react';
import { NavLink } from '../types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { useCartStore } from '../store/cartStore';
import { supabase } from '../lib/supabase';

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/#products' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Testimonials', href: '/#testimonials' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-cream/95 shadow-sm backdrop-blur-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display text-xl font-semibold text-clay">Gallego Ranch</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="nav-link font-medium"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingBag className="h-6 w-6 text-clay" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-clay text-cream text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            {isAuthenticated ? (
              <button
                onClick={handleSignOut}
                className="flex items-center text-clay hover:text-clay/80"
              >
                <LogOut className="h-5 w-5" />
              </button>
            ) : (
              <Link
                to="/login"
                className="nav-link font-medium"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative"
            >
              <ShoppingBag className="h-6 w-6 text-clay" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-clay text-cream text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="text-clay"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-cream shadow-md transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="container-custom py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="py-2 px-3 text-charcoal/90 hover:bg-clay/5 rounded-md"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <button
                onClick={handleSignOut}
                className="py-2 px-3 text-charcoal/90 hover:bg-clay/5 rounded-md text-left"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="py-2 px-3 text-charcoal/90 hover:bg-clay/5 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;