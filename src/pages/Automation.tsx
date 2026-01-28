import { motion } from 'framer-motion';
import { Cpu, Monitor, Zap, Server, Award, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function Automation() {
  const solutions = [
    {
      icon: Cpu,
      title: 'PLC Solutions',
      description: 'Complete PLC programming and integration services with support for Schneider, Siemens, Allen Bradley, and more.',
      features: ['Custom PLC programming', 'System integration', 'Retrofit solutions', '24/7 technical support'],
    },
    {
      icon: Monitor,
      title: 'SCADA Systems',
      description: 'Advanced SCADA solutions for real-time monitoring and control of industrial processes.',
      features: ['Real-time monitoring', 'Data logging & analytics', 'Remote access', 'Custom dashboards'],
    },
    {
      icon: Zap,
      title: 'VFD Supply & Integration',
      description: 'Variable Frequency Drives for energy-efficient motor control across MV and LV applications.',
      features: ['Energy optimization', 'Soft start functionality', 'Multi-brand support', 'Complete commissioning'],
    },
    {
      icon: Server,
      title: 'Industrial UPS',
      description: 'Reliable power backup solutions for critical industrial applications and process control systems.',
      features: ['Uninterrupted power supply', 'Battery management', 'Remote monitoring', 'Maintenance support'],
    },
  ];

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
              Automation & System Integration
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Smart industrial automation solutions powered by global technology and local expertise
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <solution.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-secondary-700">
                      <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Schneider Partnership */}
      <section className="section-padding bg-gradient-primary text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-20 h-20 text-accent-green mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Schneider Electric System Integrator
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                As an authorized Schneider Electric partner, we deliver cutting-edge automation solutions with guaranteed quality and performance.
              </p>
              <ul className="space-y-4">
                {[
                  'Certified technical team',
                  'Genuine Schneider components',
                  'Complete system design & integration',
                  'Comprehensive after-sales support',
                  'Training and documentation',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                'PLC Programming',
                'SCADA Development',
                'HMI Configuration',
                'Network Setup',
                'Commissioning',
                'Training',
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                >
                  <div className="text-3xl font-bold text-accent-green mb-2">
                    ✓
                  </div>
                  <p className="font-semibold">{service}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
