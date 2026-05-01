'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, type Variants } from 'framer-motion'
import { Quote, Star, ExternalLink, ShieldCheck, Building2, Briefcase } from 'lucide-react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerCards: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const cardItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Recommendations() {
  const { recommendations } = portfolioData

  if (!recommendations || !recommendations.items || recommendations.items.length === 0) {
    return null
  }

  // Fonction pour formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long' }).format(date)
  }

  return (
    <section
      id="recommandations"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ==========================================
          BACKGROUND — Orbe subtile
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 -left-[15%] w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[140px]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -bottom-[10%] right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[130px]"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
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
              Confiance
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] max-w-4xl">
            {recommendations.title}
          </h2>
          <p className="text-lg text-muted mt-4 max-w-2xl">
            {recommendations.subtitle}
          </p>
        </motion.div>

        {/* ==========================================
            CARDS GRID
            ========================================== */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {recommendations.items.map((rec) => (
            <motion.div
              key={rec.id}
              variants={cardItem}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              {/* ===== CARTE PRINCIPALE ===== */}
              <div className="glass-strong rounded-3xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:border-accent/20">
                
                {/* ===== EN-TÊTE : Guillemets + Badge vérifié ===== */}
                <div className="flex items-start justify-between mb-5">
                  {/* Guillemets décoratifs */}
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-accent" />
                  </div>
                  
                  {/* Badge vérifié + plateforme */}
                  {rec.verified && (
                    <div className="flex items-center gap-2">
                      <div className="glass rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs text-green-badge">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Vérifié</span>
                      </div>
                      <div className="glass rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs text-muted">
                        <ExternalLink className="w-3 h-3" />
                        <span>{rec.platform}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* ===== TEXTE DU TÉMOIGNAGE ===== */}
                <blockquote className="flex-1">
                  <p className="text-foreground/85 leading-relaxed text-sm md:text-base italic mb-6">
                    "{rec.text}"
                  </p>
                </blockquote>

                {/* ===== HIGHLIGHTS — Tags ===== */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {rec.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ===== SÉPARATEUR ===== */}
                <div className="border-t border-border pt-5 mt-auto">
                  <div className="flex items-center justify-between gap-4">
                    {/* Infos du recommandeur */}
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Avatar initiales */}
                      <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                        <span className="text-accent font-bold text-sm">
                          {rec.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      
                      <div className="min-w-0">
                        <p className="text-foreground font-semibold text-sm truncate">
                          {rec.name}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-muted">
                          <Briefcase className="w-3 h-3 shrink-0" />
                          <span className="truncate">{rec.role}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted mt-0.5">
                          <Building2 className="w-3 h-3 shrink-0" />
                          <span className="truncate">{rec.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Date + Étoiles */}
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1 justify-end mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < 5
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-muted/30'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-muted">
                        {formatDate(rec.date)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ==========================================
            NOTE DE BAS
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass inline-flex items-center gap-3 rounded-full px-6 py-3">
            <ShieldCheck className="w-4 h-4 text-green-badge" />
            <p className="text-sm text-muted">
              Recommandations vérifiées issues de plateformes professionnelles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}