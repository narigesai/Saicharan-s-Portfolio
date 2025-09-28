import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Server, Shield, TestTube, GitBranch, Monitor } from 'lucide-react'

const Skills = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Java 8/11/17/21", "JavaScript", "TypeScript", "Python", "Kotlin", "SQL", "PL/SQL"]
    },
    {
      title: "Frontend Technologies",
      icon: <Monitor className="w-8 h-8" />,
      skills: ["ReactJS", "Angular 8+", "VueJS", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "jQuery"]
    },
    {
      title: "Backend & Frameworks",
      icon: <Server className="w-8 h-8" />,
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Node.js", "Express.js", "Hibernate", "JPA"]
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Cassandra", "DynamoDB", "Redis", "Couchbase"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Terraform", "GitHub Actions"]
    },
    {
      title: "Security & Testing",
      icon: <Shield className="w-8 h-8" />,
      skills: ["OAuth2", "JWT", "SSL/TLS", "JUnit", "Mockito", "TestNG", "Selenium", "Cypress"]
    },
    {
      title: "Message Queues",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Apache Kafka", "RabbitMQ", "ActiveMQ", "AWS SNS/SQS", "WebSockets"]
    },
    {
      title: "Testing Tools",
      icon: <TestTube className="w-8 h-8" />,
      skills: ["Postman", "Swagger", "Jest", "Mocha", "Chai", "Cucumber", "Protractor"]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise across the full technology stack
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="card group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Expertise</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Design Patterns</h4>
                  <div className="space-y-1">
                    {["Singleton", "Factory", "Builder", "Observer", "Strategy"].map((pattern, index) => (
                      <span key={index} className="inline-block bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {pattern}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Methodologies</h4>
                  <div className="space-y-1">
                    {["Agile/Scrum", "Kanban", "Waterfall", "TDD", "BDD"].map((method, index) => (
                      <span key={index} className="inline-block bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Tools & IDEs</h4>
                  <div className="space-y-1">
                    {["IntelliJ IDEA", "Eclipse", "VS Code", "JIRA", "Git", "Maven", "Gradle"].map((tool, index) => (
                      <span key={index} className="inline-block bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
