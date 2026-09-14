import type { SiteCopy } from '@/types/site';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function RoadmapSection({ copy }: { copy: SiteCopy }) {
    const stageLabel: Record<string, string> = {
        live: copy.roadmap.live,
        next: copy.roadmap.next,
        later: copy.roadmap.later,
        vision: copy.roadmap.vision,
    };

    return (
        <section id="roadmap" className="section-pad overflow-hidden bg-[#061b33] text-white">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="[&_h2]:!text-white [&_p:last-child]:!text-slate-300">
                    <SectionHeading eyebrow={copy.roadmap.eyebrow} title={copy.roadmap.title} body={copy.roadmap.body} centered />
                </div>

                <div className="relative mx-auto mt-16 max-w-5xl">
                    <div className="absolute bottom-0 left-[17px] top-0 w-px bg-white/10 md:left-1/2" />
                    <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true, margin: '-120px' }} transition={{ duration: 1.8, ease: 'easeOut' }} className="absolute left-[17px] top-0 w-px bg-gradient-to-b from-teal-300 via-cyan-400 to-blue-500 md:left-1/2" />

                    <div className="space-y-8 md:space-y-2">
                        {copy.roadmap.items.map((item, index) => (
                            <Reveal key={item.title} delay={index * 0.08} className={`relative grid pl-12 md:grid-cols-2 md:pl-0 ${index % 2 ? '' : ''}`}>
                                <div className={`md:px-10 ${index % 2 ? 'md:col-start-2' : 'md:text-right'}`}>
                                    <div className={`rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                                        <span className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-200">{stageLabel[item.stage]}</span>
                                        <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
                                        <div className={`mt-5 flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            {item.features.map((feature) => <span key={feature} className="inline-flex items-center gap-1.5 rounded-full bg-white/7 px-3 py-1.5 text-xs text-slate-200"><Check size={12} className="text-teal-300" /> {feature}</span>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-0 top-7 grid h-9 w-9 place-items-center rounded-full border border-teal-300/40 bg-[#061b33] shadow-[0_0_0_7px_rgba(6,27,51,1)] md:left-1/2 md:-translate-x-1/2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
