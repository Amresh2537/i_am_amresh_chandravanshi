'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Linkedin, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const contactInfo = [
    { icon: Phone, text: '6392838207', href: 'tel:6392838207' },
    { icon: Mail, text: 'amresh2537kumar@gmail.com', href: 'mailto:amresh2537kumar@gmail.com' },
    { icon: MapPin, text: 'Sector 3, Chawalaa Colony, Faridabad' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://linkedin.com/in/amresh-kumar-chandravanshi-a21b51141' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 text-blue-900 relative overflow-hidden px-4"
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full shadow-md"
            style={{
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Amresh Kumar
        </motion.h1>

        <motion.div
          className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium space-y-1 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>Freelancer | Business Automation Expert</p>
          <p>Data Analyst | Google Workspace Developer</p>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I help businesses automate workflows and gain insights through data. Let’s transform your manual tasks into
          efficient, intelligent systems — saving time and scaling impact.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 bg-white/30 backdrop-blur-md rounded-xl px-4 py-3 shadow-sm transition-all duration-300"
            >
              <item.icon size={20} className="text-blue-700" />
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-800 hover:underline truncate"
                >
                  {item.text}
                </a>
              ) : (
                <span className="text-sm font-medium text-blue-800 truncate">{item.text}</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a
            href="/Amresh_Kumar_Resume.pdf"
            download
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </a>

          <a
            href="#contact"
            className="flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-blue-600"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
