import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/saicharannarige",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/saicharannarige",
      label: "GitHub"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:saicharannarige009@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+13126849489",
      label: "Phone"
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="relative py-16">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Sai Charan Narige</h3>
              <p className="text-gray-300 leading-relaxed">
                Java Full Stack Developer passionate about creating enterprise-grade applications 
                with modern technologies and best practices.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 glass rounded-full hover:bg-blue-500/20 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a 
                    href="mailto:saicharannarige009@gmail.com"
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    saicharannarige009@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a 
                    href="tel:+13126849489"
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    +1 (312) 684-9489
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <a 
                    href="https://www.linkedin.com/in/saicharannarige"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-white/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <span>© 2024 Sai Charan Narige. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <span>and React</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-gray-400">Available for work</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10"></div>
      </div>
    </footer>
  )
}

export default Footer
