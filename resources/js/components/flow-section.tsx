import type { SiteCopy } from '@/types/site';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function FlowSection({ copy }: { copy: SiteCopy }) {
    return (
        <section className="section-pad relative overflow-hidden bg-[#061b33] text-white">
            <div className="dark-grid absolute inset-0 opacity-60" />
            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                <div className="[&_h2]:!text-white [&_p:last-child]:!text-slate-300">
                    <SectionHeading eyebrow={copy.flow.eyebrow} title={copy.flow.title} body={copy.flow.body} />
                </div>
                <div className="mt-14 grid gap-3 lg:grid-cols-4">
                    {copy.flow.steps.map((step, index) => (
                        <Reveal key={step.number} delay={index * 0.08} className="relative">
                            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
                                <span className="text-xs font-semibold tracking-[0.2em] text-teal-300">{step.number}</span>
                                <h3 className="mt-7 text-xl font-semibold">{step.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-300">{step.body}</p>
                            </div>
                            {index < copy.flow.steps.length - 1 && <ArrowRight size={18} className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-teal-300 lg:block" />}
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
