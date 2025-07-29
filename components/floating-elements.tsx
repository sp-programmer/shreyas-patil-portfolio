"use client"

import { motion } from "framer-motion"
import { Cloud, Server, Database, Shield, Code, Cpu } from "lucide-react"

const floatingIcons = [
  { Icon: Cloud, delay: 0, duration: 20 },
  { Icon: Server, delay: 2, duration: 25 },
  { Icon: Database, delay: 4, duration: 18 },
  { Icon: Shield, delay: 6, duration: 22 },
  { Icon: Code, delay: 8, duration: 24 },
  { Icon: Cpu, delay: 10, duration: 19 },
]

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingIcons.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.1,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute"
        >
          <Icon className="h-8 w-8 text-cyan-400/20" />
        </motion.div>
      ))}
    </div>
  )
}
