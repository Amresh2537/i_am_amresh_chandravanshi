'use client'

import { motion } from 'framer-motion'
import { Factory, ShoppingCart, MessageCircle, Database, ArrowRight } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Manufacturing Company",
      problem: "Manual production tracking causing delays and errors",
      solution: "Real-time production monitoring system",
      results: [
        "50% faster reporting",
        "Zero data entry errors",
        "Real-time visibility"
      ],
      icon: Factory
    },
    {
      company: "E-commerce Business",
      problem: "Manual order processing and customer communication",
      solution: "Automated order management with WhatsApp integration",
      results: [
        "3x faster order processing",
        "24/7 customer support",
        "95% automated operations"
      ],
      icon: ShoppingCart
    },
    {
      company: "Service Company",
      problem: "Scattered customer data and manual follow-ups",
      solution: "Centralized CRM with automated messaging",
      results: [
        "70% time saved on follow-ups",
        "40% more conversions",
        "Happy customers, relaxed team"
      ],
      icon: MessageCircle
    },
    {
      company: "Distribution Company",
      problem: "Inventory mismanagement and stock issues",
      solution: "Smart inventory management system",
      results: [
        "Zero stock-out situations",
        "Automated reordering",
        "Real-time stock visibility"
      ],
      icon: Database
    }
  ]

  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Real Business Transformations
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours move from manual chaos to automated efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-100 transition-all"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                  <study.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{study.company}</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    The Problem
                  </h4>
                  <p className="text-red-700 text-sm">{study.problem}</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Our Solution
                  </h4>
                  <p className="text-green-700 text-sm">{study.solution}</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Business Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-blue-700 text-sm">
                        <ArrowRight size={16} className="text-blue-600 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can automate your manual processes and boost your efficiency
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Start Your Automation Journey
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies