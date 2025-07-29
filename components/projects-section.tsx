"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Server, Cloud, Bot, Shield, Workflow, Database } from "lucide-react"

const projects = [
  {
    title: "Windows Server Management & Virtualization Automation",
    description: "Automated deployment and management across multiple server versions using PowerShell and Hyper-V.",
    icon: Server,
    tags: ["PowerShell", "Hyper-V", "Windows Server", "Automation"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Automated CI/CD Pipeline for Django Web Application",
    description: "Real-time CICD with Jenkins, GitHub, Docker, Kubernetes on AWS/Azure, and Ansible.",
    icon: Workflow,
    tags: ["Jenkins", "Docker", "Kubernetes", "AWS", "Azure", "Ansible"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "RDWeb and WebClient Access Configuration",
    description:
      "Deployed and configured secure remote access to Windows Virtual Desktops and applications with Active Directory authentication.",
    icon: Shield,
    tags: ["RDWeb", "Active Directory", "Windows Virtual Desktop", "Security"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Apps4Insights",
    description:
      "Managed data pipelines and backend for a data analytics portal enabling AI-driven queries and business insights.",
    icon: Database,
    tags: ["Data Analytics", "AI", "Backend", "Data Pipelines"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Automated Deployment for Microservice Apps",
    description:
      "Full deployment automation for microservices applications using Docker, Ansible, Kubernetes, and Terraform on AWS and Azure.",
    icon: Cloud,
    tags: ["Microservices", "Docker", "Terraform", "AWS", "Azure"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Handwritten Character Recognition",
    description:
      "Designed and implemented a system for recognizing handwritten characters using machine learning and deep learning techniques.",
    icon: Bot,
    tags: ["Machine Learning", "Deep Learning", "Python", "Computer Vision"],
    color: "from-indigo-500 to-purple-500",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my key projects in cloud infrastructure, automation, and DevOps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <project.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full border border-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
