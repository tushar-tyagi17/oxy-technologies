import { motion } from 'framer-motion';
import { Hammer, Sparkles, Zap, TestTube } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function Facility() {
  const facilities = [
    {
      icon: Hammer,
      title: 'Panel Fabrication',
      description: 'Modern fabrication unit with CNC bending, cutting, and welding capabilities for precision panel manufacturing.',
    },
    {
      icon: Sparkles,
      title: 'Powder Coating',
      description: 'In-house powder coating facility ensuring durable, corrosion-resistant finishes on all electrical panels.',
    },
    {
      icon: Zap,
      title: 'Busbar & Wiring',
      description: 'Dedicated busbar manufacturing and automated wiring systems for efficient and reliable panel assembly.',
    },
    {
      icon: TestTube,
      title: 'Testing Facilities',
      description: 'Comprehensive testing lab with high voltage testing, insulation resistance, and load testing equipment.',
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
              Facility & Infrastructure
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              State-of-the-art manufacturing facility equipped with modern machinery
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="group">
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <facility.icon className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {facility.title}
                </h3>
                <p className="text-secondary-600 text-lg">
                  {facility.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual Showcase */}
      <section className="section-padding bg-secondary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Manufacturing Excellence
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Combining technology with skilled craftsmanship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Panel Fabrication Unit', desc: 'Modern machinery for precision manufacturing' },
              { title: 'Quality Control Lab', desc: 'Rigorous testing at every stage' },
              { title: 'Assembly Line', desc: 'Efficient and organized production' },
              { title: 'Storage & Logistics', desc: 'Safe handling and on-time delivery' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-64 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                  <div className="mt-4 text-sm opacity-50">Image Placeholder</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
