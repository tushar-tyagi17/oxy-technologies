import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { CONTRACTING_STEPS } from '@/constants';
import * as Icons from 'lucide-react';

export default function Contracting() {
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
              Contracting & Turnkey Projects
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Complete SITC (Supply, Installation, Testing & Commissioning) solutions from concept to completion
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Systematic approach to project execution
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-green transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {CONTRACTING_STEPS.slice(0, 4).map((step, index) => {
                const IconComponent = Icons[step.icon as keyof typeof Icons] as any;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="text-center relative bg-white">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <IconComponent className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-secondary-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-secondary-600">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8 relative z-10">
              {CONTRACTING_STEPS.slice(4).map((step, index) => {
                const IconComponent = Icons[step.icon as keyof typeof Icons] as any;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 4) * 0.1 }}
                  >
                    <Card className="text-center relative bg-white">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <IconComponent className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-secondary-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-secondary-600">
                        {step.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #0f1a2b 100%)' }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Turnkey Project Capabilities
              </h2>
              <p className="text-lg mb-8 text-white" style={{ opacity: 0.9 }}>
                Complete project execution with single-point responsibility
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Icons.CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg" style={{ opacity: 0.9 }}>Electrical panel design and manufacturing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg" style={{ opacity: 0.9 }}>On-site installation and wiring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg" style={{ opacity: 0.9 }}>PLC programming and commissioning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg" style={{ opacity: 0.9 }}>SCADA system integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg" style={{ opacity: 0.9 }}>Complete testing and validation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg" style={{ opacity: 0.9 }}>Documentation and training</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icons.CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg" style={{ opacity: 0.9 }}>Preventive maintenance support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Why Choose Our Contracting Services?
              </h3>
              <ul className="space-y-6">
                <li>
                  <h4 className="font-bold text-xl mb-2 text-accent-green">Single Roof Solution</h4>
                  <p className="text-white" style={{ opacity: 0.9 }}>Manufacturing + contracting under one organization</p>
                </li>
                <li>
                  <h4 className="font-bold text-xl mb-2 text-accent-green">Experienced Team</h4>
                  <p className="text-white" style={{ opacity: 0.9 }}>500+ projects executed successfully</p>
                </li>
                <li>
                  <h4 className="font-bold text-xl mb-2 text-accent-green">Quality Assurance</h4>
                  <p className="text-white" style={{ opacity: 0.9 }}>ISO certified processes and international standards</p>
                </li>
                <li>
                  <h4 className="font-bold text-xl mb-2 text-accent-green">On-Time Delivery</h4>
                  <p className="text-white" style={{ opacity: 0.9 }}>Proven track record of timely project completion</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
