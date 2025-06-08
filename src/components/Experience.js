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
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.company}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <Briefcase size={16} />
                      <span className="font-semibold">{exp.role}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-600 mb-2">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.industry}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
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
