'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Time Equipment Company',
      location: 'Faridabad',
      role: 'Data Analyst',
      period: '2021 – Present',
      industry: 'Equipment Manufacturing & Service',
      responsibilities: [
        'Developed dashboards and custom Google Sheets tools to monitor equipment performance',
        'Automated reporting using Apps Script and integrated client data pipelines',
        'Created predictive maintenance trackers and task-based notification systems'
      ]
    },
    {
      company: 'D Table (Freelance Company)',
      location: 'Remote',
      role: 'Automation & Data Analytics Consultant',
      period: '2023 – 2024',
      industry: 'Consulting',
      responsibilities: [
        'Designed business automation systems using Google Workspace tools',
        'Built dashboards, checklists, CRMs, and lead follow-up tools for various clients',
        'Provided consultation and implementation for team performance tracking and digital process setup'
      ]
    },
    {
      company: 'CREATIVE ELECTRONIX',
      location: 'NIT Faridabad',
      role: 'Data Management Executive',
      period: 'September 2020 – Feb 2021',
      industry: 'Electronics Manufacturing',
      responsibilities: [
        'Designed and managed MIS, FMS, and PMS systems',
        'Developed Advance Checklist and reporting tools for production and team tracking',
        'Created automation solutions to reduce manual reporting tasks'
      ]
    },
    {
      company: 'Sakshem Exim Pvt. Ltd.',
      location: 'Safiabad, Haryana',
      role: 'Operations Assistant',
      period: 'June 2019 – August 2020',
      industry: 'Import & Export',
      responsibilities: [
        'Managed product booking in e-commerce and RTO operations',
        'Built MIS reports for product tracking',
        'Coordinated between departments for process improvements'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
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
            My journey through diverse industries, solving problems with data and automation
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
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
              {/* Timeline indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {exp.company}
                    </h3>
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
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

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                  Key Responsibilities:
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start space-x-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 md:text-base text-sm">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience