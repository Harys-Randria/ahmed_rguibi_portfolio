'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { Award, Briefcase, Globe, Target, TrendingUp, Zap, Quote, ArrowRight } from 'lucide-react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

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
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ==========================================
          BACKGROUND DECORATION — Orbes subtiles
          (le fond principal est géré par body::before/after)
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbe violette top-left */}
        <div 
          className="absolute top-0 -left-[30%] w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        />
        {/* Orbe bleue bottom-right */}
        <div 
          className="absolute bottom-0 -right-[20%] w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[130px]"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* ==========================================
            SECTION HEADER — Modernisé
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          {/* Ligne + label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              À propos
            </span>
          </div>
          
          {/* Titre avec contraste */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] max-w-4xl">
            Une expertise forgée
            <br />
            <span className="text-accent">sur le terrain</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20">
          
          {/* ==========================================
              LEFT — Contenu principal
              ========================================== */}
          <div className="space-y-8">
            
            {/* Introduction — Dans une carte glass */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="glass-strong rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                    {about.introduction}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Description — Typographie aérée */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 text-muted leading-relaxed text-lg pl-2"
            >
              {about.description.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Citation signature — Border gradient pour l'impact */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="glass-strong rounded-2xl p-6 md:p-8 mt-8 border border-accent/20 shadow-[0_0_30px_rgba(139,92,246,0.08)]">
                <Quote className="w-8 h-8 text-accent/30 mb-3" />
                <p className="text-xl text-foreground font-medium italic leading-relaxed">
                  "Ma méthode M.A.A.I.A.N. permet un diagnostic rapide et un redressement efficace des projets en situation critique."
                </p>
              </div>
            </motion.div>
          </div>

          {/* ==========================================
              RIGHT — Infos complémentaires
              ========================================== */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Highlights — Cartes en card-3d */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Zap className="w-4 h-4 text-accent" />
                <p className="text-sm uppercase tracking-wider text-accent font-semibold">
                  Expertise clé
                </p>
              </div>
              <div className="space-y-3">
                {about.highlights.map((highlight, i) => {
                  const Icon = getIconForHighlight(highlight)
                  return (
                    <div
                      key={i}
                      className="card-3d glass rounded-xl p-3 flex items-center gap-3 cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground/80 text-sm">{highlight}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Secteurs — Tags en neubrutal */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Briefcase className="w-4 h-4 text-accent" />
                <p className="text-sm uppercase tracking-wider text-muted font-medium">
                  Secteurs
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.sectors.map((sector, i) => (
                  <span
                    key={i}
                    className="neubrutal px-4 py-2 text-sm font-medium text-foreground cursor-default"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Langues — Liste épurée */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Globe className="w-4 h-4 text-accent" />
                <p className="text-sm uppercase tracking-wider text-muted font-medium">
                  Langues
                </p>
              </div>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between py-3 px-4 rounded-xl border border-border hover:border-accent/30 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-foreground/80">{lang.language}</span>
                    </div>
                    <span className="text-sm font-semibold text-accent">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications — Avec icônes */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-4 h-4 text-accent" />
                <p className="text-sm uppercase tracking-wider text-muted font-medium">
                  Certifications
                </p>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div 
                    key={i} 
                    className="glass rounded-xl p-3"
                  >
                    <p className="font-semibold text-foreground text-sm">{cert.name}</p>
                    <p className="text-xs text-muted mt-1">{cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA — Bouton moderne */}
            <div className="pt-4">
              <a
                href="#contact"
                className="neubrutal inline-flex items-center gap-3 px-5 py-3 rounded-xl text-foreground font-medium text-sm group cursor-pointer"
              >
                <span>Me contacter</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}