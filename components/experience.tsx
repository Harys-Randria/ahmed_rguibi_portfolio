'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Calendar, ChevronDown, ChevronUp, CheckCircle2, Building2 } from 'lucide-react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export function Experience() {
  const { experiences } = portfolioData
  const [expandedId, setExpandedId] = useState<number | null>(1)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section
      id="experience"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ==========================================
          BACKGROUND — Orbe unique pour cette section
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[700px] rounded-full opacity-[0.06] blur-[150px]"
          style={{ background: 'radial-gradient(ellipse, #8b5cf6 0%, #3b82f6 40%, transparent 70%)' }}
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
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Parcours
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] max-w-4xl">
            16 ans d'expérience
            <br />
            <span className="text-accent">au service de projets critiques</span>
          </h2>
        </motion.div>

        {/* ==========================================
            TIMELINE
            ========================================== */}
        <div className="relative">
          {/* Ligne verticale — Plus visible et moderne */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-primary to-transparent opacity-25" />

          <div className="space-y-0">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={exp.id}
                  variants={staggerItem}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 py-8 md:py-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* ==========================================
                      POINT TIMELINE — Avec glow pulse
                      ========================================== */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-accent border-[3px] border-surface relative">
                      {/* Glow externe */}
                      <div className="absolute inset-0 rounded-full bg-accent opacity-40 blur-sm animate-pulse" />
                    </div>
                  </div>

                  {/* Date — Mobile */}
                  <div className="md:hidden flex items-center gap-2 text-sm font-semibold text-accent mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  {/* ==========================================
                      CONTENU — Carte glass ou neubrutal
                      ========================================== */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    {/* Carte principale */}
                    <div 
                      onClick={() => toggleExpand(exp.id)}
                      className={`group cursor-pointer transition-all duration-300 ${
                        isExpanded 
                          ? 'glass-strong rounded-2xl p-6 shadow-lg' 
                          : 'glass rounded-2xl p-6 hover:border-accent/30'
                      }`}
                    >
                      {/* Type d'entreprise — Badge neubrutal */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="neubrutal text-xs font-medium uppercase tracking-wider px-3 py-1">
                          {exp.companyType}
                        </span>
                        {/* Point vert si c'est le poste actuel */}
                        {exp.period.includes('En cours') && (
                          <span className="flex items-center gap-1.5 text-xs text-green-badge">
                            <span className="w-2 h-2 rounded-full bg-green-badge animate-pulse" />
                            Actuel
                          </span>
                        )}
                      </div>

                      {/* Rôle et entreprise */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1.5">
                            <Building2 className="w-4 h-4 text-accent/60" />
                            <p className="text-base text-muted font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        {/* Date — Desktop */}
                        <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-accent whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>

                        {/* Toggle icône — Mobile */}
                        <button className="md:hidden p-2 rounded-full hover:bg-accent/10 transition-colors">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-accent" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-accent" />
                          )}
                        </button>
                      </div>

                      {/* Description courte */}
                      <p className="text-muted mt-3 leading-relaxed text-sm">
                        {exp.description}
                      </p>

                      {/* Tags — Version moderne */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tags.slice(0, 4).map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20"
                          >
                            {tag}
                          </span>
                        ))}
                        {exp.tags.length > 4 && (
                          <span className="px-3 py-1.5 text-xs font-medium text-muted bg-surface/50 rounded-full border border-border">
                            +{exp.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* ==========================================
                        DÉTAILS EXPANDABLES
                        ========================================== */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="glass rounded-2xl p-6 mt-3">
                            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              Réalisations clés
                            </p>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.08 }}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-green-badge flex-shrink-0 mt-0.5" />
                                  <span className="text-muted text-sm leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>

                            {/* Tous les tags */}
                            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                              {exp.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1.5 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bouton expand — Desktop */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpand(exp.id)
                      }}
                      className="hidden md:flex items-center gap-2 mt-4 ml-2 text-sm font-medium text-accent hover:text-foreground transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <span>Voir moins</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Voir les réalisations</span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Espace vide pour alignement timeline */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Note de bas de section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass inline-block rounded-full px-6 py-3">
            <p className="text-sm text-muted">
              8 expériences majeures • Secteurs Banque, Assurance, Services, Retail
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}