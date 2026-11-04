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
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

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
      desc: 'High-security financial intelligence terminal featuring real-time data visualization, encrypted client portals, and minimalist light-mode aesthetics.',
      metrics: '< 0.3s Latency • SOC2 Aligned UI',
      stack: ['Vite', 'Node.js', 'Tailwind', 'Chart.js']
    }
  ];

  return (
    <div className="bg-[#faf9f6] text-[#1a1a1a] min-h-screen font-sans selection:bg-[#d97757] selection:text-white relative overflow-x-hidden">
      
      {/* Floating Minimalist Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-[#faf9f6]/90 backdrop-blur-xl border-[#e5e5df] py-4 shadow-sm' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-2 h-2 rounded-full bg-[#d97757] group-hover:scale-150 transition-transform duration-300"></span>
            <span className="font-serif tracking-[0.2em] uppercase text-xs text-[#1a1a1a]">
              Henry Obanla <span className="text-[#d97757]">/ Studio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-[#666666]">
            <a href="#work" className="hover:text-[#d97757] transition-colors">Works</a>
            <a href="#expertise" className="hover:text-[#d97757] transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-[#d97757] transition-colors">Contact</a>
          </nav>

          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] border border-[#d97757] text-[#d97757] hover:bg-[#d97757] hover:text-white transition-all duration-300"
          >
            Direct Inquiry
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#f0eee6] border border-[#e5e5df] text-[#d97757] text-[10px] uppercase tracking-[0.3em]">
              <Sparkles className="w-3 h-3" />
              <span>Frontend Architect & UI Designer</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light leading-[1.05] tracking-tight text-[#1a1a1a]">
              Engineering <br />
              <span className="italic text-[#d97757] font-normal">Modern Digital Art.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#555555] font-light max-w-xl leading-relaxed">
              Crafting high-speed, conversion-optimized web applications and minimalist digital experiences with refined architectural precision.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a 
                href="#work"
                className="px-7 py-4 bg-[#1a1a1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.25em] hover:bg-[#d97757] transition-all duration-300 flex items-center gap-3"
              >
                <span>Explore Works</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a 
                href="https://github.com/brooklynzeroo" 
                target="_blank" 
                rel="noreferrer"
                className="px-7 py-4 border border-[#cccccc] text-[#1a1a1a] text-xs uppercase tracking-[0.25em] hover:border-[#1a1a1a] transition-all duration-300 flex items-center gap-3"
              >
                <Github className="w-4 h-4 text-[#1a1a1a]" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Right Side Tech Data Box */}
          <div className="lg:col-span-4 bg-[#f4f2ec] border border-[#e5e5df] p-8 relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d97757]"></div>
            
            <div className="flex items-center justify-between pb-6 border-b border-[#e5e5df] text-xs uppercase tracking-[0.2em] text-[#1a1a1a]">
              <span>System Specs</span>
              <Terminal className="w-4 h-4 text-[#d97757]" />
            </div>

            <div className="space-y-6 pt-6 text-xs">
              <div>
                <span className="text-[#777777] uppercase tracking-[0.15em] block mb-1">Primary Stack</span>
                <p className="text-[#1a1a1a] font-mono tracking-wider">React • Vite • Tailwind • AWS</p>
              </div>

              <div>
                <span className="text-[#777777] uppercase tracking-[0.15em] block mb-1">Performance Standard</span>
                <p className="text-[#d97757] font-mono tracking-wider">99/100 Lighthouse Core Vitals</p>
              </div>

              <div>
                <span className="text-[#777777] uppercase tracking-[0.15em] block mb-1">Current Base</span>
                <p className="text-[#1a1a1a] font-mono tracking-wider">Global / Remote Studio</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#e5e5df] flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#777777]">
              <span>Status: Available</span>
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            </div>
          </div>

        </div>
      </section>

      {/* Selected Works */}
      <section id="work" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#e5e5df]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d97757]">Curated Archive</span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#1a1a1a] mt-2">Selected Works</h2>
          </div>
          <p className="text-xs text-[#666666] uppercase tracking-[0.2em] max-w-xs">
            High-performance web applications built for scale and visual clarity.
          </p>
        </div>

        <div className="space-y-6">
          {works.map((work) => (
            <div 
              key={work.num}
              className="group bg-[#f4f2ec]/50 hover:bg-[#f4f2ec] border border-[#e5e5df] hover:border-[#1a1a1a] transition-all duration-500 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-2 text-2xl font-serif text-[#999999] group-hover:text-[#d97757] transition-colors">
                {work.num}
              </div>

              <div className="lg:col-span-6 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d97757]">{work.category}</span>
                <h3 className="text-3xl font-serif text-[#1a1a1a] group-hover:translate-x-2 transition-transform duration-300">
                  {work.title}
                </h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  {work.desc}
                </p>
              </div>

              <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-[#e5e5df] lg:pl-8">
                <div className="text-xs font-mono text-[#d97757]">
                  {work.metrics}
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.stack.map((tech, idx) => (
                    <span key={idx} className="text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 bg-[#e9e6dc] text-[#444444]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-28 bg-[#f4f2ec]/60 border-y border-[#e5e5df] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#d97757]">Capabilities</span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#1a1a1a] mt-2">Technical Mastery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#e5e5df] bg-[#faf9f6] space-y-4">
              <Cpu className="w-6 h-6 text-[#d97757]" />
              <h3 className="text-xl font-serif text-[#1a1a1a]">Frontend Architecture</h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                Component-driven development in React & Vite with bulletproof state management, modular hooks, and flawless responsive execution.
              </p>
            </div>

            <div className="p-8 border border-[#e5e5df] bg-[#faf9f6] space-y-4">
              <Layers className="w-6 h-6 text-[#d97757]" />
              <h3 className="text-xl font-serif text-[#1a1a1a]">UI/UX Design Systems</h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                Minimalist typography, clean light-mode palettes, and bespoke design tokens calibrated for modern digital products.
              </p>
            </div>

            <div className="p-8 border border-[#e5e5df] bg-[#faf9f6] space-y-4">
              <Command className="w-6 h-6 text-[#d97757]" />
              <h3 className="text-xl font-serif text-[#1a1a1a]">Cloud Deployment</h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                CI/CD pipeline automation via AWS Amplify and GitHub, ensuring continuous delivery with zero downtime and instant cache invalidation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Call to Action */}
      <section id="contact" className="py-28 px-6 md:px-12 max-w-7xl mx-auto text-center relative">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#d97757]">Initiate Collaboration</span>
        
        <h2 className="text-4xl sm:text-7xl font-serif font-light text-[#1a1a1a] mt-4 mb-10">
          Let’s Build Something <br />
          <span className="italic text-[#d97757]">Extraordinary.</span>
        </h2>

        <div className="inline-block p-1 border border-[#cccccc] mb-16">
          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="px-8 py-4 bg-[#1a1a1a] text-[#faf9f6] text-xs font-medium uppercase tracking-[0.25em] hover:bg-[#d97757] transition-all duration-300 block"
          >
            henryobanladesign@gmail.com
          </a>
        </div>

        <div className="pt-12 border-t border-[#e5e5df] flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-6">
          <p>© {new Date().getFullYear()} Henry Obanla. All rights reserved.</p>
          <div className="flex gap-8 uppercase tracking-[0.2em] text-[10px]">
            <a href="https://github.com/brooklynzeroo" target="_blank" rel="noreferrer" className="hover:text-[#d97757] transition-colors">GitHub</a>
            <a href="mailto:henryobanladesign@gmail.com" className="hover:text-[#d97757] transition-colors">Email</a>
          </div>
        </div>
      </section>

    </div>
  );
}
