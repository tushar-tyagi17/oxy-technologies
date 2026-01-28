import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Building, Zap, Mail, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { COMPANY, LEADERSHIP } from '@/constants';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To deliver world-class electrical and automation solutions that empower industries to achieve operational excellence and sustainable growth.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the most trusted partner for industrial electrical and automation solutions across India and beyond.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Uncompromising commitment to quality, safety, and performance in every product and service we deliver.',
    },
  ];

  const capabilities = [
    {
      icon: Building,
      title: 'Manufacturing Excellence',
      description: 'State-of-the-art facility with advanced machinery for panel fabrication, powder coating, busbar manufacturing, and comprehensive testing.',
    },
    {
      icon: Zap,
      title: 'Contracting Expertise',
      description: 'Complete SITC (Supply, Installation, Testing & Commissioning) capabilities for turnkey electrical projects of any scale.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled engineers, technicians, and project managers with decades of combined industry experience.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary-900 to-secondary-900">
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
              About {COMPANY.name}
            </h1>
            <p className="text-2xl text-accent-green font-semibold mb-4">
              {COMPANY.tagline}
            </p>
            <p className="text-xl text-secondary-200 leading-relaxed">
              A proud member of {COMPANY.parentCompany}, delivering excellence in electrical and automation solutions since over 15 years.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-secondary-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-secondary-700 leading-relaxed">
                <p>
                  <strong className="text-secondary-900">OXY Technologies</strong> is a leading manufacturer and system integrator specializing in electrical control panels, automation solutions, and turnkey electrical projects for industrial sectors.
                </p>
                <p>
                  As part of the <strong className="text-secondary-900">{COMPANY.parentCompany}</strong>, we combine manufacturing prowess with contracting expertise to deliver comprehensive solutions under one roof.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility is equipped with modern machinery, skilled workforce, and rigorous quality control processes ensuring products that meet international standards.
                </p>
                <p>
                  We are proud to be an <strong className="text-primary-600">Authorized Schneider Electric System Integrator</strong>, enabling us to deliver world-class automation solutions backed by global technology and local expertise.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '500+', label: 'Projects Completed' },
                { number: '200+', label: 'Happy Clients' },
                { number: '10+', label: 'Industries Served' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-primary text-white rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-secondary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Complete solutions under one roof
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <capability.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {capability.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-secondary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto mb-8">
              OXYGEN is a group mix of young as well as experienced professionals who have good amount of experience in the industry. Each individual is well versed in their fields.
            </p>
            <p className="text-lg text-secondary-700 max-w-4xl mx-auto">
              We expertise in understanding customers needs, selecting and designing accordingly and then manufacturing best in the industry. We are also committed for after sales service to our customers. Our clients enjoy a single roof for all the solutions required as per their needs which make the work very convenient, easy, fast and perfectly synced.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {LEADERSHIP.map((leader, index) => (
              <Card key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4 text-lg">
                  {leader.role}
                </p>
                <p className="text-secondary-600 mb-6">
                  {leader.description}
                </p>
                <div className="space-y-3 text-sm">
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center justify-center space-x-2 text-secondary-700 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{leader.email}</span>
                  </a>
                  <a
                    href={`tel:${leader.phone}`}
                    className="flex items-center justify-center space-x-2 text-secondary-700 hover:text-primary-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{leader.phone}</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Why Choose OXY Technologies?
              </h2>
              <p className="text-xl text-white/90">
                The single-roof solution advantage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Manufacturing + Contracting under one roof',
                'Schneider Electric authorized system integrator',
                'ISO certified quality management',
                'In-house design and engineering team',
                'State-of-the-art testing facilities',
                'Experienced project management',
                'Competitive pricing with no compromise on quality',
                'Comprehensive after-sales support',
                'On-time project delivery',
                'Strong presence across multiple industries',
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="w-8 h-8 bg-accent-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-900 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-lg">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
