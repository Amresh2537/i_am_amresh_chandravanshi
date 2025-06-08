'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'United Institute of Management',
      location: 'Prayagraj',
      period: '2017 – 2019',
      type: 'Degree'
    },
    {
      degree: 'Senior Secondary (ICSE)',
      institution: 'D.C. Lewis Memorial School',
      location: 'ICSE Board',
      period: '2016',
      type: 'Secondary'
    },
    {
      degree: 'Higher Secondary (ISE)',
      institution: 'D.C. Lewis Memorial School',
      location: 'ISE Board',
      period: '2014',
      type: 'Secondary'
    }
  ]

  const certifications = [
    {
      title: 'Data Science Certification',
      issuer: 'Top Mentor',
      year: '2023',
      type: 'Professional'
    },
    {
      title: 'Employability Skills Training',
      issuer: 'Mahindra Pride Classrooms',
      year: '2023',
      type: 'Skills'
    },
    {
      title: 'Summer Internship',
      issuer: 'SKI Carbon Black (India) Pvt. Ltd.',
      year: '2019',
      type: 'Internship'
    }
  ]

  const training = [
    {
      title: 'Excel Training & Teaching',
      description: 'Conducting comprehensive Excel classes covering formulas, functions, data management, and advanced analytics',
      topics: [
        'Formulas, Functions, Formatting',
        'Data Management, Charts, Pivot Tables',
        'Advanced Functions (Financial, Statistical)',
        'Collaboration, Security, and Tips'
      ]
    },
    {
      title: 'YouTube Content Creation',
      description: 'Creating educational content in Hinglish covering automation tips and cooking recipes',
      topics: [
        'Automation Tips & Tutorials',
        'Google Workspace Tricks',
        'Cooking Recipes (Dal Pakode, Egg Curry, etc.)',
        'Technical How-to Guides'
      ]
    }
  ]

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            My academic background and professional certifications that shaped my expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6 md:mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                    <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      {edu.type}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2 text-sm md:text-base">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                    <span>{edu.location}</span>
                    <div className="flex items-center space-x-1.5">
                      <Calendar size={14} className="text-blue-500" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6 md:mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                    <span className="bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      {cert.type}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2 text-sm md:text-base">{cert.issuer}</p>
                  <div className="flex items-center space-x-1.5 text-sm text-gray-500">
                    <Calendar size={14} className="text-purple-500" />
                    <span>{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Project */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Hospital Management System</h4>
              <p className="text-gray-600 mb-3 text-sm md:text-base">
                <strong className="font-medium">Industry:</strong> FMCG Import & Export
              </p>
              <p className="text-sm font-medium text-gray-700 mb-3">Key Responsibilities:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Managed product booking in e-commerce and RTO operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Built MIS reports for product tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Coordinated between departments for process improvements</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Training & Teaching */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
              <BookOpen size={20} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Training & Teaching</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {training.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{item.description}</p>
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</h5>
                  <ul className="space-y-2.5">
                    {item.topics.map((topic, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{topic}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education