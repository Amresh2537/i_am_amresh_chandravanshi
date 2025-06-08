'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Focused on transforming manual processes into efficient digital workflows'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new tech tools and solutions for business growth'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Dedicated to understanding and solving unique business challenges'
    },
    {
      icon: TrendingUp,
      title: 'Results-Oriented',
      description: 'Committed to delivering measurable improvements in efficiency'
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
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
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
              Professional Summary
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dynamic and detail-oriented professional with expertise in business automation, 
              data analysis, and custom tool development using Google Workspace, Google Apps Script, 
              and Next.js.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I design and implement tools and systems that transform manual tasks into streamlined, 
              digital workflows — empowering teams to monitor, track, and report better. My passion 
              lies in helping businesses save time, improve efficiency, and scale operations by 
              leveraging smart technology.
            </p>

            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Current Focus</h4>
              <p className="text-gray-700">
                Working with business owners to create automation systems, optimize team efficiency, 
                and develop custom apps for tracking, control, and reporting — all powered by 
                Google Workspace and custom web solutions.
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
                className="p-6 rounded-2xl bg-white/50 backdrop-blur-lg border border-blue-100 shadow-md transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 shadow-md">
                  <item.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
