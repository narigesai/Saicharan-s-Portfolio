import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award, TrendingUp, Users, Shield, Zap } from 'lucide-react'

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const experiences = [
    {
      company: "JPMorgan Chase",
      position: "Java Full Stack Developer",
      duration: "Sep 2024 – Present",
      location: "New York, NY",
      description: "Developing secure, HIPAA-compliant healthcare portals and microservices for patient management systems.",
      achievements: [
        "Reduced intake form errors by 35% through client-side validations",
        "Implemented real-time lab results streaming with Apache Kafka",
        "Achieved 85%+ code coverage with comprehensive testing",
        "Deployed cloud-native applications on AWS with zero downtime"
      ],
      technologies: ["Java 8-11", "Spring Boot", "ReactJS", "AWS", "Kubernetes", "Apache Kafka", "Oracle", "PostgreSQL"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      company: "CVS Health",
      position: "Java Full Stack Engineer",
      duration: "Jul 2021 – Aug 2023",
      location: "Woonsocket, RI",
      description: "Developed Single Page Applications and microservices for online banking dashboards and fraud detection systems.",
      achievements: [
        "Improved online banking dashboard performance by 15%",
        "Reduced ETL runtime by 25% for AML monitoring",
        "Increased deployment frequency by 40% through CI/CD optimization",
        "Enhanced fraud detection responsiveness with real-time streaming"
      ],
      technologies: ["Java 8-11", "Angular 10+", "Spring Boot", "Azure", "PostgreSQL", "Apache Kafka", "Docker"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      company: "eBay",
      position: "Java Developer",
      duration: "Jun 2019 – May 2021",
      location: "San Jose, CA",
      description: "Built dynamic product listing pages and backend services for order management and payment processing.",
      achievements: [
        "Improved product page load speed by 18%",
        "Boosted user engagement by 12%",
        "Reduced cart and checkout defects by 25%",
        "Migrated core services to Azure and GCP for global scalability"
      ],
      technologies: ["Java 7/8", "AngularJS", "Spring MVC", "Azure", "GCP", "MySQL", "Apache Camel"],
      icon: <Users className="w-6 h-6" />
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building enterprise-grade applications across diverse industries
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping"></div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`glass p-8 rounded-2xl ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-blue-400 flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <div className="flex items-center space-x-2 text-blue-300">
                          <Building className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
