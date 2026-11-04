import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Code2, 
  Layers, 
  Maximize2, 
  Globe, 
  Mail, 
  Terminal, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  ChevronDown 
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 'flower-bliss',
      category: 'e-commerce',
      title: 'Flower Bliss Couture',
      subtitle: 'Luxury E-Commerce Engineering',
      role: 'Lead Developer & Architect',
      impact: '+42% AOV | 99/100 Lighthouse Performance',
      tags: ['React', 'Vite', 'Tailwind', 'Stripe', 'AWS'],
      description: 'Ultra-fast luxury e-commerce experience crafted with bespoke micro-interactions, dark aesthetic architecture, and optimized checkout flow.'
    },
    {
      id: 'apex-digital',
      category: 'web-design',
      title: 'Apex Editorial System',
      subtitle: 'High-Fashion Digital Publication',
      role: 'Frontend Engineer',
      impact: '0.4s First Contentful Paint',
      tags: ['React', 'Custom Motion', 'WebGL', 'Tailwind'],
      description: 'Editorial web design platform engineered for immersive storytelling, smooth parallax typography, and refined digital presence.'
    },
    {
      id: 'chateaubrillant',
      category: 'e-commerce',
      title: 'Maison Noir Private',
      subtitle: 'Bespoke Atelier Storefront',
      role: 'Full Stack Frontend',
      impact: 'Zero Layout Shift | 3.2x Conversion Rate',
      tags: ['Vite', 'Shopify Storefront API', 'Tailwind CSS'],
      description: 'Custom headless e-commerce storefront tailored for high-end luxury client acquisition and VIP product drops.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#0f0f12] text-[#f4f4f6] min-h-screen font-sans selection:bg-[#c9a45c] selection:text-[#0f0f12]">
      
      {/* Editorial Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-[#0f0f12]/90 backdrop-blur-md border-[#c9a45c]/20 py-4' : 'bg-transparent border-transparent py-7'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="group flex items-center gap-3 text-lg tracking-widest font-serif">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c9a45c] group-hover:scale-150 transition-transform duration-300"></span>
            <span className="text-[#f4f4f6] font-light uppercase tracking-[0.25em] group-hover:text-[#c9a45c] transition-colors">
              Henry Obanla
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-[#a0a0ab]">
            <a href="#about" className="hover:text-[#c9a45c] transition-colors">About</a>
            <a href="#work" className="hover:text-[#c9a45c] transition-colors">Selected Work</a>
            <a href="#services" className="hover:text-[#c9a45c] transition-colors">Capabilities</a>
            <a href="#contact" className="hover:text-[#c9a45c] transition-colors">Contact</a>
          </div>

          <a 
            href="#contact"
            className="px-5 py-2.5 text-xs uppercase tracking-[0.2em] border border-[#c9a45c]/40 text-[#c9a45c] hover:bg-[#c9a45c] hover:text-[#0f0f12] transition-all duration-300"
          >
            Inquire
          </a>
        </div>
      </nav>

      {/* Hero Section - Editorial Typography */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 border-b border-[#c9a45c]/15">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#c9a45c]/30 text-[#c9a45c] text-xs uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Frontend Architect & Web Designer</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal leading-[1.1] tracking-tight text-[#f4f4f6]">
              Crafting High-Conversion <br />
              <span className="italic font-light text-[#c9a45c]">Digital Luxury</span> Experiences.
            </h1>

            <p className="text-base sm:text-lg text-[#a0a0ab] font-light max-w-2xl leading-relaxed">
              Specializing in bespoke React architecture, fluid micro-interactions, and conversion-focused UI engineering for luxury brands and modern digital enterprises.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#work"
                className="px-8 py-4 bg-[#c9a45c] text-[#0f0f12] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#d8b46e] transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a 
                href="mailto:henryobanladesign@gmail.com"
                className="px-8 py-4 border border-[#c9a45c]/30 text-[#f4f4f6] text-xs uppercase tracking-[0.2em] hover:border-[#c9a45c] hover:text-[#c9a45c] transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#c9a45c]" />
                <span>Direct Inquiry</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="lg:col-span-4 border-l border-[#c9a45c]/20 pl-6 lg:pl-8 space-y-6">
            <div>
              <p className="text-3xl font-serif text-[#c9a45c]">99/100</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#a0a0ab] mt-1">Lighthouse Speed Standard</p>
            </div>
            <div className="border-t border-[#c9a45c]/10 pt-4">
              <p className="text-3xl font-serif text-[#f4f4f6]">100%</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#a0a0ab] mt-1">Bespoke Custom Code</p>
            </div>
            <div className="border-t border-[#c9a45c]/10 pt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c9a45c]">Core Stack</p>
              <p className="text-sm text-[#a0a0ab] font-light mt-1">React • Vite • Tailwind • AWS Amplify</p>
            </div>
          </div>

        </div>

        <a href="#work" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a45c]/60 hover:text-[#c9a45c] transition-colors animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* Filterable Works Section */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#c9a45c]/20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a45c]">Portfolio Showcase</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#f4f4f6] mt-2">Selected Works</h2>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
            {['all', 'e-commerce', 'web-design'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'border-[#c9a45c] bg-[#c9a45c]/10 text-[#c9a45c]' 
                    : 'border-[#c9a45c]/20 text-[#a0a0ab] hover:border-[#c9a45c]/50'
                }`}
              >
                {filter.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-[#141419] border border-[#c9a45c]/15 hover:border-[#c9a45c]/50 transition-all duration-500 flex flex-col justify-between p-8"
            >
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#c9a45c] mb-6">
                  <span>{project.category}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                <h3 className="text-2xl font-serif text-[#f4f4f6] group-hover:text-[#c9a45c] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-[#a0a0ab] mt-1 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm text-[#a0a0ab] font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="py-3 px-4 bg-[#0f0f12] border-l-2 border-[#c9a45c] text-xs text-[#c9a45c] font-mono mb-6">
                  {project.impact}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#c9a45c]/10">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-[0.15em] px-2 py-1 bg-[#1a1a22] text-[#a0a0ab]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="services" className="py-24 bg-[#141419] border-y border-[#c9a45c]/15 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a45c]">Engineering & Design</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#f4f4f6] mt-2">Core Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Code2 className="w-8 h-8 text-[#c9a45c]" />
              <h3 className="text-xl font-serif text-[#f4f4f6]">Frontend Engineering</h3>
              <p className="text-sm text-[#a0a0ab] font-light leading-relaxed">
                Building scalable, component-driven interfaces using React, Vite, Node.js, and modern CSS systems. Optimized for performance and responsiveness.
              </p>
            </div>

            <div className="space-y-4">
              <Layers className="w-8 h-8 text-[#c9a45c]" />
              <h3 className="text-xl font-serif text-[#f4f4f6]">Luxury Web Design</h3>
              <p className="text-sm text-[#a0a0ab] font-light leading-relaxed">
                Creating minimalist, editorial visual hierarchies tailored for luxury brands, fashion ateliers, and boutique agencies seeking distinction.
              </p>
            </div>

            <div className="space-y-4">
              <Globe className="w-8 h-8 text-[#c9a45c]" />
              <h3 className="text-xl font-serif text-[#f4f4f6]">E-Commerce Optimization</h3>
              <p className="text-sm text-[#a0a0ab] font-light leading-relaxed">
                Engineering high-speed online storefronts built to reduce bounce rates, elevate average order value (AOV), and convert visitors seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c9a45c]">Start A Project</span>
        <h2 className="text-4xl sm:text-6xl font-serif font-normal text-[#f4f4f6] mt-4 mb-8">
          Let’s Build Something <span className="italic text-[#c9a45c]">Extraordinary</span>.
        </h2>

        <div className="inline-block p-1 border border-[#c9a45c]/30 mb-12">
          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="block px-8 py-4 bg-[#c9a45c] text-[#0f0f12] text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#d8b46e] transition-colors"
          >
            henryobanladesign@gmail.com
          </a>
        </div>

        <div className="pt-12 border-t border-[#c9a45c]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a0a0ab] gap-4">
          <p>© {new Date().getFullYear()} Henry Obanla. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-[0.2em]">
            <a href="https://github.com/brooklynzeroo" target="_blank" rel="noreferrer" className="hover:text-[#c9a45c] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[#c9a45c] transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
