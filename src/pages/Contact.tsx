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
  const [submitResult, setSubmitResult] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(countryCodes[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
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

  // Show welcome modal on mount
  useEffect(() => {
    setShowWelcomeModal(true);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'This field is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.email.trim()) newErrors.email = 'This field is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'This field is required';
    else {
      const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
      if (phoneDigits.length < 7) newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'This field is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      access_key: '00e300b7-6cbb-4981-8330-9ef754e7c64e',
      subject: 'New Contact Form Submission from OXY Technologies',
      from_name: 'OXY Technologies Contact Form',
      country: selectedCountry.name,
      country_code: selectedCountry.dialCode,
      ...formData,
      botcheck: '', // hidden field
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.success) {
        setSubmitResult('Form submitted successfully ✅');
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setErrors({});
        setSearchQuery('');
        setSelectedCountry(countryCodes[0]);
      } else {
        setSubmitResult('Something went wrong ❌');
      }
    } catch (error) {
      console.error(error);
      setSubmitResult('Something went wrong ❌');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9+]/g, '');
    if (!value.startsWith(selectedCountry.dialCode)) {
      value = selectedCountry.dialCode + value.replace(/[^0-9]/g, '');
    }
    setFormData({ ...formData, phone: value });
    if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
  };

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setSearchQuery('');
    setShowDropdown(false);
    if (formData.phone) {
      const phoneDigits = formData.phone.replace(/[^0-9]/g, '').substring(selectedCountry.dialCode.length);
      setFormData(prev => ({ ...prev, phone: country.dialCode + phoneDigits }));
    } else {
      setFormData(prev => ({ ...prev, phone: country.dialCode }));
    }
  };

  const filteredCountries = countryCodes.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.dialCode.includes(searchQuery)
  );

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-secondary-200 leading-relaxed">Let's discuss your project requirements</p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="botcheck" value="" />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 ${errors.name ? '!border-red-500 !ring-red-500' : 'border-secondary-300'}`}
                  />
                  {errors.name && <div className="text-red-600 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.name}</div>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 ${errors.email ? '!border-red-500 !ring-red-500' : 'border-secondary-300'}`}
                  />
                  {errors.email && <div className="text-red-600 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.email}</div>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">Phone Number *</label>
                  <div className="flex">
                    {/* Country Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                      <button type="button" onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-2 px-3 py-3 bg-secondary-50 border border-r-0 border-secondary-300 rounded-l-xl min-w-[120px]">
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <span className="font-medium">{selectedCountry.dialCode}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      {showDropdown && (
                        <div className="absolute left-0 top-full z-20 mt-1 w-80 max-h-60 bg-white border border-secondary-300 rounded-xl shadow-lg overflow-hidden">
                          <div className="p-2 border-b border-secondary-200 sticky top-0 bg-white">
                            <input type="text" placeholder="Search countries..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" autoFocus />
                          </div>
                          <div className="overflow-y-auto max-h-48">
                            {filteredCountries.map(c => (
                              <button key={c.code} type="button" onClick={() => handleCountrySelect(c)} className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-secondary-50">
                                <span className="text-xl">{c.flag}</span>
                                <div>
                                  <div className="font-medium">{c.name}</div>
                                  <div className="text-sm text-secondary-500">{c.dialCode}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Phone Input */}
                    <input type="tel" name="phone" value={formData.phone} onChange={handlePhoneChange} placeholder="XXXXXXXXXX" className={`flex-1 px-4 py-3 border rounded-r-xl focus:outline-none focus:ring-2 focus:ring-primary-600 ${errors.phone ? '!border-red-500 !ring-red-500' : 'border-secondary-300'}`} />
                  </div>
                  {errors.phone && <div className="text-red-600 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.phone}</div>}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-secondary-700 mb-2">Company / Organization</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 border-secondary-300" />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your project requirements..." className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none ${errors.message ? '!border-red-500 !ring-red-500' : 'border-secondary-300'}`} />
                  {errors.message && <div className="text-red-600 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.message}</div>}
                </div>

                <Button type="submit" size="lg" icon={Send} className="w-full">Send Message</Button>
                {submitResult && <div className={`text-center p-3 rounded-lg ${submitResult.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{submitResult}</div>}
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-strong">
              <button onClick={() => setShowSuccessModal(false)} className="absolute top-4 right-4 w-8 h-8 rounded-lg hover:bg-secondary-100 flex items-center justify-center transition-colors"><X className="w-5 h-5 text-secondary-600" /></button>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-12 h-12 text-accent-green" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">Message Sent Successfully!</h3>
                <p className="text-secondary-600 mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
                <Button onClick={() => setShowSuccessModal(false)} className="w-full">Close</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
