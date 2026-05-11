'use client'

import { portfolioData } from '@/lib/portfolio-data'
import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Mail, MapPin, Phone, Star } from 'lucide-react'

// CORRECTION : Typer explicitement en Variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.2 
    } 
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    } 
  },
}

export function Hero() {
  const { hero, contact, languages, certifications } = portfolioData

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center px-6 pt-28 overflow-hidden"
    >
      {/* Diagonal light beam */}
      <div className="absolute pointer-events-none" style={{ top: '-10%', left: '8%', width: '2px', height: '75%', background: 'linear-gradient(to bottom, transparent 0%, rgba(180,200,255,0.6) 40%, rgba(255,255,255,0.7) 55%, rgba(180,200,255,0.4) 70%, transparent 100%)', transform: 'rotate(22deg)', transformOrigin: 'top center', filter: 'blur(1.5px)', opacity: 0.35 }} />
      <div className="absolute pointer-events-none" style={{ top: '-10%', left: '6%', width: '80px', height: '65%', background: 'linear-gradient(to bottom, transparent, rgba(100,130,255,0.08), transparent)', transform: 'rotate(22deg)', transformOrigin: 'top center', filter: 'blur(20px)' }} />

      {/* Right radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle at 60% 50%, rgba(37,99,235,0.3) 0%, transparent 65%)', filter: 'blur(30px)' }} />

      <div className="max-w-[1300px] mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">

        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-7">

          {/* Badges */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <div className="neubrutal px-5 py-2 rounded-xl text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-badge" style={{ boxShadow: '0 0 8px #22c55e' }} />
              {certifications[0].name}
            </div>
          </motion.div>

          {/* Title */}
          <motion.div variants={item} className="space-y-1">
            <p className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-tight text-foreground/90">
              {hero.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={item} className="flex items-start gap-3">
            <div className="glass w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">
              <ArrowRight className="w-4 h-4 text-accent" />
            </div>
            <p className="text-base lg:text-lg text-muted leading-relaxed">
              {hero.description}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="flex gap-6 py-2">
            {hero.stats.map((stat, i) => (
              <div key={i} className="glass rounded-2xl px-5 py-3 text-center min-w-[100px]">
                <p className="text-4xl md:text-5xl font-bold tracking-tight text-accent">{stat.value}</p>
                <p className="text-xs uppercase tracking-wider mt-1 text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Quick contact */}
          <motion.div variants={item} className="flex flex-wrap gap-6 text-sm text-muted">
            <div className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"><Mail className="w-4 h-4" />{contact.email}</div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4" />{contact.phone}</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{contact.address}</div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => scrollTo('experience')} 
              className="neubrutal flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-foreground font-semibold text-sm cursor-pointer"
            >
              {hero.buttons[0].label}
              <span className="w-2 h-2 rounded-full bg-red-dot animate-pulse" style={{ boxShadow: '0 0 6px #ef4444' }} />
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="glass-strong px-7 py-3.5 rounded-xl text-sm font-medium text-foreground/80 transition-all hover:text-foreground cursor-pointer"
            >
              {hero.buttons[1].label}
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: Photo */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }} 
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: 'rgba(59,130,246,0.25)', filter: 'blur(60px)', transform: 'scale(1.15)' }} />

          <div className="border-gradient relative w-[340px] h-[440px] lg:w-[370px] lg:h-[470px] rounded-3xl overflow-hidden">
            <Image 
              src={hero.imageUrl} 
              alt={portfolioData.name} 
              fill 
              className="object-cover object-top rounded-3xl" 
              priority 
              sizes="(max-width: 1024px) 340px, 370px" 
            />
            <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: 'linear-gradient(to top, #03050f 0%, transparent 100%)' }} />
          </div>

          {/* Floating cards */}
          <div className="absolute right-[-52px] top-1/2 -translate-y-1/2 flex flex-col gap-3">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.9 }} 
              className="neubrutal w-11 h-11 rounded-full flex items-center justify-center"
            >
              <Star className="w-5 h-5 text-accent fill-accent" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-accent/30 to-accent/50" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted/30">Scroll</span>
      </div>
    </section>
  )
}