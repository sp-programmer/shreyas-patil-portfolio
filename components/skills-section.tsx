"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cloud, Code, Settings, Shield, Monitor, Server } from "lucide-react"

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["Azure (Certified)", "AWS"],
    color: "from-blue-500 to-cyan-500",
    level: 90,
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "Bash", "PowerShell", "Java", "Golang", "C"],
    color: "from-green-500 to-teal-500",
    level: 85,
  },
  {
    icon: Settings,
    title: "DevOps Tools",
    skills: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform"],
    color: "from-purple-500 to-pink-500",
    level: 88,
  },
  {
    icon: Server,
    title: "Infrastructure",
    skills: ["Windows Server", "Linux", "Hyper-V", "Active Directory"],
    color: "from-orange-500 to-red-500",
    level: 92,
  },
  {
    icon: Monitor,
    title: "Monitoring",
    skills: ["Grafana", "Prometheus", "Nagios"],
    color: "from-cyan-500 to-blue-500",
    level: 82,
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["Azure Security", "Firewalls", "VPN", "DNS/DHCP"],
    color: "from-indigo-500 to-purple-500",
    level: 87,
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My comprehensive skill set across cloud technologies, programming languages, and DevOps practices.
          </p>
        </motion.div>

        {/* Hexagonal Skill Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300" />

              <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 group-hover:border-cyan-400/50 transition-all duration-300 h-full">
                {/* Circular Progress Ring */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-slate-700"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: category.level / 100 } : {}}
                      transition={{ duration: 2, delay: index * 0.2 }}
                      className="drop-shadow-sm"
                      style={{
                        strokeDasharray: "251.2",
                        strokeDashoffset: "251.2",
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Icon in center */}
                  <div className={`absolute inset-0 flex items-center justify-center`}>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + skillIndex * 0.1 }}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex-shrink-0"
                      />
                      <span className="group-hover:text-white transition-colors duration-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${50 + i * 10}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Git",
              "GitHub",
              "SQL",
              "SCCM",
              "Office 365",
              "Visual Studio",
              "Veeam",
              "Citrix",
              "VLAN",
              "NSG",
              "Chef",
              "GitLab CI/CD",
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-slate-800/50 border border-slate-600 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
