import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, X, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Show welcome modal when component mounts
  useEffect(() => {
    setShowWelcomeModal(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setShowSuccessModal(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
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
                    className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
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
                    className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button type="submit" size="lg" icon={Send} className="w-full">
                  Send Message
                </Button>
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
          <div className="rounded-2xl overflow-hidden shadow-strong h-96 bg-secondary-200 flex items-center justify-center">
            <div className="text-center text-secondary-600">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-xl font-semibold">Google Maps Integration</p>
              <p className="text-sm mt-2">Embed your location map here</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary text-white">
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
