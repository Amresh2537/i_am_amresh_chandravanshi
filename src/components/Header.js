'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl shadow-cyan-500/10 border-b border-cyan-500/20' 
          : 'bg-slate-900/50 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 group"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="relative"
            >
              <Sparkles className="text-cyan-400 w-6 h-6" />
              <motion.div
                className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Amresh Kumar
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 text-sm lg:text-base font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-cyan-400" />
            ) : (
              <Menu size={24} className="text-cyan-400" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="md:hidden bg-slate-800/95 backdrop-blur-lg rounded-2xl shadow-2xl mt-2 mb-4 overflow-hidden border border-cyan-400/20"
          >
            <div className="py-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="block px-6 py-3 text-base text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-200 border-l-4 border-transparent hover:border-cyan-400"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 300,
                    delay: 0.05 * index
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.98 }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 300,
                  delay: 0.05 * navItems.length
                }}
                className="block mx-6 mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-center shadow-lg shadow-cyan-500/30"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header