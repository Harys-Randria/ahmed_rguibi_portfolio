'use client'

import { useState, useEffect } from 'react'
import { portfolioData } from '@/lib/portfolio-data'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Effet de scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  // Filtrer les liens pour enlever "Contact"
  const filteredNavLinks = portfolioData.navLinks.filter(link => link.id !== 'contact')

  // Liens externes avec icônes
  const externalLinks = [
    {
      name: 'Malt',
      url: 'https://www.malt.fr/profile/ahmedrguibi',
      icon: '/malt.png',
    },
    {
      name: 'Collective',
      url: 'https://www.collective.work/profile/ahmed-rguibi',
      icon: '/collective.png',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-rguibi',
      icon: '/linkedin.png',
    },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm' 
          : 'bg-white/80 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => scrollToSection('accueil')}
          className="group"
        >
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#3D2DB5] to-[#7B6FFF] bg-clip-text text-transparent transition-all duration-300">
            {portfolioData.name}
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {filteredNavLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative text-gray-600 hover:text-[#3D2DB5] transition-colors font-medium text-sm group py-2"
            >
              {link.label}
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-[#7B6FFF] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Desktop - External Links + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Icônes sociales */}
          <div className="flex items-center gap-2 mr-2">
            {externalLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 bg-gray-50 hover:bg-white rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-[#7B6FFF] hover:shadow-sm"
                aria-label={link.name}
              >
                <div className="relative w-5 h-5">
                  <Image
                    src={link.icon}
                    alt={link.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bouton Rendez-vous */}
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 bg-gradient-to-r from-[#3D2DB5] to-[#3D2DB5] hover:to-[#7B6FFF] text-white rounded-xl font-medium text-sm transition-all duration-300 shadow-md shadow-[#3D2DB5]/20 hover:shadow-lg hover:shadow-[#7B6FFF]/30"
          >
            Prendre rendez-vous
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-[#3D2DB5] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-6 py-6 space-y-3">
              {/* Navigation Links */}
              {filteredNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[#3D2DB5] hover:bg-[#3D2DB5]/5 rounded-xl transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}

              {/* Séparateur */}
              <div className="my-4 border-t border-gray-100" />

              {/* External Links - Mobile */}
              <div className="px-4 py-2">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                  Retrouvez-moi sur
                </p>
                <div className="flex gap-3">
                  {externalLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200"
                      aria-label={link.name}
                    >
                      <div className="relative w-6 h-6">
                        <Image
                          src={link.icon}
                          alt={link.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Button - Mobile */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-4 py-3.5 mt-4 bg-gradient-to-r from-[#3D2DB5] to-[#3D2DB5] text-white rounded-xl font-medium transition-all duration-300"
              >
                Prendre rendez-vous
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}