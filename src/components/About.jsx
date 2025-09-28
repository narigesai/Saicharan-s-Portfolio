import React from 'react'
import { motion } from 'framer-motion'
import { User, Award, Briefcase, GraduationCap } from 'lucide-react'

const About = () => {
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

  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Projects Completed" },
    { icon: <User className="w-8 h-8" />, number: "3", label: "Companies Worked" },
    { icon: <GraduationCap className="w-8 h-8" />, number: "M.S.", label: "Computer Science" }
  ]

  return (
    <section id="about" className="py-20 relative">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate Java Full Stack Developer with expertise in enterprise-grade applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-2xl hover-lift"
              >
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold gradient-text mb-4"
                >
                  Professional Summary
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 mb-4"
                >
                  I'm a dedicated Java Full Stack Developer with 5+ years of experience in designing, 
                  developing, and deploying enterprise-grade web applications across banking, healthcare, 
                  and retail domains.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-4"
                >
                  My expertise spans the entire SDLC, following Agile/Scrum practices to deliver 
                  high-quality solutions. I specialize in building responsive, cross-browser UIs and 
                  developing robust backend services using modern technologies.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600"
                >
                  Currently working at JPMorgan Chase, I focus on creating secure, HIPAA-compliant 
                  healthcare portals and microservices that handle critical patient data and workflows.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      Improved online banking dashboard performance by 15% at CVS Health
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      Reduced intake form errors by 35% through client-side validations
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      Increased deployment frequency by 40% through optimized CI/CD processes
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      Boosted user engagement by 12% at eBay through improved product pages
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center hover-lift"
              >
                <div className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
