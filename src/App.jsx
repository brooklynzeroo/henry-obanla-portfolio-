import { useState } from 'react'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Cloud,
  Code2, Layers3, Menu, MoveUpRight, X,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Editorial E-Commerce',
    type: 'DIGITAL STOREFRONT · 2024',
    description: 'A considered shopping experience for an independent fashion label, where quiet layouts let the collection speak.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Neutral fashion collection arranged on a minimalist display',
    tags: ['Art Direction', 'E-Commerce', 'Development'],
    href: 'mailto:henryobanladesign@gmail.com?subject=Editorial%20E-Commerce%20project',
  },
  {
    number: '02',
    title: 'A Study in Simplicity',
    type: 'PERSONAL PORTFOLIO · 2023',
    description: 'A pared-back portfolio for a creative practice, balancing expressive typography with a precise, intuitive rhythm.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Sunlit minimalist creative studio interior',
    tags: ['UI/UX Design', 'React', 'Responsive'],
    href: 'mailto:henryobanladesign@gmail.com?subject=Minimalist%20Portfolio%20project',
  },
]

const capabilities = [
  { icon: Layers3, number: '01', title: 'UI/UX & Web Design', text: 'Thoughtful digital experiences, shaped around clarity, character, and the people who use them.' },
  { icon: Code2, number: '02', title: 'Frontend Development', text: 'Elegant, responsive interfaces built with modern tools and a deep respect for the details.' },
  { icon: Cloud, number: '03', title: 'AWS Cloud & Deployment', text: 'Reliable foundations and smooth launches, from cloud infrastructure through to production.' },
]

function SectionLabel({ children, index }) {
  return <div className="flex items-center gap-4"><span className="eyebrow text-gold">{index}</span><span className="h-px w-9 bg-gold/50"/><span className="eyebrow text-muted">{children}</span></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get('name')}`)
    const body = encodeURIComponent(`Hi Henry,\n\n${form.get('message')}\n\nYou can reach me at ${form.get('email')}.`)
    window.location.href = `mailto:henryobanladesign@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div id="top" className="overflow-hidden bg-ink text-paper">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.07] bg-ink/85 backdrop-blur-xl">
        <div className="container-shell flex h-[76px] items-center justify-between">
          <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Henry Obanla home">
            <span className="grid size-9 place-items-center border border-gold/60 font-editorial text-lg text-gold">H</span>
            <span className="text-[12px] font-semibold tracking-[.13em]">HENRY OBANLA<span className="ml-1 text-gold">.</span></span>
          </a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            {[['About', '#about'], ['Selected Work', '#work'], ['Capabilities', '#capabilities'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={label} href={href} className="eyebrow text-muted transition hover:text-paper">{label}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden items-center gap-2 border border-gold/70 px-4 py-3 text-[10px] font-medium uppercase tracking-[.15em] text-gold transition hover:bg-gold hover:text-ink sm:flex">Get in touch <ArrowUpRight size={13}/></a>
          <button className="grid size-10 place-items-center text-paper md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
        {menuOpen && <nav className="container-shell flex flex-col gap-5 border-t border-white/[.07] py-6 md:hidden" aria-label="Mobile navigation">
          {[['About', '#about'], ['Selected Work', '#work'], ['Capabilities', '#capabilities'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu} className="eyebrow text-muted">{label}</a>)}
        </nav>}
      </header>

      <main>
        <section id="about" className="relative flex min-h-[760px] items-center pt-24 md:min-h-[850px]">
          <div className="pointer-events-none absolute -right-36 top-24 h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(201,164,92,.105)_0%,rgba(201,164,92,.025)_37%,transparent_68%)]"/>
          <div className="container-shell relative grid items-center gap-14 pb-24 pt-20 lg:grid-cols-[1.13fr_.87fr] lg:gap-16">
            <div className="relative z-10">
              <div className="mb-9 inline-flex items-center gap-3 border border-white/10 bg-white/[.025] px-4 py-3">
                <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-50"/><span className="relative inline-flex size-2 rounded-full bg-gold"/></span>
                <span className="eyebrow text-paper/75">Available for select projects</span>
              </div>
              <p className="eyebrow mb-5 text-muted">Independent creative developer · Lagos, Nigeria</p>
              <h1 className="max-w-[760px] font-editorial text-[clamp(3.55rem,8vw,7.15rem)] leading-[.99] tracking-[-.055em]">Digital craft,<br/><span className="italic text-gold">made intentional.</span></h1>
              <p className="mt-8 max-w-[500px] text-[15px] leading-7 text-muted md:text-base">I’m Henry Obanla — a frontend developer and web designer creating thoughtful digital experiences with a refined point of view.</p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#work" className="group inline-flex items-center gap-4 bg-gold px-6 py-4 text-[10px] font-semibold uppercase tracking-[.15em] text-ink transition hover:bg-paper">Explore my work <ArrowDownRight size={15} className="transition group-hover:translate-x-1 group-hover:translate-y-1"/></a>
                <a href="#contact" className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-[10px] font-semibold uppercase tracking-[.15em] text-paper transition hover:border-gold hover:text-gold">Let’s talk <ArrowRight size={14}/></a>
              </div>
              <div className="mt-20 hidden items-center gap-4 sm:flex"><span className="eyebrow text-muted">Scroll to discover</span><span className="h-px w-12 bg-gold/50"/><ArrowDown size={13} className="text-gold"/></div>
            </div>
            <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
              <div className="absolute -left-5 -top-5 z-10 h-24 w-24 border-l border-t border-gold/70"/>
              <div className="absolute -bottom-5 -right-5 z-10 h-24 w-24 border-b border-r border-gold/70"/>
              <div className="relative aspect-[.82] overflow-hidden bg-[#22211f]">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1100&q=85" alt="Editorial portrait in warm, natural light" className="h-full w-full object-cover object-center opacity-80 grayscale-[.15]" fetchPriority="high"/>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10"/>
                <div className="absolute bottom-7 left-7"><p className="eyebrow text-gold">Design with intention</p><p className="mt-2 font-editorial text-2xl italic">Built to feel as good as it works.</p></div>
              </div>
              <div className="absolute -left-9 top-1/2 hidden -translate-y-1/2 -rotate-90 eyebrow tracking-[.25em] text-muted sm:block">DESIGN · DEVELOP · DELIVER</div>
              <div className="absolute -right-4 top-8 grid size-[78px] place-items-center rounded-full border border-gold/50 bg-ink text-center"><span className="eyebrow leading-4 text-gold">EST.<br/>2020</span></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0"><div className="container-shell gold-rule opacity-50"/></div>
        </section>

        <section id="work" className="container-shell py-28 md:py-36">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div><SectionLabel index="01 / PORTFOLIO">Selected work</SectionLabel><h2 className="mt-7 font-editorial text-5xl tracking-[-.04em] md:text-6xl">A few things I’ve <span className="italic text-gold">made.</span></h2></div>
            <p className="max-w-[310px] text-sm leading-6 text-muted">A selection of digital experiences built with care, curiosity, and an eye for the finer details.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-7">
            {projects.map((project) => <article key={project.number} className="group">
              <a href={project.href} aria-label={`Discuss ${project.title}`} className="relative block aspect-[1.22] overflow-hidden bg-ink-soft">
                <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"/>
                <div className="absolute inset-0 bg-ink/10 transition group-hover:bg-ink/0"/>
                <span className="absolute left-5 top-5 border border-white/30 bg-ink/45 px-3 py-2 eyebrow text-paper backdrop-blur-sm">SELECTED PROJECT / {project.number}</span>
                <span className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full bg-paper text-ink transition group-hover:bg-gold"><MoveUpRight size={17}/></span>
              </a>
              <div className="flex flex-wrap items-start justify-between gap-5 border-b border-white/10 py-6">
                <div><p className="eyebrow text-gold">{project.type}</p><h3 className="mt-3 font-editorial text-3xl tracking-[-.03em]">{project.title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-muted">{project.description}</p></div>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-muted transition group-hover:text-gold"/>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-white/10 px-3 py-2 eyebrow text-muted">{tag}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section id="capabilities" className="border-y border-white/[.07] bg-[#131316]">
          <div className="container-shell py-28 md:py-32">
            <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
              <div><SectionLabel index="02 / EXPERTISE">What I bring</SectionLabel><h2 className="mt-7 max-w-md font-editorial text-5xl leading-[1.1] tracking-[-.04em] md:text-6xl">Good work is a <span className="italic text-gold">meeting</span> of many things.</h2><p className="mt-6 max-w-sm text-sm leading-7 text-muted">From first sketch to final deployment, I bring design and technology together to make the whole experience feel effortless.</p></div>
              <div className="border-t border-white/10">
                {capabilities.map(({ icon: Icon, number, title, text }) => <article key={number} className="group grid grid-cols-[44px_1fr_24px] gap-4 border-b border-white/10 py-7 md:grid-cols-[56px_1fr_28px] md:gap-6 md:py-8">
                  <span className="eyebrow pt-1 text-gold">{number}</span><div><div className="flex items-center gap-3"><Icon size={17} className="text-gold"/><h3 className="font-editorial text-2xl md:text-[28px]">{title}</h3></div><p className="mt-3 max-w-lg text-sm leading-6 text-muted">{text}</p></div><ArrowUpRight size={18} className="mt-1 text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"/>
                </article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container-shell py-28 md:py-36">
          <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div><SectionLabel index="03 / CONTACT">Start a conversation</SectionLabel><h2 className="mt-7 font-editorial text-5xl leading-[1.08] tracking-[-.045em] md:text-6xl">Have something<br/>good in <span className="italic text-gold">mind?</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-muted">Have a project in mind or just want to say hello? I’d love to hear what you’re thinking.</p>
              <a href="mailto:henryobanladesign@gmail.com" className="mt-9 inline-flex max-w-full items-center gap-3 border border-gold/40 bg-gold/[.06] px-4 py-4 text-xs text-paper transition hover:border-gold sm:px-5"><span className="grid size-8 shrink-0 place-items-center bg-gold text-ink"><ArrowUpRight size={16}/></span><span className="break-all">henryobanladesign@gmail.com</span></a>
              <div className="mt-10"><p className="eyebrow text-muted">Find me elsewhere</p><div className="mt-4 flex gap-3"><a className="border border-white/15 px-4 py-3 eyebrow text-paper transition hover:border-gold hover:text-gold" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={11} className="ml-1 inline"/></a><a className="border border-white/15 px-4 py-3 eyebrow text-paper transition hover:border-gold hover:text-gold" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={11} className="ml-1 inline"/></a><a className="border border-white/15 px-4 py-3 eyebrow text-paper transition hover:border-gold hover:text-gold" href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={11} className="ml-1 inline"/></a></div></div>
            </div>
            <form onSubmit={handleSubmit} className="border border-white/10 bg-[#131316] p-6 sm:p-9">
              <p className="eyebrow text-gold">Tell me a little about it</p>
              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <label className="eyebrow text-muted">Your name<input required name="name" autoComplete="name" placeholder="Name" className="mt-3 block w-full border-b border-white/15 bg-transparent pb-3 text-sm text-paper outline-none transition placeholder:text-white/25 focus:border-gold"/></label>
                <label className="eyebrow text-muted">Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="mt-3 block w-full border-b border-white/15 bg-transparent pb-3 text-sm text-paper outline-none transition placeholder:text-white/25 focus:border-gold"/></label>
                <label className="eyebrow text-muted sm:col-span-2">A little about your project<textarea required name="message" rows="4" placeholder="What are you looking to create?" className="mt-3 block w-full resize-y border-b border-white/15 bg-transparent pb-3 text-sm leading-6 text-paper outline-none transition placeholder:text-white/25 focus:border-gold"/></label>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4"><button type="submit" className="inline-flex items-center gap-4 bg-gold px-6 py-4 text-[10px] font-semibold uppercase tracking-[.15em] text-ink transition hover:bg-paper">{submitted ? 'Open your email app' : 'Send an enquiry'}{submitted ? <Check size={15}/> : <ArrowUpRight size={15}/>}</button><span className="text-xs text-muted">Usually responds within 2 days.</span></div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[.08]">
        <div className="container-shell flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3"><span className="grid size-8 place-items-center border border-gold/50 font-editorial text-sm text-gold">H</span><span className="text-[10px] font-semibold tracking-[.13em]">HENRY OBANLA</span></a>
          <p className="eyebrow text-muted">© {new Date().getFullYear()} Henry Obanla. Crafted with intention.</p>
          <a href="#top" className="group inline-flex items-center gap-2 eyebrow text-muted transition hover:text-gold">Back to top <ArrowDown size={13} className="rotate-180 transition group-hover:-translate-y-1"/></a>
        </div>
      </footer>
    </div>
  )
}

export default App
