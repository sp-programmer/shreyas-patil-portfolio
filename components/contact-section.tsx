"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Send, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "9689544571",
    href: "tel:9689544571",
  },
  {
    icon: Mail,
    label: "Email",
    value: "shreyas.patil.az@gmail.com",
    href: "mailto:shreyas.patil.az@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, Maharashtra",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shreyas-p-patil",
    href: "https://linkedin.com/in/shreyas-p-patil",
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hi Shreyas! My name is ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`
    const whatsappUrl = `https://wa.me/919689544571?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next project or opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-white hover:text-cyan-400 transition-colors duration-200">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-6">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Personal Information</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Date of Birth</span>
                  <span className="text-white">December 23, 2000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Location</span>
                  <span className="text-white">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-6">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Languages</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">English</span>
                  <span className="text-cyan-400">Full Professional Proficiency</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Hindi</span>
                  <span className="text-cyan-400">Full Professional Proficiency</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Marathi</span>
                  <span className="text-cyan-400">Native</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Cloud Technologies", "Automation", "Scripting", "Travelling", "Technical Community"].map(
                  (interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full border border-slate-600"
                    >
                      {interest}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-12 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-12 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="pl-12 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
