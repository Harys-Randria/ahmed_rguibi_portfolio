'use client'

import { useState, useEffect } from 'react'
import { portfolioData } from '@/lib/portfolio-data'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  const filteredNavLinks = portfolioData.navLinks.filter(link => link.id !== 'contact')

  // Ajout de la propriété "invert" pour les logos sombres
  const externalLinks = [
    { name: 'Malt', url: 'https://www.malt.fr/profile/ahmedrguibi', icon: '/malt.png', invert: false },
    { name: 'Collective', url: 'https://www.collective.work/profile/ahmed-rguibi', icon: '/collective.png', invert: true },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmed-rguibi', icon: '/linkedin.png', invert: false },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = filteredNavLinks.map(l => l.id)
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-3 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* LOGO */}
        <button onClick={() => scrollTo('accueil')} className="text-lg tracking-tight flex items-center">
          <span className="text-white/70 italic font-light">{portfolioData.name.split(' ')[0]} </span>
          <span className="text-white font-black ml-1 italic uppercase">{portfolioData.name.split(' ')[1]}</span>
        </button>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-1">
          {filteredNavLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-4 py-2 text-sm rounded-xl transition-all duration-200"
                style={{
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.65)',
                  background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        {/* RIGHT: icons + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 mr-1">
            {externalLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label={link.name}
              >
                <div className="relative w-5 h-5">
                  <Image 
                    src={link.icon} 
                    alt={link.name} 
                    fill 
                    className={`object-contain ${link.invert ? 'invert' : ''}`} 
                  />
                </div>
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
              boxShadow: '0 0 20px rgba(37,99,235,0.4)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500" style={{ boxShadow: '0 0 6px #ef4444' }} />
            Prendre rendez-vous
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/70 hover:text-white">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 max-w-[1400px] mx-auto rounded-2xl p-4 space-y-2"
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {filteredNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-4 py-3 rounded-xl text-sm transition"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                {link.label}
              </button>
            ))}

            <div className="px-4 py-2">
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Retrouvez-moi sur
              </p>
              <div className="flex gap-3">
                {externalLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                    aria-label={link.name}
                  >
                    <div className="relative w-6 h-6">
                      <Image 
                        src={link.icon} 
                        alt={link.name} 
                        fill 
                        className={`object-contain ${link.invert ? 'invert' : ''}`} 
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold"
              style={{ background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' }}
            >
              <span className="w-2 h-2 bg-red-500 rounded-full" style={{ boxShadow: '0 0 6px #ef4444' }} />
              Prendre rendez-vous
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}