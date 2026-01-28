import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { COMPANY, NAV_ITEMS } from '@/constants';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-secondary text-white">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/assets/oxy-logo.png" 
                alt="OXY Technologies Logo" 
                className="h-20 w-auto md:h-24 lg:h-28"
              />
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed mb-4">
              {COMPANY.tagline}
            </p>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Leading manufacturer of electrical and automation panels. Authorized Schneider Electric System Integrator.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-secondary-300 hover:text-accent-green transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-secondary-300">
              <li>Panel Manufacturing</li>
              <li>PLC & SCADA Solutions</li>
              <li>VFD Systems</li>
              <li>Turnkey Projects</li>
              <li>System Integration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-secondary-300 hover:text-accent-green transition-colors duration-300"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-secondary-300 hover:text-accent-green transition-colors duration-300"
                  >
                    {COMPANY.phone}
                  </a>
                  <a
                    href={`tel:${COMPANY.phoneAlt}`}
                    className="text-secondary-300 hover:text-accent-green transition-colors duration-300"
                  >
                    {COMPANY.phoneAlt}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                <div className="text-secondary-300 space-y-3">
                  <div>
                    <strong className="text-accent-green">Corporate Office & Works:</strong><br />
                    {COMPANY.address}
                  </div>
                  <div>
                    <strong className="text-accent-green">Branch Office:</strong><br />
                    {COMPANY.addressAlt}
                  </div>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent-green rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent-green rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-accent-green rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-secondary-400">
              <a href="#" className="hover:text-accent-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent-green transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
