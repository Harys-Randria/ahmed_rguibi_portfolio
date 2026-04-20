'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion } from 'framer-motion'
import { useState } from 'react'
import * as LucideIcons from 'lucide-react'

export function Skills() {
  const { skills } = portfolioData
  const [activeCategory, setActiveCategory] = useState(0)

  // Map icon names to components
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as Record<string, any>)[iconName]
    if (!IconComponent) return <LucideIcons.Code size={20} />
    return <IconComponent size={20} />
  }

  return (
    <section
      id="competences"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 -right-[20%] w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7B6FFF 0%, #3D2DB5 50%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
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
              Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a2e] tracking-tight leading-[1.1] max-w-4xl">
            Compétences techniques
            <br />
            <span className="text-[#3D2DB5]">& méthodologiques</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {skills.categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'text-white'
                  : 'text-gray-600 hover:text-[#3D2DB5] bg-gray-50 hover:bg-[#3D2DB5]/5'
              }`}
            >
              {/* Active background */}
              {activeCategory === index && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #3D2DB5 0%, #7B6FFF 100%)' }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {getIcon(category.icon)}
                {category.name}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid - Bento Style */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          
          {/* LEFT - Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white to-[#3D2DB5]/[0.02] rounded-3xl p-8 md:p-10 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#7B6FFF]/10 flex items-center justify-center">
                {getIcon(skills.categories[activeCategory].icon)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a1a2e]">
                  {skills.categories[activeCategory].name}
                </h3>
                <p className="text-sm text-gray-500">
                  {skills.categories[activeCategory].items.length} compétences
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {skills.categories[activeCategory].items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#7B6FFF]/5 transition-colors duration-200 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7B6FFF] group-hover:scale-125 transition-transform" />
                  <span className="text-gray-700 text-sm font-medium group-hover:text-[#3D2DB5] transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Technical Domains & Highlights */}
          <div className="space-y-8">
            
            {/* Domaines techniques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-gray-100"
            >
              <h4 className="text-sm uppercase tracking-wider text-gray-400 font-medium mb-6">
                Domaines techniques
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.technicalDomains.map((domain, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-br from-[#3D2DB5]/5 to-[#7B6FFF]/5 text-[#3D2DB5] rounded-xl border border-[#3D2DB5]/10 hover:border-[#7B6FFF]/30 hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {domain}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Méthodologies - Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #3D2DB5 0%, #1a1a2e 100%)' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B6FFF] rounded-full opacity-20 blur-3xl" />
              
              <h4 className="text-sm uppercase tracking-wider text-[#7B6FFF] font-medium mb-4">
                Méthodologies maîtrisées
              </h4>
              
              <div className="space-y-4">
                {skills.categories.find(c => c.name === 'Méthodologies')?.items.map((method, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <LucideIcons.CheckCircle2 className="w-5 h-5 text-[#7B6FFF]" />
                    <span className="text-white font-medium">{method}</span>
                  </div>
                ))}
              </div>

              {/* Badge M.A.A.I.A.N. */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                  <LucideIcons.Zap className="w-4 h-4 text-[#7B6FFF]" />
                  <span className="text-white text-sm font-medium">Méthode M.A.A.I.A.N.</span>
                  <span className="text-[#7B6FFF] text-xs">Signature</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 py-6 px-8 bg-gray-50 rounded-2xl"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-[#3D2DB5]">
              {skills.categories.reduce((acc, cat) => acc + cat.items.length, 0)}
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Compétences</p>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="text-center">
            <p className="text-3xl font-bold text-[#3D2DB5]">{skills.categories.length}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Catégories</p>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="text-center">
            <p className="text-3xl font-bold text-[#3D2DB5]">{skills.technicalDomains.length}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Domaines techniques</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}