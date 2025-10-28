'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, MessageCircle, Settings, Smartphone } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'Next.js', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST APIs', level: 90 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Google Cloud', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Microservices', level: 75 },
        { name: 'Serverless', level: 80 }
      ]
    },
    {
      icon: MessageCircle,
      title: 'API Integration',
      skills: [
        { name: 'WhatsApp Business API', level: 90 },
        { name: 'Google Workspace API', level: 85 },
        { name: 'Payment Gateways', level: 80 },
        { name: 'OAuth', level: 85 },
        { name: 'Webhooks', level: 90 }
      ]
    },
    {
      icon: Settings,
      title: 'Automation Tools',
      skills: [
        { name: 'Google Apps Script', level: 95 },
        { name: 'Zapier', level: 80 },
        { name: 'Make.com', level: 75 },
        { name: 'Custom Bots', level: 85 },
        { name: 'Workflow Automation', level: 90 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile & PWA',
      skills: [
        { name: 'PWA Development', level: 80 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Mobile Optimization', level: 85 },
        { name: 'Cross-platform', level: 80 },
        { name: 'Performance', level: 85 }
      ]
    }
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
            Technical Skills
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
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <category.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills