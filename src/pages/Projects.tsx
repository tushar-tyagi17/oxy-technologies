import { motion } from 'framer-motion';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Oil & Gas', 'Healthcare', 'Cement', 'Infrastructure'];

  const projects = [
    {
      title: 'HPCL Refinery Automation',
      category: 'Oil & Gas',
      scope: 'Complete PLC & SCADA System',
      value: '₹2.5 Cr',
      location: 'Mumbai, Maharashtra',
      image: 'oil-gas',
    },
    {
      title: 'Multi-Specialty Hospital',
      category: 'Healthcare',
      scope: 'Electrical Panels & UPS',
      value: '₹80 Lakhs',
      location: 'Delhi NCR',
      image: 'healthcare',
    },
    {
      title: 'Cement Plant Expansion',
      category: 'Cement',
      scope: 'MCC & VFD Panels',
      value: '₹1.8 Cr',
      location: 'Rajasthan',
      image: 'cement',
    },
    {
      title: 'IOCL Pipeline Project',
      category: 'Oil & Gas',
      scope: 'Turnkey Electrical Solutions',
      value: '₹3.2 Cr',
      location: 'Gujarat',
      image: 'oil-gas',
    },
    {
      title: 'Metro Station Electrification',
      category: 'Infrastructure',
      scope: 'Power Distribution Panels',
      value: '₹1.5 Cr',
      location: 'Bengaluru',
      image: 'infrastructure',
    },
    {
      title: 'Hospital Complex',
      category: 'Healthcare',
      scope: 'Complete Electrical Package',
      value: '₹1.2 Cr',
      location: 'Pune, Maharashtra',
      image: 'healthcare',
    },
  ];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

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
              Our Projects
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              500+ successful projects delivered across India
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-secondary-200">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-primary-600 text-white shadow-industrial'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-secondary-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group">
                <div className="w-full h-48 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-white text-center p-6">
                    <div className="text-4xl font-bold mb-2">{project.category}</div>
                    <div className="text-sm opacity-75">Project Image Placeholder</div>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-accent-green/20 text-accent-green text-sm font-semibold rounded-lg mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {project.title}
                </h3>
                <ul className="space-y-2 text-sm text-secondary-600">
                  <li><strong>Scope:</strong> {project.scope}</li>
                  <li><strong>Value:</strong> {project.value}</li>
                  <li><strong>Location:</strong> {project.location}</li>
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
