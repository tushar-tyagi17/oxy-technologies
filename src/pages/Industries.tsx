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

      {/* Industries Image Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="/images/industries.png" 
                alt="Industries We Serve"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-secondary-600 leading-relaxed mb-6">
                Trusted partner across diverse industrial sectors
              </p>
              <p className="text-secondary-600 leading-relaxed">
                We have established ourselves as a reliable partner across various industrial domains, delivering cutting-edge automation solutions tailored to meet the unique challenges of each sector. Our expertise spans multiple industries where precision, reliability, and innovation are paramount.
              </p>
            </div>
          </div>
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
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Serving India's top industrial and infrastructure companies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'abb.jpeg', 'bharat-petroleum.jpeg', 'emerson.jpeg', 'endress-hauser.jpeg',
              'gulshan.jpeg', 'honeywell.jpeg', 'hospital.jpeg', 'hp.jpeg',
              'indian-oil.jpeg', 'jindal.jpeg', 'loesche.jpeg', 'mother-dairy.jpeg',
              'ogt.jpeg', 'reliance.jpeg', 'siemens.jpeg', 'simbhaoli-sugars.jpeg',
              'unissix.jpeg', 'voith.jpeg'
            ].map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <img 
                  src={`/clients/${logo}`}
                  alt={`Client ${index + 1}`}
                  className="h-16 max-h-16 object-contain w-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
