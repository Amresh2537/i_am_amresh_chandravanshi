'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Linkedin, ArrowDown, Zap, TrendingUp, Users } from 'lucide-react'

const Hero = () => {
  const contactInfo = [
    { icon: Phone, text: '6392838207', href: 'tel:6392838207' },
    { icon: Mail, text: 'amresh2537kumar@gmail.com', href: 'mailto:amresh2537kumar@gmail.com' },
    { icon: MapPin, text: 'Faridabad, Haryana' },
    { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/amresh-kumar-chandravanshi-a21b51141/' },
  ]

  const businessImpact = [
    { icon: Zap, text: 'Reduce Manual Work by 70%' },
    { icon: TrendingUp, text: 'Increase Efficiency by 3x' },
    { icon: Users, text: 'Eliminate Human Errors' }
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden px-4 py-20"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left space-y-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Amresh Kumar
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Chandravanshi
            </span>
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl text-blue-300 font-semibold mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Business Automation Leader
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transforming manual processes into automated systems. Founder at{' '}
            <span className="text-cyan-400 font-semibold">Infotech Brains</span> - we eliminate 
            repetitive tasks, reduce human effort by 70%, and boost efficiency 3x through smart technology.
          </motion.p>

          {/* Business Impact Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {businessImpact.map((impact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <impact.icon size={24} className="text-cyan-400 mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-300 block leading-tight">{impact.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info Compact */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
              >
                <item.icon size={16} className="text-cyan-400" />
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-300 hover:text-cyan-400 transition-colors truncate max-w-[150px]"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="text-xs sm:text-sm text-gray-300 truncate max-w-[150px]">{item.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="#solutions"
              className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all text-base font-semibold hover:scale-105"
            >
              <Zap className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              Automate Your Business
            </a>

            <a
              href="#case-studies"
              className="flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all text-base font-semibold hover:scale-105"
            >
              See Success Stories
            </a>
          </motion.div>
        </div>

        {/* Right Side - Professional Image Presentation */}
        <motion.div
          className="relative flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Hexagon container */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            {/* Rotating border effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-xl opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            {/* Hexagonal clip path image */}
            <motion.div
              className="absolute inset-4 overflow-hidden rounded-full border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            >
              {/* Placeholder for your image - replace the src with your actual image */}
              <img
                src="https://i.ibb.co/tpN2fX7R/amresh.jpg"
                alt="Amresh Kumar Chandravanshi"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </motion.div>

            {/* Floating tech icons */}
            {[
              { icon: Zap, position: 'top-0 right-0', delay: 0 },
              { icon: TrendingUp, position: 'bottom-0 left-0', delay: 1 },
              { icon: Users, position: 'top-0 left-0', delay: 2 }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`absolute ${item.position} bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-full shadow-lg`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
              >
                <item.icon className="text-white" size={20} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDown size={28} />
      </motion.div>
    </section>
  )
}

export default Hero