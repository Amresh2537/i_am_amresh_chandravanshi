'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cog, BarChart3, Globe, Smartphone } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Development',
      skills: [
        'Google Apps Script',
        'Next.js & React',
        'JavaScript',
        'HTML & CSS',
        'Tailwind CSS',
        'Git & GitHub'
      ]
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      skills: [
        'Google Sheets Advanced',
        'Data Analysis',
        'MIS Reporting',
        'Looker Studio',
        'Statistical Analysis',
        'Predictive Analytics'
      ]
    },
    {
      icon: Cog,
      title: 'Automation',
      skills: [
        'Business Process Automation',
        'Google Workspace Integration',
        'Zapier & Make.com',
        'Workflow Optimization',
        'Task Automation',
        'Email Automation'
      ]
    },
    {
      icon: BarChart3,
      title: 'Business Tools',
      skills: [
        'CRM Development',
        'Dashboard Creation',
        'Inventory Management',
        'Lead Management',
        'Performance Tracking',
        'Report Generation'
      ]
    },
    {
      icon: Globe,
      title: 'Platforms',
      skills: [
        'Google Workspace',
        'AppSheet',
        'Telegram Bot API',
        'WhatsApp Business API',
        'Tally Integration',
        'Chrome Extensions'
      ]
    },
    {
      icon: Smartphone,
      title: 'Additional',
      skills: [
        'YouTube Content Creation',
        'Digital Marketing',
        'Client Communication',
        'Training & Teaching',
        'Project Management',
        'Problem Solving'
      ]
    }
  ]

  const techStack = [
    'Google Apps Script', 'Next.js', 'React', 'JavaScript', 'Tailwind CSS',
    'Google Sheets', 'Looker Studio', 'AppSheet', 'Zapier', 'Make.com',
    'HTML', 'CSS', 'Git', 'GitHub', 'VS Code', 'Chrome DevTools'
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 card-hover"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <category.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tech Stack & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills