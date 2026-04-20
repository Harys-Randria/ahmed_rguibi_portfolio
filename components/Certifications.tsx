'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, GraduationCap, BookOpen, Building2 } from 'lucide-react'
import Image from 'next/image'

export function Certifications() {
  const { certifications, languages } = portfolioData

  // Formations complémentaires (issues du CV)
  const formations = [
    {
      id: 1,
      title: 'PRINCE2 Foundation & Practitioner',
      issuer: 'PeopleCert',
      year: '2020',
      description: 'Certification en gestion de projet selon la méthodologie PRINCE2, reconnue internationalement.',
      icon: '🏆',
      type: 'certification',
    },
    {
      id: 2,
      title: 'Jira / Confluence / Jira Service Management',
      issuer: 'Atlassian',
      year: '2024',
      description: 'Certification sur la suite Atlassian pour le pilotage de projets, la collaboration et la gestion de services.',
      icon: '🛠️',
      type: 'certification',
    },
    {
      id: 3,
      title: 'Modules CNAM en développement logiciel',
      issuer: 'CNAM + ETNA',
      year: '2016',
      description: 'Formation intensive en développement logiciel et architecture des systèmes d\'information.',
      icon: '💻',
      type: 'formation',
    },
    {
      id: 4,
      title: 'Master 2 Management et Stratégies d\'Entreprise',
      issuer: 'ISEFAC',
      year: '2011',
      description: 'Formation en management stratégique, pilotage d\'entreprise et gestion de projets transverses.',
      icon: '🎓',
      type: 'diplome',
    },
  ]

  // Compétences linguistiques avec drapeaux
  const languageDetails = [
    { language: 'Français', level: 'Natif', flag: '🇫🇷', proficiency: 100 },
    { language: 'Anglais', level: 'Bilingue', flag: '🇬🇧', proficiency: 95 },
    { language: 'Arabe', level: 'Courant', flag: '🇲🇦', proficiency: 80 },
  ]

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'certification':
        return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', icon: Award }
      case 'formation':
        return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: BookOpen }
      case 'diplome':
        return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: GraduationCap }
      default:
        return { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200', icon: Award }
    }
  }

  return (
    <section
      id="certifications"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 -right-[20%] w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7B6FFF 0%, #3D2DB5 50%, transparent 100%)' }}
        />
        <div 
          className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[100px]"
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
              Qualifications
            </span>
            <div className="w-8 h-[2px] bg-[#7B6FFF]" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a2e] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Certifications
            <br />
            <span className="text-[#3D2DB5]">& formations</span>
          </h2>
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
            Un parcours de formation continue pour maintenir l'excellence en pilotage de projets.
          </p>
        </motion.div>

        {/* Main Grid - Certifications & Formations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {formations.map((item, index) => {
            const typeStyle = getTypeStyle(item.type)
            const TypeIcon = typeStyle.icon
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Badge type */}
                <div className={`absolute -top-3 left-6 px-4 py-1.5 ${typeStyle.bg} ${typeStyle.text} rounded-full text-xs font-semibold uppercase tracking-wider border ${typeStyle.border} flex items-center gap-1.5`}>
                  <TypeIcon className="w-3.5 h-3.5" />
                  {item.type}
                </div>

                <div className="flex items-start gap-4">
                  {/* Icône */}
                  <div className="text-4xl">{item.icon}</div>
                  
                  <div className="flex-1">
                    {/* Titre et année */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-[#1a1a2e] group-hover:text-[#3D2DB5] transition-colors">
                        {item.title}
                      </h3>
                      <span className="flex items-center gap-1.5 text-sm font-medium text-[#7B6FFF] bg-[#7B6FFF]/5 px-3 py-1 rounded-full whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </span>
                    </div>

                    {/* Organisme */}
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 font-medium">{item.issuer}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Badge de vérification */}
                    {item.type === 'certification' && (
                      <div className="flex items-center gap-2 text-xs text-emerald-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Certification vérifiée</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Langues Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-white to-[#3D2DB5]/[0.02] rounded-3xl p-8 md:p-10 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#7B6FFF]/10 flex items-center justify-center">
              <span className="text-2xl">🌍</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1a1a2e]">Langues</h3>
              <p className="text-sm text-gray-500">Communication internationale</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languageDetails.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{lang.flag}</span>
                    <span className="font-semibold text-gray-800">{lang.language}</span>
                  </div>
                  <span className="text-sm font-medium text-[#7B6FFF]">{lang.level}</span>
                </div>
                
                {/* Barre de progression */}
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #3D2DB5 0%, #7B6FFF 100%)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Autres compétences */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'PRINCE2® Practitioner', value: 'Certifié 2020' },
            { label: 'Atlassian Suite', value: 'Certifié 2024' },
            { label: 'Agile / Scrum', value: 'Maîtrise avancée' },
            { label: 'Cycle en V', value: 'Expert' },
          ].map((item, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-gray-50">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-[#3D2DB5]">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Note de bas de page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-400">
            Formation continue • Veille méthodologique • Amélioration continue des pratiques
          </p>
        </motion.div>
      </div>
    </section>
  )
}