'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, type Variants } from 'framer-motion'
import { Award, Calendar, ExternalLink, GraduationCap, BookOpen, Building2, Globe, Sparkles, Layers } from 'lucide-react'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerCard: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export function Certifications() {
  const { certifications, languages } = portfolioData

  // Formations complémentaires enrichies
  const formations = [
    {
      id: 1,
      title: 'PRINCE2 Foundation & Practitioner',
      issuer: 'PeopleCert',
      year: '2020',
      description: 'Certification en gestion de projet selon la méthodologie PRINCE2, reconnue internationalement.',
      icon: '🏆',
      type: 'certification' as const,
      verified: true,
    },
    {
      id: 2,
      title: 'Jira / Confluence / Jira Service Management',
      issuer: 'Atlassian',
      year: '2024',
      description: 'Maîtrise opérationnelle sur la suite Atlassian pour le pilotage de projets, la collaboration et la gestion de services.',
      icon: '🛠️',
      type: 'maitrise' as const,
      verified: false,
    },
    {
      id: 3,
      title: 'Modules CNAM en développement logiciel',
      issuer: 'CNAM + ETNA',
      year: '2016',
      description: 'Formation intensive en développement logiciel et architecture des systèmes d\'information.',
      icon: '💻',
      type: 'formation' as const,
      verified: false,
    },
    {
      id: 4,
      title: 'Master 2 Management et Stratégies d\'Entreprise',
      issuer: 'ISEFAC',
      year: '2011',
      description: 'Formation en management stratégique, pilotage d\'entreprise et gestion de projets transverses.',
      icon: '🎓',
      type: 'diplome' as const,
      verified: false,
    },
  ]

  // Compétences linguistiques
  const languageDetails = [
    { language: 'Français', level: 'Natif', flag: '🇫🇷', proficiency: 100 },
    { language: 'Anglais', level: 'Bilingue', flag: '🇬🇧', proficiency: 95 },
    { language: 'Arabe', level: 'Courant', flag: '🇲🇦', proficiency: 80 },
  ]

  const getTypeConfig = (type: 'certification' | 'formation' | 'diplome' | 'maitrise') => {
    switch (type) {
      case 'certification':
        return { 
          icon: Award, 
          badgeColor: 'text-amber-400', 
          bgBadge: 'bg-amber-400/10',
          borderBadge: 'border-amber-400/30',
          label: 'Certification',
          accent: 'amber',
        }
      case 'formation':
        return { 
          icon: BookOpen, 
          badgeColor: 'text-blue-400', 
          bgBadge: 'bg-blue-400/10',
          borderBadge: 'border-blue-400/30',
          label: 'Formation',
          accent: 'blue',
        }
      case 'diplome':
        return { 
          icon: GraduationCap, 
          badgeColor: 'text-emerald-400', 
          bgBadge: 'bg-emerald-400/10',
          borderBadge: 'border-emerald-400/30',
          label: 'Diplôme',
          accent: 'emerald',
        }
      case 'maitrise':
        return {
          icon: Layers,  // ou Wrench si tu préfères
          badgeColor: 'text-purple-400',
          bgBadge: 'bg-purple-400/10',
          borderBadge: 'border-purple-400/30',
          label: 'Maîtrise',
          accent: 'purple',
        }
    }
  }

  return (
    <section
      id="certifications"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ==========================================
          BACKGROUND — Double orbe subtile
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 -right-[25%] w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[140px]"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
        />
        <div 
          className="absolute -bottom-[15%] -left-[15%] w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
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
          {/* Ligne décorative centrée */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Qualifications
            </span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Certifications
            <br />
            <span className="text-accent">& formations</span>
          </h2>
          
          <p className="text-lg text-muted mt-6 max-w-2xl mx-auto">
            Un parcours de formation continue pour maintenir l'excellence en pilotage de projets.
          </p>
        </motion.div>

        {/* ==========================================
            MAIN GRID — Certifications & Formations
            ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {formations.map((item, index) => {
            const typeConfig = getTypeConfig(item.type)
            const TypeIcon = typeConfig.icon
            
            return (
              <motion.div
                key={item.id}
                variants={staggerCard}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                {/* ===== Carte glass-strong pour les certifs, glass pour le reste ===== */}
                <div className={`relative rounded-2xl p-7 h-full transition-all duration-300 ${
                  item.type === 'certification' 
                    ? 'glass-strong border-accent/20' 
                    : 'glass hover:border-accent/20'
                }`}>
                  
                  {/* Badge type — Flottant en haut */}
                  <div className={`absolute -top-3.5 left-6 px-4 py-1.5 ${typeConfig.bgBadge} ${typeConfig.badgeColor} rounded-full text-xs font-semibold uppercase tracking-wider border ${typeConfig.borderBadge} flex items-center gap-1.5 backdrop-blur-md`}>
                    <TypeIcon className="w-3.5 h-3.5" />
                    {typeConfig.label}
                  </div>

                  <div className="flex items-start gap-4 mt-2">
                    {/* Icône émoji */}
                    <div className="text-4xl shrink-0">{item.icon}</div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Titre et année */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                          {item.title}
                        </h3>
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </span>
                      </div>

                      {/* Organisme */}
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 className="w-4 h-4 text-muted shrink-0" />
                        <span className="text-muted text-sm font-medium truncate">{item.issuer}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted/80 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Badge de vérification — Uniquement pour les certifications */}
                      {item.verified && (
                        <div className="flex items-center gap-2 text-xs text-green-badge">
                          <Sparkles className="w-3 h-3" />
                          <span>Certification vérifiée</span>
                          <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ==========================================
            LANGUES — Section dédiée
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-10"
        >
          {/* En-tête langues */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
              <Globe className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Langues</h3>
              <p className="text-sm text-muted">Communication internationale</p>
            </div>
          </div>

          {/* Grille des langues */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languageDetails.map((lang, index) => (
              <motion.div
                key={index}
                variants={staggerCard}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* Drapeau + Nom + Niveau */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{lang.flag}</span>
                    <span className="font-semibold text-foreground">{lang.language}</span>
                  </div>
                  <span className="text-sm font-semibold text-accent">{lang.level}</span>
                </div>
                
                {/* Barre de progression modernisée */}
                <div className="relative h-2 bg-surface rounded-full overflow-hidden border border-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: 'easeOut' }}
                    className="absolute inset-y-0 left-0 rounded-full bg-accent"
                  >
                    {/* Micro-glow sur la barre */}
                    <div className="absolute inset-0 rounded-full bg-accent opacity-50 blur-sm" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ==========================================
            AUTRES COMPÉTENCES — Mini cartes
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'PRINCE2® Practitioner', value: 'Certifié 2020' },
            { label: 'Atlassian Suite', value: 'Maîtrise avancée' },
            { label: 'Agile / Scrum', value: 'Maîtrise avancée' },
            { label: 'Cycle en V', value: 'Expert' },
          ].map((item, index) => (
            <div key={index} className="glass rounded-xl p-4 text-center card-3d cursor-default">
              <p className="text-xs text-muted uppercase tracking-wider mb-1.5">{item.label}</p>
              <p className="text-sm font-semibold text-accent">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* ==========================================
            NOTE DE BAS — Discrète
            ========================================== */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass inline-block rounded-full px-6 py-3">
            <p className="text-sm text-muted">
              Formation continue • Veille méthodologique • Amélioration continue des pratiques
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}