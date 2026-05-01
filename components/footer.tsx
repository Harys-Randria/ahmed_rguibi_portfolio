'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, type Variants } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUp, Send } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const childItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

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

  // Liens sociaux
  const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ahmed-rguibi',
    icon: '/linkedin.png',
    invert: false, // Logo déjà clair sur fond sombre
  },
  {
    name: 'Malt',
    url: 'https://www.malt.fr/profile/ahmedrguibi',
    icon: '/malt.png',
    invert: false, // Logo déjà clair sur fond sombre
  },
  {
    name: 'Collective',
    url: 'https://app.collective.work/',
    icon: '/collective.png',
    invert: true, // Logo sombre → à inverser pour fond sombre
  },
]

  return (
    <footer className="relative bg-surface text-foreground overflow-hidden">
      {/* ==========================================
          BACKGROUND — Double orbe subtile
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[130px]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -bottom-[150px] -left-[100px] w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[110px]"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        />
      </div>

      {/* ==========================================
          LIGNE SUPÉRIEURE — Séparation élégante
          ========================================== */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        
        {/* ==========================================
            MAIN FOOTER CONTENT — 4 colonnes
            ========================================== */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          
          {/* ===== BRAND COLUMN ===== */}
          <motion.div variants={childItem} className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {name.split(' ').map((part, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-accent">{part}</span> : part}
                  {i < name.split(' ').length - 1 ? ' ' : ''}
                </span>
              ))}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {footer.tagline}
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center glass hover:border-accent/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      fill
                      className={`object-contain ${social.invert ? 'invert' : ''}`}
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ===== NAVIGATION ===== */}
          <motion.div variants={childItem}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted hover:text-foreground transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-accent group-hover:w-3 transition-all duration-300 rounded-full" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== CONTACT INFO ===== */}
          <motion.div variants={childItem}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-muted hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-muted hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">{contact.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm leading-relaxed">{contact.address}</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* ===== QUICK CTA ===== */}
          <motion.div variants={childItem}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Disponible
            </h4>
            <p className="text-muted text-sm leading-relaxed mb-5">
              Interventions de redressement, pilotage de programmes, missions de conseil PMO.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="neubrutal inline-flex items-center gap-2 px-5 py-2.5 text-foreground text-sm font-medium transition-all duration-300 hover:gap-3"
            >
              <span>Prendre rendez-vous</span>
              <Send className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* ==========================================
            BOTTOM BAR
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted text-sm text-center sm:text-left">
            © {currentYear} {name}. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted hover:text-accent text-sm transition-colors">
              Mentions légales
            </a>
            <span className="text-border">•</span>
            <a href="#" className="text-muted hover:text-accent text-sm transition-colors">
              Confidentialité
            </a>
          </div>
        </motion.div>
      </div>

      {/* ==========================================
          SCROLL TO TOP — Bouton flottant
          ========================================== */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 neubrutal rounded-full flex items-center justify-center cursor-pointer"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 text-foreground" />
      </motion.button>
    </footer>
  )
}