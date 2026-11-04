import React, { useState, useEffect } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: '01',
      title: 'Flower Bliss Couture',
      category: 'E-Commerce Engineering & UI',
      description: 'Custom headless e-commerce storefront engineered for high-end retail. Optimized for sub-second page transitions, flawless mobile responsiveness, and high conversion rates.',
      metrics: '99/100 Lighthouse Performance • +42% Average Order Value',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Stripe API', 'AWS Amplify']
    },
    {
      id: '02',
      title: 'Aethelgard Digital Atelier',
      category: 'Editorial Web Design',
      description: 'An immersive digital publication platform built with custom spatial typography, minimalist grid architecture, and refined visual pacing for luxury brands.',
      metrics: 'Zero Layout Shift • 60 FPS Fluid Interactions',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Custom UI Architecture']
    },
    {
      id: '03',
      title: 'Vanguard Enterprise Dashboard',
      category: 'Client Portal & Analytics',
      description: 'High-security financial intelligence dashboard featuring real-time data visualization, encrypted client portals, and streamlined user management.',
      metrics: '<0.3s Latency • SOC2 Aligned Design System',
      stack: ['React', 'Node.js', 'Tailwind CSS', 'REST APIs']
    }
  ];

  return (
    <div className="bg-[#fbfbf9] text-[#111111] min-h-screen font-sans selection:bg-[#111111] selection:text-[#fbfbf9] relative">
      
      {/* Clean Navigation Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-[#fbfbf9]/90 backdrop-blur-md border-[#e5e5df] py-4' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-xs uppercase tracking-[0.25em] font-medium text-[#111111]">
            Henry Obanla <span className="text-[#777777]">/ Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-[#555555]">
            <a href="#about" className="hover:text-[#111111] transition-colors">About</a>
            <a href="#work" className="hover:text-[#111111] transition-colors">Selected Work</a>
            <a href="#expertise" className="hover:text-[#111111] transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-[#111111] transition-colors">Contact</a>
          </nav>

          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#fbfbf9] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 md:px-12 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center">
        <div className="max-w-3xl space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#666666] block">
            Frontend Engineer & Web Designer
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.15] tracking-tight text-[#111111]">
            Building high-performance digital products with precision engineering.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed max-w-2xl">
            I specialize in crafting fast, accessible, and conversion-optimized web applications using React, Vite, and modern CSS architecture—hosted and scaled securely on AWS.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a 
              href="#work"
              className="px-7 py-3.5 bg-[#111111] text-[#fbfbf9] text-xs uppercase tracking-[0.2em] hover:bg-[#333333] transition-colors"
            >
              View Selected Work
            </a>
            <a 
              href="mailto:henryobanladesign@gmail.com"
              className="px-7 py-3.5 border border-[#cccccc] text-[#111111] text-xs uppercase tracking-[0.2em] hover:border-[#111111] transition-colors"
            >
              Direct Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#e5e5df]">
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#666666]">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#111111] mt-2">Selected Work</h2>
          </div>
          <p className="text-xs text-[#666666] uppercase tracking-[0.15em]">
            Production-grade client projects & applications
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="p-8 md:p-10 bg-white border border-[#e5e5df] hover:border-[#999999] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-2 text-sm font-medium text-[#888888]">
                {project.id}
              </div>

              <div className="lg:col-span-6 space-y-3">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#555555] block">{project.category}</span>
                <h3 className="text-2xl font-medium text-[#111111]">
                  {project.title}
                </h3>
                <p className="text-sm text-[#555555] font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-[#e5e5df] lg:pl-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] block mb-1">Impact & Performance</span>
                  <p className="text-xs font-medium text-[#111111]">{project.metrics}</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] block mb-2">Technology Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-[0.1em] px-2 py-1 bg-[#f4f4f0] text-[#444444]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-[#f4f4f0] border-y border-[#e5e5df] px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#666666]">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#111111] mt-2">Core Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-[#e5e5df] space-y-3">
              <h3 className="text-lg font-medium text-[#111111]">Frontend Architecture</h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                Building scalable component-driven applications using React, Vite, and modern state management patterns focused on speed and clean code structure.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#e5e5df] space-y-3">
              <h3 className="text-lg font-medium text-[#111111]">UI/UX & Web Design</h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                Translating complex user journeys into refined, minimalist interfaces with careful attention to typography, spacing, and visual hierarchy.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#e5e5df] space-y-3">
              <h3 className="text-lg font-medium text-[#111111]">Cloud Deployment & CI/CD</h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed">
                Configuring automated cloud build pipelines, routing, SSL certificates, and performance optimization on AWS infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-24 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#666666]">Let's Work Together</span>
        <h2 className="text-3xl sm:text-5xl font-normal text-[#111111] mt-3 mb-8">
          Ready to build your next project?
        </h2>

        <div className="inline-block mb-12">
          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="px-8 py-4 bg-[#111111] text-[#fbfbf9] text-xs uppercase tracking-[0.2em] hover:bg-[#333333] transition-colors block"
          >
            henryobanladesign@gmail.com
          </a>
        </div>

        <div className="pt-12 border-t border-[#e5e5df] flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <p>© {new Date().getFullYear()} Henry Obanla. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-[0.2em]">
            <a href="https://github.com/brooklynzeroo" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors">GitHub</a>
            <a href="mailto:henryobanladesign@gmail.com" className="hover:text-[#111111] transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
