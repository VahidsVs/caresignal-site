import type { SiteCopy } from '@/types/site';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function ProductShowcase({ copy }: { copy: SiteCopy }) {
    return (
        <section id="product" className="section-pad overflow-hidden">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr]">
                    <div>
                        <SectionHeading eyebrow={copy.product.eyebrow} title={copy.product.title} body={copy.product.body} />
                        <div className="mt-7 flex flex-wrap gap-2">
                            {copy.product.tags.map((tag, index) => (
                                <Reveal key={tag} delay={index * 0.04} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                    <CheckCircle2 size={15} className="text-teal-600" /> {tag}
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <motion.div initial={{ opacity: 0, x: 80, rotate: 1.5 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative lg:-mr-24">
                        <div className="absolute -inset-8 rounded-full bg-cyan-300/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-[0_30px_100px_rgba(30,78,120,0.18)]">
                            <img src="/images/caresignal-product.png" alt="CareSignal AI product screens" className="w-full rounded-[1.55rem]" loading="lazy" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
