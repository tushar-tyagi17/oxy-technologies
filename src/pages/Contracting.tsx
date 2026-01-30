import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import * as Icons from 'lucide-react';

export default function Contracting() {
  const trainingPrograms = [
    {
      icon: 'BookOpen',
      title: 'Technical Training',
      description: 'Hands-on training programs for electrical and automation systems',
      topics: ['PLC Programming', 'SCADA Systems', 'Panel Design', 'VFD Applications']
    },
    {
      icon: 'GraduationCap',
      title: 'Certification Courses',
      description: 'Industry-recognized certification programs for professionals',
      topics: ['Schneider Electric Certification', 'Siemens Training', 'Allen Bradley Certification']
    },
    {
      icon: 'Users',
      title: 'Corporate Training',
      description: 'Customized training solutions for organizations and teams',
      topics: ['On-site Workshops', 'Custom Curriculum', 'Technical Seminars', 'Maintenance Training']
    },
    {
      icon: 'Monitor',
      title: 'Online Learning',
      description: 'Flexible digital learning platforms for remote education',
      topics: ['Virtual Labs', 'Video Tutorials', 'Interactive Sessions', 'Self-paced Learning']
    }
  ];

  const trainingBenefits = [
    'Industry Experienced Instructors',
    'Hands-on Practical Sessions',
    'Latest Technology Exposure',
    'Internationally Recognized Certificates',
    'Career Advancement Opportunities',
    'Flexible Learning Schedules'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url(/images/training-education.png)',
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
              Training & Education
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed">
              Empowering professionals with cutting-edge technical knowledge and practical skills
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive learning solutions for electrical and automation professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program, index) => {
              const IconComponent = Icons[program.icon as keyof typeof Icons] as any;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {program.description}
                    </p>
                    <div className="space-y-2">
                      {program.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium mr-2 mb-2"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Training Benefits */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #0f1a2b 100%)' }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Why Choose Our Training Programs?
              </h2>
              <p className="text-lg mb-8 text-white" style={{ opacity: 0.9 }}>
                Industry-leading education solutions designed for real-world application
              </p>
              <ul className="space-y-4">
                {trainingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icons.CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-white text-lg" style={{ opacity: 0.9 }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Training Approach
              </h3>
              <ul className="space-y-6">
                <li>
                  <h4 className="font-bold text-xl mb-2 text-accent-green">Hands-on Learning</h4>
                  <p className="text-white" style={{ opacity: 0.9 }}>Practical sessions with real equipment and scenarios</p>
                </li>
                <li>
                  <h4 className="font-bold text-xl mb-2 text-accent-green">Expert Instructors</h4>
                  <p className="text-white" style={{ opacity: 0.9 }}>Industry veterans with decades of experience</p>
                </li>
                <li>
                  <h4 className="font-bold text-xl mb-2 text-accent-green">Latest Technology</h4>
                  <p className="text-white" style={{ opacity: 0.9 }}>Training on cutting-edge tools and platforms</p>
                </li>
                <li>
                  <h4 className="font-bold text-xl mb-2 text-accent-green">Career Support</h4>
                  <p className="text-white" style={{ opacity: 0.9 }}>Placement assistance and professional guidance</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
