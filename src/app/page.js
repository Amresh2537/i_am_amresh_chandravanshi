'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pacifico, Poppins } from 'next/font/google'
import dynamic from 'next/dynamic'

// Dynamically import components to prevent SSR issues
const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Education = dynamic(() => import('@/components/Education'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const Gallery = dynamic(() => import('@/components/Gallary'), { ssr: false })

// Load custom fonts
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-poppins'
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [loadingMessage, setLoadingMessage] = useState("Loading innovations from cloud to code...")
  const [showCurtainAnimation, setShowCurtainAnimation] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Ensure component is mounted on client
    setIsMounted(true)
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + (2 + Math.random() * 4) // Slower increment for 5 sec duration
      })
    }, 100) // More frequent updates for smoother progress

    // Change message at 50% progress
    const messageTimer = setTimeout(() => {
      setLoadingMessage("Good things take time... almost there!")
    }, 2500) // Adjusted for 5 sec total duration

    // Start curtain animation after loading completes
    const timer = setTimeout(() => {
      setShowCurtainAnimation(true)
      // Remove preloader completely after curtain animation
      setTimeout(() => {
        setIsLoading(false)
      }, 1000) // Duration of curtain animation
    }, 5000) // Total duration of 5 seconds

    return () => {
      clearInterval(interval)
      clearTimeout(messageTimer)
      clearTimeout(timer)
    }
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className={`${pacifico.variable} ${poppins.variable} min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900`}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${pacifico.variable} ${poppins.variable}`}>
      {/* Main content - always rendered but initially hidden */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="min-h-screen font-poppins"
      >
        <Header />
        <div className="pt-[2px]"> {/* Added padding-top of 20px */}
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      </motion.main>

      <AnimatePresence>
        {isLoading && (
          <>
            {/* Curtain Overlay */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: showCurtainAnimation ? "-100%" : 0 }}
              exit={{ y: "-100%" }}
              transition={{ 
                duration: 1, 
                ease: [0.76, 0, 0.24, 1],
                delay: 1 // Start curtain animation after 4 seconds (total 5s with 1s duration)
              }}
              className="fixed inset-0 z-50 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900"
            />
            
            {/* Loading Content */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: showCurtainAnimation ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-md px-8">
                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-700 rounded-full mb-8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 2 }} // Match total duration of 5 seconds
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                  />
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </div>
                
                {/* Loading Animation and Text */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="flex flex-col items-center justify-center mb-8"
                >
                  {/* Spinning Loader */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1.5, repeat: Infinity }
                    }}
                    className="w-20 h-20 rounded-full border-4 border-cyan-400 border-t-transparent mb-6 relative"
                  >
                    {/* Inner spinning element */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 rounded-full border-2 border-purple-400 border-b-transparent"
                    />
                  </motion.div>
                  
                  {/* Welcome Text */}
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="font-pacifico text-4xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400"
                  >
                    Welcome
                  </motion.span>
                  
                  {/* Loading Message */}
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.9 }}
                    transition={{ delay: 0.6 }}
                    className="font-poppins text-center text-gray-200 text-lg font-light mb-4"
                  >
                    {loadingMessage}
                  </motion.p>
                  
                  {/* Progress Percentage */}
                  <motion.p
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    transition={{ delay: 0.9 }}
                    className="font-poppins text-cyan-300 text-sm font-medium"
                  >
                   {Math.round(Math.min(progress, 100))}%


                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}