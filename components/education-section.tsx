"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "B.E. Computer Engineering",
    institution: "University of Mumbai",
    year: "2019–2023",
    score: "9.40/10 CGPA",
    type: "Bachelor's Degree",
  },
  {
    degree: "H.S.C. - Science",
    institution: "Maharashtra State Board",
    year: "2019",
    score: "71.08%",
    type: "Higher Secondary",
  },
  {
    degree: "S.S.C.",
    institution: "Maharashtra State Board",
    year: "2017",
    score: "90.40%",
    type: "Secondary School",
  },
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 relative">
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
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center">
            My academic journey and educational achievements.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"
          />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: -45 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative mb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"}`}
            >
              {/* Animated Timeline Dot */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                whileHover={{ scale: 1.2, rotate: 180 }}
                className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-400/20"
              />

              {/* Floating Animation for Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                className="ml-16 md:ml-0"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg shadow-lg"
                      >
                        <GraduationCap className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="text-center md:text-left">
                        <motion.h3
                          whileHover={{ x: 5 }}
                          className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        >
                          {edu.degree}
                        </motion.h3>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 text-gray-300 mb-4 text-center md:text-left">
                      <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        <span className="group-hover:text-white transition-colors duration-300">{edu.year}</span>
                      </motion.div>
                      <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-400" />
                        <span className="font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          {edu.score}
                        </span>
                      </motion.div>
                    </div>

                    <div className="flex justify-center">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-4 py-2 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-slate-600 group-hover:border-cyan-400/50 group-hover:bg-slate-600/50 transition-all duration-300"
                      >
                        {edu.type}
                      </motion.span>
                    </div>
                  </div>

                  {/* Animated particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                      style={{
                        left: `${20 + i * 25}%`,
                        top: `${30 + i * 20}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
