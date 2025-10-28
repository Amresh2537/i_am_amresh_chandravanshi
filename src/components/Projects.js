'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, MessageCircle, Database, Cloud, Settings, Users } from 'lucide-react'

const Projects = () => {
  const featuredProjects = [
    {
      title: 'SyncWaba - WhatsApp Business API Platform',
      description: 'Complete WhatsApp Business API solution for customer communication, automated messaging, and lead management with real-time analytics.',
      icon: MessageCircle,
      technologies: ['Next.js', 'Node.js', 'WhatsApp Business API', 'MongoDB', 'Redis'],
      features: [
        'Bulk messaging & automated responses',
        'CRM integration & lead management',
        'Real-time analytics dashboard',
        'Multi-user team collaboration'
      ],
      company: 'Flourtech India',
      link: 'http://syncwaba.com/',
      github: '#'
    },
    {
      title: 'Enterprise ERP Platform',
      description: 'Comprehensive ERP system for manufacturing and service companies with inventory, accounting, HR, and production modules.',
      icon: Database,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      features: [
        'Inventory & supply chain management',
        'Financial accounting & reporting',
        'Production planning & tracking',
        'Multi-company support'
      ],
      company: 'Multiple Clients',
      link: '#',
      github: '#'
    },
    {
      title: 'Customer SaaS Application',
      description: 'Cloud-based SaaS platform for customer relationship management with automated workflows and custom reporting.',
      icon: Cloud,
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Stripe'],
      features: [
        'Customizable dashboard & reports',
        'Automated email & notification system',
        'Payment integration & billing',
        'Role-based access control'
      ],
      company: 'Creative Electronix',
      link: '#',
      github: '#'
    },
    {
      title: 'Google Workspace Automation Suite',
      description: 'Advanced automation tools for Google Workspace including custom apps, data processing, and workflow automation.',
      icon: Settings,
      technologies: ['Google Apps Script', 'Google Workspace API', 'JavaScript', 'HTML/CSS'],
      features: [
        'Automated report generation',
        'Custom Google Sheets functions',
        'Email automation & templates',
        'Data synchronization tools'
      ],
      company: 'Multiple Clients',
      link: '#',
      github: '#'
    },
    {
      title: 'Production Management System',
      description: 'Real-time production tracking and management system with equipment monitoring and predictive maintenance.',
      icon: Users,
      technologies: ['React', 'Python', 'SQLite', 'WebSockets', 'Chart.js'],
      features: [
        'Real-time production monitoring',
        'Equipment performance tracking',
        'Predictive maintenance alerts',
        'Quality control management'
      ],
      company: 'Time Equipment Pvt Ltd',
      link: '#',
      github: '#'
    },
    {
      title: 'E-commerce Automation Platform',
      description: 'Complete e-commerce management system with order processing, inventory sync, and customer communication.',
      icon: ExternalLink,
      technologies: ['Next.js', 'MongoDB', 'REST API', 'OAuth', 'Cloud Functions'],
      features: [
        'Multi-platform order management',
        'Automated inventory synchronization',
        'Customer communication tools',
        'Sales analytics & reporting'
      ],
      company: 'Parnami Sales Corporation',
      link: '#',
      github: '#'
    }
  ]

  const companyProjects = [
    {
      company: 'Flourtech India',
      projects: ['SyncWaba WhatsApp Platform', 'Inventory Management System', 'Sales Automation Tools']
    },
    {
      company: 'Creative Electronix',
      projects: ['SaaS CRM Platform', 'Production Monitoring System', 'Quality Control Dashboard']
    },
    {
      company: 'Parnami Sales Corporation',
      projects: ['E-commerce Management System', 'Order Processing Automation', 'Customer Portal']
    },
    {
      company: 'Paras Offset Pvt',
      projects: ['Print Management System', 'Order Tracking Platform', 'Client Communication Tools']
    },
    {
      company: 'AEC',
      projects: ['Project Management Dashboard', 'Client Collaboration Platform', 'Document Management System']
    },
    {
      company: 'Mahaveer Pvt Ltd',
      projects: ['Supply Chain Management', 'Vendor Portal', 'Logistics Tracking System']
    },
    {
      company: 'Time Equipment Pvt Ltd',
      projects: ['Equipment Management System', 'Service Tracking Platform', 'Customer Support Portal']
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            Projects & Solutions
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade applications and automation solutions delivered for leading companies
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-100 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center shadow-sm">
                  <project.icon size={24} className="text-white" />
                </div>
                <div className="flex space-x-2">
                  {project.link && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} className="text-gray-600" />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Github size={16} className="text-gray-600" />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                  {project.company}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="space-y-1.5">
                  {project.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-2"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Projects by Company</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyProjects.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-gray-200"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{company.company}</h4>
                <ul className="space-y-2">
                  {company.projects.map((project, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{project}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects