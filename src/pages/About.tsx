import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Heart, Award } from 'lucide-react';

const About = () => {
  const team = [
    // {
    //   name: 'Sarah Johnson',
    //   role: 'Director',
    //   image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop',
    //   description: 'With over 15 years of experience in early childhood education, Sarah leads our team with passion and dedication.'
    // },
    // {
    //   name: 'Michael Chen',
    //   role: 'Lead Teacher',
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop',
    //   description: 'Specializing in early childhood development, Michael brings creativity and innovation to our learning programs.'
    // },
    // {
    //   name: 'Emily Rodriguez',
    //   role: 'Art Director',
    //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&auto=format&fit=crop',
    //   description: 'Emily\'s artistic background helps children explore their creativity through various mediums and techniques.'
    // },
    // {
    //   name: 'David Thompson',
    //   role: 'Music Teacher',
    //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop',
    //   description: 'David brings music to life for our students, fostering a love for rhythm and melody from an early age.'
    // }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Nurturing Care',
      description: 'We provide a loving and supportive environment where every child feels valued and secure.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: 'Educational Excellence',
      description: 'Our curriculum is designed to inspire curiosity and foster a lifelong love of learning.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: 'Community Focus',
      description: 'We believe in building strong relationships between teachers, children, and families.'
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: 'Quality Standards',
      description: 'We maintain the highest standards of safety, education, and care in everything we do.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-blue-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              The little <b>Little stars Play School</b> a new star in horizon for the kids education and Skill development has <b>successfully completed 18 years</b> and stepping into <b>19th year</b> on the coming Vijayadasami 
              The school have provides montessori Teacher's training. The school admits limited children. The Teaching is based on Montessori play way method through audio, video and audio visual aids aming at all round development of knowledge. A lot of Programmme are conducted for the tiny tots through out the years
              . The children with their parents go for Picnic to near by place of interest like children's park and Zoo. Safe Environment,Flexible Hours Certified Teachers
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              To create a nurturing environment where children can explore, learn, and grow through play-based education,
              fostering their natural curiosity and developing essential life skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              To be recognized as a leading early childhood education center, known for our innovative approach to
              learning and commitment to nurturing the whole child.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
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
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">Dedicated professionals committed to your child's growth</p> */}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default About;