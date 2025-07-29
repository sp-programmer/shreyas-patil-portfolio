"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Users, TrendingUp } from "lucide-react"

const objectives = [
  {
    icon: Target,
    title: "Technical Excellence",
    description: "Apply skills in Microsoft Azure, Windows, and DevOps to deliver reliable and scalable IT solutions",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Continually expand technical expertise in cloud infrastructure, security, and automation",
  },
  {
    icon: Users,
    title: "Collaborative Impact",
    description: "Work collaboratively and enhance experience through continuous learning and teamwork",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I am a passionate and solutions-oriented Cloud System Administrator and DevOps Engineer with a strong
              foundation in designing, automating, and optimizing IT infrastructure. Certified in Azure Administration,
              I bring hands-on experience in cloud operations, server management, automation, security, and DevOps
              toolchains.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My goal is to contribute effectively to innovative organizations while continually expanding my expertise
              in IT infrastructure, cloud platforms, and automation.
            </p>
          </div>
        </motion.div>

        {/* Career Objectives */}
        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4 mx-auto">
                <objective.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3 text-center">{objective.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{objective.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
