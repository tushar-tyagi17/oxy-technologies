import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, X, CheckCircle2, ChevronDown, AlertCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/constants';
import { countryCodes, type CountryCode } from '@/data/countryCodes';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countryCodes[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [submitResult, setSubmitResult] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Show welcome modal when component mounts
  useEffect(() => {
    setShowWelcomeModal(true);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'This field is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'This field is required';
    } else {
      const phoneWithoutCode = formData.phone.replace(/[^0-9]/g, '');
      if (phoneWithoutCode.length < 7) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'This field is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = new URLSearchParams();
    payload.append('access_key', 'ed1562fd-664a-440d-9a2c-4e12a370c5b1');
    payload.append('subject', 'New Contact Form Submission');
    payload.append('from_name', 'OXY Technologies Contact Form');
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('company', formData.company);
    payload.append('message', formData.message);
    payload.append('country', selectedCountry.name);
    payload.append('country_code', selectedCountry.dialCode);
    payload.append('botcheck', '');

    try {
      setSubmitResult('Submitting...');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
      });
      const json = await res.json().catch(() => ({}));
      console.log('Web3Forms response', res.status, json);

      if (res.ok && (json as any).success) {
        setSubmitResult('Form Submitted Successfully');
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setErrors({});
        setSearchQuery('');
        setSelectedCountry(countryCodes[0]);
      } else {
        const msg = (json as any).message || 'Submission failed';
        setSubmitResult(`Error: ${msg}`);
      }
    } catch (err) {
      console.error('Submit error', err);
      setSubmitResult('Error submitting form. See console for details.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Remove any non-digit characters except + at the start
    value = value.replace(/[^0-9+]/g, '');
    
    // Ensure it starts with the selected country code
    if (!value.startsWith(selectedCountry.dialCode)) {
      value = selectedCountry.dialCode + value.replace(/[^0-9]/g, '');
    }
    
    setFormData({ ...formData, phone: value });
    
    // Clear error when user starts typing
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setSearchQuery('');
    setShowDropdown(false);
    
    // Update phone number with new country code
    if (formData.phone) {
      const phoneDigits = formData.phone.replace(/[^0-9]/g, '').substring(selectedCountry.dialCode.length);
      setFormData(prev => ({ ...prev, phone: country.dialCode + phoneDigits }));
    } else {
      setFormData(prev => ({ ...prev, phone: country.dialCode }));
    }
  };

  const filteredCountries = countryCodes.filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.dialCode.includes(searchQuery)
  );

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Let's discuss your project requirements
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Send us a Message
              </h2>
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Form fields below */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all ${errors.name ? '!border-red-500 !ring-red-500' : ''}`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all ${errors.email ? '!border-red-500 !ring-red-500' : ''}`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="flex">
                      {/* Country Code Dropdown */}
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="flex items-center gap-2 px-3 py-3 bg-secondary-50 border border-r-0 border-secondary-300 rounded-l-xl hover:bg-secondary-100 transition-colors min-w-[120px]"
                        >
                          <span className="text-xl">{selectedCountry.flag}</span>
                          <span className="font-medium">{selectedCountry.dialCode}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {showDropdown && (
                          <div className="absolute left-0 top-full z-20 mt-1 w-80 max-h-60 bg-white border border-secondary-300 rounded-xl shadow-lg overflow-hidden">
                            <div className="p-2 border-b border-secondary-200 sticky top-0 bg-white">
                              <input
                                type="text"
                                placeholder="Search countries..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                                autoFocus
                              />
                            </div>
                            <div className="overflow-y-auto max-h-48">
                              {filteredCountries.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => handleCountrySelect(country)}
                                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-secondary-50 transition-colors first:border-t first:border-secondary-200"
                                >
                                  <span className="text-xl">{country.flag}</span>
                                  <div>
                                    <div className="font-medium text-secondary-900">{country.name}</div>
                                    <div className="text-sm text-secondary-500">{country.dialCode}</div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Phone Input */}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                        className={`flex-1 px-4 py-3 border border-secondary-300 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all ${errors.phone ? '!border-red-500 !ring-red-500' : ''}`}
                        placeholder="XXXXXXXXXX"
                      />
                    </div>
                    
                    {/* Error Message */}
                    {errors.phone && (
                      <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none ${errors.message ? '!border-red-500 !ring-red-500' : ''}`}
                    placeholder="Tell us about your project requirements..."
                  />
                  {errors.message && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <Button type="submit" size="lg" icon={Send} className="w-full">
                    Send Message
                  </Button>
                  {submitResult && (
                    <div className={`text-center p-3 rounded-lg ${submitResult.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                      {submitResult}
                    </div>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-secondary-600 mb-8">
                  We're here to help with your electrical and automation project needs. Reach out to us for inquiries, quotes, or technical support.
                </p>
              </div>

              <div className="space-y-6">
                <Card hover={false}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900 mb-1">Email Us</h3>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900 mb-1">Call Us</h3>
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors block mb-1"
                      >
                        {COMPANY.phone}
                      </a>
                      <a
                        href={`tel:${COMPANY.phoneAlt}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors block"
                      >
                        {COMPANY.phoneAlt}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900 mb-3">Visit Us</h3>
                      <p className="text-secondary-600 text-sm mb-3">
                        <strong>Corporate Office & Works:</strong><br />
                        {COMPANY.address}
                      </p>
                      <p className="text-secondary-600 text-sm">
                        <strong>Branch Office:</strong><br />
                        {COMPANY.addressAlt}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-primary text-white" hover={false}>
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-secondary-600">
              Find us at our corporate office and works location
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Corporate Office Map */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-secondary-900">
                Corporate Office & Works
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-strong h-96 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.393082934539!2d77.4543949758874!3d28.53525598270634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6262291518d%3A0x6b6b6b6b6b6b6b6b!2sTech%20Zone%204%2C%20Amrapali%20Dream%20Valley%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Corporate Office Location - Tech Zone 4, Amrapali Dream Valley"
                ></iframe>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button 
                    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Tech+Zone+4%2C+Plot+No+-+17%2C+Amrapali+Dream+Valley%2C+Greater+Noida%2C+Uttar+Pradesh+201318', '_blank')}
                    className="bg-white text-secondary-900 px-6 py-3 rounded-xl font-semibold shadow-strong hover:shadow-industrial transition-all duration-300 transform hover:scale-105"
                  >
                    Open in Google Maps
                  </button>
                </div>
              </div>
              <p className="text-sm text-secondary-600">
                Tech Zone 4, Plot No - 17, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318
              </p>
            </div>

            {/* Branch Office Map */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-secondary-900">
                Branch Office
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-strong h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5!2d77.3910!3d28.6271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef3b4c5b7c9b%3A0x7c0c8b7c5b7c9b7c!2sD-71%2C%20D%20Block%2C%20Sector%2063%2C%20Noida!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Branch Office Location"
                ></iframe>
              </div>
              <p className="text-sm text-secondary-600">
                D-71, D Block, Sector 63, Noida, Uttar Pradesh 201301, India
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#2c3543] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                New Business Opportunities
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Looking to partner with us or explore business opportunities? We'd love to hear from you.
              </p>
              <Button size="lg" className="!bg-accent-green !text-secondary-900 hover:!bg-accent-green/90">
                Schedule a Meeting
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Welcome Modal */}
      <AnimatePresence>
        {showWelcomeModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-strong"
            >
              <button
                onClick={() => setShowWelcomeModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg hover:bg-secondary-100 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-secondary-600" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Welcome to OXY Technologies!
                </h3>
                <p className="text-secondary-600 mb-6">
                  We're excited to hear about your project. Please fill out the form below and our team will get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setShowWelcomeModal(false)}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-strong"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg hover:bg-secondary-100 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-secondary-600" />
              </button>

              <div className="text-center">
                <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-12 h-12 text-accent-green" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-secondary-600 mb-6">
                  Thank you for reaching out to us. Our team will review your inquiry and get back to you within 24 hours.
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={() => setShowSuccessModal(false)}
                    className="w-full"
                  >
                    Close
                  </Button>
                  <p className="text-sm text-secondary-500">
                    Need urgent assistance? Call us at {COMPANY.phone}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
