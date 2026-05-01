'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, type Variants } from 'framer-motion'
import { Mail, Phone, Calendar, ArrowRight, Copy, Check, Clock, Video, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Contact() {
  const { contact_section, contact } = portfolioData
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  // Liens sociaux
  const customSocialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ahmed-rguibi',
    icon: '/linkedin.png',
    color: 'hover:border-[#0A66C2]/40',
    glow: 'hover:shadow-[0_0_20px_rgba(10,102,194,0.15)]',
    invert: false,
  },
  {
    name: 'Malt',
    url: 'https://www.malt.fr/profile/ahmedrguibi',
    icon: '/malt.png',
    color: 'hover:border-[#FF5C00]/40',
    glow: 'hover:shadow-[0_0_20px_rgba(255,92,0,0.15)]',
    invert: false,
  },
  {
    name: 'Collective',
    url: 'https://www.collective.work/profile/ahmed-rguibi',
    icon: '/collective.png',
    color: 'hover:border-accent/40',
    glow: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]',
    invert: true, 
  },
]

  const calendlyUrl = 'https://calendly.com/a-rguibi-maaian/30min'

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ==========================================
          BACKGROUND — Large orbe en bas à gauche
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -bottom-[25%] -left-[15%] w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, #3b82f6 40%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* ==========================================
            SECTION HEADER
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Contact
            </span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Travaillons
            <br />
            <span className="text-accent">ensemble</span>
          </h2>
          <p className="text-lg text-muted mt-6 max-w-2xl mx-auto">
            {contact_section.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* ==========================================
              LEFT — Infos de contact
              ========================================== */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Carte de contact principale */}
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                Me contacter directement
              </h3>

              <div className="space-y-1">
                {/* Email */}
                <div className="group relative flex items-center justify-between p-4 rounded-xl hover:bg-accent/5 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-foreground font-medium hover:text-accent transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.email, 'email')}
                    className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-accent/10 transition-all duration-300"
                    aria-label="Copier l'email"
                  >
                    {copied === 'email' ? (
                      <Check className="w-4 h-4 text-green-badge" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted" />
                    )}
                  </button>
                </div>

                {/* Téléphone */}
                <div className="group relative flex items-center justify-between p-4 rounded-xl hover:bg-accent/5 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Téléphone</p>
                      <a 
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="text-foreground font-medium hover:text-accent transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.phone, 'phone')}
                    className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-accent/10 transition-all duration-300"
                    aria-label="Copier le téléphone"
                  >
                    {copied === 'phone' ? (
                      <Check className="w-4 h-4 text-green-badge" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted" />
                    )}
                  </button>
                </div>
              </div>

              {/* Adresse */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <MapPin className="w-4 h-4 text-accent/60" />
                  {contact.address}
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <p className="text-sm uppercase tracking-wider text-muted font-medium mb-4 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                Retrouvez-moi sur
              </p>
              <div className="flex flex-wrap gap-3">
                {customSocialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative flex items-center gap-3 px-5 py-3 rounded-2xl border border-border transition-all duration-300 ${social.color} ${social.glow} glass`}
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        src={social.icon}
                        alt={social.name}
                        fill
                        className={`object-contain ${social.invert ? 'invert' : ''}`}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                      {social.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ==========================================
              RIGHT — Calendly CTA
              ========================================== */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div 
              className="border-gradient relative w-full rounded-3xl p-10 md:p-12 overflow-hidden group cursor-pointer bg-surface"
              onClick={() => window.open(calendlyUrl, '_blank')}
            >
              {/* Éléments décoratifs internes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full opacity-15 blur-3xl group-hover:opacity-25 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary rounded-full opacity-20 blur-3xl" />
              
              <div className="relative z-10">
                {/* Icône calendrier */}
                <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mb-8">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  Réservez un
                  <br />
                  <span className="text-accent">créneau</span>
                </h3>

                <p className="text-muted text-lg mb-8 leading-relaxed max-w-md">
                  Choisissez un créneau qui vous convient pour échanger sur votre projet ou vos besoins en pilotage.
                </p>

                {/* Bouton CTA — Neubrutal pour le contraste */}
                <div className="neubrutal inline-flex items-center gap-3 px-6 py-3 rounded-xl text-foreground font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Prendre rendez-vous</span>
                  <Calendar className="w-4 h-4" />
                </div>

                {/* Infos durée */}
                <div className="flex items-center gap-4 mt-6 text-sm text-muted">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent/60" />
                    30 minutes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-accent/60" />
                    Visioconférence
                  </span>
                </div>
              </div>

              {/* Effet de survol — Ligne lumineuse qui traverse */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* ==========================================
            FOOTER NOTE
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass inline-block rounded-full px-6 py-3">
            <p className="text-sm text-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-badge" />
              Réponse sous 24h ouvrées • Disponible pour missions longues ou interventions ponctuelles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}