import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Download, Code, Database, Cloud } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-40 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-20"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-40 left-20 w-20 h-20 bg-green-200 rounded-full opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Picture Space - Top Right */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40">
          <div className="w-full h-full glass rounded-full flex items-center justify-center">
            <div className="text-gray-400 text-sm text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Your Photo</span>
              </div>
              <span className="text-xs">Add your picture here</span>
            </div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block p-4 glass rounded-full mb-6"
            >
              <Code className="w-12 h-12 text-blue-600" />
            </motion.div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Sai Charan Narige</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl text-blue-600 mb-8 font-light"
          >
            Java Full Stack Developer
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            5+ years of experience in designing, developing, and deploying enterprise-grade web applications 
            in banking, healthcare, and retail domains. Passionate about creating scalable solutions with 
            modern technologies.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/saicharannarige"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 glass rounded-full hover:bg-blue-50 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </motion.a>
            <motion.a
              href="mailto:saicharannarige009@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="p-3 glass rounded-full hover:bg-green-50 transition-colors duration-300"
            >
              <Mail className="w-6 h-6 text-green-600" />
            </motion.a>
            <motion.a
              href="tel:+13126849489"
              whileHover={{ scale: 1.1 }}
              className="p-3 glass rounded-full hover:bg-purple-50 transition-colors duration-300"
            >
              <Phone className="w-6 h-6 text-purple-600" />
            </motion.a>
            <motion.a
              href="https://github.com/saicharannarige"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 glass rounded-full hover:bg-gray-50 transition-colors duration-300"
            >
              <Github className="w-6 h-6 text-gray-600" />
            </motion.a>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex justify-center items-center space-x-8 opacity-60"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2 p-3 glass rounded-lg"
            >
              <Code className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">Java</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2 p-3 glass rounded-lg"
            >
              <Database className="w-6 h-6 text-green-600" />
              <span className="text-gray-700 font-medium">Spring Boot</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2 p-3 glass rounded-lg"
            >
              <Cloud className="w-6 h-6 text-purple-600" />
              <span className="text-gray-700 font-medium">AWS</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
