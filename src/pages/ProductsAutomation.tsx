import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, CheckCircle, Cpu, Monitor, Zap, Server, Award } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { PRODUCTS } from '@/constants';

export default function ProductsAutomation() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  const automationSolutions = [
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
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url(/images/products-automation.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }}></div>
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
              Products & Automation
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Premium quality electrical control panels and advanced automation solutions manufactured to international standards
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              High-quality electrical control panels engineered for reliability and performance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Card key={product.id} className="group cursor-pointer flex flex-col h-full" hover={true}>
                <div className="mb-6 flex-grow">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={`/images/${product.id === 'pcc' ? 'PCC.png' : product.id === 'mcc' ? 'MCC.png' : product.id === 'plc-imcc' ? 'PLC & IMCC Panels.png' : product.id === 'vfd' ? 'VFD Panels.png' : product.id === 'apfc' ? 'APFC Panels.png' : product.id === 'busduct' ? 'Bus Ducts & Rising Mains.png' : 'placeholder.jpg'}`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder.jpg';
                        target.onerror = null;
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {product.shortDesc}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.specs.slice(0, 3).map((spec, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-secondary-700">
                      <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => setSelectedProduct(product)}
                  variant="outline"
                  className="w-full mt-auto"
                >
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Automation Solutions */}
      <section className="section-padding bg-secondary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Automation Solutions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Advanced automation systems powered by global technology and local expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {automationSolutions.map((solution, index) => (
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

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-secondary-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-secondary-900">
                {selectedProduct.name}
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-10 h-10 rounded-lg hover:bg-secondary-100 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-lg text-secondary-700 mb-6">
                {selectedProduct.shortDesc}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  Technical Specifications
                </h3>
                <ul className="space-y-3">
                  {selectedProduct.specs.map((spec: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.applications.map((app: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <Button onClick={() => setSelectedProduct(null)} className="w-full">
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Schneider Partnership */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #0f1a2b 100%)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Award className="w-20 h-20 text-accent-green mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Schneider Electric System Integrator
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                As an authorized Schneider Electric partner, we deliver cutting-edge automation solutions with guaranteed quality and performance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0" />
                  <span className="text-lg text-white">Certified technical team</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0" />
                  <span className="text-lg text-white">Genuine Schneider components</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0" />
                  <span className="text-lg text-white">Complete system design & integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0" />
                  <span className="text-lg text-white">Comprehensive after-sales support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0" />
                  <span className="text-lg text-white">Training and documentation</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-accent-green mb-2">✓</div>
                <p className="font-semibold text-white">PLC Programming</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-accent-green mb-2">✓</div>
                <p className="font-semibold text-white">SCADA Development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-accent-green mb-2">✓</div>
                <p className="font-semibold text-white">HMI Configuration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-accent-green mb-2">✓</div>
                <p className="font-semibold text-white">Network Setup</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-accent-green mb-2">✓</div>
                <p className="font-semibold text-white">Commissioning</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-accent-green mb-2">✓</div>
                <p className="font-semibold text-white">Training</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-12">
              Every product undergoes rigorous testing and quality checks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-primary text-white rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">ISO</div>
              <div className="text-sm opacity-90">Certified Manufacturing</div>
            </div>
            <div className="bg-gradient-primary text-white rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">✓</div>
              <div className="text-sm opacity-90">International Standards Compliance</div>
            </div>
            <div className="bg-gradient-primary text-white rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">✓</div>
              <div className="text-sm opacity-90">Comprehensive Testing Facilities</div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}