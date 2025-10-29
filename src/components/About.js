'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Users, TrendingUp, Building, Zap, Globe } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Replace manual work with intelligent systems that work 24/7'
    },
    {
      icon: Building,
      title: 'Business First Approach',
      description: 'Solutions focused on ROI, efficiency, and growth - not just technology'
    },
    {
      icon: Users,
      title: 'Team Empowerment',
      description: 'Free your team from repetitive tasks to focus on strategic work'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Systems that grow with your business and adapt to changing needs'
    }
  ]

  return (
    <section id="about" className="bg-gradient-to-br from-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Your Partner in Business Transformation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Founder & Automation Leader at Infotech Brains
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I dont just write code - I solve business problems. For the past 5+ years, 
              I have been helping companies across manufacturing, electronics, and service 
              industries replace their manual processes with smart, automated systems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <strong>Infotech Brains</strong>, we specialize in understanding your unique 
              business challenges and building custom solutions that eliminate repetitive work, 
              reduce errors, and scale your operations without increasing headcount.
            </p>

            <div className="bg-green-50/40 backdrop-blur-md p-6 rounded-2xl border border-green-100 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h4>
              <p className="text-gray-700">
                To empower business owners with technology that works for them - 
                automating the routine so you can focus on growth, innovation, and 
                serving your customers better.
              </p>
            </div>
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/50 backdrop-blur-lg border border-green-100 shadow-md transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-600 to-blue-600 rounded-lg mb-4 shadow-md">
                  <item.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '70%', text: 'Reduction in Manual Work' },
            { number: '3x', text: 'Efficiency Improvement' },
            { number: '50+', text: 'Processes Automated' },
            { number: '95%', text: 'Error Reduction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm mt-2">{stat.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About