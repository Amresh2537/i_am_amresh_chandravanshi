'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Database, Bot, Mail } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'WhatsApp Automation & Customer Enquiry System',
      description: 'Automated customer inquiry responses and lead management system using WhatsApp Business API integration.',
      icon: Bot,
      technologies: ['Google Apps Script', 'WhatsApp API', 'Google Sheets'],
      features: [
        'Automated customer responses',
        'Lead qualification system',
        'Integration with CRM',
        'Real-time notifications'
      ]
    },
    {
      title: 'Production Monitoring & Flow Management System (FMS)',
      description: 'Comprehensive system for tracking production workflows, monitoring equipment performance, and generating automated reports.',
      icon: Database,
      technologies: ['Google Apps Script', 'Google Sheets', 'Looker Studio'],
      features: [
        'Real-time production tracking',
        'Equipment performance monitoring',
        'Automated reporting',
        'Predictive maintenance alerts'
      ]
    },
    {
      title: 'Advanced Checklist & Delegation App',
      description: 'Task management and delegation system with automated notifications and progress tracking.',
      icon: Zap,
      technologies: ['AppSheet', 'Google Workspace', 'Apps Script'],
      features: [
        'Task assignment and tracking',
        'Automated notifications',
        'Progress monitoring',
        'Team performance analytics'
      ]
    },
    {
      title: 'Inventory Management System (IMS)',
      description: 'Complete inventory tracking solution with stock alerts, supplier management, and automated reordering.',
      icon: Database,
      technologies: ['Google Sheets', 'Apps Script', 'Tally Integration'],
      features: [
        'Stock level monitoring',
        'Automated reorder alerts',
        'Supplier management',
        'Cost analysis reports'
      ]
    },
    {
      title: 'Email Marketing Dashboard & Campaign Tools',
      description: 'Comprehensive email marketing automation with campaign tracking and analytics.',
      icon: Mail,
      technologies: ['Gmail API', 'Google Apps Script', 'HTML/CSS'],
      features: [
        'Campaign automation',
        'Performance analytics',
        'A/B testing capabilities',
        'Subscriber management'
      ]
    },
    {
      title: 'Rental Property Booking System',
      description: 'Web application for managing property rentals with booking calendar and payment integration.',
      icon: ExternalLink,
      technologies: ['Next.js', 'React', 'Google Apps Script'],
      features: [
        'Online booking system',
        'Calendar integration',
        'Payment processing',
        'Customer management'
      ]
    }
  ]

  const additionalProjects = [
    'Help Ticket Booking & Resolution Tracker',
    'Digital Marketing Analytics & Reporting',
    'Telegram Bot for Team Communication',
    'Google Sheets-based MIS Reports',
    'Order Tracking System with Status Updates',
    'Pre-Sales & After-Sales Automation Tools'
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects & Applications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the key projects and applications I have developed to help businesses 
            automate processes and improve efficiency.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 card-hover"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <project.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{project}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
