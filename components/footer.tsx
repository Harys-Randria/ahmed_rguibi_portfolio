'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Footer() {
  const { footer, name, navLinks, contact } = portfolioData
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Liens sociaux avec icônes personnalisées
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ahmed-rguibi',
      icon: '/linkedin.png',
    },
    {
      name: 'Malt',
      url: 'https://www.malt.fr/profile/ahmedrguibi',
      icon: '/malt.png',
    },
    {
      name: 'Collective',
      url: 'https://app.collective.work/',
      icon: '/collective.png',
    },
  ]

  return (
    <footer className="relative bg-[#1a1a2e] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7B6FFF 0%, #3D2DB5 50%, transparent 100%)' }}
        />
        <div 
          className="absolute -bottom-[200px] -left-[100px] w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #3D2DB5 0%, #7B6FFF 50%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {footer.tagline}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md"
                  aria-label={social.name}
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#7B6FFF] mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-[#7B6FFF] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#7B6FFF] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[#7B6FFF] flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[#7B6FFF] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{contact.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-[#7B6FFF] flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{contact.address}</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Quick CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#7B6FFF] mb-6">
              Disponible
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Interventions de redressement, pilotage de programmes, missions de conseil PMO.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3D2DB5] hover:bg-[#7B6FFF] text-white text-sm font-medium rounded-xl transition-all duration-300"
            >
              Prendre rendez-vous
              <ArrowUp className="w-4 h-4 rotate-45" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} {name}. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-[#7B6FFF] text-sm transition-colors">
              Mentions légales
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-500 hover:text-[#7B6FFF] text-sm transition-colors">
              Confidentialité
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#3D2DB5] hover:bg-[#7B6FFF] rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  )
}