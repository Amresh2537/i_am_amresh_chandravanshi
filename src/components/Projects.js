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
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            Projects & Applications
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the key projects and applications I have developed to help businesses 
            automate processes and improve efficiency.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg p-5 md:p-6 border border-gray-100 transition-all"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 shadow-sm">
                <project.icon size={20} className="text-white" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">{project.description}</p>
              
              {/* Technologies */}
              <div className="mb-3 md:mb-4">
                <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-2 py-0.5 md:py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div>
                <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">Key Features:</h4>
                <ul className="space-y-1 md:space-y-1.5">
                  {project.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-2"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-xs md:text-sm text-gray-600">{feature}</span>
                    </motion.li>
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
          className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 md:p-8 border border-gray-100 transition-all"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Additional Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 md:p-4 rounded-lg flex items-center gap-2 md:gap-3 border border-gray-200 hover:border-blue-300 transition-all"
              >
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></div>
                <span className="text-sm md:text-base text-gray-700 font-medium">{project}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects