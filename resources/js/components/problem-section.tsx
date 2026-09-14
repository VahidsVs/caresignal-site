import type { SiteCopy } from '@/types/site';
import { AlarmClock, Layers3, Radar } from 'lucide-react';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const icons = [Layers3, AlarmClock, Radar];

export function ProblemSection({ copy }: { copy: SiteCopy }) {
    return (
        <section className="section-pad bg-white">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <SectionHeading eyebrow={copy.problem.eyebrow} title={copy.problem.title} body={copy.problem.body} centered />
                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {copy.problem.cards.map((card, index) => {
                        const Icon = icons[index];
                        return (
                            <Reveal key={card.title} delay={index * 0.08} className="group rounded-3xl border border-slate-200 bg-slate-50/70 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5">
                                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-white text-teal-600 shadow-sm"><Icon size={23} /></div>
                                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
                                <p className="mt-3 leading-7 text-slate-600">{card.body}</p>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
