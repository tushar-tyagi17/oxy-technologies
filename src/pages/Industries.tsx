import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { INDUSTRIES } from '@/constants';
import * as Icons from 'lucide-react';

export default function Industries() {
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
              Industries We Serve
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Trusted partner across diverse industrial sectors
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, index) => {
              const IconComponent = Icons[industry.icon as keyof typeof Icons] as any;
              return (
                <Card key={index} className="group">
                  <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    {industry.name}
                  </h3>
                  <p className="text-secondary-600">
                    {industry.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Key Clients */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #0f1a2b 100%)' }}>
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Trusted by Leading Organizations
              </h2>
              <p className="text-xl mb-12 text-white" style={{ opacity: 0.9 }}>
                Serving India's top industrial and infrastructure companies
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-white">HPCL</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-white">IOCL</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-white">BPCL</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-white">Reliance Industries</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-white">Leading Hospitals</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-white">Cement Plants</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-white">Sugar Mills</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-white">Infrastructure Projects</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg font-semibold text-white">Government Bodies</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
