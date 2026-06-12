"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, PlayCircle, CheckCircle2, Quote, ChevronLeft, ChevronRight,
  Sparkles, Building2, Users, Globe, Mail, Phone, MapPin, Send,
  ShieldCheck, Lock, ServerCog, Plus, Minus,
} from "lucide-react";

import { Reveal, Counter, SectionHeading } from "./ui";
import {
  HERO_CARDS, TRUST_STATS, PRODUCTS, SOLUTIONS, WHY, TECH, ACHIEVEMENTS,
  CASE_STUDIES, TESTIMONIALS, ROADMAP, CAREERS, CONTACT_EMAIL, OFFICE, TAGLINE,
  FAQS, VALUE_PROPS,
} from "@/lib/site";

/* shared decorative blobs */
function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-10 h-80 w-80 animate-blob rounded-full bg-brand-400/30 blur-3xl dark:bg-brand-600/20" />
      <div className="absolute right-0 top-40 h-80 w-80 animate-blob rounded-full bg-cyan-400/25 blur-3xl [animation-delay:3s] dark:bg-cyan-500/15" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-violet-400/25 blur-3xl [animation-delay:6s] dark:bg-violet-500/15" />
    </div>
  );
}

/* ============================== HERO ============================== */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <Blobs />
      <div className="absolute inset-0 -z-10 bg-grid-light bg-[size:40px_40px] opacity-60 dark:bg-grid-dark" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> AI-Driven Technology Company</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Building <span className="gradient-text">Intelligent Products</span> For The Future
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            We create AI-powered software, education platforms, business automation systems and
            digital experiences that help organizations scale faster and operate smarter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn-primary">Explore Products <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="btn-ghost"><PlayCircle className="h-4 w-4" /> Book a Demo</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-teal-500" /> Enterprise-grade</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-teal-500" /> Cloud-native</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-teal-500" /> AI-first</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <HeroMockup />
        </Reveal>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="glass glow rounded-3xl p-5">
        <div className="flex items-center gap-1.5 pb-4">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-medium text-slate-400">mimanasa.cloud</span>
        </div>
        {/* fake chart */}
        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 p-5 text-white">
          <p className="text-xs/4 opacity-80">Active Users · Today</p>
          <p className="mt-1 text-3xl font-extrabold">52,480</p>
          <div className="mt-4 flex items-end gap-1.5">
            {[40, 65, 50, 80, 60, 95, 72, 88].map((h, i) => (
              <motion.span key={i} className="w-full rounded-t bg-white/80"
                initial={{ height: 4 }} whileInView={{ height: h }} viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }} style={{ display: "block" }} />
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {HERO_CARDS.slice(0, 4).map((c) => (
            <div key={c.label} className="glass-soft flex items-center gap-2.5 rounded-xl p-3">
              <span className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${c.color} text-white`}>
                <c.icon className="h-4.5 w-4.5" />
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* floating pill */}
      <motion.div className="glass absolute -right-4 -top-5 rounded-2xl px-4 py-3"
        animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <p className="text-xs text-slate-400">Automation</p>
        <p className="text-lg font-bold text-slate-900 dark:text-white">+38% ⚡</p>
      </motion.div>
      <motion.div className="glass absolute -bottom-5 -left-4 rounded-2xl px-4 py-3"
        animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity }}>
        <p className="text-xs text-slate-400">Uptime</p>
        <p className="text-lg font-bold text-teal-500">99.9%</p>
      </motion.div>
    </div>
  );
}

/* ============================== TRUST ============================== */
export function Trust() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-14 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Trusted by schools, institutions, businesses, startups & organizations
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {TRUST_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                <Counter to={s.to} suffix={s.suffix} decimals={s.decimals || 0} />
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== VALUE PROPS / TRUST BAND ============================== */
export function ValueProps() {
  return (
    <section className="py-12">
      <div className="container-x">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.07}>
              <div className="rounded-2xl glass p-6 text-center">
                <p className="text-3xl font-extrabold gradient-text">{v.stat}</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">{v.label}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{v.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== SECURITY BAND ============================== */
export function Security() {
  const items = [
    { icon: ShieldCheck, title: "Enterprise-grade security", desc: "Role-based access control on every action." },
    { icon: Lock, title: "Private by design", desc: "Complete multi-tenant data isolation — your data is yours." },
    { icon: ServerCog, title: "Reliable cloud", desc: "Managed, encrypted infrastructure with high availability." },
  ];
  return (
    <section className="py-12">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 dark:border-white/10 dark:from-white/[0.04] dark:to-transparent sm:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.08} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
                  <it.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{it.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== FAQ ============================== */
export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" subtitle="Everything you need to know before getting started." />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl glass">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">{f.q}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-400/10 dark:text-brand-300">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3 }}>
                      <p className="px-6 pb-5 text-slate-600 dark:text-slate-400">{f.a}</p>
                    </motion.div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================== ABOUT ============================== */
export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading center={false}
          eyebrow="About Us"
          title="Transforming Ideas Into Intelligent Digital Solutions"
        />
        <Reveal delay={0.1}>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Mimanasa Innovations develops scalable technology products that solve real-world challenges
            in education, administration, operations and decision-making.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            By combining <strong className="text-slate-900 dark:text-white">Artificial Intelligence</strong>,
            Data Analytics, Automation and Cloud Technologies, we build systems that help institutions
            and businesses achieve operational excellence.
          </p>
          <div className="mt-7 grid grid-cols-3 gap-4">
            {[["AI", "at the core"], ["Cloud", "native"], ["Secure", "by design"]].map(([a, b]) => (
              <div key={a} className="glass-soft rounded-2xl p-4 text-center">
                <p className="text-xl font-extrabold gradient-text">{a}</p>
                <p className="text-xs text-slate-500">{b}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== PRODUCTS ============================== */
export function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-24">
      <Blobs />
      <div className="container-x">
        <SectionHeading eyebrow="Products"
          title="Intelligent products, beautifully built"
          subtitle="A growing suite of AI-powered platforms for education, creativity and business." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl glass p-7 transition hover:-translate-y-1.5">
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-lg`}>
                  <p.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{p.name}</h3>
                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{p.tagline}</p>
                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== SOLUTIONS ============================== */
export function Solutions() {
  return (
    <section id="solutions" className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Solutions"
          title="Built for every kind of organization"
          subtitle="From classrooms to boardrooms to government offices." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-7">
                <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-2xl transition group-hover:opacity-40`} />
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white`}>
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== WHY CHOOSE ============================== */
export function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-grid-light bg-[size:40px_40px] opacity-50 dark:bg-grid-dark" />
      <div className="container-x">
        <SectionHeading eyebrow="Why Choose Us"
          title="An unfair advantage, built in"
          subtitle="Everything we ship is intelligent, secure and ready to scale." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="group flex h-full items-start gap-4 rounded-2xl glass p-6 transition hover:-translate-y-1">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-violet-500 text-white">
                  <w.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{w.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== TECH STACK ============================== */
export function TechStack() {
  const row = [...TECH, ...TECH];
  return (
    <section id="technology" className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Technology"
          title="A modern, battle-tested stack"
          subtitle="The engines powering every Mimanasa product." />
      </div>
      <div className="relative mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {row.map((t, i) => (
            <div key={i} className="glass flex items-center gap-2 rounded-2xl px-6 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500" />
              <span className="whitespace-nowrap text-sm font-semibold text-slate-700 dark:text-slate-200">{t}</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-navy-900" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-navy-900" />
      </div>
    </section>
  );
}

/* ============================== ACHIEVEMENTS ============================== */
export function Achievements() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container-x">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-violet-700 p-10 text-white sm:p-14">
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.08} className="text-center">
                <a.icon className="mx-auto h-7 w-7 text-brand-200" />
                <p className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  <Counter to={a.to} suffix={a.suffix} />
                </p>
                <p className="mt-1 text-sm text-brand-100">{a.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== CASE STUDIES ============================== */
export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Case Studies"
          title="Real impact, real outcomes"
          subtitle="A few stories from organizations we've helped transform." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-3xl glass">
                <div className={`h-32 bg-gradient-to-br ${c.color} p-6`}>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur">{c.tag}</span>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{c.desc}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold gradient-text">{c.metric} <ArrowRight className="h-4 w-4" /></p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== TESTIMONIALS ============================== */
export function Testimonials() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);
  const t = TESTIMONIALS[i];
  return (
    <section className="relative overflow-hidden py-24">
      <Blobs />
      <div className="container-x">
        <SectionHeading eyebrow="Testimonials" title="Loved by the people who use it" />
        <div className="mx-auto mt-12 max-w-3xl">
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="rounded-3xl glass p-8 text-center sm:p-12">
            <Quote className="mx-auto h-9 w-9 text-brand-400" />
            <p className="mt-5 text-xl font-medium text-slate-800 dark:text-slate-100 sm:text-2xl">“{t.quote}”</p>
            <p className="mt-6 font-bold text-slate-900 dark:text-white">{t.name}</p>
            <p className="text-sm text-slate-500">{t.role}</p>
          </motion.div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={() => setI((p) => (p - 1 + n) % n)} className="flex h-10 w-10 items-center justify-center rounded-full glass" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, k) => (
                <button key={k} onClick={() => setI(k)} aria-label={`Go to ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-brand-600" : "w-2 bg-slate-300 dark:bg-slate-600"}`} />
              ))}
            </div>
            <button onClick={() => setI((p) => (p + 1) % n)} className="flex h-10 w-10 items-center justify-center rounded-full glass" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== ROADMAP ============================== */
export function Roadmap() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Roadmap" title="The road ahead" subtitle="Where we're headed, year by year." />
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-[19px] top-0 h-full w-0.5 bg-gradient-to-b from-brand-500 via-violet-500 to-cyan-500 sm:left-1/2" />
          {ROADMAP.map((r, i) => (
            <Reveal key={r.year} delay={i * 0.05}>
              <div className={`relative mb-10 flex items-center gap-6 sm:gap-0 ${i % 2 ? "sm:flex-row-reverse" : ""}`}>
                <span className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-xs font-bold text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2`}>
                  {r.year.slice(2)}
                </span>
                <div className={`w-full rounded-2xl glass p-6 sm:w-[44%] ${i % 2 ? "sm:mr-auto" : "sm:ml-auto"}`}>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-500">{r.year}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{r.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== CAREERS ============================== */
export function Careers() {
  return (
    <section id="careers" className="py-24">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] glass p-10 sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Careers</span>
              <h2 className="h-section mt-4">Join Mimanasa Innovations</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Build products that impact millions. Work with AI, design and engineering at the cutting edge.</p>
              <a href="#contact" className="btn-primary mt-7">See open roles <ArrowRight className="h-4 w-4" /></a>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {CAREERS.map((c) => (
                  <div key={c.title} className="glass-soft flex flex-col items-center gap-2 rounded-2xl p-5 text-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-cyan-500 text-white">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{c.title}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== CONTACT ============================== */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <Blobs />
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow"><Mail className="h-3.5 w-3.5" /> Contact</span>
          <h2 className="h-section mt-4">Let's build something intelligent</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Tell us about your organization and goals — our team will get back within one business day.
          </p>
          <div className="mt-8 space-y-4">
            {[[Mail, CONTACT_EMAIL, `mailto:${CONTACT_EMAIL}`], [Globe, "www.mimanasa.online", "https://www.mimanasa.online"], [MapPin, OFFICE, null]].map(([Icon, label, href]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl glass text-brand-600"><Icon className="h-5 w-5" /></span>
                {href ? <a href={href} className="text-slate-700 hover:text-brand-600 dark:text-slate-300">{label}</a> : <span className="text-slate-700 dark:text-slate-300">{label}</span>}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-3xl glass p-7 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Organization" name="org" />
              <Field label="Phone" name="phone" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea rows={4} required
                className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm text-slate-800 outline-none ring-brand-500/30 transition focus:border-brand-400 focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-slate-100" />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="submit" className="btn-primary"><Send className="h-4 w-4" /> Schedule Demo</button>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-ghost">Contact Sales</a>
            </div>
            {sent && <p className="mt-3 text-sm font-medium text-teal-600">✓ Thanks! We'll be in touch shortly.</p>}
          </form>
        </Reveal>
      </div>

      <div className="container-x mt-20 text-center">
        <Reveal>
          <p className="text-2xl font-extrabold gradient-text sm:text-3xl">{TAGLINE}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
      <input name={name} type={type} required={required}
        className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm text-slate-800 outline-none ring-brand-500/30 transition focus:border-brand-400 focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-slate-100" />
    </div>
  );
}
