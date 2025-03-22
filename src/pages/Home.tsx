import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Heart, Brain, Users, Star, Clock, Calendar, Award, Shield, BookOpen, Palette, Music, Gamepad, Fan, AirVentIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from '../components/AnimatedCounter';
import MouseTrail from '../components/MouseTrail';
import mobiletabvideo from '../assets/horizontal.mp4';
import desktopvideo from '../assets/vertical.mp4';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // State to track screen size and video source
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Function to check screen size and set appropriate state
  const checkScreenSize = () => {
    const width = window.innerWidth;
    console.log('Current window width:', width); // Debug log
    setIsDesktop(width >= 1024);
  };
  
  // Initialize screen check and add event listener
  useEffect(() => {
    // Initial check
    checkScreenSize();
    
    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Debug log to verify state changes
  useEffect(() => {
    console.log('isDesktop state:', isDesktop);
    console.log('Video source:', isDesktop ? 'desktop video' : 'mobile video');
  }, [isDesktop]);

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Nurturing Environment',
      description: "Experienced educators dedicated to your child's growth."
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: 'Creative Learning',
      description: 'Innovative teaching methods that spark curiosity and imagination.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: 'Social Development',
      description: 'Building confidence and social skills through interactive play.'
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: 'Expert Teachers',
      description: "Experienced educators dedicated to your child's growth."
    }
  ];

  const programs = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Early Learning',
      age: '2-3 years',
      description: 'Foundation skills through play-based learning'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Creative Arts',
      age: '3-4 years',
      description: 'Expressing creativity through various mediums'
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: 'Music & Movement',
      age: '4-5 years',
      description: 'Rhythm, dance, and musical exploration'
    },
    {
      icon: <Gamepad className="h-6 w-6" />,
      title: 'Pre-K Prep',
      age: '5-6 years',
      description: 'Kindergarten readiness program'
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: 'Flexible Hours',
      description: 'Open from 7 AM to 6 PM to accommodate busy parents'
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-500" />,
      title: 'Year-Round Programs',
      description: 'Continuous learning with special summer activities'
    },
    {
      icon: <AirVentIcon className="h-6 w-6 text-yellow-500" />,
      title: 'Air conditioned Class Rooms ',
      description: 'Full A/C class rooms for your children'
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: 'Safe Environment',
      description: '24/7 security and health protocols'
    }
  ];

  const stats = [
    { value: 250, title: 'Happy Students', suffix: '+' },
    { value: 20, title: 'Years Experience' },
    { value: 98, title: 'Parent Satisfaction', suffix: '%' }
  ];

  // Force reload the video when screen size changes
  const [key, setKey] = useState(0);
  useEffect(() => {
    // Update the key to force video reload
    setKey(prevKey => prevKey + 1);
  }, [isDesktop]);

  return (
    <div className="pt-20">
      <MouseTrail />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        {/* Using key to force remount of video element when source changes */}
        <video
          key={key}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src={isDesktop ? desktopvideo : mobiletabvideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-blue-900"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center justify-center text-center px-4"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Where Learning Meets Play
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-white mb-8"
            >
              Nurturing young minds in a safe and creative environment
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-x-4"
            >
              <Link
                to="/contact"
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
              >
                Schedule a Visit
              </Link>
              <Link
                to="/classes"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Explore Programs
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0"
        >
          <svg
            viewBox="0 0 1440 120"
            className="fill-white"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.value}
                title={stat.title}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose PlayLearn?
          </h2>
          <p className="text-xl text-gray-600">
            We provide the perfect environment for your child to learn and grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Programs Preview Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Age-appropriate learning experiences for every stage</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-500 mb-4"
                >
                  {program.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-blue-500 font-medium mb-2">{program.age}</p>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/classes"
              className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 group"
            >
              View All Programs
              <motion.svg
                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600">Everything your child needs to thrive</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Join Our Family?</h2>
            <p className="text-xl mb-8">Schedule a visit to experience our nurturing environment firsthand</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;