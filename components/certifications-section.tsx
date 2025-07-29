"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Cloud, Code, GitBranch, Container } from "lucide-react"

const certifications = [
  {
    title: "Certified Azure Administrator",
    issuer: "Microsoft",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    title: "DevOps Training",
    issuer: "Professional Training",
    year: "2023",
    icon: GitBranch,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "AWS Bootcamp",
    issuer: "AWS Training",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Java Full Stack Development",
    issuer: "Professional Training",
    year: "2023",
    icon: Code,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "The Git & GitHub Bootcamp",
    issuer: "Professional Training",
    icon: GitBranch,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Docker Mastery: with Kubernetes + Swarm",
    issuer: "Professional Training",
    icon: Container,
    color: "from-cyan-500 to-blue-500",
  },
]

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 relative">
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
              Certifications
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional certifications and training that validate my expertise in cloud technologies and DevOps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                cert.featured
                  ? "border-cyan-400 shadow-lg shadow-cyan-400/20"
                  : "border-slate-700 hover:border-cyan-400/50"
              }`}
            >
              {cert.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              )}

              <div
                className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${cert.color} rounded-xl mb-4 mx-auto`}
              >
                <cert.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-cyan-400 mb-2 text-center">{cert.title}</h3>

              <p className="text-gray-300 text-center mb-2">{cert.issuer}</p>

              {cert.year && <p className="text-gray-400 text-sm text-center">{cert.year}</p>}

              <div className="flex items-center justify-center mt-4">
                <Award className="h-5 w-5 text-yellow-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
