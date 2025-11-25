import React, { useState } from 'react'
import Hero from './components/Hero'
import LabIntro from './components/LabIntro'
import Professor from './components/Professor'
import Projects from './components/Projects'
import Researchers from './components/Researchers'
import Publications from './components/Publications'
import Contact from './components/Contact'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <header className="py-4 md:py-6 container-wide flex justify-between items-center relative">
        <div className="text-lg font-bold">I-Turtle Lab</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500"></span>
          </a>
          <a href="#professor" className="hover:text-gray-900 relative group">
            Professor
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"></span>
          </a>
          <a href="#projects" className="hover:text-gray-900 relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500"></span>
          </a>
          <a href="#researchers" className="hover:text-gray-900 relative group">
            Researchers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500"></span>
          </a>
          <a href="#publications" className="hover:text-gray-900 relative group">
            Publications
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500"></span>
          </a>
          <a href="#contact" className="hover:text-gray-900 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 토글"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-gray-600 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        <nav className={`absolute top-full left-0 right-0 bg-white border-t border-gray-100 md:hidden shadow-lg ${isMenuOpen ? '' : 'hidden'}`}>
          <div className="container-wide py-4 space-y-4">
            <a href="#about" className="block py-3 px-4 text-gray-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#professor" className="block py-3 px-4 text-gray-600" onClick={() => setIsMenuOpen(false)}>Professor</a>
            <a href="#projects" className="block py-3 px-4 text-gray-600" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#researchers" className="block py-3 px-4 text-gray-600" onClick={() => setIsMenuOpen(false)}>Researchers</a>
            <a href="#publications" className="block py-3 px-4 text-gray-600" onClick={() => setIsMenuOpen(false)}>Publications</a>
            <a href="#contact" className="block py-3 px-4 text-gray-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />

        <section id="about" className="py-16 sm:py-20 md:py-24 container-wide">
          <LabIntro />
        </section>

        <section id="professor" className="py-16 sm:py-20 md:py-24 lg:py-28 container-wide">
          <Professor />
        </section>

        <section id="projects" className="py-14 sm:py-20 md:py-24 container-wide">
          <Projects />
        </section>

        <section id="researchers" className="py-14 sm:py-20 md:py-24 container-wide">
          <Researchers />
        </section>

        <section id="publications" className="py-14 sm:py-20 md:py-24 container-wide">
          <Publications />
        </section>

        <section id="contact" className="py-14 sm:py-20 md:py-24 container-wide">
          <Contact />
        </section>
      </main>

      <footer className="py-8 md:py-12 text-center text-xs sm:text-sm text-gray-400 border-t border-gray-100 mt-8">
        © 2025 I-Turtle Lab.
      </footer>
    </div>
  )
}
