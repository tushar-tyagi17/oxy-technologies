import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Cpu, Building2, Network, Award, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { COMPANY, STATS, CORE_SERVICES } from '@/constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-secondary-900 to-secondary-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-accent-green/20 border border-accent-green rounded-full text-accent-green font-semibold text-sm mb-6"
              >
                {COMPANY.parentCompany} • Authorized Schneider Electric Partner
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                <span className="block">{COMPANY.name}</span>
              </h1>

              <p className="text-2xl md:text-3xl text-accent-green font-semibold mb-6">
                {COMPANY.tagline}
              </p>

              <p className="text-lg text-secondary-200 mb-8 leading-relaxed max-w-xl">
                Leading manufacturer of electrical and automation panels. Delivering world-class solutions for Oil & Gas, Healthcare, Infrastructure, and Industrial sectors.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" icon={ArrowRight}>
                    Explore Solutions
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-primary-600 !h-14">
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex flex-wrap gap-6 items-center"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-green" />
                  <span className="text-secondary-300 text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-green" />
                  <span className="text-secondary-300 text-sm">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-green" />
                  <span className="text-secondary-300 text-sm">500+ Projects</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image/Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 right-0 w-48 h-48 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <Box className="w-12 h-12 text-accent-green mb-3" />
                  <h3 className="text-white font-bold text-lg">Panel Manufacturing</h3>
                  <p className="text-secondary-300 text-sm mt-2">Premium Quality</p>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-20 left-0 w-48 h-48 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <Cpu className="w-12 h-12 text-accent-electric mb-3" />
                  <h3 className="text-white font-bold text-lg">Automation</h3>
                  <p className="text-secondary-300 text-sm mt-2">Smart Solutions</p>
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-1/3 left-[35%] w-48 h-48 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <Award className="w-12 h-12 text-accent-green mb-3" />
                  <h3 className="text-white font-bold text-lg">Schneider Partner</h3>
                  <p className="text-secondary-300 text-sm mt-2">System Integrator</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-secondary-200">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-[#2c3543] rounded-xl p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">
                  <AnimatedCounter end={parseInt(stat.value)} suffix={stat.value.replace(/[0-9]/g, '')} />
                </div>
                <p className="text-white font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-secondary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive electrical and automation solutions under one roof
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_SERVICES.map((service, index) => {
              const icons: { [key: string]: any } = {
                Box, Cpu, Building2, Network
              };
              const Icon = icons[service.icon];

              return (
                <Card key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/products-automation">
              <Button size="lg" icon={ArrowRight}>
                View All Solutions
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Our Clients */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Valued Clients
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Trusted by leading organizations across diverse industries
            </p>
          </motion.div>

          <div className="relative overflow-hidden py-8">
            <div className="flex animate-slide whitespace-nowrap">
              {/* All 18 client logos in single sequence */}
              {[
                'abb.jpeg', 'bharat-petroleum.jpeg', 'emerson.jpeg', 'endress-hauser.jpeg',
                'gulshan.jpeg', 'honeywell.jpeg', 'hospital.jpeg', 'hp.jpeg',
                'indian-oil.jpeg', 'jindal.jpeg', 'loesche.jpeg', 'mother-dairy.jpeg',
                'ogt.jpeg', 'reliance.jpeg', 'siemens.jpeg', 'simbhaoli-sugars.jpeg',
                'unissix.jpeg', 'voith.jpeg'
              ].map((logo, index) => (
                <div key={index} className="mx-8 inline-flex items-center justify-center min-w-[120px]">
                  <img 
                    src={`/clients/${logo}`}
                    alt={`Client ${index + 1}`}
                    className="h-20 max-h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter drop-shadow-sm"
                    onError={(e) => {
                      console.error(`Failed to load image: /clients/${logo}`);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
              
              {/* Invisible duplicate for seamless restart */}
              {[
                'abb.jpeg', 'bharat-petroleum.jpeg', 'emerson.jpeg', 'endress-hauser.jpeg',
                'gulshan.jpeg', 'honeywell.jpeg', 'hospital.jpeg', 'hp.jpeg',
                'indian-oil.jpeg', 'jindal.jpeg', 'loesche.jpeg', 'mother-dairy.jpeg',
                'ogt.jpeg', 'reliance.jpeg', 'siemens.jpeg', 'simbhaoli-sugars.jpeg',
                'unissix.jpeg', 'voith.jpeg'
              ].map((logo, index) => (
                <div key={`invisible-${index}`} className="mx-8 inline-flex items-center justify-center min-w-[120px] invisible">
                  <img 
                    src={`/clients/${logo}`}
                    alt={`Client ${index + 1}`}
                    className="h-16 max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Schneider Electric Badge */}
      {/* <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #0f1a2b 100%)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                Authorized Partner
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Schneider Electric System Integrator
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                As an authorized Schneider Electric System Integrator, we deliver world-class automation and electrical solutions backed by global standards and local expertise.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0" />
                  <span className="text-lg text-white">Certified technical expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0" />
                  <span className="text-lg text-white">Genuine Schneider products</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0" />
                  <span className="text-lg text-white">Complete system integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-green flex-shrink-0" />
                  <span className="text-lg text-white">Lifetime technical support</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                <div className="text-center">
                  <Award className="w-32 h-32 text-accent-green mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Certified Partner</h3>
                  <p className="text-white" style={{ opacity: 0.8 }}>
                    Delivering excellence through authorized Schneider Electric solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-secondary-300 mb-8">
                Partner with us for world-class electrical and automation solutions. Let's build something extraordinary together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="!bg-accent-green !text-secondary-900 hover:!bg-accent-green/90">
                    Get in Touch
                  </Button>
                </Link>
                {/* <Link to="/projects">
                  <Button variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-secondary-900">
                    View Projects
                  </Button>
                </Link> */}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
