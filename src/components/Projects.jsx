import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Database, Cloud, Shield, Zap } from 'lucide-react'

const Projects = () => {
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

  const projects = [
    {
      title: "Healthcare Portal System",
      description: "HIPAA-compliant healthcare portal with patient management, appointment scheduling, and real-time lab results streaming.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      technologies: ["ReactJS", "Spring Boot", "Apache Kafka", "Oracle", "AWS", "Kubernetes"],
      features: [
        "Real-time appointment scheduling",
        "Secure patient data management",
        "Lab results streaming",
        "HIPAA compliance",
        "Microservices architecture"
      ],
      github: "#",
      live: "#",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Banking Dashboard",
      description: "Online banking dashboard with fraud detection, transaction processing, and compliance modules.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Angular 10+", "Spring Boot", "PostgreSQL", "Azure", "Apache Kafka"],
      features: [
        "Real-time transaction monitoring",
        "Fraud detection algorithms",
        "Compliance reporting",
        "Multi-role access control",
        "ETL pipelines for AML"
      ],
      github: "#",
      live: "#",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "E-commerce Platform",
      description: "Dynamic product listing and order management system with payment processing and inventory tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["AngularJS", "Spring MVC", "MySQL", "Azure", "GCP", "Apache Camel"],
      features: [
        "Dynamic product listings",
        "Real-time inventory updates",
        "Payment gateway integration",
        "Order tracking system",
        "Multi-cloud deployment"
      ],
      github: "#",
      live: "#",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices platform with API gateway, service discovery, and distributed logging.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Spring Cloud", "Docker", "Kubernetes", "Apache Kafka", "Redis", "ELK Stack"],
      features: [
        "Service discovery with Eureka",
        "API gateway with Zuul",
        "Distributed tracing",
        "Centralized logging",
        "Auto-scaling capabilities"
      ],
      github: "#",
      live: "#",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Real-time analytics platform for monitoring application performance and business metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["ReactJS", "Node.js", "MongoDB", "WebSocket", "Chart.js", "AWS"],
      features: [
        "Real-time data visualization",
        "Custom dashboard creation",
        "Alert management",
        "Performance monitoring",
        "Data export capabilities"
      ],
      github: "#",
      live: "#",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Automated CI/CD pipeline with quality gates, security scanning, and zero-downtime deployments.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop",
      technologies: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Maven", "GitHub Actions"],
      features: [
        "Automated testing",
        "Code quality gates",
        "Security scanning",
        "Blue-green deployments",
        "Rollback capabilities"
      ],
      github: "#",
      live: "#",
      icon: <Code className="w-6 h-6" />
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing enterprise-grade applications and innovative solutions
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="card group overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-blue-400">
                    {project.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-400">
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn text-lg px-8 py-4"
            >
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
