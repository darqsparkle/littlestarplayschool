import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Star, ChevronDown, CheckCircle2 } from 'lucide-react';
import nursery from "../assets/nursery.jpeg";
import lkg from "../assets/gallery/4.jpeg";
import prekg from "../assets/prekg.jpeg";
import halfdaycare from '../assets/gallery/22.jpeg';
import fullddaycare from '../assets/gallery/14.jpeg';


const Classes = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const programs = [
    {
      id: 'toddlers',
      name: 'Nursery',
      ageRange: '2-3 years',
      schedule: 'Monday to Friday, 9 AM - 12 PM',
      capacity: '',
      description: 'Gentle introduction to structured learning.',
      activities: [
        'Small group activities for social development',
        'Basic Language Development',
        'Sensory play and motor skills developmen',
        'Fine Motor Activities'
      ],
      image: nursery,
    },
    {
      id: 'preschool',
      name: 'Pre Kg',
      ageRange: '3-4 years',
      schedule: 'Monday to Friday, 9 AM - 12 PM',
      capacity: '',
      description: 'Foundational skills through play based learning and creative activities. ',
      activities: [
        'Introduction to letters and numbers',
        'Creative art and craft',
        'Interactive group learning',
        'Social Skills Development'
      ],
      image: prekg,
    },
    {
      id: 'prek',
      name: 'LKG',
      ageRange: '3-4 years',
      schedule: 'Monday to Friday, 9 AM - 12 PM',
      capacity: '',
      description: 'Pre reading and writing skills basic mathematical concepts envirornmental awarness problem solving skills',
      activities: [
        'Reading Readiness',
        'Math Foundations',
        'Science Exploration',
        'Writing Skills'
      ],
      image: lkg
    },
    {
      id: 'prek',
      name: 'Half Day Care',
      ageRange: '3-4 years',
      schedule: 'Monday to Friday, 9 AM - 12 PM',
      capacity: '',
      description: 'Flexible care program with educational activity and supervised play',
      activities: [
        'OutDoor Play',
        'Indoor Play',
        'Group Play',
      ],
      image: halfdaycare,
    },
    {
      id: 'prek',
      name: 'Full Day care',
      ageRange: '3-4 years',
      schedule: 'Monday to Friday, 9 AM - 12 PM',
      capacity: '',
      description: 'Extended hours of care rest period and quiet time varied acitvity schedule',
      activities: [
        'Full time care',
        'Group Play',
        'Out door sport',
      ],
      image: fullddaycare
    }
  ];

  const features = [
    {
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      title: 'Expert Teachers',
      description: 'Highly qualified and experienced educators'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: 'Small Class Sizes',
      description: 'Individual attention for every child'
    },
    {
      icon: <Calendar className="h-6 w-6 text-green-500" />,
      title: 'Flexible Schedules',
      description: 'Programs that fit your needs'
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: 'Extended Hours',
      description: 'Early drop-off and late pickup available'
    }
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
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Age-appropriate learning experiences designed to nurture your child's development
          </motion.p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md"
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

      {/* Programs Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="md:grid md:grid-cols-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative h-64 md:h-full"
                  >
                    <img
                      src={program.image}
                      alt={program.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="p-8">
                    <div 
                      className="cursor-pointer"
                      onClick={() => setSelectedClass(selectedClass === program.id ? null : program.id)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                        <motion.div
                          animate={{ rotate: selectedClass === program.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-6 w-6 text-gray-500" />
                        </motion.div>
                      </div>
                      <div className="mt-2 space-y-2">
                        <p className="text-blue-600 font-medium">Age: {program.ageRange}</p>
                        <p className="text-gray-600">{program.schedule}</p>
                        <p className="text-gray-600">{program.capacity}</p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {selectedClass === program.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-gray-600 mb-4">{program.description}</p>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Activities:</h4>
                            <ul className="space-y-2">
                              {program.activities.map((activity, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center text-gray-600"
                                >
                                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                                  {activity}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Enroll Your Child?</h2>
            <p className="text-xl mb-8">Schedule a visit to learn more about our programs and meet our teachers</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
            >
              Schedule a Visit
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Classes;