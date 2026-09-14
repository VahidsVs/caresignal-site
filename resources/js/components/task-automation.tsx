import type { SiteCopy } from '@/types/site';
import { CalendarClock, FileStack, WandSparkles } from 'lucide-react';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function TaskAutomation({ copy }: { copy: SiteCopy }) {
    const nodes = [
        [FileStack, copy.automation.template, copy.automation.templateExample],
        [CalendarClock, copy.automation.schedule, copy.automation.scheduleExample],
        [WandSparkles, copy.automation.generated, copy.automation.generatedExample],
    ] as const;

    return (
        <section id="automation" className="section-pad bg-white">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <SectionHeading eyebrow={copy.automation.eyebrow} title={copy.automation.title} body={copy.automation.body} centered />
                <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-3">
                    {nodes.map(([Icon, title, example], index) => (
                        <Reveal key={title} delay={index * 0.1} className="relative">
                            <div className="h-full rounded-[1.75rem] border border-slate-200 bg-[#f8fbfd] p-6">
                                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white"><Icon size={20} /></div>
                                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">0{index + 1}</p>
                                <h3 className="mt-2 text-xl font-semibold text-slate-950">{title}</h3>
                                <p className="mt-4 rounded-2xl bg-white p-4 font-mono text-sm leading-6 text-slate-600 shadow-sm">{example}</p>
                            </div>
                            {index < 2 && <div className="absolute -bottom-4 left-1/2 z-10 grid h-8 w-8 -translate-x-1/2 rotate-90 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 lg:-right-4 lg:bottom-auto lg:left-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:rotate-0">→</div>}
                        </Reveal>
                    ))}
                </div>
                <Reveal className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-slate-500">{copy.automation.footnote}</Reveal>
            </div>
        </section>
    );
}
