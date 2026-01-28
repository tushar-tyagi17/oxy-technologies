import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { PRODUCTS } from '@/constants';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

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
              Products & Manufacturing
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Premium quality electrical control panels and systems manufactured to international standards
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Card key={product.id} className="group cursor-pointer" hover={true}>
                <div className="mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">
                    <div className="text-6xl font-bold text-primary-600/20">
                      {product.name.split(' ')[0]}
                    </div>
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
                  className="w-full"
                >
                  View Details
                </Button>
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

      {/* Quality Assurance */}
      <section className="section-padding bg-gradient-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Quality Assurance
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Every product undergoes rigorous testing and quality checks
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'ISO Certified Manufacturing',
                  'International Standards Compliance',
                  'Comprehensive Testing Facilities',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <CheckCircle className="w-12 h-12 text-accent-green mx-auto mb-4" />
                    <p className="text-lg font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
