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
    <section id="education" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <GraduationCap size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {edu.type}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-1">{edu.institution}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{edu.location}</span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
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
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>

                      <div className="space-y-6 mb-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                      {cert.type}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-1">{cert.issuer}</p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Project */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Hospital Management System</h4>
              <p className="text-gray-600 mb-2">
                <strong>Industry:</strong> FMCG Import & Export
              </p>
              <p className="text-sm text-gray-600 mb-3">Key Responsibilities:</p>
              <ul className="space-y-1">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Managed product booking in e-commerce and RTO operations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Built MIS reports for product tracking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Coordinated between departments for process improvements</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Training & Teaching */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <BookOpen size={20} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Training & Teaching</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {training.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 card-hover"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</h5>
                  <ul className="space-y-2">
                    {item.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{topic}</span>
                      </li>
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
