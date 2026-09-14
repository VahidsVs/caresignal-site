import type { BrandConfig, SiteCopy } from '@/types/site';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Newspaper, ShieldCheck, Sparkles } from 'lucide-react';

export function Hero({ copy, brand }: { copy: SiteCopy; brand: BrandConfig }) {
    return (
        <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
            <div className="hero-orb hero-orb-a" />
            <div className="hero-orb hero-orb-b" />
            <div className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                <div className="relative z-10">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/80 px-3 py-2 text-xs font-semibold text-teal-700 shadow-sm backdrop-blur">
                        <Sparkles size={14} /> {copy.hero.eyebrow}
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-6xl xl:text-7xl">
                        {copy.hero.titleLead}{' '}
                        <span className="text-gradient">{copy.hero.titleAccent}</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
                        {copy.hero.body}
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-teal-600">
                            {copy.hero.primary} <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                        </a>
                        <a href="#product" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-white">
                            {copy.hero.secondary} <ArrowDown size={16} />
                        </a>
                    </motion.div>

                    <motion.a href={brand.pressUrl} target="_blank" rel="noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950">
                        <Newspaper size={16} className="text-teal-600" /> {copy.hero.press}
                    </motion.a>
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.96, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative z-10">
                    <div className="product-frame relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/65 p-2 shadow-[0_40px_100px_rgba(31,75,122,0.2)] backdrop-blur-xl sm:p-3">
                        <img src="/images/caresignal-product.png" alt="CareSignal AI platform overview" className="w-full rounded-[1.55rem]" />
                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-4 top-4 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur sm:block">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800"><ShieldCheck size={16} className="text-teal-600" /> Risk engine active</div>
                        </motion.div>
                        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute bottom-5 right-5 hidden rounded-2xl border border-white/80 bg-slate-950/90 px-4 py-3 text-white shadow-xl backdrop-blur md:block">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-teal-300">Care workflow</p>
                            <p className="mt-1 text-sm font-semibold">Tasks → Signals → Action</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
                <div className="grid overflow-hidden rounded-3xl border border-slate-200/70 bg-white/75 shadow-sm backdrop-blur sm:grid-cols-3">
                    {[
                        [brand.pricePerBed + ' €', copy.hero.stat1Label],
                        [brand.pilotMonths.toString(), copy.hero.stat2Label],
                        ['24/7', copy.hero.stat3Label],
                    ].map(([value, label], i) => (
                        <div key={label} className={`px-6 py-5 ${i ? 'border-t border-slate-200/70 sm:border-l sm:border-t-0' : ''}`}>
                            <div className="text-2xl font-semibold tracking-tight text-slate-950">{value}</div>
                            <div className="mt-1 text-sm text-slate-500">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
