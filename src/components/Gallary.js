'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  {
    src: "/images/gallery/img-06.jpeg",
    alt: "Dashboard sample",
    orientation: "horizontal",
  },
  {
    src: "/images/gallery/img-07.jpeg",
    alt: "Google Sheet automation",
    orientation: "horizontal",
  },
  {
    src: "/images/gallery/img-08.jpeg",
    alt: "Looker Studio visualization",
    orientation: "horizontal",
  },
  {
    src: "/images/gallery/img-09.jpeg",
    alt: "Process management",
    orientation: "horizontal",
  },
  {
    src: "/images/gallery/img-10.jpeg",
    alt: "App Script automation",
    orientation: "horizontal",
  },
  {
    src: "/images/gallery/img-11.jpeg",
    alt: "App Script automation",
    orientation: "horizontal",
  },
  {
    src: "/images/gallery/img-02.jpg",
    alt: "App Script automation",
    orientation: "horizontal",
  },
]

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
