'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion } from 'framer-motion'
import { Mail, Phone, Calendar, ArrowRight, Copy, Check } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function Contact() {
  const { contact_section, contact } = portfolioData
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  // Liens sociaux avec icônes personnalisées
  const customSocialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-rguibi',
      icon: '/linkedin.png',
      color: 'hover:bg-[#0A66C2]/10',
    },
    {
      name: 'Malt',
      url: 'https://www.malt.fr/profile/ahmedrguibi',
      icon: '/malt.png',
      color: 'hover:bg-[#FF5C00]/10',
    },
    {
      name: 'Collective',
      url: 'https://www.collective.work/profile/ahmed-rguibi',
      icon: '/collective.png',
      color: 'hover:bg-[#000000]/10',
    },
  ]

  // Calendly URL - À remplacer par votre vrai lien
  const calendlyUrl = 'https://calendly.com/a-rguibi-maaian/30min'

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -bottom-[30%] -left-[20%] w-[800px] h-[800px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #3D2DB5 0%, #7B6FFF 50%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#7B6FFF]" />
            <span className="text-sm font-medium uppercase tracking-wider text-[#7B6FFF]">
              Contact
            </span>
            <div className="w-8 h-[2px] bg-[#7B6FFF]" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a2e] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Travaillons
            <br />
            <span className="text-[#3D2DB5]">ensemble</span>
          </h2>
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
            {contact_section.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Carte de contact */}
            <div className="bg-gradient-to-br from-white to-[#3D2DB5]/[0.02] rounded-3xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7B6FFF]" />
                Me contacter directement
              </h3>

              <div className="space-y-1">
                {/* Email */}
                <div className="group relative flex items-center justify-between p-4 rounded-xl hover:bg-[#3D2DB5]/5 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7B6FFF]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#7B6FFF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-gray-800 font-medium hover:text-[#3D2DB5] transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.email, 'email')}
                    className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-white transition-all duration-300"
                    aria-label="Copier l'email"
                  >
                    {copied === 'email' ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Téléphone */}
                <div className="group relative flex items-center justify-between p-4 rounded-xl hover:bg-[#3D2DB5]/5 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7B6FFF]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#7B6FFF]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Téléphone</p>
                      <a 
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="text-gray-800 font-medium hover:text-[#3D2DB5] transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.phone, 'phone')}
                    className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-white transition-all duration-300"
                    aria-label="Copier le téléphone"
                  >
                    {copied === 'phone' ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Adresse */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <span className="text-[#7B6FFF]">📍</span>
                  {contact.address}
                </p>
              </div>
            </div>

            {/* Réseaux sociaux - Icônes personnalisées */}
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-400 font-medium mb-4">
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
                    className={`group relative flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 ${social.color} hover:shadow-md hover:border-transparent`}
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        src={social.icon}
                        alt={social.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {social.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Calendly CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center"
          >
            <div className="relative w-full rounded-3xl p-10 md:p-12 overflow-hidden group cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #3D2DB5 0%, #1a1a2e 100%)' }}
              onClick={() => window.open(calendlyUrl, '_blank')}
            >
              {/* Éléments décoratifs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B6FFF] rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#3D2DB5] rounded-full opacity-30 blur-3xl" />
              
              <div className="relative z-10">
                {/* Icône calendrier */}
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8">
                  <Calendar className="w-8 h-8 text-[#7B6FFF]" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Réservez un
                  <br />
                  <span className="text-[#7B6FFF]">créneau</span>
                </h3>

                <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-md">
                  Choisissez un créneau qui vous convient pour échanger sur votre projet ou vos besoins en pilotage.
                </p>

                {/* Bouton Calendly */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl font-semibold text-[#3D2DB5] group-hover:gap-4 transition-all duration-300">
                  <span>Prendre rendez-vous</span>
                  <Calendar className="w-4 h-4" />
                </div>

                {/* Durée */}
                <p className="text-white/40 text-sm mt-6 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#7B6FFF]" />
                  30 minutes • Visioconférence
                </p>
              </div>

              {/* Effet de survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7B6FFF]/0 via-[#7B6FFF]/10 to-[#7B6FFF]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-400">
            Réponse sous 24h • Disponible pour missions longues ou interventions ponctuelles
          </p>
        </motion.div>
      </div>
    </section>
  )
}