'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, Code, Database, Cloud } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Time Equipment Pvt Ltd',
      location: 'Faridabad',
      role: 'Full-Stack Developer & Automation Specialist',
      period: '2021 – Present',
      industry: 'Equipment Manufacturing & Service',
      icon: Code,
      achievements: [
        'Developed comprehensive equipment management system with real-time tracking',
        'Built predictive maintenance algorithms reducing downtime by 40%',
        'Created customer support portal with automated ticket management',
        'Implemented data analytics dashboard for equipment performance monitoring'
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Google Apps Script']
    },
    {
      company: 'Flourtech India',
      location: 'Remote',
      role: 'Lead Developer - SyncWaba Platform',
      period: '2022 – 2023',
      industry: 'Technology Solutions',
      icon: Cloud,
      achievements: [
        'Led development of SyncWaba WhatsApp Business API platform',
        'Architected scalable microservices handling 10K+ daily messages',
        'Implemented real-time analytics and reporting dashboard',
        'Built multi-tenant architecture supporting multiple businesses'
      ],
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'WhatsApp Business API']
    },
    {
      company: 'Creative Electronix',
      location: 'NIT Faridabad',
      role: 'Software Development Lead',
      period: '2020 – 2021',
      industry: 'Electronics Manufacturing',
      icon: Database,
      achievements: [
        'Developed custom SaaS CRM platform for client management',
        'Built production monitoring system with real-time analytics',
        'Created quality control dashboard reducing defects by 25%',
        'Automated inventory management and supply chain tracking'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'Django', 'REST APIs']
    },
    {
      company: 'Multiple Clients (Freelance)',
      location: 'Remote',
      role: 'Full-Stack Developer Consultant',
      period: '2019 – Present',
      industry: 'Various Industries',
      icon: Briefcase,
      achievements: [
        'Delivered ERP solutions for Parnami Sales Corporation',
        'Built e-commerce platforms for Paras Offset Pvt',
        'Developed project management tools for AEC',
        'Created supply chain systems for Mahaveer Pvt Ltd'
      ],
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Stripe', 'Google Cloud']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Leading development teams and delivering enterprise solutions across diverse industries
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <exp.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {exp.company}
                      </h3>
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.industry}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 mb-3">
                      <div className="flex items-center space-x-1.5">
                        <Briefcase size={16} className="text-blue-500" />
                        <span className="font-medium">{exp.role}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin size={16} className="text-blue-500" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-blue-600">
                        <Calendar size={16} className="text-blue-500" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                  Key Achievements:
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm md:text-base">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience