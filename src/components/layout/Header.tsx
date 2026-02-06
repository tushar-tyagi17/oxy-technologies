import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Zap, GraduationCap, Building2, User, Phone } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import Container from '../ui/Container';

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  currentPath: string;
}

const NavItem = ({ to, label, icon: Icon, currentPath }: NavItemProps) => (
  <Link
    to={to}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      currentPath === to
        ? 'bg-primary-600 text-white shadow-md'
        : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-600 hover:shadow-sm'
    }`}
  >
    <Icon className="w-4 h-4" />
    {label}
  </Link>
);

const MobileNavItem = ({ to, label, icon: Icon, currentPath }: NavItemProps) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
      currentPath === to
        ? 'bg-primary-600 text-white shadow-md'
        : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-600 hover:shadow-sm'
    }`}
  >
    <Icon className="w-5 h-5" />
    {label}
  </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-medium'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/assets/oxy-logo.png" 
              alt="OXY Technologies Logo" 
              className="h-20 w-auto md:h-24 lg:h-28 transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-right space-x-1">
            <NavItem 
              to="/" 
              label="Home" 
              icon={Home} 
              currentPath={location.pathname}
            />
            <NavItem 
              to="/about" 
              label="About Us" 
              icon={Users} 
              currentPath={location.pathname}
            />
            <NavItem 
              to="/products-automation" 
              label="Products & Automation" 
              icon={Zap} 
              currentPath={location.pathname}
            />
            <NavItem 
              to="/contracting" 
              label="Training & Education" 
              icon={GraduationCap} 
              currentPath={location.pathname}
            />
            <NavItem 
              to="/industries" 
              label="Industries" 
              icon={Building2} 
              currentPath={location.pathname}
            />
            <NavItem 
              to="/leadership" 
              label="Leadership" 
              icon={User} 
              currentPath={location.pathname}
            />
            <NavItem 
              to="/contact" 
              label="Contact" 
              icon={Phone} 
              currentPath={location.pathname}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-secondary-900" />
            ) : (
              <Menu className="w-6 h-6 text-secondary-900" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-secondary-200 shadow-strong"
          >
            <Container>
              <div className="py-4 space-y-2">
                <MobileNavItem 
                  to="/" 
                  label="Home" 
                  icon={Home} 
                  currentPath={location.pathname}
                />
                <MobileNavItem 
                  to="/about" 
                  label="About Us" 
                  icon={Users} 
                  currentPath={location.pathname}
                />
                <MobileNavItem 
                  to="/products-automation" 
                  label="Products & Automation" 
                  icon={Zap} 
                  currentPath={location.pathname}
                />
                <MobileNavItem 
                  to="/contracting" 
                  label="Training & Education" 
                  icon={GraduationCap} 
                  currentPath={location.pathname}
                />
                <MobileNavItem 
                  to="/industries" 
                  label="Industries" 
                  icon={Building2} 
                  currentPath={location.pathname}
                />
                <MobileNavItem 
                  to="/leadership" 
                  label="Leadership" 
                  icon={User} 
                  currentPath={location.pathname}
                />
                <MobileNavItem 
                  to="/contact" 
                  label="Contact" 
                  icon={Phone} 
                  currentPath={location.pathname}
                />
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
