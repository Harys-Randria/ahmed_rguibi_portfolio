'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Award, Briefcase, Globe, Target, TrendingUp, Zap, Quote } from 'lucide-react'

export function About() {
  const containerRef = useRef<HTMLElement>(null)

  const { about, languages, certifications } = portfolioData

  // Icônes pour les highlights
  const getIconForHighlight = (text: string) => {
    if (text.includes('Intervention')) return Zap
    if (text.includes('Méthode')) return Target
    if (text.includes('international')) return Globe
    if (text.includes('Certifié')) return Award
    if (text.includes('Bilingue')) return Globe
    return TrendingUp
  }

  return (
    <section
      ref={containerRef}
      id="apropos"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white overflow-hidden"
    >
      {/* Background decoration - très subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 -left-[20%] w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7B6FFF 0%, #3D2DB5 50%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#7B6FFF]" />
            <span className="text-sm font-medium uppercase tracking-wider text-[#7B6FFF]">
              À propos
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a2e] tracking-tight leading-[1.1] max-w-4xl">
            Une expertise forgée
            <br />
            <span className="text-[#3D2DB5]">sur le terrain</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20">
          
          {/* LEFT - Contenu principal */}
          <div className="space-y-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                {about.introduction}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5 text-gray-600 leading-relaxed text-lg"
            >
              {about.description.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Citation signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mt-8 pt-6 border-t border-gray-100"
            >
              <Quote className="absolute -top-3 left-0 w-8 h-8 text-[#7B6FFF]/20" />
              <p className="pl-10 text-xl text-[#3D2DB5] font-medium italic">
                "Ma méthode M.A.A.I.A.N. permet un diagnostic rapide et un redressement efficace des projets en situation critique."
              </p>
            </motion.div>
          </div>

          {/* RIGHT - Infos complémentaires */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Highlights */}
            <div>
              <p className="text-sm uppercase tracking-wider text-[#3D2DB5] font-semibold mb-5">
                Expertise clé
              </p>
              <div className="space-y-3">
                {about.highlights.map((highlight, i) => {
                  const Icon = getIconForHighlight(highlight)
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#3D2DB5]/5 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#7B6FFF]/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#7B6FFF]" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Secteurs */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Briefcase className="w-4 h-4 text-[#7B6FFF]" />
                <p className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                  Secteurs
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.sectors.map((sector, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium text-[#3D2DB5] bg-[#3D2DB5]/5 rounded-lg border border-[#3D2DB5]/10"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Globe className="w-4 h-4 text-[#7B6FFF]" />
                <p className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                  Langues
                </p>
              </div>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-gray-700">{lang.language}</span>
                    </div>
                    <span className="text-sm font-medium text-[#7B6FFF]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-4 h-4 text-[#7B6FFF]" />
                <p className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                  Certifications
                </p>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="py-2 border-b border-gray-100 last:border-0">
                    <p className="font-medium text-gray-800">{cert.name}</p>
                    <p className="text-sm text-gray-500">{cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA discret */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-[#3D2DB5] font-medium group text-sm"
              >
                <span>Me contacter</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}