'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, type Variants } from 'framer-motion'
import { useState } from 'react'
import * as LucideIcons from 'lucide-react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Skills() {
  const { skills } = portfolioData
  const [activeCategory, setActiveCategory] = useState(0)

  // Map icon names to components
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as Record<string, any>)[iconName]
    if (!IconComponent) return <LucideIcons.Code size={20} />
    return <IconComponent size={20} />
  }

  // Calculs pour les stats
  const totalSkills = skills.categories.reduce((acc, cat) => acc + cat.items.length, 0)
  const methodologies = skills.categories.find(c => c.name === 'Méthodologies')?.items || []

  return (
    <section
      id="competences"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ==========================================
          BACKGROUND — Orbe unique
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 -right-[25%] w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[150px]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, #3b82f6 40%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
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
              Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] max-w-4xl">
            Compétences techniques
            <br />
            <span className="text-accent">& méthodologiques</span>
          </h2>
        </motion.div>

        {/* ==========================================
            BOTTOM STATS — Cartes glass
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12"
        >
          <div className="glass rounded-2xl px-8 py-5 text-center min-w-[130px]">
            <p className="text-3xl font-bold text-accent">{totalSkills}</p>
            <p className="text-xs text-muted uppercase tracking-wider mt-1">Compétences</p>
          </div>
          
          {/* Séparateur visuel */}
          <div className="w-px h-10 bg-border hidden md:block" />
          
          <div className="glass rounded-2xl px-8 py-5 text-center min-w-[130px]">
            <p className="text-3xl font-bold text-accent">{skills.categories.length}</p>
            <p className="text-xs text-muted uppercase tracking-wider mt-1">Catégories</p>
          </div>
          
          <div className="w-px h-10 bg-border hidden md:block" />
          
          <div className="glass rounded-2xl px-8 py-5 text-center min-w-[130px]">
            <p className="text-3xl font-bold text-accent">{skills.technicalDomains.length}</p>
            <p className="text-xs text-muted uppercase tracking-wider mt-1">Domaines techniques</p>
          </div>
        </motion.div>

        {/* ==========================================
            CATEGORY TABS — Modernisés
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {skills.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`group relative px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'text-foreground'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {/* Fond actif — Neubrutal pour l'onglet sélectionné */}
              {activeCategory === index && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="neubrutal absolute inset-0 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {/* Fond hover pour les inactifs */}
              {activeCategory !== index && (
                <div className="absolute inset-0 rounded-xl glass opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              <span className="relative z-10 flex items-center gap-2 text-sm">
                {getIcon(category.icon)}
                {category.name}
              </span>
            </button>
          ))}
        </motion.div>

        {/* ==========================================
            SKILLS GRID — Bento Style Modernisé
            ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          
          {/* LEFT — Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass-strong rounded-3xl p-8 md:p-10"
          >
            {/* En-tête de la catégorie */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                {getIcon(skills.categories[activeCategory].icon)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {skills.categories[activeCategory].name}
                </h3>
                <p className="text-sm text-muted">
                  {skills.categories[activeCategory].items.length} compétences
                </p>
              </div>
            </div>

            {/* Grille de compétences */}
            <div className="grid grid-cols-2 gap-3">
              {skills.categories[activeCategory].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, ease: 'easeOut' }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10 transition-colors duration-200 group cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform duration-200" />
                  <span className="text-foreground/80 text-sm font-medium group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ==========================================
              RIGHT — Domaines + Méthodologies
              ========================================== */}
          <div className="space-y-8">
            
            {/* Domaines techniques — Tags en card-3d */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <h4 className="text-sm uppercase tracking-wider text-muted font-medium mb-6 flex items-center gap-2">
                <LucideIcons.Layers className="w-4 h-4 text-accent" />
                Domaines techniques
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.technicalDomains.map((domain, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, ease: 'easeOut' }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="card-3d px-4 py-2 text-sm font-medium text-accent bg-accent/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors duration-300 cursor-default"
                  >
                    {domain}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Méthodologies — Border Gradient animé */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-8 border border-accent/20"
            >
              {/* Overlay de contenu pour isolation du border-gradient */}
              <div className="relative z-10">
                <h4 className="text-sm uppercase tracking-wider text-accent font-medium mb-5 flex items-center gap-2">
                  <LucideIcons.GitBranch className="w-4 h-4" />
                  Méthodologies maîtrisées
                </h4>
                
                <div className="space-y-3">
                  {methodologies.map((method, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <LucideIcons.CheckCircle2 className="w-5 h-5 text-green-badge flex-shrink-0" />
                      <span className="text-foreground font-medium group-hover:text-accent transition-colors duration-200">
                        {method}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Badge M.A.A.I.A.N. — Signature */}
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                    <LucideIcons.Zap className="w-4 h-4 text-accent" />
                    <span className="text-foreground text-sm font-semibold">Méthode M.A.A.I.A.N.</span>
                    <span className="text-accent text-xs font-medium bg-accent/15 px-2 py-0.5 rounded-full">Signature</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        
      </div>
    </section>
  )
}