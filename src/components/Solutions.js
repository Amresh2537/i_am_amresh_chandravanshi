'use client'

import { motion } from 'framer-motion'
import { Target, Clock, Users, TrendingUp, Zap, BarChart3, MessageCircle, Database } from 'lucide-react'

const Solutions = () => {
  const problems = [
    {
      icon: Clock,
      problem: "Time-Consuming Manual Processes",
      description: "Employees spending hours on repetitive data entry and reporting",
      solution: "Automated workflow systems that complete tasks in minutes",
      result: "Saves 15-20 hours per week per employee"
    },
    {
      icon: Users,
      problem: "Human Error in Critical Operations",
      description: "Mistakes in order processing, inventory management, and customer data",
      solution: "Error-proof automation with validation checks",
      result: "Reduces errors by 95% and improves accuracy"
    },
    {
      icon: TrendingUp,
      problem: "Inefficient Sales & Marketing",
      description: "Manual lead follow-ups, missed opportunities, inconsistent communication",
      solution: "Automated CRM and WhatsApp messaging systems",
      result: "3x increase in lead conversion rates"
    },
    {
      icon: Database,
      problem: "Poor Data Visibility",
      description: "Scattered data across multiple platforms, no real-time insights",
      solution: "Centralized dashboards with live reporting",
      result: "Instant decision-making with accurate data"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Understand Your Pain Points",
      description: "Deep dive into your current processes to identify bottlenecks and inefficiencies",
      icon: Target
    },
    {
      step: "02",
      title: "Design Custom Solution",
      description: "Create tailored automation strategy that fits your specific business needs",
      icon: Zap
    },
    {
      step: "03",
      title: "Develop & Implement",
      description: "Build and deploy the automation system with minimal disruption to your operations",
      icon: BarChart3
    },
    {
      step: "04",
      title: "Train & Support",
      description: "Ensure your team can effectively use the new system with ongoing support",
      icon: Users
    }
  ]

  return (
    <section id="solutions" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            From Manual Chaos to Automated Efficiency
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I solve the exact problems that drain your time, money, and team morale
          </p>
        </motion.div>

        {/* Problems & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-100 transition-all"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={24} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.problem}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap size={16} className="text-green-600" />
                  <span className="text-sm font-semibold text-green-800">Our Solution</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">{item.solution}</p>
                <div className="bg-white rounded px-3 py-2 border border-green-300">
                  <span className="text-green-700 font-semibold text-sm">✓ {item.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">How We Transform Your Business</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 text-center border border-green-100 hover:border-green-300 transition-all"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions