import React, { useState, useEffect } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: '01',
      title: 'Flower Bliss Couture',
      category: 'E-Commerce',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      accentBar: 'bg-amber-500',
      description: 'Custom headless e-commerce storefront engineered for high-end retail. Optimized for sub-second page transitions, flawless mobile responsiveness, and high conversion rates.',
      metrics: '99/100 Lighthouse Performance • +42% Average Order Value',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Stripe API', 'AWS Amplify']
    },
    {
      id: '02',
      title: 'Aethelgard Digital Atelier',
      category: 'Web Design',
      badgeColor: 'bg-violet-100 text-violet-800 border-violet-300',
      accentBar: 'bg-violet-600',
      description: 'An immersive digital publication platform built with custom spatial typography, minimalist grid architecture, and refined visual pacing for luxury brands.',
      metrics: 'Zero Layout Shift • 60 FPS Fluid Interactions',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Custom UI Architecture']
    },
    {
      id: '03',
      title: 'Vanguard Enterprise Dashboard',
      category: 'Full Stack',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      accentBar: 'bg-emerald-600',
      description: 'High-security financial intelligence dashboard featuring real-time data visualization, encrypted client portals, and streamlined user management.',
      metrics: '<0.3s Latency • SOC2 Aligned Design System',
      stack: ['React', 'Node.js', 'Tailwind CSS', 'REST APIs']
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-indigo-600 selection:text-white relative">
      
      {/* Decorative Gradient Accent Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-slate-200 py-4 shadow-sm' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
            Henry Obanla <span className="text-indigo-600">/ Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.15em] text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#work" className="hover:text-indigo-600 transition-colors">Selected Work</a>
            <a href="#expertise" className="hover:text-indigo-600 transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-sm"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 md:px-12 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Frontend & Web Design Projects
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
            Engineering <span className="text-indigo-600">high-performance</span> digital products.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            I craft fast, responsive, and conversion-focused web applications using React, Vite, and modern CSS architecture—hosted and scaled securely on AWS.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a 
              href="#work"
              className="px-7 py-3.5 bg-slate-900 text-white text-xs font-semibold uppercase tracking-[0.15em] hover:bg-indigo-600 transition-colors shadow-md"
            >
              View Selected Work
            </a>
            <a 
              href="mailto:henryobanladesign@gmail.com"
              className="px-7 py-3.5 border border-slate-300 text-slate-800 text-xs font-semibold uppercase tracking-[0.15em] hover:border-slate-900 transition-colors bg-white"
            >
              Direct Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-slate-200 relative z-10">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Selected Work</h2>
          </div>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.15em]">
            Production-grade client applications
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white border border-slate-200 hover:border-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div className={`lg:col-span-1 ${project.accentBar} hidden lg:block`}></div>

              <div className="p-8 md:p-10 lg:col-span-11 grid grid-cols-1 lg:grid-cols-11 gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400">{project.id}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-slate-100 lg:pl-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600 block mb-1">Impact & Performance</span>
                    <p className="text-xs font-semibold text-slate-800">{project.metrics}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block mb-2">Technology Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-slate-100/70 border-y border-slate-200 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Core Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">01</div>
              <h3 className="text-lg font-bold text-slate-900">Frontend Architecture</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Building scalable component-driven applications using React, Vite, and modern state management patterns focused on speed and clean code structure.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3 hover:border-violet-300 transition-colors">
              <div className="w-8 h-8 rounded bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-sm">02</div>
              <h3 className="text-lg font-bold text-slate-900">UI/UX & Web Design</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Translating complex user journeys into refined, minimalist interfaces with careful attention to typography, spacing, and visual hierarchy.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-lg shadow-sm space-y-3 hover:border-emerald-300 transition-colors">
              <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">03</div>
              <h3 className="text-lg font-bold text-slate-900">Cloud Deployment & CI/CD</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Configuring automated cloud build pipelines, routing, SSL certificates, and performance optimization on AWS infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-24 px-6 md:px-12 max-w-6xl mx-auto text-center relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">Let's Work Together</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mt-3 mb-8">
          Ready to build your next project?
        </h2>

        <div className="inline-block mb-12">
          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="px-8 py-4 bg-indigo-600 text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-indigo-700 transition-colors shadow-md block rounded"
          >
            henryobanladesign@gmail.com
          </a>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Henry Obanla. All rights reserved.</p>
          <div className="flex gap-6 font-semibold uppercase tracking-wider">
            <a href="https://github.com/brooklynzeroo" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="mailto:henryobanladesign@gmail.com" className="hover:text-indigo-600 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
