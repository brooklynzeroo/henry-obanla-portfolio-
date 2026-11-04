import React, { useState, useEffect } from 'react';

export default function App() {
  const [typedCommand, setTypedCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('sys_init --secure --v2.4.0');
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setUptime(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const executeCommand = (cmd) => {
    setTypedCommand(cmd);
    if (cmd === 'skills') {
      setTerminalOutput('LOADED: React 19, Vite 6, Tailwind CSS, AWS Amplify, WebGL, Node.js, TypeScript');
    } else if (cmd === 'status') {
      setTerminalOutput('All systems operational. Latency: 14ms. Core Temp: 36.2°C.');
    } else if (cmd === 'contact') {
      setTerminalOutput('EMAIL: henryobanladesign@gmail.com | PGP Verified.');
    } else {
      setTerminalOutput(`Command executed: "${cmd}". Type 'skills', 'status', or 'contact'.`);
    }
  };

  const systemsWork = [
    {
      id: 'SYS-01',
      title: 'Flower Bliss Couture Engine',
      category: 'Headless E-Commerce Architecture',
      spec: 'React • Vite • Tailwind • Stripe API • AWS Amplify',
      metrics: '99/100 Lighthouse • 0.28s TTFB • +42% AOV',
      desc: 'Bespoke high-speed storefront engineered for luxury retail. Features sub-second client-side route transitions, zero layout shift (CLS), and encrypted payment pipelines.',
      codeSnippet: 'const store = createStore({ persistence: "redis", encryption: "AES-256" });'
    },
    {
      id: 'SYS-02',
      title: 'Aethelgard Publication Protocol',
      category: 'Digital Editorial & Spatial UI',
      spec: 'React • WebGL • Custom Motion • Tailwind',
      metrics: '60 FPS Fixed • Zero Jank • 0.4s FCP',
      desc: 'Immersive editorial publishing engine built for high-fashion digital media. Utilizes spatial typography scaling, kinetic asset preloading, and responsive grid matrices.',
      codeSnippet: 'const grid = new SpatialLayout({ columns: 12, gutter: "2rem", fluid: true });'
    },
    {
      id: 'SYS-03',
      title: 'Vanguard FinTech Terminal',
      category: 'Encrypted Client Intelligence Dashboard',
      spec: 'Vite • Node.js • Chart.js • SOC2 UI',
      metrics: '< 15ms Socket Latency • Zero Leakage',
      desc: 'High-security financial intelligence HUD with real-time websocket data feeds, multi-factor credential authentication wrappers, and dark-mode telemetry.',
      codeSnippet: 'socket.on("telemetry_update", (packet) => renderMatrix(packet));'
    }
  ];

  return (
    <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen font-mono selection:bg-[#66fcf1] selection:text-[#0b0c10] relative overflow-x-hidden">
      
      {/* Background Matrix Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f283315_1px,transparent_1px),linear-gradient(to_bottom,#1f283315_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Top HUD Status Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0c10]/95 backdrop-blur-md border-b border-[#1f2833] px-6 py-3 flex flex-wrap items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-[#66fcf1]">
            <span className="w-2 h-2 rounded-full bg-[#66fcf1] animate-pulse"></span>
            <span className="font-bold tracking-widest">HENRY_OBANLA://CORE</span>
          </span>
          <span className="hidden sm:inline-block text-[#45a29e]">|</span>
          <span className="hidden sm:inline-block text-[#c5c6c7]/70 text-[11px]">ROLE: FRONTEND ARCHITECT & WEB DESIGNER</span>
        </div>

        <div className="flex items-center gap-6 text-[11px]">
          <span className="hidden md:inline-block text-[#45a29e]">UPTIME: {uptime}s</span>
          <span className="hidden md:inline-block text-[#45a29e]">SECURE: 256-bit SSL</span>
          <a 
            href="mailto:henryobanladesign@gmail.com"
            className="px-3 py-1 bg-[#45a29e]/10 border border-[#66fcf1]/40 text-[#66fcf1] hover:bg-[#66fcf1] hover:text-[#0b0c10] transition-all"
          >
            PING_DEV
          </a>
        </div>
      </header>

      {/* Main Terminal Shell Container */}
      <main className="max-w-7xl mx-auto pt-28 pb-20 px-6 md:px-12 relative z-10">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1f2833]/60 border border-[#45a29e]/30 text-[#66fcf1] text-[11px]">
              <span>[✓] SYSTEM_READY // VERIFIED DEPLOYMENT</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Architecting <span className="text-[#66fcf1]">High-Performance</span> Web Systems.
            </h1>

            <p className="text-sm sm:text-base text-[#c5c6c7]/80 font-mono leading-relaxed max-w-2xl">
              Executing clean React codebases, lightning-fast Vite builds, and bulletproof AWS cloud pipelines. Designed for maximum average order value (AOV), zero layout shift, and supreme UX telemetry.
            </p>

            {/* Interactive Terminal Emulator Bar */}
            <div className="bg-[#1f2833]/40 border border-[#45a29e]/40 p-4 rounded space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#45a29e] border-b border-[#1f2833] pb-2">
                <span>INTERACTIVE_SHELL v2.4</span>
                <span>[bash]</span>
              </div>
              <div className="text-xs text-[#66fcf1] font-mono">
                &gt; {terminalOutput}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <button onClick={() => executeCommand('skills')} className="px-2.5 py-1 bg-[#0b0c10] border border-[#45a29e]/30 text-xs text-[#c5c6c7] hover:border-[#66fcf1] hover:text-[#66fcf1] transition-colors">
                  $ run skills
                </button>
                <button onClick={() => executeCommand('status')} className="px-2.5 py-1 bg-[#0b0c10] border border-[#45a29e]/30 text-xs text-[#c5c6c7] hover:border-[#66fcf1] hover:text-[#66fcf1] transition-colors">
                  $ check status
                </button>
                <button onClick={() => executeCommand('contact')} className="px-2.5 py-1 bg-[#0b0c10] border border-[#45a29e]/30 text-xs text-[#c5c6c7] hover:border-[#66fcf1] hover:text-[#66fcf1] transition-colors">
                  $ cat contact.txt
                </button>
              </div>
            </div>
          </div>

          {/* Live Telemetry / System Specs Panel */}
          <div className="lg:col-span-5 bg-[#1f2833]/30 border border-[#45a29e]/30 p-6 space-y-6 relative">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#45a29e]/10 text-[#66fcf1] text-[10px] border-l border-b border-[#45a29e]/30">
              TELEMETRY_ACTIVE
            </div>

            <div className="flex items-center gap-3 text-white font-bold border-b border-[#1f2833] pb-4">
              <span>ENGINEERING_STACK_SPECS</span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center border-b border-[#1f2833]/60 pb-2">
                <span className="text-[#45a29e]">Core Framework:</span>
                <span className="text-white font-bold">React 19 / Vite 6</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1f2833]/60 pb-2">
                <span className="text-[#45a29e]">Styling Engine:</span>
                <span className="text-white font-bold">Tailwind CSS (Utility)</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1f2833]/60 pb-2">
                <span className="text-[#45a29e]">Hosting Infrastructure:</span>
                <span className="text-white font-bold">AWS Amplify (Global CDN)</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1f2833]/60 pb-2">
                <span className="text-[#45a29e]">Lighthouse Performance:</span>
                <span className="text-[#66fcf1] font-bold">99 / 100 Benchmark</span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="text-[#45a29e]">Git CI/CD Pipeline:</span>
                <span className="text-white font-bold">Automated GitHub Actions</span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://github.com/brooklynzeroo" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 bg-[#45a29e]/20 border border-[#66fcf1]/40 text-[#66fcf1] hover:bg-[#66fcf1] hover:text-[#0b0c10] transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest"
              >
                <span>Inspect GitHub Repositories</span>
              </a>
            </div>
          </div>

        </section>

        {/* Selected Systems / Works Section */}
        <section id="works" className="space-y-10 mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1f2833] pb-6 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#66fcf1]">PROD_DEPLOYMENTS</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans mt-1">Engineered Workflows</h2>
            </div>
            <p className="text-xs text-[#45a29e]">
              [Showing 3 active production architectures]
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {systemsWork.map((sys) => (
              <div 
                key={sys.id}
                className="bg-[#1f2833]/30 border border-[#1f2833] hover:border-[#66fcf1]/60 transition-all duration-300 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-2 space-y-2">
                  <span className="text-xs text-[#66fcf1] font-bold">{sys.id}</span>
                  <p className="text-[11px] text-[#45a29e] uppercase tracking-wider">{sys.category}</p>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <h3 className="text-2xl font-bold text-white font-sans">
                    {sys.title}
                  </h3>
                  <p className="text-xs text-[#c5c6c7]/80 leading-relaxed font-mono">
                    {sys.desc}
                  </p>
                  
                  <div className="p-3 bg-[#0b0c10] border border-[#1f2833] text-[11px] text-[#66fcf1] font-mono">
                    <code>{sys.codeSnippet}</code>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-[#1f2833] lg:pl-8">
                  <div className="text-xs text-[#66fcf1] font-bold">
                    {sys.metrics}
                  </div>
                  <div className="text-[11px] text-[#45a29e] font-mono">
                    {sys.spec}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer / Direct Secure Contact */}
        <footer className="border-t border-[#1f2833] pt-16 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-white font-bold">HENRY OBANLA // DIRECT TRANSMISSION</p>
            <p className="text-[#45a29e]">henryobanladesign@gmail.com</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/brooklynzeroo" target="_blank" rel="noreferrer" className="text-[#c5c6c7] hover:text-[#66fcf1] transition-colors">
              GITHUB
            </a>
            <a href="mailto:henryobanladesign@gmail.com" className="text-[#c5c6c7] hover:text-[#66fcf1] transition-colors">
              EMAIL_SECURE
            </a>
            <span className="text-[#45a29e]">© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
          </div>
        </footer>

      </main>

    </div>
  );
}
