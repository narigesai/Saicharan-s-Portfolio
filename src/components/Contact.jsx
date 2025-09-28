import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "saicharannarige009@gmail.com",
      link: "mailto:saicharannarige009@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (312) 684-9489",
      link: "tel:+13126849489"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Chicago, IL",
      link: "#"
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your next project? Let's connect and build something amazing together.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center space-y-3 p-6 glass rounded-xl hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="text-blue-600">{info.icon}</div>
                      <div className="text-center">
                        <div className="text-gray-800 font-semibold">{info.title}</div>
                        <div className="text-gray-600 text-sm">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div 
                variants={itemVariants}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-semibold">Available for Work</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Currently open to new opportunities and freelance projects. 
                  Let's discuss how I can help bring your ideas to life.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
