import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { LEADERSHIP } from '@/constants';

export default function Leadership() {
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
              Leadership & Team
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Experienced leadership driving excellence and innovation
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Decades of combined industry experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader, index) => (
              <Card key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {leader.role}
                </p>
                <p className="text-secondary-600">
                  {leader.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Company Culture */}
      <section className="section-padding bg-gradient-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Our Team Philosophy
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Building success through collaboration, innovation, and integrity
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Technical Excellence', desc: 'Highly skilled engineers and technicians' },
                  { title: 'Customer Focus', desc: 'Dedicated to client satisfaction' },
                  { title: 'Continuous Learning', desc: 'Regular training and skill upgrades' },
                  { title: 'Safety First', desc: 'Uncompromising commitment to workplace safety' },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-white/80">{value.desc}</p>
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
