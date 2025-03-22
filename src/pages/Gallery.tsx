import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import img1 from '../assets/gallery/1.jpeg';
import img23 from '../assets/gallery/3.jpeg';
import img2 from '../assets/gallery/4.jpeg';
import img3 from '../assets/gallery/5.jpeg';
import img4 from '../assets/gallery/6.jpeg';
import img5 from '../assets/gallery/7.jpeg';
import img6 from '../assets/gallery/8.jpeg';
import img7 from '../assets/gallery/9.jpeg';
import img8 from '../assets/gallery/10.jpeg';
import img9 from '../assets/gallery/11.jpeg';
import img10 from '../assets/gallery/12.jpeg';
import img11 from '../assets/gallery/13.jpeg';
import img12 from '../assets/gallery/14.jpeg';
import img13 from '../assets/gallery/15.jpeg';
import img14 from '../assets/gallery/16.jpeg';
import img15 from '../assets/gallery/17.jpeg';
import img16 from '../assets/gallery/18.jpeg';
import img17 from '../assets/gallery/19.jpeg';
import img18 from '../assets/gallery/20.jpeg';
import img19 from '../assets/gallery/21.jpeg';
import img20 from '../assets/gallery/22.jpeg';
import img21 from '../assets/gallery/23.jpeg';
import img22 from '../assets/gallery/24.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use imported images instead of placeholder URLs
  const galleryImages = [
    { src: img1, title: '' },
    { src: img23, title: '' },
    { src: img2, title: '' },
    { src: img3, title: '' },
    { src: img4, title: '' },
    { src: img5, title: '' },
    { src: img6, title: '' },
    { src: img7, title: '' },
    { src: img8, title: '' },
    { src: img9, title: '' },
    { src: img10, title: '' },
    { src: img11, title: '' },
    { src: img12, title: '' },
    { src: img13, title: '' },
    { src: img14, title: '' },
    { src: img15, title: '' },
    { src: img16, title: '' },
    { src: img17, title: '' },
    { src: img18, title: '' },
    { src: img19, title: '' },
    { src: img20, title: '' },
    { src: img21, title: '' },
    { src: img22, title: '' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl"
          >
            Capturing moments of joy, learning, and growth
          </motion.p>
        </div>
      </motion.div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-8 w-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;