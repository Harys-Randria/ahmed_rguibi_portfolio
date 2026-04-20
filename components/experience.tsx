'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin, CheckCircle2 } from 'lucide-react'

export function Experience() {
  const { experiences } = portfolioData
  const [expandedId, setExpandedId] = useState<number | null>(1) // Première expérience ouverte par défaut

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section
      id="experience"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px]"
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
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#7B6FFF]" />
            <span className="text-sm font-medium uppercase tracking-wider text-[#7B6FFF]">
              Parcours
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a2e] tracking-tight leading-[1.1] max-w-4xl">
            16 ans d'expérience
            <br />
            <span className="text-[#3D2DB5]">au service de projets critiques</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale de timeline */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7B6FFF] via-[#3D2DB5] to-transparent opacity-20" />

          <div className="space-y-0">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 py-8 md:py-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#7B6FFF] border-4 border-white shadow-lg z-10" />

                  {/* Date - Mobile */}
                  <div className="md:hidden flex items-center gap-2 text-sm font-medium text-[#7B6FFF] mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Contenu */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    {/* En-tête de l'expérience */}
                    <div 
                      onClick={() => toggleExpand(exp.id)}
                      className="group cursor-pointer"
                    >
                      {/* Type d'entreprise */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium uppercase tracking-wider text-[#7B6FFF] bg-[#7B6FFF]/10 px-3 py-1 rounded-full">
                          {exp.companyType}
                        </span>
                      </div>

                      {/* Rôle et entreprise */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] group-hover:text-[#3D2DB5] transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Briefcase className="w-4 h-4 text-[#7B6FFF]" />
                            <p className="text-lg text-gray-600 font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        {/* Date - Desktop */}
                        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-[#7B6FFF] whitespace-nowrap">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>

                        {/* Toggle icône */}
                        <button className="md:hidden p-2 rounded-full hover:bg-[#3D2DB5]/5 transition-colors">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-[#7B6FFF]" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#7B6FFF]" />
                          )}
                        </button>
                      </div>

                      {/* Description courte */}
                      <p className="text-gray-600 mt-3 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tags.slice(0, 4).map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium text-[#3D2DB5] bg-[#3D2DB5]/5 rounded-full border border-[#3D2DB5]/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {exp.tags.length > 4 && (
                          <span className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-gray-50 rounded-full">
                            +{exp.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Détails expandables */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-gray-100">
                            <p className="text-sm uppercase tracking-wider text-gray-400 font-medium mb-4">
                              Réalisations clés
                            </p>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-[#7B6FFF] flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-600">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>

                            {/* Tous les tags */}
                            <div className="flex flex-wrap gap-2 mt-6">
                              {exp.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1.5 text-xs font-medium text-[#3D2DB5] bg-[#3D2DB5]/5 rounded-full border border-[#3D2DB5]/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bouton expand - Desktop */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="hidden md:flex items-center gap-2 mt-4 text-sm font-medium text-[#7B6FFF] hover:text-[#3D2DB5] transition-colors"
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

                  {/* Espace vide pour l'alignement timeline */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Note de bas de section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-400">
            8 expériences majeures • Secteurs Banque, Assurance, Services, Retail
          </p>
        </motion.div>
      </div>
    </section>
  )
}