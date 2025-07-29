"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Cloud System Administrator / System Administrator",
    company: "Apps4Rent / Katalyst Partners",
    location: "Navi Mumbai",
    period: "July 2023 – Present",
    responsibilities: [
      "Manage and administer Microsoft Azure services: Virtual Machines, Azure Active Directory, Networking, and Storage",
      "Configure & manage Azure VMs, Load Balancers, Virtual Networks, Site Recovery, and NSG",
      "Implement Azure Security, backups, site recovery, and monitoring solutions",
      "Handle on-premises and cloud server environments (Windows Server 2008–2022)",
      "Manage Active Directory, Group Policies, DNS, DHCP, and Cisco Firewalls",
      "Administer virtual machines (Hyper-V, Proxmox, Xen), backup solutions (Veeam), and migration tasks",
      "Utilize Nagios, Grafana, and Prometheus for infrastructure monitoring",
      "Troubleshoot technical issues and deliver user support (First Call Resolution)",
    ],
  },
  {
    title: "Intern – AI & ML",
    company: "YBI Foundation",
    location: "Remote",
    period: "Jan 2022 – Aug 2022",
    responsibilities: [
      "Developed AI/ML applications in business & healthcare domains",
      "Worked on machine learning models and data analysis projects",
      "Gained hands-on experience with Python and ML frameworks",
    ],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative">
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
              Work Experience
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional journey in cloud administration and DevOps engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2.5, delay: 0.5 }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: -45 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.4,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ scale: 1.02, y: -8 }}
              className={`relative mb-16 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"}`}
            >
              {/* Enhanced Timeline Dot */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.4 + 0.2 }}
                whileHover={{ scale: 1.3, rotate: 180 }}
                className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-slate-900 shadow-lg shadow-cyan-400/30"
              />

              {/* Floating Card Animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.7 }}
                className="ml-16 md:ml-0"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                      >
                        {exp.title}
                      </motion.h3>
                    </div>

                    <div className="flex flex-col gap-3 mb-6 text-gray-300 text-center md:text-left">
                      <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-purple-400" />
                        <span className="font-medium group-hover:text-white transition-colors duration-300">
                          {exp.company}
                        </span>
                      </motion.div>
                      <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-purple-400" />
                        <span className="group-hover:text-white transition-colors duration-300">{exp.location}</span>
                      </motion.div>
                      <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        <span className="group-hover:text-white transition-colors duration-300">{exp.period}</span>
                      </motion.div>
                    </div>

                    <ul className="space-y-3 text-gray-300">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -30 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.4 + respIndex * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-purple-400 transition-colors duration-300"
                          />
                          <span className="text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">
                            {responsibility}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced floating particles */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.4,
                      }}
                      style={{
                        left: `${15 + i * 20}%`,
                        top: `${25 + i * 15}%`,
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
