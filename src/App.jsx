import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  Command, 
  Mail, 
  Github, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('featured');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const works = [
    {
      num: '01',
      title: 'Flower Bliss Couture',
      category: 'E-Commerce Engineering',
      desc: 'Bespoke headless architecture engineered for luxury retail. Features ultra-smooth micro-interactions, sub-second page transitions, and an optimized conversion pipeline.',
      metrics: '99/100 Lighthouse • +42% AOV',
      stack: ['React', 'Vite', 'Tailwind', 'Stripe API']
    },
    {
      num: '02',
      title: 'Aethelgard Atelier',
      category: 'Design System & UI',
      desc: 'An immersive editorial digital publication platform for high-end fashion houses. Built with custom spatial typography and fluid kinetic scrolling layouts.',
      metrics: 'Zero Layout Shift • 60 FPS Motion',
      stack: ['React', 'Tailwind CSS', 'Custom WebGL']
    },
    {
      num: '03',
      title: 'Vanguard Protocol',
      category: 'Fintech & Dashboard',
      desc: 'High-security financial intelligence terminal featuring real-time data visualization, encrypted client portals, and minimalist obsidian dark-mode aesthetics.',
      metrics: '< 0.3s Latency • SOC2 Aligned UI',
      stack: ['Vite', 'Node.js', 'Tailwind', 'Chart.js']
    }
  ];

  return (
    <div className="bg-[#0f0f12] text-[#f4f4f6] min-h-screen font-sans selection:bg-[#c9a45c] selection:text-[#0f0f12] relative overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#c9a45c]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[60%] right-10 w-[400px] h-[400px] bg-[#c9a45c]/3 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Floating Minimalist Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-[#0f0f12]/90 backdrop-blur-xl border-[#c9a45c]/20 py-4' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-2 h-2 rounded-full bg-[#c9a45c] group-hover:scale-150 transition-transform duration-300"></span>
            <span className="font-serif tracking-[0.25em] uppercase text-xs text-[#f4f4f6]">
              Henry Obanla <span className="text-[#c9a45c]">/ Studio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-[#a0a0ab]">
            <a href="#work" className="hover:text-[#c9a45c] transition-colors">Works</a>
            <a href="#expertise" className="hover:text-[#c9a45c] transition-colors">Expertise</a>
            <a href="#manifesto" className="hover:text-[#c9a45c] transition-colors">Manifesto</a>
            <a href="#contact" className="hover:text-[#c9a45c] transition-colors">Contact</a>
          </nav>

          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] border border-[#c9a45c]/40 text-[#c9a45c] hover:bg-[#c9a45c] hover:text-[#0f0f12] transition-all duration-300"
          >
            Direct Inquiry
          </a>
        </div>
      </header>

      {/* Hero Section - Asymmetrical Editorial Layout */}
      <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#141419] border border-[#c9a45c]/30 text-[#c9a45c] text-[10px] uppercase tracking-[0.3em]">
              <Sparkles className="w-3 h-3" />
              <span>Frontend Architect & UI Designer</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light leading-[1.05] tracking-tight text-[#f4f4f6]">
              Engineering <br />
              <span className="italic text-[#c9a45c] font-normal">Digital Luxury.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#a0a0ab] font-light max-w-xl leading-relaxed">
              Crafting high-speed, conversion-optimized web applications and minimalist digital experiences for forward-thinking brands.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a 
                href="#work"
                className="px-7 py-4 bg-[#c9a45c] text-[#0f0f12] text-xs font-medium uppercase tracking-[0.25em] hover:bg-[#d8b46e] transition-all duration-300 flex items-center gap-3"
              >
                <span>Explore Works</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a 
                href="https://github.com/brooklynzeroo" 
                target="_blank" 
                rel="noreferrer"
                className="px-7 py-4 border border-[#c9a45c]/30 text-[#f4f4f6] text-xs uppercase tracking-[0.25em] hover:border-[#c9a45c] hover:text-[#c9a45c] transition-all duration-300 flex items-center gap-3"
              >
                <Github className="w-4 h-4 text-[#c9a45c]" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Right Side Aesthetic Data Terminal Box */}
          <div className="lg:col-span-4 bg-[#141419]/80 backdrop-blur-md border border-[#c9a45c]/20 p-8 relative group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent"></div>
            
            <div className="flex items-center justify-between pb-6 border-b border-[#c9a45c]/10 text-xs uppercase tracking-[0.2em] text-[#c9a45c]">
              <span>System Specs</span>
              <Terminal className="w-4 h-4" />
            </div>

            <div className="space-y-6 pt-6 text-xs">
              <div>
                <span className="text-[#a0a0ab] uppercase tracking-[0.15em] block mb-1">Primary Stack</span>
                <p className="text-[#f4f4f6] font-mono tracking-wider">React • Vite • Tailwind • AWS</p>
              </div>

              <div>
                <span className="text-[#a0a0ab] uppercase tracking-[0.15em] block mb-1">Performance Standard</span>
                <p className="text-[#c9a45c] font-mono tracking-wider">99/100 Lighthouse Core Vitals</p>
              </div>

              <div>
                <span className="text-[#a0a0ab] uppercase tracking-[0.15em] block mb-1">Current Base</span>
                <p className="text-[#f4f4f6] font-mono tracking-wider">Global / Remote Atelier</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#c9a45c]/10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#a0a0ab]">
              <span>Status: Available</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
          </div>

        </div>
      </section>

      {/* Selected Works - Architectural Cards */}
      <section id="work" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#c9a45c]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a45c]">Curated Archive</span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#f4f4f6] mt-2">Selected Works</h2>
          </div>
          <p className="text-xs text-[#a0a0ab] uppercase tracking-[0.2em] max-w-xs">
            High-performance web applications built for scale and aesthetic precision.
          </p>
        </div>

        <div className="space-y-6">
          {works.map((work) => (
            <div 
              key={work.num}
              className="group bg-[#141419]/60 hover:bg-[#141419] border border-[#c9a45c]/15 hover:border-[#c9a45c]/50 transition-all duration-500 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-2 text-2xl font-serif text-[#c9a45c]/60 group-hover:text-[#c9a45c] transition-colors">
                {work.num}
              </div>

              <div className="lg:col-span-6 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a45c]">{work.category}</span>
                <h3 className="text-3xl font-serif text-[#f4f4f6] group-hover:translate-x-2 transition-transform duration-300">
                  {work.title}
                </h3>
                <p className="text-sm text-[#a0a0ab] font-light leading-relaxed">
                  {work.desc}
                </p>
              </div>

              <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-[#c9a45c]/15 lg:pl-8">
                <div className="text-xs font-mono text-[#c9a45c]">
                  {work.metrics}
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.stack.map((tech, idx) => (
                    <span key={idx} className="text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 bg-[#1f1f28] text-[#a0a0ab]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise & Architectural Philosophy */}
      <section id="expertise" className="py-28 bg-[#141419]/40 border-y border-[#c9a45c]/15 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a45c]">Capabilities</span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#f4f4f6] mt-2">Technical Mastery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#c9a45c]/15 bg-[#0f0f12] space-y-4">
              <Cpu className="w-6 h-6 text-[#c9a45c]" />
              <h3 className="text-xl font-serif text-[#f4f4f6]">Frontend Architecture</h3>
              <p className="text-xs text-[#a0a0ab] font-light leading-relaxed">
                Component-driven development in React & Vite with bulletproof state management, modular hooks, and flawless responsive execution.
              </p>
            </div>

            <div className="p-8 border border-[#c9a45c]/15 bg-[#0f0f12] space-y-4">
              <Layers className="w-6 h-6 text-[#c9a45c]" />
              <h3 className="text-xl font-serif text-[#f4f4f6]">UI/UX Design Systems</h3>
              <p className="text-xs text-[#a0a0ab] font-light leading-relaxed">
                Minimalist typography, dark-mode mastery, and bespoke design tokens calibrated for luxury brands and high-end digital products.
              </p>
            </div>

            <div className="p-8 border border-[#c9a45c]/15 bg-[#0f0f12] space-y-4">
              <Command className="w-6 h-6 text-[#c9a45c]" />
              <h3 className="text-xl font-serif text-[#f4f4f6]">Cloud Deployment</h3>
              <p className="text-xs text-[#a0a0ab] font-light leading-relaxed">
                CI/CD pipeline automation via AWS Amplify and GitHub, ensuring continuous delivery with zero downtime and instant cache invalidation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Call to Action */}
      <footer id="contact" className="py-28 px-6 md:px-12 max-w-7xl mx-auto text-center relative">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a45c]">Initiate Collaboration</span>
        
        <h2 className="text-4xl sm:text-7xl font-serif font-light text-[#f4f4f6] mt-4 mb-10">
          Let’s Build Something <br />
          <span className="italic text-[#c9a45c]">Extraordinary.</span>
        </h2>

        <div className="inline-block p-1 border border-[#c9a45c]/30 mb-16">
          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="px-8 py-4 bg-[#c9a45c] text-[#0f0f12] text-xs font-medium uppercase tracking-[0.25em] hover:bg-[#d8b46e] transition-all duration-300 block"
          >
            henryobanladesign@gmail.com
          </a>
        </div>

        <div className="pt-12 border-t border-[#c9a45c]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a0a0ab] gap-6">
          <p>© {new Date().getFullYear()} Henry Obanla. All rights reserved.</p>
          <div className="flex gap-8 uppercase tracking-[0.2em] text-[10px]">
            <a href="https://github.com/brooklynzeroo" target="_blank" rel="noreferrer" className="hover:text-[#c9a45c] transition-colors">GitHub</a>
            <a href="mailto:henryobanladesign@gmail.com" className="hover:text-[#c9a45c] transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
