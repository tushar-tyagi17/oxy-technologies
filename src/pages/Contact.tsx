import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert('Thank you for your inquiry! We will get back to you soon.');
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
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {COMPANY.phone}
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
                      <h3 className="font-bold text-secondary-900 mb-1">Visit Us</h3>
                      <p className="text-secondary-600">{COMPANY.address}</p>
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
    </div>
  );
}
