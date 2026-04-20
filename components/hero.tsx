'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Mail, MapPin, Phone, Star } from 'lucide-react'
import { useRef } from 'react'

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const { hero, contact, languages, certifications } = portfolioData

  return (
    <section
      ref={containerRef}
      id="accueil"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Background Elements - Minimal et moderne */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orb */}
        <div 
          className="absolute -top-[30%] -right-[20%] w-[800px] h-[800px] rounded-full opacity-[0.08] blur-[120px]"
          style={{ background: `radial-gradient(circle, #7B6FFF 0%, #3D2DB5 50%, transparent 100%)` }}
        />
        <div 
          className="absolute -bottom-[30%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[100px]"
          style={{ background: `radial-gradient(circle, #3D2DB5 0%, #7B6FFF 50%, transparent 100%)` }}
        />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#3D2DB5 1px, transparent 1px), linear-gradient(90deg, #3D2DB5 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          
          {/* LEFT - Content */}
          <div className="space-y-8">
            
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#3D2DB5]/5 rounded-full border border-[#3D2DB5]/10"
            >
              <Star className="w-4 h-4 text-[#7B6FFF] fill-[#7B6FFF]" />
              <span className="text-sm font-medium text-[#3D2DB5]">
                {certifications[0].name}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#3D2DB5]/30" />
              <span className="text-sm text-[#3D2DB5]/60">
                + {certifications.length} certifications
              </span>
            </motion.div>

            {/* Main Heading - Impact maximal */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1a1a2e] leading-[1.1]"
              >
                {portfolioData.name.split('  ').map((word, i) => (
                  <span key={i} className="inline-block">
                    {word}
                    {i === 0 && <br className="md:hidden" />}
                    {i === 0 && ' '}
                  </span>
                ))}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  style={{ color: '#3D2DB5' }}
                >
                  {hero.subtitle}
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 font-light">
                  {hero.highlight}
                </p>
              </motion.div>
            </div>

            {/* Description - Clean */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 max-w-2xl leading-relaxed"
            >
              {hero.description}
            </motion.p>

            {/* Key Metrics - Bold numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-12 py-4"
            >
              {hero.stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-5xl md:text-6xl font-bold text-[#3D2DB5] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm uppercase tracking-wider text-gray-400 font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Quick Contact - Subtle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2 hover:text-[#3D2DB5] transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{contact.address}</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Bold */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <button
                onClick={() => scrollToSection('experience')}
                className="group relative px-8 py-4 bg-[#3D2DB5] text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#3D2DB5]/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {hero.buttons[0].label}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #7B6FFF 0%, #3D2DB5 100%)' }}
                />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 font-semibold text-[#3D2DB5] rounded-2xl border-2 border-[#3D2DB5]/20 hover:border-[#3D2DB5] hover:bg-[#3D2DB5]/5 transition-all duration-300"
              >
                {hero.buttons[1].label}
              </button>
            </motion.div>
          </div>

          {/* RIGHT - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                {/* Gradient ring */}
                <div 
                  className="absolute -inset-4 rounded-full opacity-70 blur-xl"
                  style={{ background: 'linear-gradient(135deg, #7B6FFF 0%, #3D2DB5 100%)' }}
                />
                
                {/* Image wrapper */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                  <Image
                    src={hero.imageUrl}
                    alt={portfolioData.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 350px, (max-width: 1024px) 450px, 500px"
                  />
                </div>

                {/* Floating card - Languages */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -left-6 md:-left-10 bottom-10 bg-white rounded-2xl px-5 py-3 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    {languages.map((lang, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-xl">{lang.flag}</span>
                        <div className="text-left">
                          <p className="text-xs font-semibold text-gray-800">{lang.language}</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">{lang.level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Floating card - PRINCE2 */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -right-4 top-10 bg-[#3D2DB5] rounded-2xl px-5 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#7B6FFF] fill-[#7B6FFF]" />
                    <span className="text-sm font-bold text-white">PRINCE2®</span>
                    <span className="text-xs text-[#7B6FFF] font-medium">Practitioner</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint - Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#3D2DB5]/30 to-[#3D2DB5]/50" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#3D2DB5]/40 font-medium">
              Scroll
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}