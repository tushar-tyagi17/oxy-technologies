import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ChevronRight, Globe, Building2 } from 'lucide-react';
import { COMPANY, NAV_ITEMS } from '@/constants';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-secondary-900 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <Link to="/" className="block transition-transform duration-300 hover:scale-105">
                <img 
                  src="/assets/oxy-logo.png" 
                  alt="OXY Technologies Logo" 
                  className="h-32 w-auto"
                />
              </Link>
            </div>
            <p className="text-secondary-700 text-sm leading-relaxed mt-4">
              {COMPANY.tagline}
            </p>
            <p className="text-secondary-500 text-xs">
              Leading manufacturer of electrical and automation panels. Authorized Schneider Electric System Integrator.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center space-x-2 text-secondary-900">
              <Globe className="w-5 h-5 text-accent-green" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center text-secondary-700 hover:text-accent-green transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary-900">Our Services</h4>
            <ul className="space-y-3 text-secondary-700">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                <span>Panel Manufacturing</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                <span>PLC & SCADA Solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                <span>VFD Systems</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                <span>Turnkey Projects</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                <span>System Integration</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary-900">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3">
                <div className="mt-0.5 p-2 bg-blue-600 rounded-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-secondary-700 hover:text-accent-green transition-colors duration-300 text-sm"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-0.5 p-2 bg-blue-600 rounded-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col space-y-1">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-secondary-700 hover:text-accent-green transition-colors duration-300 text-sm"
                  >
                    {COMPANY.phone}
                  </a>
                  <a
                    href={`tel:${COMPANY.phoneAlt}`}
                    className="text-secondary-700 hover:text-accent-green transition-colors duration-300 text-sm"
                  >
                    {COMPANY.phoneAlt}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-0.5 p-2 bg-blue-600 rounded-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="text-secondary-700 text-sm space-y-3">
                  <div>
                    <strong className="text-accent-green text-xs uppercase tracking-wider block mb-1">Corporate Office & Works:</strong>
                    {COMPANY.address}
                  </div>
                  <div>
                    <strong className="text-accent-green text-xs uppercase tracking-wider block mb-1">Branch Office:</strong>
                    {COMPANY.addressAlt}
                  </div>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 bg-blue-800 hover:bg-accent-green rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-accent-green/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-blue-800 hover:bg-accent-green rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-accent-green/20"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-blue-800 hover:bg-accent-green rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-accent-green/20"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-secondary-600 text-sm">
              © {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-secondary-600">
              <a href="#" className="hover:text-accent-green transition-colors hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent-green transition-colors hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
